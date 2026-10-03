import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { industriesData, getIndustryDelivery, getIndustryCaseStudies } from "@/data/industries";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SafeImage from "@/components/SafeImage";
import Link from "next/link";
import { ArrowRight, Sparkles, Activity, Lightbulb, Layers, Brain, Cpu, Users, Network, ChevronRight, Target, Compass, Wrench, Palette, CheckCircle2 } from "lucide-react";
import FAQAccordion from "./FAQAccordion";
import Curved3DCarousel from "@/components/Curved3DCarousel";
import CaseStudiesSpotlight from "@/components/CaseStudiesSpotlight";

export function generateStaticParams() {
  return Object.keys(industriesData)
    .filter((slug) => slug !== "education" && slug !== "retail")
    .map((slug) => ({ slug }));
}

export async function generateMetadata(props: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await props.params;
  const industry = industriesData[slug];

  if (!industry) return {};

  return {
    title: industry.hero.title,
    description: industry.hero.subtitle,
    alternates: {
      canonical: `/industries/${slug}`,
    },
    openGraph: {
      title: industry.hero.title,
      description: industry.hero.subtitle,
      url: `/industries/${slug}`,
      type: "website",
      images: [
        {
          url: industry.hero.img,
          width: 1200,
          height: 630,
          alt: industry.hero.title,
        },
      ],
    },
  };
}

