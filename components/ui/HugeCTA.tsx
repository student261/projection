"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Sparkles, MessageSquare } from "lucide-react";
import SafeImage from "@/components/SafeImage";

export default function HugeCTA() {
  return (
    <section className="relative z-10 py-24 lg:py-32 overflow-hidden bg-black text-white w-full shadow-[0_30px_60px_rgba(0,0,0,0.8)] border-b border-white/10">
      {/* Full-width Background Image */}
      <div className="absolute inset-0 z-0">
        <SafeImage
          src="https://momentfactory.com/cdn/shop/files/preview_images/0facee35b3b047cea1c88598a5a3c20a.thumbnail.0000000000_500x.jpg"
          alt="Interactive Vision Background"
          className="w-full h-full object-cover object-center opacity-40 filter brightness-75"
          containerClassName="w-full h-full"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="p-8 sm:p-12 lg:p-16 rounded-[2rem] lg:rounded-[3rem] bg-black/40 backdrop-blur-md border border-white/10 text-white relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-10 shadow-2xl shadow-black/20"
        >
          {/* Animated Background Glows */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute top-0 right-0 w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] bg-white/5 blur-[120px] rounded-full translate-x-1/3 -translate-y-1/3" />
            <div className="absolute bottom-0 left-0 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-white/5 blur-[100px] rounded-full -translate-x-1/2 translate-y-1/3" />
          </div>

          {/* Left Side Content */}
          <div className="relative z-10 max-w-2xl text-center lg:text-left space-y-4">
            <div className="inline-flex items-center justify-center lg:justify-start gap-2 text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.2em] text-white/50 mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Start Your Journey</span>
            </div>
            <h4 className="text-white text-3xl sm:text-4xl lg:text-5xl font-black leading-[1.1]">
              Ready to bring your <br className="hidden sm:block" /> interactive vision to life?
            </h4>
            <p className="text-sm sm:text-base text-white/80 font-light leading-relaxed pt-2 max-w-xl mx-auto lg:mx-0">
              Tell us about your space, audience, and goals. Our engineering and creative teams will craft a tailored technical proposal for your project.
            </p>
          </div>

          {/* Right Side Buttons */}
          <div className="relative z-10 shrink-0 pt-4 lg:pt-0 flex flex-col sm:flex-row items-center gap-4">
            <Link
              href="/contact"
              className="group flex items-center justify-center gap-4 px-6 sm:px-8 py-4 sm:py-5 rounded-full bg-white text-black font-extrabold text-xs sm:text-[13px] uppercase tracking-[0.15em] transition-all duration-500 hover:bg-gray-100 hover:scale-105 active:scale-95 shadow-[0_0_40px_rgba(255,255,255,0.1)] w-full sm:w-auto"
            >
              <span>Start Your Project</span>
              <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center group-hover:translate-x-1 transition-transform duration-300">
                <ArrowRight className="w-4 h-4 text-white" />
              </div>
            </Link>
            
            <Link
              href="/contact"
              className="group flex items-center justify-center gap-3 px-6 sm:px-8 py-4 sm:py-5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white font-extrabold text-xs sm:text-[13px] uppercase tracking-[0.15em] transition-all duration-500 hover:bg-white/20 hover:scale-105 active:scale-95 w-full sm:w-auto"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Discuss Options</span>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
