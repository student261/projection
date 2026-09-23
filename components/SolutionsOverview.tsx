"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent, useMotionValue, useSpring, useTransform } from "framer-motion";
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
    img: "/images/interactive_floor_motion.jpg",
    video: "/interactive-space.mp4",
  },
  {
    id: "immersive-environment",
    title: "Immersive Environments",
    desc: "Create breathtaking 360° projection mapped rooms.",
    icon: <Expand className="w-6 h-6" />,
    href: "/solutions/immersive-environment",
    img: "/images/biosphere_ocean_gallery.jpg",
    video: "/immersive-environment-1.mp4",
  },
  {
    id: "ai-experience",
    title: "AI Experiences",
    desc: "Integrate computer vision and generative avatars.",
    icon: <Cpu className="w-6 h-6" />,
    href: "/solutions/ai-experience",
    img: "/images/corporate_lobby_wall.jpg",
  },
  {
    id: "solution-engagement",
    title: "Smart Engagement",
    desc: "Deploy interactive kiosks and motion games at scale.",
    icon: <Gamepad2 className="w-6 h-6" />,
    href: "/solutions/solution-engagement",
    img: "/images/entertainment_motion_arena.jpg",
    video: "/smart-engagement.mp4",
  }
];

const solutions = [
  {
    id: "interactive",
    num: "01",
    subtitle: "REAL-TIME TRACKING", 
    title: "Interactive Floors & Walls",
    description:
      "Physical surfaces that respond directly to human movement. As visitors walk across floors or gesture near walls, real-time visual patterns and soundscapes react beneath their feet.",
    img: "/images/hospitality_koi_pond.jpg",
    caption: "Interactive koi pond floor radiating ripples beneath footsteps in a luxury hotel atrium",
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
    subtitle: "MULTI-SURFACE SUPPORT",
    title: "360° Immersive Rooms",
    description:
      "Full-room projections that envelope entire galleries, lobbies, and event spaces. Seamless multi-projector edge blending transforms physical architecture into fluid digital environments.",
    img: "/images/cathedral_projection_mapping.jpg",
    caption: "360° architectural projection mapping with synchronized spatial surround sound",
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
    subtitle: "CUSTOM VISUAL EFFECTS",
    title: "AI Interactive Displays",
    description:
      "Installations that observe and adapt. Using computer vision and generative systems, the experience evolves live based on audience positioning, crowd flow, and movement.",
    img: "/images/ai_receptionist_concierge.jpg",
    caption: "Holographic AI interactive concierge on architectural glass reacting to visitor presence",
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
    subtitle: "ENTERPRISE SCALE",
    title: "Smart Engagement Hubs",
    description:
      "Interactive mini-games and branded activations designed for retail, expos, and public venues. Effortlessly switch games, seasonal themes, and sponsor visuals through our web portal.",
    img: "/images/interactive_strike_wall.jpg",
    caption: "Multiplayer interactive strike wall with real-time target physics and kinetic tracking",
    href: "/solutions#smart",
    highlights: [
      "Cloud-based remote content updates",
      "Custom branded games, leaderboards & sponsor overlays",
      "Visitor engagement analytics & dwell time reports",
    ],
  },
];

