"use client";

import React, { useState } from 'react';
import { ArrowRight, Lightbulb, Layers, Sparkles, Brain, Cpu, Network, Plus, Minus } from 'lucide-react';

interface SolutionItem {
  title: string;
  desc: string;
}

export default function SolutionsAccordion({ items }: { items: SolutionItem[] }) {
  const [openIdx, setOpenIdx] = useState<number | null>(0); // First item open by default

  const toggleItem = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  const icons = [Lightbulb, Layers, Sparkles, Brain, Cpu, Network];

  return (
    <div className="w-full">
      {items.map((item, idx) => {
        const isOpen = openIdx === idx;
        const IconComponent = icons[idx % icons.length];

        return (
          <div 
            key={idx} 
            className={`group border-b border-black/10 transition-colors duration-500 ${isOpen ? 'bg-[#F8F9FA]' : 'hover:bg-gray-50'}`}
          >
            {/* Header (Clickable) */}
            <button 
              onClick={() => toggleItem(idx)}
              className="w-full flex items-center justify-between py-8 px-4 sm:px-8 text-left focus:outline-none"
            >
              <div className="flex items-center gap-6 md:gap-12 w-full">
                {/* Number & Icon */}
                <div className="flex items-center gap-6 md:w-1/4 shrink-0">
                  <span className="text-xl md:text-2xl font-mono font-medium text-gray-300">
                    0{idx + 1}
                  </span>
                  <div className={`w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center transition-all duration-500 shadow-sm ${isOpen ? 'bg-black text-white scale-110' : 'bg-white border border-gray-200 text-black group-hover:border-black'}`}>
                    <IconComponent className="w-5 h-5 md:w-7 md:h-7" />
                  </div>
                </div>

                {/* Title */}
                <h3 className={`text-2xl md:text-4xl font-extrabold tracking-tight transition-all duration-500 ${isOpen ? 'text-black' : 'text-gray-400 group-hover:text-black'}`}>
                  {item.title}
                </h3>
              </div>
              
              {/* Expand/Collapse Indicator */}
              <div className="shrink-0 ml-4">
                {isOpen ? (
                  <Minus className="w-6 h-6 md:w-8 md:h-8 text-black" />
                ) : (
                  <Plus className="w-6 h-6 md:w-8 md:h-8 text-gray-300 group-hover:text-black transition-colors" />
                )}
              </div>
            </button>

            {/* Expandable Content */}
            <div 
              className={`overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}
            >
              <div className="pb-10 px-4 sm:px-8 flex flex-col md:flex-row md:items-start gap-8 md:gap-12">
                {/* Empty space to align with title */}
                <div className="hidden md:block md:w-1/4 shrink-0"></div>
                
                <div className="flex-1">
                  <p className="text-gray-600 text-lg md:text-xl font-medium leading-relaxed max-w-3xl mb-8">
                    {item.desc}
                  </p>
                  
                  {/* Action Link */}
                  <div className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-black cursor-pointer group/link">
                    <span className="relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-px after:bg-black group-hover/link:after:w-full after:transition-all after:duration-300">
                      Explore Capability
                    </span>
                    <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
