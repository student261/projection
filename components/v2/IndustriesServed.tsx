"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  ShoppingBag,
  Landmark,
  GraduationCap,
  Gamepad2,
  HeartPulse,
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
    id: "retail",
    icon: ShoppingBag,
    num: "01",
    label: "RETAIL ENVIRONMENTS",
    title: "Retail",
    heading: "Give Shoppers More Ways to Engage",
    description: "Turn stores, flagships and retail atriums into responsive spaces that draw foot traffic and encourage exploration.",
    href: "/industries/retail",
    img: "/images/retail_interactive_showcase.jpg",
    cta: "Explore Retail",
  },
  {
    id: "museums",
    icon: Landmark,
    num: "02",
    label: "MUSEUMS & CULTURE",
    title: "Museums & Culture",
    heading: "Bring Exhibits and Stories to Life",
    description: "Create interactive galleries and immersive exhibitions where visitors can discover cultural narratives through multi-sensory participation.",
    href: "/industries/museums-culture",
    img: "/images/museum_interactive_exhibit.jpg",
    cta: "Explore Museums",
  },
  {
    id: "education",
    icon: GraduationCap,
    num: "03",
    label: "EDUCATION",
    title: "Education",
    heading: "Make Learning Active and Participatory",
    description: "Transform classrooms and discovery labs into collaborative projection spaces where students learn through physical movement and group interaction.",
    href: "/industries/education",
    img: "/images/education_interactive_floor.jpg",
    cta: "Explore Education",
  },
  {
    id: "entertainment",
    icon: Gamepad2,
    num: "04",
    label: "ENTERTAINMENT",
    title: "Entertainment",
    heading: "Create Experiences People Want to Explore",
    description: "Add interactive games, motion arenas and spatial attractions to entertainment centers and theme destinations.",
    href: "/industries/entertainment",
    img: "/images/entertainment_motion_arena.jpg",
    cta: "Explore Entertainment",
  },
  {
    id: "healthcare",
    icon: HeartPulse,
    num: "05",
    label: "HEALTHCARE",
    title: "Healthcare",
    heading: "Create More Engaging Care Environments",
    description: "Use calming interactive projections and sensory rooms for physical rehabilitation, pediatric engagement and welcoming wellness facilities.",
    href: "/industries/healthcare",
    img: "/images/healthcare_sensory_room.jpg",
    cta: "Explore Healthcare",
  },
  {
    id: "hospitality",
    icon: Hotel,
    num: "06",
    label: "HOSPITALITY",
    title: "Hospitality",
    heading: "Make Every Guest Visit Unforgettable",
    description: "Enhance lobbies, dining spaces and resorts with ambient projection mapping and interactive architectural centerpieces.",
    href: "/industries/hospitality",
    img: "/images/hospitality_ambient_atrium.jpg",
    cta: "Explore Hospitality",
  },
  {
    id: "corporate",
    icon: Building2,
    num: "07",
    label: "CORPORATE & EVENTS",
    title: "Corporate & Events",
    heading: "Turn Workplaces & Stages Into Experiences",
    description: "Elevate brand activations, conference keynotes and corporate lobbies with real-time data visualization and AI presentation walls.",
    href: "/industries/corporate",
    img: "/images/corporate_lobby_wall.jpg",
    cta: "Explore Corporate",
  },
  {
    id: "public-spaces",
    icon: Globe2,
    num: "08",
    label: "PUBLIC SPACES",
    title: "Public Spaces",
    heading: "Transform Public Architecture",
    description: "Bring civic plazas, transport hubs and public halls to life with durable, large-scale interactive projections that unite communities.",
    href: "/industries/public-spaces",
    img: "/images/biosphere_ocean_gallery.jpg",
    cta: "Explore Public Spaces",
  },
];

const AUTOPLAY_INTERVAL = 6000;

