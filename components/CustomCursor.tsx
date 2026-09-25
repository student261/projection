"use client";

import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(true); // default true for SSR safety

  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  const mousePos = useRef({ x: -100, y: -100 });
  const ringPos = useRef({ x: -100, y: -100 });
  const rafId = useRef<number | null>(null);

  useEffect(() => {
    // 1. Strict touch & pointer capability verification
    // Mobile phones and tablets (iOS Safari, Android) report hover: none or pointer: coarse
    const hasFinePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    if (!hasFinePointer) {
      setIsTouchDevice(true);
      return;
    }

    setIsTouchDevice(false);
    let active = true;

    // 2. High-performance, silky-smooth 60-120fps ring interpolation loop
    const render = () => {
      if (!active) return;

      const dx = mousePos.current.x - ringPos.current.x;
      const dy = mousePos.current.y - ringPos.current.y;

      // Snappy 0.32 easing: eliminates lag while preserving luxury fluid feel
      ringPos.current.x += dx * 0.32;
      ringPos.current.y += dy * 0.32;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringPos.current.x}px, ${ringPos.current.y}px, 0)`;
      }

      rafId.current = requestAnimationFrame(render);
    };

    const handlePointerMove = (e: PointerEvent) => {
      // If the interaction originates from touch or stylus, suppress immediately
      if (e.pointerType === "touch" || e.pointerType === "pen") {
        setIsVisible(false);
        setIsTouchDevice(true);
        return;
      }

      mousePos.current.x = e.clientX;
      mousePos.current.y = e.clientY;

      if (!isVisible) {
        // Snap ring immediately on initial entry so it never flies in from (0,0)
        ringPos.current.x = e.clientX;
        ringPos.current.y = e.clientY;
        setIsVisible(true);
      }

      // Direct, zero-latency hardware transform for the center dot
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }

      // Detect hover over interactive elements (links, buttons, inputs)
      const target = e.target as HTMLElement | null;
      if (target) {
        const isInteractive = Boolean(
          target.closest("a, button, input, textarea, select, [role='button'], [data-cursor-hover]")
        );
        setIsHovered(isInteractive);
      }
    };

    const handlePointerDown = (e: PointerEvent) => {
      if (e.pointerType === "touch" || e.pointerType === "pen") {
        setIsVisible(false);
        setIsTouchDevice(true);
        return;
      }
      setIsClicking(true);
    };

    const handlePointerUp = () => {
      setIsClicking(false);
    };

    const handleMouseLeave = () => {
      // Cursor left the browser window or hovered over browser UI: hide immediately to prevent sticking
      setIsVisible(false);
    };

    const handleMouseEnter = (e: MouseEvent) => {
      mousePos.current.x = e.clientX;
      mousePos.current.y = e.clientY;
      ringPos.current.x = e.clientX;
      ringPos.current.y = e.clientY;
      setIsVisible(true);
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    window.addEventListener("pointerdown", handlePointerDown, { passive: true });
    window.addEventListener("pointerup", handlePointerUp, { passive: true });
    document.documentElement.addEventListener("mouseleave", handleMouseLeave);
    document.documentElement.addEventListener("mouseenter", handleMouseEnter);

    rafId.current = requestAnimationFrame(render);

    return () => {
      active = false;
      if (rafId.current) cancelAnimationFrame(rafId.current);
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerdown", handlePointerDown);
      window.removeEventListener("pointerup", handlePointerUp);
      document.documentElement.removeEventListener("mouseleave", handleMouseLeave);
      document.documentElement.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [isVisible]);

  // NEVER render on mobile, tablet, or touch devices
  if (isTouchDevice) return null;

  return (
    <div
      className={`pointer-events-none fixed inset-0 z-[99999] overflow-hidden transition-opacity duration-150 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      aria-hidden="true"
    >
      {/* Inner Precision Dot (Zero latency, centered at clientX/Y) */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-2 h-2 -ml-1 -mt-1 rounded-full bg-white pointer-events-none will-change-transform shadow-[0_0_8px_rgba(255,255,255,0.9)]"
      />

      {/* Outer Fluid Follower Ring */}
      <div
        ref={ringRef}
        className={`fixed top-0 left-0 rounded-full border pointer-events-none will-change-transform transition-[width,height,margin,border-color,background-color] duration-150 ease-out ${
          isHovered
            ? "w-11 h-11 -ml-[22px] -mt-[22px] border-white/80 bg-white/10 backdrop-blur-[0.5px]"
            : isClicking
            ? "w-6 h-6 -ml-3 -mt-3 border-white bg-white/20"
            : "w-8 h-8 -ml-4 -mt-4 border-white/45 bg-transparent"
        }`}
      />
    </div>
  );
}