function TiltCard({ cat, isDesktop }: { cat: any; isDesktop: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth springs for a fluid, floating feel
  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 40 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 40 });

  // Map mouse coordinates to rotation
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["12deg", "-12deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-12deg", "12deg"]);

  // Map mouse coordinates to glare position
  const glareX = useTransform(mouseXSpring, [-0.5, 0.5], ["100%", "0%"]);
  const glareY = useTransform(mouseYSpring, [-0.5, 0.5], ["100%", "0%"]);

  const videoRef = useRef<HTMLVideoElement>(null);

  // On mobile touch devices, automatically play video when card is in view, pause when scrolled away
  useEffect(() => {
    if (isDesktop) return;
    const cardEl = ref.current;
    if (!cardEl) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          videoRef.current?.play().catch(() => {});
        } else {
          videoRef.current?.pause();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(cardEl);
    return () => observer.disconnect();
  }, [isDesktop]);

  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    x.set(mouseX / width - 0.5);
    y.set(mouseY / height - 0.5);

    if (isDesktop && videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!isDesktop || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    x.set(mouseX / width - 0.5);
    y.set(mouseY / height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    if (isDesktop && videoRef.current) {
      videoRef.current.pause();
    }
  };

  return (
    <motion.div
      ref={ref}
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ perspective: 1200 }}
      className="w-full h-[380px] lg:h-[460px] cursor-pointer group"
    >
      <Link href={cat.href} className="block w-full h-full outline-none">
        <motion.div
          style={{
            rotateX: isDesktop ? rotateX : 0,
            rotateY: isDesktop ? rotateY : 0,
            transformStyle: "preserve-3d",
          }}
          className="relative w-full h-full rounded-[2rem] bg-black border border-white/5 shadow-[0_30px_60px_-20px_rgba(0,0,0,0.4)] transition-all duration-300"
        >
          {/* Base Layer: Image or Video */}
          <div 
            className="absolute inset-0 rounded-[2rem] overflow-hidden bg-black"
            style={{ transform: "translateZ(0px)" }}
          >
            {cat.video ? (
              <video
                ref={videoRef}
                src={cat.video}
                loop
                muted
                playsInline
                preload="auto"
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105"
              />
            ) : (
              <SafeImage
                src={cat.img}
                alt={cat.title}
                className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105"
                containerClassName="w-full h-full"
              />
            )}
            {/* Ambient Dark Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent pointer-events-none" />
          </div>

          {/* Glare Layer */}
          <motion.div 
            className="absolute inset-0 rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-overlay pointer-events-none"
            style={{
              background: "radial-gradient(circle at center, rgba(255,255,255,0.8) 0%, transparent 60%)",
              backgroundSize: "250% 250%",
              backgroundPositionX: glareX,
              backgroundPositionY: glareY,
              transform: "translateZ(1px)"
            }}
          />
          
          {/* Floating Content Layer (Pops out in 3D) */}
          <div 
            className="absolute inset-0 p-6 lg:p-8 flex flex-col justify-between pointer-events-none"
            style={{ transform: "translateZ(60px)" }} // The 3D pop out effect
          >
            <div className="flex justify-between items-start">
              <div className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md mb-4 flex items-center justify-center text-white border border-white/20 shadow-xl">
                {cat.icon}
              </div>
              <div className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-all duration-500 shadow-xl">
                <ArrowRight className="w-4 h-4 -rotate-45 group-hover:rotate-0 transition-transform duration-500" />
              </div>
            </div>

            <div style={{ transform: "translateZ(40px)" }}>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 leading-tight drop-shadow-2xl">
                {cat.title}
              </h3>
              <p className="text-white/70 text-sm font-light drop-shadow-md">
                {cat.desc}
              </p>
            </div>
          </div>
        </motion.div>
      </Link>
    </motion.div>
  );
}

