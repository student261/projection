"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Search,
  Compass,
  Code2,
  Wrench,
  ShieldCheck,
  Zap,
  ArrowRight,
  ChevronRight,
} from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Discover",
    desc: "Understand your space, audience and goals.",
  },
  {
    icon: Compass,
    title: "Design",
    desc: "Shape the experience around the space.",
  },
  {
    icon: Code2,
    title: "Develop",
    desc: "Build the interactive content and technology.",
  },
  {
    icon: Wrench,
    title: "Install",
    desc: "Set up, calibrate and test the experience.",
  },
  {
    icon: ShieldCheck,
    title: "Support",
    desc: "Maintain and evolve the experience after launch.",
  },
];

export default function HowWeWork() {
  return (
    <section
      id="how-we-deliver"
      className="pt-10 sm:pt-14 lg:pt-16 pb-10 sm:pb-14 lg:pb-16 bg-white text-black relative overflow-hidden border-t border-gray-100"
    >
      <div className="max-w-7xl 2xl:max-w-[1536px] 3xl:max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="max-w-3xl space-y-3">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-2 text-xs sm:text-sm font-semibold uppercase tracking-wide text-neutral-500"
            >
              <Zap className="w-3.5 h-3.5 text-neutral-400" />
              <span>HOW WE WORK</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-[1.1] text-black"
            >
              From Idea to Experience
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-sm sm:text-base text-neutral-600 font-light leading-relaxed max-w-2xl"
            >
              A clear and collaborative delivery process to bring your interactive vision to life.
            </motion.p>
          </div>

          <div>
            <Link
              href="/how-we-work"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-black text-white text-xs sm:text-sm font-semibold tracking-wide hover:bg-neutral-800 transition-all shadow-md group cursor-pointer"
            >
              <span>See How We Work</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Desktop Flow: Connected Architectural Rail (lg and above) */}
        <div className="hidden lg:grid grid-cols-5 gap-6 xl:gap-8 relative">
          {steps.map((step, idx) => {
            const IconComponent = step.icon;
            const isLast = idx === steps.length - 1;

            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="group flex flex-col"
              >
                {/* Process Node and Connector Line */}
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-full border border-neutral-300 bg-white flex items-center justify-center text-neutral-800 transition-all duration-300 group-hover:border-black group-hover:bg-black group-hover:text-white group-hover:scale-105 shrink-0 shadow-sm z-10">
                    <IconComponent className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
                  </div>
                  {!isLast && (
                    <div className="flex-1 h-[1px] bg-neutral-200 ml-4 -mr-6 xl:-mr-8 relative hidden lg:flex items-center justify-end z-0">
                      <ChevronRight className="w-3.5 h-3.5 text-neutral-300 -mr-1.5 shrink-0" />
                    </div>
                  )}
                </div>

                {/* Step Content */}
                <div className="space-y-2 pr-2">
                  <h3 className="text-base sm:text-lg font-bold text-neutral-900 tracking-tight leading-snug group-hover:text-black transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-500 font-normal leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Mobile & Tablet Flow: Vertical Architectural Timeline (< lg) */}
        <div className="lg:hidden relative pl-2 sm:pl-4">
          <div className="space-y-8 sm:space-y-10 relative">
            {steps.map((step, idx) => {
              const IconComponent = step.icon;
              const isLast = idx === steps.length - 1;

              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  className="group flex items-start gap-4 sm:gap-6 relative"
                >
                  {/* Vertical connecting rail between nodes */}
                  {!isLast && (
                    <div className="absolute left-[23px] top-12 bottom-[-32px] sm:bottom-[-40px] w-[1px] bg-neutral-200 z-0" />
                  )}

                  {/* Node */}
                  <div className="w-12 h-12 rounded-full border border-neutral-300 bg-white flex items-center justify-center text-neutral-800 transition-all duration-300 group-hover:border-black group-hover:bg-black group-hover:text-white shrink-0 shadow-sm relative z-10">
                    <IconComponent className="w-5 h-5" />
                  </div>

                  {/* Step Content */}
                  <div className="pt-0.5 space-y-1.5 flex-1 min-w-0">
                    <h3 className="text-base sm:text-lg font-bold text-neutral-900 tracking-tight leading-snug">
                      {step.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-neutral-600 font-normal leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
