"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import SafeImage from '@/components/SafeImage';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { IndustryCaseStudy } from '@/data/industries/types';

export default function CaseStudiesSpotlight({ 
  caseStudies, 
  industryName,
  title = "Real Impact in Active Learning",
  eyebrow = "PROVEN CLASSROOM SOLUTIONS"
}: { 
  caseStudies: IndustryCaseStudy[]; 
  industryName: string;
  title?: string;
  eyebrow?: string;
}) {
  const [activeIndex, setActiveIndex] = useState(0);

  if (!caseStudies || caseStudies.length === 0) return null;

  const active = caseStudies[activeIndex] || caseStudies[0];

  return (
    <div className="flex flex-col justify-center space-y-6 sm:space-y-8 w-full">
      
      {/* Top Header & Natural Solution Switcher (Zero Cut Lines) */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <span className="text-[10px] sm:text-[11px] font-mono font-bold uppercase tracking-[0.2em] text-black block mb-1">
            {eyebrow}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-black">
            {title}
          </h2>
        </div>

        {/* Clean Solution Switcher Tabs */}
        <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 w-full md:w-auto mt-4 md:mt-0">
          {caseStudies.map((study, idx) => {
            const isActive = activeIndex === idx;
            return (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`text-xs px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full transition-all duration-300 cursor-pointer whitespace-nowrap ${
                  isActive
                    ? 'bg-black text-white shadow-sm font-bold'
                    : 'text-neutral-500 hover:text-black hover:bg-neutral-100 font-medium'
                }`}
              >
                {study.client}
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Showcase: 60/40 Split (Strict Zero Cards, Zero Boxes) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        
        {/* LEFT COLUMN (Col 7): Cinematic Photography */}
        <div className="lg:col-span-7">
          <div className="relative aspect-[16/10] max-h-[350px] rounded-3xl overflow-hidden bg-neutral-100 shadow-sm">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, scale: 1.02 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.35, ease: "easeInOut" }}
                className="absolute inset-0"
              >
                <SafeImage
                  src={active.img}
                  alt={active.title}
                  className="w-full h-full object-cover"
                  containerClassName="w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent pointer-events-none" />
                {active.quote && (
                  <div className="absolute bottom-4 left-4 right-4 sm:bottom-5 sm:left-5 sm:right-5 pointer-events-none">
                    <p className="text-xs sm:text-sm text-white/90 font-light italic leading-relaxed backdrop-blur-md bg-black/40 border border-white/10 rounded-xl px-3.5 py-2 sm:px-4 sm:py-2.5">
                      &ldquo;{active.quote}&rdquo;
                    </p>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* RIGHT COLUMN (Col 5): Solution Breakdown & Clean Metrics (Pure Typography) */}
        <div className="lg:col-span-5 flex flex-col justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.25 }}
              className="space-y-3.5 sm:space-y-4"
            >
              {/* Category & Headline */}
              <div>
                <span className="text-[11px] font-mono font-bold text-black uppercase tracking-widest block mb-1">
                  {active.tag || active.client}
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-black tracking-tight leading-snug">
                  {active.headline || active.title}
                </h3>
              </div>

              {/* Natural Narrative Description */}
              <p className="text-xs sm:text-sm text-neutral-600 font-normal leading-relaxed">
                {active.desc}
              </p>

              {/* Two Clean Impact Metrics (Zero Symbols, Zero Boxes, Locked Level) */}
              <div className="grid grid-cols-2 gap-4 pt-1 items-start">
                <div className="flex flex-col justify-start">
                  <div className="h-8 sm:h-9 flex items-center">
                    <span className="text-2xl sm:text-3xl font-black text-black font-mono block tracking-tight whitespace-nowrap">
                      {active.metric}
                    </span>
                  </div>
                  <span className="text-xs text-neutral-500 font-medium block pt-1">
                    {active.metricLabel}
                  </span>
                </div>
                <div className="flex flex-col justify-start">
                  <div className="h-8 sm:h-9 flex items-center">
                    <span className="text-2xl sm:text-3xl font-black text-black font-mono block tracking-tight whitespace-nowrap">
                      {active.secondaryMetric || "Verified"}
                    </span>
                  </div>
                  <span className="text-xs text-neutral-500 font-medium block pt-1">
                    {active.secondaryMetricLabel || "Deployment Reliability"}
                  </span>
                </div>
              </div>

              {/* Action Links */}
              <div className="pt-1 flex items-center justify-between">
                <Link
                  href={active.slug ? `/projects/${active.slug}` : "/projects"}
                  className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-black hover:text-neutral-600 transition-colors group"
                >
                  Explore Project Details
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/projects"
                  className="inline-flex items-center gap-1 text-xs text-neutral-500 hover:text-black transition-colors"
                >
                  All Projects <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>

            </motion.div>
          </AnimatePresence>
        </div>

      </div>

    </div>
  );
}
