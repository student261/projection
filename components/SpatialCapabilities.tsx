"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import SafeImage from "@/components/SafeImage";
import Link from "next/link";

const capabilities = [
  {
    num: "01",
    tag: "OPTICAL ARCHITECTURE",
    badge: "Sub-Millimeter Calibration",
    title: "360° Projection Mapping",
    desc: "Sub-millimeter geometric warping and multi-projector edge-blending engineered for irregular, curved, and complex architectural surfaces.",
    img: "/images/cathedral_projection_mapping.jpg",
    metric: "16K Native",
    metricLabel: "Pixel Canvas",
    href: "/solutions/interactive-spaces",
  },
  {
    num: "02",
    tag: "HARDWARE SENSORS",
    badge: "Ultra-Low Latency",
    title: "Real-time Motion Sensing",
    desc: "LiDAR and optical depth camera arrays triggering instantaneous, physics-accurate visual reactions beneath visitors' feet and gestures.",
    img: "/images/interactive_floor_motion.jpg",
    metric: "Real-Time",
    metricLabel: "Motion-to-Photon",
    href: "/solutions/interactive-floor",
  },
  {
    num: "03",
    tag: "AI ARCHITECTURE",
    badge: "60 FPS Real-time",
    title: "Generative AI Environments",
    desc: "Autonomous computer vision models and procedural shaders creating evolving visual environments that adapt organically to crowd flow.",
    img: "/images/corporate_lobby_wall.jpg",
    metric: "60 FPS",
    metricLabel: "Procedural Engine",
    href: "/solutions/ai-experience",
  },
  {
    num: "04",
    tag: "SYSTEM INFRASTRUCTURE",
    badge: "Commercial Continuous Reliability",
    title: "24/7 Enterprise Reliability",
    desc: "Military-grade thermal cooling, automated remote health telemetry, and dual-redundant failover servers for high-traffic venues.",
    img: "/images/technician_calibrating_projection.jpg",
    metric: "24/7 Solid-State",
    metricLabel: "Operational SLA",
    href: "/solutions/solution-engagement",
  },
];

export default function SpatialCapabilities() {
  return (
    <section id="spatial-capabilities" className="py-24 sm:py-32 bg-white text-black relative overflow-hidden">
      <div className="max-w-7xl 2xl:max-w-[1536px] 3xl:max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* ── Minimalist Editorial Header ── */}
        <div className="max-w-3xl space-y-4">
          <span className="text-[10px] sm:text-[11px] font-mono font-semibold tracking-[0.2em] text-black/60 uppercase block">
            ARCHITECTURE
          </span>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-black leading-[1.1]">
            Spatial Engineering <br />
            <span className="font-light text-black/50">Capabilities</span>
          </h2>
          
          <p className="text-sm sm:text-base text-gray-600 font-light leading-relaxed pt-1">
            Every installation unites proprietary optical projection, real-time computer vision matrices, and enterprise show control for permanent high-throughput venues.
          </p>
        </div>

        {/* ── 4 Elegant Minimalist Cards ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {capabilities.map((cap, idx) => (
            <motion.div
              key={cap.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="group flex flex-col bg-gray-50 rounded-2xl border border-black/5 hover:border-black/20 hover:shadow-xl hover:-translate-y-1 transition-all duration-500 overflow-hidden"
            >
              {/* Image Container with Soft Gradient Melt */}
              <div className="relative aspect-[16/11] overflow-hidden bg-white shrink-0">
                <SafeImage
                  src={cap.img}
                  alt={cap.title}
                  className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                  containerClassName="w-full h-full"
                />
                
                {/* Organic bottom fade into card background */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-50 via-gray-50/40 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-transparent" />

                {/* Top Left: Clean Monospace Index */}
                <div className="absolute top-5 left-5">
                  <span className="text-[10px] font-mono font-bold text-white/90 bg-black/30 backdrop-blur-md px-2 py-1 rounded-md">
                    {cap.num}
                  </span>
                </div>
              </div>

              {/* Text Content */}
              <div className="p-6 sm:p-8 flex flex-col flex-1 relative z-10 -mt-6">
                <div className="space-y-3 flex-1">
                  <span className="text-[9px] font-bold tracking-widest text-black/40 uppercase block">
                    {cap.tag}
                  </span>
                  
                  <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-black leading-snug">
                    {cap.title}
                  </h3>
                  
                  <p className="text-sm text-gray-600 font-light leading-relaxed">
                    {cap.desc}
                  </p>
                </div>

                {/* Bottom Metric & Link */}
                <div className="pt-8 mt-auto flex items-end justify-between border-t border-black/5">
                  <div>
                    <span className="block text-lg font-black text-black tracking-tight leading-none">
                      {cap.metric}
                    </span>
                    <span className="block text-[9px] font-bold text-black/40 uppercase tracking-widest pt-1">
                      {cap.metricLabel}
                    </span>
                  </div>

                  <Link
                    href={cap.href}
                    className="w-9 h-9 rounded-full border border-black/15 text-black/60 group-hover:text-white group-hover:bg-black group-hover:border-black transition-all duration-300 flex items-center justify-center shrink-0"
                    aria-label={`Explore ${cap.title}`}
                  >
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
