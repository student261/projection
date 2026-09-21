import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import ProjectsHero from "@/components/ProjectsHero";
import HorizontalProjectsShowcase from "@/components/HorizontalProjectsShowcase";
import SpatialCapabilities from "@/components/SpatialCapabilities";
import { Compass } from "lucide-react";

export const metadata = {
  title: "All Projects & Case Studies - PROJECTION Studio",
  description: "Discover our portfolio of motion-projected environments, architectural light mapping, and interactive spatial installations across 8 global industries.",
};

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-white text-black flex flex-col">
      <Navbar />

      {/* Hero Section - Animated Counter Header */}
      <ProjectsHero />

      {/* Moment Factory Horizontal Scroll Showcase (10 Cards with Category Filters) */}
      <HorizontalProjectsShowcase />

      {/* Spatial Capability Matrix Section */}
      <SpatialCapabilities />

      {/* High-Impact CTA Section */}
      <section className="pb-20 sm:pb-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-50 border border-black/10 text-black rounded-3xl p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl relative overflow-hidden">
            <div className="space-y-3 max-w-2xl relative z-10">
              <div className="flex items-center gap-2 text-[10px] sm:text-[11px] font-mono font-semibold tracking-[0.2em] text-black/40 uppercase">
                <Compass className="w-3.5 h-3.5" />
                <span>SPATIAL CONSULTATION</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-black tracking-tight leading-[1.1]">
                Ready to transform your venue with spatial intelligence?
              </h2>
              <p className="text-gray-600 font-light text-sm leading-relaxed">
                Schedule a 1-on-1 technical briefing with our optical projection engineers, interactive software architects, and spatial designers.
              </p>
            </div>

            <div className="relative z-10 shrink-0 w-full md:w-auto">
              <Link href="/contact" className="inline-flex items-center justify-center w-full md:w-auto bg-black text-white hover:bg-gray-800 font-bold px-8 py-4 text-xs uppercase tracking-wider rounded-full shadow-lg transition-all active:scale-95">
                Book a Technical Demo →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