export default function IndustriesServed() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const tabContainerRef = useRef<HTMLDivElement>(null);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

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
    <section id="where-it-can-work" className="py-14 sm:py-20 lg:py-24 bg-white overflow-hidden text-black relative">
      <div className="max-w-7xl 2xl:max-w-[1536px] 3xl:max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 sm:mb-10">
          <div className="max-w-3xl space-y-3">
            <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold uppercase tracking-wide text-black/60">
              <Sparkles className="w-3.5 h-3.5 text-black/40" />
              <span>INDUSTRIES WE SERVE</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-[1.1] text-black">
              Built for Different Spaces and Audiences
            </h2>

            <p className="text-sm sm:text-base text-black/70 font-normal leading-relaxed max-w-2xl">
              From classrooms and hospitals to retail environments, museums, entertainment venues and public spaces.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <Link
              href="/industries"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-black text-white text-xs sm:text-sm font-semibold tracking-wide hover:bg-neutral-800 transition-all shadow-md group cursor-pointer"
            >
              <span>Explore Industries</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
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
                <div className="w-full h-full transition-transform duration-700 ease-out">
                  <SafeImage
                    src={activeIndustry.img}
                    alt={activeIndustry.title}
                    className="w-full h-full object-cover object-center"
                    containerClassName="w-full h-full"
                  />
                </div>
                
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 via-45% to-transparent pointer-events-none" />
                
                {/* Top Controls: Navigation Buttons */}
                <div className="absolute top-4 right-4 flex items-center justify-end z-20 pointer-events-none">
                  <div className="flex items-center gap-2 pointer-events-auto">
                    <button
                      onClick={handlePrev}
                      aria-label="Previous Industry"
                      className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-black/40 hover:bg-black/70 backdrop-blur-md border border-white/20 text-white flex items-center justify-center transition-all duration-200 active:scale-95 cursor-pointer"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button
                      onClick={handleNext}
                      aria-label="Next Industry"
                      className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-black/40 hover:bg-black/70 backdrop-blur-md border border-white/20 text-white flex items-center justify-center transition-all duration-200 active:scale-95 cursor-pointer"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Content Overlay */}
                <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 lg:bottom-8 lg:left-8 lg:w-3/4 max-w-xl z-20 pointer-events-none">
                  <motion.div 
                    initial={{ y: 16, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.15, duration: 0.4 }}
                    className="p-0 sm:p-2 text-white pointer-events-auto"
                  >
                    <div className="flex items-center gap-2 mb-2 text-white/90 drop-shadow">
                      <span className="text-xs sm:text-sm font-semibold uppercase tracking-wide">{activeIndustry.label}</span>
                    </div>
                    
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-black tracking-tight mb-2 sm:mb-3 leading-tight text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)]">
                      {activeIndustry.heading}
                    </h3>
                    
                    <p className="text-white/90 text-sm leading-relaxed mb-4 sm:mb-6 max-w-md font-light drop-shadow-[0_1px_8px_rgba(0,0,0,0.8)]">
                      {activeIndustry.description}
                    </p>
                    
                    <Link
                      href={activeIndustry.href}
                      className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full bg-white text-black font-bold text-xs uppercase tracking-wide transition-all duration-300 hover:scale-105 hover:bg-gray-100 shadow-[0_4px_24px_rgba(0,0,0,0.4)] w-full sm:w-auto"
                    >
                      <span>{activeIndustry.cta}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Column 1: Industry Selector List (Order 1 on Mobile) */}
          <div className="order-1 lg:col-span-4 relative w-full mb-2 lg:mb-0">
            <div 
              ref={tabContainerRef}
              className="flex flex-row lg:flex-col gap-2 lg:gap-0 lg:space-y-1.5 overflow-x-auto lg:overflow-visible scrollbar-hide snap-x snap-mandatory pb-2 lg:pb-0 -mx-4 px-4 sm:-mx-6 sm:px-6 lg:mx-0 lg:px-0"
            >
              {industries.map((ind, idx) => {
                const isActive = activeIndex === idx;
                const Icon = ind.icon;
                return (
                  <button
                    key={ind.id}
                    ref={(el) => {
                      tabRefs.current[idx] = el;
                    }}
                    onClick={() => setActiveIndex(idx)}
                    className={`flex items-center justify-between w-full p-3 sm:p-3.5 rounded-xl transition-all duration-200 text-left shrink-0 lg:shrink cursor-pointer border ${
                      isActive
                        ? "bg-black text-white border-black shadow-md font-bold"
                        : "bg-gray-50/80 hover:bg-gray-100 text-neutral-700 hover:text-black border-transparent"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center transition-colors ${
                        isActive ? "bg-white/20 text-white" : "bg-white text-neutral-700 shadow-sm"
                      }`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="text-xs sm:text-sm font-semibold tracking-wide whitespace-nowrap">
                        {ind.title}
                      </span>
                    </div>

                    <span className={`text-xs font-mono font-bold hidden lg:block ${
                      isActive ? "text-white/60" : "text-neutral-400"
                    }`}>
                      {ind.num}
                    </span>
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
