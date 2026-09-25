"use client";

import { useState, useEffect, useRef } from "react";
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
    img: "/images/interactive_floor_motion.jpg",
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
    img: "/images/cathedral_projection_mapping.jpg",
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
    img: "/images/ai_receptionist_concierge.jpg",
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
    img: "/images/entertainment_motion_arena.jpg",
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
  const [activeSection, setActiveSection] = useState(solutionsData[0].id);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [isNavVisible, setIsNavVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY <= 20) {
        setIsNavVisible(true);
      } else if (currentScrollY > lastScrollY.current + 5) {
        setIsNavVisible(false); // scrolling down
      } else if (currentScrollY < lastScrollY.current - 5) {
        setIsNavVisible(true); // scrolling up
      }
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    // ScrollSpy Observer
    const observer = new IntersectionObserver(
      (entries) => {
        // Find the entry that is most visible
        const visibleEntries = entries.filter(entry => entry.isIntersecting);
        if (visibleEntries.length > 0) {
          // Sort by intersection ratio to find the most prominent one
          visibleEntries.sort((a, b) => b.intersectionRatio - a.intersectionRatio);
          setActiveSection(visibleEntries[0].target.id);
        }
      },
      { rootMargin: "-20% 0px -60% 0px", threshold: [0, 0.2, 0.5] }
    );

    solutionsData.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 120; // sticky header offset
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: "smooth"
      });
      setActiveSection(id);
    }
  };

  return (
    <div className="w-full bg-white text-black">
      
      {/* Visual Impact Hero */}
      <section className="relative w-full min-h-[520px] lg:h-[65vh] flex flex-col items-center justify-center overflow-hidden bg-black text-center pt-24 sm:pt-28 pb-10">
        <div className="absolute inset-0 z-0">
          <SafeImage
            src="/images/solutions_hero_hall.jpg"
            alt="Interactive Solutions Hero"
            className="w-full h-full object-cover object-center opacity-75 brightness-105"
            containerClassName="w-full h-full bg-black"
            priority
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center text-white my-auto">
          <div className="text-[10px] sm:text-[11px] font-mono font-semibold uppercase tracking-[0.2em] text-white/90 mb-4 sm:mb-6">
            PLATFORM CAPABILITIES
          </div>
          <h1 className="font-black tracking-tight leading-[1.08] mb-4 sm:mb-6 drop-shadow-lg text-[clamp(2rem,5.5vw,4.5rem)]">
            Interactive Solutions for <br /> Extraordinary Spaces
          </h1>
          <p className="text-sm sm:text-lg lg:text-xl text-white/80 font-light max-w-2xl mx-auto leading-relaxed">
            Explore our suite of motion projection, 360° environments, AI interactions, and audience engagement technologies.
          </p>
        </div>
      </section>

      {/* Filter Tabs (More Visual) */}
      <section className={`bg-white/80 backdrop-blur-xl border-b border-gray-200 py-4 sticky z-40 shadow-sm transition-all duration-500 ease-in-out ${isNavVisible ? "top-[76px]" : "top-0"}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-nowrap overflow-x-auto gap-3 pb-2 scrollbar-hide snap-x items-center">
            {solutionsData.map((s) => (
              <button
                key={s.id}
                onClick={() => scrollToSection(s.id)}
                className={`shrink-0 snap-start px-6 py-2.5 rounded-md text-xs font-bold uppercase tracking-wider transition-all ${
                  activeSection === s.id
                    ? "bg-black text-white shadow-lg"
                    : "bg-gray-100 text-gray-500 hover:bg-gray-200 hover:text-black border border-transparent"
                }`}
              >
                {s.title}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Editorial Solutions Grid */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-10">
          {solutionsData.map((item, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <div
                key={item.id}
                id={item.id}
                className="bg-white rounded-3xl border border-gray-200/90 shadow-sm overflow-hidden p-5 sm:p-7 lg:p-8 transition-all hover:shadow-xl"
              >
                <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 items-center">
                  
                  {/* Visual Image Column */}
                  <div className={`relative ${isEven ? "lg:order-1" : "lg:order-2"}`}>
                    <div className="relative overflow-hidden rounded-2xl shadow-md group w-full aspect-[16/11] sm:aspect-[16/10] bg-gray-100">
                      <SafeImage
                        src={item.img}
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        containerClassName="w-full h-full"
                      />
                      {/* Subtle play icon overlay for video implication */}
                      {item.id === "immersive-environment" && (
                         <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none">
                            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/25 backdrop-blur-md border border-white/50 flex items-center justify-center shadow-lg">
                              <Play className="w-4 h-4 sm:w-5 sm:h-5 text-white ml-0.5 fill-white/80" />
                            </div>
                         </div>
                      )}
                    </div>
                  </div>

                  {/* Narrative Column */}
                  <div className={`flex flex-col justify-center ${isEven ? "lg:order-2" : "lg:order-1"}`}>
                    <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-black/50 font-semibold block mb-1.5">
                      {item.badge}
                    </span>
                    <h2 className="font-black text-black tracking-tight leading-tight text-2xl sm:text-3xl lg:text-[2rem] mb-1.5">
                      {item.title}
                    </h2>
                    
                    <p className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.18em] text-black/60 mb-3">
                      {item.subtitle}
                    </p>
                    
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      {item.desc}
                    </p>

                    {/* Feature Checklist */}
                    <ul className="space-y-2 mb-6">
                      {item.features.map((feat, fIdx) => (
                        <li
                          key={fIdx}
                          className="flex items-center gap-2.5 text-xs sm:text-sm text-gray-700 font-medium"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-black shrink-0" />
                          <span className="leading-snug">{feat}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                      <Link 
                        href={`/solutions/${item.id}`} 
                        className="inline-flex items-center justify-center gap-2 px-6 py-2.5 sm:py-3 rounded-full bg-black text-white font-bold text-[10px] sm:text-xs uppercase tracking-widest hover:bg-gray-800 transition-colors shadow-md"
                      >
                        <span>Explore Solution</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                      <Link 
                        href="/contact" 
                        className="inline-flex items-center justify-center gap-2 px-6 py-2.5 sm:py-3 rounded-full border-2 border-black text-black font-bold text-[10px] sm:text-xs uppercase tracking-widest hover:bg-black hover:text-white transition-colors"
                      >
                        <span>Book a Demo</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="pt-8 pb-20 sm:pt-12 sm:pb-24 bg-gray-50">
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
