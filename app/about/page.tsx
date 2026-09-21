import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SafeImage from "@/components/SafeImage";
import Link from "next/link";
import { 
  Sparkles, 
  ArrowRight, 
  Compass, 
  CheckCircle2 
} from "lucide-react";

export const metadata = {
  title: "About The Studio — PROJECTION",
  description: "Meet the spatial architects, optical engineers, and creative technologists transforming physical architecture into living digital ecosystems.",
};

const STATS = [
  { value: "Full-Stack", label: "Optical & Software R&D", desc: "Proprietary spatial optical engines, computer vision, and real-time physics" },
  { value: "Global", label: "Permanent Deployments", desc: "Turnkey installations operating across international cultural and commercial venues" },
  { value: "Real-Time", label: "Zero-Lag Response", desc: "Sub-frame optical footstep and gesture tracking with fluid dynamics" },
  { value: "Enterprise", label: "System Reliability", desc: "Autonomous 24-7 hardware telemetry and remote health orchestration" },
];

const DISCIPLINES = [
  {
    num: "01",
    tag: "OPTICAL ARCHITECTURE",
    title: "Large-Scale Laser & Projection Engineering",
    desc: "From historic stone sanctuaries to 100-meter transit corridors, we engineer custom optical projection systems that preserve architectural integrity while unlocking breathtaking digital dimensions.",
    metrics: "Sub-millimeter edge-blending • Custom focal optics",
    img: "/images/cathedral_projection_mapping.jpg",
  },
  {
    num: "02",
    tag: "SPATIAL SENSING",
    title: "LiDAR & Zero-Latency Computer Vision",
    desc: "We build proprietary sensor fusion arrays combining 3D LiDAR, infrared time-of-flight depth cameras, and optical tracking to map hundreds of concurrent visitors without latency or calibration drift.",
    metrics: "60 FPS capture • Sub-millimeter tracking accuracy",
    img: "/images/interactive_floor_motion.jpg",
  },
  {
    num: "03",
    tag: "GENERATIVE COMPUTING",
    title: "Real-Time Physics & Unreal Engine Systems",
    desc: "Our custom GPU edge-servers simulate fluid dynamics, particle collisions, and generative acoustics in real-time, responding organically to every footstep and gesture without pre-rendered loops.",
    metrics: "Zero pre-baked video loops • Live procedural shaders",
    img: "/images/corporate_lobby_wall.jpg",
  },
  {
    num: "04",
    tag: "TURNKEY PRODUCTION",
    title: "Bespoke Scale Modeling to Global Commissioning",
    desc: "Every deployment is designed, prototyped in our physical testing chambers, and commissioned on-site with 24-7 autonomous monitoring and continuous cloud content orchestration.",
    metrics: "Full structural staging • Lifetime hardware telemetry",
    img: "/images/projection_cityscape_model.jpg",
  },
];

const PIPELINE_STEPS = [
  {
    num: "01",
    phase: "PHASE 01 • SPATIAL SCANNING",
    title: "LiDAR Point-Cloud & Optical Ray Tracing",
    desc: "We capture 3D volumetric laser scans of your space down to the millimeter. Our optical software calculates throw ratios, ambient lux interference, and surface reflectance before physical hardware is ordered.",
  },
  {
    num: "02",
    phase: "PHASE 02 • PROTOTYPING",
    title: "Chamber Simulation & Shader Development",
    desc: "In our physical immersion testing labs, we mock up exact surface materials, test multi-user pedestrian flow dynamics, and fine-tune real-time procedural shaders under variable daylight conditions.",
  },
  {
    num: "03",
    phase: "PHASE 03 • COMMISSIONING",
    title: "Concealed Rigging & Precision Calibration",
    desc: "Our white-glove field technicians mount all projectors and sensors safely overhead behind architectural coves. Multi-projector edge blending and optical sensor matrices are tuned to sub-millimeter tolerances.",
  },
  {
    num: "04",
    phase: "PHASE 04 • LIFETIME OPS",
    title: "Autonomous Health Monitoring & Cloud CMS",
    desc: "Deployments connect to our proactive 24-7 cloud diagnostics. Operating temperatures, bulb hours, and frame rates are monitored autonomously, while marketing teams update seasonal media effortlessly via web portal.",
  },
];

