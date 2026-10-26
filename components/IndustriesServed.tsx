"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, ChevronDown } from "lucide-react";
import SafeImage from "@/components/SafeImage";

interface IndustryItem {
  id: string;
  num: string;
  title: string;
  heading: string;
  description: string;
  href: string;
  img: string;
  cta: string;
}

const industries: IndustryItem[] = [
  {
    id: "retail",
    num: "(01)",
    title: "RETAIL",
    heading: "Interactive storefronts, floors and product spaces",
    description: "Interactive retail displays, touch-sensing pedestals, and digital storefronts that turn browsing into buying.",
    href: "/industries/retail",
    img: "/images/retail_interactive_showcase.jpg",
    cta: "Explore Retail",
  },
  {
    id: "hospitality",
    num: "(02)",
    title: "HOSPITALITY",
    heading: "Guest areas, themed spaces and interactive experiences",
    description: "Guest areas, themed spaces, and immersive visual environments that create unforgettable guest arrivals.",
    href: "/industries/hospitality",
    img: "/images/hospitality_ambient_atrium.jpg",
    cta: "Explore Hospitality",
  },
  {
    id: "restaurants",
    num: "(03)",
    title: "RESTAURANTS",
    heading: "Dining environments, visual menus and interactive experiences",
    description: "Dining environments, visual projection menus, and interactive table experiences that elevate dining.",
    href: "/industries/hospitality",
    img: "/images/dining_projection_table.jpg",
    cta: "Explore Restaurants",
  },
  {
    id: "education",
    num: "(04)",
    title: "EDUCATION",
    heading: "Learning spaces where students can see and take part",
    description: "Learning spaces where students can see, touch, and participate through active interactive floors and walls.",
    href: "/industries/education",
    img: "/images/education_interactive_floor.jpg",
    cta: "Explore Education",
  },
  {
    id: "museums",
    num: "(05)",
    title: "MUSEUMS & CULTURAL",
    heading: "Exhibits that invite visitors to explore",
    description: "Immersive experiences that preserve heritage, educate visitors, and bring historical stories vividly to life.",
    href: "/industries/museums-culture",
    img: "/images/museum_digital_art_kandinsky.jpg",
    cta: "Explore Museums",
  },
  {
    id: "entertainment",
    num: "(06)",
    title: "ENTERTAINMENT",
    heading: "Games, play areas and immersive environments",
    description: "Multiplayer motion games, active play arenas, and 360° visual environments built for maximum fun.",
    href: "/industries/entertainment",
    img: "/images/entertainment_motion_arena.jpg",
    cta: "Explore Entertainment",
  },
];

