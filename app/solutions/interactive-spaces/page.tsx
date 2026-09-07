"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SafeImage from "@/components/SafeImage";
import SectionHeading from "@/components/ui/SectionHeading";
import Divider from "@/components/ui/Divider";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Play, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const otherSolutions = [
  { title: "Interactive Ceiling", desc: "Downward projection mapping for ambient storytelling.", img: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&w=800&q=80" },
  { title: "Interactive Window", desc: "Turn store windows into touch-responsive displays.", img: "https://images.unsplash.com/photo-1534452203293-494d7ddbf7e0?auto=format&fit=crop&w=800&q=80" },
  { title: "Interactive Mirror", desc: "Smart mirrors for fashion, retail, and fitness.", img: "https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&w=800&q=80" },
  { title: "Interactive Table", desc: "Multi-touch object recognition tables for collaboration.", img: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80" },
  { title: "Interactive Sandbox", desc: "Augmented reality landscapes for education and museums.", img: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=800&q=80" },
];

const benefits = [
  { title: "Higher Engagement", desc: "Transform passive observers into active participants through natural motion." },
  { title: "Deeper Interaction", desc: "Create memorable moments that extend dwell time and brand connection." },
  { title: "Accelerated Learning", desc: "Foster collaborative, kinesthetic learning environments for education." },
  { title: "Unforgettable Experience", desc: "Deliver photogenic, magical spaces that visitors naturally want to share." }
];

const industries = [
  { title: "Education", img: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80", href: "/industries/education" },
  { title: "Healthcare", img: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80", href: "/industries/healthcare" },
  { title: "Retail", img: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80", href: "/industries/retail" },
  { title: "Entertainment", img: "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=800&q=80", href: "/industries/entertainment" }
];

const projects = [
  { industry: "Education", title: "Immersive Sensory Room", href: "/projects" },
  { industry: "Retail", title: "Flagship Window Display", href: "/projects" },
  { industry: "Museum", title: "Interactive History Timeline", href: "/projects" }
];

export default function InteractiveSpacesPage() {
  return (
    <main className="min-h-screen bg-white text-black flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden bg-black text-white min-h-[85vh] flex flex-col justify-center">
        <div className="absolute inset-0 z-0">
          <SafeImage 
            src="https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1920&q=80" 
            alt="Interactive Floor Hero" 
            className="w-full h-full object-cover opacity-50" 
            containerClassName="w-full h-full"
            priority 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
          
          {/* Simulated Video Play overlay */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-40">
            <div className="w-24 h-24 rounded-full border border-white/30 flex items-center justify-center backdrop-blur-sm">
              <Play className="w-8 h-8 text-white ml-2" />
            </div>
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block py-1 px-3 rounded-full bg-white/10 border border-white/20 text-[10px] font-bold uppercase tracking-[0.25em] text-white/80 mb-6"
          >
            Core Capabilities
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl sm:text-7xl lg:text-8xl font-black text-white leading-[1.05] mb-6 tracking-tight drop-shadow-xl"
          >
            Interactive <br className="hidden sm:block" /> Spaces
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg sm:text-2xl text-white/90 font-light max-w-3xl mx-auto mb-10 leading-relaxed"
          >
            Transform everyday surfaces into responsive digital environments. We build motion-tracking projection floors, walls, and multi-touch surfaces.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link href="/contact" className="px-8 py-4 rounded-full bg-white text-black font-bold text-xs uppercase tracking-widest hover:scale-105 transition-transform">
              Start Your Project
            </Link>
            <Link href="/contact" className="px-8 py-4 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white font-bold text-xs uppercase tracking-widest hover:bg-white/20 transition-colors">
              Book a Demo
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Interactive Floor Block */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden shadow-2xl">
             <SafeImage src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&q=80" alt="Interactive Floor" className="w-full h-full object-cover" containerClassName="w-full h-full" />
          </div>
          <div>
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500 mb-4 block">Core Solution</span>
            <h2 className="text-4xl font-black mb-6">Interactive Floor</h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              A motion-responsive digital floor that reacts instantly to footsteps. By combining overhead projection with depth-sensing cameras, the physical floor becomes a limitless playground.
            </p>
            
            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                <h4 className="font-bold text-black flex items-center gap-2 mb-2"><Sparkles className="w-4 h-4" /> How It Works</h4>
                <p className="text-sm text-gray-600">Overhead infrared sensors map the floor grid. When someone steps into the projection zone, the system calculates their exact coordinates and triggers real-time visual reactions under their feet.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                <h4 className="font-bold text-black flex items-center gap-2 mb-2"><CheckCircle2 className="w-4 h-4" /> Use Cases</h4>
                <p className="text-sm text-gray-600">Pediatric hospital waiting rooms (distraction therapy), kindergarten active learning games, retail mall entryways, and interactive wedding dance floors.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Divider />

      {/* Interactive Wall Block */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center lg:flex-row-reverse">
          <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden shadow-2xl lg:order-2">
             <SafeImage src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1200&q=80" alt="Interactive Wall" className="w-full h-full object-cover" containerClassName="w-full h-full" />
          </div>
          <div className="lg:order-1">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500 mb-4 block">Core Solution</span>
            <h2 className="text-4xl font-black mb-6">Interactive Wall</h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Turn any blank wall into a massive interactive canvas. Touch, gesture, and throw physical objects at the wall to trigger digital explosions, paint strokes, or data reveals.
            </p>
            
            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                <h4 className="font-bold text-black flex items-center gap-2 mb-2"><Sparkles className="w-4 h-4" /> How It Works</h4>
                <p className="text-sm text-gray-600">A laser scanner maps a 2D plane across the wall surface. When a hand or object breaks the plane, the XY coordinates are sent to the media engine, instantly rendering a collision effect.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                <h4 className="font-bold text-black flex items-center gap-2 mb-2"><CheckCircle2 className="w-4 h-4" /> Use Cases</h4>
                <p className="text-sm text-gray-600">Museum educational timelines, interactive gym dodgeball games, sensory rooms for special needs, and dynamic corporate lobby data visualizations.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Solutions Visual Cards */}
      <section className="py-24 bg-gray-50 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading label="EXPANDING THE CANVAS" heading="Other Surface Solutions" subheading="We don't just stop at floors and walls. We can make almost any architectural surface interactive." />
          
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {otherSolutions.map((sol, idx) => (
              <div key={idx} className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-gray-100 flex flex-col">
                <div className="aspect-[4/3] overflow-hidden relative">
                  <SafeImage src={sol.img} alt={sol.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" containerClassName="w-full h-full" />
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <h4 className="font-bold text-black text-sm mb-2">{sol.title}</h4>
                  <p className="text-xs text-gray-500 leading-relaxed">{sol.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology List & Benefits */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20">
          
          {/* Outcomes/Benefits */}
          <div>
            <SectionHeading label="MEASURABLE OUTCOMES" heading="The Impact of Interaction" />
            <div className="mt-10 space-y-8">
              {benefits.map((b, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center shrink-0 font-mono text-sm font-bold">0{idx+1}</div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">{b.title}</h4>
                    <p className="text-gray-600">{b.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Technology List */}
          <div className="bg-black text-white p-10 sm:p-14 rounded-[3rem] shadow-2xl">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/50 mb-4 block">System Architecture</span>
            <h3 className="text-3xl font-black mb-8">The Technology Stack</h3>
            <ul className="space-y-6">
              <li className="border-b border-white/10 pb-6">
                <h4 className="text-lg font-bold mb-2">Infrared Optical Sensors</h4>
                <p className="text-sm text-white/60 font-light">High-framerate depth cameras detect movement in zero-light and bright environments.</p>
              </li>
              <li className="border-b border-white/10 pb-6">
                <h4 className="text-lg font-bold mb-2">High-Lumen Laser Projection</h4>
                <p className="text-sm text-white/60 font-light">Vibrant, maintenance-free laser light sources capable of mapping huge surfaces.</p>
              </li>
              <li className="border-b border-white/10 pb-6">
                <h4 className="text-lg font-bold mb-2">Real-Time Tracking Engine</h4>
                <p className="text-sm text-white/60 font-light">Custom software computing skeletal and blob tracking at 60 frames per second.</p>
              </li>
              <li>
                <h4 className="text-lg font-bold mb-2">Edge Blending</h4>
                <p className="text-sm text-white/60 font-light">Seamlessly stitching multiple projectors together for massive seamless displays.</p>
              </li>
            </ul>
          </div>

        </div>
      </section>

      {/* Industries & Case Studies */}
      <section className="py-24 bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading label="PROVEN ACROSS SECTORS" heading="Industries We Serve" centered />
          
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((ind, idx) => (
              <Link key={idx} href={ind.href} className="group relative aspect-square rounded-3xl overflow-hidden block">
                <SafeImage src={ind.img} alt={ind.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" containerClassName="w-full h-full" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-6">
                  <h4 className="text-white font-bold text-xl">{ind.title}</h4>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-24">
            <SectionHeading label="PORTFOLIO" heading="Related Projects" centered />
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
               {projects.map((proj, idx) => (
                 <Link key={idx} href={proj.href} className="group p-6 bg-white border border-gray-200 rounded-2xl hover:border-black transition-colors block text-center">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2 block">{proj.industry}</span>
                    <h4 className="font-bold text-lg group-hover:underline decoration-2 underline-offset-4">{proj.title}</h4>
                 </Link>
               ))}
            </div>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="py-24 bg-black text-white text-center px-4">
        <div className="max-w-3xl mx-auto space-y-8">
          <h2 className="text-4xl md:text-5xl font-black">Ready to build your space?</h2>
          <p className="text-white/70 text-lg max-w-xl mx-auto font-light">Tell us about your physical location, audience, and goals. We&apos;ll help you design the perfect interactive environment.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link href="/contact" className="px-8 py-4 rounded-full bg-white text-black font-bold text-xs uppercase tracking-widest hover:scale-105 transition-transform w-full sm:w-auto">
              Start Your Project
            </Link>
            <Link href="/contact" className="px-8 py-4 rounded-full border border-white/30 text-white font-bold text-xs uppercase tracking-widest hover:bg-white/10 transition-colors w-full sm:w-auto">
              Book a Demo
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
