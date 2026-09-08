"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";
import { useRef } from "react";

export default function Hero() {
  const containerRef = useRef(null);
  
  // Track scroll progress through the 200vh container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Dramatic "Dive-in" Portal Effects
  const textScale = useTransform(scrollYProgress, [0, 0.5], [1, 2.5]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const textBlur = useTransform(scrollYProgress, [0, 0.4], ["blur(0px)", "blur(20px)"]);
  
  // Video scales up to swallow the screen, overlay fades out
  const videoScale = useTransform(scrollYProgress, [0, 1], [1.05, 1.25]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.5], [0.65, 0]);

  return (
    <section ref={containerRef} className="relative w-full h-[120vh] bg-[#0D0D12] text-white selection:bg-[#000000] selection:text-white">
      {/* Sticky Container - Holds everything in place while scrubbing animations */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-center">
        
        {/* Background Cinematic Video Layer */}
        <motion.div 
          style={{ scale: videoScale }}
          className="absolute inset-0 z-0 overflow-hidden pointer-events-none origin-center"
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            // A high-quality placeholder image of an immersive room
            poster="https://momentfactory.com/cdn/shop/files/Aura_EgliseSaint-Roch_MomentFactory__DSC4360.png"
            className="w-full h-full object-cover object-center opacity-90 filter brightness-[1.08] contrast-[1.12] saturate-[1.15]"
          >
            {/* TODO: Replace with final cinematic video showing all 9 product experiences */}
            <source
              src="https://strvid.nyc3.cdn.digitaloceanspaces.com/motionsite/creative_studio_video.mp4"
              type="video/mp4"
            />
          </video>
        </motion.div>

        {/* Dynamic Dark Ambient Overlay Layer - Fades out on scroll to reveal pure video */}
        <motion.div 
          style={{ opacity: overlayOpacity }}
          className="absolute inset-0 z-10 bg-gradient-to-r from-[#0D0D12] via-[#0D0D12]/60 to-transparent pointer-events-none" 
        />
        <div className="absolute bottom-0 inset-x-0 h-40 z-10 bg-gradient-to-t from-[#0D0D12] to-transparent pointer-events-none" />

        {/* Main Content Area - Scales massively and blurs out */}
        <motion.div 
          style={{ 
            scale: textScale, 
            opacity: textOpacity,
            filter: textBlur,
            transformOrigin: "left center" 
          }}
          className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-20 flex flex-col items-start"
        >
          
          {/* Main Display Headline (H1) */}
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl sm:text-6xl lg:text-[5rem] font-black text-white tracking-tighter leading-[1.05] max-w-4xl mb-4"
          >
            Transform Spaces into Extraordinary Interactive Experiences
          </motion.h1>

          {/* Subheadline (H2) */}
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight text-white/90 max-w-3xl mb-8"
          >
            Spatial Interactive Environments &amp; Motion Projection
          </motion.h2>

          {/* Action Buttons (2 CTAs) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap items-center gap-4"
          >
            <Link
              href="/solutions"
              className="group inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full bg-white text-black font-bold text-[11px] uppercase tracking-widest transition-all duration-300 shadow-2xl hover:scale-105 active:scale-95 text-center cursor-pointer"
            >
              <span>EXPLORE SOLUTIONS</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold text-[11px] uppercase tracking-widest transition-all duration-300 hover:bg-white/20 hover:scale-105 active:scale-95 text-center cursor-pointer"
            >
              <Calendar className="w-4 h-4 opacity-70 group-hover:opacity-100 transition-opacity" />
              <span>BOOK A DEMO</span>
            </Link>
          </motion.div>

        </motion.div>

        {/* Bottom Highlights Bar - Stays static at bottom of viewport */}
        <footer className="absolute bottom-4 z-20 w-full max-w-7xl left-1/2 -translate-x-1/2 px-4 sm:px-6 lg:px-8 border-t border-white/10 pt-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/60">
          <div className="flex items-center gap-4 text-[11px]">
            <span className="font-bold text-white">© 2026 PROJECTION</span>
            <span>•</span>
            <span>GLOBAL INTERACTIVE SYSTEMS</span>
          </div>
          <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-white/80 font-bold tracking-wider uppercase text-[10px] sm:text-[11px]">
            <span>PROJECTION MAPPING</span>
            <span>•</span>
            <span>MOTION TRACKING</span>
            <span>•</span>
            <span>IMMERSIVE ROOMS</span>
          </div>
        </footer>

      </div>
    </section>
  );
}