export default function IndustriesServed() {
  const [hoveredIndex, setHoveredIndex] = useState<number>(0);
  const [isHovering, setIsHovering] = useState<boolean>(true);
  const [mobileActiveIndex, setMobileActiveIndex] = useState<number | null>(0);
  const [cardX, setCardX] = useState<number>(0);
  const [cardY, setCardY] = useState<number>(0);

  const listRef = useRef<HTMLOListElement>(null);
  const rowRefs = useRef<(HTMLLIElement | null)[]>([]);

  // Smooth GPU position calculation using offset properties (avoids layout thrashing)
  useEffect(() => {
    const updatePosition = () => {
      const idx = hoveredIndex;
      const rowEl = rowRefs.current[idx];
      const listEl = listRef.current;
      if (rowEl && listEl) {
        const gapEl = rowEl.querySelector(".ind-gap") as HTMLElement | null;
        const listHeight = listEl.offsetHeight || 600;
        const halfCard = 110;
        
        let targetX = listEl.offsetWidth * 0.52;
        let rawY = rowEl.offsetTop + rowEl.offsetHeight / 2;

        if (gapEl) {
          targetX = gapEl.offsetLeft + gapEl.offsetWidth / 2;
        }

        const clampedY = Math.max(halfCard, Math.min(listHeight - halfCard, rawY));
        setCardX(targetX);
        setCardY(clampedY);
      }
    };

    updatePosition();
    window.addEventListener("resize", updatePosition, { passive: true });
    return () => window.removeEventListener("resize", updatePosition);
  }, [hoveredIndex]);

  return (
    <section 
      id="industries-served"
      className="py-16 sm:py-24 lg:py-32 bg-white text-black relative overflow-hidden select-none"
    >
      <div className="max-w-7xl 2xl:max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header - Pure Black & White Branding */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20 lg:mb-24 space-y-3">
          <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.22em] text-neutral-500 block">
            Transforming industries
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-black leading-[1.1]">
            See Where Our Solutions Fit Your Industry
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 font-light max-w-2xl mx-auto leading-relaxed">
            Transforming industries through interactive projection, motion sensing, and immersive technology.
          </p>
        </div>

        {/* Desktop ViitorX-style Interactive Rows with Floating Card */}
        <div className="hidden lg:block relative">
          <ol 
            ref={listRef}
            onMouseLeave={() => setIsHovering(false)}
            className="w-full relative list-none m-0 p-0 border-t border-neutral-200"
          >
            {industries.map((ind, idx) => {
              const isActive = hoveredIndex === idx && isHovering;
              return (
                <li
                  key={ind.id}
                  ref={(el) => { rowRefs.current[idx] = el; }}
                  onMouseEnter={() => {
                    setHoveredIndex(idx);
                    setIsHovering(true);
                  }}
                  className="group relative cursor-pointer border-b border-neutral-200 transition-colors duration-300 py-8 xl:py-10"
                >
                  <Link href={ind.href} className="block w-full outline-none">
                    <div className="grid grid-cols-[50px_minmax(0,1.15fr)_clamp(280px,24vw,360px)_minmax(240px,1fr)] items-center gap-6 xl:gap-10">
                      
                      {/* Column 1: Count */}
                      <span
                        className={`font-mono text-sm xl:text-base font-semibold transition-colors duration-300 ${
                          isActive ? "text-black font-bold" : "text-neutral-400 group-hover:text-black"
                        }`}
                      >
                        {ind.num}
                      </span>

                      {/* Column 2: Title */}
                      <h3
                        className={`text-lg sm:text-xl lg:text-2xl xl:text-[1.75rem] font-bold tracking-tight uppercase leading-snug transition-colors duration-300 ${
                          isActive ? "text-black font-black" : "text-neutral-800 group-hover:text-black"
                        }`}
                      >
                        {ind.title}
                      </h3>

                      {/* Column 3: Center Gap Reserved for Floating Card */}
                      <div className="ind-gap w-full h-1" aria-hidden="true" />

                      {/* Column 4: Description + CTA */}
                      <div className="space-y-2">
                        <p
                          className={`text-sm xl:text-[15px] leading-relaxed transition-colors duration-300 ${
                            isActive ? "text-black font-normal" : "text-neutral-500 group-hover:text-neutral-900"
                          }`}
                        >
                          {ind.description}
                        </p>
                        <span
                          className={`inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                            isActive
                              ? "text-black translate-x-1"
                              : "text-neutral-400 group-hover:text-black group-hover:translate-x-1"
                          }`}
                        >
                          <span>{ind.cta}</span>
                          <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </span>
                      </div>

                    </div>
                  </Link>
                </li>
              );
            })}
          </ol>

          {/* Floating Image Card that Glides and Tilts Between Rows (GPU Composited 16:10 Aspect Ratio) */}
          <motion.div
            className="pointer-events-none absolute z-30 will-change-transform"
            style={{
              left: 0,
              top: 0,
            }}
            animate={{
              x: cardX,
              y: cardY,
              rotate: hoveredIndex % 2 === 0 ? -3 : 3,
              scale: isHovering ? 1 : 0.88,
              opacity: isHovering ? 1 : 0,
            }}
            transition={{
              x: { duration: 0.45, ease: [0.16, 1, 0.3, 1] },
              y: { duration: 0.45, ease: [0.16, 1, 0.3, 1] },
              rotate: { duration: 0.45, ease: [0.16, 1, 0.3, 1] },
              scale: { duration: 0.3, ease: "easeOut" },
              opacity: { duration: 0.25, ease: "easeOut" },
            }}
            aria-hidden="true"
          >
            <div className="w-[clamp(280px,24vw,360px)] aspect-[16/10] -translate-x-1/2 -translate-y-1/2 rounded-[22px] overflow-hidden bg-neutral-900 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.32)] border border-black/10 relative">
              {industries.map((ind, idx) => (
                <div
                  key={ind.id}
                  className={`absolute inset-0 w-full h-full transition-opacity duration-400 ease-out ${
                    hoveredIndex === idx ? "opacity-100 scale-100" : "opacity-0 scale-105 pointer-events-none"
                  }`}
                >
                  <SafeImage
                    src={ind.img}
                    alt={ind.title}
                    className="w-full h-full object-cover object-center"
                    containerClassName="w-full h-full"
                    priority={idx === 0}
                  />
                  {/* Atmospheric contrast shadow overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-black/10 pointer-events-none" />
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Mobile & Tablet Interactive Accordion Layout (< 1024px) - Clean Black & White */}
        <div className="lg:hidden divide-y divide-neutral-200 border-t border-b border-neutral-200">
          {industries.map((ind, idx) => {
            const isExpanded = mobileActiveIndex === idx;
            return (
              <div key={ind.id} className="py-4 sm:py-5">
                <button
                  type="button"
                  onClick={() => setMobileActiveIndex(isExpanded ? null : idx)}
                  className="w-full flex items-center justify-between text-left group"
                  aria-expanded={isExpanded}
                >
                  <div className="flex items-center gap-3 sm:gap-4 pr-3">
                    <span 
                      className={`font-mono text-xs sm:text-sm font-semibold transition-colors ${
                        isExpanded ? "text-black" : "text-neutral-400"
                      }`}
                    >
                      {ind.num}
                    </span>
                    <span 
                      className={`text-base sm:text-xl font-bold tracking-tight uppercase transition-colors ${
                        isExpanded ? "text-black font-extrabold" : "text-neutral-800"
                      }`}
                    >
                      {ind.title}
                    </span>
                  </div>
                  <div 
                    className={`w-7 h-7 rounded-full flex items-center justify-center transition-all ${
                      isExpanded ? "bg-black text-white rotate-180" : "bg-neutral-100 text-neutral-600"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4 transition-transform duration-300" />
                  </div>
                </button>

                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="pt-4 pb-2 space-y-3">
                        <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden shadow-md bg-neutral-900">
                          <SafeImage
                            src={ind.img}
                            alt={ind.title}
                            className="w-full h-full object-cover object-center"
                            containerClassName="w-full h-full"
                          />
                        </div>
                        <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed font-light">
                          {ind.description}
                        </p>
                        <div className="pt-1">
                          <Link
                            href={ind.href}
                            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-black hover:text-neutral-600 transition-colors"
                          >
                            <span>{ind.cta}</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </Link>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
