"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import SafeImage from "@/components/SafeImage";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight, Layers, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface RelatedProject {
  name: string;
  href: string;
}

interface IndustryItem {
  id: string;
  num: string;
  title: string;
  slug: string;
  badge: string;
  problemSolved: string;
  customerGain: string;
  keyMetric: string;
  img: string;
  relatedProjects: RelatedProject[];
}

const CATEGORIES = [
  { id: "all", label: "All Industries" },
  { id: "education", label: "Education" },
  { id: "museums", label: "Museums & Culture" },
  { id: "retail", label: "Retail & Showrooms" },
  { id: "entertainment", label: "Entertainment" },
  { id: "corporate", label: "Corporate" },
  { id: "hospitality", label: "Hospitality" },
  { id: "public-spaces", label: "Public Spaces" },
  { id: "healthcare", label: "Healthcare" },
];

const industriesData: IndustryItem[] = [
  {
    id: "education",
    num: "01",
    title: "Education & Learning Spaces",
    slug: "education",
    badge: "Classrooms • STEM Labs • Libraries",
    problemSolved: "Replaces passive disengagement and sedentary screen time with motion-reactive learning.",
    customerGain: "Substantially improves STEM concept retention and drives active student participation across all grade levels.",
    keyMetric: "Elevated STEM Retention",
    img: "/images/industry_education_hero.jpg",
    relatedProjects: [
      { name: "Immersive STEM Lab", href: "/projects/immersive-stem-lab" },
      { name: "Interactive Museum Exhibit", href: "/projects/interactive-museum-exhibit" },
      { name: "Kinetic Active Arena", href: "/projects/arcade-active-arena" }
    ],
  },
  {
    id: "museums",
    num: "02",
    title: "Museums & Cultural Venues",
    slug: "museums-culture",
    badge: "Exhibits • Archives • Immersive Halls",
    problemSolved: "Overcomes delicate artifact touch restrictions with non-invasive touchless micro-projection.",
    customerGain: "Substantially extends visitor dwell time with complete heritage preservation compliance and exceptional visitor review ratings.",
    keyMetric: "Extended Dwell Time",
    img: "/images/industry_museums_hero.jpg",
    relatedProjects: [
      { name: "Sanctuary of Light Cathedral", href: "/projects/aura-digital-cathedral" },
      { name: "BioSphere Ocean Experience", href: "/projects/biosphere-ocean-experience" },
      { name: "Chrono Echoes Artifact Wall", href: "/projects/chrono-echoes-artifact-wall" }
    ],
  },
  {
    id: "retail",
    num: "03",
    title: "Retail & Flagship Showrooms",
    slug: "retail-showrooms",
    badge: "Storefronts • Pop-Ups • Flagships",
    problemSolved: "Solves high-street foot traffic drop-offs and brief store browsing sessions.",
    customerGain: "Significantly boosts store walk-ins and extends shopper dwell time with interactive lift-and-learn discovery.",
    keyMetric: "Increased Foot Traffic",
    img: "/images/industry_retail_hero.jpg",
    relatedProjects: [
      { name: "Neo-Shinjuku Interactive Wall", href: "/projects/neo-shinjuku-interactive-wall" },
      { name: "Flagship Store Activation", href: "/projects/flagship-store-activation" },
      { name: "Neo-Tokyo Retail Pop-Up", href: "/projects/neo-tokyo-retail-popup" }
    ],
  },
  {
    id: "hospitality",
    num: "04",
    title: "Hospitality & Resorts",
    slug: "hospitality",
    badge: "Hotels • Resorts • Atriums & Lounges",
    problemSolved: "Eliminates sterile hotel lobbies and expensive physical banquet decorations.",
    customerGain: "Dramatically extends lobby dwell, boosts premium event bookings, and sparks organic viral social media shares.",
    keyMetric: "Substantial Dwell Lift",
    img: "/images/industry_hospitality_hero.jpg",
    relatedProjects: [
      { name: "Skyline Kinetic Glass Floor", href: "/projects/skyline-observation-floor" },
      { name: "Multi-Sensory Table Projection", href: "/projects/multisensory-dining-experience" }
    ],
  },
  {
    id: "entertainment",
    num: "05",
    title: "Entertainment & Theme Venues",
    slug: "entertainment",
    badge: "Theme Parks • Arenas • FEC Centers",
    problemSolved: "Eliminates broken buttons, high maintenance costs, and wearable headset bottlenecks.",
    customerGain: "Powers mass-scale simultaneous active players with zero floor hardware wear and strong repeat visitor loyalty.",
    keyMetric: "50+ Multi-Users",
    img: "/images/industry_entertainment_hero.jpg",
    relatedProjects: [
      { name: "Enchanted Night Trail", href: "/projects/enchanted-night-trail" },
      { name: "Kinetic Active Arena", href: "/projects/arcade-active-arena" }
    ],
  },
  {
    id: "corporate",
    num: "06",
    title: "Corporate & Executive Spaces",
    slug: "corporate",
    badge: "Lobbies • Executive Centers • Tech Hubs",
    problemSolved: "Replaces static PowerPoint slides and sterile corporate lobbies with real-time digital architecture.",
    customerGain: "Accelerates enterprise deal cycles, elevates briefing impact, and greets VIPs with fluid, instantaneous responsiveness.",
    keyMetric: "Real-Time Edge Response",
    img: "/images/industry_corporate_hero.jpg",
    relatedProjects: [
      { name: "Generative AI Mirror Room", href: "/projects/generative-ai-mirror-room" },
      { name: "Corporate Lobby Installation", href: "/projects/corporate-lobby-installation" },
      { name: "AI Receptionist Avatar", href: "/projects/ai-receptionist-avatar" }
    ],
  },
  {
    id: "public-spaces",
    num: "07",
    title: "Public Spaces & Transit Venues",
    slug: "public-spaces",
    badge: "Airports • Plazas • Transit Hubs",
    problemSolved: "Soothes traveler stress and activates massive blank concourses with durable, overhead-projected light.",
    customerGain: "Entertains massive daily pedestrian streams and substantially extends concession dwell time without impeding passenger flow.",
    keyMetric: "Extended Concourse Dwell",
    img: "/images/industry_public_spaces_hero.jpg",
    relatedProjects: [
      { name: "Skyline Kinetic Glass Floor", href: "/projects/skyline-observation-floor" },
      { name: "Quantum Prism Passage", href: "/projects/quantum-prism-passage" },
      { name: "Concourse Motion Interactive Floor", href: "/projects/concourse-interactive-floor" }
    ],
  },
  {
    id: "healthcare",
    num: "08",
    title: "Healthcare & Sensory Therapy",
    slug: "healthcare",
    badge: "Pediatrics • Sensory Rooms • Clinics",
    problemSolved: "Alleviates clinical stress and pediatric anxiety in waiting corridors and therapy spaces.",
    customerGain: "Proven anxiety reduction with completely contactless, easy-to-sanitize touchless motion floors.",
    keyMetric: "Measurable Stress Reduction",
    img: "/images/healthcare_sensory_room.jpg",
    relatedProjects: [
      { name: "Sensory Interactive Therapy Room", href: "/projects/sensory-interactive-therapy-room" },
      { name: "Pediatric Hospital Floor", href: "/projects/pediatric-hospital-floor" }
    ],
  },
];

