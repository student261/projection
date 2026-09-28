"use client";

import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
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
  Activity,
  Layers,
  Gamepad2,
  SlidersHorizontal,
  User,
  Brain,
  Heart,
  Users,
  PenLine,
  Code2,
  Rocket,
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

  // Custom Section Labels (from content specifications)
  surfaceFormatsLabel?: string;
  applicationsLabel?: string;
  industriesLabel?: string;
  howItWorksLabel?: string;
  capabilitiesLabel?: string;
  experienceLabel?: string;
  relatedSolutionsLabel?: string;
  faqsLabel?: string;

  // Section 02: What Is This Solution? / Applications
  whatIsHeading: string;
  whatIsDescription: string;
  whatIsFeatures: { title: string; desc: string }[];
  whatIsVideoPlaceholder: string;
  videoUrl?: string;

  // Section 03: Experience Showcase / Surface Formats
  experienceHeading?: string;
  experienceIntro: string;
  featuredExperience: { title: string; desc: string; img: string; category: string };
  experienceCards: { title: string; desc: string; img: string; category: string }[];

  // Section 04: Key Features / Capabilities
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
    ...data.industryCards.map((ind, i) => ({
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

  const allOtherSolutions = [
    {
      slug: "interactive-projection",
      title: "Interactive Projection",
      desc: "Turn floors, walls, ceilings and other suitable surfaces into interactive experiences that respond to movement and participation.",
      href: "/solutions/interactive-projection",
      img: "/images/interactive_floor_motion.jpg",
    },
    {
      slug: "immersive-environment",
      title: "Immersive Experiences",
      desc: "Create larger visual environments using projection, immersive rooms and projection mapping.",
      href: "/solutions/immersive-environment",
      img: "/images/biosphere_ocean_gallery.jpg",
    },
    {
      slug: "ai-experience",
      title: "AI Experiences",
      desc: "Add AI avatars, generative content and interactive AI experiences.",
      href: "/solutions/ai-experience",
      img: "/images/cat_ai_avatar.jpg",
    },
    {
      slug: "solution-engagement",
      title: "Interactive Engagement",
      desc: "Create interactive games, motion experiences and installations focused on participation.",
      href: "/solutions/solution-engagement",
      img: "/images/education_interactive_floor.jpg",
    },
    {
      slug: "led-3d-displays",
      title: "LED & 3D Display Solutions",
      desc: "Explore large-format LED and 3D display experiences for different environments.",
      href: "/solutions",
      img: "/images/hospitality_ambient_atrium.jpg",
    },
  ];

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
  const isAlignedWithHomeTxt = data.slug === "interactive-projection" || data.slug === "interactive-spaces";

  // ---------------------------------------------------------------------------
  // SECTION COMPONENTS
  // ---------------------------------------------------------------------------

  // Section 01: Hero Banner
  const heroSection = (
    <section className="relative min-h-[85vh] sm:min-h-[88vh] flex flex-col justify-center items-center overflow-hidden bg-black text-white pt-20 sm:pt-24 pb-8 sm:pb-12 px-4">
      <div className="absolute inset-0 z-0">
        <SafeImage
          src={data.heroImg}
          alt={data.heroHeading}
          className="w-full h-full object-cover opacity-85 brightness-105 contrast-105 scale-105 animate-[slow-pan_20s_ease-in-out_infinite_alternate]"
          containerClassName="w-full h-full bg-black"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/60" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center my-auto flex flex-col items-center">
        {!isAlignedWithHomeTxt && data.solutionLabel && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-center gap-2 text-[10px] sm:text-xs font-mono font-semibold uppercase tracking-[0.2em] text-white/90 mb-3 sm:mb-4"
          >
            <Sparkles className="w-3.5 h-3.5 text-white" />
            <span>{data.solutionLabel}</span>
          </motion.div>
        )}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="font-black text-white mb-3 sm:mb-5 max-w-3xl mx-auto drop-shadow-2xl tracking-tight leading-[1.1] text-3xl sm:text-5xl lg:text-5xl xl:text-6xl"
        >
          {data.heroHeading}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-white/85 max-w-2xl mx-auto mb-6 sm:mb-8 text-sm sm:text-base lg:text-lg font-light leading-relaxed"
        >
          {data.heroSubtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto"
        >
          <Link
            href={isAlignedWithHomeTxt ? "#surface-formats" : "#what-is-it"}
            className="inline-flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-[0.08em] px-7 py-3 sm:py-3.5 transition-all duration-300 active:scale-95 cursor-pointer w-full sm:w-auto bg-white text-black hover:bg-gray-200 shadow-md rounded-full"
          >
            Start Your Project
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-[0.08em] px-7 py-3 sm:py-3.5 transition-all duration-300 active:scale-95 cursor-pointer w-full sm:w-auto border border-white/40 bg-black/40 text-white hover:bg-white/20 backdrop-blur-sm rounded-full"
          >
            Book a Demo
          </Link>
        </motion.div>
      </div>
    </section>
  );

function StickySurfaceFormats({
  data,
  items,
}: {
  data: SolutionFullData;
  items: { title: string; desc: string; img: string; category?: string }[];
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const prevIndexRef = useRef(0);

  const numItems = items.length;

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (numItems <= 1) return;

    // Distribute card transitions smoothly across the first 82% of the scroll track.
    // The 5th (final) card remains locked in place from 0.82 to 1.00 (and beyond),
    // guaranteeing it is fully visible, readable, and never skipped during scroll.
    const activeThreshold = 0.82;
    let newIndex = 0;
    if (latest >= activeThreshold) {
      newIndex = numItems - 1;
    } else {
      const step = activeThreshold / (numItems - 1);
      newIndex = Math.min(numItems - 2, Math.floor(latest / step));
    }
    newIndex = Math.max(0, Math.min(numItems - 1, newIndex));

    if (newIndex !== prevIndexRef.current) {
      setDirection(newIndex > prevIndexRef.current ? 1 : -1);
      prevIndexRef.current = newIndex;
      setActiveIndex(newIndex);
    }
  });

  const activeItem = items[activeIndex] || items[0];
  const isEven = activeIndex % 2 === 0;

  return (
    <div
      ref={containerRef}
      id="surface-formats"
      className="relative bg-neutral-50/70 scroll-mt-20 pb-16 sm:pb-20 lg:pb-28"
      style={{ height: `${Math.max(numItems, 3) * 110}vh` }}
    >
      <div className="sticky top-0 h-screen w-full flex flex-col justify-center items-center pt-12 sm:pt-14 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl 2xl:max-w-[1536px] 3xl:max-w-[1720px] mx-auto w-full flex flex-col justify-center">
          {/* Header */}
          <div className="max-w-5xl 2xl:max-w-6xl mx-auto text-center mb-2.5 sm:mb-3 lg:mb-4">
            <div className="inline-flex items-center justify-center gap-2 text-[10px] sm:text-[11px] font-mono font-bold uppercase tracking-[0.2em] text-black mb-1 sm:mb-1.5 leading-normal py-0.5">
              <Sparkles className="w-3.5 h-3.5 text-black" />
              <span>{data.surfaceFormatsLabel || "WAYS TO INTERACT"}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-[32px] xl:text-[35px] font-black text-black tracking-tight leading-[1.15] mb-1.5 sm:mb-2">
              {data.experienceHeading || "Interactive Experiences Built Around Your Space"}
            </h2>
            {data.experienceIntro && (
              <p className="text-xs sm:text-sm text-black/65 font-light leading-relaxed max-w-4xl xl:max-w-5xl mx-auto sm:whitespace-nowrap">
                {data.experienceIntro}
              </p>
            )}
          </div>

          {/* Sticky Card Viewport with Changing Content */}
          <div className="relative w-full">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={activeIndex}
                custom={direction}
                initial={{ opacity: 0, y: direction > 0 ? 20 : -20, scale: 0.99 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: direction > 0 ? -20 : 20, scale: 0.99 }}
                transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                className="w-full bg-white rounded-3xl border border-black/10 overflow-hidden shadow-md p-4 sm:p-5 lg:p-6"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 xl:gap-10 items-center">
                  {/* Content Column */}
                  <div className={`w-full lg:col-span-5 ${isEven ? "order-2 lg:order-1" : "order-2 lg:order-2"}`}>
                    <div className="space-y-2.5 sm:space-y-3.5">
                      <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-black tracking-tight leading-tight">
                        {activeItem.title}
                      </h3>
                      <p className="text-black/70 text-xs sm:text-sm lg:text-base font-light leading-relaxed">
                        {activeItem.desc}
                      </p>
                      <div className="pt-1.5 sm:pt-2">
                        <Link
                          href="/contact"
                          className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-wider text-black hover:text-black/70 transition-colors group/link py-1"
                        >
                          <span>Plan {activeItem.title} Experience</span>
                          <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1.5 transition-transform duration-300" />
                        </Link>
                      </div>
                    </div>
                  </div>

                  {/* Visual Column */}
                  <div className={`w-full lg:col-span-7 ${isEven ? "order-1 lg:order-2" : "order-1 lg:order-1"}`}>
                    <div className="relative aspect-[16/10] max-h-[190px] sm:max-h-[230px] lg:max-h-[260px] xl:max-h-[290px] w-full rounded-2xl overflow-hidden border border-black/10 bg-black group shadow-lg">
                      <SafeImage
                        key={activeItem.img}
                        src={activeItem.img}
                        alt={activeItem.title}
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                        containerClassName="w-full h-full"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
      {/* Smooth Cinematic Dissolve into Industries Section */}
      <div className="absolute bottom-0 inset-x-0 h-44 sm:h-56 lg:h-72 bg-gradient-to-b from-transparent via-neutral-900/40 to-black pointer-events-none z-10" />
    </div>
  );
}

  // Section: Surface Formats / Experience Horizon Gallery (WAYS TO INTERACT)
  const surfaceFormatsSection = (
    data.slug === "interactive-projection" || data.slug === "interactive-spaces" ? (
      <StickySurfaceFormats
        data={data}
        items={[data.featuredExperience, ...data.experienceCards]}
      />
    ) : (
      <section id="surface-formats" className="py-12 lg:py-16 bg-neutral-50/70 overflow-hidden scroll-mt-20 relative">
        <div className="max-w-7xl 2xl:max-w-[1536px] 3xl:max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl 2xl:max-w-6xl mx-auto text-center mb-6 sm:mb-8">
            <div className="inline-flex items-center justify-center gap-2 text-[10px] sm:text-[11px] font-mono font-bold uppercase tracking-[0.2em] text-black mb-2 leading-normal py-0.5">
              <Sparkles className="w-3.5 h-3.5 text-black" />
              <span>{data.surfaceFormatsLabel || "WAYS TO INTERACT"}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-[34px] xl:text-4xl font-black text-black tracking-tight leading-[1.15] mb-2.5 sm:mb-3">
              {data.experienceHeading || "Interactive Experiences Built Around Your Space"}
            </h2>
            {data.experienceIntro && (
              <p className="text-xs sm:text-sm text-black/65 font-light leading-relaxed max-w-4xl xl:max-w-5xl mx-auto sm:whitespace-nowrap">
                {data.experienceIntro}
              </p>
            )}
          </div>

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
                  </div>
                  <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-2 text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-black mb-2">
                        <span>{num}</span>
                        <span>•</span>
                        <span>{exp.category}</span>
                      </div>
                      <h3 className="text-lg sm:text-xl font-black text-black tracking-tight mb-2 group-hover:text-neutral-700 transition-colors sm:min-h-[3rem] line-clamp-2">
                        {exp.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-black/70 font-light leading-relaxed mb-4 flex-1 line-clamp-3">
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
        </div>
        {/* Smooth Cinematic Dissolve into Industries Section */}
        <div className="absolute bottom-0 inset-x-0 h-32 sm:h-44 bg-gradient-to-b from-transparent via-neutral-900/40 to-black pointer-events-none z-10" />
      </section>
    )
  );

  // Section: Industries (WHERE IT FITS) - Full Background Cinematic Architecture (Matching Reference Image)
  const industriesSection = (
    <section id="industries" className="py-16 sm:py-20 lg:py-24 bg-black text-white scroll-mt-20 relative overflow-hidden min-h-[580px] lg:min-h-[640px] flex items-center">
      {/* Full Background Image Layer with Crossfade - Pure and Unshaded */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndustryIdx}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="w-full h-full absolute inset-0"
          >
            <SafeImage 
              src={allIndustries[activeIndustryIdx]?.img} 
              alt={allIndustries[activeIndustryIdx]?.title} 
              className="w-full h-full object-cover object-center" 
              containerClassName="w-full h-full absolute inset-0" 
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Top Blend Vignette - Seamlessly bridges from the section above into the photograph */}
      <div className="absolute top-0 inset-x-0 h-40 sm:h-52 lg:h-64 bg-gradient-to-b from-black via-black/75 to-transparent pointer-events-none z-[5]" />

      {/* Bottom Vignette for seamless flow into next section */}
      <div className="absolute bottom-0 inset-x-0 h-28 sm:h-40 bg-gradient-to-t from-black via-black/60 to-transparent pointer-events-none z-[5]" />

      <div className="max-w-7xl 2xl:max-w-[1536px] 3xl:max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 xl:gap-12 items-center">
          
          {/* Left Column: Heading strictly 2 lines, Subtitle & Action - Transparent card background */}
          <div className="lg:col-span-6 xl:col-span-6 flex flex-col justify-center max-w-xl">
            <div className="p-0 sm:p-2 bg-transparent">
              <div className="flex items-center gap-2 text-[10px] sm:text-[11px] font-mono font-semibold uppercase tracking-[0.2em] text-white/80 mb-3 sm:mb-4 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                <Sparkles className="w-3.5 h-3.5 text-white/80" />
                <span>{data.industriesLabel || "WHERE IT FITS"}</span>
              </div>
              
              <h2 className="text-2xl sm:text-3xl lg:text-[32px] xl:text-[40px] 2xl:text-[44px] font-black text-white tracking-tight leading-[1.15] mb-4 drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
                <span className="block sm:whitespace-nowrap">Interactive Projection</span>
                <span className="block sm:whitespace-nowrap">Across Different Industries</span>
              </h2>

              <p className="text-xs sm:text-sm lg:text-base text-white/90 font-light leading-relaxed mb-6 sm:mb-8 drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]">
                {data.industriesIntro}
              </p>

              <div className="flex items-center">
                <Link 
                  href={allIndustries[activeIndustryIdx]?.href || "/industries"} 
                  className="inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-3 sm:py-3.5 rounded-full bg-white text-black hover:bg-neutral-200 text-xs font-bold uppercase tracking-wider transition-all shadow-2xl active:scale-95 cursor-pointer w-full sm:w-auto group"
                >
                  <span>Explore {allIndustries[activeIndustryIdx]?.title}</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>

          {/* Right Column: All 7 Sectors - Container sized to fit content */}
          <div className="lg:col-span-6 xl:col-span-6 lg:col-start-7 xl:col-start-7 flex flex-col gap-1.5 sm:gap-2 w-full max-w-[270px] sm:max-w-[280px] lg:w-fit lg:min-w-[240px] lg:max-w-[280px] lg:ml-auto">
            {allIndustries.map((ind, idx) => {
              const isActive = activeIndustryIdx === idx;
              return (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setActiveIndustryIdx(idx)}
                  onMouseEnter={() => setActiveIndustryIdx(idx)}
                  className={`w-full text-left py-2 sm:py-2.5 px-3.5 sm:px-4 rounded-xl transition-all duration-300 group cursor-pointer border flex items-center justify-between gap-3 ${
                    isActive 
                      ? "bg-black/75 backdrop-blur-md border-white/40 shadow-xl text-white ring-1 ring-white/10" 
                      : "bg-black/25 backdrop-blur-sm border-white/10 hover:border-white/20 hover:bg-black/45 text-white/70 hover:text-white"
                  }`}
                >
                  <h4
                    className={`text-xs sm:text-sm font-bold tracking-tight transition-colors ${
                      isActive ? "text-white" : "text-white/80 group-hover:text-white"
                    }`}
                  >
                    {ind.title}
                  </h4>
                  <ArrowRight
                    className={`w-3.5 h-3.5 transition-all duration-300 shrink-0 ${
                      isActive 
                        ? "text-white opacity-100 translate-x-0" 
                        : "text-white/40 opacity-0 -translate-x-1 group-hover:opacity-80 group-hover:translate-x-0"
                    }`}
                  />
                </button>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );

  // Section: Applications (EXPERIENCE POSSIBILITIES / WHAT IS THIS SOLUTION)
  const applicationsSection = (
    <section id="what-is-it" className="py-12 lg:py-16 bg-white relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                  poster={data.whatIsVideoPlaceholder ? (data.whatIsVideoPlaceholder.endsWith('.webp') ? data.whatIsVideoPlaceholder : data.whatIsVideoPlaceholder.replace(/\.(png|jpg|jpeg)$/, '.webp')) : undefined}
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
            </div>
          </motion.div>

          {/* Content Side */}
          <div className={`w-full lg:col-span-7 ${isFlippedLayout ? "lg:order-1" : "lg:order-2"}`}>
            <div>
              <div className="flex items-center gap-2 text-[10px] sm:text-[11px] font-mono font-bold uppercase tracking-[0.2em] text-black mb-4">
                <Sparkles className="w-3.5 h-3.5 text-black" />
                <span>{data.applicationsLabel || "EXPERIENCE POSSIBILITIES"}</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-black mb-5 tracking-tight leading-[1.1]">
                {data.whatIsHeading}
              </h2>
              <p className="text-base sm:text-lg text-black/70 font-light leading-relaxed mb-8">
                {data.whatIsDescription}
              </p>
            </div>

            {/* High-End Architectural Feature Matrix */}
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
      </div>
    </section>
  );

  // Section: How We Work / From Concept to Creation (Pure Luxury Black & White Theme)
  const howItWorksSection = (() => {
    const defaultStepIcons = [Users, PenLine, Code2, Settings, Rocket];

    return (
      <section id="how-it-works" className="py-16 sm:py-20 lg:py-24 bg-black text-white relative overflow-hidden scroll-mt-20">
        <div className="max-w-7xl 2xl:max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Header */}
          <div className="max-w-3xl mx-auto text-center mb-14 sm:mb-18">
            <div className="inline-flex items-center justify-center gap-2 text-[10px] sm:text-[11px] font-mono font-semibold uppercase tracking-[0.25em] text-white/60 mb-3">
              <Sparkles className="w-3.5 h-3.5 text-white/50" />
              <span>{data.howItWorksLabel || "HOW WE WORK"}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.12] mb-3.5">
              {data.howItWorksHeading || "From Concept to Creation"}
            </h2>
            <p className="text-sm sm:text-base text-white/70 font-light leading-relaxed max-w-xl mx-auto">
              {data.howItWorksIntro || "A seamless process that turns ideas into powerful immersive experiences."}
            </p>
          </div>

          {/* Desktop 5-Step Connected Flow (>= lg) */}
          <div className="hidden lg:grid lg:grid-cols-5 gap-4 relative">
            {data.howItWorksSteps.map((step, idx) => {
              const StepIcon = defaultStepIcons[idx % defaultStepIcons.length];
              const isLast = idx === data.howItWorksSteps.length - 1;

              return (
                <div key={idx} className="relative flex flex-col items-center text-center group">
                  {/* Circular Icon Badge */}
                  <div className="relative w-18 h-18 sm:w-20 sm:h-20 rounded-full bg-neutral-950 border border-white/20 shadow-[0_0_20px_rgba(255,255,255,0.04)] flex items-center justify-center group-hover:border-white group-hover:shadow-[0_0_30px_rgba(255,255,255,0.18)] group-hover:scale-105 transition-all duration-300 relative z-10">
                    <StepIcon className="w-7 h-7 text-white stroke-[1.6] group-hover:scale-110 transition-transform duration-300" />
                  </div>

                  {/* Connecting Dashed Line with Arrow Badge between this and next step */}
                  {!isLast && (
                    <div className="flex items-center absolute top-[36px] sm:top-[40px] left-[calc(50%+44px)] right-[calc(-50%+44px)] z-0 pointer-events-none">
                      <div className="flex-1 border-t border-dashed border-white/20" />
                      <div className="w-6 h-6 shrink-0 rounded-full bg-black border border-white/30 shadow-sm flex items-center justify-center mx-1 group-hover:border-white/60 transition-colors">
                        <ChevronRight className="w-3.5 h-3.5 text-white/80" />
                      </div>
                      <div className="flex-1 border-t border-dashed border-white/20" />
                    </div>
                  )}

                  {/* Title & Description */}
                  <h3 className="text-base sm:text-lg font-bold text-white tracking-tight leading-snug mt-5 mb-2 group-hover:text-white transition-colors">
                    {step.title.replace(/^\d+\.\s*/, "")}
                  </h3>
                  <p className="text-xs sm:text-[13px] text-white/65 font-light leading-relaxed max-w-[210px]">
                    {step.desc}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Mobile & Tablet Connected Vertical Flow (< lg) */}
          <div className="lg:hidden flex flex-col space-y-6 max-w-md mx-auto">
            {data.howItWorksSteps.map((step, idx) => {
              const StepIcon = defaultStepIcons[idx % defaultStepIcons.length];
              const isLast = idx === data.howItWorksSteps.length - 1;

              return (
                <div key={idx} className="relative flex items-start gap-4 group">
                  {/* Left Column: Circle Badge and Connecting Line */}
                  <div className="flex flex-col items-center shrink-0">
                    <div className="relative w-14 h-14 rounded-full bg-neutral-950 border border-white/25 flex items-center justify-center shadow-[0_0_15px_rgba(255,255,255,0.05)]">
                      <StepIcon className="w-6 h-6 text-white stroke-[1.6]" />
                    </div>
                    {!isLast && (
                      <div className="w-[1.5px] h-10 border-l border-dashed border-white/25 my-1.5 relative">
                        <div className="absolute top-1/2 -left-2.5 -translate-y-1/2 w-5 h-5 rounded-full bg-black border border-white/30 flex items-center justify-center">
                          <ChevronRight className="w-3 h-3 text-white/70 rotate-90" />
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Right Column: Title & Description */}
                  <div className="pt-2 flex-1">
                    <h3 className="text-base font-bold text-white tracking-tight leading-snug mb-1">
                      {step.title.replace(/^\d+\.\s*/, "")}
                    </h3>
                    <p className="text-xs sm:text-sm text-white/65 font-light leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Premium Luxury Black & White CTA */}
          <div className="mt-14 sm:mt-18 lg:mt-20 flex justify-center">
            <Link
              href="/contact"
              className="group relative inline-flex items-center justify-center gap-3.5 px-8 sm:px-10 py-4 sm:py-4.5 rounded-full bg-white text-black text-xs sm:text-sm font-bold uppercase tracking-[0.18em] transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.2),0_10px_25px_rgba(0,0,0,0.5)] hover:shadow-[0_0_45px_rgba(255,255,255,0.4),0_15px_35px_rgba(0,0,0,0.7)] hover:bg-neutral-100 hover:scale-[1.02] active:scale-95 cursor-pointer ring-1 ring-white/30"
            >
              <span>Start Your Project</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5 text-black" />
            </Link>
          </div>

        </div>
      </section>
    );
  })();

  // Section: Capabilities / Features (CAPABILITIES) - Architectural Orbital Interaction System (Matching Reference Image)
  const capabilitiesSection = (
    <section id="capabilities" className="py-12 sm:py-16 lg:py-20 bg-[#FAF9F5] scroll-mt-20 overflow-hidden">
      <div className="max-w-7xl 2xl:max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header matching Reference Design */}
        <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 mb-2 sm:mb-4 lg:mb-6">
          <div>
            <div className="flex items-center gap-2.5 text-[11px] font-mono tracking-[0.25em] text-black/60 uppercase mb-3">
              <span className="w-5 h-[1.5px] bg-black/40 inline-block" />
              <span>{data.capabilitiesLabel || "CAPABILITIES"}</span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-[54px] xl:text-6xl font-black text-black tracking-tight leading-[1.05]">
              Built Around<br />Interaction
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-black/65 font-light leading-relaxed max-w-sm lg:pt-8">
            {data.keyFeaturesIntro || "Creative and engineered around human movement, flexible formats and real-time digital response. This is how we turn spaces into interactive experiences."}
          </p>
        </div>

        {/* Desktop Orbital Diagram (Matching Reference Image) */}
        <div className="hidden lg:block relative w-full aspect-[1000/390] max-h-[500px] max-w-6xl mx-auto select-none">
          {/* SVG Orbit Ellipse, Central Ripples, Leader Lines & Indicator Dots */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 165 1000 390" fill="none">
            {/* Tilted Orbital Ring */}
            <ellipse cx="490" cy="330" rx="205" ry="135" transform="rotate(-20 490 330)" stroke="#E2DDD4" strokeWidth="1.2" />

            {/* Central Ripples (Top Arcs) */}
            <path d="M 468 308 A 24 24 0 0 1 512 308" stroke="#CBBFB2" strokeWidth="1" fill="none" />
            <path d="M 454 296 A 38 38 0 0 1 526 296" stroke="#CBBFB2" strokeWidth="1" fill="none" />
            <path d="M 440 284 A 52 52 0 0 1 540 284" stroke="#CBBFB2" strokeWidth="1" fill="none" />
            <path d="M 426 272 A 66 66 0 0 1 554 272" stroke="#CBBFB2" strokeWidth="1" fill="none" />

            {/* Central Monospace Label */}
            <text x="490" y="335" textAnchor="middle" className="font-mono text-[11px] font-bold tracking-[0.35em] fill-[#262626]">
              INTERACTION
            </text>

            {/* Central Ripples (Bottom Arcs) */}
            <path d="M 468 354 A 24 24 0 0 0 512 354" stroke="#CBBFB2" strokeWidth="1" fill="none" />
            <path d="M 454 366 A 38 38 0 0 0 526 366" stroke="#CBBFB2" strokeWidth="1" fill="none" />
            <path d="M 440 378 A 52 52 0 0 0 540 378" stroke="#CBBFB2" strokeWidth="1" fill="none" />
            <path d="M 426 390 A 66 66 0 0 0 554 390" stroke="#CBBFB2" strokeWidth="1" fill="none" />

            {/* Leader Lines & Dots matching Reference Mockup */}
            {/* 1. Motion Responsive Leader Line */}
            <circle cx="392" cy="272" r="2.5" fill="#A89886" />
            <path d="M 295 218 L 370 218 L 398 238" stroke="#D3C9BD" strokeWidth="1" fill="none" />
            <circle cx="295" cy="218" r="2" fill="#A89886" />
            <circle cx="398" cy="238" r="2" fill="#A89886" />

            {/* 2. Custom Interactive Content Leader Line */}
            <circle cx="590" cy="238" r="2.5" fill="#A89886" />
            <path d="M 632 208 L 650 194 L 722 194" stroke="#D3C9BD" strokeWidth="1" fill="none" />
            <circle cx="632" cy="208" r="2" fill="#A89886" />
            <circle cx="722" cy="194" r="2" fill="#A89886" />

            {/* 3. Multiple Surface Formats Leader Line */}
            <circle cx="684" cy="285" r="2.5" fill="#A89886" />
            <path d="M 712 322 L 730 310 L 772 310" stroke="#D3C9BD" strokeWidth="1" fill="none" />
            <circle cx="730" cy="310" r="2" fill="#A89886" />
            <circle cx="772" cy="310" r="2" fill="#A89886" />

            {/* 4. Real-Time Response Leader Line */}
            <circle cx="590" cy="475" r="2.5" fill="#A89886" />
            <path d="M 584 466 L 606 480 L 678 480" stroke="#D3C9BD" strokeWidth="1" fill="none" />
            <circle cx="606" cy="480" r="2" fill="#A89886" />

            {/* 5. Interactive Games & Activities Leader Line */}
            <circle cx="480" cy="470" r="2.5" fill="#A89886" />
            <path d="M 345 492 L 362 492 L 372 482" stroke="#D3C9BD" strokeWidth="1" fill="none" />
            <circle cx="372" cy="482" r="2" fill="#A89886" />

            {/* 6. Flexible Experience Design Leader Line */}
            <circle cx="288" cy="380" r="2.5" fill="#A89886" />
            <path d="M 220 318 L 270 318 L 285 330" stroke="#D3C9BD" strokeWidth="1" fill="none" />
            <circle cx="220" cy="318" r="2" fill="#A89886" />
            <circle cx="285" cy="330" r="2" fill="#A89886" />
          </svg>

          {/* 6 Circular Node Badges & Text Blocks */}
          
          {/* Node 1: Motion Responsive Experiences (Top-Left) */}
          <div className="absolute left-[40.2%] top-[15.1%] -translate-x-1/2 -translate-y-1/2 z-10">
            <div className="w-13 h-13 rounded-full bg-[#FAF9F5] border border-[#DDD6CD] shadow-sm flex items-center justify-center p-3 hover:scale-105 transition-transform duration-300">
              <svg viewBox="0 0 24 24" className="w-6 h-6 stroke-black" fill="none" strokeWidth="1.5" strokeLinecap="round">
                <circle cx="12" cy="7" r="3" />
                <path d="M7 21c0-4 2.5-6.5 5-6.5s5 2.5 5 6.5" />
                <path d="M8 15l-3 3" />
                <path d="M16 15l3 3" />
              </svg>
            </div>
          </div>
          <div className="absolute left-[16%] top-[13.6%] -translate-y-1/2 text-left max-w-[210px] z-10">
            <h3 className="text-[14px] font-bold text-black tracking-tight leading-tight mb-1.5">
              Motion Responsive Experiences
            </h3>
            <p className="text-[12px] text-black/60 font-light leading-relaxed">
              Create experiences that respond to movement in the projected area.
            </p>
          </div>

          {/* Node 2: Custom Interactive Content (Top-Right) */}
          <div className="absolute left-[61.5%] top-[8.7%] -translate-x-1/2 -translate-y-1/2 z-10">
            <div className="w-13 h-13 rounded-full bg-[#FAF9F5] border border-[#DDD6CD] shadow-sm flex items-center justify-center p-3 hover:scale-105 transition-transform duration-300">
              <svg viewBox="0 0 24 24" className="w-6 h-6 stroke-black" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="5" width="18" height="14" rx="3" />
                <path d="M6 8h2M6 8v2M18 8h-2M18 8v2M6 16h2M6 16v-2M18 16h-2M18 16v-2" />
                <polygon points="10 9 15 12 10 15 10 9" fill="currentColor" stroke="none" />
              </svg>
            </div>
          </div>
          <div className="absolute left-[73.5%] top-[7.7%] -translate-y-1/2 text-left max-w-[230px] z-10">
            <h3 className="text-[14px] font-bold text-black tracking-tight leading-tight mb-1.5">
              Custom Interactive Content
            </h3>
            <p className="text-[12px] text-black/60 font-light leading-relaxed">
              Turn static spaces into dynamic and interactive stories with custom content and project requirements.
            </p>
          </div>

          {/* Node 3: Multiple Surface Formats (Right) */}
          <div className="absolute left-[68.4%] top-[39.7%] -translate-x-1/2 -translate-y-1/2 z-10">
            <div className="w-13 h-13 rounded-full bg-[#FAF9F5] border border-[#DDD6CD] shadow-sm flex items-center justify-center p-3 hover:scale-105 transition-transform duration-300">
              <svg viewBox="0 0 24 24" className="w-6 h-6 stroke-black" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="m12 2 10 5-10 5-10-5Z" />
                <path d="m2 12 10 5 10-5" />
                <path d="m2 17 10 5 10-5" />
              </svg>
            </div>
          </div>
          <div className="absolute left-[78%] top-[37.2%] -translate-y-1/2 text-left max-w-[220px] z-10">
            <h3 className="text-[14px] font-bold text-black tracking-tight leading-tight mb-1.5">
              Multiple Surface Formats
            </h3>
            <p className="text-[12px] text-black/60 font-light leading-relaxed">
              Designed for a variety of surfaces like floors, walls, ceilings, tables and other 3D spaces.
            </p>
          </div>

          {/* Node 4: Real-Time Response (Bottom-Right) */}
          <div className="absolute left-[56.7%] top-[71.8%] -translate-x-1/2 -translate-y-1/2 z-10">
            <div className="w-13 h-13 rounded-full bg-[#FAF9F5] border border-[#DDD6CD] shadow-sm flex items-center justify-center p-3 hover:scale-105 transition-transform duration-300">
              <svg viewBox="0 0 24 24" className="w-6 h-6 stroke-black" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="13" cy="14" r="7" />
                <polyline points="13 11 13 14 15 16" />
                <path d="M13 3v2" />
                <path d="M3 11h4M4 14h3M2 17h5" />
              </svg>
            </div>
          </div>
          <div className="absolute left-[68.5%] top-[80.8%] -translate-y-1/2 text-left max-w-[210px] z-10">
            <h3 className="text-[14px] font-bold text-black tracking-tight leading-tight mb-1.5">
              Real-Time Response
            </h3>
            <p className="text-[12px] text-black/60 font-light leading-relaxed">
              Instant feedback and interaction with real-time processing in digital content.
            </p>
          </div>

          {/* Node 5: Interactive Games & Activities (Bottom-Left) */}
          <div className="absolute left-[38.0%] top-[77.7%] -translate-x-1/2 -translate-y-1/2 z-10">
            <div className="w-13 h-13 rounded-full bg-[#FAF9F5] border border-[#DDD6CD] shadow-sm flex items-center justify-center p-3 hover:scale-105 transition-transform duration-300">
              <svg viewBox="0 0 24 24" className="w-6 h-6 stroke-black" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 11h4m-2-2v4" />
                <circle cx="15" cy="11" r="1" fill="currentColor" />
                <circle cx="17" cy="13" r="1" fill="currentColor" />
                <path d="M17.3 5H6.7A4.7 4.7 0 0 0 2 9.7v4.6A4.7 4.7 0 0 0 6.7 19h.6a2 2 0 0 0 1.8-1.1l1.1-2.2a2 2 0 0 1 1.8-1.1h1.9a2 2 0 0 1 1.8 1.1l1.1 2.2a2 2 0 0 0 1.8 1.1h.7a4.7 4.7 0 0 0 4.7-4.7V9.7A4.7 4.7 0 0 0 17.3 5Z" />
              </svg>
            </div>
          </div>
          <div className="absolute left-[11%] top-[84.1%] -translate-y-1/2 text-left max-w-[220px] z-10">
            <h3 className="text-[14px] font-bold text-black tracking-tight leading-tight mb-1.5">
              Interactive Games & Activities
            </h3>
            <p className="text-[12px] text-black/60 font-light leading-relaxed">
              Engage your audience with interactive games, play and engaging experiences.
            </p>
          </div>

          {/* Node 6: Flexible Experience Design (Left) */}
          <div className="absolute left-[29.5%] top-[44.1%] -translate-x-1/2 -translate-y-1/2 z-10">
            <div className="w-13 h-13 rounded-full bg-[#FAF9F5] border border-[#DDD6CD] shadow-sm flex items-center justify-center p-3 hover:scale-105 transition-transform duration-300">
              <svg viewBox="0 0 24 24" className="w-6 h-6 stroke-black" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="7" height="7" rx="1.5" />
                <rect x="14" y="3" width="7" height="7" rx="1.5" />
                <rect x="3" y="14" width="7" height="7" rx="1.5" />
                <rect x="14" y="14" width="7" height="7" rx="1.5" />
              </svg>
            </div>
          </div>
          <div className="absolute left-[5%] top-[42.3%] -translate-y-1/2 text-left max-w-[210px] z-10">
            <h3 className="text-[14px] font-bold text-black tracking-tight leading-tight mb-1.5">
              Flexible Experience Design
            </h3>
            <p className="text-[12px] text-black/60 font-light leading-relaxed">
              Adapt the experience for different spaces, audiences and use cases with flexible design and delivery.
            </p>
          </div>
        </div>

        {/* Mobile & Tablet View (< lg): Clean architectural card system with the exact same icons */}
        <div className="lg:hidden mt-8">
          {/* Centered Interaction Badge */}
          <div className="flex flex-col items-center justify-center mb-8 py-6 border-y border-[#E2DDD4]">
            <div className="relative flex flex-col items-center">
              <div className="w-12 h-12 rounded-full border border-[#D3C9BD] flex items-center justify-center mb-2 bg-[#FAF9F5] shadow-sm">
                <Sparkles className="w-5 h-5 text-black/70" />
              </div>
              <span className="font-mono text-[11px] font-bold tracking-[0.3em] text-neutral-800 uppercase">
                INTERACTION
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
            {data.keyFeatures.map((feat, idx) => {
              const mobileIcons = [
                <svg key="0" viewBox="0 0 24 24" className="w-5 h-5 stroke-black" fill="none" strokeWidth="1.5" strokeLinecap="round"><circle cx="12" cy="7" r="3" /><path d="M7 21c0-4 2.5-6.5 5-6.5s5 2.5 5 6.5" /><path d="M8 15l-3 3" /><path d="M16 15l3 3" /></svg>,
                <svg key="1" viewBox="0 0 24 24" className="w-5 h-5 stroke-black" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="14" rx="3" /><path d="M6 8h2M6 8v2M18 8h-2M18 8v2M6 16h2M6 16v-2M18 16h-2M18 16v-2" /><polygon points="10 9 15 12 10 15 10 9" fill="currentColor" stroke="none" /></svg>,
                <svg key="2" viewBox="0 0 24 24" className="w-5 h-5 stroke-black" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="m12 2 10 5-10 5-10-5Z" /><path d="m2 12 10 5 10-5" /><path d="m2 17 10 5 10-5" /></svg>,
                <svg key="3" viewBox="0 0 24 24" className="w-5 h-5 stroke-black" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="13" cy="14" r="7" /><polyline points="13 11 13 14 15 16" /><path d="M13 3v2" /><path d="M3 11h4M4 14h3M2 17h5" /></svg>,
                <svg key="4" viewBox="0 0 24 24" className="w-5 h-5 stroke-black" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 11h4m-2-2v4" /><circle cx="15" cy="11" r="1" fill="currentColor" /><circle cx="17" cy="13" r="1" fill="currentColor" /><path d="M17.3 5H6.7A4.7 4.7 0 0 0 2 9.7v4.6A4.7 4.7 0 0 0 6.7 19h.6a2 2 0 0 0 1.8-1.1l1.1-2.2a2 2 0 0 1 1.8-1.1h1.9a2 2 0 0 1 1.8 1.1l1.1 2.2a2 2 0 0 0 1.8 1.1h.7a4.7 4.7 0 0 0 4.7-4.7V9.7A4.7 4.7 0 0 0 17.3 5Z" /></svg>,
                <svg key="5" viewBox="0 0 24 24" className="w-5 h-5 stroke-black" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7" rx="1.5" /><rect x="14" y="3" width="7" height="7" rx="1.5" /><rect x="3" y="14" width="7" height="7" rx="1.5" /><rect x="14" y="14" width="7" height="7" rx="1.5" /></svg>,
              ];
              const icon = mobileIcons[idx % mobileIcons.length];

              return (
                <div key={idx} className="p-5 rounded-2xl bg-white border border-[#E2DDD4] shadow-sm flex flex-col justify-between">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-[#FAF9F5] border border-[#DDD6CD] flex items-center justify-center shrink-0">
                      {icon}
                    </div>
                    <h3 className="text-sm font-bold text-black tracking-tight leading-snug">
                      {feat.title}
                    </h3>
                  </div>
                  <p className="text-xs text-black/60 font-light leading-relaxed">
                    {feat.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );

  // Section: The Experience / Why It Matters (THE EXPERIENCE) - Matching Exact Reference Mockup
  const theExperienceSection = (
    <section id="the-experience" className="py-16 sm:py-20 lg:py-24 bg-white scroll-mt-20 relative overflow-hidden">
      {/* Right Side Decorative Circular Arc and Monospace Tag (from Reference Design) */}
      <div className="hidden lg:block absolute right-0 top-0 bottom-0 w-[420px] xl:w-[520px] pointer-events-none select-none overflow-hidden">
        <svg 
          viewBox="0 0 450 650" 
          fill="none" 
          className="w-full h-full"
          preserveAspectRatio="xMaxYMid meet"
        >
          <path 
            d="M 450,40 C 240,160 120,320 120,440 C 120,530 220,600 450,650" 
            stroke="#e5e5e5" 
            strokeWidth="1.5" 
          />
        </svg>
        <div className="absolute right-10 xl:right-16 top-1/2 -translate-y-1/2 flex flex-col items-start gap-3">
          <div className="w-10 h-[1.5px] bg-neutral-300" />
          <span className="font-mono text-[10px] sm:text-[11px] font-semibold tracking-[0.25em] text-neutral-400 uppercase leading-relaxed">
            INTERACTIVE SPACES<br />REAL IMPACT
          </span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header with Light/Black Font Weight Contrast */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2.5 mb-3.5">
              <span className="w-6 h-[1.5px] bg-neutral-400" />
              <span className="font-mono text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.25em] text-neutral-500">
                {data.experienceLabel || "THE EXPERIENCE"}
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] xl:text-[50px] tracking-tight leading-[1.12]">
              <span className="block font-light text-neutral-800">
                Give People More Than
              </span>
              <span className="block font-black text-black">
                Something to Watch
              </span>
            </h2>
          </div>
          <div className="max-w-xs sm:max-w-sm lg:pt-8 text-neutral-500 text-xs sm:text-sm font-light leading-relaxed">
            <p>
              {data.benefitsIntro || "Interactive projection changes the role of the visitor. Instead of simply viewing digital content, people can become part of the experience."}
            </p>
          </div>
        </div>

        {/* Wavy S-Curve Spine with Dynamic Dots and Circular Icon Badges */}
        <div className="max-w-3xl relative flex items-stretch">
          {/* Vertical Organic Wavy Path with Dots */}
          <div className="w-10 sm:w-14 lg:w-16 shrink-0 relative self-stretch mr-3 sm:mr-4 select-none pointer-events-none">
            <svg 
              viewBox="0 0 50 500" 
              preserveAspectRatio="none" 
              className="w-full h-full overflow-visible"
            >
              <path 
                d="M 34,15 C 29,25 24,38 20,50 C 10,75 10,110 24,130 C 31,140 36,146 39,150 C 45,170 45,210 32,230 C 24,240 18,246 15,250 C 12,270 12,310 25,330 C 33,340 39,346 42,350 C 46,370 46,410 31,430 C 23,440 17,446 14,450 C 13,470 14,485 14,495" 
                fill="none" 
                stroke="#d4d4d4" 
                strokeWidth="1.5" 
                vectorEffect="non-scaling-stroke"
              />
              <circle cx="20" cy="50" r="3.5" fill="#171717" />
              <circle cx="39" cy="150" r="3.5" fill="#171717" />
              <circle cx="15" cy="250" r="3.5" fill="#171717" />
              <circle cx="42" cy="350" r="3.5" fill="#171717" />
              <circle cx="14" cy="450" r="3.5" fill="#171717" />
            </svg>
          </div>

          {/* 5 Experience Pillars List */}
          <div className="flex-1 flex flex-col justify-between py-2 space-y-6 sm:space-y-0">
            {data.benefits.slice(0, 5).map((b, idx) => {
              const icons = [
                <User key="0" className="w-5 h-5 text-neutral-800 stroke-[1.5]" />,
                <Sparkles key="1" className="w-5 h-5 text-neutral-800 stroke-[1.5]" />,
                <Brain key="2" className="w-5 h-5 text-neutral-800 stroke-[1.5]" />,
                <Heart key="3" className="w-5 h-5 text-neutral-800 stroke-[1.5]" />,
                <Layers key="4" className="w-5 h-5 text-neutral-800 stroke-[1.5]" />,
              ];
              const icon = icons[idx % icons.length];

              return (
                <div 
                  key={idx} 
                  className="flex items-start sm:items-center gap-4 sm:gap-6 min-h-[85px] sm:min-h-[100px] group transition-all"
                >
                  {/* Circular Icon Badge */}
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-neutral-100/90 border border-black/5 flex items-center justify-center shrink-0 shadow-xs group-hover:scale-105 group-hover:bg-neutral-200/70 transition-all duration-300">
                    {icon}
                  </div>

                  {/* Title, Description & Underline Dash */}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base sm:text-lg font-bold text-neutral-900 tracking-tight leading-snug">
                      {b.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-neutral-500 font-light leading-relaxed mt-0.5 max-w-xl">
                      {b.desc}
                    </p>
                    <div className="w-8 sm:w-10 h-[1.5px] bg-neutral-200 mt-2.5 transition-all group-hover:w-16 group-hover:bg-neutral-400" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );

  // Section: Featured Projects (Exhibition Stage for other solution subpages)
  const featuredProjectsSection = (
    <section id="projects" className="py-8 lg:py-12 bg-black text-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 mb-6 sm:mb-8">
          <div>
            <div className="flex items-center gap-2 text-[10px] sm:text-[11px] font-mono font-semibold uppercase tracking-[0.2em] text-white/60 mb-2">
              <Sparkles className="w-3.5 h-3.5 text-white/50" />
              <span>Featured Installations • Live Showcase</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight leading-[1.1]">
              {data.projectsHeading || "See the Solution in Action"}
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-white/70 font-light leading-relaxed max-w-md">
            {data.projectsIntro}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
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
                          isActive ? "text-white" : "text-white/60"
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

          <div className="lg:col-span-7 order-1 lg:order-2">
            <div className="rounded-2xl sm:rounded-3xl overflow-hidden bg-zinc-950 border border-white/15 shadow-2xl flex flex-col">
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-black">
                <SafeImage 
                  key={activeProject.img + activeProjectIdx}
                  src={activeProject.img} 
                  alt={activeProject.title} 
                  className="w-full h-full object-cover opacity-95 brightness-105 contrast-105 transition-all duration-700 hover:scale-105" 
                  containerClassName="w-full h-full" 
                />
              </div>

              <div className="p-5 sm:p-6 bg-zinc-950 border-t border-white/10 flex flex-col gap-4">
                <div>
                  <div className="flex items-center gap-3 text-[10px] font-mono uppercase tracking-[0.2em] font-semibold text-white/50 mb-2">
                    <span className="text-white/80">{activeProject.industry} INSTALLATION</span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-white/40" />
                      <span>{activeProject.location}</span>
                    </span>
                  </div>
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
  );

  // Section: Related Solutions (Explore Other Interactive Experiences) - Matching Reference Image
  const relatedSolutionsSection = (
    <section id="related-solutions" className="py-14 sm:py-16 lg:py-20 bg-white scroll-mt-20 relative overflow-hidden">
      {/* SVG ClipPath Definitions for the Angled Card Tops with Rounded Corners */}
      <svg className="absolute w-0 h-0 pointer-events-none" aria-hidden="true">
        <defs>
          <clipPath id="slanted-card-0" clipPathUnits="objectBoundingBox">
            <path d="M 0,0.18 C 0,0.12 0.03,0.09 0.08,0.08 L 0.92,0 C 0.97,0 1,0.03 1,0.08 L 1,0.92 C 1,0.97 0.97,1 0.92,1 L 0.08,1 C 0.03,1 0,0.97 0,0.92 Z" />
          </clipPath>
          <clipPath id="slanted-card-1" clipPathUnits="objectBoundingBox">
            <path d="M 0,0.15 C 0,0.10 0.03,0.08 0.08,0.07 L 0.92,0 C 0.97,0 1,0.03 1,0.07 L 1,0.93 C 1,0.98 0.97,1 0.92,1 L 0.08,1 C 0.03,1 0,0.97 0,0.93 Z" />
          </clipPath>
          <clipPath id="slanted-card-2" clipPathUnits="objectBoundingBox">
            <path d="M 0,0.12 C 0,0.08 0.03,0.06 0.08,0.05 L 0.92,0 C 0.97,0 1,0.03 1,0.06 L 1,0.94 C 1,0.98 0.97,1 0.92,1 L 0.08,1 C 0.03,1 0,0.98 0,0.94 Z" />
          </clipPath>
          <clipPath id="slanted-card-3" clipPathUnits="objectBoundingBox">
            <path d="M 0,0.10 C 0,0.06 0.03,0.05 0.08,0.04 L 0.92,0 C 0.97,0 1,0.02 1,0.05 L 1,0.95 C 1,0.98 0.97,1 0.92,1 L 0.08,1 C 0.03,1 0,0.98 0,0.95 Z" />
          </clipPath>
        </defs>
      </svg>

      <div className="max-w-7xl 2xl:max-w-[1536px] 3xl:max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header: Left aligned, lowered on desktop to utilize space above cards 1 & 2 */}
        <div className="max-w-xl lg:w-[48%] mb-6 lg:-mb-28 relative z-10">
          <div className="flex items-center gap-3 text-[10px] sm:text-[11px] font-mono font-semibold uppercase tracking-[0.25em] text-black/50 mb-2.5 sm:mb-3">
            <span>09</span>
            <span>{data.relatedSolutionsLabel || "RELATED SOLUTIONS"}</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-[42px] font-black text-black tracking-tight leading-[1.12] mb-3">
            <span className="block">Explore Other</span>
            <span className="block">Interactive Experiences</span>
          </h2>

          <p className="text-xs sm:text-sm lg:text-base text-black/60 font-light leading-relaxed max-w-md">
            Our interactive technologies can work together to create even more engaging and immersive environments.
          </p>
        </div>

        {/* 4 Solutions Cards: Ascending Heights with Slanted Tops, Title, Arrow & Description */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6 items-end">
          {allOtherSolutions
            .filter(
              (s) =>
                s.slug !== data.slug &&
                !(data.slug === "interactive-spaces" && s.slug === "interactive-projection") &&
                !(data.slug === "interactive-projection" && s.slug === "interactive-spaces")
            )
            .slice(0, 4)
            .map((item, idx) => {
              // Ascending image heights for desktop (Card 0: 180px, Card 1: 225px, Card 2: 270px, Card 3: 315px)
              const heightClasses = [
                "h-[160px] sm:h-[175px] lg:h-[180px]",
                "h-[190px] sm:h-[210px] lg:h-[225px]",
                "h-[225px] sm:h-[245px] lg:h-[270px]",
                "h-[260px] sm:h-[285px] lg:h-[315px]",
              ][idx] || "h-[220px]";

              const clipPathStyle = {
                clipPath: `url(#slanted-card-${idx})`,
              };

              return (
                <Link
                  key={idx}
                  href={item.href}
                  className="group flex flex-col w-full cursor-pointer transition-all duration-300 hover:-translate-y-1.5"
                >
                  {/* Slanted Image Container */}
                  <div
                    className={`relative w-full ${heightClasses} overflow-hidden rounded-2xl bg-neutral-900 shadow-md transition-all duration-500 group-hover:shadow-xl`}
                    style={clipPathStyle}
                  >
                    <SafeImage
                      src={item.img}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      containerClassName="w-full h-full"
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300" />
                  </div>

                  {/* Clean Footer Bar: Title, Arrow & Description Below */}
                  <div className="pt-3 pb-1 flex flex-col gap-1.5 px-0.5">
                    <div className="flex items-center justify-between gap-2">
                      <h3 className="text-xs sm:text-sm font-bold text-black tracking-tight group-hover:text-black transition-colors leading-tight">
                        {item.title}
                      </h3>
                      <div className="shrink-0 flex items-center">
                        <ArrowRight className="w-3.5 h-3.5 text-black transition-transform duration-300 group-hover:translate-x-1" />
                      </div>
                    </div>
                    <p className="text-[11px] sm:text-xs text-black/60 font-light leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </Link>
              );
            })}
        </div>
      </div>
    </section>
  );

  // Section: FAQs (COMMON QUESTIONS)
  const faqsSection = (
    <section id="faqs" className="py-12 lg:py-16 bg-neutral-50/60 scroll-mt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label={data.faqsLabel || "COMMON QUESTIONS"}
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
                    <span className={`font-mono text-xs pt-1 transition-colors ${isOpen ? "text-black font-bold" : "text-black/75 group-hover:text-black"}`}>
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
  );

  // Section: Call To Action
  const ctaSection = <HugeCTA />;

  // ---------------------------------------------------------------------------
  // RENDER ALIGNED SEQUENCE
  // ---------------------------------------------------------------------------
  return (
    <div className="w-full bg-white text-black">
      {heroSection}

      {/* For interactive-projection, align with applications section directly after hero */}
      {isAlignedWithHomeTxt ? (
        <>
          {applicationsSection}
          {surfaceFormatsSection}
          {industriesSection}
          {howItWorksSection}
          {capabilitiesSection}
          {theExperienceSection}
          {relatedSolutionsSection}
          {faqsSection}
          {ctaSection}
        </>
      ) : (
        <>
          {applicationsSection}
          {surfaceFormatsSection}
          {capabilitiesSection}
          {howItWorksSection}
          {industriesSection}
          {theExperienceSection}
          {featuredProjectsSection}
          {relatedSolutionsSection}
          {faqsSection}
          {ctaSection}
        </>
      )}
    </div>
  );
}
