"use client";

import { useState, useRef, useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Link from "next/link";
import { Layers, Expand, Cpu, Gamepad2, ArrowRight, Sparkles } from "lucide-react";
import SafeImage from "@/components/SafeImage";

const solutionAreas = [
  {
    id: "interactive-projection",
    title: "Interactive Projection",
    icon: <Layers className="w-6 h-6" />,
    href: "/solutions/interactive-projection",
    img: "/images/interactive_floor_motion.jpg",
    video: "/interactive-space.mp4",
  },
  {
    id: "immersive-experiences",
    title: "Immersive Experiences",
    icon: <Expand className="w-6 h-6" />,
    href: "/solutions/immersive-environment",
    img: "/images/biosphere_ocean_gallery.jpg",
    video: "/immersive-environment-1.mp4",
  },
  {
    id: "ai-experiences",
    title: "AI Experiences",
    icon: <Cpu className="w-6 h-6" />,
    href: "/solutions/ai-experience",
    img: "/images/ai_receptionist_concierge.jpg",
    video: "/ai-receptionist-showreel.mp4",
  },
  {
    id: "interactive-engagement",
    title: "Interactive Engagement",
    icon: <Gamepad2 className="w-6 h-6" />,
    href: "/solutions/interactive-engagement",
    img: "/images/entertainment_motion_arena.jpg",
    video: "/smart-engagement.mp4",
  },
];

function TiltCard({ cat, isDesktop }: { cat: typeof solutionAreas[0]; isDesktop: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth springs for a fluid, floating feel
  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 40 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 40 });

  // Map mouse coordinates to rotation
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  // Map mouse coordinates to glare position
  const glareX = useTransform(mouseXSpring, [-0.5, 0.5], ["100%", "0%"]);
  const glareY = useTransform(mouseYSpring, [-0.5, 0.5], ["100%", "0%"]);

  const videoRef = useRef<HTMLVideoElement>(null);

  // On mobile touch devices, automatically play video when card is in view
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
      className="w-full h-[360px] sm:h-[380px] lg:h-[400px] xl:h-[430px] cursor-pointer group"
    >
      <Link href={cat.href} className="block w-full h-full outline-none">
        <motion.div
          style={{
            rotateX: isDesktop ? rotateX : 0,
            rotateY: isDesktop ? rotateY : 0,
            transformStyle: "preserve-3d",
          }}
          className="relative w-full h-full rounded-[2rem] bg-black border border-white/10 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.3)] transition-all duration-300"
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
                poster={cat.img}
                loop
                muted
                playsInline
                preload="none"
                className="w-full h-full object-cover opacity-85 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105"
              />
            ) : (
              <SafeImage
                src={cat.img}
                alt={cat.title}
                className="w-full h-full object-cover opacity-85 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105"
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
          
          {/* Floating Content Layer (Names only, no descriptions as requested) */}
          <div 
            className="absolute inset-0 p-6 lg:p-5 xl:p-6 flex flex-col justify-between pointer-events-none"
            style={{ transform: "translateZ(50px)" }}
          >
            <div className="flex justify-between items-start">
              <div className="w-10 h-10 xl:w-11 xl:h-11 rounded-xl xl:rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center text-white border border-white/20 shadow-xl">
                {cat.icon}
              </div>
              <div className="w-9 h-9 xl:w-10 xl:h-10 rounded-full bg-white text-black flex items-center justify-center opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-all duration-500 shadow-xl">
                <ArrowRight className="w-4 h-4 -rotate-45 group-hover:rotate-0 transition-transform duration-500" />
              </div>
            </div>

            <div style={{ transform: "translateZ(30px)" }}>
              <h3 className="text-lg sm:text-xl lg:text-base xl:text-xl font-bold text-white leading-tight drop-shadow-2xl">
                {cat.title}
              </h3>
            </div>
          </div>
        </motion.div>
      </Link>
    </motion.div>
  );
}

export default function WhatWeCreate() {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section id="what-we-create" className="py-14 sm:py-20 lg:py-24 bg-white text-black relative">
      <div className="max-w-7xl 2xl:max-w-[1536px] 3xl:max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 sm:mb-12">
          <div className="max-w-3xl space-y-3">
            <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold uppercase tracking-wide text-black/60">
              <Sparkles className="w-3.5 h-3.5 text-black/40" />
              <span>OUR SOLUTIONS</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-[1.1] text-black">
              Experiences Built Around Your Space
            </h2>

            <p className="text-sm sm:text-base text-black/70 font-normal leading-relaxed max-w-2xl">
              From interactive environments to AI-powered experiences and digital displays, we create solutions around the space, audience and experience you want to deliver.
            </p>
          </div>

          <div>
            <Link
              href="/solutions"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-black text-white text-xs sm:text-sm font-semibold tracking-wide hover:bg-neutral-800 transition-all shadow-md group cursor-pointer"
            >
              <span>Explore Solutions</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* 4 Solutions Tilt Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {solutionAreas.map((cat) => (
            <TiltCard key={cat.id} cat={cat} isDesktop={isDesktop} />
          ))}
        </div>

      </div>
    </section>
  );
}
