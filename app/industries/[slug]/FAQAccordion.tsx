"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { IndustryFAQ } from "@/data/industries";

export default function FAQAccordion({ faqs }: { faqs: IndustryFAQ[] }) {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <div className="space-y-2">
      {faqs.map((faq, idx) => {
        const isOpen = openIdx === idx;
        const num = String(idx + 1).padStart(2, "0");

        return (
          <div 
            key={idx} 
            className="py-4 text-left transition-colors"
          >
            <button
              onClick={() => toggle(idx)}
              className="w-full flex items-center justify-between text-left focus:outline-none group cursor-pointer"
            >
              <div className="flex items-center gap-4">
                <span className="text-xs font-mono font-bold text-neutral-400">
                  {num}
                </span>
                <span className={`text-base sm:text-lg font-bold transition-colors ${isOpen ? "text-black" : "text-neutral-800 group-hover:text-black"}`}>
                  {faq.q}
                </span>
              </div>
              <div className="shrink-0 ml-4 text-neutral-500 group-hover:text-black transition-colors">
                {isOpen ? (
                  <Minus className="w-4 h-4" />
                ) : (
                  <Plus className="w-4 h-4" />
                )}
              </div>
            </button>
            <div 
              className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-[500px] opacity-100 mt-3" : "max-h-0 opacity-0"}`}
            >
              <p className="pl-9 text-neutral-600 font-light leading-relaxed text-sm sm:text-base">
                {faq.a}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
