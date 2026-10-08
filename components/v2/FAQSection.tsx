"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, HelpCircle, ArrowRight, MessageSquare } from "lucide-react";
import Link from "next/link";

import { faqs } from "@/data/faqs";

export default function FAQSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section
      id="faq"
      className="pt-8 sm:pt-10 lg:pt-12 pb-12 sm:pb-16 lg:pb-18 bg-white text-black relative border-t border-gray-100"
    >
      <div className="max-w-7xl 2xl:max-w-[1536px] 3xl:max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 xl:gap-20 items-start">
          
          {/* Left Column: Section Header & Contact Card (Sticky on desktop) */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 space-y-6">
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold uppercase tracking-wide text-black/60">
                <HelpCircle className="w-3.5 h-3.5 text-black/40" />
                <span>FREQUENTLY ASKED QUESTIONS</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-[1.1] text-black">
                Got Questions? Here Are the Answers.
              </h2>

              <p className="text-sm sm:text-base text-black/70 font-light leading-relaxed max-w-lg">
                Common questions about our interactive installations, technology, surfaces, space planning and support.
              </p>
            </div>

            {/* Quick Contact Card */}
            <div className="p-6 rounded-2xl bg-neutral-50 border border-neutral-200/80 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-black text-white flex items-center justify-center">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-black">Have a specific question?</h3>
                  <p className="text-xs text-neutral-500">We&apos;re here to help guide your project.</p>
                </div>
              </div>

              <p className="text-xs text-neutral-600 font-light leading-relaxed">
                Whether you have an existing space or an upcoming build, our specialists can advise on the right setup.
              </p>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-black text-white text-xs font-semibold tracking-wider uppercase hover:bg-neutral-800 transition-colors cursor-pointer"
              >
                <span>Talk to an Expert</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Right Column: Accordion List */}
          <div className="lg:col-span-7 divide-y divide-neutral-200/80 border-t lg:border-t-0 border-b border-neutral-200/80">
            {faqs.map((faq, idx) => {
              const isOpen = openIdx === idx;
              const itemNum = String(idx + 1).padStart(2, "0");

              return (
                <div key={faq.id} className="py-5 sm:py-6 transition-colors">
                  <button
                    onClick={() => toggleFaq(idx)}
                    aria-expanded={isOpen}
                    className="w-full flex items-start justify-between text-left focus:outline-none group cursor-pointer gap-4"
                  >
                    <div className="flex items-start gap-3 sm:gap-4 flex-1">
                      <span className="text-xs font-mono font-bold text-neutral-400 mt-1 shrink-0">
                        {itemNum}
                      </span>
                      <div className="flex flex-col items-start gap-1">
                        <span className="text-[11px] font-semibold uppercase tracking-wider text-neutral-400">
                          {faq.categoryLabel}
                        </span>
                        <span
                          className={`text-base sm:text-lg font-bold transition-colors leading-snug ${
                            isOpen ? "text-black" : "text-neutral-800 group-hover:text-black"
                          }`}
                        >
                          {faq.q}
                        </span>
                      </div>
                    </div>

                    <div
                      className={`shrink-0 w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-300 mt-1 ${
                        isOpen
                          ? "bg-black text-white border-black"
                          : "border-neutral-200 text-neutral-500 group-hover:border-black group-hover:text-black"
                      }`}
                    >
                      {isOpen ? (
                        <Minus className="w-4 h-4" />
                      ) : (
                        <Plus className="w-4 h-4" />
                      )}
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="pt-3 pl-7 sm:pl-9 pr-4 space-y-3">
                          <p className="text-neutral-600 font-light leading-relaxed text-sm sm:text-base">
                            {faq.a}
                          </p>
                          <div>
                            <Link
                              href="/contact"
                              className="text-xs font-bold uppercase tracking-wider text-black hover:text-neutral-500 inline-flex items-center gap-1.5 transition-colors border-b border-black/20 hover:border-black/50 pb-0.5"
                            >
                              <span>Ask About This</span>
                              <ArrowRight className="w-3 h-3" />
                            </Link>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
