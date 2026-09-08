"use client";

import { motion } from "framer-motion";
import SafeImage from "@/components/SafeImage";
import Link from "next/link";
import {
  CheckCircle2,
  ChevronDown,
  ArrowRight,
  Sparkles,
  Zap,
  TrendingUp,
  Settings,
  Globe,
  MapPin,
  Cpu,
  Play,
} from "lucide-react";
import Button from "@/components/ui/Button";
import SectionHeading from "@/components/ui/SectionHeading";
import Divider from "@/components/ui/Divider";
import HugeCTA from "@/components/ui/HugeCTA";
import { useState } from "react";

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

  // Section 03: Experience Showcase
  experienceIntro: string;
  featuredExperience: { title: string; desc: string; img: string; category: string };
  experienceCards: { title: string; desc: string; img: string; category: string }[];

  // Section 04: Key Features
  keyFeaturesIntro: string;
  keyFeatures: { title: string; desc: string }[];

  // Section 05: How It Works
  howItWorksIntro: string;
  howItWorksSteps: { title: string; desc: string }[];

  // Section 06: Industries We Serve
  industriesIntro: string;
  featuredIndustry: { title: string; desc: string; img: string; href: string };
  industryCards: { title: string; desc: string; img: string; href: string }[];

  // Section 07/08: Tech Stack & Benefits
  benefitsIntro: string;
  featuredBenefit: { title: string; desc: string; img: string };
  benefits: { title: string; desc: string }[];
  techStack: string[];

  // Section 09: Featured Projects
  projectsIntro: string;
  featuredProject: { industry: string; title: string; desc: string; img: string; location: string; tech: string[]; href: string };
  projects: { industry: string; title: string; desc: string; href: string }[];

  // Section 10: FAQs
  faqsIntro: string;
  faqs: { q: string; a: string }[];
}

