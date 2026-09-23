import { notFound } from "next/navigation";
import { industriesData, getIndustryDelivery, getIndustryCaseStudies } from "@/data/industries";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SafeImage from "@/components/SafeImage";
import Link from "next/link";
import { ArrowRight, Activity, Lightbulb, Sparkles, Network, Terminal, CheckCircle2, ShieldAlert, TrendingDown, Layers, Brain, Cpu, Users, ArrowUpRight, Compass, Wrench, GraduationCap, ShieldCheck } from "lucide-react";
import Button from "@/components/ui/Button";
import SectionHeading from "@/components/ui/SectionHeading";
import FAQAccordion from "./FAQAccordion";
import SolutionsAccordion from "@/components/SolutionsAccordion";
import StickyExperiences from "@/components/StickyExperiences";
import CaseStudiesSpotlight from "@/components/CaseStudiesSpotlight";

export function generateStaticParams() {
  return Object.keys(industriesData).map((slug) => ({ slug }));
}

export default async function IndustrySubpage(props: { params: Promise<{ slug: string }> }) {
  const { slug } = await props.params;
  const industry = industriesData[slug];

  if (!industry) {
    notFound();
  }

  const caseStudies = getIndustryCaseStudies(industry);
  const delivery = getIndustryDelivery(slug);

  return (
    <main className="min-h-screen bg-white text-black flex flex-col selection:bg-black selection:text-white">
      <Navbar />

      {/* SECTION 01: HERO BANNER (Clean & Cinematic) */}
      <section className="relative h-screen min-h-screen flex flex-col justify-between items-center overflow-hidden pt-24 sm:pt-28 pb-4 sm:pb-6 bg-black">
        <div className="absolute inset-0 z-0">
          <SafeImage 
            src={industry.hero.img} 
            alt={industry.hero.title} 
            className="w-full h-full object-cover opacity-55 scale-105" 
            containerClassName="w-full h-full bg-black"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/90 pointer-events-none" />
        </div>
        
        <div className="my-auto relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-[10px] sm:text-[11px] font-mono font-semibold uppercase tracking-[0.2em] text-white/90 backdrop-blur-md mb-3 sm:mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-white/80" />
            {industry.hero.eyebrow}
          </span>
          <h1 className="text-[clamp(1.85rem,5.5vw,3.75rem)] font-black text-white mb-3 sm:mb-4 max-w-4xl mx-auto drop-shadow-2xl tracking-tight leading-[1.08]">
            {industry.hero.title}
          </h1>
          <p className="text-white/80 max-w-2xl mx-auto mb-6 sm:mb-8 text-sm sm:text-base lg:text-lg font-light leading-relaxed">
            {industry.hero.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto">
            <Link 
              href="/contact" 
              className="inline-flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-wider px-7 py-3 sm:py-3.5 rounded-full bg-white text-black hover:bg-white/90 shadow-xl transition-all duration-300 active:scale-95 w-full sm:w-auto"
            >
              {industry.cta?.buttonText || "Start Your Project"}
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <Link 
              href="#experiences" 
              className="inline-flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-wider px-7 py-3 sm:py-3.5 rounded-full bg-white/10 text-white hover:bg-white/20 border border-white/20 backdrop-blur-md transition-all duration-300 active:scale-95 w-full sm:w-auto"
            >
              Explore Experiences
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 02: THE CHALLENGE (Pure Editorial — Zero Boxes / Zero Cards) */}
      <section className="pt-16 sm:pt-20 pb-8 sm:pb-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="max-w-3xl mb-10 sm:mb-12">
            <span className="text-[10px] sm:text-[11px] font-mono font-semibold uppercase tracking-[0.2em] text-neutral-400 block mb-2">
              INDUSTRY OBSTACLES
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-[1.1] text-black mb-3">
              {industry.challenges.title}
            </h2>
            <p className="text-neutral-600 font-light leading-relaxed text-sm sm:text-base">
              {industry.challenges.intro}
            </p>
          </div>

          {/* 6 Open Typographic Challenge Points — Zero Boxes, Zero Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 lg:gap-x-14 gap-y-6 sm:gap-y-8">
            {industry.challenges.items.map((item, idx) => (
              <div key={idx} className="space-y-1.5">
                <span className="text-xs font-mono font-bold text-neutral-400 block tracking-wider">
                  0{idx + 1}
                </span>
                <h3 className="text-base sm:text-lg font-bold tracking-tight text-black leading-snug">
                  {item.title}
                </h3>
                <p className="text-sm text-neutral-600 font-light leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* SECTION 03: OUR VISION (EDITORIAL SPLIT SHOWCASE - SINGLE SCREEN) */}
      <section className="py-10 sm:py-12 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Column: Vision Narrative & Statement */}
            <div className="lg:col-span-6 space-y-4 sm:space-y-5">
              <div>
                <span className="text-[10px] sm:text-[11px] font-mono font-semibold uppercase tracking-[0.2em] text-neutral-400 block mb-2">
                  OUR VISION
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-black tracking-tight leading-[1.1]">
                  {industry.vision.title}
                </h2>
              </div>

              <p className="text-lg sm:text-xl text-black font-semibold leading-snug">
                {industry.vision.statement}
              </p>
              
              <div className="space-y-3 text-neutral-600 font-light leading-relaxed text-sm sm:text-base">
                <p>
                  {industry.vision.intro}
                </p>
              </div>

              {/* Editorial Quote directly on canvas */}
              <div className="pt-1.5 pl-4 border-l-2 border-black">
                <p className="font-medium italic text-sm sm:text-base text-neutral-900 leading-relaxed">
                  &ldquo;{industry.vision.quote.replace(/^["'“]+|["'”]+$/g, '').trim()}&rdquo;
                </p>
              </div>
            </div>
            
            {/* Right Column: Tall Unified Media Showcase */}
            <div className="lg:col-span-6">
              <div className="relative h-[380px] sm:h-[440px] lg:h-[480px] w-full rounded-3xl overflow-hidden bg-neutral-100">
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

      {/* SECTION 04: INTERACTIVE SOLUTIONS (SINGLE-SCREEN EDITORIAL) */}
      <section className="pt-8 sm:pt-10 pb-10 sm:pb-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl mb-10 sm:mb-12">
          <span className="text-[10px] sm:text-[11px] font-mono font-semibold uppercase tracking-[0.2em] text-neutral-400 block mb-3">
            CORE CAPABILITIES
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-black mb-4">
            {industry.solutions.title}
          </h2>
          <p className="text-neutral-600 text-base sm:text-lg leading-relaxed font-light">
            {industry.solutions.intro}
          </p>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Pure Editorial Borderless Grid — Zero Card Boxes */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-14">
            {industry.solutions.items.map((sol, idx) => {
              const icons = [Lightbulb, Layers, Sparkles, Brain, Cpu, Network];
              const IconComponent = icons[idx % icons.length];
              
              return (
                <Link href="/solutions" key={idx} className="group flex flex-col items-start text-left hover:-translate-y-0.5 transition-transform duration-300">
                  <div className="w-10 h-10 flex items-center justify-start text-black mb-4 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-black mb-3 group-hover:text-black/70 transition-colors">{sol.title}</h3>
                  <p className="text-neutral-600 text-sm sm:text-base leading-relaxed font-light mb-6">
                    {sol.desc}
                  </p>
                  <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-black/60 group-hover:text-black transition-colors cursor-pointer mt-auto">
                    Explore Solution <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              );
            })}
          </div>
          
          {/* Bottom Statement */}
          <div className="mt-14 pt-6 text-center">
            <p className="text-neutral-500 font-light text-base sm:text-lg italic max-w-3xl mx-auto">
              "{industry.solutions.bottomStatement}"
            </p>
          </div>
          
        </div>
      </section>

      {/* SECTION 05: FEATURED EXPERIENCES (SINGLE-SCREEN INTERACTIVE SHOWCASE) */}
      <section id="experiences" className="py-8 sm:py-10 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Compact Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-8">
            <span className="text-[10px] sm:text-[11px] font-mono font-semibold uppercase tracking-[0.2em] text-neutral-400 block mb-2">
              REAL WORLD IMPACT
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-black mb-2.5">
              {industry.experiences.title}
            </h2>
            <p className="text-neutral-600 text-sm sm:text-base leading-relaxed font-light">
              {industry.experiences.intro}
            </p>
          </div>

          {/* Single-Screen Interactive Showcase Component */}
          <StickyExperiences items={industry.experiences.items} />

        </div>
      </section>

      {/* SECTION 06: BENEFITS & OUTCOMES (ZERO-BOX / ZERO-CARD SINGLE SCREEN) */}
      <section id="benefits" className="py-8 sm:py-10 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="max-w-3xl mb-8 sm:mb-10">
            <span className="text-[10px] sm:text-[11px] font-mono font-semibold uppercase tracking-[0.2em] text-neutral-400 block mb-2">
              MEASURABLE VALUE
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-black mb-2.5">
              {industry.benefits.title}
            </h2>
            <p className="text-neutral-600 text-sm sm:text-base font-light leading-relaxed">
              {industry.benefits.intro}
            </p>
          </div>

          {/* 6 Benefits in 3-Column Grid — Zero Cards, Zero Containers */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 lg:gap-x-14 gap-y-6 sm:gap-y-8">
            {industry.benefits.items.map((ben, idx) => (
              <div key={idx} className="space-y-1.5">
                <span className="text-xs font-mono font-bold text-neutral-400 block tracking-wider">
                  0{idx + 1}
                </span>
                <h3 className="text-base sm:text-lg font-bold tracking-tight text-black leading-snug">
                  {ben.title}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-600 font-light leading-relaxed">
                  {ben.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Clean Bottom Statement */}
          <div className="mt-8 sm:mt-10 pt-2 text-center">
            <p className="text-xs sm:text-sm font-medium text-neutral-500 tracking-wide max-w-2xl mx-auto">
              {industry.benefits.bottomStatement}
            </p>
          </div>

        </div>
      </section>

      {/* SECTION 07: REAL-TIME PIPELINE FLOW (ZERO-BOX / ZERO-CARD SINGLE SCREEN) */}
      <section id="technology" className="pt-10 pb-16 sm:pt-14 sm:pb-20 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="max-w-3xl mb-8 sm:mb-10">
            <span className="text-[10px] sm:text-[11px] font-mono font-semibold uppercase tracking-[0.2em] text-neutral-400 block mb-2">
              REAL-TIME PIPELINE
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-black mb-2.5">
              {industry.technology.title}
            </h2>
            <p className="text-neutral-600 text-sm sm:text-base font-light leading-relaxed">
              {industry.technology.intro}
            </p>
          </div>

          {/* Horizontal Pipeline Steps (Zero Cards, Zero Containers) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 items-start relative">
            {industry.technology.items.map((tech, idx) => {
              const icons = [Activity, Brain, Sparkles, Users];
              const IconComponent = icons[idx % icons.length];
              const isLast = idx === industry.technology.items.length - 1;

              return (
                <div key={idx} className="flex flex-col relative">
                  {/* Step Header: Icon + Number + Connector Arrow */}
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2.5">
                      <IconComponent className="w-5 h-5 text-black shrink-0" strokeWidth={1.5} />
                      <span className="text-xs font-mono font-black text-black">
                        0{idx + 1}
                      </span>
                    </div>

                    {!isLast && (
                      <ArrowRight className="hidden lg:block w-4 h-4 text-neutral-300 shrink-0" />
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="text-base sm:text-lg font-black text-black tracking-tight leading-snug mb-1.5">
                    {tech.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-neutral-600 font-light leading-relaxed">
                    {tech.desc}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Bottom Statement */}
          {industry.technology.bottomStatement && (
            <div className="mt-8 sm:mt-10 pt-2 text-center">
              <p className="text-xs sm:text-sm font-medium text-neutral-500 tracking-wide max-w-2xl mx-auto">
                {industry.technology.bottomStatement}
              </p>
            </div>
          )}

        </div>
      </section>

      {/* SECTION 08: HOW WE DELIVER (3-STAGE VISUAL ROADMAP — ZERO-CARD SINGLE SCREEN) */}
      <section id="process" className="py-8 sm:py-10 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="max-w-3xl mb-8 sm:mb-10">
            <span className="text-[10px] sm:text-[11px] font-mono font-semibold uppercase tracking-[0.2em] text-neutral-400 block mb-2">
              TURNKEY METHODOLOGY
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-black mb-2.5">
              {delivery.title}
            </h2>
            <p className="text-neutral-600 text-sm sm:text-base font-light leading-relaxed">
              {delivery.intro}
            </p>
          </div>

          {/* 3-Stage Visual Roadmap Side-by-Side (Zero Cards, Zero Containers) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-start">
            {delivery.stages.map((stage, idx) => (
              <div key={idx} className="group flex flex-col">
                
                {/* 16:10 Visual Showcase with Smooth Hover Zoom */}
                <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-neutral-100 mb-3 sm:mb-4">
                  <SafeImage
                    src={stage.img}
                    alt={stage.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    containerClassName="w-full h-full"
                  />
                  <div className="absolute top-3 left-3 bg-black/75 backdrop-blur-md px-2.5 py-1 rounded-full text-[10px] font-mono font-bold text-white uppercase tracking-wider">
                    {stage.timeframe}
                  </div>
                </div>

                {/* Stage Number & Title */}
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="text-xs font-mono font-black text-black">
                    {stage.num}
                  </span>
                  <span className="text-neutral-300 select-none">/</span>
                  <h3 className="text-base sm:text-lg font-black text-black tracking-tight">
                    {stage.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-neutral-600 font-light leading-relaxed">
                  {stage.desc}
                </p>

              </div>
            ))}
          </div>

          {/* Deployment Assurance */}
          <div className="mt-8 sm:mt-10 pt-2 text-center max-w-2xl mx-auto">
            <p className="text-xs sm:text-sm font-medium text-neutral-800 tracking-wide leading-relaxed">
              &ldquo;{delivery.bottomStatement}&rdquo;
            </p>
          </div>

        </div>
      </section>

      {/* SECTION 08B: CASE STUDIES (ARCHITECTURAL SPOTLIGHT — ZERO CARDS) */}
      <section id="case-studies" className="py-12 sm:py-16 min-h-[640px] flex flex-col justify-center bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <CaseStudiesSpotlight 
            caseStudies={caseStudies} 
            industryName={slug}
            title="Featured Case Studies"
            eyebrow="PROVEN SUCCESS & DEPLOYMENTS"
          />
        </div>
      </section>

      {/* SECTION 09: FAQS */}
      <section className="py-16 lg:py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-black mb-6">{industry.faqs.title}</h2>
            <p className="text-black/70 font-light">{industry.faqs.intro}</p>
          </div>
          
          <FAQAccordion faqs={industry.faqs.items} />
        </div>
      </section>

      {/* SECTION 10: DEDICATED CTA BANNER */}
      <section className="relative py-20 sm:py-24 overflow-hidden bg-black text-white">
        <div className="absolute inset-0 z-0">
          <SafeImage 
            src={industry.cta?.img || industry.hero.img} 
            alt={industry.cta?.title || industry.hero.title} 
            className="w-full h-full object-cover opacity-25" 
            containerClassName="w-full h-full" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {industry.cta?.eyebrow && (
            <span className="text-[10px] sm:text-[11px] font-mono font-semibold uppercase tracking-[0.2em] text-white/70 block mb-3">
              {industry.cta.eyebrow}
            </span>
          )}
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight mb-4 sm:mb-6 text-white leading-tight">
            {industry.cta?.title || "Ready to Transform Your Space?"}
          </h2>
          <p className="text-base sm:text-lg text-white/80 font-light mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed">
            {industry.cta?.subtitle || "Consult with our spatial computing architects to design, engineer, and deploy turnkey interactive technology tailored to your space."}
          </p>
          <Link 
            href="/contact" 
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-black bg-white px-8 py-4 rounded-full hover:bg-white/90 shadow-2xl transition-all duration-300 active:scale-95"
          >
            {industry.cta?.buttonText || "Start Your Project"} <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
