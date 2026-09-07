import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Divider from "@/components/ui/Divider";
import Button from "@/components/ui/Button";
import ProjectsHero from "@/components/ProjectsHero";
import HorizontalProjectsShowcase from "@/components/HorizontalProjectsShowcase";
import { Compass, Layers, Cpu, Radio, ShieldCheck } from "lucide-react";

export const metadata = {
  title: "All Projects & Case Studies - PROJECTION Studio",
  description: "Discover our portfolio of motion-projected environments, architectural light mapping, and interactive spatial installations across 8 global industries.",
};

const capabilities = [
  {
    icon: Layers,
    title: "360° Projection Mapping",
    desc: "Sub-millimeter optical warping and multi-projector edge-blending for seamless curved architectures.",
    tag: "OPTICAL ENGINE",
  },
  {
    icon: Radio,
    title: "Real-time Motion Sensing",
    desc: "LiDAR and optical tracking matrices triggering instantaneous physical-to-digital physics simulation.",
    tag: "HARDWARE SENSORS",
  },
  {
    icon: Cpu,
    title: "Generative AI Environments",
    desc: "Autonomous conversational AI companions and generative procedural visual renders reacting in real time.",
    tag: "AI ARCHITECTURE",
  },
  {
    icon: ShieldCheck,
    title: "24/7 Enterprise Reliability",
    desc: "Military-grade thermal cooling, automated remote telemetry, and redundant failover media servers.",
    tag: "SYSTEM INFRASTRUCTURE",
  },
];

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-gray-50 text-black flex flex-col pt-24 selection:bg-black selection:text-white">
      <Navbar />

      {/* Hero Section - Animated Counter Header */}
      <ProjectsHero />

      {/* Moment Factory Horizontal Scroll Showcase (10 Cards with Category Filters) */}
      <HorizontalProjectsShowcase />

      {/* Spatial Capability Matrix Section */}
      <section className="py-16 sm:py-20 bg-white text-black border-t border-black/10 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-left max-w-3xl space-y-3">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-black">
              TECHNICAL EXCELLENCE
            </span>
            <h2 className="text-black">
              Spatial Engineering Capabilities
            </h2>
            <p className="text-black/70 font-light text-sm leading-relaxed">
              Every installation combines proprietary optical engineering, real-time computer vision sensors, and cloud media orchestration.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {capabilities.map((cap, idx) => {
              const Icon = cap.icon;
              return (
                <div
                  key={idx}
                  className="bg-gray-50 border border-black/10 p-6 rounded-3xl space-y-4 transition-all duration-300 hover:border-[#000000] hover:bg-white group shadow-sm"
                >
                  <div className="w-12 h-12 rounded-2xl bg-neutral-200 border border-neutral-300 flex items-center justify-center text-black group-hover:scale-105 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-black block">
                    {cap.tag}
                  </span>
                  <h3 className="text-black">
                    {cap.title}
                  </h3>
                  <p className="text-xs text-black/70 font-light leading-relaxed">
                    {cap.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <Divider />

      {/* High-Impact CTA Section */}
      <section className="py-20 bg-white border-t border-black/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-black text-white rounded-3xl p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl relative overflow-hidden">
            <div className="space-y-3 max-w-2xl relative z-10">
              <div className="inline-flex items-center gap-2 text-[10px] uppercase tracking-widest text-white/70 bg-white/10 px-3 py-1 rounded-full border border-white/20">
                <Compass className="w-3.5 h-3.5 text-white" />
                <span>SPATIAL CONSULTATION</span>
              </div>
              <h2 className="text-white">
                Ready to transform your venue with spatial intelligence?
              </h2>
              <p className="text-white/70 font-light text-sm leading-relaxed">
                Schedule a 1-on-1 technical briefing with our optical projection engineers, interactive software architects, and spatial designers.
              </p>
            </div>

            <div className="relative z-10 shrink-0 w-full md:w-auto">
              <Button href="/contact" variant="primary" className="w-full md:w-auto text-center justify-center bg-white text-black hover:bg-gray-100 font-bold px-8 py-4 text-xs tracking-wider rounded-full shadow-lg">
                Book a Technical Demo →
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
