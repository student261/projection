"use client";

import { useState, useRef, useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform, useScroll } from "framer-motion";
import Link from "next/link";
import { Sparkles, Layers, Expand, Cpu, Gamepad2, ArrowRight, Tv } from "lucide-react";
import SafeImage from "@/components/SafeImage";

const categories = [
  {
    id: "interactive-projection",
    title: "Interactive Projection",
    desc: "Turn floors, walls and other surfaces into responsive digital experiences that react to movement and interaction.",
    icon: <Layers className="w-6 h-6" />,
    href: "/solutions/interactive-projection",
    img: "/images/interactive_floor_motion.jpg",
    video: "/interactive-space.mp4",
    cta: "Explore Interactive Projection",
  },
  {
    id: "immersive-experiences",
    title: "Immersive Experiences",
    desc: "Create immersive environments with projection, projection mapping and spatial visuals designed around your space.",
    icon: <Expand className="w-6 h-6" />,
    href: "/solutions/immersive-environment",
    img: "/images/biosphere_ocean_gallery.jpg",
    video: "/immersive-environment-1.mp4",
    cta: "Explore Immersive Experiences",
  },
  {
    id: "ai-experiences",
    title: "AI Experiences",
    desc: "Bring AI avatars, generative content and interactive AI experiences into physical spaces.",
    icon: <Cpu className="w-6 h-6" />,
    href: "/solutions/ai-experience",
    img: "/images/corporate_lobby_wall.jpg",
    cta: "Explore AI Experiences",
  },
  {
    id: "interactive-engagement",
    title: "Interactive Engagement",
    desc: "Use interactive games, motion based experiences and digital installations to encourage participation.",
    icon: <Gamepad2 className="w-6 h-6" />,
    href: "/solutions/solution-engagement",
    img: "/images/entertainment_motion_arena.jpg",
    video: "/smart-engagement.mp4",
    cta: "Explore Interactive Engagement",
  },
  {
    id: "led-3d-displays",
    title: "LED & 3D Display Solutions",
    desc: "Create high impact visual experiences with 3D LED displays and custom LED formats for physical spaces.",
    icon: <Tv className="w-6 h-6" />,
    href: "/solutions",
    img: "/images/hospitality_ambient_atrium.jpg",
    cta: "Explore LED & 3D Displays",
  },
];

