"use client";

import { motion, useScroll, useTransform, AnimatePresence, useSpring, useMotionValue } from "framer-motion";
import Link from "next/link";
import { Sparkles, MapPin, ExternalLink, Filter, ArrowRight, Globe, X } from "lucide-react";
import { useRef, useState, useEffect, useCallback } from "react";
import SafeImage from "@/components/SafeImage";

const CATEGORIES = [
  { id: "all", label: "ALL CREATIONS" },
  { id: "education", label: "EDUCATION" },
  { id: "corporate", label: "CORPORATE" },
  { id: "healthcare", label: "HEALTHCARE" },
  { id: "retail", label: "RETAIL" },
];

const projects = [
  {
    id: "museum-exhibit", title: "Interactive Museum Exhibit", category: "Interactive Wall & Floor",
    location: "Global Science Museum", year: "2026",
    desc: "A sprawling interactive museum exhibit combining projection mapping with motion-responsive floors to teach physics and history.",
    img: "https://momentfactory.com/cdn/shop/files/Moment_Factory_Custom_Experience_Cultural___Educational_NGEC_Geoverse_JE-094_1_-WS.jpg",
    href: "/projects/interactive-museum-exhibit", tag: "INTERACTIVE WALL", filterCategory: "education", accent: "#3B82F6",
  },
  {
    id: "corporate-lobby", title: "Corporate Lobby Installation", category: "Generative AI Wall",
    location: "Tech Headquarters, Seattle", year: "2025",
    desc: "A massive interactive data visualization wall reacting to foot traffic and employee badges in real-time.",
    img: "https://momentfactory.com/cdn/shop/files/6D9A8671-WS.jpg",
    href: "/projects/corporate-lobby-installation", tag: "PROJECTION MAPPING", filterCategory: "corporate", accent: "#10B981",
  },
  {
    id: "pediatric-floor", title: "Pediatric Hospital Floor", category: "Therapeutic Motion Floor",
    location: "Zurich Medical Center", year: "2026",
    desc: "Calming interactive river environments projected onto hospital floors to reduce anxiety in pediatric patients.",
    img: "https://momentfactory.com/cdn/shop/files/Moment_Factory_Originals_Augmented_Games_IKEA_263-WS.jpg",
    href: "/projects/pediatric-hospital-floor", tag: "INTERACTIVE FLOOR", filterCategory: "healthcare", accent: "#06B6D4",
  },
  {
    id: "retail-flagship", title: "Flagship Store Activation", category: "Interactive Floor & Wall",
    location: "Fifth Avenue, NY", year: "2025",
    desc: "Immersive retail brand activation where footsteps trigger floral blooming patterns and product highlights.",
    img: "https://momentfactory.com/cdn/shop/files/Moment_Factory_Holt_Renfrew_2_2a04207c-cf51-4e71-92ca-cbe58683722a.jpg",
    href: "/projects/flagship-store-activation", tag: "MOTION SENSORS", filterCategory: "retail", accent: "#EC4899",
  },
  {
    id: "stem-lab", title: "Immersive STEM Lab", category: "Interactive Tables & Wall",
    location: "Boston Prep Academy", year: "2026",
    desc: "An educational ecosystem utilizing digital sandboxes and interactive geometry walls for collaborative learning.",
    img: "https://momentfactory.com/cdn/shop/files/Moment_Factory_Originals_Augmented_Games_Space_Center_Houston_Lunar_Obstacle_Run_3-WS.png",
    href: "/projects/immersive-stem-lab", tag: "INTERACTIVE WALL", filterCategory: "education", accent: "#F59E0B",
  },
  {
    id: "cyberpunk-lounge", title: "Neo-Tokyo Retail Pop-Up", category: "Gamified Touch & Gesture",
    location: "Shinjuku District, Tokyo", year: "2025",
    desc: "A multi-touch interactive projection wall built for luxury retail fashion pop-ups.",
    img: "https://momentfactory.com/cdn/shop/files/Moment_Factory_Public_Spaces_Shinjuku_Station_IMG_0457-Modifier-WS.jpg",
    href: "/projects/neo-tokyo-retail-popup", tag: "TOUCH & GESTURE", filterCategory: "retail", accent: "#EF4444",
  },
  {
    id: "ai-avatar-mirror", title: "AI Receptionist Avatar", category: "Computer Vision & AI Avatars",
    location: "London Financial District", year: "2026",
    desc: "Real-time conversational AI avatar embedded into architectural mirrors for seamless corporate guest management.",
    img: "https://momentfactory.com/cdn/shop/files/Moment_Factory_Custom_Experiences_Sports_Entertainment_Real_Madrid_Games_087-WS_46fdefce-745c-4f6c-91a6-97cbf378a1d3.jpg",
    href: "/projects/ai-receptionist-avatar", tag: "AI AVATARS", filterCategory: "corporate", accent: "#F97316",
  },
  {
    id: "sensory-therapy", title: "Sensory Interactive Therapy Room", category: "Therapeutic Motion Projection",
    location: "Berlin Children's Clinic", year: "2025",
    desc: "Therapeutic motion projection room engineered for pediatric rehabilitation and sensory decompression.",
    img: "https://momentfactory.com/cdn/shop/files/Moment_Factory_Customs_Cultural_Educational_Light_Cycles_Adelaide_10-WS.jpg",
    href: "/projects/sensory-therapy-room", tag: "PROJECTION MAPPING", filterCategory: "healthcare", accent: "#14B8A6",
  },
];

