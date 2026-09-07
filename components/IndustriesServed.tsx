"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  GraduationCap,
  HeartPulse,
  ShoppingBag,
  Landmark,
  Gamepad2,
  Hotel,
  Building2,
  Globe2,
  ArrowRight
} from "lucide-react";
import SafeImage from "@/components/SafeImage";

const industries = [
  {
    id: "education",
    icon: <GraduationCap className="w-5 h-5" />,
    title: "Education",
    description: "Make learning more active with interactive classrooms, digital activities, and movement-based experiences.",
    href: "/industries/education",
    img: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "healthcare",
    icon: <HeartPulse className="w-5 h-5" />,
    title: "Healthcare",
    description: "Help patients stay engaged with interactive activities that support rehabilitation, movement, and better waiting-room experiences.",
    href: "/industries/healthcare",
    img: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "retail",
    icon: <ShoppingBag className="w-5 h-5" />,
    title: "Retail",
    description: "Make store visits more engaging with interactive displays, digital content, and experiences that bring customers closer to your brand.",
    href: "/industries/retail-showrooms",
    img: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "museums",
    icon: <Landmark className="w-5 h-5" />,
    title: "Museums & Exhibitions",
    description: "Turn exhibits into experiences where visitors can interact with stories, information, and digital content.",
    href: "/industries/museums-culture",
    img: "https://images.unsplash.com/photo-1518998053901-5348d3961a04?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "entertainment",
    icon: <Gamepad2 className="w-5 h-5" />,
    title: "Entertainment",
    description: "Build exciting attractions with interactive games, projection technology, and experiences people want to come back to.",
    href: "/industries/entertainment",
    img: "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "hospitality",
    icon: <Hotel className="w-5 h-5" />,
    title: "Hospitality",
    description: "Give guests something memorable with interactive displays and digital experiences across hotels, resorts, and other hospitality spaces.",
    href: "/industries/hospitality",
    img: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "corporate",
    icon: <Building2 className="w-5 h-5" />,
    title: "Corporate",
    description: "Make offices, meeting spaces, and experience centers more engaging with interactive technology.",
    href: "/industries/corporate",
    img: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "public-spaces",
    icon: <Globe2 className="w-5 h-5" />,
    title: "Public Spaces",
    description: "Bring interactive experiences to airports, malls, parks, community spaces, and other public venues.",
    href: "/industries/public-spaces",
    img: "https://images.unsplash.com/photo-1473445730015-841f29a949ce?auto=format&fit=crop&w=1200&q=80",
  },
];

export default function IndustriesServed() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeIndustry = industries[activeIndex];

  return (
    <section className="py-16 lg:py-24 bg-white border-t border-gray-100 overflow-hidden text-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16 space-y-4">
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-[11px] font-bold uppercase tracking-[0.3em] text-gray-500"
          >
            INDUSTRIES WE SERVE
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-[1.05]"
          >
            Built for Every Industry.<br />Designed for Every Experience.
          </motion.h2>
        </div>

        {/* 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start min-h-[500px]">
          
          {/* Column 1: Industry Selector List */}
          <div className="lg:col-span-5 space-y-2 flex flex-col">
            {industries.map((ind, idx) => {
              const isActive = activeIndex === idx;
              return (
                <button
                  key={ind.id}
                  onClick={() => setActiveIndex(idx)}
                  className={`w-full text-left flex items-center justify-between p-4 rounded-xl transition-all duration-300 group ${
                    isActive 
                      ? "bg-black text-white shadow-lg" 
                      : "bg-transparent text-gray-600 hover:bg-gray-50 hover:text-black"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`p-2 rounded-lg ${isActive ? "bg-white/20 text-white" : "bg-gray-100 text-gray-500 group-hover:bg-gray-200 group-hover:text-black"}`}>
                      {ind.icon}
                    </div>
                    <span className="font-bold text-base sm:text-lg">{ind.title}</span>
                  </div>
                  <ArrowRight className={`w-4 h-4 transition-transform duration-300 ${isActive ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0"}`} />
                </button>
              );
            })}
          </div>

          {/* Column 2: Active Image & Content Panel */}
          <div className="lg:col-span-7 relative w-full h-[400px] lg:h-full min-h-[500px] rounded-3xl overflow-hidden bg-gray-100 shadow-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndustry.id}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="absolute inset-0 w-full h-full"
              >
                <SafeImage
                  src={activeIndustry.img}
                  alt={activeIndustry.title}
                  className="w-full h-full object-cover object-center"
                  containerClassName="w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent pointer-events-none" />
                
                {/* Content Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-12 text-white">
                  <h3 className="text-3xl font-bold mb-4">{activeIndustry.title}</h3>
                  <p className="text-white/80 text-base sm:text-lg max-w-2xl leading-relaxed mb-8">
                    {activeIndustry.description}
                  </p>
                  <Link
                    href={activeIndustry.href}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black font-bold text-[11px] uppercase tracking-widest transition-transform duration-300 hover:scale-105"
                  >
                    Explore {activeIndustry.title}
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}
