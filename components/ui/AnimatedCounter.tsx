"use client";

import { useEffect, useState, useRef } from "react";

interface AnimatedCounterProps {
  from?: number;
  to: number;
  duration?: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
}

export default function AnimatedCounter({
  from = 0,
  to,
  duration = 1.8,
  decimals = 0,
  prefix = "",
  suffix = "",
  className = "",
}: AnimatedCounterProps) {
  const format = (val: number) => `${prefix}${val.toFixed(decimals)}${suffix}`;

  // Initialize with target 'to' value so SSR, initial HTML, and fast visual scans NEVER show 0
  const [displayValue, setDisplayValue] = useState<string>(() => format(to));
  const hasAnimatedRef = useRef(false);

  useEffect(() => {
    // If reduced motion is preferred, keep real target number directly
    const prefersReducedMotion = typeof window !== "undefined" && 
      window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;
    if (prefersReducedMotion) {
      setDisplayValue(format(to));
      return;
    }

    if (hasAnimatedRef.current) return;
    hasAnimatedRef.current = true;

    // Start counting smoothly from 'from' to 'to'
    setDisplayValue(format(from));

    let startTime: number | null = null;
    let animationFrameId: number;

    // Smooth cubic ease-out
    const easeOutExpo = (t: number): number => {
      return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
    };

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = (timestamp - startTime) / 1000;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = easeOutExpo(progress);
      const current = from + (to - from) * easedProgress;

      setDisplayValue(format(current));

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(step);
      } else {
        setDisplayValue(format(to));
      }
    };

    animationFrameId = requestAnimationFrame(step);

    return () => {
      cancelAnimationFrame(animationFrameId);
      // Guarantee final real target value
      setDisplayValue(format(to));
    };
  }, [from, to, duration, decimals, prefix, suffix]);

  return (
    <span className={`inline-block font-black ${className}`}>
      {displayValue}
    </span>
  );
}
