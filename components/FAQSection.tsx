"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
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
    categoryLabel: "CORE TECHNOLOGY",
    q: "What is Motion Interactive Projection & how does it work?",
    a: "Motion Interactive Projection turns floors, walls, and physical architecture into highly responsive digital canvases. Depth-sensing optical cameras detect footsteps, gestures, and body movement in real-time with sub-10ms latency, triggering dynamic 3D visuals and spatial sound effects."
  },
  {
    id: "faq-2",
    categoryLabel: "INDUSTRIES SERVED",
    q: "Which industries can benefit from your solutions?",
    a: "Education, healthcare, retail, museums and cultural institutions, entertainment venues, hospitality, corporate spaces, and public spaces all use our technology today."
  },
  {
    id: "faq-3",
    categoryLabel: "CUSTOMIZATION & BRANDING",
    q: "Can your solutions be customized for our business?",
    a: "Yes — every installation is designed around your space, brand identity, and goals, from the visuals and interaction style to the technology mix that fits your budget and venue."
  },
  {
    id: "faq-4",
    categoryLabel: "INSTALLATION & SUPPORT",
    q: "Do you provide installation and technical support?",
    a: "Yes. Our team handles the complete process end-to-end: planning, installation, calibration, testing, and ongoing technical support after launch."
  },
  {
    id: "faq-5",
    categoryLabel: "CONTENT & REFRESHES",
    q: "Can the content be updated after installation?",
    a: "Yes — content can be refreshed or swapped after launch, useful for seasonal campaigns, new exhibits, or evolving brand needs, without replacing the underlying hardware."
  },
  {
    id: "faq-6",
    categoryLabel: "SPACE & SCALE",
    q: "Are your solutions suitable for small and large spaces?",
    a: "Yes — from a single interactive display in a small retail corner to large-scale immersive rooms and architectural projection mapping across an entire building facade."
  },
  {
    id: "faq-7",
    categoryLabel: "PROJECT TIMELINE",
    q: "How long does it take to implement a project?",
    a: "Timelines vary with scope — a simple activation can launch in a few weeks, while a large permanent installation with custom content typically takes a few months from first conversation to opening day."
  },
  {
    id: "faq-8",
    categoryLabel: "GETTING STARTED",
    q: "How do I get started with PROJECTION?",
    a: "Reach out through our contact form with a few details about your space and goals, and our team will schedule an initial consultation."
  }
];

export default function FAQSection() {
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenFaqIdx(openFaqIdx === idx ? null : idx);
  };

  return (
    <section className="py-12 lg:py-16 relative overflow-hidden bg-[var(--background)] border-y border-[var(--border-light)]" id="faqs">
      {/* Subtle background gradients */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-black/5 blur-[140px] rounded-full" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-10 lg:mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/5 border border-black/10 text-[10px] font-bold uppercase tracking-[0.25em] text-black">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>KNOWLEDGE BASE</span>
          </div>

          <h2 className="text-[var(--foreground)] leading-[1.1]">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-sm text-[var(--text-secondary)] font-light max-w-2xl mx-auto leading-relaxed">
            Find answers to the most common questions about our interactive solutions, supported industries, customization options, installation process, and ongoing support.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3 mb-10">
          {faqs.map((faq, idx) => {
            const isOpen = openFaqIdx === idx;
            const itemNum = String(idx + 1).padStart(2, "0");

            return (
              <div
                key={faq.id}
                className={`rounded-2xl transition-all duration-300 overflow-hidden border ${
                  isOpen
                    ? "bg-[var(--background)] border-[#000000] shadow-xl shadow-[#000000]/5 ring-1 ring-[#000000]/10"
                    : "bg-[var(--background)] border-[var(--border-light)] hover:border-[var(--text-secondary)] shadow-sm"
                }`}
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full text-left p-5 sm:p-6 flex items-start justify-between gap-4 text-[var(--foreground)] font-medium text-sm sm:text-base hover:text-black transition-colors cursor-pointer group"
                >
                  <div className="flex items-start gap-4 sm:gap-6">
                    <span className={` text-xs font-bold pt-1 transition-colors ${isOpen ? "text-black" : "text-[var(--text-secondary)] opacity-40 group-hover:opacity-70"}`}>
                      {itemNum}
                    </span>
                    <span className="leading-snug tracking-tight font-semibold max-w-xl">{faq.q}</span>
                  </div>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-500 ${isOpen ? "rotate-180 bg-black text-white" : "bg-[var(--foreground)]/5 text-[var(--text-secondary)] group-hover:bg-[var(--foreground)]/10 group-hover:text-[var(--foreground)]"}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>
                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 text-black/80 leading-relaxed pt-1 ml-8 sm:ml-12 font-normal space-y-4 max-w-2xl">
                    <p className="text-xs sm:text-sm">{faq.a}</p>
                    <div>
                      <Link href="/contact" className="text-[11px] font-bold uppercase tracking-wider text-black hover:text-gray-500 inline-flex items-center gap-2 transition-colors border-b border-black/20 hover:border-black/50 pb-0.5">
                        <span>Talk to an Expert</span>
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
