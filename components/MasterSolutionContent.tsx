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

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-black/10">
              {data.whatIsFeatures.map((feat, idx) => (
                <div 
                  key={idx}
                  className="p-4 sm:p-5 rounded-2xl bg-black/[0.02] border border-black/5 hover:border-black/15 hover:bg-black/[0.04] transition-all duration-300"
                >
                  <div className="flex items-center gap-2.5 mb-2">
                    <span className="w-6 h-6 rounded-lg bg-black text-white text-[10px] font-mono font-bold flex items-center justify-center shrink-0">
                      0{idx + 1}
                    </span>
                    <h4 className="text-sm sm:text-base font-bold text-black tracking-tight">{feat.title}</h4>
                  </div>
                  <p className="text-xs sm:text-sm text-black/60 font-light leading-relaxed pl-8">
                    {feat.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 03 — EXPERIENCE SHOWCASE */}
      <section className="py-12 lg:py-16 bg-gray-50/70 border-t border-black/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/5 border border-black/5 text-[10px] font-bold uppercase tracking-widest text-black mb-3">
              <Sparkles className="w-3.5 h-3.5 text-black" />
              <span>Discover What&apos;s Possible</span>
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-black tracking-tight leading-[1.1] mb-3">
              Experience the Possibilities
            </h2>
            <p className="text-sm sm:text-base text-black/70 font-light leading-relaxed max-w-2xl mx-auto">
              {data.experienceIntro}
            </p>
          </div>

          <div className="space-y-6">
            {/* Featured Experience */}
            <Link 
              href="/solutions" 
              className="group block relative rounded-3xl overflow-hidden bg-black aspect-[21/9] sm:aspect-[21/8] border border-black/10 shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              <SafeImage 
                src={data.featuredExperience.img} 
                alt={data.featuredExperience.title} 
                className="w-full h-full object-cover opacity-70 group-hover:opacity-50 group-hover:scale-105 transition-all duration-700 ease-out" 
                containerClassName="w-full h-full" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex items-end p-6 sm:p-10">
                <div className="max-w-2xl text-white">
                  <span className="inline-block px-3 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/20 text-[10px] font-bold uppercase tracking-widest text-white mb-3">
                    {data.featuredExperience.category}
                  </span>
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight mb-2">
                    {data.featuredExperience.title}
                  </h3>
                  <p className="text-sm sm:text-base text-white/80 font-light mb-4 line-clamp-2 max-w-xl">
                    {data.featuredExperience.desc}
                  </p>
                  <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-white group-hover:text-blue-300 transition-colors">
                    <span>Explore {data.featuredExperience.category}</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                  </div>
                </div>
              </div>
            </Link>

            {/* Experience Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {data.experienceCards.map((card, idx) => (
                <Link 
                  key={idx} 
                  href="/solutions" 
                  className="group flex flex-col bg-white rounded-2xl overflow-hidden border border-black/10 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-slate-900 shrink-0">
                    <SafeImage 
                      src={card.img} 
                      alt={card.title} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out" 
                      containerClassName="w-full h-full" 
                    />
                    <span className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-black/60 backdrop-blur-md text-[10px] font-mono font-bold uppercase tracking-wider text-white">
                      {card.category}
                    </span>
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <h4 className="text-base font-bold text-black tracking-tight mb-2 group-hover:text-blue-600 transition-colors">
                      {card.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-black/60 font-light leading-relaxed mb-4 flex-1">
                      {card.desc}
                    </p>
                    <div className="mt-auto flex items-center gap-2 text-xs font-bold text-black group-hover:text-blue-600 transition-colors pt-2">
                      <span className="text-[11px] uppercase tracking-wider">Discover</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            
            <p className="text-center text-xs font-light text-black/40 pt-4 uppercase tracking-widest">
              Every interaction is designed to create memorable experiences that inspire learning, exploration, and meaningful engagement across every environment.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 04 — KEY FEATURES */}
      <section className="py-16 lg:py-20 border-y border-black/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-8">
            <h2 className="text-black mb-4">
              Powerful Features.<br />Exceptional Experiences.
            </h2>
            <p className="text-lg text-black/70 font-light leading-relaxed">
              {data.keyFeaturesIntro}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.keyFeatures.map((feat, idx) => {
              const num = String(idx + 1).padStart(2, "0");
              return (
                <div key={idx} className="group relative p-8 sm:p-10 rounded-[2rem] bg-gray-50/80 border border-black/5 hover:bg-black hover:border-black transition-all duration-500 overflow-hidden flex flex-col hover:shadow-2xl hover:-translate-y-1">
                  <div className="absolute -top-6 -right-6 pointer-events-none select-none transition-transform duration-700 group-hover:scale-110">
                    <span className="text-[12rem] font-black text-black/[0.03] group-hover:text-white/[0.05] leading-none transition-colors duration-500">{num}</span>
                  </div>
                  
                  <div className="relative z-10 flex flex-col h-full">
                    <div className="w-12 h-12 rounded-full border border-black/10 group-hover:border-white/20 flex items-center justify-center mb-8 transition-colors duration-500 bg-white group-hover:bg-white/10">
                       <span className="text-sm font-bold text-black group-hover:text-white transition-colors duration-500">{num}</span>
                    </div>
                    
                    <h4 className="text-black group-hover:text-white mb-4 transition-colors duration-500 pr-8">{feat.title}</h4>
                    <p className="text-base text-black/60 group-hover:text-white/70 font-light leading-relaxed transition-colors duration-500 mt-auto">{feat.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 05 — HOW IT WORKS */}
      <section className="py-16 lg:py-20 bg-black text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeading
            label="INTELLIGENT TECHNOLOGY. INSTANT INTERACTION."
            heading="From Movement to Immersive Experience"
            subheading={data.howItWorksIntro}
            centered
            dark
          />

          <div className="mt-20 relative">
            {/* Connecting Line */}
            <div className="hidden lg:block absolute top-12 left-0 right-0 h-[1px] bg-white/20" />
            
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-8 relative z-10">
              {data.howItWorksSteps.map((step, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="relative text-center"
                >
                  <div className="w-full text-center relative group">
                    <span className="text-7xl font-thin text-white/20 group-hover:text-white transition-colors block mb-8">{idx + 1}</span>
                    <h4 className="text-[10px] text-white mb-3 tracking-[0.2em] uppercase">{step.title}</h4>
                    <p className="text-base text-white/70 font-light leading-relaxed px-4">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 06 — INDUSTRIES WE SERVE */}
      <section className="py-16 lg:py-20 bg-gray-50/50 border-b border-black/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="WHERE INNOVATION MEETS EVERY INDUSTRY"
            heading="One Solution. Endless Possibilities."
            subheading={data.industriesIntro}
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 grid-rows-[300px_300px] lg:grid-rows-[400px_350px] gap-6 mt-16">
            
            {/* Bento Top-Left: Featured Industry (Massive) */}
            <Link href={data.featuredIndustry.href} className="group relative rounded-[2.5rem] overflow-hidden bg-black lg:col-span-8 shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-500">
              <SafeImage src={data.featuredIndustry.img} alt={data.featuredIndustry.title} className="w-full h-full object-cover opacity-80 group-hover:opacity-60 transition-opacity duration-1000 group-hover:scale-105" containerClassName="w-full h-full" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent flex items-end p-8 sm:p-12">
                <div className="w-full max-w-xl text-white">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-4 py-1.5 bg-white/10 backdrop-blur-md rounded-full text-[10px] font-bold uppercase tracking-widest border border-white/20">Featured</span>
                  </div>
                  <h3 className="mb-4">{data.featuredIndustry.title}</h3>
                  <p className="text-base text-white/70 font-light mb-6 line-clamp-2">{data.featuredIndustry.desc}</p>
                  
                  <div className="inline-flex items-center gap-4 group/btn cursor-pointer">
                    <div className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center group-hover/btn:bg-white group-hover/btn:border-white transition-all duration-300">
                      <ArrowRight className="w-4 h-4 text-white group-hover/btn:text-black transition-colors" />
                    </div>
                  </div>
                </div>
              </div>
            </Link>

            {/* Bento Top-Right: Card 1 (Square) */}
            <Link href={data.industryCards[0]?.href || "/"} className="group relative rounded-[2.5rem] overflow-hidden bg-black lg:col-span-4 shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-500">
              <SafeImage src={data.industryCards[0]?.img || ""} alt={data.industryCards[0]?.title || ""} className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-1000 group-hover:scale-110" containerClassName="w-full h-full" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent p-8 flex flex-col justify-end">
                <h4 className="text-2xl font-bold text-white mb-2 group-hover:text-white/80 transition-colors">{data.industryCards[0]?.title}</h4>
                <p className="text-sm text-white/60 font-light line-clamp-2 mb-4">{data.industryCards[0]?.desc}</p>
                <ArrowRight className="w-4 h-4 text-white/40 group-hover:text-white transition-colors" />
              </div>
            </Link>

            {/* Bento Bottom-Left: Card 2 (Wide-ish) */}
            <Link href={data.industryCards[1]?.href || "/"} className="group relative rounded-[2.5rem] overflow-hidden bg-black lg:col-span-5 shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-500">
              <SafeImage src={data.industryCards[1]?.img || ""} alt={data.industryCards[1]?.title || ""} className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-1000 group-hover:scale-110" containerClassName="w-full h-full" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent p-8 flex flex-col justify-end">
                <h4 className="text-2xl font-bold text-white mb-2 group-hover:text-white/80 transition-colors">{data.industryCards[1]?.title}</h4>
                <p className="text-base text-white/70 font-light line-clamp-2 mb-6 max-w-sm">{data.industryCards[1]?.desc}</p>
                <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:border-white transition-colors">
                  <ArrowRight className="w-3.5 h-3.5 text-white/60 group-hover:text-black transition-colors" />
                </div>
              </div>
            </Link>

            {/* Bento Bottom-Right: Card 3 (Very Wide) */}
            <Link href={data.industryCards[2]?.href || "/"} className="group relative rounded-[2.5rem] overflow-hidden bg-black lg:col-span-7 shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-500">
              <SafeImage src={data.industryCards[2]?.img || ""} alt={data.industryCards[2]?.title || ""} className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-1000 group-hover:scale-110" containerClassName="w-full h-full" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-8 sm:p-12 flex flex-col justify-end items-end text-right">
                <h4 className="text-3xl font-bold text-white mb-3 group-hover:text-white/80 transition-colors">{data.industryCards[2]?.title}</h4>
                <p className="text-base text-white/70 font-light line-clamp-2 max-w-md mb-6">{data.industryCards[2]?.desc}</p>
                <span className="text-[10px] font-bold uppercase tracking-widest text-white/40 group-hover:text-white transition-colors">Discover Application <ArrowRight className="inline w-3 h-3 ml-1" /></span>
              </div>
            </Link>

          </div>
        </div>
      </section>

      {/* SECTION 07/08 — TECHNOLOGY & BENEFITS */}
      <section className="py-16 lg:py-20">
        <div className="max-w-[100rem] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="relative w-full rounded-[3rem] overflow-hidden bg-black mb-12 group shadow-sm hover:shadow-2xl transition-shadow duration-700">
            {/* Cinematic Aspect Ratio */}
            <div className="aspect-[4/3] sm:aspect-[21/9] w-full">
              <SafeImage src={data.featuredBenefit.img} alt={data.featuredBenefit.title} className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-[1.5s] group-hover:scale-105" containerClassName="w-full h-full" />
            </div>
            
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-8 sm:p-12 lg:p-16">
              <div className="max-w-4xl text-white">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/50 mb-4 block">More Than Technology — Meaningful Outcomes</span>
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6 leading-[1.1] tracking-tight">{data.featuredBenefit.title}</h2>
                <p className="text-lg sm:text-xl text-white/70 font-light leading-relaxed max-w-2xl">
                  {data.featuredBenefit.desc}
                </p>
              </div>
            </div>
          </div>

          <div className="max-w-[100rem] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-[minmax(180px,auto)_minmax(180px,auto)_minmax(180px,auto)] gap-4">
              {data.benefits.map((b, idx) => {
                const num = String(idx + 1).padStart(2, "0");
                
                // Define the asymmetrical bento styling for up to 6 items
                const styles = [
                  // 0: Massive Anchor (2x2)
                  "md:col-span-2 md:row-span-2 bg-black text-white p-8 lg:p-12 rounded-[2.5rem] flex flex-col justify-end",
                  // 1: Wide Minimalist (2x1)
                  "md:col-span-2 md:row-span-1 bg-gray-50 border border-black/5 p-6 lg:p-8 rounded-[2rem] flex flex-col justify-center",
                  // 2: Tall Pillar (1x2)
                  "md:col-span-1 md:row-span-2 bg-gray-100 p-6 lg:p-8 rounded-[2.5rem] flex flex-col justify-end",
                  // 3: Minimal Square (1x1)
                  "md:col-span-1 md:row-span-1 bg-white border border-black/10 p-6 rounded-[1.5rem] flex flex-col justify-center",
                  // 4: Wide Accent (2x1)
                  "md:col-span-2 md:row-span-1 bg-black/5 p-6 lg:p-8 rounded-[2rem] flex flex-col justify-center",
                  // 5: Dark Square (1x1)
                  "md:col-span-1 md:row-span-1 bg-black text-white p-6 rounded-[1.5rem] flex flex-col justify-center",
                ];
                
                const style = styles[idx % styles.length];
                const isDark = idx === 0 || idx === 5;

                return (
                  <div key={idx} className={`group relative overflow-hidden transition-all duration-700 hover:shadow-2xl hover:-translate-y-1 cursor-default ${style}`}>
                    {/* Architectural Background Number */}
                    <div className="absolute top-4 right-6 pointer-events-none select-none transition-transform duration-1000 group-hover:scale-110">
                      <span className={`text-[4rem] lg:text-[6rem] font-black leading-none ${isDark ? 'text-white/[0.03] group-hover:text-white/[0.08]' : 'text-black/[0.03] group-hover:text-black/[0.08]'} transition-colors duration-500`}>
                        {num}
                      </span>
                    </div>

                    <div className="relative z-10 flex flex-col h-full justify-between">
                      <span className={`text-xl font-thin mb-6 lg:mb-8 block ${isDark ? 'text-white/40' : 'text-black/30'}`}>
                        {num}
                      </span>
                      <div>
                        <h5 className={`mb-3 ${isDark ? 'text-white' : 'text-black'}`}>{b.title}</h5>
                        <p className={`text-sm sm:text-base font-light leading-relaxed max-w-sm ${isDark ? 'text-white/70' : 'text-black/70'}`}>{b.desc}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>          
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Tech Stack Horizontal Scroll/Grid */}
          <div className="p-8 sm:p-12 rounded-[2.5rem] bg-gray-50/50 border border-black/5 mt-24">
            <h4 className="text-[10px] uppercase tracking-[0.2em] text-black/40 mb-8 text-center">Engineered Technology Stack</h4>
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
              {data.techStack.map((tech, idx) => (
                <div key={idx} className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-black/5 shadow-sm text-[11px] font-bold text-black/60 uppercase tracking-widest hover:border-black/20 hover:text-black transition-colors cursor-default">
                  <Cpu className="w-3.5 h-3.5" />
                  <span>{tech}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 09 — FEATURED PROJECTS */}
      <section className="py-16 lg:py-20 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="REAL PROJECTS. REAL IMPACT."
            heading="See the Solution in Action"
            subheading={data.projectsIntro}
            dark
          />

          <div className="relative flex flex-col lg:flex-row border-t border-white/10 mt-16 w-full max-w-[120rem] mx-auto">
            
            {/* Left: Sticky Fullscreen Image (Featured Project) */}
            <div className="w-full lg:w-1/2 lg:sticky lg:top-0 lg:h-screen bg-black overflow-hidden group">
              <div className="absolute inset-0">
                <SafeImage src={data.featuredProject.img} alt={data.featuredProject.title} className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-1000 group-hover:scale-105" containerClassName="w-full h-full" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/10" />
              </div>
              
              <div className="relative z-10 w-full h-full flex flex-col justify-end p-8 lg:p-16 xl:p-24">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/50 mb-4 block">{data.featuredProject.industry}</span>
                <h3 className="text-white mb-6 leading-[1.1]">{data.featuredProject.title}</h3>
                
                <div className="flex items-center gap-2 text-[11px] text-white/70 mb-6">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{data.featuredProject.location}</span>
                </div>
                
                <p className="text-base sm:text-lg text-white/70 font-light mb-10 max-w-xl leading-relaxed">{data.featuredProject.desc}</p>
                
                <div className="flex flex-wrap gap-2 mb-12">
                  {data.featuredProject.tech.map((t, idx) => (
                    <span key={idx} className="px-3 py-1.5 rounded-full bg-white/10 text-[10px] font-bold uppercase tracking-widest border border-white/10 backdrop-blur-sm">{t}</span>
                  ))}
                </div>
                
                <div>
                  <Link href={data.featuredProject.href} className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-wider text-white/70 hover:text-white transition-colors">
                    <span className="border-b border-white/30 pb-1">View Complete Case Study</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Right: Massive Typography Scroll (Other Projects) */}
            <div className="w-full lg:w-1/2 bg-[#050505] flex flex-col">
              {data.projects.map((proj, idx) => (
                <div key={idx} className="group p-8 lg:p-16 xl:p-24 border-b border-white/10 last:border-b-0 hover:bg-white/[0.02] transition-colors min-h-[50vh] flex flex-col justify-center cursor-default">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-white/30 mb-6 block">{proj.industry}</span>
                  <h4 className="text-white mb-6 leading-[1.1] group-hover:-translate-y-1 transition-transform duration-500">{proj.title}</h4>
                  <p className="text-base sm:text-lg text-white/50 font-light mb-12 max-w-xl leading-relaxed group-hover:text-white/70 transition-colors">{proj.desc}</p>
                  <div>
                    <Link href={proj.href} className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-white/40 hover:text-white transition-colors">
                      <span className="border-b border-white/20 hover:border-white/50 transition-colors pb-1">Read Study</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 10 — FAQs */}
      <section className="py-16 lg:py-20 bg-gray-50/50 border-y border-black/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="EVERYTHING YOU NEED TO KNOW"
            heading="Frequently Asked Questions"
            subheading={data.faqsIntro}
            centered
          />

          <div className="space-y-4 mt-16">
            {data.faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              const itemNumber = String(idx + 1).padStart(2, "0");

              return (
                <div
                  key={idx}
                  className={`rounded-3xl border transition-all duration-300 overflow-hidden ${
                    isOpen
                      ? "bg-white border-[#000000] shadow-xl shadow-[#000000]/10 ring-1 ring-[#000000]/30"
                      : "bg-white border-black/10 hover:border-black/20 shadow-sm"
                  }`}
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                    className="w-full p-6 sm:p-7 text-left flex items-start justify-between gap-4 cursor-pointer group"
                  >
                    <div className="flex items-start gap-4">
                      <span className={`text-sm font-extrabold pt-0.5 transition-colors ${isOpen ? "text-black" : "text-black/30 group-hover:text-black/60"}`}>
                        {itemNumber}
                      </span>
                      <span className="text-base sm:text-lg font-bold text-black group-hover:text-black transition-colors leading-snug">
                        {faq.q}
                      </span>
                    </div>
                    <div className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300 ${isOpen ? "bg-black text-white shadow-md rotate-180" : "bg-gray-100 text-black/70 group-hover:bg-gray-200"}`}>
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-6 sm:px-7 pb-7 text-base font-light text-black/80 leading-relaxed border-t border-black/5 pt-4 ml-8 sm:ml-9 space-y-3">
                      <p>{faq.a}</p>
                    </div>
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