export default function MasterIndustryContent() {
  const [selectedSector, setSelectedSector] = useState<IndustryItem | null>(null);
  const [activeCategory, setActiveCategory] = useState("all");
  const [isNavVisible, setIsNavVisible] = useState(true);
  const lastScrollY = useRef(0);

  // Scroll visibility for sticky category filter
  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;
          if (currentScrollY <= 20) {
            setIsNavVisible(true);
          } else if (currentScrollY > lastScrollY.current + 6) {
            setIsNavVisible(false);
          } else if (currentScrollY < lastScrollY.current - 6) {
            setIsNavVisible(true);
          }
          lastScrollY.current = currentScrollY;
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Modal navigation (Previous / Next)
  const handleModalPrev = useCallback(() => {
    if (!selectedSector) return;
    const currentIdx = industriesData.findIndex((i) => i.id === selectedSector.id);
    const prevIdx = currentIdx === 0 ? industriesData.length - 1 : currentIdx - 1;
    setSelectedSector(industriesData[prevIdx]);
  }, [selectedSector]);

  const handleModalNext = useCallback(() => {
    if (!selectedSector) return;
    const currentIdx = industriesData.findIndex((i) => i.id === selectedSector.id);
    const nextIdx = (currentIdx + 1) % industriesData.length;
    setSelectedSector(industriesData[nextIdx]);
  }, [selectedSector]);

  // Keyboard controls for modal (Escape to close, Left/Right to flip)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedSector(null);
      } else if (selectedSector) {
        if (e.key === "ArrowLeft") handleModalPrev();
        if (e.key === "ArrowRight") handleModalNext();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedSector, handleModalPrev, handleModalNext]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedSector) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedSector]);

  const filteredIndustries = activeCategory === "all"
    ? industriesData
    : industriesData.filter((item) => item.id === activeCategory);

  const scrollToGrid = () => {
    const el = document.getElementById("industry-matrix");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="w-full bg-white text-black">
      {/* Full-Screen Hero Section */}
      <section className="relative h-screen min-h-screen flex flex-col justify-between items-center overflow-hidden bg-black text-center pt-24 sm:pt-28 pb-8 px-4">
        <div className="absolute inset-0 z-0">
          <SafeImage 
            src="/images/cathedral_projection_mapping.jpg" 
            alt="Industry Solutions" 
            className="w-full h-full object-cover opacity-45 scale-105" 
            containerClassName="w-full h-full bg-black"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/40 to-black/95 pointer-events-none" />
        </div>
        
        <div className="my-auto relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
          <div className="flex items-center justify-center gap-2 text-[10px] sm:text-[11px] font-mono font-semibold uppercase tracking-[0.2em] text-white/60 mb-4">
            <Layers className="w-3.5 h-3.5 text-white/50" />
            <span>INDUSTRY SOLUTIONS ECOSYSTEM</span>
          </div>
          <h1 className="font-black text-white mb-4 sm:mb-6 tracking-tight leading-[1.08] drop-shadow-2xl max-w-4xl text-balance text-[clamp(1.85rem,5.5vw,4.5rem)]">
            Built for Every Industry. Designed for Every Experience.
          </h1>
          <p className="text-white/80 max-w-2xl mx-auto text-sm sm:text-base lg:text-lg font-light leading-relaxed mb-8 sm:mb-10">
            From active classrooms to immersive museums and retail flagship stores, our turnkey spatial projection architecture transforms commercial spaces.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto">
            <button
              onClick={scrollToGrid}
              className="inline-flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-wider px-7 py-3 sm:py-3.5 rounded-full bg-white text-black hover:bg-white/90 shadow-xl transition-all duration-300 active:scale-95 cursor-pointer w-full sm:w-auto"
            >
              Explore Industries
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-wider px-7 py-3 sm:py-3.5 rounded-full bg-white/10 text-white hover:bg-white/20 border border-white/20 backdrop-blur-md transition-all duration-300 active:scale-95 w-full sm:w-auto"
            >
              Start Your Project
            </Link>
          </div>
        </div>
      </section>

      {/* ── Interactive Sector Visual Gallery (ZERO Cards, ZERO Frames) ── */}
      <section id="industry-matrix" className="pt-16 sm:pt-20 lg:pt-24 pb-20 sm:pb-28 lg:pb-36 bg-white scroll-mt-16 sm:scroll-mt-20">
        <div className="max-w-7xl 2xl:max-w-[1536px] 3xl:max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Heading */}
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
            <span className="text-[10px] sm:text-[11px] font-mono font-bold uppercase tracking-[0.2em] text-black block mb-2">
              SECTOR ARCHITECTURE
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-black mb-3">
              Commercial Applications & Outcomes
            </h2>
            <p className="text-neutral-600 text-sm sm:text-base font-light">
              Select any commercial sector to inspect engineering challenges, verified customer gains, and deployed installations.
            </p>
          </div>
        </div>

        {/* Sticky Filter & Category Selector Bar */}
        <div className={`sticky z-40 bg-white/95 backdrop-blur-md border-y border-neutral-200/80 py-3 sm:py-4 shadow-sm mb-12 sm:mb-16 transition-all duration-300 ease-in-out ${isNavVisible ? "top-[72px]" : "top-0"}`}>
          <div className="max-w-7xl 2xl:max-w-[1536px] 3xl:max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto scrollbar-hide">
              <span className="text-[10px] font-mono uppercase tracking-wider text-black font-bold mr-2 shrink-0 hidden sm:inline-block">
                Filter:
              </span>
              {CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`text-xs px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-md transition-all duration-300 whitespace-nowrap cursor-pointer ${
                    activeCategory === cat.id
                      ? "bg-black text-white font-bold shadow-md"
                      : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200 hover:text-black font-medium"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* ── Frameless Visual Gallery Grid (Zero Cards, Zero Frames) ── */}
        <div className="max-w-7xl 2xl:max-w-[1536px] 3xl:max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10">
            {filteredIndustries.map((item) => (
              <div
                key={item.id}
                onClick={() => setSelectedSector(item)}
                className="group cursor-pointer select-none flex flex-col"
              >
                {/* Frameless Cinematic Visual Canvas — ZERO floating box badges */}
                <div className="relative aspect-[16/11] overflow-hidden rounded-xl sm:rounded-2xl bg-neutral-950 mb-3.5 shadow-sm group-hover:shadow-xl transition-all duration-500">
                  <SafeImage
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    containerClassName="w-full h-full"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-40 group-hover:opacity-60 transition-opacity pointer-events-none" />

                  {/* Corner Sector Number Watermark (Containerless typography) */}
                  <div className="absolute top-3 left-3 text-[10px] font-mono uppercase tracking-widest text-white/90 drop-shadow pointer-events-none">
                    SECTOR {item.num}
                  </div>

                  {/* Live Impact Overlay on Image Bottom (Containerless typography) */}
                  <div className="absolute bottom-3 left-3 right-3 text-white pointer-events-none">
                    <span className="text-xs font-semibold text-white/95 line-clamp-1 drop-shadow-sm">
                      {item.keyMetric}
                    </span>
                  </div>
                </div>

                {/* Pure Typography Content (No Card, No Frame) */}
                <div className="flex flex-col flex-1">
                  <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-neutral-400 mb-1">
                    SECTOR {item.num}
                  </div>

                  <h3 className="text-base sm:text-lg font-black text-black tracking-tight leading-snug group-hover:text-neutral-600 transition-colors mb-1.5 min-h-[2.75rem] flex items-start">
                    {item.title}
                  </h3>

                  <p className="text-xs text-neutral-500 font-normal line-clamp-1 mb-3">
                    {item.badge}
                  </p>

                  <div className="mt-auto pt-2 flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-black group-hover:text-neutral-600 transition-colors">
                    <span>Inspect Dossier</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Interactive Spatial Dossier Pop-Up (Modal — z-[100] overlays navbar cleanly) ── */}
        <AnimatePresence>
          {selectedSector && (
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 lg:p-8">
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedSector(null)}
                className="absolute inset-0 bg-black/85 backdrop-blur-md cursor-pointer"
              />

              {/* Modal Dialog */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 16 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 16 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="relative z-10 w-full max-w-5xl bg-white rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden max-h-[88vh] flex flex-col lg:flex-row border border-neutral-200/80 my-auto"
              >
                {/* Left: Cinematic Visual Canvas (6 Cols) */}
                <div className="lg:w-1/2 relative bg-neutral-950 aspect-[16/10] lg:aspect-auto min-h-[280px] lg:min-h-[520px] overflow-hidden">
                  <SafeImage
                    src={selectedSector.img}
                    alt={selectedSector.title}
                    className="w-full h-full object-cover"
                    containerClassName="absolute inset-0 w-full h-full"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-black/10 pointer-events-none" />

                  {/* Image Overlay Footer — Positioned with comfortable 24-32px bottom padding, never clipped */}
                  <div className="absolute bottom-6 sm:bottom-8 left-6 sm:left-8 right-6 sm:right-8 z-10 text-white space-y-1 pointer-events-none">
                    <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-white/70 block">
                      Verified Sector Impact
                    </span>
                    <h4 className="text-xl sm:text-2xl font-black text-white tracking-tight leading-tight">
                      {selectedSector.keyMetric}
                    </h4>
                  </div>
                </div>

                {/* Right: Architectural Dossier Content (6 Cols) */}
                <div className="lg:w-1/2 p-6 sm:p-8 lg:p-10 flex flex-col justify-between overflow-y-auto max-h-[85vh] lg:max-h-[600px]">
                  {/* Top Bar: Sector Eyebrow & Close Button (Zero orphaned slashes) */}
                  <div>
                    <div className="flex items-center justify-between gap-4 mb-3">
                      <span className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-neutral-400">
                        SECTOR {selectedSector.num}
                      </span>
                      <button
                        onClick={() => setSelectedSector(null)}
                        aria-label="Close Dossier"
                        className="w-8 h-8 rounded-full bg-neutral-100 hover:bg-black hover:text-white flex items-center justify-center text-neutral-700 transition-colors cursor-pointer shrink-0"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>

                    {/* Title */}
                    <h2 className="text-2xl sm:text-3xl font-black text-black tracking-tight leading-tight mb-2">
                      {selectedSector.title}
                    </h2>

                    {/* Venue Environments Subtitle (Cleanly placed under title with zero slashes) */}
                    <p className="text-xs text-neutral-500 font-mono uppercase tracking-wider mb-6">
                      {selectedSector.badge}
                    </p>

                    {/* Transformation Editorial Dossier */}
                    <div className="space-y-4 mb-6">
                      <div>
                        <span className="text-[10px] sm:text-[11px] font-mono font-bold uppercase tracking-[0.2em] text-black block mb-1">
                          The Challenge
                        </span>
                        <p className="text-xs sm:text-sm text-neutral-600 font-light leading-relaxed">
                          {selectedSector.problemSolved}
                        </p>
                      </div>

                      <div>
                        <span className="text-[10px] sm:text-[11px] font-mono font-bold uppercase tracking-[0.2em] text-black block mb-1">
                          Commercial Outcome
                        </span>
                        <p className="text-xs sm:text-sm text-neutral-900 font-medium leading-relaxed">
                          {selectedSector.customerGain}
                        </p>
                      </div>
                    </div>

                    {/* Deployed Installations */}
                    {selectedSector.relatedProjects && selectedSector.relatedProjects.length > 0 && (
                      <div className="pt-4 border-t border-neutral-150 mb-6">
                        <span className="text-[10px] sm:text-[11px] font-mono font-bold uppercase tracking-[0.2em] text-black block mb-2">
                          Deployed Installations
                        </span>
                        <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 text-xs">
                          {selectedSector.relatedProjects.map((p, pIdx) => (
                            <span key={pIdx} className="inline-flex items-center">
                              <Link
                                href={p.href}
                                onClick={() => setSelectedSector(null)}
                                className="text-neutral-700 hover:text-black font-medium transition-colors hover:underline underline-offset-4 decoration-neutral-300"
                              >
                                {p.name}
                              </Link>
                              {pIdx < selectedSector.relatedProjects.length - 1 && (
                                <span className="text-neutral-300 ml-3 select-none">/</span>
                              )}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Footer Controls: Prev / Next + Explore Action */}
                  <div className="pt-4 border-t border-neutral-150 flex items-center justify-between gap-4 mt-auto">
                    {/* Prev / Next cycle buttons */}
                    <div className="flex items-center gap-2 text-xs font-mono text-neutral-500">
                      <button
                        onClick={handleModalPrev}
                        aria-label="Previous Sector"
                        className="w-8 h-8 rounded-full border border-neutral-200 hover:border-black flex items-center justify-center text-neutral-700 hover:text-black transition-colors cursor-pointer"
                      >
                        <ChevronLeft className="w-4 h-4" />
                      </button>
                      <span className="font-bold text-black px-1.5 select-none text-xs">
                        {selectedSector.num} / {String(industriesData.length).padStart(2, "0")}
                      </span>
                      <button
                        onClick={handleModalNext}
                        aria-label="Next Sector"
                        className="w-8 h-8 rounded-full border border-neutral-200 hover:border-black flex items-center justify-center text-neutral-700 hover:text-black transition-colors cursor-pointer"
                      >
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>

                    {/* Direct Sector Page Link (No pill button) */}
                    <Link
                      href={`/industries/${selectedSector.slug}`}
                      onClick={() => setSelectedSector(null)}
                      className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-black hover:text-neutral-600 transition-colors group/link"
                    >
                      <span>Explore Sector Architecture</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </section>

      {/* Page-Level "Start Your Project" CTA Banner */}
      <section className="relative py-20 sm:py-24 overflow-hidden bg-black text-white">
        <div className="absolute inset-0 z-0">
          <SafeImage 
            src="/images/architectural_light_beam.jpg" 
            alt="Start Your Project" 
            className="w-full h-full object-cover opacity-30" 
            containerClassName="w-full h-full" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-[10px] sm:text-[11px] font-mono font-semibold uppercase tracking-[0.2em] text-white/70 block mb-3">
            BESPOKE SPATIAL ENGINEERING
          </span>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight mb-4 sm:mb-6 text-white leading-tight">
            Start Your Industry Transformation.
          </h2>
          <p className="text-base sm:text-lg text-white/80 font-light mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed">
            Talk to our spatial engineers and software architects to build the ideal motion-interactive configuration for your venue.
          </p>
          <Link 
            href="/contact" 
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-widest text-black bg-white px-8 py-3.5 sm:py-4 rounded-full hover:bg-white/90 shadow-2xl transition-all duration-300 active:scale-95"
          >
            Start Your Project <ArrowRight className="w-4 h-4 shrink-0" />
          </Link>
        </div>
      </section>
    </div>
  );
}
