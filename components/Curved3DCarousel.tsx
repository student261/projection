"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SafeImage from "@/components/SafeImage";

export interface CurvedCarouselItem {
  title: string;
  desc: string;
  img: string;
  href?: string;
  tags?: string[];
}

interface Curved3DCarouselProps {
  items: CurvedCarouselItem[];
  autoPlaySpeed?: number; // degrees per second
}

export default function Curved3DCarousel({
  items,
  autoPlaySpeed = 8,
}: Curved3DCarouselProps) {
  // Ensure totalSlots is a clean multiple of items.length so items loop seamlessly
  // without any duplicates appearing next to each other on the screen
  const itemCount = items.length;
  const multiplier = Math.max(3, Math.ceil(12 / Math.max(itemCount, 1)));
  const totalSlots = itemCount * multiplier;
  const slotItems = Array.from({ length: totalSlots }, (_, i) => items[i % itemCount]);
  const angleStep = 360 / totalSlots;

  const [viewportWidth, setViewportWidth] = useState(1200);

  // Animation and physics refs
  const rotationRef = useRef(0);
  const targetRotationRef = useRef(0);
  const isDraggingRef = useRef(false);
  const startXRef = useRef(0);
  const startRotationRef = useRef(0);
  const lastXRef = useRef(0);
  const velocityRef = useRef(0);
  const isHoveredRef = useRef(false);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const hasDraggedRef = useRef(false);

  // Resize handler
  useEffect(() => {
    const handleResize = () => {
      setViewportWidth(window.innerWidth);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Update card positions directly via DOM transforms for 60/120 FPS performance
  // Deep Z-depth perspective: center card is recessed deep into the screen (-Z)
  // Outer wing cards wrap forward toward the viewer (+Z)
  const updateCardTransforms = useCallback((rot: number) => {
    const isMobile = viewportWidth < 640;
    const isTablet = viewportWidth >= 640 && viewportWidth < 1024;

    const baseZ = isMobile ? -80 : isTablet ? -110 : -140; // Recessed deep into back
    const z1 = isMobile ? -10 : isTablet ? -15 : -20;
    const z2 = isMobile ? 80 : isTablet ? 115 : 155; // Pushed forward

    const step1X = isMobile ? 180 : isTablet ? 250 : 320;
    const step2X = isMobile ? 315 : isTablet ? 450 : 575;

    const rot1 = isMobile ? 26 : isTablet ? 30 : 33;
    const rot2 = isMobile ? 46 : isTablet ? 52 : 57;

    // Strict angle bound ensures only up to 2 wings on each side (max 5 unique cards) are visible on screen
    const maxAngle = isMobile ? 1.35 * angleStep : 2.2 * angleStep;
    const fadeStart = isMobile ? 0.9 * angleStep : 1.7 * angleStep;

    for (let i = 0; i < totalSlots; i++) {
      const el = cardRefs.current[i];
      if (!el) continue;

      let angle = (i * angleStep - rot) % 360;
      if (angle > 180) angle -= 360;
      if (angle < -180) angle += 360;

      const absAngle = Math.abs(angle);

      if (absAngle <= maxAngle) {
        const dirSign = angle > 0 ? 1 : angle < 0 ? -1 : 0;
        let x = 0;
        let z = baseZ;
        let rotY = 0;

        if (absAngle <= angleStep) {
          const t = absAngle / angleStep;
          x = dirSign * step1X * t;
          z = baseZ + (z1 - baseZ) * t;
          rotY = -dirSign * rot1 * t;
        } else {
          const t = Math.min((absAngle - angleStep) / angleStep, 1.4);
          x = dirSign * (step1X + (step2X - step1X) * t);
          z = z1 + (z2 - z1) * t;
          rotY = -dirSign * (rot1 + (rot2 - rot1) * t);
        }

        // Smooth fade out near the outer periphery
        let opacity = 1;
        if (absAngle > fadeStart) {
          opacity = Math.max(0, 1 - (absAngle - fadeStart) / (maxAngle - fadeStart));
        }

        const zIndex = Math.round(z + 200);

        // 3D perspective shading: subtle brightness contrast with depth
        const brightness = (0.86 + 0.14 * (1 - absAngle / (maxAngle * 1.2))).toFixed(2);

        el.style.transform = `translateX(${x.toFixed(1)}px) translateZ(${z.toFixed(1)}px) rotateY(${rotY.toFixed(1)}deg)`;
        el.style.opacity = opacity.toFixed(2);
        el.style.zIndex = `${zIndex}`;
        el.style.filter = `brightness(${brightness})`;
        el.style.pointerEvents = opacity > 0.4 ? "auto" : "none";
        el.style.visibility = "visible";
      } else {
        el.style.opacity = "0";
        el.style.pointerEvents = "none";
        el.style.visibility = "hidden";
        el.style.zIndex = "0";
      }
    }
  }, [viewportWidth, totalSlots, angleStep]);

  // Main 60 FPS animation loop
  useEffect(() => {
    let animId: number;
    let lastTime = performance.now();

    const loop = (currentTime: number) => {
      const dt = Math.min((currentTime - lastTime) / 1000, 0.1);
      lastTime = currentTime;

      if (!isDraggingRef.current) {
        if (!isHoveredRef.current) {
          // Auto-rotate continuously toward the right side
          targetRotationRef.current -= autoPlaySpeed * dt;
        }

        // Apply inertia dampening if user recently flicked
        if (Math.abs(velocityRef.current) > 0.1) {
          targetRotationRef.current += velocityRef.current * dt;
          velocityRef.current *= 0.92;
        }
      }

      // Smooth lerp towards target rotation
      const diff = targetRotationRef.current - rotationRef.current;
      rotationRef.current += diff * (isDraggingRef.current ? 0.35 : 0.15);

      updateCardTransforms(rotationRef.current);
      animId = requestAnimationFrame(loop);
    };

    animId = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(animId);
  }, [autoPlaySpeed, updateCardTransforms]);

  // Touch gesture handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    isDraggingRef.current = true;
    hasDraggedRef.current = false;
    startXRef.current = e.touches[0].clientX;
    lastXRef.current = e.touches[0].clientX;
    startRotationRef.current = targetRotationRef.current;
    velocityRef.current = 0;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDraggingRef.current) return;
    const currentX = e.touches[0].clientX;
    const deltaX = currentX - startXRef.current;
    if (Math.abs(deltaX) > 8) {
      hasDraggedRef.current = true;
    }

    const instantDelta = currentX - lastXRef.current;
    velocityRef.current = -instantDelta * 1.8;
    lastXRef.current = currentX;

    const sensitivity = viewportWidth < 640 ? 0.22 : 0.16;
    targetRotationRef.current = startRotationRef.current - deltaX * sensitivity;
  };

  const handleTouchEnd = () => {
    isDraggingRef.current = false;
    setTimeout(() => {
      hasDraggedRef.current = false;
    }, 60);
  };

  // Mouse drag handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    isDraggingRef.current = true;
    hasDraggedRef.current = false;
    startXRef.current = e.clientX;
    lastXRef.current = e.clientX;
    startRotationRef.current = targetRotationRef.current;
    velocityRef.current = 0;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDraggingRef.current) return;
    const currentX = e.clientX;
    const deltaX = currentX - startXRef.current;
    if (Math.abs(deltaX) > 8) {
      hasDraggedRef.current = true;
    }

    const instantDelta = currentX - lastXRef.current;
    velocityRef.current = -instantDelta * 1.6;
    lastXRef.current = currentX;

    const sensitivity = viewportWidth < 640 ? 0.22 : 0.16;
    targetRotationRef.current = startRotationRef.current - deltaX * sensitivity;
  };

  const handleMouseUp = () => {
    isDraggingRef.current = false;
    setTimeout(() => {
      hasDraggedRef.current = false;
    }, 60);
  };

  // Click on a card smoothly centers it
  const handleCardClick = (index: number) => {
    if (hasDraggedRef.current) return;
    const target = index * angleStep;
    const current = targetRotationRef.current;
    const diff = (target - current) % 360;
    let normalizedDiff = diff;
    if (normalizedDiff > 180) normalizedDiff -= 360;
    if (normalizedDiff < -180) normalizedDiff += 360;

    targetRotationRef.current = current + normalizedDiff;
  };

  return (
    <div
      className="relative w-full select-none pt-0 pb-4 sm:pb-6 cursor-grab active:cursor-grabbing"
      onMouseEnter={() => {
        isHoveredRef.current = true;
      }}
      onMouseLeave={() => {
        isHoveredRef.current = false;
        handleMouseUp();
      }}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    >
      {/* 3D Perspective Stage with deep focal distance */}
      <div
        className="relative mx-auto flex items-center justify-center overflow-visible"
        style={{
          perspective:
            viewportWidth < 640
              ? "600px"
              : viewportWidth < 1024
              ? "700px"
              : "800px",
          perspectiveOrigin: "center center",
          height:
            viewportWidth < 640
              ? "210px"
              : viewportWidth < 1024
              ? "250px"
              : "300px",
        }}
      >
        <div
          className="relative w-full h-full flex items-center justify-center pointer-events-none"
          style={{ transformStyle: "preserve-3d" }}
        >
          {slotItems.map((item, index) => {
            return (
              <div
                key={index}
                ref={(el) => {
                  cardRefs.current[index] = el;
                }}
                onClick={() => handleCardClick(index)}
                className="absolute will-change-transform cursor-pointer transition-shadow duration-300"
                style={{
                  width:
                    viewportWidth < 640
                      ? "220px"
                      : viewportWidth < 1024
                      ? "270px"
                      : "320px",
                  height:
                    viewportWidth < 640
                      ? "165px"
                      : viewportWidth < 1024
                      ? "205px"
                      : "245px",
                }}
              >
                {/* Card Container (Image 1 Styling: Full Bleed Photo, Rounded-2xl, Bottom Gradient, Bold White Text, Lilac Frosted Button) */}
                <div className="group relative w-full h-full rounded-2xl overflow-hidden shadow-2xl shadow-black/80 bg-neutral-950 border border-white/10 transition-transform duration-300 hover:scale-[1.03]">
                  {/* Full Bleed Image with Eager Loading */}
                  <SafeImage
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    containerClassName="w-full h-full"
                    priority
                    loading="eager"
                  />

                  {/* Gradient Overlay for Text Readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent pointer-events-none" />

                  {/* Bottom Content Area */}
                  <div className="absolute inset-x-0 bottom-0 p-3.5 sm:p-5 flex items-end justify-between gap-2 z-10 pointer-events-auto">
                    <div className="min-w-0 flex-1">
                      <h3 className="text-xs sm:text-base lg:text-lg font-bold text-white tracking-tight leading-snug drop-shadow-md">
                        {item.title}
                      </h3>
                      <p className="text-[10px] sm:text-xs text-white/80 line-clamp-1 sm:line-clamp-2 mt-0.5 sm:mt-1 leading-relaxed font-light drop-shadow">
                        {item.desc}
                      </p>
                    </div>

                    {/* Circular Action Arrow Button (Image 1 Frosted Soft Lilac Aesthetic) */}
                    {item.href ? (
                      <Link
                        href={item.href}
                        onClick={(e) => {
                          if (hasDraggedRef.current) {
                            e.preventDefault();
                          }
                        }}
                        className="w-7 h-7 sm:w-10 sm:h-10 rounded-full bg-[#9B99E9]/45 hover:bg-[#9B99E9]/70 active:scale-95 text-white backdrop-blur-md border border-white/35 flex items-center justify-center shrink-0 shadow-lg transition-all duration-300 group-hover:scale-110"
                        aria-label={`Learn more about ${item.title}`}
                      >
                        <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white transition-transform group-hover:translate-x-0.5" />
                      </Link>
                    ) : (
                      <button
                        type="button"
                        className="w-7 h-7 sm:w-10 sm:h-10 rounded-full bg-[#9B99E9]/45 hover:bg-[#9B99E9]/70 active:scale-95 text-white backdrop-blur-md border border-white/35 flex items-center justify-center shrink-0 shadow-lg transition-all duration-300 group-hover:scale-110"
                        aria-label={`View ${item.title}`}
                      >
                        <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white transition-transform group-hover:translate-x-0.5" />
                      </button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
