"use client";
import { useEffect, useRef } from "react";

const DOT_SIZE = 6;
const RING_SIZE = 32;

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return; // skip on touch devices

    let mouseX = 0, mouseY = 0;
    let ringX = 0, ringY = 0;
    let rafId: number | null = null;
    let isLoopRunning = false;

    const animateRing = () => {
      const dx = mouseX - ringX;
      const dy = mouseY - ringY;

      // When close enough, snap to position and sleep
      if (Math.abs(dx) < 0.2 && Math.abs(dy) < 0.2) {
        ringX = mouseX;
        ringY = mouseY;
        if (ringRef.current) {
          ringRef.current.style.transform = `translate3d(${ringX - RING_SIZE / 2}px, ${ringY - RING_SIZE / 2}px, 0)`;
        }
        isLoopRunning = false;
        rafId = null;
        return;
      }

      ringX += dx * 0.18;
      ringY += dy * 0.18;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringX - RING_SIZE / 2}px, ${ringY - RING_SIZE / 2}px, 0)`;
      }

      rafId = requestAnimationFrame(animateRing);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouseX - DOT_SIZE / 2}px, ${mouseY - DOT_SIZE / 2}px, 0)`;
      }

      if (!isLoopRunning) {
        isLoopRunning = true;
        rafId = requestAnimationFrame(animateRing);
      }
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (rafId !== null) {
        cancelAnimationFrame(rafId);
      }
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="hidden md:block fixed top-0 left-0 w-1.5 h-1.5 rounded-full bg-white pointer-events-none z-[9999] will-change-transform" />
      <div ref={ringRef} className="hidden md:block fixed top-0 left-0 w-8 h-8 rounded-full border border-white/50 pointer-events-none z-[9999] will-change-transform transition-[width,height,border-color] duration-200" />
    </>
  );
}
