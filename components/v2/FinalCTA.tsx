"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Sparkles, MessageSquare } from "lucide-react";
import SafeImage from "@/components/SafeImage";

export default function FinalCTA() {
  return (
    <section id="final-cta" className="relative z-10 py-16 sm:py-20 lg:py-28 overflow-hidden bg-black text-white w-full">
      {/* Full-width Background Image */}
      <div className="absolute inset-0 z-0">
        <SafeImage
          src="/images/architectural_light_beam.jpg"
          alt="Atmospheric architectural projection light beam in dark space"
          className="w-full h-full object-cover object-center opacity-70 brightness-90"
          containerClassName="w-full h-full"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/20 pointer-events-none" />
      </div>

      <div className="max-w-7xl 2xl:max-w-[1536px] 3xl:max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="p-6 sm:p-10 lg:p-12 xl:p-14 rounded-[1.5rem] sm:rounded-[2rem] lg:rounded-[2.5rem] bg-black/50 backdrop-blur-md border border-white/10 text-white relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-10 shadow-2xl shadow-black/40"
        >
          {/* Animated Background Glows */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute top-0 right-0 w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] bg-white/5 blur-[120px] rounded-full translate-x-1/3 -translate-y-1/3" />
            <div className="absolute bottom-0 left-0 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-white/5 blur-[100px] rounded-full -translate-x-1/2 translate-y-1/3" />
          </div>

          {/* Left Side Content */}
          <div className="relative z-10 flex-1 max-w-2xl xl:max-w-3xl text-center lg:text-left space-y-3 sm:space-y-4">
            <div className="inline-flex items-center justify-center lg:justify-start gap-2 text-xs sm:text-sm font-semibold uppercase tracking-wider text-white/70 mb-1">
              <Sparkles className="w-3.5 h-3.5 text-white/80" />
              <span>START YOUR JOURNEY</span>
            </div>
            <h2 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-[2.6rem] xl:text-[3rem] font-black leading-[1.12] tracking-tight">
              Have a Space in Mind?
            </h2>
            <p className="text-sm sm:text-base text-white/80 font-light leading-relaxed pt-1 max-w-xl mx-auto lg:mx-0">
              Tell us about your space, your audience and what you want people to experience.
            </p>
          </div>

          {/* Right Side Buttons */}
          <div className="relative z-10 shrink-0 pt-2 lg:pt-0 flex flex-col sm:flex-row items-center gap-3 sm:gap-4 w-full lg:w-auto">
            <Link
              href="/contact"
              className="group flex items-center justify-center gap-3 sm:gap-4 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full bg-white text-black font-extrabold text-xs sm:text-sm uppercase tracking-wider transition-all duration-300 hover:bg-neutral-100 hover:scale-105 active:scale-95 shadow-[0_0_40px_rgba(255,255,255,0.15)] w-full sm:w-auto cursor-pointer"
            >
              <span>Start Your Project</span>
              <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center group-hover:translate-x-1 transition-transform duration-300">
                <ArrowRight className="w-4 h-4 text-white" />
              </div>
            </Link>
            
            <Link
              href="/contact"
              className="group flex items-center justify-center gap-2.5 sm:gap-3 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white font-extrabold text-xs sm:text-sm uppercase tracking-wider transition-all duration-300 hover:bg-white/20 hover:scale-105 active:scale-95 w-full sm:w-auto cursor-pointer"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Talk to Our Team</span>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
