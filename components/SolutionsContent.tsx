"use client";

import { useState } from "react";
import SafeImage from "@/components/SafeImage";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ChevronDown, Play } from "lucide-react";

const solutionsData = [
  {
    id: "interactive-spaces",
    num: "01",
    title: "Interactive Experiences",
    subtitle: "Turn Surfaces Into Active Digital Spaces",
    badge: "Motion Projection • Floor & Wall",
    desc: "Transform everyday surfaces—floors, walls, tables, and windows—into responsive digital environments that encourage movement, participation, and discovery.",
    useCase: "Ideal for retail pop-ups, museum exhibits, and pediatric waiting rooms.",
    img: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80",
    features: [
      "Interactive Motion Floors & Projection Walls",
      "Real-Time Body & Object Tracking Sensors",
      "Dynamic Multi-Touch Digital Surfaces",
      "Custom Gaming & Educational Software Packages",
    ],
  },
  {
    id: "immersive-environment",
    num: "02",
    title: "Immersive Environments",
    subtitle: "360° Panoramic & Projection Mapping",
    badge: "360° Rooms • Projection Mapping",
    desc: "Create large-scale projection environments, 360-degree rooms, and architectural projection mapping that transport visitors into extraordinary narrative worlds.",
    useCase: "Ideal for theme parks, flagship showrooms, and digital art galleries.",
    img: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1200&q=80",
    features: [
      "Seamless Multi-Projector Edge Blending",
      "Spatial Surround Sound Integration",
      "Architectural & Custom Surface Mapping",
      "Centralized Show Control Systems",
    ],
  },
  {
    id: "ai-experience",
    num: "03",
    title: "AI Experiences",
    subtitle: "Personalized Digital Interactions",
    badge: "AI Avatars • Real-Time Responses",
    desc: "Give your visitors a personalized, magical experience that adapts to them instantly. Our intelligent systems greet guests, respond to their movements, and create unique moments for everyone who walks by.",
    useCase: "Ideal for VIP lounges, innovative corporate lobbies, and interactive brand activations.",
    img: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1200&q=80",
    features: [
      "Interactive AI Avatars & Digital Concierges",
      "Generative Real-Time Particle & Visual Media",
      "Audience Demographics & Heatmap Analytics",
      "Touchless Gesture & Movement Recognition",
    ],
  },
  {
    id: "solution-engagement",
    num: "04",
    title: "Smart Audience Engagement",
    subtitle: "Measurable Results & Deep Interactivity",
    badge: "Kiosks • Cloud CMS • Analytics",
    desc: "Drive longer dwell times and higher conversion rates with gamified touchpoints. Capture valuable audience insights while providing a fun, memorable brand interaction.",
    useCase: "Ideal for expo booths, retail gamification, and lead generation stations.",
    img: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1200&q=80",
    features: [
      "Remote Content Management (Cloud CMS)",
      "Interactive Quiz & Product Showcase Kiosks",
      "Real-Time Audience Dwell-Time Metrics",
      "Scalable Multi-Location Deployment",
    ],
  },
];

const faqs = [
  {
    q: "How does motion interactive projection work?",
    a: "Our systems combine high-brightness projectors with optical depth sensors and AI vision cameras. When people move over the surface, the software calculates position and triggers instant graphics, audio, and physical interactions.",
  },
  {
    q: "Can solutions be customized for small or large commercial spaces?",
    a: "Yes. Our systems are modular—from single-projector floor units for retail pop-ups to multi-projector 360-degree rooms for theme venues and museums.",
  },
  {
    q: "Do you provide remote content updates and ongoing support?",
    a: "Absolutely. Content can be updated remotely via our cloud portal, and we provide end-to-end technical assistance, software upgrades, and hardware maintenance.",
  },
];

