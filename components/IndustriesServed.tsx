"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  GraduationCap,
  HeartPulse,
  ShoppingBag,
  Landmark,
  Gamepad2,
  Hotel,
  Building2,
  Globe2,
  ArrowRight,
  Sparkles
} from "lucide-react";
import SafeImage from "@/components/SafeImage";

const industries = [
  {
    id: "education",
    icon: <GraduationCap className="w-5 h-5" />,
    title: "Education",
    description: "Make learning more active with interactive classrooms, digital activities, and movement-based experiences.",
    href: "/industries/education",
    img: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "healthcare",
    icon: <HeartPulse className="w-5 h-5" />,
    title: "Healthcare",
    description: "Help patients stay engaged with interactive activities that support rehabilitation, movement, and better waiting-room experiences.",
    href: "/industries/healthcare",
    img: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "retail",
    icon: <ShoppingBag className="w-5 h-5" />,
    title: "Retail",
    description: "Make store visits more engaging with interactive displays, digital content, and experiences that bring customers closer to your brand.",
    href: "/industries/retail-showrooms",
    img: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "museums",
    icon: <Landmark className="w-5 h-5" />,
    title: "Museums & Exhibitions",
    description: "Turn exhibits into experiences where visitors can interact with stories, information, and digital content.",
    href: "/industries/museums-culture",
    img: "https://images.unsplash.com/photo-1518998053901-5348d3961a04?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "entertainment",
    icon: <Gamepad2 className="w-5 h-5" />,
    title: "Entertainment",
    description: "Build exciting attractions with interactive games, projection technology, and experiences people want to come back to.",
    href: "/industries/entertainment",
    img: "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "hospitality",
    icon: <Hotel className="w-5 h-5" />,
    title: "Hospitality",
    description: "Give guests something memorable with interactive displays and digital experiences across hotels, resorts, and other hospitality spaces.",
    href: "/industries/hospitality",
    img: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "corporate",
    icon: <Building2 className="w-5 h-5" />,
    title: "Corporate",
    description: "Make offices, meeting spaces, and experience centers more engaging with interactive technology.",
    href: "/industries/corporate",
    img: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "public-spaces",
    icon: <Globe2 className="w-5 h-5" />,
    title: "Public Spaces",
    description: "Bring interactive experiences to airports, malls, parks, community spaces, and other public venues.",
    href: "/industries/public-spaces",
    img: "https://images.unsplash.com/photo-1473445730015-841f29a949ce?auto=format&fit=crop&w=1200&q=80",
  },
];

const AUTOPLAY_INTERVAL = 6000;

