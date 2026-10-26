"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import Link from "next/link";
import SafeImage from "@/components/SafeImage";

interface SlideData {
  id: string;
  counter: string;
  tag: string;
  title: string;
  desc: string;
  href: string;
  cta: string;
  img: string;
  video?: string;
  videoPosition?: string;
  tabLabel: string;
}

const slides: SlideData[] = [
  {
    id: "interactive-projection",
    counter: "01 / 04",
    tag: "Interactive Projection",
    title: "Interactive Floor & Wall Projection",
    desc: "Floors and walls that react with motion-sensing visuals as people walk or touch the surface.",
    href: "/solutions/interactive-projection",
    cta: "Explore Floors & Walls",
    img: "/images/interactive_floor_motion.webp",
    video: "/interactive-space.mp4",
    videoPosition: "center center",
    tabLabel: "Interactive Floor & Wall",
  },
  {
    id: "immersive-experiences",
    counter: "02 / 04",
    tag: "Immersive Environments",
    title: "360° Immersive Rooms",
    desc: "Surround entire rooms in floor-to-ceiling projection mapping and panoramic sound.",
    href: "/solutions/immersive-environment",
    cta: "Explore Immersive Rooms",
    img: "/images/biosphere_ocean_gallery.webp",
    video: "/immersive-environment-1.mp4",
    videoPosition: "center 25%",
    tabLabel: "360° Immersive Rooms",
  },
  {
    id: "ai-experiences",
    counter: "03 / 04",
    tag: "AI Displays",
    title: "AI Avatars & Smart Mirror Displays",
    desc: "Conversational digital characters, smart mirrors, and AI photo booths that talk with guests.",
    href: "/solutions/ai-experience",
    cta: "Explore AI & Smart Displays",
    img: "/images/corporate_lobby_wall.webp",
    video: "/ai-receptionist-showreel.mp4",
    videoPosition: "center center",
    tabLabel: "AI Avatars & Smart Mirrors",
  },
  {
    id: "interactive-engagement",
    counter: "04 / 04",
    tag: "Active Engagement",
    title: "Interactive Motion Games & Active Play",
    desc: "Multiplayer floor games, digital sand tables, and gesture challenges that get people moving together.",
    href: "/solutions/interactive-engagement",
    cta: "Explore Interactive Games",
    img: "/images/entertainment_motion_arena.webp",
    video: "/smart-engagement.mp4",
    videoPosition: "center center",
    tabLabel: "Motion Games & Play",
  },
];

const AUTOPLAY_DURATION = 6000; // 6 seconds per slide

