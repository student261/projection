"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import SafeImage from "@/components/SafeImage";

const stats = [
  {
    to: 10,
    decimals: 0,
    suffix: "+",
    label: "GLOBAL INSTALLATIONS",
    subtext: "Deployments in 12 Countries",
  },
  {
    to: 4.2,
    decimals: 1,
    suffix: "M+",
    label: "ANNUAL AUDIENCE",
    subtext: "Engaged Worldwide",
  },
  {
    to: 8,
    decimals: 0,
    suffix: "",
    label: "SPECIALIZED SECTORS",
    subtext: "Heritage to Commercial",
  },
];

export default function ProjectsHero() {
  return (
    <section className="relative h-screen min-h-screen w-full bg-black text-white text-center overflow-hidden flex flex-col justify-between pt-24 pb-8 sm:pb-10">
      {/* Cinematic Background Image Layer with Motion & Multi-Directional Gradient */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <SafeImage
          src="/images/architectural_light_beam.jpg"
          alt="Spatial Projection Hero Background"
          className="w-full h-full object-cover opacity-60 brightness-[0.85] contrast-[1.1] scale-105 animate-[slow-pan_25s_ease-in-out_infinite_alternate]"
          containerClassName="w-full h-full"
          priority
        />
        {/* Soft Multi-Directional Vignettes */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black/80" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(6,182,212,0.08)_0%,transparent_70%)] pointer-events-none" />
      </div>

      {/* Top Spacer for perfect vertical balance */}
      <div className="hidden sm:block h-2" />

      {/* Center Hero Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 sm:space-y-7 relative z-10 my-auto">
        
        {/* Top Tag */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex justify-center items-center gap-2 text-[10px] sm:text-[11px] font-mono font-semibold tracking-[0.2em] text-white/60 uppercase"
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>STUDIO ARCHIVE • GLOBAL INSTALLATIONS</span>
        </motion.div>

        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.08, ease: "easeOut" }}
          className="text-[clamp(2rem,6vw,4.5rem)] font-black tracking-tight text-white leading-[1.05] drop-shadow-2xl"
        >
          Portfolio of <br />
          <span className="font-light text-white/70">Spatial Installations</span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
          className="text-sm sm:text-base lg:text-lg text-white/75 font-light leading-relaxed max-w-2xl mx-auto drop-shadow-md"
        >
          Our global collection of motion-projected sanctuaries, high-altitude observation floors, AI voice avatar hosts, and 360-degree immersive exhibits.
        </motion.p>

        {/* Clean Balanced Stat Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25, ease: "easeOut" }}
          className="pt-2 sm:pt-4 max-w-2xl mx-auto"
        >
          <div className="grid grid-cols-3 gap-2 sm:gap-8 items-start">
            {stats.map((stat, idx) => (
              <div key={idx} className="flex flex-col items-center text-center justify-start">
                <div className="flex items-baseline mb-1 sm:mb-2">
                  <AnimatedCounter
                    to={stat.to}
                    decimals={stat.decimals}
                    suffix={stat.suffix}
                    duration={2}
                    className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight font-sans drop-shadow-lg leading-none whitespace-nowrap"
                  />
                </div>

                <span className="text-[9px] sm:text-[10px] font-mono font-semibold text-white/60 uppercase tracking-wider block pt-1 truncate w-full">
                  {stat.label}
                </span>

                <span className="text-[10px] sm:text-[11px] text-white/40 font-light block truncate w-full pt-0.5">
                  {stat.subtext}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
