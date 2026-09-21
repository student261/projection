"use client";

import { motion, useScroll, useTransform, AnimatePresence, useSpring, useMotionValue } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Sparkles, MapPin, ExternalLink, Filter, ArrowRight, Globe, X } from "lucide-react";
import { useRef, useState, useEffect, useCallback } from "react";
import SafeImage from "@/components/SafeImage";

const CATEGORIES = [
  { id: "all", label: "ALL CREATIONS" },
  { id: "museums", label: "MUSEUMS & CULTURE" },
  { id: "public-spaces", label: "PUBLIC SPACES" },
  { id: "education", label: "EDUCATION" },
  { id: "corporate", label: "CORPORATE" },
  { id: "healthcare", label: "HEALTHCARE" },
  { id: "retail", label: "RETAIL" },
];

const projects = [
  {
    id: "aura-cathedral", title: "Sanctuary of Light Cathedral", category: "Architectural 360° Mapping",
    location: "Historic Grand Cathedral", year: "2026",
    desc: "An architectural light and sound transformation turning historic stone sanctuaries into immersive digital canvases that respond to ambient acoustics.",
    img: "/images/cathedral_projection_mapping.jpg",
    href: "/projects/aura-digital-cathedral", tag: "PROJECTION MAPPING", filterCategory: "museums", accent: "#8B5CF6",
  },
  {
    id: "horizon-glass", title: "Skyline Kinetic Glass Floor", category: "High-Altitude Interactive Floor",
    location: "High-Altitude Observation Atrium", year: "2025",
    desc: "An interactive observation floor that responds to footsteps with simulated structural glass fractures, dynamic cloud formations, and skyline narratives.",
    img: "/images/horizon_glass_floor.jpg",
    href: "/projects/skyline-observation-floor", tag: "INTERACTIVE FLOOR", filterCategory: "public-spaces", accent: "#06B6D4",
  },
  {
    id: "biosphere-ocean", title: "BioSphere Ocean Experience", category: "Interactive Museum Floor",
    location: "Oceanic Science Center", year: "2026",
    desc: "A 360-degree reactive ocean floor projection reacting dynamically to marine biodiversity interaction and visitor presence.",
    img: "/images/biosphere_ocean_gallery.jpg",
    href: "/projects/biosphere-ocean-experience", tag: "INTERACTIVE FLOOR", filterCategory: "museums", accent: "#3B82F6",
  },
  {
    id: "museum-exhibit", title: "Interactive Museum Exhibit", category: "Interactive Wall & Floor",
    location: "Global Science Museum", year: "2026",
    desc: "A sprawling interactive museum exhibit combining projection mapping with motion-responsive floors to teach physics and history.",
    img: "/images/museum_interactive_exhibit.jpg",
    href: "/projects/interactive-museum-exhibit", tag: "INTERACTIVE WALL", filterCategory: "education", accent: "#3B82F6",
  },
  {
    id: "corporate-lobby", title: "Corporate Lobby Installation", category: "Generative AI Wall",
    location: "Global Technology Campus", year: "2025",
    desc: "A massive interactive data visualization wall reacting to foot traffic and employee badges in real-time.",
    img: "/images/corporate_lobby_wall.jpg",
    href: "/projects/corporate-lobby-installation", tag: "PROJECTION MAPPING", filterCategory: "corporate", accent: "#10B981",
  },
  {
    id: "pediatric-floor", title: "Pediatric Hospital Floor", category: "Therapeutic Motion Floor",
    location: "Pediatric Medical Center", year: "2026",
    desc: "Calming interactive river environments projected onto hospital floors to reduce anxiety in pediatric patients.",
    img: "/images/hospital_interactive_corridor.jpg",
    href: "/projects/pediatric-hospital-floor", tag: "INTERACTIVE FLOOR", filterCategory: "healthcare", accent: "#06B6D4",
  },
  {
    id: "retail-flagship", title: "Flagship Store Activation", category: "Interactive Floor & Wall",
    location: "Luxury Retail Promenade", year: "2025",
    desc: "Immersive retail brand activation where footsteps trigger floral blooming patterns and product highlights.",
    img: "/images/retail_interactive_showcase.jpg",
    href: "/projects/flagship-store-activation", tag: "MOTION SENSORS", filterCategory: "retail", accent: "#EC4899",
  },
  {
    id: "stem-lab", title: "Immersive STEM Lab", category: "Interactive Tables & Wall",
    location: "Metropolitan STEM Academy", year: "2026",
    desc: "An educational ecosystem utilizing digital sandboxes and interactive geometry walls for collaborative learning.",
    img: "/images/education_interactive_floor.jpg",
    href: "/projects/immersive-stem-lab", tag: "INTERACTIVE WALL", filterCategory: "education", accent: "#F59E0B",
  },
  {
    id: "cyberpunk-lounge", title: "Neo-Tokyo Retail Pop-Up", category: "Gamified Touch & Gesture",
    location: "Commercial Entertainment District", year: "2025",
    desc: "A multi-touch interactive projection wall built for luxury retail fashion pop-ups.",
    img: "/images/sneaker_customization_table.jpg",
    href: "/projects/neo-tokyo-retail-popup", tag: "TOUCH & GESTURE", filterCategory: "retail", accent: "#EF4444",
  },
  {
    id: "ai-avatar-mirror", title: "AI Receptionist Avatar", category: "Computer Vision & AI Avatars",
    location: "International Financial District", year: "2026",
    desc: "Real-time conversational AI avatar embedded into architectural mirrors for seamless corporate guest management.",
    img: "/images/ai_receptionist_concierge.jpg",
    href: "/projects/ai-receptionist-avatar", tag: "AI AVATARS", filterCategory: "corporate", accent: "#F97316",
  },
  {
    id: "sensory-therapy", title: "Sensory Interactive Therapy Room", category: "Therapeutic Motion Projection",
    location: "Specialized Pediatric Care Center", year: "2025",
    desc: "Therapeutic motion projection room engineered for pediatric rehabilitation and sensory decompression.",
    img: "/images/healthcare_sensory_room.jpg",
    href: "/projects/sensory-therapy-room", tag: "PROJECTION MAPPING", filterCategory: "healthcare", accent: "#14B8A6",
  },
];

