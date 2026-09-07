"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, motion, animate } from "framer-motion";

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
  duration = 2,
  decimals = 0,
  prefix = "",
  suffix = "",
  className = "",
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [displayValue, setDisplayValue] = useState(
    `${prefix}${from.toFixed(decimals)}${suffix}`
  );

  useEffect(() => {
    if (!isInView) return;

    const controls = animate(from, to, {
      duration,
      ease: [0.16, 1, 0.3, 1], // Smooth cubic-bezier easeOut
      onUpdate(value) {
        setDisplayValue(`${prefix}${value.toFixed(decimals)}${suffix}`);
      },
    });

    return () => controls.stop();
  }, [isInView, from, to, duration, decimals, prefix, suffix]);

  return (
    <motion.span
      ref={ref}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`inline-block  font-black ${className}`}
    >
      {displayValue}
    </motion.span>
  );
}
