"use client";

import { useState } from "react";
import SafeImage from "@/components/SafeImage";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Layers, Sparkles, Filter } from "lucide-react";
import Button from "@/components/ui/Button";

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
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredIndustries = activeCategory === "all"
    ? industriesData
    : industriesData.filter(item => item.id === activeCategory);

  const scrollToGrid = () => {
    const el = document.getElementById("industry-matrix");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="w-full bg-white text-black">
      {/* Full-Screen Hero Section (Zero Leakage into Next Fold) */}
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

      {/* Sticky Filter & Category Selector Bar */}
      <section id="industry-matrix" className="sticky top-16 sm:top-20 z-40 bg-white/95 backdrop-blur-md border-y border-neutral-200 py-3 sm:py-4 shadow-sm">
        <div className="max-w-7xl 2xl:max-w-[1536px] 3xl:max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto scrollbar-hide">
            <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-400 mr-2 shrink-0 hidden sm:inline-block">
              Filter:
            </span>
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`text-xs px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full transition-all duration-300 whitespace-nowrap cursor-pointer ${
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
      </section>

      {/* Industries Visual Card Matrix */}
      <section className="py-16 sm:py-20 lg:py-24 bg-neutral-50">
        <div className="max-w-7xl 2xl:max-w-[1536px] 3xl:max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <span className="text-[10px] sm:text-[11px] font-mono font-semibold uppercase tracking-[0.2em] text-neutral-400 block mb-2">
              SECTOR MATRIX
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-black mb-3">
              Commercial Applications & Outcomes
            </h2>
            <p className="text-neutral-600 text-sm sm:text-base font-light">
              Explore concrete customer benefits, problem solutions, and proven deployments across each commercial sector.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
            {filteredIndustries.map((item) => (
              <div 
                key={item.id}
                className="group flex flex-col bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-neutral-200/80"
              >
                {/* Visual Header */}
                <Link href={`/industries/${item.slug}`} className="block relative aspect-[16/10] overflow-hidden bg-black">
                  <SafeImage
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out opacity-90 group-hover:opacity-100"
                    containerClassName="w-full h-full"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute top-3.5 left-3.5 bg-black/75 backdrop-blur-md px-2.5 py-1 rounded-full text-[9px] font-mono font-bold uppercase tracking-wider text-white">
                    {item.badge.split("•")[0]?.trim() || item.title}
                  </div>
                  <div className="absolute bottom-3 right-3 bg-white text-black px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold shadow-md">
                    {item.keyMetric}
                  </div>
                </Link>

                {/* Card Narrative */}
                <div className="p-5 sm:p-6 flex flex-col flex-1">
                  <div className="flex items-baseline gap-2 mb-1.5">
                    <span className="text-xs font-mono font-bold text-neutral-400">
                      {item.num}
                    </span>
                    <span className="text-neutral-300 select-none">/</span>
                    <Link href={`/industries/${item.slug}`}>
                      <h3 className="text-base sm:text-lg font-black text-black tracking-tight hover:text-neutral-600 transition-colors">
                        {item.title}
                      </h3>
                    </Link>
                  </div>

                  {/* Concrete Problem Solved + Customer Gain */}
                  <div className="space-y-2 my-4 bg-neutral-50 rounded-2xl p-3.5 border border-neutral-200/60 text-xs">
                    <div>
                      <span className="font-bold text-black uppercase tracking-wider text-[10px] block mb-0.5">
                        Problem Solved:
                      </span>
                      <p className="text-neutral-600 font-light leading-relaxed">
                        {item.problemSolved}
                      </p>
                    </div>
                    <div className="pt-1.5 border-t border-neutral-200/60">
                      <span className="font-bold text-black uppercase tracking-wider text-[10px] block mb-0.5">
                        Customer Gain:
                      </span>
                      <p className="text-neutral-900 font-medium leading-relaxed">
                        {item.customerGain}
                      </p>
                    </div>
                  </div>

                  {/* Real Related Projects / Case Studies Pills */}
                  {item.relatedProjects && item.relatedProjects.length > 0 && (
                    <div className="mb-5">
                      <span className="text-[9px] font-mono font-bold uppercase tracking-widest text-neutral-400 block mb-2">
                        Proven Case Studies
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {item.relatedProjects.map((p, pIdx) => (
                          <Link
                            key={pIdx}
                            href={p.href}
                            className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-neutral-100 hover:bg-neutral-200 text-[10px] font-medium text-neutral-800 border border-neutral-200/80 transition-colors"
                          >
                            <span>{p.name}</span>
                            <ArrowRight className="w-2.5 h-2.5 text-neutral-400" />
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Explore Button */}
                  <div className="mt-auto pt-3 border-t border-neutral-100 flex items-center justify-between">
                    <Link
                      href={`/industries/${item.slug}`}
                      className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-black hover:text-neutral-600 transition-colors"
                    >
                      <span>Explore Industry</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
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