type Project = (typeof projects)[0];

// ─── Full-screen 3D Immersive Overlay ────────────────────────────────────────
function ImmersiveOverlay({ project, onClose }: { project: Project; onClose: () => void }) {
  const router = useRouter();
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
  };

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
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-[1001] flex items-center justify-center p-4 sm:p-8 md:p-12 pointer-events-auto"
    >
      <div 
        className="absolute inset-0 bg-black/85 backdrop-blur-md cursor-pointer" 
        onClick={(e) => { 
          e.stopPropagation(); 
          onClose(); 
        }}
      />

      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: `radial-gradient(ellipse 65% 55% at 50% 50%, ${project.accent}20, transparent 70%)` }}
      />

      <button
        type="button"
        onClick={(e) => { 
          e.stopPropagation(); 
          onClose(); 
        }}
        className="absolute top-6 right-6 z-[1002] w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all backdrop-blur-md shadow-lg cursor-pointer"
        aria-label="Close Case Study"
      >
        <X className="w-5 h-5" />
      </button>

      <div className="absolute top-6 left-6 z-[1002] text-xs text-white/50 uppercase tracking-widest pointer-events-none">
        {projects.indexOf(project) + 1 < 10 ? `0${projects.indexOf(project) + 1}` : projects.indexOf(project) + 1} / {projects.length < 10 ? `0${projects.length}` : projects.length}
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96, y: 20 }}
        transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onClick={(e) => e.stopPropagation()}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d", perspective: 2000 }}
        className="relative w-full max-w-5xl h-full max-h-[85vh] sm:max-h-[70vh] rounded-[2rem] overflow-hidden cursor-default shadow-2xl border border-white/15 bg-black pointer-events-auto z-10"
      >
        <motion.div className="absolute inset-[-5%] w-[110%] h-[110%]" style={{ x: imgX, y: imgY }}>
          <SafeImage
            src={project.img}
            alt={project.title}
            className="w-full h-full object-cover"
            containerClassName="w-full h-full"
          />
        </motion.div>

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/20 z-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent z-10" />

        <motion.div
          className="absolute left-0 right-0 h-px z-20 pointer-events-none opacity-50"
          style={{ background: `linear-gradient(90deg, transparent 0%, ${project.accent}, transparent 100%)` }}
          animate={{ top: ["5%", "95%", "5%"] }}
          transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
        />

        <div className="absolute top-8 left-1/2 -translate-x-1/2 z-30">
          <span className="px-4 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-widest backdrop-blur-md border flex items-center gap-2"
            style={{ background: `${project.accent}22`, borderColor: `${project.accent}66`, color: project.accent }}>
            <Sparkles className="w-3 h-3" />
            [{project.tag}] • {project.year}
          </span>
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-8 lg:p-16 z-30" style={{ transform: "translateZ(30px)" }}>
          <div className="flex items-center gap-2 text-xs mb-4" style={{ color: project.accent }}>
            <Globe className="w-3.5 h-3.5" />
            <span className="text-white/80">{project.location}</span>
            <span className="text-white/40 mx-2">—</span>
            <span className="text-white/80">{project.category}</span>
          </div>

          <h3 className="text-white leading-[1.05] mb-5 drop-shadow-lg max-w-3xl text-3xl sm:text-4xl lg:text-5xl font-black">
            {project.title}
          </h3>

          <p className="text-sm sm:text-base text-white/70 font-light leading-relaxed max-w-2xl mb-8 line-clamp-3">
            {project.desc}
          </p>

          <div className="flex items-center gap-4 flex-wrap relative z-50 pointer-events-auto">
            <Link 
              href={project.href}
              onClick={(e) => {
                e.stopPropagation();
                router.push(project.href);
              }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-3.5 rounded-full text-sm font-bold uppercase tracking-wider text-black bg-white transition-all hover:scale-105 active:scale-95 shadow-xl cursor-pointer pointer-events-auto"
            >
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
  project, idx, totalCount, isActive, isDesktop, onClick,
}: {
  project: Project; idx: number; totalCount: number; isActive: boolean; isDesktop: boolean; onClick: () => void;
}) {
  return (
    <motion.div
      layout
      animate={{
        scale: isDesktop ? (isActive ? 1.06 : 0.92) : 1,
        opacity: isDesktop ? (isActive ? 1 : 0.7) : 1,
      }}
      transition={{ type: "spring", stiffness: 280, damping: 26 }}
      className="group relative w-full sm:w-[48vw] md:w-[36vw] lg:w-[28vw] 2xl:w-[22vw] 3xl:w-[18vw] h-[45vh] sm:h-[50vh] min-h-[300px] max-h-[500px] rounded-3xl overflow-hidden bg-black lg:flex-shrink-0 cursor-pointer shadow-2xl"
      onClick={onClick}
      style={{
        boxShadow: (isDesktop ? isActive : true)
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
        <h3 className="text-white text-lg font-bold">{project.title}</h3>
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
  const [activeIdx, setActiveIdx] = useState(-1);
  const [overlayProject, setOverlayProject] = useState<Project | null>(null);
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const hasStartedRef = useRef(false);
  const manuallyClosedIdxRef = useRef(-1);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

  const filteredProjects = activeCategory === "all"
    ? projects
    : projects.filter((p) => p.filterCategory === activeCategory);

  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const update = () => setIsDesktop(window.innerWidth >= 1024);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  useEffect(() => {
    return scrollYProgress.on("change", (v) => {
      if (v <= 0.02 || v >= 0.98) {
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

      if (v > 0.02) hasStartedRef.current = true;

      const idx = Math.round(v * (filteredProjects.length - 1));
      const clamped = Math.max(0, Math.min(filteredProjects.length - 1, idx));
      
      setActiveIdx((prevIdx) => {
        if (prevIdx !== clamped) {
          manuallyClosedIdxRef.current = -1;
        }
        return clamped;
      });

      if (debounceRef.current) clearTimeout(debounceRef.current);
      debounceRef.current = setTimeout(() => {
        const current = scrollYProgress.get();
        if (window.innerWidth >= 1024 && current > 0.02 && current < 0.98 && manuallyClosedIdxRef.current !== clamped) {
          setOverlayProject(filteredProjects[clamped]);
        }
      }, 450);
    });
  }, [scrollYProgress, filteredProjects]);

  useEffect(() => {
    setOverlayProject(null);
    setActiveIdx(-1);
    hasStartedRef.current = false;
    manuallyClosedIdxRef.current = -1;
  }, [activeCategory]);

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
    if (debounceRef.current) clearTimeout(debounceRef.current);
  }, [activeIdx]);

  return (
    <>
      <AnimatePresence mode="wait">
        {overlayProject && (
          <ImmersiveOverlay key={overlayProject.id} project={overlayProject} onClose={closeOverlay} />
        )}
      </AnimatePresence>

      <section ref={targetRef} className="relative lg:h-[450vh] bg-gray-50 text-black py-10 lg:py-0">
        <div className="lg:sticky lg:top-0 flex flex-col lg:flex-row lg:h-[100dvh] items-center lg:overflow-hidden">
          <div className="w-full flex flex-col justify-between h-full py-4 sm:py-6 lg:py-6">

            {/* Header */}
            <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 space-y-4 z-20">
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2 text-[10px] sm:text-[11px] font-mono font-semibold uppercase tracking-[0.2em] text-black mb-2">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>INTERACTIVE GALLERY • {filteredProjects.length} CREATIONS</span>
                  </div>
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-[1.1] text-black">
                    Featured Installations
                  </h2>
                </div>
                <div className="hidden md:flex items-center gap-2 text-xs text-black/50 font-medium">
                  <Filter className="w-3.5 h-3.5 text-black" />
                  <span>Scroll to browse — active card expands automatically</span>
                </div>
              </div>

              <div className="flex flex-nowrap lg:flex-wrap items-center gap-2 pt-1 overflow-x-auto scrollbar-hide pb-2 -mb-2">
                {CATEGORIES.map((cat) => {
                  const isActive = activeCategory === cat.id;
                  return (
                    <button key={cat.id} onClick={() => setActiveCategory(cat.id)}
                      className={`shrink-0 px-4 py-2 rounded-full text-[10px] sm:text-[11px] font-mono font-semibold uppercase tracking-[0.2em] transition-all duration-300 cursor-pointer ${
                        isActive ? "bg-black text-white shadow-md" : "bg-white hover:bg-gray-100 text-black/70 border border-black/10"
                      }`}>
                      {cat.label}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Track */}
            <div className="w-full my-auto lg:py-2">
              <motion.div
                ref={trackRef}
                style={{ x: isDesktop ? x : 0 }}
                className="flex flex-col lg:flex-row gap-8 sm:gap-6 lg:gap-8 px-4 sm:px-6 lg:px-10 w-full lg:w-max items-center will-change-transform transform-gpu mt-4 lg:mt-0"
              >
                <AnimatePresence mode="popLayout">
                  {filteredProjects.map((project, idx) => (
                    <ProjectCard
                      key={project.id}
                      project={project}
                      idx={idx}
                      totalCount={filteredProjects.length}
                      isActive={idx === activeIdx}
                      isDesktop={isDesktop}
                      onClick={() => setOverlayProject(project)}
                    />
                  ))}
                </AnimatePresence>
              </motion.div>
            </div>

            {/* Progress bar (Desktop Only) */}
            <div className="hidden lg:block max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 z-20">
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
