"use client";

import { useState, useRef, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring, Variants } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Calendar, Volume2, VolumeX } from "lucide-react";
import HeroInteractiveCanvas from "./HeroInteractiveCanvas";

// Staggered pop-in entrance animation sequence
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.3,
    },
  },
};

const fadeUpVariant: Variants = {
  hidden: { opacity: 0, y: 35, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 1.2,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const fadeInVariant: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 1.2, ease: "easeOut", delay: 0.6 },
  },
};

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);
  const [targetMetrics, setTargetMetrics] = useState({
    width: "calc(100% - 48px)",
    height: "calc(100vh - 109px)",
    borderRadius: "32px",
    marginTop: "83px",
  });

  useEffect(() => {
    setIsLoaded(true);

    const updateMetrics = () => {
      if (window.innerWidth < 640) { // Mobile
        setTargetMetrics({
          width: "calc(100% - 16px)", // 8px gaps
          height: "calc(100vh - 84px)", // Tighter vertical gaps
          borderRadius: "20px",
          marginTop: "68px", // Matches standard mobile navbar
        });
      } else if (window.innerWidth < 1024) { // Tablet
        setTargetMetrics({
          width: "calc(100% - 32px)",
          height: "calc(100vh - 96px)",
          borderRadius: "24px",
          marginTop: "76px",
        });
      } else { // Desktop
        setTargetMetrics({
          width: "calc(100% - 48px)",
          height: "calc(100vh - 109px)",
          borderRadius: "32px",
          marginTop: "83px",
        });
      }
    };

    updateMetrics();
    window.addEventListener("resize", updateMetrics);
    return () => window.removeEventListener("resize", updateMetrics);
  }, []);

  // Track scroll position with spring physics smoothing for liquid-smooth scroll scaling
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Smooth scroll progress using spring physics (matching Framer Vectura engine)
  const smoothScrollProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 25,
    restDelta: 0.001,
  });

  const [scaleEnd, setScaleEnd] = useState(0.86);
  useEffect(() => {
    setScaleEnd(window.innerWidth < 1024 ? 1.0 : 0.86);
  }, []);
  const cardScaleScroll = useTransform(smoothScrollProgress, [0, 1], [1.0, scaleEnd]);
  const contentOpacity = useTransform(smoothScrollProgress, [0, 0.45], [1, 0]);
  const contentY = useTransform(smoothScrollProgress, [0, 0.45], [0, -50]);

  return (
    <section ref={containerRef} className="sticky top-0 z-[1] w-full h-dvh bg-white flex flex-col items-center overflow-hidden">
        
      {/* Background Video Card — Smooth Framer Entrance Shrink to Padded Card */}
      <motion.div
        style={{
          scale: cardScaleScroll,
          willChange: "transform, width, height, margin-top, border-radius",
        }}
        initial={{
          width: "100%",
          height: "100vh",
          borderRadius: "0px",
          marginTop: "0px",
        }}
        animate={isLoaded ? targetMetrics : {
          width: "100%",
          height: "100vh",
          borderRadius: "0px",
          marginTop: "0px",
        }}
        transition={{
          duration: 2.3,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="relative z-0 overflow-hidden shadow-2xl origin-top"
      >
        {/* Hardware-accelerated background video (optimized for performance) */}
        <video
          ref={videoRef}
          autoPlay
          loop
          muted={isMuted}
          playsInline
          preload="auto"
          poster="/hero-main-poster.jpg"
          className="absolute inset-0 w-full h-full object-cover object-center"
          style={{ minWidth: "100%", minHeight: "100%", transform: "translateZ(0)", willChange: "transform" }}
          src="/hero-0911.mp4"
        />
        
        {/* Interactive Optical Sensing Canvas Overlay */}
        <div className="absolute inset-0 z-[5] opacity-25 pointer-events-none">
          <HeroInteractiveCanvas />
        </div>

        {/* Cinematic Overlay Gradient */}
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/80 via-black/30 to-transparent pointer-events-none" />

        {/* Main Content Area */}
        <motion.div
          style={{ opacity: contentOpacity, y: contentY }}
          variants={containerVariants}
          initial="hidden"
          animate={isLoaded ? "visible" : "hidden"}
          className="absolute inset-0 z-20 w-full h-full flex flex-col items-center justify-center pb-0 px-4 sm:px-6 lg:px-8"
        >
          <div className="w-full max-w-4xl flex flex-col items-center text-center">

            {/* Headline */}
            <motion.h1
              variants={fadeUpVariant}
              className="font-semibold text-white tracking-tight leading-[1.12] max-w-4xl mb-4 sm:mb-6 drop-shadow-[0_4px_24px_rgba(0,0,0,0.9)] text-[clamp(1.75rem,5.2vw,4.5rem)]"
            >
              Transform Spaces into Extraordinary Interactive Experiences
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              variants={fadeUpVariant}
              className="text-sm sm:text-base lg:text-xl font-light text-white/90 leading-relaxed max-w-2xl mb-6 sm:mb-10 drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)]"
            >
              Spatial Interactive Environments &amp; Architectural Motion Projection
            </motion.p>

            {/* Dual Action Buttons */}
            <motion.div
              variants={fadeUpVariant}
              className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto"
            >
              <Link
                href="/solutions"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-white text-black font-medium text-sm tracking-wider transition-all duration-300 shadow-xl hover:bg-neutral-100 hover:scale-105 active:scale-95 text-center cursor-pointer"
              >
                <span>Explore Solutions</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>

              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-white/15 hover:bg-white/25 backdrop-blur-md border border-white/25 text-white font-medium text-sm tracking-wider transition-all duration-300 hover:scale-105 active:scale-95 text-center cursor-pointer shadow-lg"
              >
                <Calendar className="w-3.5 h-3.5 opacity-80" />
                <span>Book a Demo</span>
              </Link>
            </motion.div>
          </div>
        </motion.div>

        {/* Audio Pill Toggle */}
        <motion.div
          variants={fadeInVariant}
          initial="hidden"
          animate={isLoaded ? "visible" : "hidden"}
          className="absolute bottom-5 right-6 z-20"
        >
          <button
            onClick={() => {
              if (videoRef.current) {
                const nextState = !isMuted;
                videoRef.current.muted = nextState;
                setIsMuted(nextState);
              }
            }}
            aria-label={isMuted ? "Unmute ambient audio" : "Mute ambient audio"}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white text-[10px] font-mono tracking-wider transition-all duration-200 cursor-pointer select-none"
          >
            {isMuted ? <VolumeX className="w-3.5 h-3.5 opacity-70" /> : <Volume2 className="w-3.5 h-3.5 text-cyan-400" />}
            <span>{isMuted ? "AUDIO OFF" : "AUDIO ON"}</span>
          </button>
        </motion.div>

        {/* System Badge */}
        <motion.div
          variants={fadeInVariant}
          initial="hidden"
          animate={isLoaded ? "visible" : "hidden"}
          className="absolute bottom-5 left-6 z-20 pointer-events-none hidden sm:flex items-center gap-2 text-[10px] text-white/50 tracking-wider font-mono"
        >
          <span>© 2026 PROJECTION</span>
          <span>•</span>
          <span>GLOBAL INTERACTIVE SYSTEMS</span>
        </motion.div>
      </motion.div>
    </section>
  );
}


