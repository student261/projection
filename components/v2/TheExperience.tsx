"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import SafeImage from "@/components/SafeImage";

const experienceStates = [
  {
    id: "move",
    num: "01",
    title: "Move",
    desc: "The environment responds in real time.",
    img: "/images/interactive_floor_motion.jpg",
    video: "/interactive-space.mp4",
  },
  {
    id: "touch",
    num: "02",
    title: "Touch",
    desc: "The content changes.",
    img: "/images/v2_child_interactive_wall.jpg",
    video: "/hero-interactive-wall.mp4",
  },
  {
    id: "play",
    num: "03",
    title: "Play",
    desc: "The space reacts.",
    img: "/images/entertainment_motion_arena.jpg",
    video: "/smart-engagement.mp4",
  },
  {
    id: "talk",
    num: "04",
    title: "Talk",
    desc: "AI responds.",
    img: "/images/ai_receptionist_concierge.jpg",
  },
];

export default function TheExperience() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Exact useScroll hook matching live production SolutionsOverview
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Stacking transforms identical to live production SolutionsOverview
  const card1Y = useTransform(scrollYProgress, [0.06, 0.28], ["100vh", "0vh"]);
  const card0Scale = useTransform(scrollYProgress, [0.06, 0.28], [1, 0.97]);

  const card2Y = useTransform(scrollYProgress, [0.35, 0.57], ["100vh", "0vh"]);
  const card1Scale = useTransform(scrollYProgress, [0.35, 0.57], [1, 0.97]);

  const card3Y = useTransform(scrollYProgress, [0.64, 0.86], ["100vh", "0vh"]);
  const card2Scale = useTransform(scrollYProgress, [0.64, 0.86], [1, 0.97]);

  const cardsMotion = [
    { y: 0, scale: card0Scale, zIndex: 10 },
    { y: card1Y, scale: card1Scale, zIndex: 11 },
    { y: card2Y, scale: card2Scale, zIndex: 12 },
    { y: card3Y, scale: 1, zIndex: 13 },
  ];

  return (
    <section 
      id="the-experience" 
      className="bg-black text-white pt-16 sm:pt-20 lg:pt-24 pb-0 scroll-mt-20 relative"
    >
      <div className="max-w-7xl 2xl:max-w-[1536px] 3xl:max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header - Matching main website editorial styling */}
        <div className="max-w-4xl xl:max-w-5xl mb-8 sm:mb-12 lg:mb-14 space-y-2">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.6rem] xl:text-5xl font-black text-white tracking-tight leading-[1.1]">
            People Don&apos;t Just Watch. They Interact.
          </h2>
          <p className="text-white/70 text-xs sm:text-sm lg:text-base leading-relaxed font-light max-w-2xl pt-1">
            Movement, touch, play and conversation can become part of the experience. The environment responds in real time.
          </p>
        </div>

        {/* 4 Stacking Cards Runway - Exactly identical to live production SolutionsOverview */}
        <div ref={containerRef} className="relative h-[280vh] sm:h-[300vh] lg:h-[320vh]">
          <div className="sticky top-20 sm:top-24 w-full">
            <div className="relative w-full grid grid-cols-1 grid-rows-1">
              {experienceStates.map((item, idx) => {
                const motionStyle = cardsMotion[idx];

                return (
                  <motion.div
                    key={item.id}
                    style={{
                      gridArea: "1 / 1 / 2 / 2",
                      y: motionStyle.y,
                      scale: motionStyle.scale,
                      zIndex: motionStyle.zIndex,
                      transformOrigin: "top center",
                    }}
                    className="w-full"
                  >
                    <div className="relative w-full rounded-2xl sm:rounded-3xl border border-white/15 bg-[#0c0c0f] p-5 sm:p-7 lg:p-8 shadow-[0_-25px_60px_rgba(0,0,0,0.95),0_-1px_0_rgba(255,255,255,0.15)]">
                      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-10 items-center">
                        
                        {/* Left: Content */}
                        <div className="w-full lg:col-span-5 order-2 lg:order-1">
                          <div className="space-y-2.5 sm:space-y-3">
                            <span className="text-2xl sm:text-3xl lg:text-4xl font-mono font-bold text-white/20 block select-none tracking-tight">
                              {item.num}
                            </span>
                            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white tracking-tight leading-tight">
                              {item.title}
                            </h3>
                            <p className="text-white/70 text-xs sm:text-sm lg:text-base leading-relaxed font-light">
                              {item.desc}
                            </p>
                          </div>
                        </div>

                        {/* Right: Visual Media */}
                        <div className="w-full lg:col-span-7 order-1 lg:order-2">
                          <div className="relative aspect-[16/10] sm:aspect-[16/9] lg:aspect-[16/10] max-h-[240px] sm:max-h-[270px] lg:max-h-[300px] w-full rounded-xl sm:rounded-2xl overflow-hidden border border-white/10 bg-black group shadow-xl">
                            {item.video ? (
                              <video
                                src={item.video}
                                poster={item.img}
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                              />
                            ) : (
                              <SafeImage
                                src={item.img}
                                alt={item.title}
                                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                                containerClassName="w-full h-full"
                              />
                            )}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                          </div>
                        </div>

                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
