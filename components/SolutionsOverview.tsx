"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SafeImage from "@/components/SafeImage";
import WhatWeBuild from "@/components/WhatWeBuild";

const solutions = [
  {
    id: "interactive-floors-walls",
    num: "01",
    subtitle: "SURFACES THAT REACT",
    title: "Movement",
    description:
      "Step in. Visuals ripple and follow every footstep.",
    img: "/images/hospitality_koi_pond.jpg",
    href: "/solutions/interactive-projection",
    cta: "Explore Movement",
    highlights: [
      "Visuals ripple and react with every step",
      "Motion tracking detects presence instantly",
      "Dynamic reactive surfaces underfoot",
    ],
  },
  {
    id: "interactive-play",
    num: "02",
    subtitle: "SPARKS SPONTANEOUS PLAY",
    title: "Active Play",
    description:
      "Kick, jump, and compete. Multiplayer floor games that spark spontaneous fun.",
    img: "/images/entertainment_motion_arena.jpg",
    href: "/solutions/interactive-engagement",
    cta: "Explore Active Play",
    highlights: [
      "Multiplayer floor games and challenges",
      "Social, active physical participation",
      "Touch-free and intuitive group play",
    ],
  },
  {
    id: "interactive-touch",
    num: "03",
    subtitle: "REVEALS HIDDEN STORIES",
    title: "Tactile Touch",
    description:
      "Reach out. Blank walls respond to touch and reveal hidden stories.",
    img: "/images/interactive_strike_wall.jpg",
    href: "/solutions/interactive-projection",
    cta: "Explore Touch Surfaces",
    highlights: [
      "Responsive interactive wall projection",
      "Touch and gesture detection",
      "Storytelling revealed through interaction",
    ],
  },
  {
    id: "immersive-environments",
    num: "04",
    subtitle: "SURROUNDS YOUR SENSES",
    title: "360° Immersion",
    description:
      "Step inside. 360° projection that surrounds visitors in living digital art.",
    img: "/images/cathedral_projection_mapping.jpg",
    href: "/solutions/immersive-environment",
    cta: "Explore Immersive Rooms",
    highlights: [
      "Floor-to-ceiling 360° projection mapping",
      "Panoramic spatial soundscapes",
      "Complete sensory visual environments",
    ],
  },
];


