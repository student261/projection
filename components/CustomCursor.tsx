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
    let rafId: number;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dotRef.current?.style.setProperty(
        "transform",
        `translate3d(${mouseX - DOT_SIZE / 2}px, ${mouseY - DOT_SIZE / 2}px, 0)`
      );
    };

    const animateRing = () => {
      // reads CURRENT mouseX/mouseY every frame — no stale position
      ringX += (mouseX - ringX) * 0.15;
      ringY += (mouseY - ringY) * 0.15;
      ringRef.current?.style.setProperty(
        "transform",
        `translate3d(${ringX - RING_SIZE / 2}px, ${ringY - RING_SIZE / 2}px, 0)`
      );
      rafId = requestAnimationFrame(animateRing);
    };

    window.addEventListener("mousemove", handleMouseMove);
    rafId = requestAnimationFrame(animateRing);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="fixed top-0 left-0 w-1.5 h-1.5 rounded-full bg-white pointer-events-none z-[9999] will-change-transform" />
      <div ref={ringRef} className="fixed top-0 left-0 w-8 h-8 rounded-full border border-white/50 pointer-events-none z-[9999] will-change-transform transition-[width,height,border-color] duration-200" />
    </>
  );
}
