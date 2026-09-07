"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// TODO: Replace with verified press quotes or real client testimonials once confirmed.
const quotes = [
  {
    quote: "PROJECTION Studio: Delivering cutting-edge, spatial-ready visuals and responsive interactive motion technology.",
    source: "Industry Review",
    tag: "Spatial Tech Showcase",
    year: "2025"
  },
  {
    quote: "The curated experience is a masterful mix of spatial light, motion projection, and immersive sound design.",
    source: "Tech & Art Journal",
    tag: "Behind the Scenes",
    year: "2025"
  },
];

export default function PressQuotes() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % quotes.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 bg-black text-white border-t border-black/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="min-h-[160px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -14 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-4 max-w-3xl mx-auto"
            >
              <p className="text-xl sm:text-2xl lg:text-[1.8rem] font-light text-white leading-relaxed tracking-tight">
                &ldquo;{quotes[current].quote}&rdquo;
              </p>
              <div className="text-[10px] uppercase tracking-[0.2em] text-white/50">
                {quotes[current].source} — {quotes[current].tag} ({quotes[current].year})
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {quotes.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`h-[2px] transition-all duration-300 ${
                current === idx ? "w-8 bg-white" : "w-3 bg-white/20"
              }`}
              aria-label={`Go to quote ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
