import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import WhyChooseUs from "@/components/WhyChooseUs";
import SafeImage from "@/components/SafeImage";
import Link from "next/link";
import { Cpu, Zap, Layers, Sparkles, MapPin, ArrowRight, ShieldCheck, Activity, Globe2, Compass } from "lucide-react";

export const metadata = {
  title: "About The Studio — PROJECTION",
  description: "Meet the spatial architects, optical engineers, and creative technologists transforming physical architecture into living digital ecosystems.",
};

const DISCIPLINES = [
  {
    num: "01",
    tag: "OPTICAL ARCHITECTURE",
    title: "Large-Scale Laser & Projection Engineering",
    desc: "From historic Gothic cathedrals to 100-meter transit corridors, we engineer optical projection systems that preserve architectural integrity while unlocking breathtaking digital dimensions.",
    img: "https://momentfactory.com/cdn/shop/files/KarelChladek-5286-WS.jpg"
  },
  {
    num: "02",
    tag: "SPATIAL SENSING",
    title: "LiDAR & Zero-Latency Computer Vision",
    desc: "We build proprietary sensor fusion arrays fusing 3D LiDAR, infrared time-of-flight cameras, and optical depth sensors to track hundreds of concurrent visitors with sub-millimeter precision.",
    img: "https://momentfactory.com/cdn/shop/files/SQCagARcade_Montreal_MomentFactory_-9.jpg"
  },
  {
    num: "03",
    tag: "GENERATIVE COMPUTING",
    title: "Real-Time Physics & Unreal Engine Systems",
    desc: "Our custom GPU edge-servers simulate fluid dynamics, particle collisions, and generative acoustics in real-time, responding organically to every footstep and gesture.",
    img: "https://momentfactory.com/cdn/shop/files/Moment_Factory_Public_Spaces_ATT_Discovery_District_21.png"
  },
  {
    num: "04",
    tag: "TURNKEY PRODUCTION",
    title: "Turnkey Design to Global Installation",
    desc: "Every deployment is designed, prototyped in our testing labs, and commissioned on-site with 24/7 autonomous monitoring and continuous cloud content orchestration.",
    img: "https://momentfactory.com/cdn/shop/files/Moment_Factory_Changi_Experience_Studio_JE-077-WS.jpg"
  }
];

