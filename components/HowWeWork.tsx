"use client";

import { motion } from "framer-motion";
import { Search, Compass, Code2, Wrench, ShieldCheck, Zap } from "lucide-react";
import HugeCTA from "@/components/ui/HugeCTA";

const steps = [
  {
    stepTag: "01",
    icon: Search,
    title: "Discover",
    subtitle: "Spatial Feasibility",
    desc: "We learn about your goals, audience, space, and requirements and recommend the right technology for your project.",
    deliverable: "Spatial feasibility report, technical specification, and budget roadmap.",
  },
  {
    stepTag: "02",
    icon: Compass,
    title: "Design",
    subtitle: "3D Visual Experience",
    desc: "We plan the experience, visuals, layout, and features around what you want to achieve.",
    deliverable: "3D architectural mockups, UX storyboard, and spatial interaction blueprint.",
  },
  {
    stepTag: "03",
    icon: Code2,
    title: "Develop",
    subtitle: "Interactive Code & AI",
    desc: "Our team builds the experience using AI, motion tracking, interactive projection, and software shaders.",
    deliverable: "Custom real-time software build, interactive shaders, and CMS integration.",
  },
  {
    stepTag: "04",
    icon: Wrench,
    title: "Install",
    subtitle: "On-Site Calibration",
    desc: "We take care of installation, setup, calibration, and testing so everything is ready to use.",
    deliverable: "Turnkey hardware installation, optical calibration, and commissioning guide.",
  },
  {
    stepTag: "05",
    icon: ShieldCheck,
    title: "Support",
    subtitle: "24/7 Cloud Care",
    desc: "After launch, we provide maintenance, content updates, and technical support whenever you need it.",
    deliverable: "24/7 remote telemetry monitoring, SLA maintenance agreement, and scheduled content updates.",
  },
];

export default function HowWeWork() {
  return (
    <section className="pt-12 sm:pt-16 lg:pt-20 pb-0 bg-gray-50/50 text-black relative overflow-hidden">
      {/* Background ambient light */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-black/5 blur-[160px] rounded-full" />
      </div>

      <div className="max-w-7xl 2xl:max-w-[1536px] 3xl:max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pb-12 sm:pb-16 lg:pb-20">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-8 sm:mb-10 lg:mb-12 space-y-2 flex flex-col items-center text-center lg:items-start lg:text-left mx-auto lg:mx-0">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-2 text-[10px] sm:text-[11px] font-mono font-semibold uppercase tracking-[0.2em] text-black/50 mb-2"
          >
            <Zap className="w-3.5 h-3.5 text-black/40" />
            HOW WE WORK · THE WORKFLOW
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-black text-black tracking-tight leading-[1.1] text-[clamp(2rem,4vw,3rem)]"
          >
            From Vision to Interactive Reality
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-sm sm:text-base text-black/70 font-normal leading-relaxed pt-1 max-w-2xl"
          >
            We work with you from the first idea to the final installation, making sure the technology fits your space, your goals, and the people who will use it.
          </motion.p>
        </div>

        {/* Mobile & Tablet Process Cards (< lg) - No Connecting Lines */}
        <div className="lg:hidden flex flex-col space-y-5 sm:space-y-6 relative">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-20px" }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="bg-white p-6 rounded-2xl border border-black/10 shadow-sm flex flex-col space-y-3.5 group"
              >
                <div className="flex items-center justify-between w-full">
                  <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-2xl bg-gray-50 border border-black/10 shadow-sm flex items-center justify-center shrink-0 group-hover:border-black transition-all">
                    <Icon className="w-6 h-6 text-black" />
                  </div>
                </div>

                <div>
                  <span className="text-[10px] font-bold text-black/50 uppercase tracking-widest block mb-1">
                    {step.subtitle}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-black tracking-tight leading-tight">
                    {step.title}
                  </h3>
                </div>

                <p className="text-xs sm:text-sm text-black/75 font-normal leading-relaxed">
                  {step.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Desktop 5-Column Process Grid (>= lg) */}
        <div className="hidden lg:grid lg:grid-cols-5 gap-5 xl:gap-7 2xl:gap-8 items-start relative z-10">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="group flex flex-col justify-start items-start text-left w-full"
              >
                {/* Upper Content Area */}
                <div className="w-full relative">
                  {/* Icon Squircle Node */}
                  <div className="w-14 h-14 xl:w-16 xl:h-16 rounded-2xl bg-white border border-black/10 shadow-sm flex items-center justify-center mb-4 xl:mb-5 shrink-0 group-hover:border-black group-hover:shadow-md transition-all duration-300 relative z-10">
                    <Icon className="w-6 h-6 xl:w-7 xl:h-7 text-black group-hover:scale-105 transition-transform duration-300" />
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-lg xl:text-xl 2xl:text-2xl font-extrabold text-black tracking-tight leading-tight mb-1">
                    {step.title}
                  </h3>

                  <span className="text-[10px] sm:text-[11px] font-bold text-black/50 uppercase tracking-widest mb-2.5 block">
                    {step.subtitle}
                  </span>

                  {/* Body Description */}
                  <p className="text-xs sm:text-sm text-black/75 font-normal leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
      
      <HugeCTA />
    </section>
  );
}








