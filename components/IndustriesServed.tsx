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
  ChevronLeft,
  ChevronRight,
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
    img: "/images/education_interactive_floor.jpg",
  },
  {
    id: "healthcare",
    icon: <HeartPulse className="w-5 h-5" />,
    title: "Healthcare",
    description: "Help patients stay engaged with interactive activities that support rehabilitation, movement, and better waiting-room experiences.",
    href: "/industries/healthcare",
    img: "/images/healthcare_sensory_room.jpg",
  },
  {
    id: "retail",
    icon: <ShoppingBag className="w-5 h-5" />,
    title: "Retail",
    description: "Make store visits more engaging with interactive displays, digital content, and experiences that bring customers closer to your brand.",
    href: "/industries/retail-showrooms",
    img: "/images/retail_interactive_showcase.jpg",
  },
  {
    id: "museums",
    icon: <Landmark className="w-5 h-5" />,
    title: "Museums & Exhibitions",
    description: "Turn exhibits into experiences where visitors can interact with stories, information, and digital content.",
    href: "/industries/museums-culture",
    img: "/images/museum_interactive_exhibit.jpg",
  },
  {
    id: "entertainment",
    icon: <Gamepad2 className="w-5 h-5" />,
    title: "Entertainment",
    description: "Build exciting attractions with interactive games, projection technology, and experiences people want to come back to.",
    href: "/industries/entertainment",
    img: "/images/entertainment_motion_arena.jpg",
  },
  {
    id: "hospitality",
    icon: <Hotel className="w-5 h-5" />,
    title: "Hospitality",
    description: "Give guests something memorable with interactive displays and digital experiences across hotels, resorts, and other hospitality spaces.",
    href: "/industries/hospitality",
    img: "/images/hospitality_ambient_atrium.jpg",
  },
  {
    id: "corporate",
    icon: <Building2 className="w-5 h-5" />,
    title: "Corporate",
    description: "Make offices, meeting spaces, and experience centers more engaging with interactive technology.",
    href: "/industries/corporate",
    img: "/images/corporate_lobby_wall.jpg",
  },
  {
    id: "public-spaces",
    icon: <Globe2 className="w-5 h-5" />,
    title: "Public Spaces",
    description: "Bring interactive experiences to airports, malls, parks, community spaces, and other public venues.",
    href: "/industries/public-spaces",
    img: "/images/interactive_floor_motion.jpg",
  },
];

const AUTOPLAY_INTERVAL = 6000;

