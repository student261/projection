"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import Link from "next/link";
import { Sparkles, Layers, Expand, Cpu, Gamepad2, ArrowRight } from "lucide-react";
import SafeImage from "@/components/SafeImage";

const categories = [
  {
    id: "interactive-spaces",
    title: "Interactive Spaces",
    desc: "Turn ordinary floors and walls into responsive digital canvases.",
    icon: <Layers className="w-6 h-6" />,
    href: "/solutions/interactive-spaces",
    img: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "immersive-environment",
    title: "Immersive Environments",
    desc: "Create breathtaking 360° projection mapped rooms.",
    icon: <Expand className="w-6 h-6" />,
    href: "/solutions/immersive-environment",
    img: "https://images.unsplash.com/photo-1518998053901-5348d3961a04?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "ai-experience",
    title: "AI Experiences",
    desc: "Integrate computer vision and generative avatars.",
    icon: <Cpu className="w-6 h-6" />,
    href: "/solutions/ai-experience",
    img: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "solution-engagement",
    title: "Smart Engagement",
    desc: "Deploy interactive kiosks and motion games at scale.",
    icon: <Gamepad2 className="w-6 h-6" />,
    href: "/solutions/solution-engagement",
    img: "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=600&q=80",
  }
];

const solutions = [
  {
    id: "interactive",
    num: "01",
    subtitle: "CONTENT-AS-DATA", 
    title: "Interactive Floors & Walls",
    description:
      "Physical surfaces that respond directly to human movement. As visitors walk across floors or gesture near walls, real-time visual patterns and soundscapes react beneath their feet.",
    img: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1400&q=85",
    caption: "Motion tracking floor installation in a modern exhibition room",
    href: "/solutions#interactive",
    highlights: [
      "Floor, wall, and architectural surface projection",
      "Multi-user tracking for high-traffic public spaces",
      "Custom interactive visual effects & fluid animations",
    ],
  },
  {
    id: "immersive",
    num: "02",
    subtitle: "EDITORIAL FREEDOM",
    title: "360° Immersive Rooms",
    description:
      "Full-room projections that envelope entire galleries, lobbies, and event spaces. Seamless multi-projector edge blending transforms physical architecture into fluid digital environments.",
    img: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=1400&q=85",
    caption: "360° projection mapping gallery with spatial surround sound",
    href: "/solutions#immersive",
    highlights: [
      "Seamless multi-projector edge blending",
      "Tailored 3D architectural content & room mapping",
      "Synchronized spatial surround soundscapes",
    ],
  },
  {
    id: "ai",
    num: "03",
    subtitle: "CONTENT AGENT",
    title: "AI Interactive Displays",
    description:
      "Installations that observe and adapt. Using computer vision and generative systems, the experience evolves live based on audience positioning, crowd flow, and movement.",
    img: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1400&q=85",
    caption: "Generative AI visual engine reacting to audience movement",
    href: "/solutions#ai",
    highlights: [
      "Live visuals that react naturally (no boring loops)",
      "Friendly AI avatars to greet your guests",
      "Easy-to-understand visitor foot-traffic insights",
    ],
  },
  {
    id: "smart",
    num: "04",
    subtitle: "AUTOMATION AT SCALE",
    title: "Smart Engagement Hubs",
    description:
      "Interactive mini-games and branded activations designed for retail, expos, and public venues. Effortlessly switch games, seasonal themes, and sponsor visuals through our web portal.",
    img: "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=1400&q=85",
    caption: "Smart gamified interaction kiosk with cloud CMS management",
    href: "/solutions#smart",
    highlights: [
      "Cloud-based remote content updates",
      "Custom branded games, leaderboards & sponsor overlays",
      "Visitor engagement analytics & dwell time reports",
    ],
  },
];