const solutions = [
  {
    id: "interactive-floors-walls",
    num: "01",
    subtitle: "INTERACTIVE FLOORS & WALLS", 
    title: "Interactive Floors & Walls",
    description:
      "Turn floors and walls into interactive spaces that respond to movement and create engaging experiences.",
    img: "/images/hospitality_koi_pond.jpg",
    href: "/solutions/interactive-projection",
    cta: "Explore Interactive Projection",
    highlights: [
      "Interactive floor and wall projection",
      "Visuals that respond to movement",
      "Custom experiences for different spaces",
    ],
  },
  {
    id: "immersive-environments",
    num: "02",
    subtitle: "IMMERSIVE ENVIRONMENTS",
    title: "Immersive Environments",
    description:
      "Create immersive spaces that surround visitors with visuals, sound and interactive content.",
    img: "/images/cathedral_projection_mapping.jpg",
    href: "/solutions/immersive-environment",
    cta: "Explore Immersive Experiences",
    highlights: [
      "Immersive rooms and environments",
      "Projection mapping for physical spaces",
      "180° and 360° visual experiences",
    ],
  },
  {
    id: "custom-interactive-experiences",
    num: "03",
    subtitle: "CUSTOM EXPERIENCES",
    title: "Custom Interactive Experiences",
    description:
      "Build interactive content around your space, audience and the experience you want people to have.",
    img: "/images/ai_receptionist_concierge.jpg",
    href: "/solutions",
    cta: "Explore Interactive Experiences",
    highlights: [
      "Interactive games and activities",
      "Custom visuals and digital content",
      "Experiences designed for your audience",
    ],
  },
  {
    id: "smart-engagement",
    num: "04",
    subtitle: "SMART ENGAGEMENT",
    title: "Smart Engagement",
    description:
      "Give visitors more ways to interact with your brand, space or content through digital experiences.",
    img: "/images/interactive_strike_wall.jpg",
    href: "/solutions/solution-engagement",
    cta: "Explore Interactive Engagement",
    highlights: [
      "Motion based games and interactions",
      "Brand focused interactive experiences",
      "Interactive kiosks and installations",
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
      className="w-full h-[380px] lg:h-[410px] xl:h-[460px] cursor-pointer group"
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
                poster={cat.img ? (cat.img.endsWith('.webp') ? cat.img : cat.img.replace(/\.(png|jpg|jpeg)$/, '.webp')) : undefined}
                loop
                muted
                playsInline
                preload="none"
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
            className="absolute inset-0 p-6 lg:p-5 xl:p-8 flex flex-col justify-between pointer-events-none"
            style={{ transform: "translateZ(60px)" }} // The 3D pop out effect
          >
            <div className="flex justify-between items-start">
              <div className="w-10 h-10 xl:w-12 xl:h-12 rounded-xl xl:rounded-2xl bg-white/10 backdrop-blur-md mb-4 flex items-center justify-center text-white border border-white/20 shadow-xl">
                {cat.icon}
              </div>
              <div className="w-9 h-9 xl:w-10 xl:h-10 rounded-full bg-white text-black flex items-center justify-center opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-all duration-500 shadow-xl">
                <ArrowRight className="w-4 h-4 -rotate-45 group-hover:rotate-0 transition-transform duration-500" />
              </div>
            </div>

            <div style={{ transform: "translateZ(40px)" }}>
              <h3 className="text-xl sm:text-2xl lg:text-lg xl:text-2xl font-bold text-white mb-2 leading-tight drop-shadow-2xl">
                {cat.title}
              </h3>
              <p className="text-white/70 text-xs xl:text-sm font-light drop-shadow-md">
                {cat.desc}
              </p>
            </div>
          </div>
        </motion.div>
      </Link>
    </motion.div>
  );
}

function StackingCapabilities() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Card 1 (idx 1, Immersive Environments)
  const card1Y = useTransform(scrollYProgress, [0.06, 0.28], ["100vh", "0vh"]);
  const card0Scale = useTransform(scrollYProgress, [0.06, 0.28], [1, 0.97]);

  // Card 2 (idx 2, Custom Interactive Experiences)
  const card2Y = useTransform(scrollYProgress, [0.35, 0.57], ["100vh", "0vh"]);
  const card1Scale = useTransform(scrollYProgress, [0.35, 0.57], [1, 0.97]);

  // Card 3 (idx 3, Smart Engagement - last card)
  const card3Y = useTransform(scrollYProgress, [0.64, 0.86], ["100vh", "0vh"]);
  const card2Scale = useTransform(scrollYProgress, [0.64, 0.86], [1, 0.97]);

  const cardsMotion = [
    { y: 0, scale: card0Scale, zIndex: 10 },
    { y: card1Y, scale: card1Scale, zIndex: 11 },
    { y: card2Y, scale: card2Scale, zIndex: 12 },
    { y: card3Y, scale: 1, zIndex: 13 },
  ];

  return (
    <div ref={containerRef} className="relative h-[280vh] sm:h-[300vh] lg:h-[320vh]">
      <div className="sticky top-20 sm:top-24 w-full">
        <div className="relative w-full grid grid-cols-1 grid-rows-1">
          {solutions.map((item, idx) => {
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
                          {item.description}
                        </p>

                        {/* Highlights */}
                        <ul className="space-y-1.5 pt-0.5 pb-2">
                          {item.highlights.map((point, i) => (
                            <li key={i} className="flex items-center gap-2.5 text-xs sm:text-sm text-white/85">
                              <span className="w-1.5 h-1.5 rounded-full bg-white shrink-0" />
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>

                        <div className="pt-1">
                          <Link
                            href={item.href}
                            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-wider uppercase text-white hover:text-white/70 transition-colors group/link py-1"
                          >
                            <span>{item.cta}</span>
                            <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1.5 transition-transform duration-300" />
                          </Link>
                        </div>
                      </div>
                    </div>

                    {/* Right: Visual Media */}
                    <div className="w-full lg:col-span-7 order-1 lg:order-2">
                      <div className="relative aspect-[16/10] sm:aspect-[16/9] lg:aspect-[16/10] max-h-[240px] sm:max-h-[270px] lg:max-h-[300px] w-full rounded-xl sm:rounded-2xl overflow-hidden border border-white/10 bg-black group shadow-xl">
                        <SafeImage
                          src={item.img}
                          alt={item.title}
                          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                          containerClassName="w-full h-full"
                        />
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
  );
}

export default function SolutionsOverview() {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const update = () => setIsDesktop(window.innerWidth >= 1024);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return (
    <section id="solutions-overview" className="flex flex-col">
      {/* 5 Cards Solution Overview */}
      <div className="bg-white text-black py-10 sm:py-12 lg:py-14">
        <div className="max-w-7xl 2xl:max-w-[1536px] 3xl:max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6 sm:mb-8 max-w-3xl mx-auto space-y-2.5">
            <span className="flex justify-center items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-black/50">
              <Sparkles className="w-3.5 h-3.5" />
              EXPLORE OUR SOLUTIONS
            </span>
            <h2 className="font-bold tracking-tight text-[clamp(2rem,4.5vw,3rem)]">
              Choose the Right Experience for Your Space
            </h2>
            <p className="text-black/60 text-sm sm:text-base font-normal max-w-2xl mx-auto">
              Explore different ways to use projection, immersive visuals, AI and interactive technology to create experiences for your audience.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 xl:gap-5">
            {categories.map((cat) => (
              <TiltCard key={cat.id} cat={cat} isDesktop={isDesktop} />
            ))}
          </div>
        </div>
      </div>

      {/* Core Capabilities Section (Stacking Cards on Scroll) */}
      <div 
        id="core-capabilities" 
        className="bg-black text-white pt-16 sm:pt-20 lg:pt-24 pb-0 scroll-mt-20 relative"
      >
        <div className="max-w-7xl 2xl:max-w-[1536px] 3xl:max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="max-w-3xl mb-8 sm:mb-12 lg:mb-14 space-y-2">
            <div className="flex items-center gap-2 mb-2">
              <Sparkles className="w-3.5 h-3.5 text-white/70" />
              <span className="text-[10px] sm:text-xs font-mono font-semibold tracking-[0.2em] text-white/50 uppercase">
                CORE CAPABILITIES
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.1]">
              What We Can Create for Your Space
            </h2>
          </div>

          {/* Stacking Cards Runway */}
          <StackingCapabilities />

        </div>
      </div>
    </section>
  );
}