type Project = (typeof projects)[0];

// ─── Full-screen 3D Immersive Overlay ────────────────────────────────────────
function ImmersiveOverlay({ project, onClose }: { project: Project; onClose: () => void }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [10, -10]), { stiffness: 100, damping: 18 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-12, 12]), { stiffness: 100, damping: 18 });
  const imgX = useSpring(useTransform(mouseX, [-0.5, 0.5], [-20, 20]), { stiffness: 70, damping: 15 });
  const imgY = useSpring(useTransform(mouseY, [-0.5, 0.5], [-14, 14]), { stiffness: 70, damping: 15 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    mouseX.set((e.clientX - r.left) / r.width - 0.5);
    mouseY.set((e.clientY - r.top) / r.height - 0.5);
  };
  const handleMouseLeave = () => { 
    mouseX.set(0); 
    mouseY.set(0); 
    onClose(); 
  };

  // Close on Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  return (
    <motion.div
      key={project.id}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="fixed inset-0 z-[1001] pointer-events-none flex items-center justify-center p-4 sm:p-8 md:p-12"
    >
      {/* Full-bleed backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-md pointer-events-auto cursor-pointer" 
        onClick={(e) => { e.stopPropagation(); onClose(); }}
      />

      {/* Ambient radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: `radial-gradient(ellipse 65% 55% at 50% 50%, ${project.accent}20, transparent 70%)` }}
      />

      {/* Close button */}
      <button
        onClick={(e) => { e.stopPropagation(); onClose(); }}
        className="absolute top-6 right-6 z-[1002] w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all backdrop-blur-md shadow-lg"
      >
        <X className="w-5 h-5" />
      </button>

      {/* Card index label */}
      <div className="absolute top-6 left-6 z-[1002] text-xs text-white/50 uppercase tracking-widest pointer-events-none">
        {projects.indexOf(project) + 1 < 10 ? `0${projects.indexOf(project) + 1}` : projects.indexOf(project) + 1} / {projects.length < 10 ? `0${projects.length}` : projects.length}
      </div>

      {/* In-screen Modal Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96, y: 20 }}
        transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onClick={(e) => e.stopPropagation()}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d", perspective: 2000 }}
        className="relative w-full max-w-5xl h-full max-h-[70vh] rounded-[2rem] overflow-hidden cursor-default shadow-2xl border border-white/15 bg-black"
      >
        {/* Parallax background image */}
        <motion.div className="absolute inset-[-5%] w-[110%] h-[110%]" style={{ x: imgX, y: imgY }}>
          <SafeImage
            src={project.img}
            alt={project.title}
            className="w-full h-full object-cover"
            containerClassName="w-full h-full"
          />
        </motion.div>

        {/* Cinematic multi-layer gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/20 z-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent z-10" />

        {/* Scan line animation */}
        <motion.div
          className="absolute left-0 right-0 h-px z-20 pointer-events-none opacity-50"
          style={{ background: `linear-gradient(90deg, transparent 0%, ${project.accent}, transparent 100%)` }}
          animate={{ top: ["5%", "95%", "5%"] }}
          transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
        />

        {/* Tag + Year — top center */}
        <div className="absolute top-8 left-1/2 -translate-x-1/2 z-30">
          <span className="px-4 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-widest backdrop-blur-md border flex items-center gap-2"
            style={{ background: `${project.accent}22`, borderColor: `${project.accent}66`, color: project.accent }}>
            <Sparkles className="w-3 h-3" />
            [{project.tag}] • {project.year}
          </span>
        </div>

        {/* Bottom Content */}
        <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-12 lg:p-16 z-30" style={{ transform: "translateZ(30px)" }}>
          <div className="flex items-center gap-2 text-xs mb-4" style={{ color: project.accent }}>
            <Globe className="w-3.5 h-3.5" />
            <span className="text-white/80">{project.location}</span>
            <span className="text-white/40 mx-2">—</span>
            <span className="text-white/80">{project.category}</span>
          </div>

          <h3 className="text-white leading-[1.05] mb-5 drop-shadow-lg max-w-3xl">
            {project.title}
          </h3>

          <p className="text-sm sm:text-base text-white/70 font-light leading-relaxed max-w-2xl mb-8 line-clamp-3">
            {project.desc}
          </p>

          <div className="flex items-center gap-4 flex-wrap">
            <Link href={project.href}
              className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full text-sm font-bold uppercase tracking-wider text-black bg-white transition-all hover:scale-105 active:scale-95 shadow-xl">
              <span>Open Full Case Study</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

// ─── Small card in the horizontal track ──────────────────────────────────────
function ProjectCard({
  project, idx, totalCount, isActive, onClick,
}: {
  project: Project; idx: number; totalCount: number; isActive: boolean; onClick: () => void;
}) {
  return (
    <motion.div
      layout
      animate={{
        scale: isActive ? 1.06 : 0.92,
        opacity: isActive ? 1 : 0.7,
      }}
      transition={{ type: "spring", stiffness: 280, damping: 26 }}
      className="group relative w-[82vw] sm:w-[48vw] md:w-[36vw] lg:w-[28vw] h-[50vh] sm:h-[55vh] rounded-3xl overflow-hidden bg-black flex-shrink-0 cursor-pointer shadow-2xl"
      onClick={onClick}
      style={{
        boxShadow: isActive
          ? `0 30px 80px -15px ${project.accent}55, 0 0 0 2px ${project.accent}`
          : "0 15px 40px rgba(0,0,0,0.2)",
      }}
    >
      <SafeImage
        src={project.img}
        alt={project.title}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        containerClassName="w-full h-full absolute inset-0"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

      {/* Tag */}
      <div className="absolute top-4 left-4 z-10">
        <span className="px-3 py-1 rounded-full bg-black/80 backdrop-blur-md border border-white/15 text-[10px] font-bold uppercase tracking-widest flex items-center gap-1.5"
          style={{ color: project.accent }}>
          <Sparkles className="w-3 h-3" />
          [{project.tag}]
        </span>
      </div>

      {/* Counter */}
      <div className="absolute top-4 right-4 z-10">
        <span className="text-xs font-bold text-white/60 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/10">
          {String(idx + 1).padStart(2, "0")} / {String(totalCount).padStart(2, "0")}
        </span>
      </div>

      {/* Active indicator ring */}
      {isActive && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="absolute inset-0 z-20 rounded-3xl pointer-events-none"
          style={{ boxShadow: `inset 0 0 0 2px ${project.accent}, 0 0 60px -10px ${project.accent}88` }}
        />
      )}

      <div className="absolute bottom-0 left-0 right-0 p-6 z-10 space-y-2">
        <div className="flex items-center gap-1.5 text-[11px] text-white/70">
          <MapPin className="w-3.5 h-3.5" style={{ color: project.accent }} />
          <span>{project.location}</span>
        </div>
        <h3 className="text-white">{project.title}</h3>
        <p className="text-xs text-white/70 font-light leading-relaxed line-clamp-2">{project.desc}</p>
        <div className="pt-2 flex items-center gap-2 text-xs font-bold uppercase tracking-wider" style={{ color: project.accent }}>
          <span>Explore Case Study</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </div>
      </div>
    </motion.div>
  );
}