export default function IndustriesServed() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const tabContainerRef = useRef<HTMLDivElement | null>(null);

  // Touch swipe refs
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const activeIndustry = industries[activeIndex];

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % industries.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + industries.length) % industries.length);
  };

  // Auto-scroll active tab into view in horizontal list without scrolling browser window
  useEffect(() => {
    const activeTab = tabRefs.current[activeIndex];
    const container = tabContainerRef.current;
    if (activeTab && container && window.innerWidth < 1024) {
      const containerWidth = container.offsetWidth;
      const tabOffsetLeft = activeTab.offsetLeft;
      const tabWidth = activeTab.offsetWidth;
      const targetScrollLeft = tabOffsetLeft - (containerWidth / 2) + (tabWidth / 2);
      container.scrollTo({
        left: targetScrollLeft,
        behavior: "smooth"
      });
    }
  }, [activeIndex]);

  // Auto-play logic
  useEffect(() => {
    if (isHovered) {
      if (timerRef.current) clearTimeout(timerRef.current);
      return;
    }

    timerRef.current = setTimeout(() => {
      handleNext();
    }, AUTOPLAY_INTERVAL);

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [activeIndex, isHovered]);

  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    const isLeftSwipe = distance > 40;
    const isRightSwipe = distance < -40;

    if (isLeftSwipe) {
      handleNext();
    } else if (isRightSwipe) {
      handlePrev();
    }

    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <section className="py-10 lg:py-16 bg-white overflow-hidden text-black relative">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-gray-100 to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 opacity-50 pointer-events-none" />

      <div className="max-w-7xl 2xl:max-w-[1536px] 3xl:max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6 lg:mb-8">
          <div className="max-w-3xl space-y-2">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex items-center gap-2 text-[10px] sm:text-[11px] font-mono font-semibold uppercase tracking-[0.2em] text-black/50 mb-2"
            >
              <Sparkles className="w-3.5 h-3.5 text-black/40" />
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
          className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-8 items-start"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          
          {/* Column 2: Active Image & Content Panel (Order 2 on Mobile) */}
          <div 
            className="order-2 lg:col-span-8 relative w-full min-h-[420px] sm:min-h-[460px] lg:h-[500px] rounded-[1.5rem] overflow-hidden bg-gray-900 shadow-xl border border-black/5 select-none"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndustry.id}
                initial={{ opacity: 0, scale: 1.04 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0 w-full h-full"
              >
                {/* Slow continuous pan effect on the image */}
                <motion.div
                  animate={{ scale: 1.08 }}
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
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20 pointer-events-none" />
                
                {/* Top Controls: Counter & Navigation Buttons */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-20 pointer-events-none">
                  <span className="text-[10px] font-bold text-white/90 bg-black/50 backdrop-blur-md px-3 py-1 rounded-full border border-white/15 tracking-widest">
                    {String(activeIndex + 1).padStart(2, '0')} / {String(industries.length).padStart(2, '0')}
                  </span>

                  {/* Desktop / Mobile Prev & Next Arrows */}
                  <div className="flex items-center gap-2 pointer-events-auto">
                    <button
                      onClick={handlePrev}
                      aria-label="Previous Industry"
                      className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-black/40 hover:bg-black/70 backdrop-blur-md border border-white/20 text-white flex items-center justify-center transition-all duration-200 active:scale-95"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button
                      onClick={handleNext}
                      aria-label="Next Industry"
                      className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-black/40 hover:bg-black/70 backdrop-blur-md border border-white/20 text-white flex items-center justify-center transition-all duration-200 active:scale-95"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Glassmorphic Content Card */}
                <div className="absolute bottom-3 left-3 right-3 sm:bottom-6 sm:left-6 sm:right-6 lg:bottom-8 lg:left-8 lg:w-3/4 max-w-xl z-20">
                  <motion.div 
                    initial={{ y: 16, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.15, duration: 0.4 }}
                    className="p-4 sm:p-6 rounded-[1.25rem] bg-black/55 backdrop-blur-xl border border-white/15 shadow-2xl text-white"
                  >
                    <div className="flex items-center gap-2 mb-2 text-white/80">
                      {activeIndustry.icon}
                      <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.2em]">{activeIndustry.title} Spaces</span>
                    </div>
                    
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-black tracking-tight mb-2 sm:mb-3 leading-tight text-white drop-shadow-md">
                      Empower Your <br className="hidden sm:block"/>{activeIndustry.title} Sector
                    </h3>
                    
                    <p className="text-white/85 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6 max-w-md font-light">
                      {activeIndustry.description}
                    </p>
                    
                    <Link
                      href={activeIndustry.href}
                      className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full bg-white text-black font-bold text-[10px] uppercase tracking-widest transition-all duration-300 hover:scale-105 hover:bg-gray-100 shadow-[0_0_30px_-5px_rgba(255,255,255,0.4)] w-full sm:w-auto"
                    >
                      Explore Solutions
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Column 1: Industry Selector List (Order 1 on Mobile) */}
          <div className="order-1 lg:col-span-4 relative w-full mb-2 lg:mb-0">
            {/* Mobile edge fade gradients */}
            <div className="lg:hidden pointer-events-none absolute left-0 top-0 bottom-0 w-6 bg-gradient-to-r from-white to-transparent z-10" />
            <div className="lg:hidden pointer-events-none absolute right-0 top-0 bottom-0 w-6 bg-gradient-to-l from-white to-transparent z-10" />

            <div 
              ref={tabContainerRef}
              className="flex flex-row lg:flex-col gap-2 lg:gap-0 lg:space-y-1.5 overflow-x-auto lg:overflow-visible scrollbar-hide snap-x snap-mandatory pb-2 lg:pb-0 -mx-4 px-4 lg:mx-0 lg:px-0"
            >
              {industries.map((ind, idx) => {
                const isActive = activeIndex === idx;
                return (
                  <button
                    key={ind.id}
                    ref={(el) => { tabRefs.current[idx] = el; }}
                    onClick={() => setActiveIndex(idx)}
                    className={`snap-center shrink-0 lg:w-full text-left flex items-center justify-between px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-2xl lg:rounded-[1rem] transition-all duration-300 overflow-hidden group border lg:border-none ${
                      isActive 
                        ? "bg-black text-white shadow-lg scale-[1.01] border-black" 
                        : "bg-white lg:bg-transparent text-black/70 hover:bg-black/5 hover:text-black border-black/10"
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
                        className="absolute bottom-0 left-0 h-[3px] bg-white/30"
                      />
                    )}

                    <div className="flex items-center gap-2.5 lg:gap-3 relative z-10 pr-2 lg:pr-0">
                      <div className={`p-1.5 rounded-lg transition-colors duration-300 ${isActive ? "bg-white/20 text-white shadow-inner" : "bg-black/5 text-black/60 group-hover:bg-black/10 group-hover:text-black"}`}>
                        {ind.icon}
                      </div>
                      <span className="font-bold text-xs lg:text-sm tracking-tight whitespace-nowrap">{ind.title}</span>
                    </div>
                    
                    <div className={`hidden lg:flex relative z-10 w-6 h-6 rounded-full items-center justify-center transition-all duration-300 ${isActive ? "bg-white text-black" : "bg-transparent text-transparent group-hover:text-black/30"}`}>
                      <ArrowRight className={`w-3 h-3 transition-transform duration-300 ${isActive ? "-rotate-45" : "rotate-0 group-hover:-rotate-45"}`} />
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

