"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  Footprints,
  MousePointerClick,
  Gamepad2,
  Bot,
  ChevronLeft,
  ChevronRight,
  Play,
  Pause
} from "lucide-react";
import SafeImage from "@/components/SafeImage";

const solutionsList = [
  {
    num: "01",
    title: "Interactive Projection",
    href: "/solutions/interactive-projection",
    video: "/interactive-space.mp4",
    poster: "/images/v2_aurora_stage_dome.jpg",
    thumb: "/images/v2_interactive_floor_gallery.jpg",
    desc: "From interactive floors and walls to responsive optical tracking surfaces that engage visitors instantly.",
  },
  {
    num: "02",
    title: "Immersive Experiences",
    href: "/solutions/immersive-environment",
    video: "/immersive-environment-1.mp4",
    poster: "/images/v2_aurora_stage_dome.jpg",
    thumb: "/images/v2_aurora_stage_dome.jpg",
    desc: "360-degree digital destinations, projection mapping, and spatial visual environments that surround audiences.",
  },
  {
    num: "03",
    title: "AI Experiences",
    href: "/solutions/ai-experience",
    video: "/ai-receptionist-showreel.mp4",
    poster: "/images/corporate_lobby_wall.jpg",
    thumb: "/images/corporate_lobby_wall.jpg",
    desc: "Real-time AI avatars, generative spatial visuals, and conversational intelligence integrated into physical environments.",
  },
  {
    num: "04",
    title: "Interactive Engagement",
    href: "/solutions/interactive-engagement",
    video: "/smart-engagement.mp4",
    poster: "/images/entertainment_motion_arena.jpg",
    thumb: "/images/entertainment_motion_arena.jpg",
    desc: "Motion-based active games, interactive multi-user strike walls, and playful group installations.",
  },
  {
    num: "05",
    title: "LED & 3D Display Solutions",
    href: "/solutions",
    poster: "/images/v2_brand_activation_hall.jpg",
    thumb: "/images/v2_brand_activation_hall.jpg",
    desc: "Seamless high-brightness LED installations, anamorphic 3D spatial displays, and custom display formats.",
  },
];

const experienceStates = [
  {
    title: "MOVE",
    desc: "The environment responds.",
    icon: Footprints,
  },
  {
    title: "TOUCH",
    desc: "The content changes.",
    icon: MousePointerClick,
  },
  {
    title: "PLAY",
    desc: "The space reacts.",
    icon: Gamepad2,
  },
  {
    title: "TALK",
    desc: "AI responds.",
    icon: Bot,
  },
];

