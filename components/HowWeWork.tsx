"use client";

import { motion } from "framer-motion";
import { Search, Compass, Code2, Wrench, ShieldCheck, Zap } from "lucide-react";
import HugeCTA from "@/components/ui/HugeCTA";

const steps = [
  {
    stepTag: "01",
    icon: Search,
    title: "Discover",
    subtitle: "Understand Your Space",
    desc: "We learn about your space, audience, goals and requirements to find the right approach for your project.",
    deliverable: "Spatial feasibility report, technical specification, and budget roadmap.",
  },
  {
    stepTag: "02",
    icon: Compass,
    title: "Design",
    subtitle: "Plan the Experience",
    desc: "We shape the visuals, interaction and layout around your space and how people will use it.",
    deliverable: "3D architectural mockups, UX storyboard, and spatial interaction blueprint.",
  },
  {
    stepTag: "03",
    icon: Code2,
    title: "Develop",
    subtitle: "Build the Experience",
    desc: "We create the interactive content and technology needed to bring the experience to life.",
    deliverable: "Custom real-time software build, interactive shaders, and CMS integration.",
  },
  {
    stepTag: "04",
    icon: Wrench,
    title: "Install",
    subtitle: "Set Up and Test",
    desc: "We install the system, set everything up and test the experience in space before launch.",
    deliverable: "Turnkey hardware installation, optical calibration, and commissioning guide.",
  },
  {
    stepTag: "05",
    icon: ShieldCheck,
    title: "Support",
    subtitle: "Support After Launch",
    desc: "We provide technical support and help with maintenance, content updates and future changes.",
    deliverable: "24/7 remote telemetry monitoring, SLA maintenance agreement, and scheduled content updates.",
  },
];

export default function HowWeWork() {
  return (
    <section className="pt-10 sm:pt-12 lg:pt-14 pb-0 bg-gray-50/50 text-black relative overflow-hidden">
      {/* Background ambient light */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-black/5 blur-[160px] rounded-full" />
      </div>

      <div className="max-w-7xl 2xl:max-w-[1536px] 3xl:max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pb-8 sm:pb-10 lg:pb-12">
        
        {/* Section Header */}
        <div className="max-w-4xl xl:max-w-5xl mb-6 sm:mb-8 space-y-2 flex flex-col items-center text-center lg:items-start lg:text-left mx-auto lg:mx-0">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-2 text-xs sm:text-sm font-semibold uppercase tracking-wide text-black/60 mb-2"
          >
            <Zap className="w-3.5 h-3.5 text-black/40" />
            HOW WE WORK
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-black text-black tracking-tight leading-[1.1] text-2xl sm:text-3xl md:text-4xl lg:text-[2.5rem] xl:text-[2.75rem] lg:whitespace-nowrap"
          >
            From Idea to Interactive Experience
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-sm sm:text-base text-black/70 font-normal leading-relaxed pt-1 max-w-2xl"
          >
            We take your project from the first idea to installation, creating an experience that fits your space, audience and goals.
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
                  <span className="text-xs font-semibold text-neutral-500 uppercase tracking-wide block mb-1">
                    {step.subtitle}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-black tracking-tight leading-tight">
                    {step.title}
                  </h3>
                </div>

                <p className="text-sm text-black/75 font-normal leading-relaxed">
                  {step.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Desktop 5-Column Process Grid (>= lg) */}
        <div className="hidden lg:grid lg:grid-cols-5 gap-3.5 xl:gap-6 2xl:gap-8 items-start relative z-10">
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
                  <div className="w-12 h-12 xl:w-14 xl:h-14 2xl:w-16 2xl:h-16 rounded-xl xl:rounded-2xl bg-white border border-black/10 shadow-sm flex items-center justify-center mb-3.5 xl:mb-5 shrink-0 group-hover:border-black group-hover:shadow-md transition-all duration-300 relative z-10">
                    <Icon className="w-5 h-5 xl:w-6 xl:h-6 2xl:w-7 2xl:h-7 text-black group-hover:scale-105 transition-transform duration-300" />
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-base xl:text-lg 2xl:text-2xl font-extrabold text-black tracking-tight leading-tight mb-1">
                    {step.title}
                  </h3>

                  <span className="text-xs font-semibold text-neutral-500 uppercase tracking-wide mb-2 xl:mb-2.5 block">
                    {step.subtitle}
                  </span>

                  {/* Body Description */}
                  <p className="text-xs xl:text-sm text-black/75 font-normal leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
      
      <HugeCTA className="py-8 sm:py-10 lg:py-12" />
    </section>
  );
}








