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
    categoryLabel: "TECHNOLOGY",
    q: "What is interactive projection and how does it work?",
    a: "Interactive projection combines projected digital content with motion or interaction tracking. When people move within the projected area, the visuals can respond to their movement and create an interactive experience."
  },
  {
    id: "faq-2",
    categoryLabel: "SPACE REQUIREMENTS",
    q: "What kind of space do I need for interactive projection?",
    a: "The requirements depend on the experience, projection area and installation setup. Floor or wall space, ceiling height, lighting and equipment placement are considered when planning the system."
  },
  {
    id: "faq-3",
    categoryLabel: "SURFACES",
    q: "Can interactive projection work on different surfaces?",
    a: "Yes. Interactive projection can be designed for floors, walls, tables and other suitable surfaces. The setup depends on the surface, lighting and type of interaction required."
  },
  {
    id: "faq-4",
    categoryLabel: "CUSTOMIZATION",
    q: "Can the interactive experience be customized?",
    a: "Yes. Content can be designed around your space, audience, brand and project goals, including custom visuals, games and interactive experiences."
  },
  {
    id: "faq-5",
    categoryLabel: "SOLUTION SELECTION",
    q: "How do you decide which interactive solution is right for my space?",
    a: "The right solution depends on your space, audience, purpose, projection area, lighting and interaction requirements. These factors are reviewed before selecting the appropriate setup."
  },
  {
    id: "faq-6",
    categoryLabel: "CONSULTATION",
    q: "Can you help me choose the right interactive solution?",
    a: "Yes. We look at your space, audience, goals and the type of experience you want to create, then help you choose the most suitable solution for your project."
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
          <div className="flex items-center justify-center gap-2 text-[10px] sm:text-[11px] font-mono font-semibold uppercase tracking-[0.2em] text-black/50 mb-2">
            <HelpCircle className="w-3.5 h-3.5 text-black/40" />
            <span>KNOWLEDGE BASE</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-[1.1] text-[var(--foreground)]">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[var(--text-secondary)] font-light max-w-2xl mx-auto leading-relaxed">
            Find answers to the most common questions about our interactive solutions, supported industries, customization options, installation process, and ongoing support.
          </p>
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
                      <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.15em] text-black/40">
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
