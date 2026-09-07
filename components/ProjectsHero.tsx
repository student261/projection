"use client";

import { motion } from "framer-motion";
import { Sparkles, Globe, Users, Target } from "lucide-react";
import AnimatedCounter from "@/components/ui/AnimatedCounter";

const stats = [
  {
    icon: Globe,
    to: 10,
    decimals: 0,
    suffix: "+",
    label: "GLOBAL PROJECTS",
    subtext: "Deployments in 12 Countries",
  },
  {
    icon: Users,
    to: 4.2,
    decimals: 1,
    suffix: "M+",
    label: "ANNUAL VISITORS",
    subtext: "Engaged Worldwide",
  },
  {
    icon: Target,
    to: 8,
    decimals: 0,
    suffix: "",
    label: "TARGET SECTORS",
    subtext: "Museums to Hospitality",
  },
];

export default function ProjectsHero() {
  return (
    <section className="py-20 sm:py-28 bg-white border-b border-black/10 text-center relative overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-neutral-200/40 rounded-full blur-[140px] pointer-events-none z-0" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 relative z-10">
        
        {/* Top Pill Badge */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.25em] text-black bg-neutral-100 px-4 py-2 rounded-full border border-neutral-300 font-bold shadow-sm"
        >
          <Sparkles className="w-3.5 h-3.5 text-black" />
          <span>STUDIO ARCHIVES — 2024–2026</span>
        </motion.div>

        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
          className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-black leading-[1.08]"
        >
          Portfolio of <br />
          <span className="font-light text-black/75">Spatial Installations</span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          className="text-base sm:text-xl text-black/70 font-light leading-relaxed max-w-2xl mx-auto"
        >
          Our global collection of motion-projected sanctuaries, high-altitude observation floors, AI voice avatar hosts, and 360-degree immersive exhibits.
        </motion.p>

        {/* Animated Counter Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35, ease: "easeOut" }}
          className="pt-10 border-t border-black/10"
        >
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-4 items-center">
            {stats.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <div
                  key={idx}
                  className="relative group p-4 rounded-2xl transition-all duration-300 hover:bg-gray-50/80"
                >
                  <div className="flex flex-col items-center space-y-2">
                    <div className="w-10 h-10 rounded-full bg-neutral-100 border border-neutral-200 flex items-center justify-center text-black group-hover:scale-110 group-hover:bg-black group-hover:text-white transition-all duration-300">
                      <Icon className="w-4 h-4" />
                    </div>

                    <AnimatedCounter
                      to={stat.to}
                      decimals={stat.decimals}
                      suffix={stat.suffix}
                      duration={2.2}
                      className="text-4xl sm:text-5xl text-black tracking-tight group-hover:text-black transition-colors"
                    />

                    <span className="text-[11px] font-bold text-black/60 uppercase tracking-widest block">
                      {stat.label}
                    </span>

                    <span className="text-[10px] text-black/40 font-light">
                      {stat.subtext}
                    </span>
                  </div>

                  {/* Vertical Divider line for desktop */}
                  {idx < stats.length - 1 && (
                    <div className="hidden sm:block absolute right-0 top-1/2 -translate-y-1/2 h-12 w-px bg-black/10" />
                  )}
                </div>
              );
            })}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
