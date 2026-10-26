"use client";

import { useState } from "react";
import { Plus, Minus, HelpCircle } from "lucide-react";
import Link from "next/link";

interface FAQItem {
  id: string;
  categoryLabel: string;
  q: string;
  a: string;
}

const faqs: FAQItem[] = [
  {
    id: "faq-1",
    categoryLabel: "SPACES",
    q: "What spaces work with interactive projection?",
    a: "Suitable floors, walls and other surfaces can be considered based on the space, lighting and planned experience."
  },
  {
    id: "faq-2",
    categoryLabel: "CUSTOMISATION",
    q: "Can the experience be customised?",
    a: "Yes. The experience can be planned around your space, audience and intended use."
  },
  {
    id: "faq-3",
    categoryLabel: "EQUIPMENT",
    q: "Do I need to provide the equipment?",
    a: "Equipment requirements depend on the planned experience and project scope."
  },
  {
    id: "faq-4",
    categoryLabel: "COST",
    q: "How much does it cost?",
    a: "Cost depends on the space, content, technology and installation requirements."
  },
  {
    id: "faq-5",
    categoryLabel: "TIMELINE",
    q: "How long does installation take?",
    a: "The timeline depends on the experience, equipment and site requirements."
  },
  {
    id: "faq-6",
    categoryLabel: "CONSULTATION",
    q: "Can you help me choose the right solution?",
    a: "Yes. We can discuss your space and requirements and identify a suitable direction."
  }
];

export default function FAQSection() {
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenFaqIdx(openFaqIdx === idx ? null : idx);
  };

  return (
    <section className="py-10 sm:py-12 lg:py-14 relative overflow-hidden bg-[var(--background)]" id="faqs">
      {/* Subtle background gradients */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-black/5 blur-[140px] rounded-full" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-6 sm:mb-8 space-y-3">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-[1.1] text-[var(--foreground)]">
            Frequently asked questions
          </h2>
        </div>

        {/* FAQ Accordion List (Retail-Showrooms / Industry Reference Pattern) */}
        <div className="space-y-2 mb-4 divide-y divide-neutral-200/80">
          {faqs.map((faq, idx) => {
            const isOpen = openFaqIdx === idx;
            const itemNum = String(idx + 1).padStart(2, "0");

            return (
              <div
                key={faq.id}
                className="py-4 text-left transition-colors"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full flex items-start justify-between text-left focus:outline-none group cursor-pointer"
                >
                  <div className="flex items-start gap-3 sm:gap-4 pr-2">
                    <span className="text-xs font-mono font-bold text-neutral-400 mt-1 shrink-0">
                      {itemNum}
                    </span>
                    <div className="flex flex-col items-start gap-1">
                      <span className="text-xs font-semibold uppercase tracking-wide text-neutral-400">
                        {faq.categoryLabel}
                      </span>
                      <span className={`text-base sm:text-lg font-bold transition-colors leading-snug ${isOpen ? "text-black" : "text-neutral-800 group-hover:text-black"}`}>
                        {faq.q}
                      </span>
                    </div>
                  </div>
                  <div className="shrink-0 ml-2 mt-1 text-neutral-500 group-hover:text-black transition-colors">
                    {isOpen ? (
                      <Minus className="w-4 h-4" />
                    ) : (
                      <Plus className="w-4 h-4" />
                    )}
                  </div>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    isOpen ? "max-h-[1000px] opacity-100 mt-3" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="pl-6 sm:pl-9 text-neutral-600 font-light leading-relaxed text-sm sm:text-base">
                    {faq.a}
                  </p>
                  <div className="pl-6 sm:pl-9 mt-3">
                    <Link
                      href="/contact"
                      className="text-xs sm:text-sm font-bold uppercase tracking-wider text-black hover:text-neutral-500 inline-flex items-center gap-1.5 transition-colors border-b border-black/20 hover:border-black/50 pb-0.5"
                    >
                      <span>Talk to an Expert</span>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