export default function SolutionsOverview() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeSolution = solutions[activeIndex];
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const index = Math.min(
      Math.floor(latest * solutions.length),
      solutions.length - 1
    );
    if (index !== activeIndex) {
      setActiveIndex(index);
    }
  });

  const scrollToSegment = (idx: number) => {
    if (!containerRef.current) return;
    const container = containerRef.current;
    const { top, height } = container.getBoundingClientRect();
    const scrollY = window.scrollY;
    
    const segmentHeight = height / solutions.length;
    const targetY = top + scrollY + (idx * segmentHeight) + 10;
    
    window.scrollTo({
      top: targetY,
      behavior: "smooth"
    });
  };

  return (
    <section id="solutions-overview" className="flex flex-col">
      {/* 4 Cards Solution Overview */}
      <div className="bg-white text-black py-24 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 max-w-3xl mx-auto space-y-4">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/5 border border-black/10 text-[11px] font-bold uppercase tracking-widest text-black/70">
              <Sparkles className="w-3.5 h-3.5" />
              Platform Solutions
            </span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              Transforming spaces into interactive experiences.
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((cat) => (
              <Link 
                href={cat.href}
                key={cat.id} 
                className="group relative h-[360px] lg:h-[440px] rounded-[2rem] overflow-hidden bg-black transition-all duration-500 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.2)] hover:-translate-y-2 block"
              >
                {/* Background Image */}
                <div className="absolute inset-0 w-full h-full">
                  <SafeImage
                    src={cat.img}
                    alt={cat.title}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                    containerClassName="w-full h-full"
                  />
                  {/* Dark gradient for text legibility */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-90 transition-opacity duration-500" />
                </div>
                
                {/* Interactive Content Overlay */}
                <div className="absolute inset-0 p-6 lg:p-8 flex flex-col justify-between">
                  {/* Top section: Icon & Arrow */}
                  <div className="flex justify-between items-start">
                    <div className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-white flex items-center justify-center shadow-xl transition-transform duration-500 group-hover:scale-110">
                      {cat.icon}
                    </div>
                    <div className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 shadow-xl">
                      <ArrowRight className="w-4 h-4 -rotate-45 group-hover:rotate-0 transition-transform duration-500" />
                    </div>
                  </div>
                  
                  {/* Bottom section: Text */}
                  <div className="transform transition-transform duration-500 translate-y-4 group-hover:translate-y-0">
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 leading-tight">
                      {cat.title}
                    </h3>
                    <div className="h-0 opacity-0 group-hover:h-auto group-hover:opacity-100 transition-all duration-500 overflow-hidden">
                      <p className="text-white/70 text-sm font-light mt-2 line-clamp-2">
                        {cat.desc}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Existing Core Capabilities (supporting sub-block) */}
      <div className="bg-[#0f0f11] text-white border-t border-white/10 pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:pt-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 border-b border-white/10 pb-8">
            <div className="max-w-3xl space-y-4">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-[11px] font-bold uppercase tracking-widest text-white/70">
                <Sparkles className="w-3.5 h-3.5" />
                Core Capabilities
              </span>
              <h3 className="text-3xl lg:text-4xl leading-[1.08] font-bold text-white">
                Everything you need in one place
              </h3>
            </div>
          </div>
        </div>

        {/* 400vh scrollable container for the interaction */}
        <div ref={containerRef} className="h-[400vh] relative w-full">
          
          {/* Sticky inner container */}
          <div className="sticky top-0 h-screen w-full flex flex-col justify-center overflow-hidden pb-12 lg:pb-16 pt-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
              
              {/* 3-Column Interactive Layout */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-stretch min-h-[600px]">
                
                {/* Column 1: Sticky Navigation Tabs */}
                <div 
                  className="lg:col-span-3 space-y-3 lg:sticky lg:top-32 relative h-fit"
                  style={{
                    backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.15) 1px, transparent 1px)',
                    backgroundSize: '24px 24px',
                    backgroundPosition: 'left top',
                  }}
                >
                  {solutions.map((item, idx) => {
                    const isActive = activeIndex === idx;
                    return (
                      <button
                        key={item.id}
                        onClick={() => scrollToSegment(idx)}
                        className={`w-full text-left flex items-center gap-4 py-2.5 transition-all duration-300 group ${
                          isActive ? "opacity-100" : "opacity-50 hover:opacity-100"
                        }`}
                      >
                        <span className={`text-[10px] sm:text-[11px] font-bold px-2 py-1 transition-colors ${
                          isActive ? "bg-white text-black" : "bg-transparent text-white/50 group-hover:text-white"
                        }`}>
                          {item.num}
                        </span>
                        <span className={`text-[11px] sm:text-xs font-bold tracking-widest uppercase transition-colors ${
                          isActive ? "text-white" : "text-white/50 group-hover:text-white"
                        }`}>
                          {item.subtitle}
                        </span>
                      </button>
                    );
                  })}
                </div>

                {/* Column 2: Active Text Content */}
                <div className="lg:col-span-4 relative h-full flex flex-col justify-center">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeSolution.id}
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -15 }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                      className="space-y-6 lg:pr-8"
                    >
                      <h4 className="text-2xl font-bold leading-[1.1] text-white">
                        {activeSolution.title}
                      </h4>
                      
                      <p className="text-white/70 font-light leading-relaxed">
                        {activeSolution.description}
                      </p>

                      <ul className="space-y-3 pt-2">
                        {activeSolution.highlights.map((point, i) => (
                          <li key={i} className="flex items-start gap-3 text-sm text-white/80 font-medium">
                            <span className="w-1.5 h-1.5 rounded-full bg-white/40 mt-1.5 shrink-0" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="pt-6">
                        <Link
                          href={activeSolution.href}
                          className="inline-flex items-center justify-center px-6 py-2.5 rounded-full text-[11px] font-bold uppercase tracking-widest text-white border border-white/20 hover:bg-white hover:text-black transition-all duration-300"
                        >
                          EXPLORE PLATFORM
                        </Link>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Column 3: Active Media Container */}
                <div className="lg:col-span-5 relative w-full h-full min-h-[400px]">
                  <div 
                    className="absolute top-0 bottom-0 -left-4 sm:-left-6 lg:left-0 overflow-hidden lg:rounded-l-[2rem] lg:border-l lg:border-white/10 lg:shadow-[-20px_0_40px_rgba(0,0,0,0.5)]"
                    style={{ width: 'calc(100% + max(2rem, (100vw - 1280px) / 2))' }}
                  >
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={activeSolution.id}
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 1.02 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className="absolute inset-0 w-full h-full"
                      >
                        <SafeImage
                          src={activeSolution.img}
                          alt={activeSolution.title}
                          className="w-full h-full object-cover object-center"
                          containerClassName="w-full h-full"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-[#0f0f11] via-[#0f0f11]/40 to-transparent pointer-events-none opacity-80" />
                      </motion.div>
                    </AnimatePresence>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
