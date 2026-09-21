"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SafeImage from "@/components/SafeImage";
import { Mail, Phone, MapPin, Send, Sparkles, CheckCircle2, Globe, Clock, ShieldCheck, ArrowRight } from "lucide-react";
import { useState } from "react";
import { SITE_CONTACT, CANONICAL_INDUSTRIES } from "@/lib/constants";

const GLOBAL_STUDIOS = [
  { city: "Montreal", timezone: "EST (UTC-5)", focus: "R&D Headquarters & Prototyping Chamber" },
  { city: "New York", timezone: "EST (UTC-5)", focus: "Spatial Software & Interactive Retail Studio" },
  { city: "Paris", timezone: "CET (UTC+1)", focus: "Heritage Architecture & European Deployments" },
  { city: "Tokyo", timezone: "JST (UTC+9)", focus: "High-Density Transit & Urban Spatial Systems" },
  { city: "Singapore", timezone: "SGT (UTC+8)", focus: "Aviation & Destination Concourse Portals" },
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    org: "",
    industry: CANONICAL_INDUSTRIES[0]?.id || "education",
    footprint: "500-2500",
    solution: "Interactive Floor / Wall",
    timeline: "3-6-months",
    details: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-white text-black flex flex-col selection:bg-black selection:text-white font-sans">
      <Navbar />

      {/* SECTION 01: CLEAN LIGHT-THEME HERO BANNER */}
      <section className="relative pt-32 pb-12 sm:pt-40 sm:pb-16 w-full bg-white text-black flex flex-col justify-center overflow-hidden">
        {/* Center Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
          <div className="max-w-4xl mx-auto space-y-6 sm:space-y-7">
            
            {/* Tag (No Pill Container) */}
            <div className="flex justify-center items-center gap-2.5 text-[10px] sm:text-[11px] font-mono font-semibold tracking-[0.25em] text-black uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-black animate-pulse" />
              <span>SPATIAL CONSULTATION & BRIEFING</span>
            </div>

            <h1 className="font-black tracking-tight text-black leading-[1.05] text-[clamp(2.5rem,6vw,5.5rem)]">
              Initiate Your <br />
              <span className="font-light text-black/70">Spatial Transformation</span>
            </h1>

            <p className="text-sm sm:text-base lg:text-lg text-black/75 font-light leading-relaxed max-w-2xl mx-auto">
              Schedule a technical briefing with our optical physicists, LiDAR computer vision architects, and creative technologists to scope your venue.
            </p>

            {/* Direct CTA Action */}
            <div className="pt-2 flex items-center justify-center gap-4">
              <a
                href="#scoping-form"
                className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-black text-white font-bold text-xs uppercase tracking-widest hover:bg-neutral-800 transition-all shadow-xl hover:scale-105 active:scale-95 cursor-pointer"
              >
                <span>Begin Project Scoping</span>
                <Sparkles className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Quick Commitments (Centered & Light Theme) */}
            <div className="pt-12 max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-neutral-50 border border-black/5 hover:border-black/10 transition-colors">
                <Clock className="w-5 h-5 text-black mb-3" />
                <span className="text-[10px] font-mono tracking-widest text-black/50 uppercase font-semibold">RESPONSE TIME</span>
                <p className="text-xs sm:text-sm text-black font-bold mt-1">Sub-24h Technical Review</p>
                <span className="text-[10px] text-black/40 font-light mt-1">Direct senior engineering review</span>
              </div>
              <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-neutral-50 border border-black/5 hover:border-black/10 transition-colors">
                <ShieldCheck className="w-5 h-5 text-black mb-3" />
                <span className="text-[10px] font-mono tracking-widest text-black/50 uppercase font-semibold">CONFIDENTIALITY</span>
                <p className="text-xs sm:text-sm text-black font-bold mt-1">Mutual NDA Protected</p>
                <span className="text-[10px] text-black/40 font-light mt-1">Full proprietary IP coverage</span>
              </div>
              <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-neutral-50 border border-black/5 hover:border-black/10 transition-colors">
                <Globe className="w-5 h-5 text-black mb-3" />
                <span className="text-[10px] font-mono tracking-widest text-black/50 uppercase font-semibold">DIRECT ACCESS</span>
                <p className="text-xs sm:text-sm text-black font-bold mt-1">Lead Hardware Architects</p>
                <span className="text-[10px] text-black/40 font-light mt-1">No sales intermediaries</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 02: SCOPING FORM & STUDIO HUBS */}
      <section id="scoping-form" className="py-12 sm:py-16 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            
            {/* Left Column: Form (7 Cols) */}
            <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 border border-black/10 shadow-xl">
              {submitted ? (
                <div className="text-center py-16 space-y-5">
                  <div className="w-16 h-16 rounded-full bg-black text-white flex items-center justify-center mx-auto shadow-lg">
                    <CheckCircle2 className="w-8 h-8 text-white" />
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-black/50 font-bold block">
                    PROJECT INTAKE RECEIVED
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-black">
                    Briefing Dispatched to Engineering.
                  </h3>
                  <p className="text-xs sm:text-sm text-black/70 font-light max-w-md mx-auto leading-relaxed">
                    Thank you, <span className="font-semibold text-black">{formData.name}</span>. An optical engineer from our studio will review your parameters for <span className="font-semibold text-black">{formData.org || "your space"}</span> and respond within 24 business hours.
                  </p>
                  <div className="pt-4">
                    <button
                      onClick={() => setSubmitted(false)}
                      className="text-xs font-mono uppercase tracking-wider text-black border-b border-black pb-0.5 hover:text-black/60 transition-colors"
                    >
                      Submit Another Spatial Briefing →
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-black/50 block font-bold mb-1">
                      TECHNICAL SCOPING WORKFLOW
                    </span>
                    <h2 className="text-xl sm:text-2xl font-black tracking-tight text-black">
                      Project Specification Form
                    </h2>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-[10px] font-mono uppercase tracking-wider text-black/70 mb-1.5 font-bold">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Dr. Elena Rostova"
                        className="w-full px-4 py-3 bg-neutral-50 border border-black/15 rounded-xl text-black placeholder-black/30 text-xs focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-mono uppercase tracking-wider text-black/70 mb-1.5 font-bold">
                        Work Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="elena@institution.org"
                        className="w-full px-4 py-3 bg-neutral-50 border border-black/15 rounded-xl text-black placeholder-black/30 text-xs focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-[10px] font-mono uppercase tracking-wider text-black/70 mb-1.5 font-bold">
                        Organization / Venue *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.org}
                        onChange={(e) => setFormData({ ...formData, org: e.target.value })}
                        placeholder="Museum of Modern Science"
                        className="w-full px-4 py-3 bg-neutral-50 border border-black/15 rounded-xl text-black placeholder-black/30 text-xs focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-mono uppercase tracking-wider text-black/70 mb-1.5 font-bold">
                        Target Industry *
                      </label>
                      <select 
                        value={formData.industry}
                        onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                        className="w-full px-4 py-3 bg-neutral-50 border border-black/15 rounded-xl text-black text-xs focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-all"
                      >
                        {CANONICAL_INDUSTRIES.map((ind) => (
                          <option key={ind.id} value={ind.id}>
                            {ind.title}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-[10px] font-mono uppercase tracking-wider text-black/70 mb-1.5 font-bold">
                        Estimated Spatial Footprint
                      </label>
                      <select 
                        value={formData.footprint}
                        onChange={(e) => setFormData({ ...formData, footprint: e.target.value })}
                        className="w-full px-4 py-3 bg-neutral-50 border border-black/15 rounded-xl text-black text-xs focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-all"
                      >
                        <option value="under-500">Boutique Zone (&lt; 500 sq ft)</option>
                        <option value="500-2500">Medium Gallery / Lab (500 – 2,500 sq ft)</option>
                        <option value="2500-10000">Large Venue / Atrium (2,500 – 10,000 sq ft)</option>
                        <option value="over-10000">Architectural Landmark / Façade (10,000+ sq ft)</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-[10px] font-mono uppercase tracking-wider text-black/70 mb-1.5 font-bold">
                        Desired Timeline
                      </label>
                      <select 
                        value={formData.timeline}
                        onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                        className="w-full px-4 py-3 bg-neutral-50 border border-black/15 rounded-xl text-black text-xs focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-all"
                      >
                        <option value="immediate">Immediate (&lt; 3 Months)</option>
                        <option value="3-6-months">3 – 6 Months</option>
                        <option value="6-12-months">6 – 12 Months</option>
                        <option value="feasibility">Preliminary Architectural Feasibility</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] font-mono uppercase tracking-wider text-black/70 mb-1.5 font-bold">
                      Primary Technology Category
                    </label>
                    <select 
                      value={formData.solution}
                      onChange={(e) => setFormData({ ...formData, solution: e.target.value })}
                      className="w-full px-4 py-3 bg-neutral-50 border border-black/15 rounded-xl text-black text-xs focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-all"
                    >
                      <option>Interactive Motion Floor &amp; Wall</option>
                      <option>Architectural 360° Projection Mapping</option>
                      <option>Immersive Sensory Dome &amp; Tunnel</option>
                      <option>Conversational Generative AI Avatar Mirrors</option>
                      <option>Smart Multiplayer Edutainment Arena</option>
                      <option>Custom Architectural AV Engineering</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[10px] font-mono uppercase tracking-wider text-black/70 mb-1.5 font-bold">
                      Venue Scope &amp; Environmental Conditions *
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={formData.details}
                      onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                      placeholder="Please describe ceiling height, surface materials (stone, wood, concrete), ambient lighting (lux levels/windows), and target audience throughput..."
                      className="w-full px-4 py-3 bg-neutral-50 border border-black/15 rounded-xl text-black placeholder-black/30 text-xs focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-all"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-black text-white hover:bg-neutral-800 transition-all font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 shadow-lg active:scale-[0.99]"
                  >
                    <span>Transmit Scoping Briefing</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </form>
              )}
            </div>

            {/* Right Column: Global Studio Hubs & Direct Lines (5 Cols) */}
            <div className="lg:col-span-5 space-y-6">
              {/* Direct Studio Contact Card */}
              <div className="bg-black text-white rounded-3xl p-6 sm:p-8 border border-white/10 shadow-2xl space-y-6">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-white/50 block font-bold mb-1">
                    STUDIO TELEMETRY &amp; DISPATCH
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black tracking-tight text-white">
                    Direct Contact Lines
                  </h3>
                </div>

                <div className="space-y-4 text-xs font-light text-white/80">
                  <div className="flex items-start gap-3.5 p-3 rounded-xl bg-white/5 border border-white/10">
                    <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center shrink-0 mt-0.5">
                      <Mail className="w-4 h-4 text-cyan-400" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-wider text-white/50 block">Engineering Briefs</span>
                      <a href={`mailto:${SITE_CONTACT.email}`} className="text-white font-medium hover:underline text-xs sm:text-sm">
                        {SITE_CONTACT.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5 p-3 rounded-xl bg-white/5 border border-white/10">
                    <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center shrink-0 mt-0.5">
                      <Phone className="w-4 h-4 text-cyan-400" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-wider text-white/50 block">Studio Hotline</span>
                      <a href={`tel:${SITE_CONTACT.phone}`} className="text-white font-medium hover:underline text-xs sm:text-sm">
                        {SITE_CONTACT.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5 p-3 rounded-xl bg-white/5 border border-white/10">
                    <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center shrink-0 mt-0.5">
                      <MapPin className="w-4 h-4 text-cyan-400" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-wider text-white/50 block">R&amp;D Testing Chambers</span>
                      <span className="text-white font-medium text-xs sm:text-sm">{SITE_CONTACT.address}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Global Production Labs */}
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-black/10 shadow-sm space-y-4">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-black/50 block font-bold mb-1">
                    GLOBAL PRESENCE
                  </span>
                  <h4 className="text-base sm:text-lg font-black text-black">
                    International Innovation Hubs
                  </h4>
                </div>

                <div className="divide-y divide-black/10">
                  {GLOBAL_STUDIOS.map((hub, i) => (
                    <div key={i} className="py-3 first:pt-0 last:pb-0 flex items-start justify-between gap-3 text-xs">
                      <div>
                        <div className="font-bold text-black flex items-center gap-1.5">
                          <Globe className="w-3.5 h-3.5 text-black/40" />
                          <span>{hub.city}</span>
                        </div>
                        <p className="text-[11px] text-black/60 font-light mt-0.5">{hub.focus}</p>
                      </div>
                      <span className="text-[10px] font-mono text-black/40 shrink-0 font-medium pt-0.5">
                        {hub.timezone}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