// ─── Main Component ────────────────────────────────────────────────────────
export default function HorizontalProjectsShowcase() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [overlayProject, setOverlayProject] = useState<Project | null>(null);

  const filteredProjects = activeCategory === "all"
    ? projects
    : projects.filter((p) => p.filterCategory === activeCategory);

  return (
    <>
      <AnimatePresence mode="wait">
        {overlayProject && (
          <ImmersiveOverlay key={overlayProject.id} project={overlayProject} onClose={() => setOverlayProject(null)} />
        )}
      </AnimatePresence>

      <section className="py-20 bg-gray-50 text-black border-t border-b border-black/10">
        <div className="max-w-[90rem] w-full mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          {/* Header & Categories */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-black mb-2">
                <Sparkles className="w-4 h-4" />
                <span>INTERACTIVE GALLERY • {filteredProjects.length} CREATIONS</span>
              </div>
              <h2 className="text-black text-4xl font-extrabold tracking-tight">
                Featured Installations
              </h2>
            </div>

            <div className="flex flex-wrap items-center gap-2 pb-2">
              <Filter className="w-4 h-4 text-black mr-2 hidden sm:block" />
              {CATEGORIES.map((cat) => {
                const isActive = activeCategory === cat.id;
                return (
                  <button key={cat.id} onClick={() => setActiveCategory(cat.id)}
                    className={`whitespace-nowrap px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all ${
                      isActive ? "bg-black text-white" : "bg-white text-black/60 border border-black/10 hover:border-black/30"
                    }`}>
                    {cat.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Visual Grid */}
          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, idx) => (
                <div key={project.id} className="w-full">
                  <ProjectCard
                    project={project}
                    idx={idx}
                    totalCount={filteredProjects.length}
                    isActive={false}
                    onClick={() => setOverlayProject(project)}
                  />
                </div>
              ))}
            </AnimatePresence>
          </motion.div>

        </div>
      </section>
    </>
  );
}
