"use client";

import { motion, useScroll, useTransform, AnimatePresence, useSpring, useMotionValue } from "framer-motion";
import Link from "next/link";
import { Sparkles, MapPin, ExternalLink, Filter, ArrowRight, Globe, X } from "lucide-react";
import { useRef, useState, useEffect, useCallback } from "react";
import SafeImage from "@/components/SafeImage";

const CATEGORIES = [
  { id: "all", label: "ALL CREATIONS" },
  { id: "360-immersive", label: "360° IMMERSIVE" },
  { id: "motion-tracking", label: "MOTION TRACKING" },
  { id: "ai-sensory", label: "AI & SENSORY" },
  { id: "outdoor-heritage", label: "HERITAGE & LIGHT" },
];

const projects = [
  {
    id: "aura-cathedral", title: "AURA Sanctuary Projection", category: "360° Heritage Mapping",
    location: "Paris / Montreal", year: "2026",
    desc: "Architectural projection mapping masterpiece transforming historic stone sanctuaries with light & spatial audio.",
    img: "https://images.unsplash.com/photo-1518998053901-5348d3961a04?auto=format&fit=crop&w=1600&q=80&fm=webp",
    href: "/projects/aura-digital-cathedral", tag: "360° IMMERSIVE", filterCategory: "360-immersive", accent: "#000000",
  },
  {
    id: "edge-skyline", title: "Horizon Glass Motion Floor", category: "Interactive Floor & Motion",
    location: "Manhattan, New York", year: "2025",
    desc: "An interactive high-altitude observation floor responding to visitor footsteps 1,100 feet in the sky.",
    img: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1600&q=80&fm=webp",
    href: "/projects/edge-nyc-horizon-portal", tag: "MOTION TRACKING", filterCategory: "motion-tracking", accent: "#3B82F6",
  },
  {
    id: "ocean-wonders", title: "BioSphere Ocean Experience", category: "Interactive Museum Floor",
    location: "Global Ocean Pavilion", year: "2026",
    desc: "A 360-degree reactive ocean floor projection reacting dynamically to marine biodiversity interaction.",
    img: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1600&q=80&fm=webp",
    href: "/projects/biosphere-ocean-experience", tag: "AI VISION", filterCategory: "ai-sensory", accent: "#06B6D4",
  },
  {
    id: "lumina-nightwalk", title: "Lumina Enchanted Forest", category: "Outdoor Spatial Light Trail",
    location: "Kyoto Woodland Park", year: "2025",
    desc: "Nightwalk multimedia experience blending illuminated projection sculptures with natural woodland paths.",
    img: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=1600&q=80&fm=webp",
    href: "/projects/lumina-night-walk", tag: "OUTDOOR SPATIAL", filterCategory: "outdoor-heritage", accent: "#10B981",
  },
  {
    id: "ai-avatar-mirror", title: "Generative AI Mirror Room", category: "Computer Vision & AI Avatars",
    location: "Tokyo Tech Pavilion", year: "2026",
    desc: "Real-time AI avatar reflection chamber reacting to visitor movement, voice, and facial gestures.",
    img: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1600&q=80&fm=webp",
    href: "/projects/generative-ai-mirror-room", tag: "AI AVATARS", filterCategory: "ai-sensory", accent: "#F59E0B",
  },
  {
    id: "cyberpunk-lounge", title: "Neo-Shinjuku Interactive Wall", category: "Gamified Touch & Gesture",
    location: "Shinjuku District, Tokyo", year: "2025",
    desc: "A multi-touch interactive projection wall built for luxury nightlife and immersive brand pop-ups.",
    img: "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=1600&q=80&fm=webp",
    href: "/projects/neo-shinjuku-interactive-wall", tag: "TOUCH & GESTURE", filterCategory: "motion-tracking", accent: "#EF4444",
  },
  {
    id: "dome-observatory", title: "Celestial Dome Observatory", category: "360° Fulldome Projection",
    location: "Dubai Innovation Center", year: "2026",
    desc: "A giant architectural dome projection environment simulating interstellar journeys with spatial audio.",
    img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1600&q=80&fm=webp",
    href: "/projects/celestial-dome-observatory", tag: "FULLDOME", filterCategory: "360-immersive", accent: "#000000",
  },
  {
    id: "quantum-tunnel", title: "Quantum Prism Passage", category: "LED & Spatial Projection",
    location: "Singapore Science Pavilion", year: "2025",
    desc: "Walk-through sensory tunnel using synchronized projection and optical mirror reflection geometry.",
    img: "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?auto=format&fit=crop&w=1600&q=80&fm=webp",
    href: "/projects/quantum-prism-passage", tag: "SENSORY TUNNEL", filterCategory: "360-immersive", accent: "#EC4899",
  },
  {
    id: "chrono-echoes", title: "Chrono Echoes Artifact Wall", category: "Interactive Heritage Wall",
    location: "Paris Fine Arts Gallery", year: "2024",
    desc: "Historical artifact display coming to life when visitors approach, revealing hidden historical layers.",
    img: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1600&q=80&fm=webp",
    href: "/projects/chrono-echoes-artifact-wall", tag: "HERITAGE WALL", filterCategory: "outdoor-heritage", accent: "#F97316",
  },
  {
    id: "sensory-therapy", title: "Sensory Interactive Therapy Room", category: "Therapeutic Motion Projection",
    location: "Zurich Medical Center, Switzerland", year: "2025",
    desc: "Therapeutic motion projection room engineered for pediatric rehabilitation and sensory decompression.",
    img: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1600&q=80&fm=webp",
    href: "/projects/sensory-interactive-therapy-room", tag: "HEALTHCARE", filterCategory: "ai-sensory", accent: "#14B8A6",
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
            {project.tag} · {project.year}
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
          {project.tag}
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
  const targetRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeCategory, setActiveCategory] = useState("all");
  const [scrollRange, setScrollRange] = useState(0);
  const [activeIdx, setActiveIdx] = useState(-1); // -1 = not yet scrolled in
  const [overlayProject, setOverlayProject] = useState<Project | null>(null);
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const hasStartedRef = useRef(false); // don't auto-open before user scrolls
  const manuallyClosedIdxRef = useRef(-1); // track which card was manually closed

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

  const filteredProjects = activeCategory === "all"
    ? projects
    : projects.filter((p) => p.filterCategory === activeCategory);

  // Derive active index from scroll + auto-open overlay with debounce
  useEffect(() => {
    return scrollYProgress.on("change", (v) => {
      // ── Exit zone: user scrolled past the section ─────────────────────
      if (v <= 0.02 || v >= 0.98) {
        // Cancel any pending debounce immediately
        if (debounceRef.current) {
          clearTimeout(debounceRef.current);
          debounceRef.current = null;
        }
        setOverlayProject(null);
        if (v <= 0.02) {
          setActiveIdx(-1);
          hasStartedRef.current = false;
        }
        return;
      }

      // ── Active zone ────────────────────────────────────────────────────
      if (v > 0.02) hasStartedRef.current = true;

      const idx = Math.round(v * (filteredProjects.length - 1));
      const clamped = Math.max(0, Math.min(filteredProjects.length - 1, idx));
      
      setActiveIdx((prevIdx) => {
        if (prevIdx !== clamped) {
          manuallyClosedIdxRef.current = -1; // Reset block when moving to a new card
        }
        return clamped;
      });

      // Debounce overlay open so it doesn't flash between cards
      if (debounceRef.current) clearTimeout(debounceRef.current);
      debounceRef.current = setTimeout(() => {
        // Double-check we're still inside the section before opening
        const current = scrollYProgress.get();
        if (current > 0.02 && current < 0.98 && manuallyClosedIdxRef.current !== clamped) {
          setOverlayProject(filteredProjects[clamped]);
        }
      }, 380);
    });
  }, [scrollYProgress, filteredProjects]);

  // Reset when category changes
  useEffect(() => {
    setOverlayProject(null);
    setActiveIdx(-1);
    hasStartedRef.current = false;
    manuallyClosedIdxRef.current = -1;
  }, [activeCategory]);

  // Measure track width
  useEffect(() => {
    const update = () => {
      if (trackRef.current) {
        setScrollRange(Math.max(0, trackRef.current.scrollWidth - window.innerWidth + 64));
      }
    };
    const t = setTimeout(update, 120);
    window.addEventListener("resize", update);
    return () => { clearTimeout(t); window.removeEventListener("resize", update); };
  }, [filteredProjects]);

  const x = useTransform(scrollYProgress, [0, 1], [0, -scrollRange]);

  const closeOverlay = useCallback(() => {
    setOverlayProject(null);
    manuallyClosedIdxRef.current = activeIdx;
    // Don't re-open immediately after manual close
    if (debounceRef.current) clearTimeout(debounceRef.current);
  }, [activeIdx]);

  return (
    <>
      <AnimatePresence mode="wait">
        {overlayProject && (
          <ImmersiveOverlay key={overlayProject.id} project={overlayProject} onClose={closeOverlay} />
        )}
      </AnimatePresence>

      <section ref={targetRef} className="relative h-[450vh] bg-gray-50 text-black border-t border-b border-black/10">
        <div className="sticky top-0 flex h-screen items-center overflow-hidden">
          <div className="w-full flex flex-col justify-between h-full py-6 sm:py-10">

            {/* Header */}
            <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 space-y-4 z-20">
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-black mb-2">
                    <Sparkles className="w-4 h-4" />
                    <span>INTERACTIVE GALLERY • {filteredProjects.length} CREATIONS</span>
                  </div>
                  <h2 className="text-black">
                    Featured Installations
                  </h2>
                </div>
                <div className="hidden md:flex items-center gap-2 text-xs text-black/50 font-bold">
                  <Filter className="w-3.5 h-3.5 text-black" />
                  <span>Scroll to browse — active card expands automatically</span>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-black/10">
                {CATEGORIES.map((cat) => {
                  const isActive = activeCategory === cat.id;
                  return (
                    <button key={cat.id} onClick={() => setActiveCategory(cat.id)}
                      className={`px-4 py-2 rounded-full text-[11px]  font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                        isActive ? "bg-black text-white shadow-md" : "bg-white hover:bg-gray-100 text-black/70 border border-black/10"
                      }`}>
                      {cat.label}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Track */}
            <div className="w-full overflow-hidden my-auto py-6">
              <motion.div
                ref={trackRef}
                style={{ x }}
                className="flex gap-8 px-6 sm:px-10 w-max items-center"
              >
                <AnimatePresence mode="popLayout">
                  {filteredProjects.map((project, idx) => (
                    <ProjectCard
                      key={project.id}
                      project={project}
                      idx={idx}
                      totalCount={filteredProjects.length}
                      isActive={idx === activeIdx}
                      onClick={() => setOverlayProject(project)}
                    />
                  ))}
                </AnimatePresence>
              </motion.div>
            </div>

            {/* Progress bar */}
            <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 z-20">
              <div className="flex items-center gap-4">
                <span className="text-xs text-black/40 font-bold w-8">
                  {String(activeIdx + 1).padStart(2, "0")}
                </span>
                <div className="flex-1 bg-black/10 h-1.5 rounded-full overflow-hidden">
                  <motion.div
                    style={{ scaleX: scrollYProgress }}
                    className="h-full bg-gradient-to-r from-[#000000] to-[#C084FC] origin-left"
                  />
                </div>
                <span className="text-xs text-black/40 font-bold w-8 text-right">
                  {String(filteredProjects.length).padStart(2, "0")}
                </span>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
