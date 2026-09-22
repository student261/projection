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
    categoryLabel: "CORE TECHNOLOGY",
    q: "What is Motion Interactive Projection & how does it work?",
    a: "Motion Interactive Projection turns floors, walls, and physical architecture into highly responsive digital canvases. Depth-sensing optical cameras detect footsteps, gestures, and body movement in real-time with near-instantaneous latency, triggering dynamic 3D visuals and spatial sound effects."
  },
  {
    id: "faq-2",
    categoryLabel: "INDUSTRIES SERVED",
    q: "Which industries can benefit from your solutions?",
    a: "Our spatial installations are purpose-engineered across 8 primary verticals: Education (active STEM learning floors & interactive classrooms), Healthcare (pediatric sensory therapy & calming distraction rooms), Retail (interactive storefront windows & touchless product showcases), Museums & Cultural Institutions (artifact projection mapping & interactive historical timelines), Entertainment & Gaming (motion-tracked team sports & arcade pavilions), Hospitality (ambient lobby ceiling mapping & interactive dining lounges), Corporate (executive briefing walls & generative data atriums), and Public Spaces (airport concourse projection & civic transit portals)."
  },
  {
    id: "faq-3",
    categoryLabel: "CUSTOMIZATION & BRANDING",
    q: "Can your solutions be customized for our business?",
    a: "Every installation is custom-architected to your specific venue, audience, and commercial objectives. We tailor everything from optical hardware selection (throw distances, ambient lux compensation, surface treatments) to software development (custom 3D shaders, brand identity palettes, interactive physics, soundscapes, and cloud CMS integrations). Whether you require corporate governance, ADA accessibility compliance, or gamified sponsor leaderboards, our engineering team custom-codes the experience to your exact specifications."
  },
  {
    id: "faq-4",
    categoryLabel: "INSTALLATION & SUPPORT",
    q: "Do you provide installation and technical support?",
    a: "Yes, we provide complete end-to-end turnkey delivery worldwide. Our certified spatial engineers handle architectural site surveys, structural rigging, projector laser alignment, sensor grid calibration, and audio synchronization. Post-launch, we provide comprehensive SLA packages that include 24/7 remote cloud telemetry monitoring, automated health diagnostics, scheduled hardware maintenance, and rapid-response on-site engineering support to guarantee continuous, mission-critical operational reliability."
  },
  {
    id: "faq-5",
    categoryLabel: "CONTENT & REFRESHES",
    q: "Can the content be updated after installation?",
    a: "Yes. All PROJECTION installations are connected to our proprietary cloud-based Content Management System (CMS). Venue operators can instantly push new games, seasonal holiday campaigns, promotional sponsor overlays, and marketing graphics with a single click—without needing on-site technicians or hardware alterations. We also provide an open SDK and custom template library for clients who prefer generating their own in-house visual assets."
  },
  {
    id: "faq-6",
    categoryLabel: "SPACE & SCALE",
    q: "Are your solutions suitable for small and large spaces?",
    a: "Yes, our modular architecture scales seamlessly to fit any physical footprint. For compact environments (such as retail pop-ups, pediatric waiting areas, or boutique hotel entryways), our ultra-short-throw systems deliver high-impact motion interaction in spaces as small as 100 sq ft. For massive venues (such as stadium tunnels, airport concourses, cathedral sanctuaries, and multi-story corporate atriums), our multi-projector edge-blending and distributed LiDAR sensor grids cover thousands of square feet with zero blind spots."
  },
  {
    id: "faq-7",
    categoryLabel: "PROJECT TIMELINE",
    q: "How long does it take to implement a project?",
    a: "Project timelines depend on spatial complexity and custom content requirements. Turnkey modular packages utilizing our pre-built interactive library can be installed and commissioned within 2 to 4 weeks. Fully bespoke architectural installations—involving custom 3D projection mapping, multi-room sensor fusion, or generative AI avatar development—typically range from 8 to 12 weeks from initial concept and 3D modeling through on-site calibration and staff handover."
  },
  {
    id: "faq-8",
    categoryLabel: "GETTING STARTED",
    q: "How do I get started with PROJECTION?",
    a: "Getting started is straightforward. Submit an inquiry through our contact form or book a virtual demonstration detailing your venue dimensions, target industry, and project goals. Our spatial architects will review your blueprints and schedule a discovery consultation within 24 hours, followed by a complimentary spatial feasibility report, hardware specification, and budget estimate tailored to your space."
  }
];

export default function FAQSection() {
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenFaqIdx(openFaqIdx === idx ? null : idx);
  };

  return (
    <section className="py-12 lg:py-16 relative overflow-hidden bg-[var(--background)]" id="faqs">
      {/* Subtle background gradients */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-black/5 blur-[140px] rounded-full" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-10 lg:mb-12 space-y-3">
          <div className="flex items-center justify-center gap-2 text-[10px] sm:text-[11px] font-mono font-semibold uppercase tracking-[0.2em] text-black/50 mb-2">
            <HelpCircle className="w-3.5 h-3.5 text-black/40" />
            <span>KNOWLEDGE BASE</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-[1.1] text-[var(--foreground)]">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[var(--text-secondary)] font-light max-w-2xl mx-auto leading-relaxed">
            Find answers to the most common questions about our interactive solutions, supported industries, customization options, installation process, and ongoing support.
          </p>
        </div>

        {/* FAQ Accordion List (Retail-Showrooms / Industry Reference Pattern) */}
        <div className="space-y-2 mb-10 divide-y divide-neutral-200/80">
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
                  className="w-full flex items-center justify-between text-left focus:outline-none group cursor-pointer"
                >
                  <div className="flex items-start gap-3 sm:gap-4 pr-2">
                    <span className="text-xs font-mono font-bold text-neutral-400 mt-1 shrink-0">
                      {itemNum}
                    </span>
                    <div className="flex flex-col items-start gap-1">
                      <span className="text-[9px] font-bold uppercase tracking-[0.15em] text-black/40">
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
                      className="text-xs font-bold uppercase tracking-wider text-black hover:text-neutral-500 inline-flex items-center gap-1.5 transition-colors border-b border-black/20 hover:border-black/50 pb-0.5"
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
