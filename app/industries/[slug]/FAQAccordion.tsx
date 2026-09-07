"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { IndustryFAQ } from "@/data/industries";

export default function FAQAccordion({ faqs }: { faqs: IndustryFAQ[] }) {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <div className="space-y-4">
      {faqs.map((faq, idx) => {
        const isOpen = openIdx === idx;
        return (
          <div 
            key={idx} 
            className={`border border-black/10 rounded-2xl overflow-hidden transition-all duration-300 ${isOpen ? "bg-black/5" : "bg-transparent hover:bg-black/5"}`}
          >
            <button
              onClick={() => toggle(idx)}
              className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
            >
              <span className="text-black font-medium pr-8">{faq.q}</span>
              <div className="shrink-0 w-8 h-8 rounded-full border border-black/10 flex items-center justify-center bg-black">
                {isOpen ? (
                  <Minus className="w-4 h-4 text-white" />
                ) : (
                  <Plus className="w-4 h-4 text-white" />
                )}
              </div>
            </button>
            <div 
              className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}
            >
              <p className="p-6 pt-0 text-black/70 font-light leading-relaxed text-sm">
                {faq.a}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