const CRAFTS = [
  {
    role: "Optical Physicists & Lens Engineers",
    desc: "Specialists in laser diodes, periscope mirrors, ultra-short-throw focal lenses, and geometric warping across irregular, curved, and historic heritage architecture.",
  },
  {
    role: "Computer Vision & Sensing Architects",
    desc: "Engineers writing low-latency sensor fusion software connecting LiDAR nodes, infrared sensors, and depth cameras into a unified visitor tracking mesh.",
  },
  {
    role: "Real-Time Creative Technologists",
    desc: "Unreal Engine, Unity, and TouchDesigner artists creating living generative biomes, reactive fluid simulations, and responsive interactive soundscapes.",
  },
  {
    role: "Structural & AV Rigging Specialists",
    desc: "Licensed technicians designing aerospace-grade ceiling brackets, vibration dampening, concealed thermal exhaust ducts, and seismic-compliant mounts.",
  },
];

const GLOBAL_HUBS = [
  { city: "Montreal", role: "Creative Headquarters & Optical Lab", desc: "Specializing in spatial optics R&D, physical immersion simulation chambers, and hardware integration." },
  { city: "New York", role: "Spatial Software & Interactive Retail Studio", desc: "Leading computer vision engineering, client briefing centers, and commercial flagship activations." },
  { city: "Paris", role: "European Heritage & Architectural Lab", desc: "Dedicated to non-invasive heritage site preservation, architectural mapping, and cultural atriums." },
  { city: "Tokyo", role: "Urban Mobility & Interactive Systems Lab", desc: "Engineering high-throughput pedestrian tracking, multi-user motion arenas, and transit concourses." },
  { city: "Singapore", role: "Asia-Pacific Regional Experience Hub", desc: "Developing continuous-duty public destination media, ambient atriums, and hospitality environments." },
];

