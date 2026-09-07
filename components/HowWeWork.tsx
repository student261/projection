"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Search, Compass, Code2, Wrench, ShieldCheck, ArrowRight, Sparkles, Zap } from "lucide-react";
import HugeCTA from "@/components/ui/HugeCTA";

const steps = [
  {
    stepTag: "01 · DISCOVER",
    icon: Search,
    title: "Discover",
    subtitle: "Spatial Feasibility",
    desc: "We learn about your goals, audience, space, and requirements and recommend the right technology for your project.",
    color: "#000000"
  },
  {
    stepTag: "02 · DESIGN",
    icon: Compass,
    title: "Design",
    subtitle: "3D Visual Experience",
    desc: "We plan the experience, visuals, layout, and features around what you want to achieve.",
    color: "#000000"
  },
  {
    stepTag: "03 · DEVELOP",
    icon: Code2,
    title: "Develop",
    subtitle: "Interactive Code & AI",
    desc: "Our team builds the experience using AI, motion tracking, interactive projection, and software shaders.",
    color: "#C084FC"
  },
  {
    stepTag: "04 · INSTALL",
    icon: Wrench,
    title: "Install",
    subtitle: "On-Site Calibration",
    desc: "We take care of installation, setup, calibration, and testing so everything is ready to use.",
    color: "#818CF8"
  },
  {
    stepTag: "05 · SUPPORT",
    icon: ShieldCheck,
    title: "Support",
    subtitle: "24/7 Cloud Care",
    desc: "After launch, we provide maintenance, content updates, and technical support whenever you need it.",
    color: "#6366F1"
  },
];

export default function HowWeWork() {
  return (
    <section className="py-10 lg:py-14 bg-gray-50 text-black border-t border-black/10 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-black/5 blur-[160px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-10 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/10 border border-[#000000]/20 text-[11px] font-bold uppercase tracking-[0.25em] text-black"
          >
            <Zap className="w-3.5 h-3.5" />
            <span>HOW WE WORK · THE WORKFLOW</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl lg:text-6xl font-black text-black tracking-tight leading-[1.06]"
          >
            From Vision to Interactive Reality
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg text-black/70 font-light leading-relaxed pt-1"
          >
            We work with you from the first idea to the final installation, making sure the technology fits your space, your goals, and the people who will use it.
          </motion.p>
        </div>

        {/* 5 Step Process Grid */}
        <div className="relative mt-8">

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-4 relative z-10">
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group relative flex flex-col items-center lg:items-start text-center lg:text-left"
                >
                  {/* Icon Node Box (Sleek Double-Ring Glass Capsule without ugly top black badges) */}
                  <div className="mb-6 relative flex items-center justify-center">
                    {/* Outer Glow Halo */}
                    <div className="absolute inset-0 rounded-3xl bg-black/20 blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500 scale-125" />

                    {/* Node Circle */}
                    <div className="w-24 h-24 rounded-3xl bg-white border border-black/10 shadow-sm flex flex-col items-center justify-center relative z-10 group-hover:border-[#000000] group-hover:shadow-xl group-hover:shadow-[#000000]/15 group-hover:-translate-y-1.5 transition-all duration-300">
                      <Icon className="w-8 h-8 text-black group-hover:text-black group-hover:scale-110 transition-all duration-300" />
                    </div>
                  </div>

                  {/* Step Metadata Tag */}
                  <div className="space-y-2 w-full">
                    <h3 className="text-black group-hover:text-black transition-colors">
                      {step.title}
                    </h3>

                    <p className="text-xs font-bold text-black/40 uppercase tracking-wider">
                      {step.subtitle}
                    </p>

                    <p className="text-xs sm:text-sm text-black/70 font-light leading-relaxed pt-1">
                      {step.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
      
      <HugeCTA />
    </section>
  );
}