export default function MasterSolutionContent({ data }: { data: SolutionFullData }) {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [activeProjectIdx, setActiveProjectIdx] = useState(0);
  const [activeExpIdx, setActiveExpIdx] = useState(0);
  const [activeIndustryIdx, setActiveIndustryIdx] = useState(0);

  const allExperiences = [
    {
      title: data.featuredExperience.title,
      category: data.featuredExperience.category,
      desc: data.featuredExperience.desc,
      img: data.featuredExperience.img,
    },
    ...data.experienceCards.slice(0, 4)
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
    "Education": "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=80",
    "Museum": "https://images.unsplash.com/photo-1554907984-15263bfd63bd?auto=format&fit=crop&w=1200&q=80",
    "Retail": "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80",
    "Healthcare": "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80",
    "Entertainment": "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=1200&q=80",
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
      img: projectImages[p.industry] || data.featuredProject.img,
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
      <section className="relative min-h-[90vh] lg:min-h-[100vh] py-32 flex items-center justify-center overflow-hidden bg-black text-white">
        <div className="absolute inset-0 z-0">
          <SafeImage src={data.heroImg} alt={data.heroHeading} className="w-full h-full object-cover opacity-60 scale-105 animate-[slow-pan_20s_ease-in-out_infinite_alternate]" containerClassName="w-full h-full bg-black" priority />
          <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/50 to-black/80" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs font-bold uppercase tracking-widest text-white backdrop-blur-md mb-8"
          >
            {data.solutionLabel}
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-black text-white mb-6 max-w-4xl mx-auto drop-shadow-2xl tracking-tight leading-[1.05]"
          >
            {data.heroHeading}
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-white/90 max-w-3xl mx-auto mb-10 text-xl sm:text-2xl font-light leading-relaxed"
          >
            {data.heroSubtitle}
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link 
              href="#what-is-it" 
              className="inline-flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-[0.08em] px-8 py-4 transition-all duration-300 active:scale-95 cursor-pointer w-full sm:w-auto bg-white text-black hover:bg-gray-200 shadow-md rounded-full"
            >
              Start Your Project
            </Link>
            <Link 
              href="/contact" 
              className="inline-flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-[0.08em] px-8 py-4 transition-all duration-300 active:scale-95 cursor-pointer w-full sm:w-auto border border-white/40 bg-black/40 text-white hover:bg-white/20 backdrop-blur-sm rounded-full"
            >
              Book a Demo
            </Link>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-80 z-10 animate-bounce"
        >
          <span className="text-[10px] uppercase tracking-widest font-bold text-white drop-shadow-md">Discover More</span>
          <ChevronDown className="w-4 h-4 text-white drop-shadow-md" />
        </motion.div>
      </section>

      {/* SECTION 02 — WHAT IS THIS SOLUTION? */}
      <section className="pt-14 pb-10 lg:pt-20 lg:pb-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
              <SafeImage src={data.whatIsVideoPlaceholder} alt="Solution Preview" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out" containerClassName="w-full h-full" />
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white/20 backdrop-blur-md border border-white/40 flex items-center justify-center text-white shadow-2xl transition-all duration-300 group-hover:scale-110 group-hover:bg-white/30">
                  <Play className="w-7 h-7 fill-white ml-1 text-white drop-shadow" />
                </div>
              </div>
              <div className="absolute bottom-4 left-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/15 text-[11px] font-mono text-white/90">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Interactive Preview</span>
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

            {/* Swiss Typographic Spec List (Zero Cards) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-5 pt-6 border-t border-black/10">
              {data.whatIsFeatures.map((feat, idx) => (
                <div key={idx} className="group">
                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="text-[10px] font-mono font-bold text-black/40">/{String(idx + 1).padStart(2, "0")}</span>
                    <h4 className="text-sm sm:text-base font-bold text-black tracking-tight">{feat.title}</h4>
                  </div>
                  <p className="text-xs sm:text-sm text-black/60 font-light leading-relaxed pl-5">
                    {feat.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 03 — EXPERIENCE HORIZON GALLERY (EXPANDING FILMSTRIP - ZERO CARDS) */}
      <section className="py-8 lg:py-12 bg-gray-50/70 border-t border-black/5 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 mb-6 sm:mb-8">
            <div>
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/5 border border-black/5 text-[10px] font-bold uppercase tracking-widest text-black mb-2">
                <Sparkles className="w-3 h-3 text-black" />
                <span>Experience Catalog</span>
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-black tracking-tight leading-[1.1]">
                Experience the Possibilities
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-black/60 font-light leading-relaxed max-w-md">
              {data.experienceIntro}
            </p>
          </div>

          {/* Interactive Expanding Horizon Panels (No Cards) */}
          <div className="flex flex-col lg:flex-row gap-2.5 h-[480px] sm:h-[400px] w-full">
            {allExperiences.map((exp, idx) => {
              const isExpanded = activeExpIdx === idx;
              return (
                <div
                  key={idx}
                  onMouseEnter={() => setActiveExpIdx(idx)}
                  onClick={() => setActiveExpIdx(idx)}
                  className={`relative rounded-2xl sm:rounded-3xl overflow-hidden cursor-pointer transition-all duration-500 ease-out flex flex-col justify-end ${
                    isExpanded 
                      ? "lg:flex-[3.5] bg-black shadow-2xl" 
                      : "lg:flex-[1] bg-slate-900 opacity-75 hover:opacity-100"
                  }`}
                >
                  <SafeImage
                    src={exp.img}
                    alt={exp.title}
                    className={`w-full h-full object-cover transition-all duration-700 ${
                      isExpanded ? "scale-105 opacity-65" : "opacity-40 scale-100"
                    }`}
                    containerClassName="w-full h-full absolute inset-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent pointer-events-none" />

                  {/* Panel Content */}
                  <div className="relative z-10 p-4 sm:p-6 w-full">
                    {isExpanded ? (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <span className="inline-block px-2.5 py-0.5 rounded-full bg-white/20 backdrop-blur-md border border-white/20 text-[10px] font-mono font-bold uppercase tracking-widest text-white mb-2">
                          {exp.category}
                        </span>
                        <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight mb-1.5">
                          {exp.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-white/80 font-light mb-4 line-clamp-2 max-w-md">
                          {exp.desc}
                        </p>
                        <Link
                          href="/solutions"
                          className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-white group hover:text-blue-300 transition-colors"
                        >
                          <span>Explore Experience</span>
                          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </motion.div>
                    ) : (
                      <div className="hidden lg:flex flex-col items-center justify-center text-center py-4">
                        <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-white/50 mb-3">
                          0{idx + 1}
                        </span>
                        <span className="text-xs font-bold text-white/80 tracking-wider uppercase [writing-mode:vertical-rl] rotate-180 line-clamp-1">
                          {exp.title}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 04 — KEY FEATURES (SWISS SYSTEM SPEC MATRIX - ZERO CARDS) */}
      <section className="py-8 lg:py-12 border-y border-black/10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 mb-6 sm:mb-8">
            <div>
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/5 border border-black/5 text-[10px] font-bold uppercase tracking-widest text-black mb-2">
                <Sparkles className="w-3 h-3 text-black" />
                <span>System Architecture</span>
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-black tracking-tight leading-[1.1]">
                Powerful Features.<br className="hidden sm:inline" /> Exceptional Experiences.
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
                      /{num}
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
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-[10px] font-mono font-bold uppercase tracking-widest text-white/80 mb-2">
              <Sparkles className="w-3 h-3 text-white/80" />
              <span>Intelligent Technology • Instant Interaction</span>
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight leading-tight mb-2">
              From Movement to Immersive Experience
            </h2>
            <p className="text-xs sm:text-sm text-white/70 font-light leading-relaxed max-w-2xl mx-auto">
              {data.howItWorksIntro}
            </p>
          </div>

          <div className="mt-8 sm:mt-10 relative">
            {/* Connecting Line */}
            <div className="hidden lg:block absolute top-6 left-16 right-16 h-[1px] bg-gradient-to-r from-transparent via-white/25 to-transparent z-0" />
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8 lg:gap-4 relative z-10">
              {data.howItWorksSteps.map((step, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="relative text-center group"
                >
                  <div className="w-12 h-12 rounded-full bg-slate-900 border border-white/30 text-white font-mono font-bold text-sm flex items-center justify-center mx-auto mb-3 shadow-lg group-hover:border-white group-hover:bg-white group-hover:text-black transition-all duration-300">
                    0{idx + 1}
                  </div>
                  <h4 className="text-xs font-bold text-white mb-1.5 tracking-wider uppercase group-hover:text-blue-400 transition-colors">
                    {step.title}
                  </h4>
                  <p className="text-[11px] sm:text-xs text-white/60 font-light leading-relaxed px-1 sm:px-2">
                    {step.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 06 — INDUSTRIES WE SERVE (INTERACTIVE AMBIENT CONSOLE - ZERO CARDS) */}
      <section className="py-8 lg:py-12 bg-gray-50/50 border-b border-black/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 mb-6">
            <div>
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/5 border border-black/5 text-[10px] font-bold uppercase tracking-widest text-black mb-2">
                <Sparkles className="w-3 h-3 text-black" />
                <span>Sector Integration</span>
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-black tracking-tight leading-[1.1]">
                One Solution.<br className="hidden sm:inline" /> Endless Possibilities.
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-black/60 font-light leading-relaxed max-w-md">
              {data.industriesIntro}
            </p>
          </div>

          {/* Interactive Sector Segmented Tabs (No Cards) */}
          <div className="flex flex-wrap gap-2 mb-6 border-b border-black/10 pb-4">
            {allIndustries.map((ind, idx) => {
              const isActive = activeIndustryIdx === idx;
              return (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setActiveIndustryIdx(idx)}
                  className={`px-4 py-2 rounded-full text-xs font-mono font-bold uppercase tracking-wider transition-all cursor-pointer ${
                    isActive 
                      ? "bg-black text-white shadow-md" 
                      : "bg-white border border-black/10 text-black/60 hover:text-black hover:border-black/30"
                  }`}
                >
                  <span className="opacity-50 mr-1.5">0{idx + 1}</span>
                  {ind.title}
                </button>
              );
            })}
          </div>

          {/* Cinematic Panoramic Stage (Zero Cards, Architectural Canvas) */}
          {(() => {
            const activeInd = allIndustries[activeIndustryIdx] || allIndustries[0];
            return (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center bg-white rounded-3xl p-6 sm:p-8 border border-black/10 shadow-sm">
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
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-black text-white hover:bg-black/80 text-xs font-bold uppercase tracking-wider transition-all w-fit shadow-md active:scale-95"
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
                More Than Technology.<br className="hidden sm:inline" /> Meaningful Outcomes.
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
                  0{idx + 1} // IMPACT
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
          <div className="py-3 px-4 rounded-xl bg-black/[0.02] border border-black/5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-black/70">
              <Cpu className="w-4 h-4 text-black shrink-0" />
              <span>Core Hardware & Software Stack:</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {data.techStack.map((tech, idx) => (
                <span 
                  key={idx} 
                  className="px-3 py-1 rounded-full bg-white border border-black/10 text-[11px] font-mono font-bold text-black/80"
                >
                  {tech}
                </span>
              ))}
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
                See the Solution in Action
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-white/70 font-light leading-relaxed max-w-md">
              {data.projectsIntro}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
            {/* Left: Interactive Project Index List (Zero Cards, Clean Studio Typography) */}
            <div className="lg:col-span-5 flex flex-col divide-y divide-white/10 border-y border-white/10">
              {showcaseProjects.map((proj, idx) => {
                const isActive = activeProjectIdx === idx;
                const num = String(idx + 1).padStart(2, "0");
                return (
                  <button
                    key={idx}
                    type="button"
                    onMouseEnter={() => setActiveProjectIdx(idx)}
                    onClick={() => setActiveProjectIdx(idx)}
                    className={`py-3.5 px-2 text-left transition-all duration-300 flex items-center justify-between group cursor-pointer ${
                      isActive ? "bg-white/[0.08] px-3.5 rounded-xl -mx-1.5" : "hover:bg-white/[0.03]"
                    }`}
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <span className={`text-xs font-mono font-bold transition-colors ${
                        isActive ? "text-white" : "text-white/30 group-hover:text-white/60"
                      }`}>
                        {num}
                      </span>
                      <div className="min-w-0">
                        <span className={`text-[9px] font-mono uppercase tracking-wider block transition-colors ${
                          isActive ? "text-blue-400 font-bold" : "text-white/40"
                        }`}>
                          {proj.industry}
                        </span>
                        <h4 className={`text-sm font-bold tracking-tight truncate transition-colors ${
                          isActive ? "text-white" : "text-white/75 group-hover:text-white"
                        }`}>
                          {proj.title}
                        </h4>
                      </div>
                    </div>
                    <ArrowRight className={`w-4 h-4 shrink-0 transition-all duration-300 ${
                      isActive 
                        ? "text-white translate-x-0.5 opacity-100" 
                        : "text-white/20 opacity-0 group-hover:opacity-60 -translate-x-1 group-hover:translate-x-0"
                    }`} />
                  </button>
                );
              })}
            </div>

            {/* Right: Live Interactive Exhibition Viewport (Stage Terminal) */}
            <div className="lg:col-span-7">
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden bg-slate-950 border border-white/15 shadow-2xl aspect-[16/10] sm:aspect-[16/9] flex flex-col justify-end">
                {/* Background Image with Key Transition */}
                <SafeImage 
                  key={activeProject.img + activeProjectIdx}
                  src={activeProject.img} 
                  alt={activeProject.title} 
                  className="w-full h-full object-cover opacity-60 transition-all duration-700" 
                  containerClassName="w-full h-full absolute inset-0" 
                />
                
                {/* Gradient Vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/45 to-black/10" />

                {/* Overlaid Info */}
                <div className="relative z-10 p-5 sm:p-7">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className="px-2.5 py-0.5 rounded-full bg-white/20 backdrop-blur-md border border-white/20 text-[10px] font-mono font-bold uppercase tracking-widest text-white">
                      {activeProject.industry} Installation
                    </span>
                    <div className="flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-black/60 backdrop-blur-md border border-white/15 text-[10px] text-white/80">
                      <MapPin className="w-3 h-3 text-white/70" />
                      <span>{activeProject.location}</span>
                    </div>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-black text-white mb-1.5 leading-tight tracking-tight">
                    {activeProject.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-white/80 font-light mb-3.5 max-w-xl leading-relaxed line-clamp-2">
                    {activeProject.desc}
                  </p>

                  <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-white/15">
                    <div className="flex flex-wrap gap-1.5">
                      {activeProject.tech.slice(0, 3).map((t, idx) => (
                        <span key={idx} className="px-2 py-0.5 rounded bg-white/10 text-[9px] font-mono text-white/80 border border-white/10">
                          {t}
                        </span>
                      ))}
                    </div>

                    <Link 
                      href={activeProject.href || "/projects"} 
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white text-black hover:bg-gray-200 text-xs font-bold uppercase tracking-wider transition-all shadow-md active:scale-95"
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
      <section className="py-10 lg:py-14 bg-white border-t border-black/10">
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
                  >
                    <div className="flex items-start gap-4 sm:gap-6">
                      <span className={`font-mono text-xs pt-1 transition-colors ${isOpen ? "text-black font-bold" : "text-black/30 group-hover:text-black/60"}`}>
                        /{itemNumber}
                      </span>
                      <span className={`text-base sm:text-lg font-bold transition-colors leading-snug ${isOpen ? "text-black" : "text-black/80 group-hover:text-black"}`}>
                        {faq.q}
                      </span>
                    </div>
                    <div className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 border transition-all duration-300 ${isOpen ? "border-black bg-black text-white rotate-180" : "border-black/15 text-black/60 group-hover:border-black/30"}`}>
                      <ChevronDown className="w-3.5 h-3.5" />
                    </div>
                  </button>

                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      transition={{ duration: 0.25 }}
                      className="pb-5 pl-8 sm:pl-10 text-sm sm:text-base font-light text-black/75 leading-relaxed"
                    >
                      <p className="max-w-3xl">{faq.a}</p>
                    </motion.div>
                  )}
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
