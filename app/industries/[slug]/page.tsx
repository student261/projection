import { notFound } from "next/navigation";
import { industriesData, sharedDelivery } from "@/data/industries";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SafeImage from "@/components/SafeImage";
import Link from "next/link";
import { ArrowRight, ChevronDown, Activity, Lightbulb, Sparkles, Network, Terminal, CheckCircle2, ShieldAlert, TrendingDown, Layers, Brain, Cpu, Users, ArrowUpRight } from "lucide-react";
import Button from "@/components/ui/Button";
import Divider from "@/components/ui/Divider";
import SectionHeading from "@/components/ui/SectionHeading";
import FAQAccordion from "./FAQAccordion";
import SolutionsAccordion from "@/components/SolutionsAccordion";
import StickyExperiences from "@/components/StickyExperiences";
export default async function IndustrySubpage(props: { params: Promise<{ slug: string }> }) {
  const { slug } = await props.params;
  const industry = industriesData[slug];

  if (!industry) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white text-black flex flex-col selection:bg-black selection:text-white">
      <Navbar />

      {/* SECTION 01: HERO BANNER (Kept Dark for Image Contrast) */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <SafeImage 
            src={industry.hero.img} 
            alt={industry.hero.title} 
            className="w-full h-full object-cover opacity-60 scale-105 animate-[slow-pan_20s_ease-in-out_infinite_alternate]" 
            containerClassName="w-full h-full bg-black"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/80" />
        </div>
        
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs font-bold uppercase tracking-widest text-white backdrop-blur-md mb-8">
            {industry.hero.eyebrow}
          </span>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white mb-6 max-w-4xl mx-auto drop-shadow-2xl tracking-tight leading-[1.1]">
            {industry.hero.title}
          </h1>
          <p className="text-white/90 max-w-3xl mx-auto mb-6 text-xl sm:text-2xl font-light leading-relaxed">
            {industry.hero.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              href="#experiences" 
              className="inline-flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-[0.08em] px-6 py-3 transition-all duration-300 active:scale-95 cursor-pointer w-full sm:w-auto bg-white text-black hover:bg-gray-200 shadow-md rounded-none"
            >
              Explore Experiences
            </Link>
            <Link 
              href="/contact" 
              className="inline-flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-[0.08em] px-6 py-3 transition-all duration-300 active:scale-95 cursor-pointer w-full sm:w-auto border border-white/40 bg-black/40 text-white hover:bg-white/20 backdrop-blur-sm rounded-none"
            >
              Start Your Project
            </Link>
          </div>
        </div>

        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce opacity-80 z-10">
          <span className="text-[10px] uppercase tracking-widest font-bold text-white drop-shadow-md">Discover More</span>
          <ChevronDown className="w-4 h-4 text-white drop-shadow-md" />
        </div>
      </section>

      {/* SECTION 02: THE CHALLENGE */}
      <section className="py-12 lg:py-16 bg-[#F8F9FA] border-t border-slate-200/80 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column: Eyebrow Badge, Title, Intro & Dark Studio Quote Card */}
            <div className="lg:col-span-5 sticky top-32">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black text-white text-[11px] font-bold uppercase tracking-widest mb-6 shadow-sm">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>Industry Obstacles</span>
              </div>

              <h2 className="text-slate-900 font-black text-3xl sm:text-4xl tracking-tight mb-4">
                {industry.challenges.title}
              </h2>
              
              <p className="text-slate-600 font-normal leading-relaxed text-base sm:text-lg">
                {industry.challenges.intro}
              </p>

              {/* Dark Studio Opportunity Card */}
              <div className="mt-10 p-8 rounded-2xl bg-black text-white shadow-xl relative overflow-hidden border border-slate-800">
                <div className="flex items-center gap-2 mb-3 text-xs font-bold uppercase tracking-widest text-amber-400">
                  <Sparkles className="w-4 h-4" />
                  <span>The Strategic Pivot</span>
                </div>
                <p className="text-slate-200 font-medium text-base sm:text-lg leading-relaxed italic relative z-10">
                  "{industry.challenges.transition}"
                </p>
                <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400 font-mono">
                  <span>TRANSFORMATION</span>
                  <span className="text-amber-400 font-bold">READY</span>
                </div>
              </div>
            </div>
            
            {/* Right Column: Crisp White High-Contrast Challenge Cards */}
            <div className="lg:col-span-7 grid sm:grid-cols-2 gap-6">
              {industry.challenges.items.map((item, idx) => {
                const icons = [TrendingDown, Layers, Brain, Cpu, Users, Sparkles];
                const IconComponent = icons[idx % icons.length];
                
                return (
                  <div 
                    key={idx} 
                    className="p-8 rounded-2xl bg-white border border-slate-200/90 hover:border-black transition-all duration-300 group shadow-sm hover:shadow-xl hover:-translate-y-1 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-6">
                        <div className="w-12 h-12 rounded-xl bg-black text-white flex items-center justify-center shadow-md group-hover:scale-105 transition-transform duration-300">
                          <IconComponent className="w-5 h-5" />
                        </div>
                        <span className="text-xs font-mono font-bold text-slate-500 px-3 py-1 rounded-md bg-slate-100 group-hover:bg-black group-hover:text-white transition-colors">
                          0{idx + 1}
                        </span>
                      </div>

                      <h3 className="text-slate-900 mb-3 text-lg font-bold tracking-tight">{item.title}</h3>
                      <p className="text-slate-600 text-sm font-normal leading-relaxed">
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

      {/* SECTION 03: OUR VISION */}
      <section className="py-12 lg:py-16 bg-gray-50/50 border-y border-gray-200/70 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-6 lg:gap-8 items-center">
            
            {/* Left Column: Heading, Vision Statement & Clean Pillars List */}
            <div className="lg:col-span-6">
              <SectionHeading 
                label="OUR VISION"
                heading={industry.vision.title}
              />

              <p className="text-2xl sm:text-4xl text-black font-black leading-tight tracking-tight mt-6 mb-4">
                {industry.vision.statement}
              </p>
              
              <p className="text-gray-600 font-light leading-relaxed mb-8 text-base">
                {industry.vision.intro}
              </p>
              
              {/* Clean 2-Column Pillars Grid */}
              <div className="grid sm:grid-cols-2 gap-6 pt-6 border-t border-gray-200">
                {industry.vision.pillars.map((pillar, idx) => {
                  const titleText = pillar.title.replace(/[\u{1F300}-\u{1F6FF}\u{1F900}-\u{1F9FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}🌟🤝🚀🌍]/gu, '').trim();
                  
                  return (
                    <div key={idx} className="space-y-1.5">
                      <div className="flex items-center gap-2.5 text-black font-bold text-base">
                        <CheckCircle2 className="w-4 h-4 text-black shrink-0" />
                        <span>{titleText}</span>
                      </div>
                      <p className="text-gray-600 text-sm font-light leading-relaxed pl-6">
                        {pillar.desc}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
            
            {/* Right Column: Hero Image with Clean Dark Glass Quote Box */}
            <div className="lg:col-span-6 relative h-[300px] sm:h-[400px] rounded-3xl overflow-hidden border border-gray-200/80 shadow-xl group">
               <SafeImage 
                  src={industry.hero.img} 
                  alt="Vision"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  containerClassName="w-full h-full"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

               <div className="absolute bottom-6 left-6 right-6 p-6 rounded-2xl bg-black/85 backdrop-blur-md border border-white/10 text-white shadow-xl">
                  <p className="font-medium italic text-base sm:text-lg leading-relaxed text-center text-gray-100">
                    {industry.vision.quote}
                  </p>
               </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 04: INTERACTIVE SOLUTIONS */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-6">
          <span className="text-[10px] uppercase tracking-widest font-bold text-black/50 block mb-4">
            CORE CAPABILITIES
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-black mb-6">
            {industry.solutions.title}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed font-light">
            {industry.solutions.intro}
          </p>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Normal but Stylish Borderless Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
            {industry.solutions.items.map((sol, idx) => {
              const icons = [Lightbulb, Layers, Sparkles, Brain, Cpu, Network];
              const IconComponent = icons[idx % icons.length];
              
              return (
                <Link href="/solutions" key={idx} className="group flex flex-col items-center text-center sm:items-start sm:text-left hover:-translate-y-1 transition-transform duration-300">
                  <div className="w-14 h-14 bg-gray-50 rounded-2xl border border-gray-100 flex items-center justify-center text-black mb-6 group-hover:bg-black group-hover:text-white transition-colors duration-300">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-black mb-4 group-hover:text-black/80 transition-colors">{sol.title}</h3>
                  <p className="text-gray-600 text-base leading-relaxed font-light mb-6">
                    {sol.desc}
                  </p>
                  <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-black/40 group-hover:text-black transition-colors cursor-pointer mt-auto">
                    Explore Solution <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              );
            })}
          </div>
          
          {/* Bottom Statement */}
          <div className="mt-12 pt-12 border-t border-gray-100 text-center">
            <p className="text-gray-500 font-light text-lg md:text-xl italic max-w-4xl mx-auto">
              "{industry.solutions.bottomStatement}"
            </p>
          </div>
          
        </div>
      </section>

      {/* SECTION 05: FEATURED EXPERIENCES (STICKY SCROLL) */}
      <section id="experiences" className="py-12 lg:py-16 lg:py-12 lg:py-16 bg-[#F8F9FA] border-y border-gray-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-gray-200/80 text-[11px] font-bold uppercase tracking-widest text-slate-500 mb-6 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-blue-500" />
              <span>Real World Impact</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter text-slate-900 mb-6">
              {industry.experiences.title}
            </h2>
            <p className="text-slate-500 text-lg md:text-xl font-medium leading-relaxed">
              {industry.experiences.intro}
            </p>
          </div>

          {/* Sticky Scroll Gallery Component */}
          <StickyExperiences items={industry.experiences.items} />

        </div>
      </section>

      {/* SECTION 06: BENEFITS & OUTCOMES */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <SectionHeading 
              label="MEASURABLE VALUE"
              heading={industry.benefits.title}
            />
            <p className="text-black/70 max-w-2xl font-light leading-relaxed mt-6">
              {industry.benefits.intro}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
            {industry.benefits.items.map((ben, idx) => (
              <div key={idx} className="relative">
                <div className="w-10 h-10 rounded-full bg-black border border-black/10 flex items-center justify-center mb-6 text-white font-bold text-sm shadow-md">
                  0{idx + 1}
                </div>
                <h5 className="text-black mb-3 font-bold">{ben.title}</h5>
                <p className="text-black/60 text-sm font-light leading-relaxed">
                  {ben.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 pt-10 border-t border-black/10 text-center">
            <p className="text-black font-medium">
              {industry.benefits.bottomStatement}
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 07: TECHNOLOGY (PREMIUM BENTO GRID) */}
      <section className="py-16 lg:py-20 bg-[#F8F9FA] border-y border-gray-200/50 relative overflow-hidden">
        {/* Subtle dot pattern background */}
        <div className="absolute inset-0 opacity-[0.4]" style={{ backgroundImage: 'radial-gradient(#d1d5db 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center mb-6">
          <SectionHeading 
            label="THE ENGINE"
            heading={industry.technology.title}
            centered
          />
          <p className="text-gray-500 max-w-2xl mx-auto font-medium leading-relaxed mt-6 text-lg md:text-xl">
            {industry.technology.intro}
          </p>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {industry.technology.items.map((tech, idx) => {
              // Asymmetrical Grid Logic
              // Row 1: col-span-2, col-span-1
              // Row 2: col-span-1, col-span-2
              // Row 3: col-span-1, col-span-2 or similar alternating pattern
              let colSpanClass = "md:col-span-1";
              if (idx === 0) colSpanClass = "md:col-span-2";
              if (idx === 3) colSpanClass = "md:col-span-2";
              if (idx === 5) colSpanClass = "md:col-span-2";

              // Premium styling for icons
              const icons = [Terminal, Cpu, Network, Sparkles, Brain, Layers];
              const IconComponent = icons[idx % icons.length];
              
              const colorClasses = [
                "bg-blue-50 text-blue-600 ring-blue-500/20",
                "bg-amber-50 text-amber-600 ring-amber-500/20",
                "bg-emerald-50 text-emerald-600 ring-emerald-500/20",
                "bg-purple-50 text-purple-600 ring-purple-500/20",
                "bg-rose-50 text-rose-600 ring-rose-500/20",
                "bg-cyan-50 text-cyan-600 ring-cyan-500/20"
              ];
              const colorClass = colorClasses[idx % colorClasses.length];

              return (
                <div 
                  key={idx} 
                  className={`group relative p-8 md:p-10 rounded-[32px] bg-white overflow-hidden transition-all duration-500 hover:-translate-y-1 shadow-[0_2px_10px_rgb(0,0,0,0.02)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.06)] border border-gray-200/60 ${colSpanClass}`}
                >
                  {/* Subtle Gradient Glow on Hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none bg-gradient-to-br from-white via-white to-gray-50" />
                  
                  <div className="relative z-10 h-full flex flex-col justify-between">
                    <div>
                      <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-8 ring-1 ring-inset ${colorClass} transition-transform duration-500 group-hover:scale-110`}>
                        <IconComponent className="w-6 h-6" strokeWidth={2} />
                      </div>
                      
                      <h3 className="text-2xl font-extrabold text-black tracking-tight mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-black group-hover:to-gray-600 transition-all duration-300">
                        {tech.title}
                      </h3>
                      
                      <p className="text-gray-500 font-medium leading-relaxed mb-8 max-w-lg">
                        {tech.desc}
                      </p>
                    </div>

                    <div className="mt-auto">
                      <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gray-400 group-hover:text-black transition-colors cursor-pointer">
                        <span>Learn More</span>
                        <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 08: HOW WE DELIVER */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-6">
          <SectionHeading 
            label="OUR PROCESS"
            heading={sharedDelivery.title}
            centered
          />
          <p className="text-black/70 max-w-2xl mx-auto font-light leading-relaxed mt-6">
            {sharedDelivery.intro}
          </p>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 relative">
            {/* Connecting Line */}
            <div className="hidden lg:block absolute top-12 left-20 right-20 h-px bg-gradient-to-r from-transparent via-black/10 to-transparent" />
            
            {sharedDelivery.steps.map((step, idx) => (
              <div key={idx} className="relative z-10 p-8 rounded-3xl bg-gray-50 border border-black/5 hover:-translate-y-2 transition-transform duration-300 hover:shadow-lg">
                <div className="w-16 h-16 rounded-full bg-white border border-black/10 flex items-center justify-center text-black font-bold text-lg mb-8 shadow-sm">
                  {step.num}
                </div>
                <h4 className="text-xl sm:text-2xl font-bold text-black mb-4 tracking-tight">{step.title}</h4>
                <p className="text-black/60 text-sm font-light leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
          
          <div className="mt-10 p-8 rounded-2xl bg-black/5 border border-black/10 text-center">
            <p className="text-black/80 font-light max-w-3xl mx-auto">
              {sharedDelivery.bottomStatement}
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 08B: CASE STUDIES (VISUAL CARDS) */}
      <section className="py-16 lg:py-20 bg-[#F8F9FA] border-t border-black/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <SectionHeading 
              label="PROVEN SUCCESS"
              heading="Featured Case Studies"
              centered
            />
            <p className="text-black/70 max-w-2xl mx-auto font-light leading-relaxed mt-6">
              Explore how organizations in {industry.hero.title.toLowerCase()} are using our interactive technology to transform their environments and achieve measurable outcomes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Case Study Card 1 */}
            <Link href="/projects" className="group flex flex-col bg-white rounded-3xl overflow-hidden shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-gray-100 hover:shadow-[0_10px_40px_rgb(0,0,0,0.08)] transition-all duration-500">
              <div className="relative aspect-[16/9] overflow-hidden">
                <SafeImage src={industry.hero.img} alt="Case Study 1" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1.5s]" containerClassName="w-full h-full" />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest text-black">
                  Case Study
                </div>
              </div>
              <div className="p-8 flex flex-col flex-1">
                <h4 className="text-xl font-bold text-black mb-3">Modern Transformation Project</h4>
                <p className="text-gray-600 text-sm leading-relaxed mb-8 flex-1">A massive deployment of interactive walls and floors designed to completely reimagine the visitor experience and increase engagement metrics by over 40%.</p>
                <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-black group-hover:text-blue-600 transition-colors">
                  Read Full Study <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>

            {/* Case Study Card 2 */}
            <Link href="/projects" className="group flex flex-col bg-white rounded-3xl overflow-hidden shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-gray-100 hover:shadow-[0_10px_40px_rgb(0,0,0,0.08)] transition-all duration-500">
              <div className="relative aspect-[16/9] overflow-hidden bg-black">
                <SafeImage src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80" alt="Case Study 2" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1.5s] opacity-80" containerClassName="w-full h-full" />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest text-black">
                  Case Study
                </div>
              </div>
              <div className="p-8 flex flex-col flex-1">
                <h4 className="text-xl font-bold text-black mb-3">Sensory & Immersive Installation</h4>
                <p className="text-gray-600 text-sm leading-relaxed mb-8 flex-1">Integrating computer vision and ultra-short throw projection to build an environment that responds naturally to human behavior in real time.</p>
                <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-black group-hover:text-blue-600 transition-colors">
                  Read Full Study <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>

            {/* Case Study Card 3 */}
            <Link href="/projects" className="group flex flex-col bg-white rounded-3xl overflow-hidden shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-gray-100 hover:shadow-[0_10px_40px_rgb(0,0,0,0.08)] transition-all duration-500">
              <div className="relative aspect-[16/9] overflow-hidden bg-gray-100">
                <SafeImage src="https://images.unsplash.com/photo-1518998053901-5348d3961a04?auto=format&fit=crop&w=800&q=80" alt="Case Study 3" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1.5s]" containerClassName="w-full h-full" />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest text-black">
                  Case Study
                </div>
              </div>
              <div className="p-8 flex flex-col flex-1">
                <h4 className="text-xl font-bold text-black mb-3">Large-Scale Digital Canvas</h4>
                <p className="text-gray-600 text-sm leading-relaxed mb-8 flex-1">A completely bespoke motion tracking solution extending across hundreds of square feet to deliver a personalized, multi-user digital experience.</p>
                <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-black group-hover:text-blue-600 transition-colors">
                  Read Full Study <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          </div>
          
          <div className="mt-8 text-center">
            <Link href="/projects" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-black px-8 py-4 rounded-full border border-black/20 hover:bg-black hover:text-white transition-all duration-300">
              View All Case Studies
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 09: FAQS */}
      <section className="py-16 lg:py-20 bg-gray-50 border-t border-black/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-black mb-6">{industry.faqs.title}</h2>
            <p className="text-black/70 font-light">{industry.faqs.intro}</p>
          </div>
          
          <FAQAccordion faqs={industry.faqs.items} />
        </div>
      </section>

      <Footer />
    </main>
  );
}
