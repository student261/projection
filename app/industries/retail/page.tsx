import type { Metadata } from "next";
import { Playfair_Display } from "next/font/google";
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
  Asterisk
} from "lucide-react";
import FAQAccordion from "../[slug]/FAQAccordion";
import Curved3DCarousel from "@/components/Curved3DCarousel";
import { retail } from "@/data/industries/retail";

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
});

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
      desc: "We look at the storefront, floor, lighting and layout to understand your space and goals.",
      action: "SPACE ANALYSIS",
      icon: Eye,
    },
    {
      num: "02",
      title: "Plan the Experience",
      desc: "The interaction, visual layout and content are planned around your brand and campaign.",
      action: "CREATIVE PLANNING",
      icon: Grid2X2,
    },
    {
      num: "03",
      title: "Build the Content",
      desc: "Visuals and activities are created to match your brand, products and campaign goal.",
      action: "CONTENT CREATION",
      icon: Settings,
    },
    {
      num: "04",
      title: "Install and Calibrate",
      desc: "The system is installed and calibrated to the exact space and surfaces.",
      action: "ON SITE SETUP",
      icon: Asterisk,
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

      {/* SECTION 2: THE CHALLENGE (Dark Banner Header + Numbered Grid) */}
      <section className="w-full">
        {/* Top Dark Header Banner */}
        <div className="relative w-full overflow-hidden bg-black text-white py-8 sm:py-10 lg:py-12 flex items-center">
          <div className="absolute inset-0 z-0">
            <SafeImage
              src={data.hero.img}
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
            </div>
          </div>
        </div>

        {/* 2-Column Challenge Grid */}
        <div className="bg-white pt-8 pb-12 sm:pt-9 sm:pb-16 text-black">
          <div className="max-w-7xl 2xl:max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {data.challenges.items.map((item, idx) => {
                const isLeftColumn = idx % 2 === 0;
                const rowIndex = Math.floor(idx / 2);
                const isFirstRow = rowIndex === 0;
                const totalRows = Math.ceil(data.challenges.items.length / 2);
                const isLastRow = rowIndex === totalRows - 1;
                const isLastItem = idx === data.challenges.items.length - 1;

                return (
                  <div
                    key={idx}
                    className={`flex items-start gap-3.5 sm:gap-5 ${
                      isLeftColumn
                        ? "pr-0 lg:pr-10 xl:pr-12 lg:border-r border-neutral-200"
                        : "pl-0 lg:pl-10 xl:pl-12"
                    } ${
                      isFirstRow
                        ? "pt-0 pb-6 sm:pb-7 lg:pb-8"
                        : isLastRow
                        ? "pt-6 sm:pt-7 lg:pt-8 pb-0"
                        : "py-6 sm:py-7 lg:py-8"
                    } ${
                      !isLastRow
                        ? "border-b border-neutral-200"
                        : !isLastItem
                        ? "max-lg:border-b max-lg:border-neutral-200"
                        : ""
                    }`}
                  >
                    {/* Number Badge */}
                    <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full shrink-0 flex items-center justify-center bg-neutral-100 text-neutral-600">
                      <span className="text-sm sm:text-base font-bold font-mono">0{idx + 1}</span>
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0 space-y-1">
                      <h3 className="text-base sm:text-[17px] lg:text-lg font-bold text-neutral-900 tracking-tight leading-snug">
                        {item.title}
                      </h3>
                      <p className="text-xs sm:text-[13px] text-neutral-500 font-normal leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: OUR VISION */}
      <section className="py-14 sm:py-16 lg:py-20 bg-[#F8F6F2] text-black">
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
      <section id="solutions" className="py-14 sm:py-16 lg:py-20 bg-white text-black scroll-mt-20">
        <div className="max-w-7xl 2xl:max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6 sm:pb-8 border-b border-black/15 mb-8 sm:mb-10">
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

      {/* SECTION 5: RELATED USE CASES */}
      <section className="relative w-full overflow-hidden bg-black text-white py-12 sm:py-16 lg:py-20">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <SafeImage
            src="/images/retail_interactive_showcase.jpg"
            alt="Retail Experiences and Brand Activations"
            className="w-full h-full object-cover opacity-20"
            containerClassName="w-full h-full bg-black"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 to-black pointer-events-none" />
        </div>

        <div className="relative z-10 max-w-7xl 2xl:max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10 sm:mb-12">
            <span className="text-[10px] sm:text-[11px] font-mono font-medium tracking-[0.2em] text-neutral-400 uppercase block mb-2 sm:mb-3">
              {data.useCases?.label || "SEE IT IN CONTEXT"}
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight">
              {data.useCases?.title || "How Retailers Use These Solutions"}
            </h2>
            <p className="text-xs sm:text-sm lg:text-base text-neutral-400 font-light mt-2 max-w-xl leading-relaxed">
              {data.useCases?.intro || "This industry connects to two of our use cases:"}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {data.useCases?.items.map((item, idx) => (
              <div 
                key={idx} 
                className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 flex flex-col justify-between hover:bg-white/10 transition-colors duration-300"
              >
                <div className="space-y-3 mb-6">
                  <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-white/60 block">
                    USE CASE 0{idx + 1}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div>
                  <Link
                    href={item.href}
                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-white hover:text-white/80 transition-colors"
                  >
                    <span>{item.cta}</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5B: EXPERIENCE IDEAS (Curved 3D Carousel) */}
      <section className="pt-10 sm:pt-14 lg:pt-16 pb-12 sm:pb-16 lg:pb-20 bg-black text-white overflow-hidden">
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
      <section className="py-20 sm:py-24 lg:py-28 bg-[#FAF8F5] text-black">
        <div className="max-w-7xl 2xl:max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="max-w-3xl mb-14 sm:mb-16 lg:mb-20">
            <div className="flex items-center gap-3.5 mb-4">
              <span className="text-[10px] sm:text-[11px] font-mono tracking-[0.25em] text-neutral-500 uppercase">
                {data.howItWorks?.label || "HOW IT WORKS"}
              </span>
              <span className="w-16 h-[1px] bg-neutral-300"></span>
            </div>
            <h2 className={`${playfair.className} font-serif text-3xl sm:text-5xl lg:text-[54px] font-normal tracking-tight text-neutral-900 leading-[1.08] mb-4`}>
              {data.howItWorks?.title || "From Space to Retail Experience"}
            </h2>
            <p className="text-xs sm:text-sm lg:text-base text-neutral-500 font-light max-w-xl leading-relaxed">
              We turn ordinary spaces into interactive environments that attract attention and bring your brand to life.
            </p>
          </div>

          {/* Desktop Flow: Connected Wave Rail (lg and above) */}
          <div className="hidden lg:block relative">
            {/* Continuous undulating spline wave passing behind circle nodes */}
            <div className="absolute left-0 right-0 top-0 h-14 pointer-events-none z-0">
              <svg 
                viewBox="0 0 1200 60" 
                preserveAspectRatio="none" 
                className="w-full h-full"
                fill="none"
              >
                <path
                  d="M 0 32 C 60 32, 90 28, 150 28 C 220 28, 250 42, 300 42 C 350 42, 380 28, 450 28 C 520 28, 550 42, 600 42 C 650 42, 680 28, 750 28 C 820 28, 850 42, 900 42 C 950 42, 980 28, 1050 28 C 1110 28, 1140 32, 1200 32"
                  stroke="#D8D4CC"
                  strokeWidth="1.25"
                />
              </svg>
            </div>

            {/* 4 Columns */}
            <div className="grid grid-cols-4 gap-8 xl:gap-12 relative z-10">
              {howItWorksSteps.map((step, idx) => {
                const IconComponent = step.icon;
                return (
                  <div key={idx} className="group flex flex-col items-start">
                    {/* Circle Node (Centered over the wave) */}
                    <div className="w-14 h-14 rounded-full border border-neutral-300 bg-[#FAF8F5] flex items-center justify-center text-neutral-800 transition-all duration-300 group-hover:border-black group-hover:scale-105 shrink-0 shadow-[0_1px_3px_rgba(0,0,0,0.02)] z-10">
                      <IconComponent className="w-5 h-5 text-neutral-800 stroke-[1.25] transition-transform duration-300 group-hover:scale-110" />
                    </div>

                    {/* Giant Serif Number */}
                    <span className={`${playfair.className} font-serif text-5xl sm:text-6xl lg:text-[68px] font-normal text-neutral-800/90 tracking-tight mt-7 mb-1 block select-none`}>
                      {step.num}
                    </span>

                    {/* Step Title in Serif */}
                    <h3 className={`${playfair.className} font-serif text-xl sm:text-2xl font-normal text-neutral-900 tracking-tight leading-snug mb-3 group-hover:text-black transition-colors`}>
                      {step.title}
                    </h3>

                    {/* Step Description */}
                    <p className="text-xs sm:text-sm text-neutral-500 font-light leading-relaxed mb-6 max-w-[270px]">
                      {step.desc}
                    </p>

                    {/* Bottom Action Link */}
                    <div className="inline-flex items-center gap-2 text-[10px] sm:text-[11px] font-mono uppercase tracking-[0.2em] text-neutral-600 font-medium group-hover:text-black transition-colors mt-auto">
                      <span>{step.action}</span>
                      <span className="text-neutral-400 group-hover:text-black group-hover:translate-x-1 transition-all inline-block">&rarr;</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Mobile & Tablet Flow: Vertical Architectural Timeline (< lg) */}
          <div className="lg:hidden relative pl-4 sm:pl-6">
            {/* Vertical connector line */}
            <div className="absolute left-[27px] sm:left-[35px] top-7 bottom-7 w-[1px] bg-neutral-300/80 z-0" />

            <div className="space-y-12 relative z-10">
              {howItWorksSteps.map((step, idx) => {
                const IconComponent = step.icon;
                return (
                  <div key={idx} className="group flex items-start gap-5 sm:gap-6 relative">
                    {/* Circle Node */}
                    <div className="w-14 h-14 rounded-full border border-neutral-300 bg-[#FAF8F5] flex items-center justify-center text-neutral-800 shrink-0 z-10 shadow-[0_1px_3px_rgba(0,0,0,0.02)]">
                      <IconComponent className="w-5 h-5 text-neutral-800 stroke-[1.25]" />
                    </div>

                    {/* Content */}
                    <div className="pt-0 flex-1 min-w-0">
                      <span className={`${playfair.className} font-serif text-4xl sm:text-5xl font-normal text-neutral-800/90 tracking-tight block mb-1`}>
                        {step.num}
                      </span>
                      <h3 className={`${playfair.className} font-serif text-xl sm:text-2xl font-normal text-neutral-900 tracking-tight leading-snug mb-2`}>
                        {step.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-neutral-500 font-light leading-relaxed mb-4">
                        {step.desc}
                      </p>
                      <div className="inline-flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.2em] text-neutral-600 font-medium">
                        <span>{step.action}</span>
                        <span className="text-neutral-400">&rarr;</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: BENEFITS & OUTCOMES */}
      <section className="py-16 sm:py-20 lg:py-24 bg-[#FAF9F5] text-black">
        <div className="max-w-7xl 2xl:max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12 sm:mb-16">
            <span className="text-[10px] sm:text-[11px] font-mono tracking-[0.25em] text-neutral-400 uppercase block mb-2 sm:mb-3">
              WHY IT WORKS
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight leading-tight text-neutral-900">
              {data.benefits.title}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
            {data.benefits.items.map((item, idx) => (
              <div key={idx} className="space-y-2">
                <span className="text-xs font-mono font-bold text-neutral-400 block tracking-wider">
                  0{idx + 1}
                </span>
                <h3 className="text-base sm:text-lg font-bold tracking-tight text-neutral-900 leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-600 font-light leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 8: TECHNOLOGY BEHIND THE EXPERIENCE */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white text-black">
        <div className="max-w-7xl 2xl:max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12 sm:mb-16">
            <span className="text-[10px] sm:text-[11px] font-mono tracking-[0.25em] text-neutral-400 uppercase block mb-2 sm:mb-3">
              THE TECHNOLOGY
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight leading-tight text-neutral-900">
              {data.technology.title}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {data.technology.items.map((item, idx) => {
              const IconComponent = techIcons[idx % techIcons.length];

              return (
                <div key={idx} className="space-y-3">
                  <div className="flex items-center gap-2.5">
                    <IconComponent className="w-5 h-5 text-black shrink-0" strokeWidth={1.5} />
                    <span className="text-xs font-mono font-bold text-neutral-400">
                      0{idx + 1}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-neutral-900 tracking-tight leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-neutral-600 font-light leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 9: HOW WE DELIVER */}
      <section className="py-16 sm:py-20 lg:py-24 bg-[#F8F6F2] text-black">
        <div className="max-w-7xl 2xl:max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12 sm:mb-16">
            <span className="text-[10px] sm:text-[11px] font-mono tracking-[0.25em] text-neutral-400 uppercase block mb-2 sm:mb-3">
              OUR PROCESS
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight leading-tight text-neutral-900">
              How We Deliver Every Retail Installation
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
            {deliveryStages.map((stage, idx) => (
              <div key={idx} className="group flex flex-col space-y-4">
                <div className="relative aspect-[16/10] rounded-xl overflow-hidden bg-neutral-200">
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

      {/* SECTION 10: WHY CHOOSE PROJECTION */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white text-black">
        <div className="max-w-7xl 2xl:max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12 sm:mb-16">
            <span className="text-[10px] sm:text-[11px] font-mono tracking-[0.25em] text-neutral-400 uppercase block mb-2 sm:mb-3">
              {data.whyChooseUs?.label || "WHY PROJECTION"}
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight leading-tight text-neutral-900">
              {data.whyChooseUs?.title || "Why Retailers Choose Projection"}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
            {data.whyChooseUs?.items.map((item, idx) => {
              const icons = [Layers, Monitor, Calendar];
              const IconComponent = icons[idx % icons.length];

              return (
                <div key={idx} className="space-y-3">
                  <div className="flex items-center gap-2.5">
                    <IconComponent className="w-5 h-5 text-black shrink-0" strokeWidth={1.5} />
                    <span className="text-xs font-mono font-bold text-neutral-400">
                      0{idx + 1}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-neutral-900 tracking-tight leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-neutral-600 font-light leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 11: FAQ */}
      <section className="py-14 sm:py-16 lg:py-20 bg-[#FAF9F5] text-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-10">
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
      <section className="relative py-16 sm:py-20 lg:py-24 overflow-hidden bg-black text-white">
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