export default function WhatWeBuild() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isInView, setIsInView] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  // Viewport intersection observer: manages video playback and autoplay
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const inView = entry.isIntersecting;
        setIsInView(inView);
        if (videoRef.current) {
          if (inView) {
            videoRef.current.play().catch(() => {});
          } else {
            videoRef.current.pause();
          }
        }
      },
      { threshold: 0, rootMargin: "150px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Jump to specific slide - instant response
  const goToSlide = useCallback((targetIdx: number) => {
    if (targetIdx === activeIdx) return;
    setDirection(targetIdx > activeIdx ? 1 : -1);
    setActiveIdx(targetIdx);
  }, [activeIdx]);

  const nextSlide = useCallback(() => {
    setDirection(1);
    setActiveIdx((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setDirection(-1);
    setActiveIdx((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  // Autoplay timer: automatically advances every 6 seconds when in view
  useEffect(() => {
    if (!isInView) return;

    const timer = setTimeout(() => {
      setDirection(1);
      setActiveIdx((prev) => (prev + 1) % slides.length);
    }, AUTOPLAY_DURATION);

    return () => clearTimeout(timer);
  }, [activeIdx, isInView]);

  // Touch swipe support for mobile
  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null || touchStartY.current === null) return;
    const diffX = touchStartX.current - e.changedTouches[0].clientX;
    const diffY = touchStartY.current - e.changedTouches[0].clientY;

    // Horizontal swipe threshold: 45px and more horizontal than vertical
    if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 45) {
      if (diffX > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }
    touchStartX.current = null;
    touchStartY.current = null;
  };

  const currentSlide = slides[activeIdx];

  // Hardware-accelerated directional curtain reveal wipe variants
  const wipeVariants: Variants = {
    enter: (dir: number) => ({
      y: dir > 0 ? "100%" : "-100%",
      zIndex: 2,
    }),
    center: {
      y: "0%",
      zIndex: 2,
      transition: {
        duration: 0.55,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
    exit: (dir: number) => ({
      y: dir > 0 ? "-20%" : "20%",
      opacity: 0.35,
      zIndex: 1,
      transition: {
        duration: 0.45,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    }),
  };

  // Parallax counter-movement on inner container so video/image stays stationary while curtain wipes
  const innerVariants: Variants = {
    enter: (dir: number) => ({
      y: dir > 0 ? "-100%" : "100%",
    }),
    center: {
      y: "0%",
      transition: {
        duration: 0.55,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
    exit: (dir: number) => ({
      y: dir > 0 ? "20%" : "-20%",
      transition: {
        duration: 0.45,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    }),
  };

  // Crisp text layer staggered animations with GPU-accelerated opacity & translation (no blur filters)
  const textVariant = (delay: number): Variants => ({
    enter: (dir: number) => ({
      opacity: 0,
      y: dir > 0 ? 20 : -20,
    }),
    center: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: [0.16, 1, 0.3, 1] as const,
        delay,
      },
    },
    exit: (dir: number) => ({
      opacity: 0,
      y: dir > 0 ? -12 : 12,
      transition: {
        duration: 0.18,
        ease: "easeIn",
      },
    }),
  });

  return (
    <section
      id="what-we-build"
      ref={containerRef}
      className="relative w-full h-[100dvh] min-h-[600px] max-h-[1080px] bg-[#0D0D0D] text-white overflow-hidden select-none"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      aria-label="What We Build"
    >
      {/* Background Image Slides Stack */}
      <div className="absolute inset-0 z-0 overflow-hidden bg-black">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentSlide.id}
            custom={direction}
            variants={wipeVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="absolute inset-0 w-full h-full overflow-hidden will-change-transform"
          >
            <motion.div
              custom={direction}
              variants={innerVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="w-full h-full relative will-change-transform"
            >
              {currentSlide.video ? (
                <video
                  ref={(el) => {
                    videoRef.current = el;
                    if (el) {
                      el.muted = true;
                      if (isInView) {
                        el.play().catch(() => {});
                      } else {
                        el.pause();
                      }
                    }
                  }}
                  key={currentSlide.video}
                  src={currentSlide.video}
                  poster={currentSlide.img}
                  autoPlay={isInView}
                  loop
                  muted
                  playsInline
                  preload="metadata"
                  className="w-full h-full object-cover opacity-85 pointer-events-none"
                  style={{
                    objectPosition: currentSlide.videoPosition || "center center",
                  }}
                />
              ) : (
                <SafeImage
                  src={currentSlide.img}
                  alt={currentSlide.title}
                  className="w-full h-full object-cover opacity-90"
                  style={{
                    objectPosition: currentSlide.videoPosition || "center center",
                  }}
                  containerClassName="w-full h-full"
                  priority
                />
              )}

              {/* Cinematic Vignette & Ambient Gradient Overlays */}
              <div 
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.35) 45%, rgba(0,0,0,0.15) 100%), linear-gradient(to right, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.35) 50%, rgba(0,0,0,0.2) 100%)",
                }}
              />
              <div 
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(circle at center, transparent 35%, rgba(0,0,0,0.5) 100%)",
                }}
              />
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Foreground Content Rail */}
      <div className="relative z-20 w-[92%] max-w-7xl 2xl:max-w-[1536px] h-full mx-auto flex flex-col justify-between pt-16 sm:pt-20 lg:pt-24 pb-8 sm:pb-10 lg:pb-12">
        {/* Top Eyebrow */}
        <div className="flex items-center gap-3">
          <span className="text-[11px] sm:text-xs uppercase tracking-[0.22em] text-white/90 font-light drop-shadow">
            Choose What Your Space Needs
          </span>
        </div>

        {/* Center Main Text Area */}
        <div className="max-w-3xl lg:max-w-5xl my-auto py-2 sm:py-4">
          <AnimatePresence mode="popLayout" custom={direction}>
            <motion.div
              key={currentSlide.id}
              custom={direction}
              initial="enter"
              animate="center"
              exit="exit"
              className="space-y-2.5 sm:space-y-4"
            >
              {/* Tag Pill Badge */}
              <motion.div variants={textVariant(0.02)}>
                <span className="inline-flex items-center h-6 sm:h-7 px-3 sm:px-3.5 rounded-full border border-white/35 bg-white/[0.08] backdrop-blur-md text-[10px] sm:text-[11px] uppercase tracking-[0.18em] font-medium text-white shadow-sm">
                  {currentSlide.tag}
                </span>
              </motion.div>

              {/* Main Title */}
              <motion.h2
                variants={textVariant(0.06)}
                className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[4.2rem] font-bold text-white tracking-tight leading-[1.08] sm:leading-[1.05] drop-shadow-lg"
              >
                {currentSlide.title}
              </motion.h2>

              {/* Description */}
              <motion.p
                variants={textVariant(0.1)}
                className="text-xs sm:text-base lg:text-lg text-white/85 font-light leading-relaxed max-w-xl drop-shadow line-clamp-3 sm:line-clamp-none"
              >
                {currentSlide.desc}
              </motion.p>

              {/* Explore CTA Button with arrow */}
              <motion.div variants={textVariant(0.14)} className="pt-1 sm:pt-2">
                <Link
                  href={currentSlide.href}
                  className="inline-flex items-center gap-2.5 text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase text-white hover:text-white/80 transition-all group/cta py-1.5"
                >
                  <span className="relative pb-0.5">
                    {currentSlide.cta}
                    <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-white transition-all duration-300 group-hover/cta:w-full" />
                  </span>
                  <svg
                    viewBox="0 0 12 12"
                    fill="none"
                    aria-hidden="true"
                    className="w-3.5 h-3.5 text-white transform group-hover/cta:translate-x-1 group-hover/cta:-translate-y-0.5 transition-transform duration-300 shrink-0"
                  >
                    <path
                      d="M1.5 10.5L10.5 1.5M10.5 1.5V9M10.5 1.5H3"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Bottom 4-Column Tabs */}
        <div className="w-full max-w-[1050px] grid grid-cols-4 gap-2.5 sm:gap-6 lg:gap-8 pt-3 sm:pt-6 border-t border-white/10">
          {slides.map((slide, idx) => {
            const isActive = idx === activeIdx;
            return (
              <button
                key={slide.id}
                type="button"
                onClick={() => goToSlide(idx)}
                className="text-left group cursor-pointer focus:outline-none transition-opacity duration-300 min-w-0"
                aria-label={`Jump to ${slide.tabLabel}`}
              >
                {/* Tab Indicator Line */}
                <div className="relative w-full h-[2px] bg-white/20 mb-1.5 sm:mb-2.5 rounded-full overflow-hidden">
                  {/* Inactive hover highlight */}
                  <div
                    className={`absolute inset-0 bg-white/40 transition-transform duration-300 origin-left ${
                      isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                    }`}
                  />
                  {/* Active progress fill */}
                  {isActive && (
                    <motion.div
                      key={`bar-${activeIdx}`}
                      className="absolute inset-0 bg-white shadow-[0_0_8px_rgba(255,255,255,0.8)] origin-left"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{
                        duration: AUTOPLAY_DURATION / 1000,
                        ease: "linear",
                      }}
                      style={{ transformOrigin: "left" }}
                    />
                  )}
                </div>

                {/* Tab Label */}
                <span
                  className={`text-[10px] sm:text-[13px] lg:text-sm font-medium leading-tight sm:leading-snug block truncate sm:whitespace-normal transition-all duration-300 ${
                    isActive
                      ? "text-white font-semibold drop-shadow"
                      : "text-white/45 group-hover:text-white/80"
                  }`}
                >
                  {slide.tabLabel}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
