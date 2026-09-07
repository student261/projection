"use client";

import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import SafeImage from '@/components/SafeImage';
import { motion } from 'framer-motion';

interface ExperienceItem {
  title: string;
  desc: string;
  tags: string[];
  img: string;
}

const ExperienceCard = ({ 
  exp, 
  idx, 
  total,
  onInView 
}: { 
  exp: ExperienceItem, 
  idx: number, 
  total: number,
  onInView: (idx: number) => void 
}) => {
  const ref = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            onInView(idx);
          }
        });
      },
      {
        // Trigger area is the middle 10% of the viewport height.
        // Extremely reliable regardless of element height.
        rootMargin: "-45% 0px -45% 0px", 
      }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [idx, onInView]);

  return (
    <div 
      ref={ref}
      className="relative min-h-[60vh] lg:min-h-[85vh] py-16 lg:py-24 flex flex-col justify-center"
    >
      {/* Mobile Image */}
      <div className="lg:hidden w-full h-[320px] rounded-[24px] overflow-hidden mb-10 shadow-lg relative bg-slate-900 border border-gray-100">
        <SafeImage 
          src={exp.img} 
          alt={exp.title}
          className="w-full h-full object-cover"
          containerClassName="w-full h-full"
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ margin: "-20% 0px -20% 0px" }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }} // Custom smooth ease
        className="max-w-2xl"
      >
        <div className="text-6xl lg:text-[8rem] font-black text-slate-100 mb-6 font-mono tracking-tighter select-none leading-none">
          0{idx + 1}
        </div>

        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black text-white text-[10px] font-mono font-bold uppercase tracking-widest w-fit mb-6 shadow-sm">
          <span>Experience</span>
          <span className="opacity-40">/</span>
          <span className="opacity-90">0{total}</span>
        </div>

        <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-[1.1] mb-6">
          {exp.title}
        </h3>
        
        <p className="text-slate-600 text-lg leading-relaxed font-medium mb-10">
          {exp.desc}
        </p>
        
        <div className="flex flex-wrap gap-3 mb-10">
          {exp.tags.map((tag, tIdx) => (
            <span 
              key={tIdx} 
              className="px-4 py-2 rounded-xl bg-white border border-gray-200/80 text-[11px] font-bold uppercase tracking-widest text-slate-800 shadow-sm"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <div>
          <Link 
            href="/contact" 
            className="inline-flex items-center gap-3 text-xs font-black uppercase tracking-widest text-slate-900 group/link w-fit pb-1 border-b-2 border-slate-900 hover:text-blue-600 hover:border-blue-600 transition-colors"
          >
            <span>Explore Experience</span>
            <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1.5 transition-transform duration-300" />
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default function StickyExperiences({ items }: { items: ExperienceItem[] }) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="relative flex flex-col lg:flex-row gap-12 lg:gap-24 items-start">
      
      {/* LEFT: Sticky Image Preview Container (Desktop) */}
      <div className="hidden lg:block lg:sticky lg:top-32 w-full lg:w-[45%] h-[600px] lg:h-[75vh] max-h-[700px] rounded-[36px] overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.1)] border border-gray-200/50 bg-slate-100 shrink-0">
        {items.map((exp, idx) => {
          const isActive = activeIndex === idx;
          return (
            <div 
              key={idx}
              className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                isActive ? 'opacity-100 z-10' : 'opacity-0 z-0'
              }`}
            >
              <SafeImage 
                src={exp.img} 
                alt={exp.title}
                // Very subtle scale effect when active for that premium feel
                className="w-full h-full object-cover transition-transform duration-[3s] ease-out"
                containerClassName="w-full h-full bg-slate-900"
                loading={idx === 0 ? "eager" : "lazy"}
                priority={idx === 0}
                style={{ transform: isActive ? 'scale(1)' : 'scale(1.05)' }}
              />
              {/* Subtle inner shadow overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/30 pointer-events-none" />
              <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-[36px] pointer-events-none" />
            </div>
          );
        })}
      </div>

      {/* RIGHT: Scrolling Editorial Content */}
      <div className="w-full lg:w-[55%] flex flex-col relative z-10">
        {items.map((exp, idx) => (
          <ExperienceCard 
            key={idx}
            exp={exp}
            idx={idx}
            total={items.length}
            onInView={setActiveIndex}
          />
        ))}
      </div>

    </div>
  );
}