function StackingCapabilities() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // 4 Cards over scroll runway [0.0 to 1.0]:
  // Full coverage from 0.0 to 1.0 so Web Animations API never reverts or un-mounts styles

  // CARD 0 (Movement)
  // Text content leaves: flies UP and OUT through the top of the card
  const title0Y = useTransform(scrollYProgress, [0.0, 0.10, 0.28, 1.0], [0, 0, -550, -550]);
  const subtitle0Y = useTransform(scrollYProgress, [0.0, 0.10, 0.28, 1.0], [0, 0, -500, -500]);
  const btn0Y = useTransform(scrollYProgress, [0.0, 0.10, 0.28, 1.0], [0, 0, -480, -480]);
  const desc0Y = useTransform(scrollYProgress, [0.0, 0.10, 0.28, 1.0], [0, 0, -450, -450]);
  const opacity0 = useTransform(scrollYProgress, [0.0, 0.10, 0.25, 1.0], [1, 1, 0, 0]);
  // Image leaves: rotates up to 55deg and flies UP and RIGHT out of the card
  const img0Rotate = useTransform(scrollYProgress, [0.0, 0.10, 0.28, 1.0], [0, 0, 55, 55]);
  const img0Y = useTransform(scrollYProgress, [0.0, 0.10, 0.28, 1.0], [0, 0, -700, -700]);
  const img0X = useTransform(scrollYProgress, [0.0, 0.10, 0.28, 1.0], [0, 0, 180, 180]);
  const img0Scale = useTransform(scrollYProgress, [0.0, 0.10, 0.28, 1.0], [1, 1, 0.85, 0.85]);
  const img0Opacity = useTransform(scrollYProgress, [0.0, 0.10, 0.26, 1.0], [1, 1, 0, 0]);

  // CARD 1 (Active Play)
  // Enters from +500px below, rests, then leaves to -500px above
  const title1Y = useTransform(scrollYProgress, [0.0, 0.12, 0.30, 0.42, 0.60, 1.0], [550, 550, 0, 0, -550, -550]);
  const subtitle1Y = useTransform(scrollYProgress, [0.0, 0.12, 0.30, 0.42, 0.60, 1.0], [500, 500, 0, 0, -500, -500]);
  const btn1Y = useTransform(scrollYProgress, [0.0, 0.12, 0.30, 0.42, 0.60, 1.0], [480, 480, 0, 0, -480, -480]);
  const desc1Y = useTransform(scrollYProgress, [0.0, 0.12, 0.30, 0.42, 0.60, 1.0], [450, 450, 0, 0, -450, -450]);
  const opacity1 = useTransform(scrollYProgress, [0.0, 0.12, 0.26, 0.42, 0.56, 1.0], [0, 0, 1, 1, 0, 0]);
  // Image enters tilted at 32deg from below, levels to 0, then rotates to 55deg and flies out
  const img1Rotate = useTransform(scrollYProgress, [0.0, 0.12, 0.30, 0.42, 0.60, 1.0], [32, 32, 0, 0, 55, 55]);
  const img1Y = useTransform(scrollYProgress, [0.0, 0.12, 0.30, 0.42, 0.60, 1.0], [700, 700, 0, 0, -700, -700]);
  const img1X = useTransform(scrollYProgress, [0.0, 0.12, 0.30, 0.42, 0.60, 1.0], [-50, -50, 0, 0, 180, 180]);
  const img1Scale = useTransform(scrollYProgress, [0.0, 0.12, 0.30, 0.42, 0.60, 1.0], [0.85, 0.85, 1, 1, 0.85, 0.85]);
  const img1Opacity = useTransform(scrollYProgress, [0.0, 0.12, 0.26, 0.42, 0.56, 1.0], [0, 0, 1, 1, 0, 0]);

  // CARD 2 (Tactile Touch)
  const title2Y = useTransform(scrollYProgress, [0.0, 0.44, 0.62, 0.74, 0.92, 1.0], [550, 550, 0, 0, -550, -550]);
  const subtitle2Y = useTransform(scrollYProgress, [0.0, 0.44, 0.62, 0.74, 0.92, 1.0], [500, 500, 0, 0, -500, -500]);
  const btn2Y = useTransform(scrollYProgress, [0.0, 0.44, 0.62, 0.74, 0.92, 1.0], [480, 480, 0, 0, -480, -480]);
  const desc2Y = useTransform(scrollYProgress, [0.0, 0.44, 0.62, 0.74, 0.92, 1.0], [450, 450, 0, 0, -450, -450]);
  const opacity2 = useTransform(scrollYProgress, [0.0, 0.44, 0.58, 0.74, 0.88, 1.0], [0, 0, 1, 1, 0, 0]);
  const img2Rotate = useTransform(scrollYProgress, [0.0, 0.44, 0.62, 0.74, 0.92, 1.0], [32, 32, 0, 0, 55, 55]);
  const img2Y = useTransform(scrollYProgress, [0.0, 0.44, 0.62, 0.74, 0.92, 1.0], [700, 700, 0, 0, -700, -700]);
  const img2X = useTransform(scrollYProgress, [0.0, 0.44, 0.62, 0.74, 0.92, 1.0], [-50, -50, 0, 0, 180, 180]);
  const img2Scale = useTransform(scrollYProgress, [0.0, 0.44, 0.62, 0.74, 0.92, 1.0], [0.85, 0.85, 1, 1, 0.85, 0.85]);
  const img2Opacity = useTransform(scrollYProgress, [0.0, 0.44, 0.58, 0.74, 0.88, 1.0], [0, 0, 1, 1, 0, 0]);

  // CARD 3 (360° Immersion) - Final Card stays pinned and visible through 1.0
  const title3Y = useTransform(scrollYProgress, [0.0, 0.76, 0.94, 1.0], [550, 550, 0, 0]);
  const subtitle3Y = useTransform(scrollYProgress, [0.0, 0.76, 0.94, 1.0], [500, 500, 0, 0]);
  const btn3Y = useTransform(scrollYProgress, [0.0, 0.76, 0.94, 1.0], [480, 480, 0, 0]);
  const desc3Y = useTransform(scrollYProgress, [0.0, 0.76, 0.94, 1.0], [450, 450, 0, 0]);
  const opacity3 = useTransform(scrollYProgress, [0.0, 0.76, 0.90, 1.0], [0, 0, 1, 1]);
  const img3Rotate = useTransform(scrollYProgress, [0.0, 0.76, 0.94, 1.0], [32, 32, 0, 0]);
  const img3Y = useTransform(scrollYProgress, [0.0, 0.76, 0.94, 1.0], [700, 700, 0, 0]);
  const img3X = useTransform(scrollYProgress, [0.0, 0.76, 0.94, 1.0], [-50, -50, 0, 0]);
  const img3Scale = useTransform(scrollYProgress, [0.0, 0.76, 0.94, 1.0], [0.85, 0.85, 1, 1]);
  const img3Opacity = useTransform(scrollYProgress, [0.0, 0.76, 0.90, 1.0], [0, 0, 1, 1]);

  // Pointer events: only the active card can intercept clicks/hovers
  const pointerEvents0 = useTransform(scrollYProgress, (v) => (v < 0.25 ? "auto" : "none"));
  const pointerEvents1 = useTransform(scrollYProgress, (v) => (v >= 0.12 && v < 0.58 ? "auto" : "none"));
  const pointerEvents2 = useTransform(scrollYProgress, (v) => (v >= 0.44 && v < 0.90 ? "auto" : "none"));
  const pointerEvents3 = useTransform(scrollYProgress, (v) => (v >= 0.76 ? "auto" : "none"));

  const cardsMotion = [
    {
      titleY: title0Y,
      subtitleY: subtitle0Y,
      btnY: btn0Y,
      descY: desc0Y,
      opacity: opacity0,
      pointerEvents: pointerEvents0,
      imgRotate: img0Rotate,
      imgScale: img0Scale,
      imgY: img0Y,
      imgX: img0X,
      imgOpacity: img0Opacity,
    },
    {
      titleY: title1Y,
      subtitleY: subtitle1Y,
      btnY: btn1Y,
      descY: desc1Y,
      opacity: opacity1,
      pointerEvents: pointerEvents1,
      imgRotate: img1Rotate,
      imgScale: img1Scale,
      imgY: img1Y,
      imgX: img1X,
      imgOpacity: img1Opacity,
    },
    {
      titleY: title2Y,
      subtitleY: subtitle2Y,
      btnY: btn2Y,
      descY: desc2Y,
      opacity: opacity2,
      pointerEvents: pointerEvents2,
      imgRotate: img2Rotate,
      imgScale: img2Scale,
      imgY: img2Y,
      imgX: img2X,
      imgOpacity: img2Opacity,
    },
    {
      titleY: title3Y,
      subtitleY: subtitle3Y,
      btnY: btn3Y,
      descY: desc3Y,
      opacity: opacity3,
      pointerEvents: pointerEvents3,
      imgRotate: img3Rotate,
      imgScale: img3Scale,
      imgY: img3Y,
      imgX: img3X,
      imgOpacity: img3Opacity,
    },
  ];

  return (
    <div ref={containerRef} className="relative h-[420vh] sm:h-[460vh] lg:h-[500vh]">
      <div className="sticky top-14 sm:top-20 lg:top-24 w-full">
        
        {/* ONE STATIONARY LUXURY STAGE CARD (Pinned in place, content moves inside!) */}
        <div className="relative w-full rounded-2xl sm:rounded-[36px] lg:rounded-[44px] border border-white/15 bg-gradient-to-br from-[#16161a] via-[#101013] to-[#09090b] p-4 sm:p-7 lg:p-10 xl:p-12 shadow-[0_30px_90px_rgba(0,0,0,0.95),0_0_0_1px_rgba(255,255,255,0.06)] overflow-hidden min-h-[500px] sm:min-h-[540px] lg:min-h-[580px] flex items-center">
          
          {/* Subtle ambient interior glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/[0.03] rounded-full blur-3xl pointer-events-none" />

          {/* All 4 slides sit on top of each other in the exact same grid area */}
          <div className="relative w-full grid grid-cols-1 grid-rows-1">
            {solutions.map((item, idx) => {
              const motionStyle = cardsMotion[idx];
              return (
                <motion.div
                  key={item.id}
                  style={{
                    gridArea: "1 / 1 / 2 / 2",
                    pointerEvents: motionStyle.pointerEvents,
                  }}
                  className="w-full"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-7 lg:gap-10 items-center relative z-10">
                    
                    {/* Left: Content - Moves UP and OUT / In from BELOW */}
                    <div className="w-full lg:col-span-6 order-2 lg:order-1 flex flex-col justify-between space-y-4 sm:space-y-6 lg:space-y-8">
                      
                      {/* Top: Counter & PixMob Dual Headline & Pill CTA */}
                      <div className="space-y-3 sm:space-y-4">
                        <motion.div
                          style={{
                            y: motionStyle.subtitleY,
                            opacity: motionStyle.opacity,
                            willChange: "transform, opacity",
                          }}
                          className="flex items-center gap-2.5 sm:gap-3"
                        >
                          <span className="font-mono text-[11px] sm:text-xs lg:text-sm tracking-[0.22em] text-white/40 uppercase font-medium">
                            {item.num} / 04
                          </span>
                          <span className="h-px w-6 sm:w-8 bg-white/20" />
                          <span className="text-[10px] sm:text-[11px] lg:text-xs font-mono uppercase tracking-[0.2em] text-white/50">
                            CAPABILITY
                          </span>
                        </motion.div>

                        <div className="space-y-1 sm:space-y-2">
                          <motion.h3
                            style={{
                              y: motionStyle.titleY,
                              opacity: motionStyle.opacity,
                              willChange: "transform, opacity",
                            }}
                            className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[76px] font-black italic tracking-tight text-white leading-none"
                          >
                            {item.title}
                          </motion.h3>
                          <motion.p
                            style={{
                              y: motionStyle.subtitleY,
                              opacity: motionStyle.opacity,
                              willChange: "transform, opacity",
                            }}
                            className="text-[11px] sm:text-sm md:text-base lg:text-lg xl:text-xl uppercase tracking-[0.2em] font-serif font-light text-white/85"
                          >
                            {item.subtitle}
                          </motion.p>
                        </div>

                        {/* White Pill CTA Button matching PixMob Image 1 */}
                        <motion.div
                          style={{
                            y: motionStyle.btnY,
                            opacity: motionStyle.opacity,
                            willChange: "transform, opacity",
                          }}
                          className="pt-0.5 sm:pt-2"
                        >
                          <Link
                            href={item.href}
                            className="inline-flex items-center gap-2 sm:gap-2.5 px-6 sm:px-8 py-2.5 sm:py-3.5 rounded-full bg-white text-black font-semibold text-xs sm:text-sm tracking-wider uppercase shadow-[0_10px_30px_rgba(255,255,255,0.18)] hover:bg-neutral-200 hover:scale-105 active:scale-95 transition-all duration-300 group/btn"
                          >
                            <span>{item.cta}</span>
                            <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-black group-hover/btn:translate-x-1 transition-transform duration-300" />
                          </Link>
                        </motion.div>
                      </div>

                      {/* Bottom: Description & Highlights */}
                      <motion.div
                        style={{
                          y: motionStyle.descY,
                          opacity: motionStyle.opacity,
                          willChange: "transform, opacity",
                        }}
                        className="space-y-2.5 sm:space-y-3 lg:space-y-4 pt-3 sm:pt-4 border-t border-white/10"
                      >
                        <p className="text-white/80 text-xs sm:text-sm lg:text-base leading-relaxed font-light max-w-lg">
                          {item.description}
                        </p>

                        <ul className="space-y-1 sm:space-y-1.5 lg:space-y-2 max-w-lg">
                          {item.highlights.map((point, i) => (
                            <li key={i} className="flex items-center gap-2 sm:gap-2.5 text-[11px] sm:text-xs lg:text-sm text-white/75">
                              <span className="w-1.5 h-1.5 rounded-full bg-white/70 shrink-0" />
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>
                      </motion.div>

                    </div>

                    {/* Right: Visual Media Container with Signature PixMob Rotational Launch Physics */}
                    <div className="w-full lg:col-span-6 order-1 lg:order-2 flex items-center justify-center">
                      <motion.div
                        style={{
                          rotate: motionStyle.imgRotate,
                          scale: motionStyle.imgScale,
                          y: motionStyle.imgY,
                          x: motionStyle.imgX,
                          opacity: motionStyle.imgOpacity,
                          transformOrigin: "center center",
                          willChange: "transform, opacity",
                        }}
                        className="relative w-full aspect-[16/10] sm:aspect-[16/11] lg:aspect-[16/11] max-h-[190px] xs:max-h-[220px] sm:max-h-[320px] lg:max-h-[440px] rounded-xl sm:rounded-[28px] lg:rounded-[36px] overflow-hidden border border-white/20 bg-black shadow-[0_25px_60px_rgba(0,0,0,0.85)] group"
                      >
                        <SafeImage
                          src={item.img}
                          alt={item.title}
                          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                          containerClassName="w-full h-full"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                      </motion.div>
                    </div>

                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function SolutionsOverview() {
  return (
    <section id="solutions-overview" className="flex flex-col relative">
      {/* What We Build - Pinned Cinematic Showcase Runway */}
      <div className="relative w-full h-[220vh]">
        <div className="sticky top-0 w-full h-screen overflow-hidden z-20">
          <WhatWeBuild />
        </div>
      </div>

      {/* Core Capabilities Section (Stacking Cards on Scroll) */}
      <div 
        id="core-capabilities" 
        className="bg-black text-white pt-16 sm:pt-20 lg:pt-24 pb-0 scroll-mt-20 relative z-30"
      >
        <div className="max-w-7xl 2xl:max-w-[1536px] 3xl:max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="max-w-4xl xl:max-w-5xl mb-8 sm:mb-12 lg:mb-14 space-y-2">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.6rem] xl:text-5xl font-black text-white tracking-tight leading-[1.1]">
              What Happens When Visitors Step Inside
            </h2>
            <p className="text-white/70 text-sm sm:text-base font-light leading-relaxed max-w-2xl">
              From a single footstep rippling across the floor to an entire room surrounding your senses, here is how people experience the space.
            </p>
          </div>

          {/* Stacking Cards Runway */}
          <StackingCapabilities />

        </div>
      </div>
    </section>
  );
}