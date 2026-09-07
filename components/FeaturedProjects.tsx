"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Eye } from "lucide-react";
import SafeImage from "@/components/SafeImage";
import { useState, useEffect } from "react";

const projects = [
  {
    id: "aura-cathedral",
    title: "AURA Sanctuary Projection",
    category: "360° Heritage Mapping",
    location: "Montreal / Paris",
    desc: "An architectural projection mapping masterpiece transforming historic stone sanctuaries with responsive light & sound.",
    img: "https://images.unsplash.com/photo-1518998053901-5348d3961a04?auto=format&fit=crop&w=1200&q=75&fm=webp",
    href: "/projects/aura-digital-cathedral",
  },
  {
    id: "edge-skyline",
    title: "Horizon Glass Motion Floor",
    category: "Interactive Spaces",
    location: "Manhattan, New York",
    desc: "An interactive high-altitude observation floor responding to visitor footsteps 1,100 feet in the air.",
    img: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1200&q=75&fm=webp",
    href: "/projects/edge-nyc-horizon-portal",
  },
  {
    id: "ocean-wonders",
    title: "BioSphere Ocean Experience",
    category: "Interactive Museum",
    location: "Global Ocean Pavilion",
    desc: "A 360-degree reactive ocean floor projection reacting dynamically to marine biodiversity interaction.",
    img: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=75&fm=webp",
    href: "/projects/biosphere-ocean-experience",
  },
];

export default function FeaturedProjects() {
  const [hoveredIdx, setHoveredIdx] = useState<number>(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState<boolean>(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setHoveredIdx((prev) => (prev + 1) % projects.length);
    }, 4000); // cycle every 4 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  return (
    <section className="py-12 lg:py-24 bg-white text-black relative border-t border-black/10 flex flex-col justify-center min-h-[90vh]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col h-full">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-10 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-[10px] uppercase tracking-[0.25em] text-black/40 block mb-2 font-bold">
              PORTFOLIO SHOWCASE
            </span>
            <h2 className="text-black">
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
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-black text-white text-[11px] font-bold uppercase tracking-widest hover:bg-black/80 hover:scale-105 active:scale-95 transition-all duration-300 shadow-xl"
            >
              <span>View All Projects</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>

        {/* Interactive Expansion Accordion */}
        <div 
          className="flex flex-col lg:flex-row w-full h-[55vh] min-h-[500px] gap-4 lg:gap-6 mt-4"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          {projects.map((project, idx) => {
            const isActive = hoveredIdx === idx;
            return (
              <motion.div
                key={project.id}
                onHoverStart={() => setHoveredIdx(idx)}
                className={`relative overflow-hidden rounded-[2rem] cursor-pointer transition-[flex] duration-[800ms] ease-[cubic-bezier(0.25,1,0.5,1)] flex flex-col justify-end group shadow-2xl ${
                  isActive ? "flex-[1_1_100%] lg:flex-[3.5]" : "flex-[1_1_100%] lg:flex-1"
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
                  className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 transition-opacity duration-500" 
                />

                {/* Content Overlay */}
                <div className="relative z-10 p-6 sm:p-8 flex flex-col justify-end h-full">
                  <div className="flex flex-col gap-2">
                    {/* Badge & Category */}
                    <div className="flex items-center gap-3">
                      <span className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center shrink-0">
                        <Eye className="w-4 h-4 text-white" />
                      </span>
                      <span className="text-[10px] sm:text-xs font-bold text-white uppercase tracking-widest drop-shadow-md transition-opacity duration-500 leading-snug">
                        {project.category}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className={`text-white mt-2 drop-shadow-lg whitespace-nowrap transition-all duration-700 ${isActive ? "opacity-100" : "lg:opacity-0 lg:translate-y-4 opacity-100"}`}>
                      {project.title}
                    </h3>

                    {/* Hidden content that reveals when active (Desktop Only mostly) */}
                    <div 
                      className={`overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] hidden lg:block ${
                        isActive ? "max-h-[200px] opacity-100" : "max-h-0 opacity-0"
                      }`}
                    >
                      <p className="text-sm text-white/80 font-medium max-w-lg mt-4 leading-relaxed line-clamp-2">
                        {project.desc}
                      </p>
                      <div className="mt-6">
                         <Link 
                            href={project.href}
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black text-[11px] font-bold uppercase tracking-widest hover:bg-white/90 transition-colors"
                          >
                            View Case Study
                         </Link>
                      </div>
                    </div>

                    {/* Mobile always visible minimal link */}
                    <div className="lg:hidden mt-4">
                       <Link 
                          href={project.href}
                          className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-white/80 hover:text-white"
                        >
                          View Case Study <ArrowRight className="w-3 h-3" />
                       </Link>
                    </div>

                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
