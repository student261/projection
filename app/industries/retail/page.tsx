import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SafeImage from "@/components/SafeImage";
import Link from "next/link";
import { 
  ArrowRight, 
  Sparkles, 
  Activity, 
  Layers, 
  Tv, 
  Cpu, 
  Lightbulb, 
  Compass, 
  Palette, 
  Wrench, 
  ChevronRight,
  Monitor,
  Calendar,
  CheckCircle2,
  Eye,
  Grid2X2,
  Settings,
  Asterisk,
  Crosshair,
  SunMedium,
  BarChart3,
  Shield,
  Users,
  Clock,
  Globe,
  ShoppingBag
} from "lucide-react";
import FAQAccordion from "../[slug]/FAQAccordion";
import Curved3DCarousel from "@/components/Curved3DCarousel";
import { retail } from "@/data/industries/retail";

export const metadata: Metadata = {
  title: "Interactive Retail Solutions for Stores and Showrooms",
  description: "Turn shop windows, floors and showrooms into spaces shoppers stop, play and explore, with interactive surfaces, immersive displays, AI and games.",
  alternates: {
    canonical: "/industries/retail",
  },
  openGraph: {
    title: "Interactive Retail Solutions for Stores and Showrooms",
    description: "Turn shop windows, floors and showrooms into spaces shoppers stop, play and explore, with interactive surfaces, immersive displays, AI and games.",
    url: "/industries/retail",
    type: "website",
    images: [
      {
        url: "/images/industry_retail_hero.jpg",
        width: 1200,
        height: 630,
        alt: "Interactive Retail Solutions for Stores and Showrooms",
      },
    ],
  },
};