const STANDARDS = [
  {
    title: "Fully Non-Invasive Architectural Preservation",
    desc: "We engineer clamp-based, non-destructive rigging systems that preserve centuries-old stone vaults, historic plaster, and sensitive commercial finishes without drilling a single invasive hole.",
  },
  {
    title: "Zero Wearables, Zero Touchscreens",
    desc: "By mounting all high-precision sensors and optics overhead, surfaces remain clean, elegant, and sanitary. Audiences step directly into the canvas without clumsy headsets or physical buttons.",
  },
  {
    title: "Commercial Continuous 24-7 Reliability",
    desc: "Our optical engines feature sealed dust-proof optical paths and industrial solid-state laser engines engineered for continuous, uninterrupted commercial operation.",
  },
  {
    title: "Universal Physical Accessibility",
    desc: "Our optical tracking algorithms dynamically respond to wheelchairs, service animals, strollers, and participants of all mobility levels with equal fluidity and delight.",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white text-black flex flex-col selection:bg-black selection:text-white font-sans">
      <Navbar />

      {/* 1. CINEMATIC STUDIO HERO BANNER */}
      <section className="relative w-full min-h-screen lg:h-screen bg-black text-white flex flex-col justify-between overflow-hidden pt-24 pb-8 sm:pb-10">
        <div className="absolute inset-0 z-0">
          <SafeImage 
            src="/images/planetarium_projection_dome.jpg"
            alt="PROJECTION Spatial Engineering Studio"
            className="w-full h-full object-cover opacity-65 brightness-110 contrast-105 scale-105 animate-[slow-pan_30s_ease-in-out_infinite_alternate]"
            containerClassName="w-full h-full bg-black"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 to-black/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30" />
        </div>

        {/* Top Spacer */}
        <div className="hidden sm:block h-2" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto">
          <div className="max-w-5xl">
            <div className="flex items-center gap-2 text-[10px] sm:text-[11px] font-mono font-semibold uppercase tracking-[0.2em] text-white/90 mb-3 sm:mb-4">
              <Sparkles className="w-3.5 h-3.5 text-white" />
              <span>THE SPATIAL COMPUTING STUDIO</span>
            </div>
            
            <h1 className="font-black tracking-tight leading-[1.08] text-white mb-3 sm:mb-4 text-[clamp(2rem,5vw,4.5rem)]">
              We turn physical architecture into <br className="hidden sm:inline" />
              <span className="text-white drop-shadow-[0_0_35px_rgba(255,255,255,0.45)]">living digital ecosystems.</span>
            </h1>

            <p className="text-xs sm:text-sm lg:text-base text-white/80 font-light leading-relaxed mb-6 max-w-2xl">
              PROJECTION is an international spatial collective operating at the intersection of architectural optics, low-latency computer vision, and real-time generative simulation. We eliminate the boundary between human presence and built space.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 pt-2 items-start">
              {STATS.map((stat, idx) => (
                <div key={idx} className="flex flex-col justify-start">
                  <div className="h-7 sm:h-9 lg:h-10 flex items-center">
                    <span className="text-xl sm:text-2xl lg:text-3xl font-black text-white tracking-tight leading-none whitespace-nowrap">
                      {stat.value}
                    </span>
                  </div>
                  <div className="text-[10px] sm:text-[11px] font-mono uppercase tracking-widest text-white/70 font-bold pt-1">
                    {stat.label}
                  </div>
                  <p className="text-[10px] sm:text-[11px] text-white/50 font-light leading-tight pt-1 max-w-[220px]">
                    {stat.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 2. SPATIAL PHILOSOPHY (SWISS MINIMAL SPLIT) */}
      <section className="py-10 lg:py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
            
            <div className="lg:col-span-5 space-y-5">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-black/40 mb-2 block font-bold">
                  ENGINEERING PHILOSOPHY
                </span>
                <h2 className="font-black tracking-tight leading-[1.1] text-[clamp(1.5rem,3.5vw,2.5rem)]">
                  We don't mount generic screens. <br />
                  <span className="text-black/40">We engineer the medium.</span>
                </h2>
              </div>

              <div className="space-y-3 text-black/70 font-light leading-relaxed text-xs sm:text-sm">
                <p>
                  Most commercial display providers simply bolt commodity television panels to existing walls. We approach physical venues as holistic spatial canvases, where the ground beneath your feet, the surrounding stone surfaces, and the atmospheric air harmonize into a single responsive organism.
                </p>
                <p>
                  By mounting all high-lumen optical engines and LiDAR tracking arrays overhead, we completely eliminate fragile touch-glass, mechanical buttons, and cumbersome headsets. Visitors interact through their natural physical presence, footsteps, and gestures.
                </p>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-3.5">
                <Link
                  href="/solutions"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-wider px-6 py-3.5 rounded-full bg-black text-white hover:bg-black/80 transition-all shadow-md active:scale-95"
                >
                  <span>Explore Our Technology Suite</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <Link
                  href="/contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-wider px-6 py-3.5 rounded-full bg-black/5 text-black hover:bg-black/10 transition-all active:scale-95"
                >
                  <span>Consult an Optical Engineer</span>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-7 relative aspect-[16/10] rounded-3xl overflow-hidden bg-gray-900 shadow-2xl group">
              <SafeImage 
                src="/images/technician_calibrating_projection.jpg"
                alt="Optical Sensor Calibration and Testing Lab"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                containerClassName="w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none" />
              <div className="absolute bottom-5 left-5 right-5 sm:bottom-6 sm:left-6 sm:right-6 flex items-end justify-between text-white">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-white/70 block mb-1">Interactive Prototyping Lab</span>
                  <span className="text-sm sm:text-base font-bold">Spatial Immersion & Sensor Calibration Chamber</span>
                  <p className="text-[11px] sm:text-xs text-white/60 font-light mt-0.5">Real-time LiDAR mesh validation and sub-millimeter throw distance testing</p>
                </div>
                <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-[10px] font-mono font-bold uppercase shrink-0">
                  Active Testing
                </span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. FOUR CORE DISCIPLINES (BORDERLESS EDITORIAL 4-COLUMN) */}
      <section className="py-10 lg:py-12 bg-gray-50/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 mb-8 sm:mb-10">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-black/40 mb-2 block font-bold">
                CORE DISCIPLINES
              </span>
              <h2 className="font-black tracking-tight leading-[1.1] text-[clamp(1.5rem,3.5vw,2.5rem)]">
                Four Pillars of Spatial Innovation
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-black/60 font-light leading-relaxed max-w-md">
              From mathematical optics to physical structural rigging, our integrated studio controls every variable of the deployment pipeline.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {DISCIPLINES.map((item, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-5 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
                <div>
                  <div className="relative aspect-[16/10] rounded-xl overflow-hidden bg-gray-900 shadow-inner mb-4">
                    <SafeImage
                      src={item.img}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      containerClassName="w-full h-full"
                    />
                    <div className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded bg-black/60 backdrop-blur-md text-[10px] font-mono font-bold text-white">
                      {item.num}
                    </div>
                  </div>

                  <span className="text-[9px] sm:text-[10px] font-mono font-bold uppercase tracking-wider text-black/50 block mb-1.5">
                    {item.tag}
                  </span>
                  <h3 className="text-sm sm:text-base font-black text-black tracking-tight mb-2 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-black/70 font-light leading-relaxed mb-4">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-3">
                  <span className="text-[10px] font-mono text-black/50 block">
                    {item.metrics}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. THE 4-STAGE PROTOTYPING & DEPLOYMENT PIPELINE */}
      <section className="py-10 lg:py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl mb-8 sm:mb-10">
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-black/40 mb-2 block font-bold">
              RIGOROUS METHODOLOGY
            </span>
            <h2 className="font-black tracking-tight leading-[1.1] text-[clamp(1.5rem,3.5vw,2.5rem)] mb-2 sm:mb-3">
              How We Engineer Every Space
            </h2>
            <p className="text-xs sm:text-sm text-black/60 font-light leading-relaxed">
              A methodical four-phase production framework ensuring millimeter precision, flawless stability, and zero disruption to venue schedules.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {PIPELINE_STEPS.map((step, idx) => (
              <div key={idx} className="bg-gray-50/70 rounded-2xl p-5 flex flex-col justify-between group hover:bg-gray-100/70 transition-colors">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-2.5 py-1 rounded-full bg-black/5 text-[10px] font-mono font-bold text-black/70 group-hover:bg-black group-hover:text-white transition-colors">
                      {step.phase}
                    </span>
                  </div>
                  <h3 className="text-sm sm:text-base font-black text-black tracking-tight mb-2 leading-snug">
                    {step.title}
                  </h3>
                  <p className="text-xs text-black/70 font-light leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. MULTIDISCIPLINARY COLLECTIVE (THE MAKERS) */}
      <section className="py-10 lg:py-12 bg-gray-50/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            <div className="lg:col-span-5">
              <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-black/40 mb-2 block font-bold">
                THE COLLECTIVE
              </span>
              <h2 className="font-black tracking-tight leading-[1.1] text-[clamp(1.5rem,3.5vw,2.5rem)] mb-4">
                Specialized Crafts, Unified Spatial Vision
              </h2>
              <p className="text-xs sm:text-sm text-black/70 font-light leading-relaxed mb-6">
                We believe truly transcendent spatial experiences cannot be bought out of a catalog. They require deep cross-disciplinary collaboration between optical physicists, real-time shader coders, and architectural engineers.
              </p>

              <div className="p-5 rounded-2xl bg-black text-white space-y-2.5">
                <span className="text-[10px] font-mono uppercase tracking-widest text-white/60 font-bold block">
                  Studio Commitment
                </span>
                <p className="text-xs sm:text-sm font-bold leading-snug">
                  Every software line, optical ray calculation, and structural mount is owned directly by our in-house engineering team.
                </p>
                <p className="text-[11px] text-white/70 font-light">
                  Zero outsourcing of core software engines ensures total system reliability and instant customizability.
                </p>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-3.5">
              {CRAFTS.map((craft, idx) => (
                <div key={idx} className="p-4 rounded-2xl bg-white shadow-sm flex items-start gap-4">
                  <span className="w-7 h-7 rounded-full bg-black/5 text-black flex items-center justify-center shrink-0 text-xs font-mono font-bold">
                    0{idx + 1}
                  </span>
                  <div>
                    <h3 className="text-sm sm:text-base font-bold text-black tracking-tight mb-1">
                      {craft.role}
                    </h3>
                    <p className="text-xs text-black/70 font-light leading-relaxed">
                      {craft.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* 6. GLOBAL NETWORK & PRODUCTION FOOTPRINT */}
      <section className="py-10 lg:py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            <div className="lg:col-span-5">
              <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-black/40 mb-2 block font-bold">
                GLOBAL FOOTPRINT
              </span>
              <h2 className="font-black tracking-tight leading-[1.1] text-[clamp(1.5rem,3.5vw,2.5rem)] mb-4">
                Global Studio Network & Project Operations
              </h2>
              <p className="text-xs sm:text-sm text-black/70 font-light leading-relaxed mb-5">
                Operating through international studio hubs, our spatial engineering collective supports venue projects from initial architectural concept to permanent 24-7 commercial operation.
              </p>

              <div className="space-y-2.5">
                {GLOBAL_HUBS.map((hub, idx) => (
                  <div key={idx} className="p-3 sm:p-3.5 rounded-xl bg-black/[0.03] hover:bg-black/[0.06] transition-colors flex items-start gap-3.5">
                    <div className="w-7 h-7 rounded-full bg-black text-white flex items-center justify-center shrink-0 text-xs font-mono font-bold">
                      0{idx + 1}
                    </div>
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-black tracking-tight flex items-center gap-2">
                        <span>{hub.city}</span>
                        <span className="text-[10px] font-normal text-black/50 font-mono">• {hub.role}</span>
                      </h4>
                      <p className="text-[11px] sm:text-xs text-black/60 font-light mt-0.5">
                        {hub.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-7 relative aspect-[4/3] rounded-3xl overflow-hidden bg-black shadow-2xl group">
              <SafeImage 
                src="/images/horizon_glass_floor.jpg"
                alt="Global Architectural Operations"
                className="w-full h-full object-cover brightness-105 group-hover:scale-105 transition-transform duration-700"
                containerClassName="w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-5 left-5 right-5 sm:bottom-6 sm:left-6 sm:right-6 text-white">
                <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-white/60 block mb-1">
                  INTERNATIONAL DEPLOYMENT
                </span>
                <p className="text-sm sm:text-base font-bold">
                  High-Throughput Spatial Architecture at Global Transit & Cultural Hubs
                </p>
                <p className="text-[11px] sm:text-xs text-white/70 font-light mt-1">
                  Engineered for hundreds of thousands of annual visitors with zero optical drift
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 7. ARCHITECTURAL COMMITMENTS & ETHICAL STANDARDS */}
      <section className="py-10 lg:py-12 bg-gray-50/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl mb-8 sm:mb-10">
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-black/40 mb-2 block font-bold">
              QUALITY STANDARDS
            </span>
            <h2 className="font-black tracking-tight leading-[1.1] text-[clamp(1.5rem,3.5vw,2.5rem)] mb-3">
              Our Architectural Commitments
            </h2>
            <p className="text-xs sm:text-sm text-black/60 font-light leading-relaxed">
              Every permanent installation conforms to strict museum-grade preservation, commercial reliability, and universal physical accessibility standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {STANDARDS.map((std, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-5 shadow-sm space-y-2">
                <div className="flex items-center gap-2.5 text-black font-bold text-sm sm:text-base">
                  <CheckCircle2 className="w-5 h-5 text-black shrink-0" />
                  <span>{std.title}</span>
                </div>
                <p className="text-xs sm:text-sm text-black/70 font-light leading-relaxed pl-7">
                  {std.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. HIGH-IMPACT STUDIO CALL TO ACTION */}
      <section className="py-16 lg:py-20 bg-black text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            
            <div className="lg:col-span-8 space-y-4">
              <span className="inline-flex items-center gap-2 text-[10px] sm:text-[11px] font-mono font-semibold tracking-[0.2em] text-white/70 bg-white/10 px-3.5 py-1.5 rounded-full uppercase">
                <Compass className="w-3.5 h-3.5 text-white" />
                <span>SPATIAL BRIEFING</span>
              </span>
              <h2 className="font-black text-white tracking-tight leading-[1.08] text-[clamp(2rem,4vw,3rem)]">
                Ready to engineer an extraordinary interactive space?
              </h2>
              <p className="text-white/70 font-light text-xs sm:text-sm lg:text-base leading-relaxed max-w-2xl">
                Schedule a 1-on-1 technical consultation with our optical physicists, spatial software architects, and experience designers.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3.5 w-full">
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 text-xs font-bold uppercase tracking-wider px-8 py-4 rounded-full bg-white text-black hover:bg-gray-100 transition-all shadow-xl active:scale-95 text-center"
              >
                <span>Book a Spatial Briefing</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/projects"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 text-xs font-bold uppercase tracking-wider px-8 py-4 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all text-center"
              >
                <span>View Portfolio of Case Studies</span>
              </Link>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