const GLOBAL_HUBS = [
  { city: "Montreal", role: "Creative Headquarters & Prototyping Lab", landmark: "AURA at Notre-Dame & ARcade Arena" },
  { city: "New York", role: "Spatial Software & Interactive Retail Studio", landmark: "Superreal at Cunard Grand Hall & Hudson Yards" },
  { city: "Paris", role: "European Heritage & Architecture Lab", landmark: "Dôme des Invalides & Grand Magic Hotel" },
  { city: "Tokyo", role: "Transit & Urban LED Architecture", landmark: "Tokyo Shinjuku Metro 100M Corridor" },
  { city: "Singapore", role: "Aviation & Destination Media Portals", landmark: "Changi Airport Terminals 2 & 4" }
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white text-black flex flex-col pt-20 selection:bg-black selection:text-white font-sans">
      <Navbar />

      {/* 1. CINEMATIC STUDIO HERO BANNER */}
      <section className="relative w-full min-h-[90vh] bg-black text-white flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <SafeImage 
            src="https://momentfactory.com/cdn/shop/files/Moment_Factory_Signature_Shows_25_SuperReal_D7A1668-WS_5b710a5d-f2e7-4428-ad20-c83c257b7bbe.jpg"
            alt="PROJECTION Engineering Studio"
            className="w-full h-full object-cover opacity-75 brightness-110 contrast-105 scale-105 animate-[slow-pan_25s_ease-in-out_infinite_alternate]"
            containerClassName="w-full h-full bg-black"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/75 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 w-full">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-[10px] font-mono font-bold uppercase tracking-widest text-white/90 backdrop-blur-md mb-6">
              <Sparkles className="w-3 h-3 text-white" />
              <span>THE SPATIAL MULTIMEDIA STUDIO</span>
            </span>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.05] text-white mb-6">
              We turn physical architecture into <br className="hidden sm:inline" />
              <span className="text-white drop-shadow-[0_0_35px_rgba(255,255,255,0.4)]">living digital ecosystems.</span>
            </h1>

            <p className="text-base sm:text-lg lg:text-xl text-white/80 font-light leading-relaxed mb-10 max-w-2xl">
              PROJECTION operates at the nexus of architectural optical engineering, proprietary computer vision, and real-time generative simulation. We eliminate the boundary between human presence and spatial media.
            </p>

            <div className="flex flex-wrap items-center gap-8 pt-8 border-t border-white/20">
              <div>
                <div className="text-3xl sm:text-4xl font-black text-white">12+</div>
                <div className="text-[10px] font-mono uppercase tracking-widest text-white/60 font-bold mt-1">Years R&D</div>
              </div>
              <div className="h-8 w-[1px] bg-white/20" />
              <div>
                <div className="text-3xl sm:text-4xl font-black text-white">140+</div>
                <div className="text-[10px] font-mono uppercase tracking-widest text-white/60 font-bold mt-1">Landmark Deployments</div>
              </div>
              <div className="h-8 w-[1px] bg-white/20" />
              <div>
                <div className="text-3xl sm:text-4xl font-black text-white">&lt;16ms</div>
                <div className="text-[10px] font-mono uppercase tracking-widest text-white/60 font-bold mt-1">System Latency</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SPATIAL PHILOSOPHY (SWISS MINIMAL SPLIT) */}
      <section className="py-20 lg:py-28 bg-white border-b border-black/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            <div className="lg:col-span-5">
              <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-black/40 mb-3 block font-bold">
                ENGINEERING PHILOSOPHY
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-[1.1] mb-6">
                We don't deploy off-the-shelf displays.<br />
                <span className="text-black/40">We engineer the medium.</span>
              </h2>
              <div className="space-y-4 text-black/70 font-light leading-relaxed text-sm sm:text-base">
                <p>
                  Most digital signage companies mount generic screens onto existing walls. We approach physical spaces as complete immersive canvases where the floor, walls, ceilings, and atmospheric air harmonize into a single responsive organism.
                </p>
                <p>
                  By mounting all optics and sensor hardware overhead, we eliminate fragile touch glass, mechanical buttons, and wearable controllers. Visitors interact using their natural bodies, footsteps, and gaze.
                </p>
              </div>

              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Link
                  href="/solutions"
                  className="inline-flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-wider px-6 py-3.5 rounded-full bg-black text-white hover:bg-black/80 transition-all shadow-md active:scale-95"
                >
                  <span>Explore Our Technology Suite</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-7 relative aspect-[16/11] rounded-3xl overflow-hidden bg-gray-900 border border-black/10 shadow-2xl">
              <SafeImage 
                src="https://momentfactory.com/cdn/shop/files/TLX04130-Moment_Factory_Originals_Digital_Art_Experiences__Brainstorm-WS.jpg"
                alt="Optical Sensor Calibration and Testing"
                className="w-full h-full object-cover"
                containerClassName="w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-white">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-white/70 block">Interactive Prototyping</span>
                  <span className="text-sm font-bold">Spatial Immersion Testing Chamber</span>
                </div>
                <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-[10px] font-mono font-bold uppercase">
                  LiDAR Mesh Active
                </span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. FOUR CORE DISCIPLINES (TYPOGRAPHIC DIVIDED ROWS - ZERO CARDS) */}
      <section className="py-20 lg:py-28 bg-gray-50/60 border-b border-black/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-black/40 mb-2 block font-bold">
                CORE CAPABILITIES
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-[1.1]">
                Four Pillars of Spatial Innovation
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-black/60 font-light leading-relaxed max-w-md">
              From mathematical optics to physical structural rigging, our integrated studio controls every variable of the deployment pipeline.
            </p>
          </div>

          <div className="divide-y divide-black/10 border-y border-black/10">
            {DISCIPLINES.map((item, idx) => (
              <div key={idx} className="py-8 sm:py-10 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center group">
                <div className="lg:col-span-1 flex items-center">
                  <span className="text-2xl sm:text-3xl font-mono font-black text-black/30 group-hover:text-black transition-colors">
                    {item.num}
                  </span>
                </div>

                <div className="lg:col-span-4">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-black/50 block mb-1">
                    {item.tag}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-black tracking-tight">
                    {item.title}
                  </h3>
                </div>

                <div className="lg:col-span-4">
                  <p className="text-xs sm:text-sm text-black/70 font-light leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="lg:col-span-3">
                  <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-gray-900 border border-black/10 shadow-md">
                    <SafeImage
                      src={item.img}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      containerClassName="w-full h-full"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. GLOBAL NETWORK & PRODUCTION FOOTPRINT */}
      <section className="py-20 lg:py-28 bg-white border-b border-black/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5">
              <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-black/40 mb-3 block font-bold">
                GLOBAL FOOTPRINT
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-[1.1] mb-6">
                Studios & Landmark Deployments Worldwide
              </h2>
              <p className="text-sm text-black/70 font-light leading-relaxed mb-8">
                Operating across five continents, our spatial engineering collective supports international projects from initial architectural concept to permanent 24/7 commercial operation.
              </p>

              <div className="space-y-4">
                {GLOBAL_HUBS.map((hub, idx) => (
                  <div key={idx} className="p-4 rounded-xl border border-black/10 bg-black/[0.02] flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center shrink-0 text-xs font-mono font-bold">
                      0{idx + 1}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-black tracking-tight flex items-center gap-2">
                        <span>{hub.city}</span>
                        <span className="text-[10px] font-normal text-black/50 font-mono">• {hub.role}</span>
                      </h4>
                      <p className="text-xs text-black/60 font-light mt-0.5">
                        Key Landmark: {hub.landmark}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-7 relative aspect-[4/3] rounded-3xl overflow-hidden bg-black border border-black/10 shadow-2xl">
              <SafeImage 
                src="https://momentfactory.com/cdn/shop/files/Moment_Factory_Changi_Experience_Studio_JE-077-WS.jpg"
                alt="Global Architectural Operations"
                className="w-full h-full object-cover brightness-105"
                containerClassName="w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-white/60 block mb-1">
                  INTERNATIONAL DEPLOYMENT
                </span>
                <p className="text-sm font-bold">
                  High-Throughput Spatial Architecture at Global Transit & Cultural Hubs
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. WHY CHOOSE US & CALL TO ACTION */}
      <div className="bg-white text-black">
        <WhyChooseUs />
        <CTASection />
      </div>

      <Footer />
    </main>
  );
}