export default function SolutionsOverview() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeSolution = solutionsList[activeIndex];
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + solutionsList.length) % solutionsList.length);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % solutionsList.length);
  };

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => {});
    }
  }, [activeIndex]);

  return (
    <>
      {/* ========================================================================= */}
      {/* SECTION 02: WHAT WE CREATE (WHITE LUXURY ARCHITECTURAL)                   */}
      {/* ========================================================================= */}
      <section id="what-we-create" className="bg-white text-neutral-950 py-24 sm:py-32 relative overflow-hidden border-t border-neutral-100">
        <div className="max-w-7xl 2xl:max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 space-y-14 sm:space-y-16">
          {/* Top Row: Heading on Left, Large Video Showcase on Right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Content */}
            <div className="lg:col-span-5 space-y-5">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-cyan-600 font-mono text-sm tracking-widest font-bold">02</span>
                  <span className="text-neutral-300 text-xs">/</span>
                  <span className="text-xs font-semibold uppercase tracking-[0.15em] text-neutral-500 font-mono">WHAT WE CREATE</span>
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-[-0.03em] text-neutral-950 leading-[1.08] uppercase">
                  Experiences Built Around Your Space
                </h2>
              </div>

              <p className="text-base sm:text-lg text-neutral-600 font-normal leading-relaxed pt-1 max-w-lg">
                From interactive environments to AI-powered experiences and digital displays, we create solutions around the space, audience and experience you want to deliver.
              </p>

              <div className="pt-2">
                <Link
                  href="/solutions"
                  className="inline-flex items-center gap-2.5 text-sm font-bold text-neutral-950 hover:text-cyan-600 transition-colors group cursor-pointer"
                >
                  <span className="underline underline-offset-4 decoration-neutral-300 group-hover:decoration-cyan-600">Explore Solutions</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform text-cyan-600" />
                </Link>
              </div>
            </div>

            {/* Right Large Showcase Visual (Plays Real High-Res Videos) */}
            <div className="lg:col-span-7">
              <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] lg:aspect-[16/10] rounded-2xl sm:rounded-3xl overflow-hidden border border-neutral-900/10 bg-black shadow-[0_20px_50px_rgba(0,0,0,0.14)]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeSolution.num}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.35 }}
                    className="absolute inset-0 w-full h-full"
                  >
                    {activeSolution.video ? (
                      <video
                        ref={videoRef}
                        src={activeSolution.video}
                        poster={activeSolution.poster}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover object-center"
                      />
                    ) : (
                      <SafeImage
                        src={activeSolution.poster}
                        alt={activeSolution.title}
                        className="w-full h-full object-cover object-center"
                        containerClassName="w-full h-full"
                      />
                    )}
                    
                    {/* Dark Bottom Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-transparent pointer-events-none" />

                    {/* Bottom Info & Arrow Controls */}
                    <div className="absolute bottom-5 left-5 right-5 sm:bottom-6 sm:left-6 sm:right-6 flex items-end justify-between z-10">
                      <div>
                        <span className="px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/40 text-cyan-300 text-xs font-mono font-bold inline-block mb-2 shadow-sm">
                          {activeSolution.num}
                        </span>
                        <h3 className="text-xl sm:text-2xl font-bold text-white drop-shadow-md tracking-tight">
                          {activeSolution.title}
                        </h3>
                      </div>

                      <div className="flex items-center gap-2">
                        <button
                          onClick={handlePrev}
                          aria-label="Previous solution"
                          className="w-10 h-10 rounded-full bg-black/60 hover:bg-black/90 border border-white/20 text-white flex items-center justify-center transition-all cursor-pointer backdrop-blur-md hover:scale-105 active:scale-95"
                        >
                          <ChevronLeft className="w-4 h-4" />
                        </button>
                        <button
                          onClick={handleNext}
                          aria-label="Next solution"
                          className="w-10 h-10 rounded-full bg-black/60 hover:bg-black/90 border border-white/20 text-white flex items-center justify-center transition-all cursor-pointer backdrop-blur-md hover:scale-105 active:scale-95"
                        >
                          <ChevronRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>

          {/* Bottom Row: 5 High-Res Solution Cards in Museum Gallery Design */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {solutionsList.map((item, idx) => {
              const isActive = activeIndex === idx;
              return (
                <button
                  key={item.num}
                  onClick={() => setActiveIndex(idx)}
                  className={`text-left p-3.5 rounded-2xl transition-all duration-300 cursor-pointer border flex flex-col group ${
                    isActive
                      ? "bg-white border-2 border-cyan-500 shadow-[0_12px_36px_rgba(6,182,212,0.22)] scale-[1.03]"
                      : "bg-white border border-neutral-200/70 hover:border-neutral-300 hover:shadow-lg"
                  }`}
                >
                  <div className={`w-full aspect-[16/10] rounded-xl overflow-hidden mb-3 bg-black relative transition-all duration-300 ${
                    isActive
                      ? "ring-2 ring-cyan-500 shadow-[0_0_15px_rgba(6,182,212,0.3)]"
                      : "group-hover:border-neutral-300"
                  }`}>
                    <SafeImage
                      src={item.thumb}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      containerClassName="w-full h-full"
                    />
                  </div>
                  <span className={`text-xs font-mono font-bold block mb-1 transition-colors ${isActive ? "text-cyan-600" : "text-neutral-400"}`}>
                    {item.num}
                  </span>
                  <span className={`text-xs sm:text-sm font-bold leading-tight line-clamp-2 transition-colors ${isActive ? "text-neutral-950" : "text-neutral-800 group-hover:text-neutral-950"}`}>
                    {item.title}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 03: THE EXPERIENCE (DARK THEATRICAL ANCHOR #1)                     */}
      {/* ========================================================================= */}
      <section id="the-experience" className="bg-[#050811] text-white py-24 sm:py-32 relative overflow-hidden border-t border-slate-900 shadow-2xl">
        <div className="max-w-7xl 2xl:max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
          {/* Section Header */}
          <div className="max-w-3xl space-y-3">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-cyan-400 font-mono text-sm tracking-widest font-semibold">03</span>
              <span className="text-white/20 text-xs">/</span>
              <span className="text-xs font-semibold uppercase tracking-wider text-white/50">THE EXPERIENCE</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-[-0.02em] text-white leading-[1.12]">
              People Don't Just Watch. They Interact.
            </h2>

            <p className="text-sm sm:text-base text-white/75 font-normal leading-relaxed pt-1 max-w-2xl">
              Movement, touch, play and conversation can become part of the experience. The environment responds in real time.
            </p>
          </div>

          {/* 4 Clean Circular State Cards Matching Mockup */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {experienceStates.map((state) => {
              const Icon = state.icon;
              return (
                <div
                  key={state.title}
                  className="p-6 sm:p-7 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-cyan-400/50 hover:bg-white/[0.04] transition-all duration-300 flex flex-col items-center text-center group cursor-default shadow-sm hover:shadow-[0_4px_30px_rgba(56,189,248,0.15)]"
                >
                  <div className="w-16 h-16 rounded-full border border-white/20 bg-white/[0.03] flex items-center justify-center text-white mb-4 group-hover:scale-105 group-hover:border-cyan-400 group-hover:text-cyan-400 group-hover:shadow-[0_0_20px_rgba(56,189,248,0.35)] transition-all">
                    <Icon className="w-7 h-7 stroke-[1.75]" />
                  </div>
                  <h3 className="text-sm sm:text-base font-bold text-white tracking-wider uppercase mb-1.5">
                    {state.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-white/60 font-light leading-relaxed">
                    {state.desc}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Large High-Res Panoramic Video / Media Showcase */}
          <div className="relative w-full aspect-[21/9] sm:aspect-[2.4/1] max-h-[500px] rounded-2xl sm:rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-black">
            <video
              src="/hero-interactive-wall.mp4"
              poster="/images/v2_child_interactive_wall.jpg"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#030509]/95 via-transparent to-transparent pointer-events-none" />
            
            {/* Bottom-left explore link */}
            <div className="absolute bottom-6 left-6 sm:bottom-8 sm:left-8 z-10">
              <Link
                href="/solutions"
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-white hover:text-cyan-400 transition-colors group cursor-pointer bg-black/60 backdrop-blur-md px-5 py-2.5 rounded-full border border-white/15 hover:border-white/30"
              >
                <span>Explore The Experience</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}