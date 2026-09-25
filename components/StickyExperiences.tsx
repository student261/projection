"use client";

import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import SafeImage from '@/components/SafeImage';
import { motion, AnimatePresence } from 'framer-motion';

interface ExperienceItem {
  title: string;
  desc: string;
  tags?: string[];
  img: string;
  href?: string;
}

export default function StickyExperiences({ items }: { items: ExperienceItem[] }) {
  const [activeIndex, setActiveIndex] = useState(0);

  if (!items || items.length === 0) return null;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
      
      {/* LEFT COLUMN: Clean Interactive Selector with Full Visibility for Every Item */}
      <div className="lg:col-span-6 order-2 lg:order-1 flex flex-col space-y-2 sm:space-y-3">
        {items.map((exp, idx) => {
          const isActive = activeIndex === idx;
          const num = (idx + 1).toString().padStart(2, "0");

          return (
            <div
              key={idx}
              onMouseEnter={() => setActiveIndex(idx)}
              onClick={() => setActiveIndex(idx)}
              className={`group text-left transition-all duration-300 cursor-pointer p-3 sm:p-3.5 rounded-2xl select-none border ${
                isActive 
                  ? 'bg-neutral-50 border-neutral-200/80 shadow-sm' 
                  : 'bg-transparent border-transparent hover:bg-neutral-50/50 hover:border-neutral-100'
              }`}
            >
              {/* Header row: Number + Title + Category Tag */}
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3 sm:gap-4">
                  <span className={`text-xs sm:text-sm font-mono transition-colors duration-200 ${
                    isActive ? 'font-black text-black' : 'font-medium text-neutral-400 group-hover:text-neutral-700'
                  }`}>
                    {num}
                  </span>
                  <h3 className={`transition-all duration-200 tracking-tight ${
                    isActive 
                      ? 'text-base sm:text-lg lg:text-xl font-black text-black' 
                      : 'text-sm sm:text-base font-bold text-neutral-600 group-hover:text-black'
                  }`}>
                    {exp.title}
                  </h3>
                </div>
              </div>

              {/* Description Body: clean and only subtle for active item */}
              {isActive && (
                <div className="pl-7 sm:pl-8 pt-1">
                  <p className="text-xs sm:text-sm leading-relaxed text-neutral-600 font-light max-w-lg">
                    {exp.desc}
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* RIGHT COLUMN: Dynamic Image Showcase with Sticky Alignment */}
      <div className="lg:col-span-6 order-1 lg:order-2 lg:sticky lg:top-28">
        <div className="relative w-full aspect-[4/3] max-h-[460px] rounded-3xl overflow-hidden bg-neutral-900 border border-black/10 shadow-2xl flex flex-col justify-end p-5 sm:p-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, scale: 1.04 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-0 w-full h-full"
            >
              <SafeImage 
                src={items[activeIndex].img} 
                alt={items[activeIndex].title}
                className="w-full h-full object-cover"
                containerClassName="w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/30 pointer-events-none" />
            </motion.div>
          </AnimatePresence>

          {/* Bottom Captions & Action Link - Clean Typography, No Floating Top Boxes */}
          <div className="relative z-10 pt-6">
            <div className="flex items-center justify-between gap-2 text-[10px] sm:text-[11px] font-mono uppercase tracking-wider text-white/70 mb-2">
              {items[activeIndex].tags && items[activeIndex].tags.length > 0 && (
                <span className="font-semibold text-white/90">
                  {items[activeIndex].tags[0]}
                </span>
              )}
              <span className="text-white/50 tracking-wider">
                SYSTEM {(activeIndex + 1).toString().padStart(2, "0")} OF {items.length.toString().padStart(2, "0")}
              </span>
            </div>
            <h4 className="text-lg sm:text-xl font-black text-white tracking-tight mb-1 drop-shadow-md">
              {items[activeIndex].title}
            </h4>
            <p className="text-xs sm:text-sm text-white/85 font-light line-clamp-2 mb-3 leading-relaxed">
              {items[activeIndex].desc}
            </p>
            <Link
              href={items[activeIndex].href || "/contact"}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white text-black hover:bg-neutral-200 text-xs font-bold uppercase tracking-wider transition-all shadow-md active:scale-95"
            >
              <span>Explore Experience</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>

    </div>
  );
}