export default function SolutionsOverview() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDesktop, setIsDesktop] = useState(false);
  const activeSolution = solutions[activeIndex];
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const update = () => setIsDesktop(window.innerWidth >= 1024);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (typeof window !== 'undefined' && window.innerWidth < 1024) return;
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
    const scrollableDistance = height - window.innerHeight;
    if (scrollableDistance <= 0) return;
    
    const targetRatio = idx / Math.max(1, solutions.length - 1);
    const targetY = scrollY + top + targetRatio * scrollableDistance;
    
    window.scrollTo({
      top: targetY,
      behavior: "smooth"
    });
  };

  return (
    <section id="solutions-overview" className="flex flex-col">
      {/* 4 Cards Solution Overview */}
      <div className="bg-white text-black py-14 sm:py-18 lg:py-20">
        <div className="max-w-7xl 2xl:max-w-[1536px] 3xl:max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 lg:mb-12 max-w-3xl mx-auto space-y-4">
            <span className="flex justify-center items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-black/50">
              <Sparkles className="w-3.5 h-3.5" />
              Discover Our Solutions
            </span>
            <h2 className="font-bold tracking-tight text-[clamp(2rem,4.5vw,3rem)]">
              Transforming spaces into interactive experiences.
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((cat) => (
              <TiltCard key={cat.id} cat={cat} isDesktop={isDesktop} />
            ))}
          </div>
        </div>
      </div>

      {/* Core Capabilities Interactive Section */}
      <div id="core-capabilities" ref={containerRef} className="bg-[#0f0f11] text-white relative lg:h-[350vh] scroll-mt-24">
        
        {/* Mobile Stacked View (< 1024px) */}
        <div className="lg:hidden pt-28 pb-16 px-4 sm:px-6 max-w-4xl mx-auto space-y-12">
          {/* Header */}
          <div className="space-y-3">
            <span className="flex items-center gap-2 text-[11px] font-mono font-bold uppercase tracking-widest text-white/70">
              <Sparkles className="w-3.5 h-3.5" />
              Core Capabilities
            </span>
            <h3 className="text-3xl sm:text-4xl leading-[1.08] font-black text-white tracking-tight">
              Everything you need in one place
            </h3>
          </div>

          {/* Stacked Cards */}
          <div className="flex flex-col gap-14">
            {solutions.map((item) => (
              <div key={item.id} className="flex flex-col gap-5">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono font-bold px-2.5 py-1 bg-white text-black rounded">
                    {item.num}
                  </span>
                  <span className="text-xs font-bold tracking-widest uppercase text-white/80">
                    {item.subtitle}
                  </span>
                </div>

                <div className="relative w-full h-[240px] sm:h-[320px] rounded-2xl overflow-hidden shadow-xl border border-white/10">
                  <SafeImage
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover object-center"
                    containerClassName="w-full h-full"
                  />
                </div>

                <div className="space-y-3.5">
                  <h4 className="text-2xl font-bold leading-[1.15] text-white">
                    {item.title}
                  </h4>
                  <p className="text-white/75 font-light leading-relaxed text-sm sm:text-base">
                    {item.description}
                  </p>
                  <ul className="space-y-2.5 pt-1">
                    {item.highlights.map((point, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-white/85 font-medium">
                        <span className="w-1.5 h-1.5 rounded-full bg-white/70 mt-1.5 shrink-0 shadow-[0_0_6px_rgba(255,255,255,0.4)]" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="pt-3">
                    <Link
                      href={item.href}
                      className="inline-flex items-center justify-center px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest text-white border border-white/25 hover:bg-white hover:text-black transition-all duration-300 shadow-md"
                    >
                      EXPLORE PLATFORM
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop Sticky View (>= 1024px) */}
        <div className="hidden lg:flex sticky top-0 h-screen w-full items-center overflow-hidden bg-[#0f0f11]">
          
          {/* Left Panel: Content & Navigation (Strictly left half, zero overlap with right media) */}
          <div className="relative z-10 w-full lg:w-[52%] xl:w-[50%] 2xl:w-[46%] h-full flex flex-col justify-center pl-8 sm:pl-10 lg:pl-12 xl:pl-20 2xl:pl-24 pr-6 lg:pr-8 xl:pr-10 pt-24 lg:pt-28 pb-8">
            
            <div className="max-w-xl w-full my-auto space-y-3.5 xl:space-y-5">
              {/* Header */}
              <div className="space-y-1">
                <span className="flex items-center gap-2 text-xs xl:text-sm font-mono font-bold uppercase tracking-[0.25em] text-white/60">
                  <Sparkles className="w-3.5 h-3.5 text-white/70" />
                  Core Capabilities
                </span>
                <h3 className="text-2xl sm:text-3xl xl:text-4xl 2xl:text-5xl leading-[1.08] font-black text-white tracking-tight">
                  Everything you need in one place
                </h3>
              </div>

              {/* Navigation Tabs - Clean Segmented Pill Bar */}
              <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 pt-1 pb-1">
                {solutions.map((item, idx) => {
                  const isActive = activeIndex === idx;
                  return (
                    <button
                      key={item.id}
                      onClick={() => {
                        setActiveIndex(idx);
                        scrollToSegment(idx);
                      }}
                      className={`flex items-center gap-2 py-1.5 xl:py-2 px-3 xl:px-4 rounded-full transition-all duration-300 group cursor-pointer text-[11px] xl:text-xs font-bold tracking-wider uppercase ${
                        isActive 
                          ? "bg-white text-black shadow-lg shadow-white/10 scale-[1.02]" 
                          : "bg-white/[0.07] text-white/60 hover:text-white hover:bg-white/[0.12] border border-white/5"
                      }`}
                    >
                      <span className={`text-[10px] xl:text-[11px] font-mono font-bold ${
                        isActive ? "text-black/70" : "text-white/40 group-hover:text-white/70"
                      }`}>
                        {item.num}
                      </span>
                      <span>
                        {item.subtitle}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Active Content: Spacious & Beautiful */}
              <div className="min-w-0">
                <AnimatePresence initial={false}>
                  <motion.div
                    key={activeSolution.id}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                    className="space-y-3 xl:space-y-4"
                  >
                    <h4 className="text-xl sm:text-2xl xl:text-3xl 2xl:text-4xl font-black leading-tight text-white tracking-tight">
                      {activeSolution.title}
                    </h4>
                    
                    <p className="text-xs sm:text-sm xl:text-base text-white/80 font-light leading-relaxed">
                      {activeSolution.description}
                    </p>

                    <ul className="space-y-2 xl:space-y-2.5 pt-0.5">
                      {activeSolution.highlights.map((point, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm xl:text-base text-white/90 font-medium">
                          <span className="w-1.5 h-1.5 rounded-full bg-white/70 mt-1.5 shrink-0 shadow-[0_0_6px_rgba(255,255,255,0.4)]" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="pt-2 xl:pt-3">
                      <Link
                        href={activeSolution.href}
                        className="inline-flex items-center justify-center px-6 xl:px-8 py-2.5 xl:py-3 rounded-full text-xs xl:text-sm font-bold uppercase tracking-widest text-white border border-white/25 hover:bg-white hover:text-black transition-all duration-300 shadow-xl hover:scale-105 active:scale-95 cursor-pointer"
                      >
                        EXPLORE PLATFORM
                      </Link>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

            </div>
          </div>

          {/* Right Panel: 100% Full-Bleed Media Display (Spans top-to-bottom, center to right edge) */}
          <div className="absolute right-0 inset-y-0 w-[50%] lg:w-[50%] xl:w-[52%] 2xl:w-[55%] pointer-events-none z-0 hidden lg:block overflow-hidden">
            <AnimatePresence initial={false}>
              <motion.div
                key={activeSolution.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.45, ease: "easeOut" }}
                className="absolute inset-0 w-full h-full"
              >
                <SafeImage
                  src={activeSolution.img}
                  alt={activeSolution.title}
                  className="w-full h-full object-cover object-center"
                  containerClassName="w-full h-full"
                  priority
                />
                
                {/* Soft Left Edge Seam Transition into #0f0f11 */}
                <div className="absolute inset-y-0 left-0 w-20 lg:w-28 xl:w-40 bg-gradient-to-r from-[#0f0f11] via-[#0f0f11]/80 to-transparent pointer-events-none" />
                
                {/* Subtle top/bottom edge shade for atmospheric depth */}
                <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-[#0f0f11]/40 to-transparent pointer-events-none" />
                <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#0f0f11]/50 to-transparent pointer-events-none" />
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}