export default function SolutionsContent() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const filteredSolutions =
    activeFilter === "all"
      ? solutionsData
      : solutionsData.filter((s) => s.id === activeFilter);

  return (
    <div className="w-full bg-white text-black pt-16">
      
      {/* Visual Impact Hero */}
      <section className="relative w-full h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <SafeImage
            src="https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=1920&q=80"
            alt="Interactive Solutions Hero"
            className="w-full h-full object-cover object-center"
            containerClassName="w-full h-full"
            priority
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center text-white mt-16">
          <span className="inline-block py-1 px-3 rounded-full bg-white/10 border border-white/20 text-xs font-bold uppercase tracking-[0.2em] mb-6">
            Platform Capabilities
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black tracking-tight leading-[1.05] mb-6 drop-shadow-lg">
            Interactive Solutions for <br /> Extraordinary Spaces
          </h1>
          <p className="text-lg sm:text-xl text-white/80 font-light max-w-2xl mx-auto">
            Explore our suite of motion projection, 360° environments, AI interactions, and audience engagement technologies.
          </p>
        </div>
      </section>

      {/* Filter Tabs (More Visual) */}
      <section className="bg-gray-50 border-b border-gray-200 py-6 sticky top-0 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-nowrap overflow-x-auto gap-3 pb-2 scrollbar-hide snap-x">
            <button
              onClick={() => setActiveFilter("all")}
              className={`shrink-0 snap-start px-6 py-3 rounded-xl text-sm font-bold transition-all ${
                activeFilter === "all"
                  ? "bg-black text-white shadow-lg scale-105"
                  : "bg-white text-gray-500 hover:bg-gray-100 hover:text-black border border-gray-200"
              }`}
            >
              All Solutions
            </button>
            {solutionsData.map((s) => (
              <button
                key={s.id}
                onClick={() => setActiveFilter(s.id)}
                className={`shrink-0 snap-start flex items-center gap-3 px-6 py-3 rounded-xl text-sm font-bold transition-all ${
                  activeFilter === s.id
                    ? "bg-black text-white shadow-lg scale-105"
                    : "bg-white text-gray-500 hover:bg-gray-100 hover:text-black border border-gray-200"
                }`}
              >
                <span>{s.title}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Editorial Solutions Grid */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24 sm:space-y-32">
          {filteredSolutions.map((item, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <div
                key={item.id}
                id={item.id}
                className={`grid lg:grid-cols-12 gap-12 lg:gap-20 items-center ${
                  isEven ? "" : "lg:flex-row-reverse"
                }`}
              >
                {/* Visual Image Column (Larger & More Impactful) */}
                <div
                  className={`lg:col-span-7 ${
                    isEven ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <div className="relative overflow-hidden rounded-[2rem] shadow-2xl group">
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10 pointer-events-none" />
                    <SafeImage
                      src={item.img}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 aspect-[4/3] lg:aspect-[16/10]"
                      containerClassName="w-full h-full"
                    />
                    <div className="absolute top-6 left-6 z-20 bg-black/60 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 text-xs font-bold uppercase tracking-widest text-white shadow-lg">
                      {item.badge}
                    </div>
                    {/* Add a subtle play icon overlay for video implication */}
                    {item.id === "immersive-environment" && (
                       <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none">
                          <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm border border-white/40 flex items-center justify-center">
                            <Play className="w-6 h-6 text-white ml-1" />
                          </div>
                       </div>
                    )}
                  </div>
                </div>

                {/* Narrative Column */}
                <div
                  className={`lg:col-span-5 ${
                    isEven ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <span className="text-5xl font-black text-gray-200 block mb-4">
                    {item.num}
                  </span>
                  <h2 className="text-3xl lg:text-4xl font-black text-black mb-3">
                    {item.title}
                  </h2>
                  <p className="text-sm font-bold uppercase tracking-widest text-black/40 mb-6">
                    {item.subtitle}
                  </p>
                  
                  <p className="text-gray-600 text-lg leading-relaxed mb-4">
                    {item.desc}
                  </p>

                  <div className="bg-gray-50 border-l-4 border-black p-4 mb-8">
                    <p className="text-sm text-gray-700 font-medium">
                      <span className="font-bold uppercase tracking-wider text-xs mr-2">Use Case:</span>
                      {item.useCase}
                    </p>
                  </div>

                  {/* Feature Checklist */}
                  <ul className="space-y-3 mb-10">
                    {item.features.map((feat, fIdx) => (
                      <li
                        key={fIdx}
                        className="flex items-center gap-3 text-sm text-gray-800 font-medium"
                      >
                        <CheckCircle2 className="w-4 h-4 text-black shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link 
                      href={`/solutions/${item.id}`} 
                      className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-black text-white font-bold text-xs uppercase tracking-widest hover:bg-gray-800 transition-colors shadow-lg"
                    >
                      <span>Explore Solution</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                    <Link 
                      href="/contact" 
                      className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border-2 border-black text-black font-bold text-xs uppercase tracking-widest hover:bg-black hover:text-white transition-colors"
                    >
                      <span>Book a Demo / Start a Project</span>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 border-t border-gray-200 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-4 block">
              TECHNICAL FREQUENTLY ASKED QUESTIONS
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-black">
              System Specifications
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              const itemNumber = String(idx + 1).padStart(2, "0");

              return (
                <div
                  key={idx}
                  className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                    isOpen
                      ? "bg-white border-black shadow-lg"
                      : "bg-white border-gray-200 hover:border-gray-300"
                  }`}
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                    className="w-full p-6 sm:p-8 text-left flex items-start justify-between gap-4 cursor-pointer group"
                  >
                    <div className="flex items-start gap-4">
                      <span
                        className={`text-sm font-bold pt-1 transition-colors ${
                          isOpen ? "text-black" : "text-gray-400 group-hover:text-black"
                        }`}
                      >
                        {itemNumber}
                      </span>
                      <span className="text-lg sm:text-xl font-bold text-black leading-snug">
                        {faq.q}
                      </span>
                    </div>
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
                        isOpen
                          ? "bg-black text-white rotate-180"
                          : "bg-gray-100 text-gray-500 group-hover:bg-gray-200"
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-6 sm:px-8 pb-8 text-base text-gray-600 leading-relaxed border-t border-gray-100 pt-4 ml-8 sm:ml-9 space-y-4">
                      <p>{faq.a}</p>
                      <div className="pt-2 flex items-center gap-2 text-sm font-bold text-black">
                        <Link href="/contact" className="inline-flex items-center gap-1.5 hover:underline">
                          <span>Request spatial deployment plan</span>
                          <ArrowRight className="w-3 h-3" />
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