export default function IndustriesServed() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const activeIndustry = industries[activeIndex];

  // Auto-play logic
  useEffect(() => {
    if (isHovered) {
      if (timerRef.current) clearTimeout(timerRef.current);
      return;
    }

    timerRef.current = setTimeout(() => {
      setActiveIndex((prev) => (prev + 1) % industries.length);
    }, AUTOPLAY_INTERVAL);

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [activeIndex, isHovered]);

  return (
    <section className="py-10 lg:py-12 bg-white border-t border-black/5 overflow-hidden text-black relative">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-gray-100 to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 opacity-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6 lg:mb-8">
          <div className="max-w-3xl space-y-2">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.3em] text-black/40"
            >
              <Sparkles className="w-3.5 h-3.5 text-black/30" />
              INDUSTRIES WE SERVE
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-[2.75rem] font-black tracking-tight leading-[1.05]"
            >
              Built for Every Industry.<br />
              <span className="text-black/30">Designed for Every Experience.</span>
            </motion.h2>
          </div>

          <div className="hidden md:flex items-center gap-2 text-[9px] font-bold uppercase tracking-widest text-black/30">
            Auto-explore <span className={`w-1.5 h-1.5 rounded-full ${isHovered ? 'bg-black/20' : 'bg-green-500 animate-pulse'}`} />
          </div>
        </div>

        {/* Dynamic Showcase Layout */}
        <div 
          className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          
          {/* Column 1: Industry Selector List */}
          <div className="lg:col-span-4 space-y-1 flex flex-col">
            {industries.map((ind, idx) => {
              const isActive = activeIndex === idx;
              return (
                <button
                  key={ind.id}
                  onClick={() => setActiveIndex(idx)}
                  className={`relative w-full text-left flex items-center justify-between p-2.5 sm:p-3 rounded-[1rem] transition-all duration-500 overflow-hidden group ${
                    isActive 
                      ? "bg-black text-white shadow-lg scale-[1.01]" 
                      : "bg-transparent text-black/60 hover:bg-black/5 hover:text-black"
                  }`}
                >
                  {/* Active background gradient hint */}
                  {isActive && (
                    <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-50 pointer-events-none" />
                  )}
                  
                  {/* Auto-play progress bar */}
                  {isActive && !isHovered && (
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{ duration: AUTOPLAY_INTERVAL / 1000, ease: "linear" }}
                      className="absolute bottom-0 left-0 h-[3px] bg-white/20"
                    />
                  )}

                  <div className="flex items-center gap-3 relative z-10">
                    <div className={`p-1.5 rounded-lg transition-colors duration-500 ${isActive ? "bg-white/20 text-white shadow-inner" : "bg-black/5 text-black/50 group-hover:bg-black/10 group-hover:text-black"}`}>
                      {ind.icon}
                    </div>
                    <span className="font-bold text-sm tracking-tight">{ind.title}</span>
                  </div>
                  
                  <div className={`relative z-10 w-6 h-6 rounded-full flex items-center justify-center transition-all duration-500 ${isActive ? "bg-white text-black" : "bg-transparent text-transparent group-hover:text-black/30"}`}>
                    <ArrowRight className={`w-3 h-3 transition-transform duration-500 ${isActive ? "-rotate-45" : "rotate-0 group-hover:-rotate-45"}`} />
                  </div>
                </button>
              );
            })}
          </div>

          {/* Column 2: Active Image & Content Panel */}
          <div className="lg:col-span-8 relative w-full h-[400px] lg:h-[480px] rounded-[1.5rem] overflow-hidden bg-gray-100 shadow-xl border border-black/5">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndustry.id}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0 w-full h-full"
              >
                {/* Slow continuous pan effect on the image */}
                <motion.div
                  animate={{ scale: 1.1 }}
                  transition={{ duration: 20, ease: "linear", repeat: Infinity, repeatType: "reverse" }}
                  className="w-full h-full"
                >
                  <SafeImage
                    src={activeIndustry.img}
                    alt={activeIndustry.title}
                    className="w-full h-full object-cover object-center"
                    containerClassName="w-full h-full"
                  />
                </motion.div>
                
                {/* Subtle vignette gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
                
                {/* Modern Glassmorphic Content Card */}
                <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 lg:bottom-8 lg:left-8 lg:w-2/3">
                  <motion.div 
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className="p-5 sm:p-6 rounded-[1.25rem] bg-black/40 backdrop-blur-xl border border-white/10 shadow-2xl text-white"
                  >
                    <div className="flex items-center gap-2 mb-3 text-white/70">
                      {activeIndustry.icon}
                      <span className="text-[9px] font-bold uppercase tracking-[0.2em]">{activeIndustry.title} Spaces</span>
                    </div>
                    
                    <h3 className="text-2xl sm:text-3xl font-black tracking-tight mb-3 leading-tight text-white drop-shadow-md">
                      Empower Your <br className="hidden sm:block"/>{activeIndustry.title} Sector
                    </h3>
                    
                    <p className="text-white/80 text-xs sm:text-sm leading-relaxed mb-6 max-w-sm font-light">
                      {activeIndustry.description}
                    </p>
                    
                    <Link
                      href={activeIndustry.href}
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black font-bold text-[10px] uppercase tracking-widest transition-all duration-300 hover:scale-105 hover:bg-gray-100 shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)]"
                    >
                      Explore Solutions
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}
