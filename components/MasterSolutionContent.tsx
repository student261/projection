"use client";

import { motion } from "framer-motion";
import SafeImage from "@/components/SafeImage";
import Link from "next/link";
import {
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Zap,
  TrendingUp,
  Settings,
  Globe,
  MapPin,
  Cpu,
  Plus,
  Minus,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import Button from "@/components/ui/Button";
import SectionHeading from "@/components/ui/SectionHeading";
import HugeCTA from "@/components/ui/HugeCTA";
import { useState, useRef } from "react";

export interface SolutionFullData {
  slug: string;
  // Section 01: Hero Banner
  solutionLabel: string;
  heroHeading: string;
  heroSubtitle: string;
  heroDescription: string;
  heroImg: string;

  // Section 02: What Is This Solution?
  whatIsHeading: string;
  whatIsDescription: string;
  whatIsFeatures: { title: string; desc: string }[];
  whatIsVideoPlaceholder: string;
  videoUrl?: string;

  // Section 03: Experience Showcase
  experienceHeading?: string;
  experienceIntro: string;
  featuredExperience: { title: string; desc: string; img: string; category: string };
  experienceCards: { title: string; desc: string; img: string; category: string }[];

  // Section 04: Key Features
  featuresHeading?: string;
  keyFeaturesIntro: string;
  keyFeatures: { title: string; desc: string }[];

  // Section 05: How It Works
  howItWorksHeading?: string;
  howItWorksIntro: string;
  howItWorksSteps: { title: string; desc: string }[];

  // Section 06: Industries We Serve
  industriesHeading?: string;
  industriesIntro: string;
  featuredIndustry: { title: string; desc: string; img: string; href: string };
  industryCards: { title: string; desc: string; img: string; href: string }[];

  // Section 07/08: Tech Stack & Benefits
  outcomesHeading?: string;
  benefitsIntro: string;
  featuredBenefit: { title: string; desc: string; img: string };
  benefits: { title: string; desc: string }[];
  techStack: string[];

  // Section 09: Featured Projects
  projectsHeading?: string;
  projectsIntro: string;
  featuredProject: { industry: string; title: string; desc: string; img: string; location: string; tech: string[]; href: string };
  projects: { industry: string; title: string; desc: string; href: string; img?: string }[];

  // Section 10: FAQs
  faqsIntro: string;
  faqs: { q: string; a: string }[];
}

export default function MasterSolutionContent({ data }: { data: SolutionFullData }) {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [activeProjectIdx, setActiveProjectIdx] = useState(0);
  const [activeIndustryIdx, setActiveIndustryIdx] = useState(0);
  const tabsRef = useRef<HTMLDivElement>(null);

  const handleSelectIndustry = (idx: number) => {
    setActiveIndustryIdx(idx);
    if (tabsRef.current) {
      const btn = tabsRef.current.children[idx] as HTMLElement;
      if (btn) {
        btn.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
      }
    }
  };

  const nextIndustry = () => {
    const nextIdx = (activeIndustryIdx + 1) % allIndustries.length;
    handleSelectIndustry(nextIdx);
  };

  const prevIndustry = () => {
    const prevIdx = (activeIndustryIdx - 1 + allIndustries.length) % allIndustries.length;
    handleSelectIndustry(prevIdx);
  };

  const allExperiences = [
    {
      title: data.featuredExperience.title,
      category: data.featuredExperience.category,
      desc: data.featuredExperience.desc,
      img: data.featuredExperience.img,
    },
    ...data.experienceCards
  ];

  const allIndustries = [
    {
      title: data.featuredIndustry.title,
      desc: data.featuredIndustry.desc,
      img: data.featuredIndustry.img,
      href: data.featuredIndustry.href,
      tag: "Featured Sector",
    },
    ...data.industryCards.slice(0, 3).map((ind, i) => ({
      title: ind.title,
      desc: ind.desc,
      img: ind.img,
      href: ind.href || "/industries",
      tag: `Industry 0${i + 2}`,
    }))
  ];

  const projectImages: Record<string, string> = {
    "Education": "/images/education_interactive_floor.jpg",
    "Museum": "/images/museum_interactive_exhibit.jpg",
    "Retail": "/images/retail_interactive_showcase.jpg",
    "Healthcare": "/images/healthcare_sensory_room.jpg",
    "Entertainment": "/images/entertainment_motion_arena.jpg",
    "Corporate": "/images/corporate_lobby_wall.jpg",
    "Hospitality": "/images/hospitality_ambient_atrium.jpg",
    "Public Spaces": "/images/cathedral_projection_mapping.jpg",
  };

  const showcaseProjects = [
    {
      title: data.featuredProject.title,
      industry: data.featuredProject.industry,
      location: data.featuredProject.location,
      desc: data.featuredProject.desc,
      tech: data.featuredProject.tech,
      img: data.featuredProject.img,
      href: data.featuredProject.href,
    },
    ...data.projects.slice(0, 4).map((p) => ({
      title: p.title,
      industry: p.industry,
      location: `${p.industry} Sector Installation`,
      desc: p.desc,
      tech: ["Motion Sensing", "Projection Mapping", "Interactive Engine"],
      img: p.img || projectImages[p.industry] || data.featuredProject.img,
      href: p.href,
    }))
  ];
  const activeProject = showcaseProjects[activeProjectIdx] || showcaseProjects[0];

  // Layout Variations based on slug to make pages look distinct
  const isFlippedLayout = data.slug === "immersive-environment" || data.slug === "solution-engagement";
  const isAltLayout = data.slug === "ai-experience" || data.slug === "solution-engagement";
  
  // Subtle hero tints
  const heroGradient = 
    data.slug === "ai-experience" ? "from-indigo-950 via-black/60 to-black/90" :
    data.slug === "immersive-environment" ? "from-purple-950 via-black/60 to-black/90" :
    data.slug === "solution-engagement" ? "from-emerald-950 via-black/60 to-black/90" :
    "from-black via-black/40 to-black/80"; // Default Interactive Spaces

  return (
    <div className="w-full bg-white text-black">
      
      {/* SECTION 01 - HERO BANNER */}
      <section className="relative h-screen min-h-screen flex flex-col justify-between items-center overflow-hidden bg-black text-white pt-24 sm:pt-28 pb-6 px-4">
        <div className="absolute inset-0 z-0">
          <SafeImage src={data.heroImg} alt={data.heroHeading} className="w-full h-full object-cover opacity-85 brightness-105 contrast-105 scale-105 animate-[slow-pan_20s_ease-in-out_infinite_alternate]" containerClassName="w-full h-full bg-black" priority />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/60" />
        </div>

        <div className="my-auto relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-center gap-2 text-[10px] sm:text-[11px] font-mono font-semibold uppercase tracking-[0.2em] text-white/90 mb-4 sm:mb-6"
          >
            <Sparkles className="w-3.5 h-3.5 text-white" />
            <span>{data.solutionLabel}</span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-black text-white mb-4 sm:mb-6 max-w-4xl mx-auto drop-shadow-2xl tracking-tight leading-[1.05]"
          >
            {data.heroHeading}
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-white/90 max-w-3xl mx-auto mb-8 sm:mb-10 text-base sm:text-xl lg:text-2xl font-light leading-relaxed"
          >
            {data.heroSubtitle}
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4"
          >
            <Link 
              href="#what-is-it" 
              className="inline-flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-[0.08em] px-8 py-3.5 sm:py-4 transition-all duration-300 active:scale-95 cursor-pointer w-full sm:w-auto bg-white text-black hover:bg-gray-200 shadow-md rounded-full"
            >
              Start Your Project
            </Link>
            <Link 
              href="/contact" 
              className="inline-flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-[0.08em] px-8 py-3.5 sm:py-4 transition-all duration-300 active:scale-95 cursor-pointer w-full sm:w-auto border border-white/40 bg-black/40 text-white hover:bg-white/20 backdrop-blur-sm rounded-full"
            >
              Book a Demo
            </Link>
          </motion.div>
        </div>
      </section>

      {/* SECTION 02 — WHAT IS THIS SOLUTION? */}
      <section id="what-is-it" className="pt-14 pb-10 lg:pt-20 lg:pb-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* Image Side */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className={`relative w-full lg:col-span-5 ${isFlippedLayout ? "lg:order-2" : "lg:order-1"}`}
          >
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.08)] border border-black/10 bg-slate-950 group">
              {data.videoUrl ? (
                <video
                  src={data.videoUrl}
                  poster={data.whatIsVideoPlaceholder}
                  autoPlay
                  loop
                  muted
                  playsInline
                  controls
                  preload="metadata"
                  className="w-full h-full object-cover"
                />
              ) : (
                <SafeImage src={data.whatIsVideoPlaceholder} alt={data.whatIsHeading || "Solution Preview"} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out" containerClassName="w-full h-full" />
              )}
              <div className="absolute bottom-4 left-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/15 text-[11px] font-mono text-white/90">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>{data.videoUrl ? "Live Demonstration Video" : "Installation Preview"}</span>
              </div>
            </div>
          </motion.div>

          {/* Content Side */}
          <div className={`w-full lg:col-span-7 ${isFlippedLayout ? "lg:order-1" : "lg:order-2"}`}>
            <div>
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/5 border border-black/5 text-[10px] font-bold uppercase tracking-widest text-black mb-5">
                <Sparkles className="w-3.5 h-3.5 text-black" />
                <span>Interactive Solution</span>
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-black mb-5 tracking-tight leading-[1.1]">
                {data.whatIsHeading}
              </h2>
              <p className="text-base sm:text-lg text-black/70 font-light leading-relaxed mb-8">
                {data.whatIsDescription}
              </p>
            </div>

            {/* High-End Architectural Feature Matrix (Zero Cards, Stylish & Modern) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 pt-4">
              {data.whatIsFeatures.map((feat, idx) => (
                <div 
                  key={idx} 
                  className="group relative pl-4 sm:pl-5 py-2 transition-all duration-300 border-l-2 border-black/10 hover:border-black"
                >
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="inline-flex items-center justify-center text-[10px] font-mono font-bold tracking-wider text-black/50 group-hover:text-black transition-colors">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    <h4 className="text-sm sm:text-base font-bold text-black tracking-tight group-hover:text-black transition-colors">
                      {feat.title}
                    </h4>
                  </div>
                  <p className="text-xs sm:text-sm text-black/65 font-light leading-relaxed">
                    {feat.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 03 — EXPERIENCE HORIZON GALLERY (EXPANDING FILMSTRIP - ZERO CARDS) */}
      <section className="py-8 lg:py-12 bg-gray-50/70 overflow-hidden">
        <div className="max-w-7xl 2xl:max-w-[1536px] 3xl:max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 mb-6 sm:mb-8">
            <div>
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/5 border border-black/5 text-[10px] font-bold uppercase tracking-widest text-black mb-2">
                <Sparkles className="w-3 h-3 text-black" />
                <span>Experience Catalog</span>
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-black tracking-tight leading-[1.1]">
                {data.experienceHeading || "Experience the Possibilities"}
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-black/60 font-light leading-relaxed max-w-md">
              {data.experienceIntro}
            </p>
          </div>

          {data.slug === "interactive-spaces" ? (
            <div className="space-y-12">
              {/* Dual Primary Form Factors: Floor & Wall */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
                {/* Interactive Floor */}
                <div className="bg-white rounded-3xl border border-black/10 overflow-hidden shadow-sm flex flex-col hover:border-black/20 transition-all">
                  <div className="relative aspect-[16/10] w-full bg-black overflow-hidden">
                    <SafeImage
                      src="/images/cat_interactive_floor.jpg"
                      alt="Interactive Floor"
                      className="w-full h-full object-cover"
                      containerClassName="w-full h-full"
                    />
                    <div className="absolute top-4 left-4 z-10">
                      <span className="px-3 py-1 rounded-full bg-black/75 backdrop-blur-md border border-white/20 text-[10px] font-mono font-bold uppercase tracking-wider text-white">
                        Primary Form Factor 01
                      </span>
                    </div>
                  </div>
                  <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-black text-black tracking-tight mb-4">
                        Interactive Floor
                      </h3>
                      <div className="space-y-3 text-xs sm:text-sm text-black/80">
                        <div className="p-3.5 rounded-2xl bg-gray-50 border border-black/5">
                          <span className="font-bold text-black block mb-1 uppercase tracking-wider text-[10px]">How It Works</span>
                          Overhead 3D LiDAR depth sensors track visitor foot traffic in real time, projecting fluid responsive light physics, sound, and interactive graphics beneath each step with instantaneous, real-time optical responsiveness.
                        </div>
                        <div className="p-3.5 rounded-2xl bg-gray-50 border border-black/5">
                          <span className="font-bold text-black block mb-1 uppercase tracking-wider text-[10px]">Real-World Use Case</span>
                          Retail stores and museums transform empty circulation floors into branded, footfall-activated product showcases and interactive discovery zones.
                        </div>
                        <div className="p-3.5 rounded-2xl bg-black/[0.03] border border-black/5">
                          <span className="font-bold text-black block mb-1 uppercase tracking-wider text-[10px]">Clear Benefits</span>
                          Substantially extends visitor dwell time, incurs zero mechanical surface wear (optics mount safely overhead), and delivers instant multi-user participation.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Interactive Wall */}
                <div className="bg-white rounded-3xl border border-black/10 overflow-hidden shadow-sm flex flex-col hover:border-black/20 transition-all">
                  <div className="relative aspect-[16/10] w-full bg-black overflow-hidden">
                    <SafeImage
                      src="/images/corporate_lobby_wall.jpg"
                      alt="Interactive Wall"
                      className="w-full h-full object-cover"
                      containerClassName="w-full h-full"
                    />
                    <div className="absolute top-4 left-4 z-10">
                      <span className="px-3 py-1 rounded-full bg-black/75 backdrop-blur-md border border-white/20 text-[10px] font-mono font-bold uppercase tracking-wider text-white">
                        Primary Form Factor 02
                      </span>
                    </div>
                  </div>
                  <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-black text-black tracking-tight mb-4">
                        Interactive Wall
                      </h3>
                      <div className="space-y-3 text-xs sm:text-sm text-black/80">
                        <div className="p-3.5 rounded-2xl bg-gray-50 border border-black/5">
                          <span className="font-bold text-black block mb-1 uppercase tracking-wider text-[10px]">How It Works</span>
                          Optical tracking cameras and depth sensors detect body proximity and gestures along vertical surfaces, enabling touch and wave manipulation without physical glass screens.
                        </div>
                        <div className="p-3.5 rounded-2xl bg-gray-50 border border-black/5">
                          <span className="font-bold text-black block mb-1 uppercase tracking-wider text-[10px]">Real-World Use Case</span>
                          Corporate headquarters and brand experience centers use interactive walls to present interactive company milestones, product selectors, and VIP welcomes.
                        </div>
                        <div className="p-3.5 rounded-2xl bg-black/[0.03] border border-black/5">
                          <span className="font-bold text-black block mb-1 uppercase tracking-wider text-[10px]">Clear Benefits</span>
                          Hygienic touchless interaction, architectural-scale narrative canvas, and intuitive engagement that requires zero user onboarding.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Surface Variants & Form Factors Cards */}
              <div className="pt-6">
                <div className="mb-6">
                  <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/5 border border-black/5 text-[10px] font-bold uppercase tracking-widest text-black mb-2">
                    <Sparkles className="w-3 h-3 text-black" />
                    <span>Specialized Surface Variants</span>
                  </span>
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-black tracking-tight">
                    Extended Form Factors & Architectural Canvases
                  </h3>
                  <p className="text-xs sm:text-sm text-black/60 font-light mt-1">
                    Explore our specialized projection surfaces engineered for atriums, storefronts, tables, and experimental spaces.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {data.experienceCards.slice(1).map((variant, vIdx) => (
                    <div
                      key={vIdx}
                      className="bg-white rounded-2xl border border-black/10 overflow-hidden shadow-sm hover:shadow-md hover:border-black/20 transition-all flex flex-col group"
                    >
                      <div className="relative aspect-[16/10] w-full bg-slate-900 overflow-hidden">
                        <SafeImage
                          src={variant.img}
                          alt={variant.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          containerClassName="w-full h-full"
                        />
                        <div className="absolute top-3 left-3 z-10">
                          <span className="px-2.5 py-0.5 rounded-full bg-black/75 backdrop-blur-md border border-white/20 text-[9px] font-mono font-bold uppercase tracking-wider text-white">
                            {variant.category}
                          </span>
                        </div>
                      </div>
                      <div className="p-5 flex-1 flex flex-col justify-between">
                        <div>
                          <h4 className="text-base sm:text-lg font-bold text-black mb-2 tracking-tight">
                            {variant.title}
                          </h4>
                          <p className="text-xs text-black/70 font-light leading-relaxed">
                            {variant.desc}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {allExperiences.map((exp, idx) => {
                const num = String(idx + 1).padStart(2, "0");
                return (
                  <div
                    key={idx}
                    className="group bg-white rounded-3xl border border-black/10 overflow-hidden shadow-sm hover:shadow-md hover:border-black/20 transition-all flex flex-col justify-between"
                  >
                    <div className="relative aspect-[16/10] w-full bg-slate-900 overflow-hidden">
                      <SafeImage
                        src={exp.img}
                        alt={exp.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        containerClassName="w-full h-full"
                      />
                      <div className="absolute top-3.5 left-3.5 z-10 flex items-center gap-2">
                        <span className="px-2.5 py-0.5 rounded-full bg-black/75 backdrop-blur-md border border-white/20 text-[10px] font-mono font-bold uppercase tracking-wider text-white">
                          {num}
                        </span>
                        <span className="px-2.5 py-0.5 rounded-full bg-black/75 backdrop-blur-md border border-white/20 text-[10px] font-mono font-bold uppercase tracking-wider text-white">
                          {exp.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                      <div>
                        <h3 className="text-lg sm:text-xl font-black text-black tracking-tight mb-2 group-hover:text-neutral-700 transition-colors">
                          {exp.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-black/70 font-light leading-relaxed mb-4">
                          {exp.desc}
                        </p>
                      </div>
                      <Link
                        href="/solutions"
                        className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-black group-hover:text-neutral-500 transition-colors pt-3 border-t border-black/5"
                      >
                        <span>Explore Experience</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* SECTION 04 — KEY FEATURES (SWISS SYSTEM SPEC MATRIX - ZERO CARDS) */}
      <section className="py-8 lg:py-12 border-y border-black/10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 mb-6 sm:mb-8">
            <div>
              <div className="flex items-center gap-2 text-[10px] sm:text-[11px] font-mono font-semibold uppercase tracking-[0.2em] text-black/50 mb-2">
                <Sparkles className="w-3.5 h-3.5 text-black/40" />
                <span>SYSTEM ARCHITECTURE</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-black tracking-tight leading-[1.1]">
                {data.featuresHeading || (
                  <>Powerful Features.<br className="hidden sm:inline" /> Exceptional Experiences.</>
                )}
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-black/60 font-light leading-relaxed max-w-md">
              {data.keyFeaturesIntro}
            </p>
          </div>

          {/* Clean Hairline Divided Spec Matrix (Zero Cards) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 divide-y divide-black/10 md:divide-y-0 md:divide-x border-y border-black/10">
            {data.keyFeatures.map((feat, idx) => {
              const num = String(idx + 1).padStart(2, "0");
              return (
                <div 
                  key={idx} 
                  className={`p-5 lg:p-6 flex flex-col justify-between hover:bg-black/[0.02] transition-colors group ${
                    idx >= 3 ? "md:border-t md:border-black/10" : ""
                  }`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono font-bold text-black/40 group-hover:text-black transition-colors">
                      {num}
                    </span>
                    <span className="w-1.5 h-1.5 rounded-full bg-black/20 group-hover:bg-black transition-colors" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-black tracking-tight mb-1.5">
                      {feat.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-black/60 font-light leading-relaxed">
                      {feat.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 05 — HOW IT WORKS (VIEWPORT-OPTIMIZED) */}
      <section className="py-8 lg:py-12 bg-black text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-6 sm:mb-8">
            <div className="flex items-center justify-center gap-2 text-[10px] sm:text-[11px] font-mono font-semibold uppercase tracking-[0.2em] text-white/60 mb-2">
              <Sparkles className="w-3.5 h-3.5 text-white/50" />
              <span>INTELLIGENT TECHNOLOGY &bull; INSTANT INTERACTION</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.1] mb-3">
              {data.howItWorksHeading || "From Movement to Immersive Experience"}
            </h2>
            <p className="text-xs sm:text-sm text-white/70 font-light leading-relaxed max-w-2xl mx-auto">
              {data.howItWorksIntro}
            </p>
          </div>

          <div className="mt-8 sm:mt-10 relative">
            {/* Connecting Line */}
            <div className="hidden lg:block absolute top-6 left-16 right-16 h-[1px] bg-gradient-to-r from-transparent via-white/25 to-transparent z-0" />
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6 lg:gap-4 relative z-10">
              {data.howItWorksSteps.map((step, idx) => (
                <div 
                  key={idx}
                  className="relative text-left sm:text-center flex sm:flex-col items-start sm:items-center gap-3.5 sm:gap-0 group p-3 sm:p-0 rounded-2xl bg-white/[0.03] sm:bg-transparent border border-white/10 sm:border-none"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 shrink-0 rounded-full bg-slate-900 border border-white/30 text-white font-mono font-bold text-xs sm:text-sm flex items-center justify-center sm:mx-auto sm:mb-3 shadow-lg group-hover:border-white group-hover:bg-white group-hover:text-black transition-all duration-300">
                    0{idx + 1}
                  </div>
                  <div className="flex-1 sm:w-full">
                    <div className="sm:h-8 flex items-center sm:justify-center">
                      <h4 className="text-xs font-bold text-white tracking-wider uppercase group-hover:text-blue-400 transition-colors leading-tight">
                        {step.title}
                      </h4>
                    </div>
                    <p className="text-[11px] sm:text-xs text-white/60 font-light leading-relaxed pt-1 sm:pt-1.5">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 06 — INDUSTRIES WE SERVE (INTERACTIVE AMBIENT CONSOLE - ZERO CARDS) */}
      <section className="py-8 lg:py-12 bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
            <div>
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/5 border border-black/5 text-[10px] font-bold uppercase tracking-widest text-black mb-2">
                <Sparkles className="w-3 h-3 text-black" />
                <span>Sector Integration</span>
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-black tracking-tight leading-[1.1]">
                {data.industriesHeading || (
                  <>One Solution.<br className="hidden sm:inline" /> Endless Possibilities.</>
                )}
              </h2>
            </div>

            {/* Quick Sector Pagination & Controls */}
            <div className="flex items-center justify-between sm:justify-end gap-3 w-full sm:w-auto">
              <p className="text-xs sm:text-sm text-black/60 font-light leading-relaxed max-w-xs hidden md:block">
                {data.industriesIntro}
              </p>
              <div className="flex items-center gap-2 bg-neutral-100 p-1 rounded-full">
                <button
                  type="button"
                  onClick={prevIndustry}
                  aria-label="Previous sector"
                  className="w-7 h-7 rounded-full bg-white text-black shadow-sm flex items-center justify-center hover:bg-black hover:text-white transition-all cursor-pointer active:scale-95"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <span className="text-[11px] font-mono font-bold px-2 text-black/70 select-none">
                  0{activeIndustryIdx + 1} / 0{allIndustries.length}
                </span>
                <button
                  type="button"
                  onClick={nextIndustry}
                  aria-label="Next sector"
                  className="w-7 h-7 rounded-full bg-white text-black shadow-sm flex items-center justify-center hover:bg-black hover:text-white transition-all cursor-pointer active:scale-95"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Interactive Sector Segmented Tabs (Sleek Horizontal Pill Bar with Auto-Scroll) */}
          <div className="relative mb-6">
            <div 
              ref={tabsRef}
              className="flex items-center gap-2 overflow-x-auto scrollbar-hide pb-2 -mx-4 px-4 sm:mx-0 sm:px-0 snap-x"
            >
              {allIndustries.map((ind, idx) => {
                const isActive = activeIndustryIdx === idx;
                return (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => handleSelectIndustry(idx)}
                    className={`shrink-0 snap-center inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer select-none ${
                      isActive 
                        ? "bg-black text-white shadow-md ring-2 ring-black/10" 
                        : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200 hover:text-black"
                    }`}
                  >
                    <span className={isActive ? "text-white/50" : "text-black/35"}>
                      0{idx + 1}
                    </span>
                    <span>{ind.title}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Cinematic Panoramic Stage (Zero Cards, Architectural Canvas) */}
          {(() => {
            const activeInd = allIndustries[activeIndustryIdx] || allIndustries[0];
            return (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center bg-white rounded-3xl p-5 sm:p-8 border border-black/10 shadow-sm">
                <div className="lg:col-span-7 relative aspect-[16/10] rounded-2xl overflow-hidden bg-slate-900">
                  <SafeImage 
                    key={activeInd.img + activeIndustryIdx}
                    src={activeInd.img} 
                    alt={activeInd.title} 
                    className="w-full h-full object-cover transition-all duration-500" 
                    containerClassName="w-full h-full absolute inset-0" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-4 left-4">
                    <span className="px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-[10px] font-mono font-bold uppercase tracking-wider text-white">
                      {activeInd.tag}
                    </span>
                  </div>
                </div>

                <div className="lg:col-span-5 flex flex-col justify-center">
                  <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-black/40 mb-2 block">
                    Specialized Application
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-black text-black tracking-tight mb-3">
                    {activeInd.title}
                  </h3>
                  <p className="text-sm text-black/70 font-light leading-relaxed mb-6">
                    {activeInd.desc}
                  </p>
                  <Link 
                    href={activeInd.href} 
                    className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-black text-white hover:bg-black/80 text-xs font-bold uppercase tracking-wider transition-all w-full sm:w-fit shadow-md active:scale-95"
                  >
                    <span>Discover {activeInd.title} Solutions</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            );
          })()}
        </div>
      </section>

      {/* SECTION 07/08 — TECHNOLOGY & OUTCOMES (TYPOGRAPHIC DATA MATRIX - ZERO CARDS) */}
      <section className="py-8 lg:py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 mb-6 sm:mb-8">
            <div>
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/5 border border-black/5 text-[10px] font-bold uppercase tracking-widest text-black mb-2">
                <Sparkles className="w-3 h-3 text-black" />
                <span>Measurable Results</span>
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-black tracking-tight leading-[1.1]">
                {data.outcomesHeading || (
                  <>More Than Technology.<br className="hidden sm:inline" /> Meaningful Outcomes.</>
                )}
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-black/60 font-light leading-relaxed max-w-md">
              {data.featuredBenefit.desc}
            </p>
          </div>

          {/* Clean 4-Column Typographic Divided Matrix (Zero Cards) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-black/10 border-y border-black/10 py-4 mb-6">
            {data.benefits.slice(0, 4).map((b, idx) => (
              <div key={idx} className="p-4 sm:p-5 flex flex-col justify-between group">
                <span className="text-xs font-mono font-bold text-black/30 mb-4 block group-hover:text-black transition-colors">
                  0{idx + 1} • IMPACT
                </span>
                <div>
                  <h4 className="text-base sm:text-lg font-black text-black tracking-tight mb-2">
                    {b.title}
                  </h4>
                  <p className="text-xs text-black/60 font-light leading-relaxed">
                    {b.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Integrated Architectural Tech Stack Spec Bar */}
          <div className="py-4 px-5 sm:px-6 rounded-xl bg-black/[0.02] border border-black/5 flex flex-col md:flex-row items-start md:items-center gap-4 overflow-hidden">
            <div className="flex items-center gap-2.5 text-[11px] sm:text-xs font-mono font-bold uppercase tracking-widest text-black/70 shrink-0">
              <Cpu className="w-4 h-4 text-black shrink-0" />
              <span>Core Hardware & Software Stack:</span>
            </div>
            <div className="flex-1 w-full max-w-full">
              <div className="flex flex-wrap items-center gap-2 sm:gap-2.5">
                {data.techStack.map((tech, idx) => (
                  <span 
                    key={idx} 
                    className="px-3.5 py-1.5 rounded-full bg-white border border-black/10 text-[11px] font-mono font-bold text-black/80 shadow-sm shrink-0"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 09 — FEATURED PROJECTS (INTERACTIVE EXHIBITION STAGE) */}
      <section className="py-8 lg:py-12 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 mb-6 sm:mb-8">
            <div>
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-[10px] font-mono font-bold uppercase tracking-widest text-white/80 mb-2">
                <Sparkles className="w-3 h-3 text-white/80" />
                <span>Featured Installations • Live Showcase</span>
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight leading-[1.1]">
                {data.projectsHeading || "See the Solution in Action"}
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-white/70 font-light leading-relaxed max-w-md">
              {data.projectsIntro}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
            {/* Left: Project Showcase Selector */}
            <div className="lg:col-span-5 order-2 lg:order-1 flex flex-col gap-2">
              {showcaseProjects.map((proj, idx) => {
                const isActive = activeProjectIdx === idx;
                const num = String(idx + 1).padStart(2, "0");
                return (
                  <button
                    key={idx}
                    type="button"
                    onMouseEnter={() => setActiveProjectIdx(idx)}
                    onClick={() => setActiveProjectIdx(idx)}
                    className={`w-full text-left p-3.5 sm:p-4 rounded-2xl transition-all duration-300 border flex items-center justify-between gap-3 ${
                      isActive 
                        ? "bg-white/10 border-white/30 shadow-lg text-white" 
                        : "bg-white/[0.02] border-white/5 text-white/60 hover:bg-white/[0.06] hover:text-white/90"
                    }`}
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <span className={`text-xs font-mono font-bold shrink-0 transition-colors ${
                        isActive ? "text-white" : "text-white/30"
                      }`}>
                        {num}
                      </span>
                      <div className="min-w-0">
                        <div className="flex items-center gap-2 mb-0.5">
                          <span className={`text-[10px] font-mono uppercase tracking-wider font-semibold shrink-0 ${
                            isActive ? "text-blue-400" : "text-blue-400/70"
                          }`}>
                            {proj.industry}
                          </span>
                          <span className="text-[10px] font-mono text-white/40 truncate">
                            • {proj.location}
                          </span>
                        </div>
                        <h4 className={`text-sm sm:text-base font-bold tracking-tight truncate transition-colors ${
                          isActive ? "text-white" : "text-white/80"
                        }`}>
                          {proj.title}
                        </h4>
                      </div>
                    </div>

                    <div className="shrink-0 flex items-center">
                      <span className={`w-7 h-7 rounded-full flex items-center justify-center transition-all ${
                        isActive ? "bg-white text-black" : "bg-white/5 text-white/30"
                      }`}>
                        <ArrowRight className={`w-3.5 h-3.5 transition-transform ${isActive ? "translate-x-0.5" : ""}`} />
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Right: Live Interactive Exhibition Viewport (Stage Terminal) */}
            <div className="lg:col-span-7 order-1 lg:order-2">
              <div className="rounded-2xl sm:rounded-3xl overflow-hidden bg-zinc-950 border border-white/15 shadow-2xl flex flex-col">
                {/* Visual Media Window - Clean, Crisp & 100% Unobstructed */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-black">
                  <SafeImage 
                    key={activeProject.img + activeProjectIdx}
                    src={activeProject.img} 
                    alt={activeProject.title} 
                    className="w-full h-full object-cover opacity-95 brightness-105 contrast-105 transition-all duration-700 hover:scale-105" 
                    containerClassName="w-full h-full" 
                  />
                  
                  {/* Floating Metadata Pills at Top */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between gap-2 z-10">
                    <span className="px-3 py-1 rounded-full bg-black/75 backdrop-blur-md border border-white/20 text-[10px] font-mono font-bold uppercase tracking-widest text-white shadow-sm">
                      {activeProject.industry} Installation
                    </span>
                    <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/75 backdrop-blur-md border border-white/15 text-[10px] font-mono text-white/90 shadow-sm">
                      <MapPin className="w-3 h-3 text-blue-400" />
                      <span>{activeProject.location}</span>
                    </div>
                  </div>
                </div>

                {/* Dedicated Content Details Bar - Clean, Legible, Never Clipped */}
                <div className="p-5 sm:p-6 bg-zinc-950 border-t border-white/10 flex flex-col gap-4">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-black text-white mb-1.5 leading-tight tracking-tight">
                      {activeProject.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-white/75 font-light leading-relaxed">
                      {activeProject.desc}
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-3 border-t border-white/10">
                    <div className="flex flex-wrap items-center gap-1.5">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-white/40 mr-1 hidden sm:inline">
                        Specs:
                      </span>
                      {activeProject.tech.map((t, idx) => (
                        <span key={idx} className="px-2.5 py-1 rounded-md bg-white/10 text-[10px] font-mono text-white/80 border border-white/10">
                          {t}
                        </span>
                      ))}
                    </div>

                    <Link 
                      href={activeProject.href || "/projects"} 
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-white text-black hover:bg-gray-200 text-xs font-bold uppercase tracking-wider transition-all shadow-xl active:scale-95 shrink-0"
                    >
                      <span>Explore Case Study</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 10 — FAQs */}
      <section className="py-10 lg:py-14 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="EVERYTHING YOU NEED TO KNOW"
            heading="Frequently Asked Questions"
            subheading={data.faqsIntro}
            centered
          />

          <div className="mt-10 border-t border-black/15 divide-y divide-black/10">
            {data.faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              const itemNumber = String(idx + 1).padStart(2, "0");

              return (
                <div key={idx} className="transition-colors duration-200">
                  <button
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                    className="w-full py-5 text-left flex items-start justify-between gap-6 cursor-pointer group"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-start gap-4 sm:gap-6">
                      <span className={`font-mono text-xs pt-1 transition-colors ${isOpen ? "text-black font-bold" : "text-black/30 group-hover:text-black/60"}`}>
                        {itemNumber}
                      </span>
                      <span className={`text-base sm:text-lg font-bold transition-colors leading-snug ${isOpen ? "text-black" : "text-black/80 group-hover:text-black"}`}>
                        {faq.q}
                      </span>
                    </div>
                    <div className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 border transition-all duration-300 ${isOpen ? "border-black bg-black text-white" : "border-black/15 text-black/60 group-hover:border-black/30"}`}>
                      {isOpen ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                    </div>
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      isOpen ? "max-h-[1000px] opacity-100 pb-5" : "max-h-0 opacity-0"
                    } pl-8 sm:pl-10 text-sm sm:text-base font-light text-black/75 leading-relaxed`}
                  >
                    <p className="max-w-3xl">{faq.a}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 11 — CTA */}
      <HugeCTA />

    </div>
  );
}
