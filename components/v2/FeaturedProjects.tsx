"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Eye, Sparkles } from "lucide-react";
import SafeImage from "@/components/SafeImage";
import { useState, useEffect } from "react";

const projects = [
  {
    id: "concept-retail",
    badge: "CONCEPT EXPERIENCE",
    title: "Interactive Retail Environment",
    desc: "A movement and touch-responsive retail space that creates a dynamic and engaging environment for visitors.",
    img: "/images/retail_interactive_showcase.jpg",
    href: "/projects",
    btnText: "View Projects",
  },
  {
    id: "concept-learning",
    badge: "CONCEPT EXPERIENCE",
    title: "Interactive Learning Space",
    desc: "A motion-responsive educational floor projection designed for student participation and active play.",
    img: "/images/education_interactive_floor.jpg",
    href: "/projects",
    btnText: "View Projects",
  },
  {
    id: "concept-gallery",
    badge: "CONCEPT EXPERIENCE",
    title: "Immersive Cultural Gallery",
    desc: "A multi-surface immersive projection environment designed to surround audiences with responsive visuals.",
    img: "/images/biosphere_ocean_gallery.jpg",
    href: "/projects",
    btnText: "View Projects",
  },
];

export default function FeaturedProjects() {
  const [hoveredIdx, setHoveredIdx] = useState<number>(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState<boolean>(true);

  useEffect(() => {
    if (!isAutoPlaying || typeof window === "undefined" || window.innerWidth < 1024) return;
    
    const interval = setInterval(() => {
      setHoveredIdx((prev) => (prev + 1) % projects.length);
    }, 4500);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  return (
    <section id="see-it-in-real-spaces" className="pt-10 sm:pt-14 lg:pt-16 pb-8 sm:pb-10 lg:pb-10 bg-white text-black relative flex flex-col justify-center border-t border-gray-100">
      <div className="max-w-7xl 2xl:max-w-[1536px] 3xl:max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col h-full">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-8 sm:mb-10 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl space-y-3"
          >
            <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold uppercase tracking-wide text-black/60">
              <Sparkles className="w-3.5 h-3.5 text-black/40" />
              <span>EXPERIENCES &amp; APPLICATIONS</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-[1.1] text-black">
              See the Experience in Action
            </h2>

            <p className="text-sm sm:text-base text-black/70 font-normal leading-relaxed">
              Explore examples of interactive experiences designed for real spaces, audiences and purposes.
            </p>
          </motion.div>

          <div>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-black text-white text-xs sm:text-sm font-semibold tracking-wide hover:bg-neutral-800 transition-all shadow-md group cursor-pointer"
            >
              <span>View Projects</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Interactive Expansion Accordion */}
        <div 
          className="flex flex-col lg:flex-row w-full h-auto lg:h-[46vh] lg:min-h-[420px] xl:min-h-[460px] lg:max-h-[560px] 2xl:max-h-[620px] gap-4 lg:gap-6 mt-2 lg:mt-4"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          {projects.map((project, idx) => {
            const isActive = hoveredIdx === idx;
            return (
              <div
                key={project.id}
                onMouseEnter={() => setHoveredIdx(idx)}
                onClick={() => setHoveredIdx(idx)}
                className={`relative overflow-hidden rounded-[2rem] cursor-pointer transition-[flex] duration-[700ms] ease-[cubic-bezier(0.25,1,0.5,1)] flex flex-col justify-end group shadow-2xl h-[350px] lg:h-auto ${
                  isActive ? "lg:flex-[3.5]" : "lg:flex-1"
                }`}
              >
                {/* Background Image */}
                <div className="absolute inset-0 w-full h-full">
                  <SafeImage
                    src={project.img}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-[2s] ease-out group-hover:scale-105"
                    containerClassName="w-full h-full"
                  />
                </div>
                
                {/* Gradient Overlay for Text Visibility */}
                <div 
                  className={`absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent transition-opacity duration-500 ${
                    isActive ? "opacity-95" : "opacity-80"
                  }`} 
                />

                {/* Content Overlay */}
                <div className="relative z-10 p-6 sm:p-8 flex flex-col justify-end h-full">
                  <div className="flex flex-col gap-2">
                    
                    {/* Badge */}
                    <div className="flex items-center gap-3">
                      <span className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center shrink-0 border border-white/20">
                        <Eye className="w-4 h-4 text-white" />
                      </span>
                      <span className={`text-xs font-semibold text-white uppercase tracking-wider drop-shadow-md leading-snug whitespace-nowrap transition-opacity duration-500 ${
                        isActive ? "opacity-100" : "lg:opacity-0"
                      }`}>
                        {project.badge}
                      </span>
                    </div>

                    {/* Mobile Title */}
                    <h3 className="text-xl sm:text-2xl font-bold text-white mt-2 drop-shadow-lg leading-tight lg:hidden">
                      {project.title}
                    </h3>

                    {/* Desktop Expandable Content (Title + Desc + Button) */}
                    <div 
                      className={`transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] hidden lg:grid ${
                        isActive ? "grid-rows-[1fr] opacity-100 mt-2" : "grid-rows-[0fr] opacity-0 mt-0"
                      }`}
                    >
                      <div className="overflow-hidden min-h-0">
                        <h3 className="text-2xl xl:text-3xl font-bold text-white drop-shadow-lg leading-tight">
                          {project.title}
                        </h3>
                        <p className="text-xs xl:text-sm text-white/80 font-medium max-w-lg mt-2 leading-relaxed">
                          {project.desc}
                        </p>
                        <div className="mt-5">
                          <Link 
                            href={project.href}
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black text-xs font-bold uppercase tracking-wide hover:bg-white/90 hover:scale-105 active:scale-95 transition-all duration-300 shadow-xl cursor-pointer"
                          >
                            <span>{project.btnText}</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </Link>
                        </div>
                      </div>
                    </div>

                    {/* Mobile minimal link */}
                    <div className="lg:hidden mt-3 mb-2">
                      <Link 
                        href={project.href}
                        className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white text-black text-xs font-bold uppercase tracking-wide hover:bg-neutral-200 transition-colors shadow-lg cursor-pointer"
                      >
                        <span>{project.btnText}</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>

                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
