import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SafeImage from "@/components/SafeImage";
import Link from "next/link";
import { ArrowRight, Sparkles, Activity, Layers, Expand, Tv, Lightbulb, Users, Monitor, Target, Compass, Palette, Wrench, GraduationCap, ChevronRight, RefreshCw } from "lucide-react";
import FAQAccordion from "../[slug]/FAQAccordion";
import Curved3DCarousel from "@/components/Curved3DCarousel";
import CapabilitiesStudio from "./CapabilitiesStudio";
import { education } from "@/data/industries/education";

export const metadata: Metadata = {
  title: "Interactive Learning Solutions for Schools and Classrooms",
  description: "Turn classrooms into interactive learning spaces with motion projection, immersive experiences and hands-on digital activities built for education.",
  alternates: {
    canonical: "/industries/education",
  },
  openGraph: {
    title: "Interactive Learning Solutions for Schools and Classrooms",
    description: "Turn classrooms into interactive learning spaces with motion projection, immersive experiences and hands-on digital activities built for education.",
    url: "/industries/education",
    type: "website",
    images: [
      {
        url: "/images/industry_education_hero.jpg",
        width: 1200,
        height: 630,
        alt: "Interactive classroom projection for education",
      },
    ],
  },
};

export default function EducationIndustryPage() {
  const data = education;

  const challengeItems = [
    {
      title: data.challenges.items[0]?.title || "Keeping Students Engaged",
      desc: data.challenges.items[0]?.desc || "Traditional lessons make it hard to hold attention through a full class period.",
      icon: Users,
      badgeBg: "bg-[#E0F2FE]",
      badgeText: "text-[#0284C7]",
      img: "/images/challenge_engaged_students.webp",
    },
    {
      title: data.challenges.items[1]?.title || "Passive Learning",
      desc: data.challenges.items[1]?.desc || "Many classrooms still rely on watching and listening rather than doing.",
      icon: Lightbulb,
      badgeBg: "bg-[#DCFCE7]",
      badgeText: "text-[#16A34A]",
      img: "/images/challenge_passive_learning.webp",
    },
    {
      title: data.challenges.items[2]?.title || "Different Learning Styles",
      desc: data.challenges.items[2]?.desc || "A single teaching method does not reach every student the same way.",
      icon: Layers,
      badgeBg: "bg-[#F3E8FF]",
      badgeText: "text-[#9333EA]",
      img: "/images/challenge_learning_styles.webp",
    },
    {
      title: data.challenges.items[3]?.title || "Underused Classroom Space",
      desc: data.challenges.items[3]?.desc || "Floors, walls and shared areas sit idle instead of being part of the lesson.",
      isCustomIcon: true,
      badgeBg: "bg-[#FFEDD5]",
      badgeText: "text-[#EA580C]",
      img: "/images/challenge_underused_space.webp",
    },
    {
      title: data.challenges.items[4]?.title || "Limited Group Participation",
      desc: data.challenges.items[4]?.desc || "Fewer opportunities for teamwork and collaborative activities.",
      icon: Users,
      badgeBg: "bg-[#FEF3C7]",
      badgeText: "text-[#D97706]",
      img: "/images/challenge_group_collaboration.webp",
    },
    {
      title: data.challenges.items[5]?.title || "Rigid Content",
      desc: data.challenges.items[5]?.desc || "Static materials are hard to update or adapt across subjects and age groups.",
      icon: Monitor,
      badgeBg: "bg-[#FFE4E6]",
      badgeText: "text-[#E11D48]",
      img: "/images/challenge_flexible_content.webp",
    },
  ];

  const solutions = [
    {
      tag: "SURFACE PROJECTION",
      title: "Interactive Projection",
      desc: "Turn floors and walls into interactive surfaces for active lessons, motor-skill games and hands-on discovery.",
      href: "/solutions/interactive-projection",
      cta: "Explore Interactive Projection",
      icon: Activity,
      img: "/images/education_interactive_floor.jpg",
      features: ["Motion floors & projection walls", "Real-time body tracking", "Active curriculum packages"],
    },
    {
      tag: "SPATIAL VISUALS",
      title: "Immersive Experiences",
      desc: "Create immersive learning environments using projection and spatial visuals to explore subjects in new dimensions.",
      href: "/solutions/immersive-environment",
      cta: "Explore Immersive Experiences",
      icon: Expand,
      img: "/images/education_exp_immersive_room.webp",
      features: ["360 panoramic room visuals", "Spatial surround audio", "Full sensory environment"],
    },
    {
      tag: "MOTION ENGAGEMENT",
      title: "Interactive Engagement",
      desc: "Add motion-based games and activities that give students an active reason to move, collaborate and participate.",
      href: "/solutions/interactive-projection",
      cta: "Explore Interactive Engagement",
      icon: Layers,
      img: "/images/education_strike_wall_activity.jpg",
      features: ["Motion strike & touch walls", "Collaborative team exercises", "Instant interactive feedback"],
    },
    {
      tag: "LARGE FORMAT DISPLAY",
      title: "LED & 3D Display Solutions",
      desc: "Deploy high-impact displays for multi-student presentations, visual STEM learning and school auditorium events.",
      href: "/solutions",
      cta: "Explore LED & 3D Displays",
      icon: Tv,
      img: "/images/education_stem_led_display.jpg",
      features: ["High-brightness fine pitch LED", "STEM experiment visualizers", "Multi-student group viewing"],
    },
  ];

  const howItWorksSteps = [
    {
      num: "01",
      phase: "Discovery",
      title: "Define the Learning Goal",
      desc: "We identify the subject, age group and type of activity the space needs to support.",
      icon: Target,
    },
    {
      num: "02",
      phase: "Planning",
      title: "Plan the Experience",
      desc: "The layout, content and interaction are planned around how students will use the space.",
      icon: Compass,
    },
    {
      num: "03",
      phase: "Creation",
      title: "Create the Content",
      desc: "Digital activities and visuals are built around the lesson and learning objective.",
      icon: Palette,
    },
    {
      num: "04",
      phase: "Deployment",
      title: "Set Up the Space",
      desc: "The projection, display and interaction system is installed and configured on-site.",
      icon: Wrench,
    },
    {
      num: "05",
      phase: "Launch",
      title: "Start Learning",
      desc: "Teachers and students use the experience as part of everyday lessons and activities.",
      icon: GraduationCap,
    },
  ];

  const featuredWork = [
    {
      title: "Interactive Classroom Projection",
      desc: "Motion-responsive surfaces that turn everyday lessons into collaborative, physically active exercises.",
      img: "/images/education_classroom_floor_projection.jpg",
    },
    {
      title: "Hands-On STEM Discovery Lab",
      desc: "Digital discovery setups where students run visual experiments and solve interactive puzzles together.",
      img: "/images/education_stem_discovery_lab.jpg",
    },
    {
      title: "Active Learning & Motion Zone",
      desc: "Movement-integrated games that keep students energized and collaborating during lessons and group breaks.",
      img: "/images/education_motion_zone.jpg",
    },
  ];

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
          <div className="inline-flex items-center justify-center gap-2 text-xs sm:text-sm font-semibold uppercase tracking-wide text-white/70 mb-3">
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
              <span>Explore Education Solutions</span>
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

      {/* SECTION 2: THE CHALLENGE (Matching Image 1 Design) */}
      <section className="w-full">
        {/* Top Dark Header Banner */}
        <div className="relative w-full overflow-hidden bg-black text-white py-8 sm:py-10 lg:py-12 flex items-center">
          <div className="absolute inset-0 z-0">
            <SafeImage
              src="/images/education_challenge_banner.webp?v=20260928b"
              alt="Interactive Learning Spaces"
              priority={true}
              loading="eager"
              className="w-full h-full object-cover opacity-60"
              containerClassName="w-full h-full bg-black"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/45 to-black/85 pointer-events-none" />
          </div>

          <div className="relative z-10 max-w-7xl 2xl:max-w-[1536px] w-full mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 lg:gap-12">
              <div className="max-w-2xl">
                <div className="flex items-center gap-2.5 mb-2.5 sm:mb-3">
                  <span className="w-6 sm:w-8 h-[2px] bg-white"></span>
                  <span className="text-xs sm:text-sm font-semibold uppercase tracking-wide text-white">
                    SOLUTIONS FOR EDUCATION
                  </span>
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-[40px] xl:text-[44px] tracking-tight leading-[1.08] text-white">
                  <span className="font-extrabold block">Creating More Interactive</span>
                  <span className="font-light block text-white/90 mt-1">Learning Spaces</span>
                </h2>
              </div>

              <div className="lg:max-w-md xl:max-w-lg lg:text-left">
                <p className="text-xs sm:text-sm lg:text-[14px] text-white/80 font-light leading-relaxed">
                  {data.challenges.intro}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 2-Column Card Grid with Dividers & Thumbnail Images */}
        <div className="bg-white pt-8 pb-12 sm:pt-9 sm:pb-16 text-black">
          <div className="max-w-7xl 2xl:max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {challengeItems.map((item, idx) => {
                const IconComponent = item.icon;
                const isLeftColumn = idx % 2 === 0;
                const rowIndex = Math.floor(idx / 2);
                const isFirstRow = rowIndex === 0;
                const isLastRow = rowIndex === Math.floor((challengeItems.length - 1) / 2);
                const isLastItem = idx === challengeItems.length - 1;

                return (
                  <div
                    key={idx}
                    className={`flex items-center justify-between gap-3.5 sm:gap-6 ${
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
                    {/* Soft Pastel Circular Icon Badge */}
                    <div
                      className={`w-13 h-13 sm:w-14 sm:h-14 lg:w-15 lg:h-15 rounded-full shrink-0 flex items-center justify-center ${item.badgeBg} ${item.badgeText}`}
                    >
                      {item.isCustomIcon ? (
                        <svg
                          className="w-5 h-5 sm:w-6 sm:h-6 stroke-[1.75]"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <rect width="18" height="18" x="3" y="3" rx="2" />
                          <path d="M9 3v18" />
                          <rect width="2" height="6" x="5" y="11" rx="0.5" fill="currentColor" />
                        </svg>
                      ) : IconComponent ? (
                        <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 stroke-[1.75]" />
                      ) : null}
                    </div>

                    {/* Middle Content */}
                    <div className="flex-1 min-w-0 pr-2 sm:pr-4 space-y-1">
                      <h3 className="text-base sm:text-[17px] lg:text-lg font-bold text-neutral-900 tracking-tight leading-snug">
                        {item.title}
                      </h3>
                      <p className="text-xs sm:text-[13px] text-neutral-500 font-normal leading-relaxed">
                        {item.desc}
                      </p>
                    </div>

                    {/* Right Image Thumbnail */}
                    <div className="relative w-32 h-20 sm:w-40 sm:h-26 md:w-48 md:h-30 lg:w-52 lg:h-32 shrink-0 rounded-2xl overflow-hidden shadow-[0_2px_8px_rgba(0,0,0,0.06)] bg-neutral-100 group">
                      <SafeImage
                        src={`${item.img}?v=20260928b`}
                        alt={item.title}
                        priority={true}
                        loading="eager"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        containerClassName="w-full h-full"
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: OUR VISION */}
      <section className="py-14 sm:py-16 lg:py-20 bg-white text-black border-b border-neutral-100">
        <div className="max-w-7xl 2xl:max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-6 space-y-4">
              <div>
                <span className="text-xs sm:text-sm font-semibold uppercase tracking-wide text-black/60 block mb-2">
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
                  src={data.vision.img || "/images/var_sandbox_projection.jpg"}
                  alt="Students engaged in active interactive learning"
                  className="w-full h-full object-cover"
                  containerClassName="w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: INTERACTIVE SOLUTIONS FOR EDUCATION (Open Architectural Spread: Zero Cards, Zero Boxes, Zero Frames) */}
      <section id="solutions" className="py-14 sm:py-16 lg:py-20 bg-white text-black scroll-mt-20">
        <div className="max-w-7xl 2xl:max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6 sm:pb-8 border-b border-black/15 mb-8 sm:mb-10">
            <div className="max-w-2xl">
              <span className="text-xs sm:text-sm font-semibold uppercase tracking-wide text-neutral-500 block mb-2 sm:mb-2.5">
                SOLUTIONS FOR YOUR SPACE
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight leading-tight text-black">
                {data.solutions.title}
              </h2>
            </div>
            <p className="text-xs sm:text-sm lg:text-base text-neutral-500 font-light max-w-md leading-relaxed">
              Purpose-built motion tracking and projection systems engineered to turn conventional classrooms into collaborative discovery spaces.
            </p>
          </div>

          {/* 4 Open Architectural Columns (Zero Cards, Zero Boxes, Zero Frames) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-8 xl:gap-10">
            {solutions.map((item, idx) => {
              const IconComponent = item.icon;
              return (
                <div key={idx} className="group flex flex-col justify-between h-full">
                  <div>
                    {/* Top Tag Rule (Numbers Removed) */}
                    <div className="flex items-center justify-between text-xs font-mono pb-2.5 border-b border-black/15 mb-4">
                      <span className="text-[10px] uppercase tracking-wider text-neutral-400 font-medium">
                        {item.tag}
                      </span>
                    </div>

                    {/* Unframed Open Photo */}
                    <div className="relative aspect-[16/10] rounded-xl overflow-hidden bg-neutral-100 mb-4">
                      <SafeImage
                        src={item.img}
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        containerClassName="w-full h-full"
                      />
                    </div>

                    {/* Title */}
                    <div className="flex items-center gap-2 mb-2">
                      <IconComponent className="w-4 h-4 text-black shrink-0" strokeWidth={1.75} />
                      <h3 className="text-lg font-bold text-black tracking-tight group-hover:text-neutral-600 transition-colors">
                        {item.title}
                      </h3>
                    </div>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-neutral-600 font-light leading-relaxed mb-4">
                      {item.desc}
                    </p>

                    {/* Feature Bullets */}
                    <div className="space-y-1.5 mb-6">
                      {item.features.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-center gap-2 text-xs text-neutral-500 font-normal">
                          <span className="w-1 h-1 rounded-full bg-black/40 shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Clean Minimalist Link */}
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
              );
            })}
          </div>

        </div>
      </section>

      {/* SECTION 5: RELATED USE CASE (Clean Full-Width Dark Banner) */}
      <section className="relative w-full overflow-hidden bg-black text-white py-10 sm:py-14 lg:py-16">
        {/* Background Image with Dark Gradient Overlay */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <SafeImage
            src="/images/education_exp_interactive_classroom.webp"
            alt="Interactive Learning Environment"
            className="w-full h-full object-cover opacity-20"
            containerClassName="w-full h-full bg-black"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 to-black pointer-events-none" />
        </div>

        <div className="relative z-10 max-w-7xl 2xl:max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 lg:gap-10">
            {/* Left Content */}
            <div className="flex-1 min-w-0 max-w-3xl xl:max-w-4xl">
              <span className="text-xs sm:text-sm font-semibold uppercase tracking-wide text-neutral-400 block mb-2.5 sm:mb-3">
                SEE IT IN CONTEXT
              </span>
              <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-[28px] xl:text-[34px] 2xl:text-4xl font-extrabold text-white tracking-tight leading-tight lg:whitespace-nowrap">
                <span className="block sm:inline">Explore the Interactive</span>{" "}
                <span className="block sm:inline">Learning Use Case</span>
              </h3>
              <p className="text-xs sm:text-sm lg:text-base text-neutral-400 font-light mt-2 max-w-xl leading-relaxed">
                See how motion-tracked projections, gesture walls, and immersive curriculum modules come together in real school environments.
              </p>
            </div>

            {/* Right Premium CTA Button */}
            <div className="shrink-0">
              <Link
                href="/use-cases/interactive-learning"
                className="group inline-flex items-center justify-center gap-3.5 px-7 sm:px-8 py-3.5 sm:py-4 rounded-full bg-white text-black text-xs sm:text-sm font-extrabold uppercase tracking-wider transition-all duration-300 hover:bg-neutral-100 hover:scale-[1.03] active:scale-95 shadow-[0_0_35px_rgba(255,255,255,0.18)]"
              >
                <span>Explore Interactive Learning</span>
                <span className="w-7 h-7 rounded-full bg-black text-white flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1 shrink-0">
                  <ArrowRight className="w-3.5 h-3.5 text-white" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: HOW IT WORKS (Architectural Connected Process Line: Zero Cards, Zero Boxes, Zero Frames, Zero Images) */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white text-black">
        <div className="max-w-7xl 2xl:max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="max-w-3xl mb-12 sm:mb-16">
            <span className="text-xs sm:text-sm font-semibold uppercase tracking-wide text-neutral-500 block mb-2 sm:mb-3">
              HOW IT WORKS
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight leading-tight text-neutral-900">
              From Learning Goal to Interactive Experience
            </h2>
            <p className="text-sm sm:text-base text-neutral-500 font-light mt-2 max-w-2xl leading-relaxed">
              A structured five-step path from curriculum planning to immersive classroom activation.
            </p>
          </div>

          {/* Desktop Flow: Connected Architectural Rail (lg and above) */}
          <div className="hidden lg:grid grid-cols-5 gap-6 xl:gap-8 relative">
            {howItWorksSteps.map((step, idx) => {
              const IconComponent = step.icon;
              const isLast = idx === howItWorksSteps.length - 1;
              return (
                <div key={idx} className="group flex flex-col">
                  {/* Process Node and Connector Line */}
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 rounded-full border border-neutral-300 bg-white flex items-center justify-center text-neutral-800 transition-all duration-300 group-hover:border-black group-hover:bg-black group-hover:text-white group-hover:scale-105 shrink-0 shadow-sm z-10">
                      <IconComponent className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
                    </div>
                    {!isLast && (
                      <div className="flex-1 h-[1px] bg-neutral-200 ml-4 -mr-6 xl:-mr-8 relative hidden lg:flex items-center justify-end z-0">
                        <ChevronRight className="w-3.5 h-3.5 text-neutral-300 -mr-1.5 shrink-0" />
                      </div>
                    )}
                  </div>

                  {/* Step Meta & Content */}
                  <div className="space-y-2 pr-2">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-neutral-400 group-hover:text-black transition-colors">
                        {step.num}
                      </span>
                      <span className="text-xs font-semibold uppercase tracking-wide text-neutral-400">
                        {step.phase}
                      </span>
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-neutral-900 tracking-tight leading-snug group-hover:text-black transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-neutral-500 font-normal leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Mobile & Tablet Flow: Vertical Architectural Timeline (< lg) */}
          <div className="lg:hidden relative pl-2 sm:pl-4">
            <div className="space-y-8 sm:space-y-10 relative">
              {howItWorksSteps.map((step, idx) => {
                const IconComponent = step.icon;
                const isLast = idx === howItWorksSteps.length - 1;
                return (
                  <div key={idx} className="group flex items-start gap-4 sm:gap-6 relative">
                    {/* Vertical connecting rail between nodes */}
                    {!isLast && (
                      <div className="absolute left-[23px] top-12 bottom-[-32px] sm:bottom-[-40px] w-[1px] bg-neutral-200 z-0" />
                    )}

                    {/* Node */}
                    <div className="w-12 h-12 rounded-full border border-neutral-300 bg-white flex items-center justify-center text-neutral-800 transition-all duration-300 group-hover:border-black group-hover:bg-black group-hover:text-white shrink-0 shadow-sm relative z-10">
                      <IconComponent className="w-5 h-5" />
                    </div>

                    {/* Step Content */}
                    <div className="pt-0.5 space-y-1.5 flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold text-neutral-400">
                          {step.num}
                        </span>
                        <span className="text-xs font-semibold uppercase tracking-wide text-neutral-400">
                          {step.phase}
                        </span>
                      </div>
                      <h3 className="text-base sm:text-lg font-bold text-neutral-900 tracking-tight leading-snug">
                        {step.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-neutral-600 font-normal leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: EXPERIENCE IDEAS (Curved 360 Concave Carousel matching user reference) */}
      <section className="pt-10 sm:pt-14 lg:pt-16 pb-12 sm:pb-16 lg:pb-20 bg-black text-white overflow-hidden">
        <div className="max-w-7xl 2xl:max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 mb-2 sm:mb-3">
          <div className="max-w-3xl">
            <span className="text-xs sm:text-sm font-semibold uppercase tracking-wide text-white/60 block mb-2">
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

      {/* SECTION 8: WHAT IT ENABLES (Interactive Architectural Capability Studio: Zero Cards, Zero Boxes, Zero Frames, Zero Images) */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white text-black">
        <div className="max-w-7xl 2xl:max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-10 sm:mb-14 gap-4">
            <div className="max-w-2xl">
              <span className="text-xs sm:text-sm font-semibold uppercase tracking-wide text-neutral-500 block mb-2 sm:mb-3">
                WHAT IT ENABLES
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight leading-tight text-neutral-900">
                {data.benefits.title}
              </h2>
            </div>
            <p className="text-sm sm:text-base text-neutral-500 font-light max-w-md lg:text-right leading-relaxed">
              {data.benefits.intro}
            </p>
          </div>

          {/* Interactive Capability Studio */}
          <CapabilitiesStudio />
        </div>
      </section>

      {/* SECTION 9: FEATURED WORK (3-Panel Cinematic Exhibition Spread) */}
      <section className="py-14 sm:py-16 lg:py-20 bg-white text-black">
        <div className="max-w-7xl 2xl:max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-8 sm:mb-10">
            <span className="text-xs sm:text-sm font-semibold uppercase tracking-wide text-neutral-500 block mb-2">
              OUR WORK
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight leading-tight text-neutral-900">
              See What&apos;s Possible
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
            {featuredWork.map((work, idx) => {
              const types = ["Surface Projection", "STEM Innovation", "Motion Zone"];
              return (
                <div key={idx} className="group flex flex-col space-y-4">
                  <div className="relative aspect-[16/10] overflow-hidden bg-neutral-100">
                    <SafeImage
                      src={work.img}
                      alt={work.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      containerClassName="w-full h-full"
                    />
                  </div>
                  <div className="space-y-1.5 pt-1">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-semibold uppercase tracking-wide text-neutral-500">
                        {types[idx] || "Installation"}
                      </span>
                      <span className="font-mono text-xs text-neutral-400">
                        0{idx + 1}
                      </span>
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-neutral-900 tracking-tight leading-snug group-hover:text-black transition-colors">
                      {work.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-neutral-600 font-light leading-relaxed">
                      {work.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 13: FAQ */}
      <section className="py-14 sm:py-16 lg:py-20 bg-white text-black border-t border-neutral-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-10">
            <span className="text-xs sm:text-sm font-semibold uppercase tracking-wide text-black/60 block mb-2">
              COMMON QUESTIONS
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight leading-tight text-black">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="border-t border-black/15">
            <FAQAccordion faqs={data.faqs.items} />
          </div>
        </div>
      </section>

      {/* SECTION 14: FINAL CTA */}
      <section className="relative py-16 sm:py-20 lg:py-24 overflow-hidden bg-black text-white">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <SafeImage
            src="/images/industry_education_hero.jpg"
            alt="Interactive learning space"
            className="w-full h-full object-cover opacity-35"
            containerClassName="w-full h-full bg-black"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent pointer-events-none" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight leading-tight mb-4">
            {data.cta?.title || "Create a More Interactive Learning Space"}
          </h2>
          <p className="text-sm sm:text-base text-white/80 font-light max-w-2xl mx-auto mb-6 leading-relaxed">
            {data.cta?.subtitle || "Bring interactive projection, immersive experiences and hands-on digital activities into your classroom."}
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2.5 px-8 py-3.5 sm:py-4 rounded-full bg-white text-black text-xs sm:text-sm font-bold uppercase tracking-wider hover:bg-neutral-200 transition-all duration-300 active:scale-95 shadow-2xl"
          >
            <span>{data.cta?.buttonText || "Discuss Your Education Project"}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