export default function RetailIndustryPage() {
  const data = retail;

  const solutions = [
    {
      title: data.solutions.items[0]?.title || "Interactive Spaces",
      desc: data.solutions.items[0]?.desc || "Turn shop windows, floors and fitting room surfaces into displays that respond to movement and touch.",
      href: "/solutions/interactive-projection",
      cta: "Explore Interactive Spaces",
      img: "/images/interactive_spaces_hero.jpg",
    },
    {
      title: data.solutions.items[1]?.title || "Immersive Environments",
      desc: data.solutions.items[1]?.desc || "Projection mapping and large format LED displays for flagship launches, storefronts and product reveals.",
      href: "/solutions/immersive-environment",
      cta: "Explore Immersive Environments",
      img: "/images/cat_immersive_dome.jpg",
    },
    {
      title: data.solutions.items[2]?.title || "AI Experiences",
      desc: data.solutions.items[2]?.desc || "AI avatars or AI photo experiences at the entrance, counter or fitting room.",
      href: "/solutions/ai-experience",
      cta: "Explore AI Experiences",
      img: "/images/ai_receptionist_concierge.jpg",
    },
    {
      title: data.solutions.items[3]?.title || "Interactive Engagement",
      desc: data.solutions.items[3]?.desc || "Motion games and brand gamification that give shoppers a reason to stop at the door.",
      href: "/solutions/interactive-engagement",
      cta: "Explore Interactive Engagement",
      img: "/images/interactive_strike_wall.jpg",
    },
  ];

  const howItWorksSteps = [
    {
      num: "01",
      title: "Review the Space",
      desc: "We look at the storefront, floor, lighting and layout.",
    },
    {
      num: "02",
      title: "Plan the Experience",
      desc: "The interaction, visual layout and content are planned around the brand and the campaign.",
    },
    {
      num: "03",
      title: "Build the Content",
      desc: "Visuals and activities are created to match the brand, products and campaign goal.",
    },
    {
      num: "04",
      title: "Install and Calibrate",
      desc: "The system is installed and calibrated to the exact space and surfaces.",
    },
  ];

  const retailTechItems = [
    {
      icon: Crosshair,
      title: "Motion Tracking",
      desc: "Detects movement and interaction near windows, floors, walls and displays.",
    },
    {
      icon: SunMedium,
      title: "High Brightness Projection",
      desc: "Engineered for bright retail spaces and clear visuals.",
    },
    {
      icon: Layers,
      title: "Interactive Surfaces",
      desc: "Works across floors, walls, ceilings, tables, windows and mirrors.",
    },
    {
      icon: Settings,
      title: "Content Management",
      desc: "Easily update and schedule experiences from a central platform.",
    },
    {
      icon: BarChart3,
      title: "Analytics",
      desc: "Understand engagement and improve performance over time.",
    },
    {
      icon: Shield,
      title: "Reliable Operation",
      desc: "Built for consistent performance in public spaces.",
    },
  ];

  const deliveryStages = [
    {
      stage: "Stage 01",
      title: "Plan & Assess",
      desc: "We review the space, brand goals and campaign requirements.",
      img: "/images/corporate_lobby_wall.jpg",
    },
    {
      stage: "Stage 02",
      title: "Build & Install",
      desc: "Hardware setup, calibration and content configuration on site.",
      img: "/images/technician_calibrating_projection.jpg",
    },
    {
      stage: "Stage 03",
      title: "Train & Support",
      desc: "Store team training plus ongoing maintenance and content updates.",
      img: "/images/ai_receptionist_concierge.jpg",
    },
  ];

  const techIcons = [Activity, Lightbulb, Tv, Cpu, Layers, Monitor];

  return (
    <main className="min-h-screen bg-white text-black flex flex-col selection:bg-black selection:text-white">
      <Navbar />

      {/* SECTION 1: HERO */}
      <section className="relative h-screen min-h-[580px] flex flex-col justify-between items-center overflow-hidden pt-24 sm:pt-28 pb-8 bg-black text-white">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <SafeImage
            src={data.hero.img}
            alt={data.hero.title}
            className="w-full h-full object-cover opacity-55 scale-105"
            containerClassName="w-full h-full bg-black"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black pointer-events-none" />
        </div>

        <div className="my-auto relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
          <div className="inline-flex items-center justify-center gap-2 text-[10px] sm:text-[11px] font-mono font-semibold uppercase tracking-[0.25em] text-white/70 mb-3">
            <Sparkles className="w-3.5 h-3.5 text-white/70" />
            <span>{data.hero.eyebrow}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.08] max-w-4xl mx-auto mb-4">
            {data.hero.title}
          </h1>

          <p className="text-sm sm:text-base lg:text-lg text-white/80 font-light max-w-2xl mx-auto mb-8 leading-relaxed">
            {data.hero.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 w-full sm:w-auto">
            <Link
              href="#solutions"
              className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-white text-black text-xs sm:text-sm font-bold uppercase tracking-wider hover:bg-neutral-200 transition-all active:scale-95 shadow-xl w-full sm:w-auto"
            >
              <span>Explore Retail Solutions</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-white/10 text-white hover:bg-white/20 border border-white/20 backdrop-blur-md text-xs sm:text-sm font-bold uppercase tracking-wider transition-all active:scale-95 w-full sm:w-auto"
            >
              <span>Discuss Your Project</span>
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 2: THE CHALLENGE (Dark Banner Header + Modern Architectural Grid) */}
      <section className="w-full">
        {/* Top Dark Header Banner */}
        <div className="relative w-full overflow-hidden bg-black text-white py-8 sm:py-10 lg:py-12 flex items-center">
          <div className="absolute inset-0 z-0">
            <SafeImage
              src={data.challenges.img || "/images/retail_challenge_banner.jpg"}
              alt={data.challenges.title}
              className="w-full h-full object-cover opacity-40"
              containerClassName="w-full h-full bg-black"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/45 to-black/85 pointer-events-none" />
          </div>

          <div className="relative z-10 max-w-7xl 2xl:max-w-[1536px] w-full mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 lg:gap-12">
              <div className="max-w-2xl">
                <div className="flex items-center gap-2.5 mb-2.5 sm:mb-3">
                  <span className="w-6 sm:w-8 h-[2px] bg-white"></span>
                  <span className="text-[10px] sm:text-[11px] font-mono font-bold uppercase tracking-[0.25em] text-white">
                    THE CHALLENGE
                  </span>
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-[40px] xl:text-[44px] tracking-tight leading-[1.08] text-white">
                  <span className="font-extrabold block">{data.challenges.title}</span>
                </h2>
              </div>

              <div className="lg:max-w-md xl:max-w-lg lg:text-left">
                <p className="text-xs sm:text-sm lg:text-[14px] text-white/80 font-light leading-relaxed">
                  {data.challenges.intro || "Traditional store windows and static merchandising struggle to capture foot traffic and convert digital-native shoppers."}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Architectural 3-Column Challenge Grid */}
        <div className="bg-white pt-8 sm:pt-10 lg:pt-12 pb-12 sm:pb-14 lg:pb-16 text-black">
          <div className="max-w-7xl 2xl:max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 lg:gap-x-12 gap-y-8 sm:gap-y-10">
              {data.challenges.items.map((item, idx) => {
                const challengeIcons = [Users, Clock, Globe, Layers, BarChart3, Sparkles];
                const IconComponent = challengeIcons[idx % challengeIcons.length];
                const itemNum = String(idx + 1).padStart(2, "0");

                return (
                  <div key={idx} className="flex flex-col">
                    <div className="flex items-center gap-2 mb-2.5">
                      <IconComponent className="w-4 h-4 text-neutral-800 stroke-[1.75]" />
                      <span className="font-mono text-xs font-semibold text-neutral-400">
                        {itemNum}
                      </span>
                    </div>

                    <h3 className="text-base sm:text-[17px] lg:text-lg font-bold text-neutral-900 tracking-tight leading-snug mb-2">
                      {item.title}
                    </h3>

                    <p className="text-xs sm:text-[13px] text-neutral-500 font-light leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: OUR VISION */}
      <section className="py-12 sm:py-14 lg:py-16 bg-white text-black border-b border-neutral-100">
        <div className="max-w-7xl 2xl:max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-6 space-y-4">
              <div>
                <span className="text-[10px] sm:text-[11px] font-mono tracking-[0.25em] text-black/60 uppercase block mb-2">
                  OUR VISION
                </span>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight leading-tight text-black">
                  {data.vision.title}
                </h2>
              </div>
              <p className="text-sm sm:text-base lg:text-lg text-neutral-600 font-light leading-relaxed">
                {data.vision.intro}
              </p>
              <div className="pt-2 border-l-2 border-black/40 pl-4 my-2">
                <p className="text-sm sm:text-base font-medium text-black italic">
                  &ldquo;{data.vision.quote}&rdquo;
                </p>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative aspect-[16/11] rounded-2xl overflow-hidden bg-neutral-200 shadow-xl">
                <SafeImage
                  src={data.vision.img || "/images/retail_interactive_showcase.jpg"}
                  alt={data.vision.title}
                  className="w-full h-full object-cover"
                  containerClassName="w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: APPLICABLE SOLUTIONS FOR RETAIL */}
      <section id="solutions" className="py-12 sm:py-14 lg:py-16 bg-white text-black scroll-mt-20">
        <div className="max-w-7xl 2xl:max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6 sm:pb-8 border-b border-black/15 mb-8">
            <div className="max-w-2xl">
              <span className="text-[10px] sm:text-[11px] font-mono tracking-[0.25em] text-neutral-400 uppercase block mb-2 sm:mb-2.5">
                SOLUTIONS FOR YOUR SPACE
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight leading-tight text-black">
                {data.solutions.title}
              </h2>
            </div>
            <p className="text-xs sm:text-sm lg:text-base text-neutral-500 font-light max-w-md leading-relaxed">
              {data.solutions.intro}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-8 xl:gap-10">
            {solutions.map((item, idx) => (
              <div key={idx} className="group flex flex-col justify-between h-full">
                <div>
                  <div className="relative aspect-[16/10] rounded-xl overflow-hidden bg-neutral-100 mb-4">
                    <SafeImage
                      src={item.img}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      containerClassName="w-full h-full"
                    />
                  </div>

                  <h3 className="text-lg font-bold text-black tracking-tight group-hover:text-neutral-600 transition-colors mb-2">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-neutral-600 font-light leading-relaxed mb-6">
                    {item.desc}
                  </p>
                </div>

                <div>
                  <Link
                    href={item.href}
                    className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-black group-hover:text-neutral-600 transition-colors pt-2 border-t border-black/10 w-full justify-between"
                  >
                    <span>{item.cta}</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform duration-300" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: RELATED USE CASES (Clean Architectural Split) */}
      <section className="relative w-full bg-black text-white py-12 sm:py-14 lg:py-16 border-t border-b border-neutral-900">
        <div className="max-w-7xl 2xl:max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10 sm:mb-12">
            <span className="text-[10px] sm:text-[11px] font-mono font-medium tracking-[0.25em] text-neutral-400 uppercase block mb-2 sm:mb-3">
              {data.useCases?.label || "SEE IT IN CONTEXT"}
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight">
              {data.useCases?.title || "How Retailers Use These Solutions"}
            </h2>
            <p className="text-xs sm:text-sm lg:text-base text-neutral-400 font-light mt-2 max-w-xl leading-relaxed">
              {data.useCases?.intro || "This industry connects to two of our use cases:"}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-0">
            {data.useCases?.items.map((item, idx) => {
              const icons = [ShoppingBag, Sparkles];
              const IconComponent = icons[idx % icons.length];
              const itemNum = String(idx + 1).padStart(2, "0");

              return (
                <div
                  key={idx}
                  className={`flex flex-col justify-between ${
                    idx === 0
                      ? "md:pr-10 lg:pr-16"
                      : "md:border-l md:border-neutral-800 md:pl-10 lg:pl-16"
                  }`}
                >
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-2.5 mb-2">
                      <IconComponent className="w-5 h-5 text-neutral-300 stroke-[1.5]" />
                      <span className="font-mono text-xs font-semibold text-neutral-500">
                        {itemNum}
                      </span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight leading-snug">
                      {item.title}
                    </h3>

                    <p className="text-sm sm:text-base text-neutral-400 font-light leading-relaxed max-w-xl">
                      {item.desc}
                    </p>
                  </div>

                  <div>
                    <Link
                      href={item.href}
                      className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-wider text-white hover:text-neutral-300 transition-colors group"
                    >
                      <span>{item.cta}</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 5B: EXPERIENCE IDEAS (Curved 3D Carousel) */}
      <section id="experiences" className="pt-12 sm:pt-14 lg:pt-16 pb-12 sm:pb-14 lg:pb-16 bg-black text-white overflow-hidden scroll-mt-24">
        <div className="max-w-7xl 2xl:max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 mb-2 sm:mb-3">
          <div className="max-w-3xl">
            <span className="text-[10px] sm:text-[11px] font-mono tracking-[0.25em] text-white/60 uppercase block mb-2">
              EXPERIENCE IDEAS
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight leading-tight text-white">
              {data.experiences.title}
            </h2>
            <p className="text-sm sm:text-base text-neutral-400 font-light mt-2 max-w-2xl leading-relaxed">
              {data.experiences.intro}
            </p>
          </div>
        </div>

        <div className="w-full max-w-[1600px] mx-auto px-2 sm:px-4 lg:px-6">
          <Curved3DCarousel items={data.experiences.items} />
        </div>
      </section>

      {/* SECTION 6: HOW IT WORKS (Matching Reference Design) */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white text-black">
        <div className="max-w-7xl 2xl:max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 xl:gap-12 items-start">
            {/* Left Header Column */}
            <div className="lg:col-span-4 xl:col-span-4 flex flex-col items-start">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-[10px] sm:text-[11px] font-mono tracking-[0.25em] text-neutral-400 uppercase">
                  {data.howItWorks?.label || "HOW IT WORKS"}
                </span>
                <span className="w-10 sm:w-12 h-[1px] bg-neutral-300"></span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-[42px] xl:text-[46px] font-bold tracking-tight text-neutral-900 leading-[1.12] mb-4">
                From Space to <br />
                Retail Experience
              </h2>
              <p className="text-xs sm:text-sm text-neutral-500 font-light leading-relaxed max-w-sm">
                We turn ordinary spaces into interactive environments that attract attention and bring your brand to life.
              </p>
            </div>

            {/* Right Steps Grid */}
            <div className="lg:col-span-8 xl:col-span-8 flex flex-col justify-between">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-8 pt-1">
                {howItWorksSteps.map((step, idx) => (
                  <div key={idx} className="flex flex-col items-start">
                    <div className="flex items-center gap-2.5 mb-4">
                      <span className="font-mono text-2xl lg:text-3xl font-bold text-neutral-400 leading-none select-none">
                        {step.num}
                      </span>
                      <span className="w-8 sm:w-10 h-[1px] bg-neutral-300"></span>
                    </div>

                    <h3 className="text-base sm:text-lg font-bold text-neutral-900 leading-snug mb-2">
                      {step.title}
                    </h3>

                    <p className="text-xs text-neutral-500 font-light leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                ))}
              </div>

              {/* Undulating Curve with terminating dot */}
              <div className="hidden lg:block mt-12 w-full">
                <svg 
                  viewBox="0 0 900 60" 
                  fill="none" 
                  className="w-full h-10 overflow-visible"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M 20 20 C 140 20, 200 48, 320 46 C 440 44, 520 22, 640 24 C 740 26, 820 40, 880 34"
                    stroke="#D8D3C8"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                  />
                  <circle cx="880" cy="34" r="2.5" fill="#171717" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: WHY IT WORKS (Matching Reference Design) */}
      <section className="py-14 sm:py-16 lg:py-20 bg-[#030508] text-white relative overflow-hidden">
        {/* Ambient Glow and Optical Cyan Crescent Arc */}
        <div className="absolute top-0 right-0 w-[55%] h-full pointer-events-none overflow-hidden select-none">
          <div 
            className="absolute -top-20 right-0 w-[600px] h-[550px] rounded-full blur-[140px] opacity-25 pointer-events-none"
            style={{
              background: "radial-gradient(circle, rgba(56, 189, 248, 0.45) 0%, rgba(3, 105, 161, 0.2) 45%, transparent 70%)"
            }}
          />
          <svg 
            viewBox="0 0 700 450" 
            fill="none" 
            className="w-full h-full object-cover"
            preserveAspectRatio="xMaxYMin meet"
          >
            <defs>
              <filter id="arcGlow7" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="5" result="blur1" />
                <feGaussianBlur stdDeviation="14" result="blur2" />
                <feMerge>
                  <feMergeNode in="blur2" />
                  <feMergeNode in="blur1" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
              <linearGradient id="arcGlowGrad" x1="1" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#ffffff" stopOpacity="0.95" />
                <stop offset="25%" stopColor="#38bdf8" stopOpacity="0.85" />
                <stop offset="65%" stopColor="#0284c7" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#0369a1" stopOpacity="0" />
              </linearGradient>
              <linearGradient id="arcSoftGrad7" x1="1" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.35" />
                <stop offset="50%" stopColor="#0284c7" stopOpacity="0.12" />
                <stop offset="100%" stopColor="#0369a1" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path
              d="M 680 -40 C 560 60, 410 180, 320 380 C 290 440, 270 480, 250 520"
              stroke="url(#arcSoftGrad7)"
              strokeWidth="32"
              strokeLinecap="round"
              filter="url(#arcGlow7)"
            />
            <path
              d="M 680 -40 C 560 60, 410 180, 320 380 C 290 440, 270 480, 250 520"
              stroke="url(#arcGlowGrad)"
              strokeWidth="2"
              strokeLinecap="round"
              filter="url(#arcGlow7)"
            />
          </svg>
        </div>

        <div className="max-w-7xl 2xl:max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header Row */}
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 mb-10 sm:mb-12">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="w-[1.5px] h-3.5 bg-neutral-400 inline-block"></span>
                <span className="text-[10px] sm:text-[11px] font-mono tracking-[0.25em] text-neutral-400 uppercase">
                  WHY IT WORKS
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-[44px] xl:text-[48px] font-bold tracking-tight text-white leading-[1.12]">
                Benefits for Retailers <br className="hidden sm:inline" />
                and Shoppers
              </h2>
            </div>

            <div className="flex items-start gap-4 lg:pt-8 max-w-md">
              <span className="w-10 sm:w-12 h-[1px] bg-neutral-700 shrink-0 mt-2.5"></span>
              <p className="text-xs sm:text-sm text-neutral-400 font-light leading-relaxed">
                Interactive experiences help you create stronger connections, increase engagement and turn more visitors into customers.
              </p>
            </div>
          </div>

          {/* 4 Columns with Thin Hairline Dividers */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0">
            {data.benefits.items.map((item, idx) => (
              <div 
                key={idx} 
                className={`flex flex-col ${
                  idx === 0 
                    ? "lg:pr-8 xl:pr-10" 
                    : "lg:border-l lg:border-white/10 lg:pl-8 xl:pl-10"
                }`}
              >
                <span className="font-mono text-xs font-bold text-neutral-400 block mb-2">
                  0{idx + 1}
                </span>
                <h3 className="text-base sm:text-lg font-bold text-white leading-snug mb-2">
                  {item.title}
                </h3>
                <p className="text-xs text-neutral-400 font-light leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 8: THE TECHNOLOGY (Matching Reference Design) */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white text-black relative overflow-hidden">
        {/* Right 3D Parametric Ribs Vector Art */}
        <div className="absolute top-0 right-0 w-[42%] h-full pointer-events-none overflow-hidden select-none hidden md:block">
          <svg
            viewBox="0 0 500 500"
            fill="none"
            className="w-full h-full object-cover object-right"
            preserveAspectRatio="xMaxYMid meet"
          >
            <defs>
              <linearGradient id="finGrad1" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#F7F6F3" stopOpacity="0.4" />
                <stop offset="50%" stopColor="#E5E0D7" stopOpacity="0.75" />
                <stop offset="100%" stopColor="#F9F8F6" stopOpacity="0.2" />
              </linearGradient>
            </defs>
            <path
              d="M 520 20 C 440 80, 390 180, 400 320 C 410 420, 480 500, 520 540"
              fill="url(#finGrad1)"
              opacity="0.9"
            />
            <path
              d="M 530 60 C 460 120, 420 210, 430 330 C 440 420, 490 490, 530 520"
              stroke="#E2DDD5"
              strokeWidth="24"
              strokeLinecap="round"
              opacity="0.8"
            />
            <path
              d="M 540 100 C 480 160, 445 240, 455 340 C 465 420, 505 475, 540 500"
              stroke="#DCD6CC"
              strokeWidth="18"
              strokeLinecap="round"
              opacity="0.85"
            />
            <path
              d="M 550 140 C 500 195, 470 265, 480 350 C 490 415, 520 460, 550 480"
              stroke="#E7E2D9"
              strokeWidth="14"
              strokeLinecap="round"
              opacity="0.85"
            />
            <path
              d="M 560 180 C 520 230, 495 290, 502 360 C 510 410, 535 445, 560 460"
              stroke="#EDE9E1"
              strokeWidth="10"
              strokeLinecap="round"
              opacity="0.8"
            />
            <path
              d="M 570 220 C 538 260, 518 310, 524 370 C 530 405, 548 430, 570 440"
              stroke="#F2EFEB"
              strokeWidth="6"
              strokeLinecap="round"
              opacity="0.8"
            />
          </svg>
        </div>

        <div className="max-w-7xl 2xl:max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 xl:gap-12 items-start">
            {/* Left Header Column */}
            <div className="lg:col-span-4 xl:col-span-4 flex flex-col items-start">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-[10px] sm:text-[11px] font-mono tracking-[0.25em] text-neutral-400 uppercase">
                  THE TECHNOLOGY
                </span>
                <span className="w-10 sm:w-12 h-[1px] bg-neutral-300"></span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-[42px] xl:text-[46px] font-bold tracking-tight text-neutral-900 leading-[1.12] mb-4">
                Technology Built for <br />
                Retail Spaces
              </h2>
              <p className="text-xs sm:text-sm text-neutral-500 font-light leading-relaxed max-w-sm">
                We combine projection, sensors, software and content to create interactive experiences that work in real spaces.
              </p>
            </div>

            {/* Right 3x2 Grid */}
            <div className="lg:col-span-8 xl:col-span-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 xl:gap-x-10 gap-y-10 lg:gap-y-12">
                {retailTechItems.map((item, idx) => {
                  const IconComponent = item.icon;
                  return (
                    <div key={idx} className="flex flex-col items-start">
                      <IconComponent className="w-5 h-5 text-neutral-800 stroke-[1.5] mb-3" />
                      <h3 className="text-base sm:text-lg font-bold text-neutral-900 leading-snug mb-1.5">
                        {item.title}
                      </h3>
                      <p className="text-xs text-neutral-500 font-light leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 9: HOW WE DELIVER */}
      <section className="py-12 sm:py-14 lg:py-16 bg-white text-black border-t border-neutral-100">
        <div className="max-w-7xl 2xl:max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-6 sm:mb-8">
            <span className="text-[10px] sm:text-[11px] font-mono tracking-[0.25em] text-neutral-400 uppercase block mb-2 sm:mb-3">
              OUR PROCESS
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight leading-tight text-neutral-900">
              How We Deliver Every Retail Installation
            </h2>
            <p className="text-xs sm:text-sm text-neutral-500 font-light leading-relaxed max-w-xl mt-2">
              From preliminary space surveying through on-site hardware commissioning and post-launch staff enablement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
            {deliveryStages.map((stage, idx) => (
              <div key={idx} className="group flex flex-col space-y-4">
                <div className="relative aspect-[16/10] rounded-xl overflow-hidden bg-neutral-100">
                  <SafeImage
                    src={stage.img}
                    alt={stage.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    containerClassName="w-full h-full"
                  />
                </div>

                <div className="space-y-1.5 pt-1">
                  <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-neutral-500 block">
                    {stage.stage}
                  </span>
                  <h3 className="text-base sm:text-lg font-bold text-neutral-900 tracking-tight leading-snug group-hover:text-black transition-colors">
                    {stage.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-600 font-light leading-relaxed">
                    {stage.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 10: WHY CHOOSE PROJECTION (Editorial Architectural Showcase) */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white text-black border-t border-neutral-100">
        <div className="max-w-7xl 2xl:max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Eyebrow & Heading */}
          <div className="max-w-3xl mb-8 sm:mb-10 lg:mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-[10px] sm:text-[11px] font-mono tracking-[0.25em] text-neutral-400 uppercase">
                {data.whyChooseUs?.label || "WHY PROJECTION"}
              </span>
              <span className="w-10 sm:w-12 h-[1px] bg-neutral-300"></span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] xl:text-[46px] font-bold tracking-tight text-neutral-900 leading-[1.12] mb-4">
              {data.whyChooseUs?.title || "Why Retailers Choose Projection"}
            </h2>
            <p className="text-xs sm:text-sm text-neutral-500 font-light leading-relaxed max-w-xl">
              Engineered specifically for the demands of retail: autonomous content management, unified multi-format hardware, and launch-date dependability.
            </p>
          </div>

          {/* 3 Columns separated by fine vertical hairlines */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-0">
            {data.whyChooseUs?.items.map((item, idx) => {
              const icons = [Layers, Monitor, Calendar];
              const IconComponent = icons[idx % icons.length];

              return (
                <div 
                  key={idx} 
                  className={`flex flex-col ${
                    idx === 0 
                      ? "md:pr-8 lg:pr-12 xl:pr-14" 
                      : "md:border-l md:border-neutral-200/80 md:pl-8 lg:pl-12 xl:pl-14"
                  }`}
                >
                  <div className="flex items-center justify-between mb-6 pb-4 border-b border-neutral-100">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full border border-neutral-200 bg-neutral-50 flex items-center justify-center text-neutral-800 shrink-0">
                        <IconComponent className="w-5 h-5 text-neutral-800 stroke-[1.5]" />
                      </div>
                      <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-neutral-400">
                        0{idx + 1}
                      </span>
                    </div>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-neutral-900 tracking-tight leading-snug mb-2.5">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-neutral-500 font-light leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 11: FAQ */}
      <section className="py-12 sm:py-14 lg:py-16 bg-white text-black border-t border-neutral-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6 sm:mb-8">
            <span className="text-[10px] sm:text-[11px] font-mono tracking-[0.25em] text-black/60 uppercase block mb-2">
              COMMON QUESTIONS
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight leading-tight text-black">
              {data.faqs.title}
            </h2>
          </div>

          <div className="border-t border-black/15">
            <FAQAccordion faqs={data.faqs.items} />
          </div>
        </div>
      </section>

      {/* SECTION 12: FINAL CTA */}
      <section className="relative py-14 sm:py-16 lg:py-20 overflow-hidden bg-black text-white">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <SafeImage
            src={data.cta?.img || "/images/industry_retail_hero.jpg"}
            alt={data.cta?.title || "Retail Interactive Experience"}
            className="w-full h-full object-cover opacity-35"
            containerClassName="w-full h-full bg-black"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent pointer-events-none" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight leading-tight mb-4">
            {data.cta?.title || "Give Shoppers a Reason to Stop"}
          </h2>
          <p className="text-sm sm:text-base text-white/80 font-light max-w-2xl mx-auto mb-6 leading-relaxed">
            {data.cta?.subtitle || "Tell us about your store and what you want shoppers to do."}
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2.5 px-8 py-3.5 sm:py-4 rounded-full bg-white text-black text-xs sm:text-sm font-bold uppercase tracking-wider hover:bg-neutral-200 transition-all duration-300 active:scale-95 shadow-2xl"
          >
            <span>{data.cta?.buttonText || "Discuss Your Retail Project"}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