export default async function IndustrySubpage(props: { params: Promise<{ slug: string }> }) {
  const { slug } = await props.params;
  const industry = industriesData[slug];

  if (!industry) {
    notFound();
  }

  const caseStudies = getIndustryCaseStudies(industry);
  const delivery = getIndustryDelivery(slug);

  const solutionIcons = [Lightbulb, Layers, Sparkles, Brain, Cpu, Network];
  const techIcons = [Activity, Brain, Sparkles, Users];
  const processIcons = [Target, Compass, Palette, Wrench, CheckCircle2];

  return (
    <main className="min-h-screen bg-white text-black flex flex-col selection:bg-black selection:text-white">
      <Navbar />

      {/* SECTION 1: HERO */}
      <section className="relative h-screen min-h-[580px] flex flex-col justify-between items-center overflow-hidden pt-24 sm:pt-28 pb-8 bg-black text-white">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <SafeImage
            src={industry.hero.img}
            alt={industry.hero.title}
            className="w-full h-full object-cover opacity-55 scale-105"
            containerClassName="w-full h-full bg-black"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black pointer-events-none" />
        </div>

        <div className="my-auto relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
          <div className="inline-flex items-center justify-center gap-2 text-xs sm:text-sm font-semibold uppercase tracking-wide text-white/70 mb-3">
            <Sparkles className="w-3.5 h-3.5 text-white/70" />
            <span>{industry.hero.eyebrow}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.08] max-w-4xl mx-auto mb-4">
            {industry.hero.title}
          </h1>

          <p className="text-sm sm:text-base lg:text-lg text-white/80 font-light max-w-2xl mx-auto mb-8 leading-relaxed">
            {industry.hero.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 w-full sm:w-auto">
            <Link
              href="#solutions"
              className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-white text-black text-xs sm:text-sm font-bold uppercase tracking-wider hover:bg-neutral-200 transition-all active:scale-95 shadow-xl w-full sm:w-auto"
            >
              <span>Explore Solutions</span>
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
              src={industry.challenges.img || industry.hero.img}
              alt={industry.challenges.title}
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
                  <span className="text-xs sm:text-sm font-semibold uppercase tracking-wide text-white">
                    THE CHALLENGE
                  </span>
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-[40px] xl:text-[44px] tracking-tight leading-[1.08] text-white">
                  <span className="font-extrabold block">{industry.challenges.title}</span>
                </h2>
              </div>

              {industry.challenges.intro && (
                <div className="lg:max-w-md xl:max-w-lg lg:text-left">
                  <p className="text-xs sm:text-sm lg:text-[14px] text-white/80 font-light leading-relaxed">
                    {industry.challenges.intro}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Architectural 3-Column Challenge Grid */}
        <div className="bg-white pt-8 sm:pt-10 lg:pt-12 pb-12 sm:pb-14 lg:pb-16 text-black">
          <div className="max-w-7xl 2xl:max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 lg:gap-x-12 gap-y-8 sm:gap-y-10">
              {industry.challenges.items.map((item, idx) => {
                const challengeIcons = [Users, Target, Compass, Layers, Activity, Sparkles];
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

      {/* SECTION 3: OUR VISION (White Background with Split Layout) */}
      <section className="py-14 sm:py-16 lg:py-20 bg-white text-black border-b border-neutral-100">
        <div className="max-w-7xl 2xl:max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-6 space-y-4">
              <div>
                <span className="text-xs sm:text-sm font-semibold uppercase tracking-wide text-black/60 block mb-2">
                  OUR VISION
                </span>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight leading-tight text-black">
                  {industry.vision.title}
                </h2>
              </div>
              <p className="text-sm sm:text-base lg:text-lg text-neutral-600 font-light leading-relaxed">
                {industry.vision.intro}
              </p>
              {industry.vision.quote && (
                <div className="pt-2 border-l-2 border-black/40 pl-4 my-2">
                  <p className="text-sm sm:text-base font-medium text-black italic">
                    &ldquo;{industry.vision.quote.replace(/^["'"]+|["'"]+$/g, '').trim()}&rdquo;
                  </p>
                </div>
              )}
            </div>

            <div className="lg:col-span-6">
              <div className="relative aspect-[16/11] rounded-2xl overflow-hidden bg-neutral-200 shadow-xl">
                <SafeImage
                  src={industry.vision.img || industry.experiences?.items?.[0]?.img || industry.hero.img}
                  alt={industry.vision.title}
                  className="w-full h-full object-cover"
                  containerClassName="w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: INTERACTIVE SOLUTIONS (Architectural Column Grid) */}
      <section id="solutions" className="py-14 sm:py-16 lg:py-20 bg-white text-black scroll-mt-20">
        <div className="max-w-7xl 2xl:max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8">

          {/* Section Header */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6 sm:pb-8 border-b border-black/15 mb-8 sm:mb-10">
            <div className="max-w-2xl">
              <span className="text-xs sm:text-sm font-semibold uppercase tracking-wide text-neutral-500 block mb-2 sm:mb-2.5">
                SOLUTIONS FOR YOUR SPACE
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight leading-tight text-black">
                {industry.solutions.title}
              </h2>
            </div>
            {industry.solutions.intro && (
              <p className="text-xs sm:text-sm lg:text-base text-neutral-500 font-light max-w-md leading-relaxed">
                {industry.solutions.intro}
              </p>
            )}
          </div>

          {/* Solution Columns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-8 xl:gap-10">
            {industry.solutions.items.map((sol, idx) => {
              const IconComponent = solutionIcons[idx % solutionIcons.length];
              return (
                <div key={idx} className="group flex flex-col justify-between h-full">
                  <div>
                    {/* Top Tag Rule */}
                    <div className="flex items-center justify-between text-xs font-mono pb-2.5 border-b border-black/15 mb-4">
                      <span className="text-[10px] uppercase tracking-wider text-neutral-400 font-medium">
                        {String(idx + 1).padStart(2, '0')}
                      </span>
                    </div>

                    {/* Title */}
                    <div className="flex items-center gap-2 mb-2">
                      <IconComponent className="w-4 h-4 text-black shrink-0" strokeWidth={1.75} />
                      <h3 className="text-lg font-bold text-black tracking-tight group-hover:text-neutral-600 transition-colors">
                        {sol.title}
                      </h3>
                    </div>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-neutral-600 font-light leading-relaxed mb-6">
                      {sol.desc}
                    </p>
                  </div>

                  {/* Clean Minimalist Link */}
                  <div>
                    <Link
                      href="/solutions"
                      className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-black group-hover:text-neutral-600 transition-colors pt-2 border-t border-black/10 w-full justify-between"
                    >
                      <span>Explore Solution</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform duration-300" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* SECTION 5: EXPERIENCE IDEAS (Curved 3D Carousel on Dark Background) */}
      <section id="experiences" className="pt-14 sm:pt-16 lg:pt-20 pb-12 sm:pb-16 lg:pb-20 bg-black text-white overflow-hidden scroll-mt-24">
        <div className="max-w-7xl 2xl:max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 mb-2 sm:mb-3">
          <div className="max-w-3xl">
            <span className="text-xs sm:text-sm font-semibold uppercase tracking-wide text-white/60 block mb-2">
              EXPERIENCE IDEAS
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight leading-tight text-white">
              {industry.experiences.title}
            </h2>
            <p className="text-sm sm:text-base text-neutral-400 font-light mt-2 max-w-2xl leading-relaxed">
              {industry.experiences.intro}
            </p>
          </div>
        </div>

        <div className="w-full max-w-[1600px] mx-auto px-2 sm:px-4 lg:px-6">
          <Curved3DCarousel items={industry.experiences.items} />
        </div>
      </section>

      {/* SECTION 6: BENEFITS & OUTCOMES (Clean White Background Numbered Grid) */}
      <section className="py-14 sm:py-16 lg:py-20 bg-white text-black">
        <div className="max-w-7xl 2xl:max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8">

          {/* Section Header */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-10 sm:mb-14 gap-4">
            <div className="max-w-2xl">
              <span className="text-xs sm:text-sm font-semibold uppercase tracking-wide text-black/60 block mb-2 sm:mb-3">
                WHAT IT ENABLES
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight leading-tight text-neutral-900">
                {industry.benefits.title}
              </h2>
            </div>
            {industry.benefits.intro && (
              <p className="text-sm sm:text-base text-neutral-500 font-light max-w-md lg:text-right leading-relaxed">
                {industry.benefits.intro}
              </p>
            )}
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 lg:gap-x-14 gap-y-8 sm:gap-y-10 items-start">
            {industry.benefits.items.map((ben, idx) => (
              <div key={idx} className="space-y-1.5 flex flex-col">
                <span className="text-xs font-mono font-bold text-neutral-400 block tracking-wider">
                  0{idx + 1}
                </span>
                <h3 className="text-base sm:text-lg font-bold tracking-tight text-neutral-900 leading-snug">
                  {ben.title}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-600 font-light leading-relaxed flex-1">
                  {ben.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7: TECHNOLOGY PIPELINE (Connected Flow Grid) */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white text-black">
        <div className="max-w-7xl 2xl:max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8">

          {/* Header */}
          <div className="max-w-3xl mb-12 sm:mb-16">
            <span className="text-xs sm:text-sm font-semibold uppercase tracking-wide text-neutral-500 block mb-2 sm:mb-3">
              REAL-TIME PIPELINE
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight leading-tight text-neutral-900">
              {industry.technology.title}
            </h2>
            {industry.technology.intro && (
              <p className="text-sm sm:text-base text-neutral-500 font-light mt-2 max-w-2xl leading-relaxed">
                {industry.technology.intro}
              </p>
            )}
          </div>

          {/* Desktop Flow: Connected Architectural Rail (lg and above) */}
          <div className="hidden lg:grid grid-cols-3 gap-6 xl:gap-8 relative">
            {industry.technology.items.slice(0, 6).map((tech, idx) => {
              const IconComponent = techIcons[idx % techIcons.length];
              const isLast = idx === Math.min(industry.technology.items.length, 6) - 1;
              const isFirstRow = idx < 3;
              return (
                <div key={idx} className={`group flex flex-col ${!isFirstRow ? 'mt-2' : ''}`}>
                  {/* Process Node and Connector Line */}
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 rounded-full border border-neutral-300 bg-white flex items-center justify-center text-neutral-800 transition-all duration-300 group-hover:border-black group-hover:bg-black group-hover:text-white group-hover:scale-105 shrink-0 shadow-sm z-10">
                      <IconComponent className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
                    </div>
                    {!isLast && (idx + 1) % 3 !== 0 && (
                      <div className="flex-1 h-[1px] bg-neutral-200 ml-4 -mr-6 xl:-mr-8 relative hidden lg:flex items-center justify-end z-0">
                        <ChevronRight className="w-3.5 h-3.5 text-neutral-300 -mr-1.5 shrink-0" />
                      </div>
                    )}
                  </div>

                  {/* Step Meta & Content */}
                  <div className="space-y-2 pr-2">
                    <span className="text-xs font-bold text-neutral-400 group-hover:text-black transition-colors">
                      {String(idx + 1).padStart(2, '0')}
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-neutral-900 tracking-tight leading-snug group-hover:text-black transition-colors">
                      {tech.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-neutral-500 font-normal leading-relaxed">
                      {tech.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Mobile & Tablet Flow: Vertical Timeline (< lg) */}
          <div className="lg:hidden relative pl-2 sm:pl-4">
            <div className="space-y-8 sm:space-y-10 relative">
              {industry.technology.items.map((tech, idx) => {
                const IconComponent = techIcons[idx % techIcons.length];
                const isLast = idx === industry.technology.items.length - 1;
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
                      <span className="text-xs font-bold text-neutral-400">
                        {String(idx + 1).padStart(2, '0')}
                      </span>
                      <h3 className="text-base sm:text-lg font-bold text-neutral-900 tracking-tight leading-snug">
                        {tech.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-neutral-600 font-normal leading-relaxed">
                        {tech.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8: HOW WE DELIVER (3-Stage Visual Roadmap) */}
      <section className="py-14 sm:py-16 lg:py-20 bg-white text-black">
        <div className="max-w-7xl 2xl:max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8">

          {/* Section Header */}
          <div className="max-w-3xl mb-8 sm:mb-10">
            <span className="text-xs sm:text-sm font-semibold uppercase tracking-wide text-neutral-500 block mb-2 sm:mb-3">
              TURNKEY METHODOLOGY
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight leading-tight text-neutral-900">
              {delivery.title}
            </h2>
            <p className="text-sm sm:text-base text-neutral-500 font-light mt-2 max-w-2xl leading-relaxed">
              {delivery.intro}
            </p>
          </div>

          {/* 3-Stage Visual Roadmap */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 items-stretch">
            {delivery.stages.map((stage, idx) => (
              <div key={idx} className="group flex flex-col h-full">
                {/* Visual Showcase */}
                <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-neutral-100 mb-3 sm:mb-4 shrink-0">
                  <SafeImage
                    src={stage.img}
                    alt={stage.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    containerClassName="w-full h-full"
                  />
                </div>

                {/* Stage Metadata */}
                <div className="flex items-center justify-between text-xs font-mono mb-2">
                  <span className="text-[11px] font-bold text-black tracking-wider">
                    STAGE {stage.num}
                  </span>
                  <span className="text-[10px] font-semibold text-neutral-500 uppercase tracking-wider">
                    {stage.timeframe}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-base sm:text-lg font-bold text-black tracking-tight leading-snug mb-2 md:min-h-[3rem] flex items-start">
                  {stage.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-neutral-600 font-light leading-relaxed flex-1">
                  {stage.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 9: CASE STUDIES */}
      <section className="py-12 sm:py-16 min-h-[640px] flex flex-col justify-center bg-white relative">
        <div className="max-w-7xl 2xl:max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <CaseStudiesSpotlight 
            caseStudies={caseStudies} 
            industryName={slug}
            title="Featured Case Studies"
            eyebrow="PROVEN SUCCESS & DEPLOYMENTS"
          />
        </div>
      </section>

      {/* SECTION 10: FAQ */}
      <section className="py-14 sm:py-16 lg:py-20 bg-white text-black border-t border-neutral-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-10">
            <span className="text-xs sm:text-sm font-semibold uppercase tracking-wide text-black/60 block mb-2">
              COMMON QUESTIONS
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight leading-tight text-black">
              {industry.faqs.title}
            </h2>
          </div>

          <div className="border-t border-black/15">
            <FAQAccordion faqs={industry.faqs.items} />
          </div>
        </div>
      </section>

      {/* SECTION 11: FINAL CTA */}
      <section className="relative py-16 sm:py-20 lg:py-24 overflow-hidden bg-black text-white">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <SafeImage
            src={industry.cta?.img || industry.hero.img}
            alt={industry.cta?.title || industry.hero.title}
            className="w-full h-full object-cover opacity-35"
            containerClassName="w-full h-full bg-black"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent pointer-events-none" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight leading-tight mb-4">
            {industry.cta?.title || "Ready to Transform Your Space?"}
          </h2>
          <p className="text-sm sm:text-base text-white/80 font-light max-w-2xl mx-auto mb-6 leading-relaxed">
            {industry.cta?.subtitle || "Consult with our team to design, engineer, and deploy interactive technology tailored to your space."}
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2.5 px-8 py-3.5 sm:py-4 rounded-full bg-white text-black text-xs sm:text-sm font-bold uppercase tracking-wider hover:bg-neutral-200 transition-all duration-300 active:scale-95 shadow-2xl"
          >
            <span>{industry.cta?.buttonText || "Start Your Project"}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
