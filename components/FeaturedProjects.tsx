"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Eye } from "lucide-react";
import SafeImage from "@/components/SafeImage";
import { useState, useEffect } from "react";

const projects = [
  {
    id: "aura-cathedral",
    title: "Sanctuary of Light Cathedral",
    category: "360° Heritage Mapping",
    location: "Architectural Sanctuary",
    desc: "An architectural projection mapping showcase transforming stone archways with responsive light and geometry.",
    img: "/images/cathedral_projection_mapping.jpg",
    href: "/projects/aura-digital-cathedral",
  },
  {
    id: "edge-skyline",
    title: "Skyline Kinetic Glass Floor",
    category: "Interactive Spaces",
    location: "Skyline Observation Deck",
    desc: "An interactive high-altitude observation floor responding to visitor footsteps with illuminated fluid patterns.",
    img: "/images/horizon_glass_floor.jpg",
    href: "/projects/skyline-observation-floor",
  },
  {
    id: "ocean-wonders",
    title: "BioSphere Ocean Experience",
    category: "Interactive Museum",
    location: "Immersive Oceanic Pavilion",
    desc: "A 360-degree reactive marine projection environment with bioluminescent visual interactions.",
    img: "/images/biosphere_ocean_gallery.jpg",
    href: "/projects/biosphere-ocean-experience",
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
    <section className="py-12 lg:py-16 xl:py-20 bg-white text-black relative flex flex-col justify-center">
      <div className="max-w-7xl 2xl:max-w-[1536px] 3xl:max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col h-full">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-8 lg:mb-10 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-[10px] sm:text-xs font-mono font-semibold uppercase tracking-[0.2em] text-black/50 block mb-2">
              PORTFOLIO SHOWCASE
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-[1.1] text-black">
              Featured Creations
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-black text-white text-xs font-bold uppercase tracking-widest hover:bg-black/80 hover:scale-105 active:scale-95 transition-all duration-300 shadow-xl"
            >
              <span>View All Projects</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>

        {/* Interactive Expansion Accordion */}
        <div 
          className="flex flex-col lg:flex-row w-full h-auto lg:h-[50vh] lg:min-h-[460px] lg:max-h-[580px] 2xl:max-h-[620px] gap-4 lg:gap-6 mt-2 lg:mt-4"
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
                  className={`absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent transition-opacity duration-500 ${
                    isActive ? "opacity-90" : "opacity-75"
                  }`} 
                />

                {/* Content Overlay */}
                <div className="relative z-10 p-6 sm:p-8 flex flex-col justify-end h-full">
                  <div className="flex flex-col gap-2">
                    
                    {/* Badge & Category */}
                    <div className="flex items-center gap-3">
                      <span className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center shrink-0 border border-white/20">
                        <Eye className="w-4 h-4 text-white" />
                      </span>
                      <span className={`text-[10px] sm:text-xs font-bold text-white uppercase tracking-widest drop-shadow-md leading-snug whitespace-nowrap transition-opacity duration-500 ${
                        isActive ? "opacity-100" : "lg:opacity-0"
                      }`}>
                        {project.category}
                      </span>
                    </div>

                    {/* Mobile Title (Always visible on mobile, hidden on desktop) */}
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
                        {/* Desktop Title */}
                        <h3 className="text-3xl font-bold text-white drop-shadow-lg leading-tight">
                          {project.title}
                        </h3>
                        <p className="text-sm text-white/80 font-medium max-w-lg mt-2 leading-relaxed line-clamp-2">
                          {project.desc}
                        </p>
                        <div className="mt-5">
                          <Link 
                            href={project.href}
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black text-xs font-bold uppercase tracking-widest hover:bg-white/90 hover:scale-105 active:scale-95 transition-all duration-300 shadow-xl"
                          >
                            <span>View Case Study</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </Link>
                        </div>
                      </div>
                    </div>

                    {/* Mobile always visible minimal link */}
                    <div className="lg:hidden mt-3 mb-2">
                       <Link 
                          href={project.href}
                          className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white text-black text-xs font-bold uppercase tracking-widest hover:bg-neutral-200 transition-colors shadow-lg"
                        >
                          <span>View Case Study</span>
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
