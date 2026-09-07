"use client";

import { useState } from "react";
import { Sparkles, Calculator, CheckCircle2, ArrowRight, Layers, Cpu, Eye } from "lucide-react";
import Link from "next/link";

export default function SpaceCalculator() {
  const [surfaceType, setSurfaceType] = useState<"floor" | "wall" | "360room">("floor");
  const [areaSize, setAreaSize] = useState<number>(30); // in sq meters
  const [venue, setVenue] = useState<"education" | "museum" | "retail" | "healthcare">("education");

  // Calculations
  const projectors = Math.max(1, Math.ceil(areaSize / 15));
  const trackingSensors = Math.max(2, Math.ceil(areaSize / 12));
  const estimatedDwellBoost = venue === "retail" ? "4.5x" : venue === "museum" ? "3.2x" : "2.8x";
  const contentGamesCount = Math.max(10, Math.floor(areaSize * 0.8));

  return (
    <div className="w-full glass-panel rounded-3xl p-6 sm:p-10 border-white/10 bg-black/70 relative overflow-hidden shadow-2xl">
      <div className="absolute top-0 right-0 w-96 h-96 bg-black/10 blur-[120px] pointer-events-none rounded-full" />

      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-10">
        <h3 className="text-white">
          Configure Your <span className="text-white">Interactive Environment</span>
        </h3>
        <p className="mt-2 text-xs sm:text-sm text-gray-300 font-light">
          Adjust your venue parameters below to instantly calculate recommended optical projection hardware and motion tracking specs.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Inputs Controls */}
        <div className="lg:col-span-6 space-y-6">
          {/* Surface Selection */}
          <div>
            <label className="text-xs font-extrabold uppercase tracking-wider text-neutral-300 block mb-3">
              1. Select Surface Type
            </label>
            <div className="grid grid-cols-3 gap-3">
              {[
                { id: "floor", label: "Interactive Floor" },
                { id: "wall", label: "Interactive Wall" },
                { id: "360room", label: "360° Immersion" },
              ].map((s) => (
                <button
                  key={s.id}
                  onClick={() => setSurfaceType(s.id as any)}
                  className={`py-3 px-3 rounded-2xl text-xs font-bold transition-all border ${
                    surfaceType === s.id
                      ? "bg-black text-white border-neutral-600 shadow-lg scale-102"
                      : "glass-panel text-gray-300 border-white/10 hover:border-white/20"
                  }`}
                >
                  {s.label}
                </button>
              ))}
            </div>
          </div>

          {/* Area Slider */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="text-xs font-extrabold uppercase tracking-wider text-neutral-300">
                2. Surface Coverage Area
              </label>
              <span className="text-sm font-black text-white bg-neutral-950/60 px-3 py-1 rounded-xl border border-white/10">
                {areaSize} m² (~{(areaSize * 10.764).toFixed(0)} sq ft)
              </span>
            </div>
            <input
              type="range"
              min="10"
              max="150"
              step="5"
              value={areaSize}
              onChange={(e) => setAreaSize(Number(e.target.value))}
              className="w-full h-2 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-black"
            />
            <div className="flex justify-between text-[10px] text-gray-500 mt-1">
              <span>10 m² (Small Kiosk)</span>
              <span>75 m² (Classroom/Exhibit)</span>
              <span>150 m² (Arena/Mall)</span>
            </div>
          </div>

          {/* Venue Selector */}
          <div>
            <label className="text-xs font-extrabold uppercase tracking-wider text-neutral-300 block mb-3">
              3. Target Industry Sector
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {[
                { id: "education", name: "Education" },
                { id: "museum", name: "Museums" },
                { id: "retail", name: "Retail" },
                { id: "healthcare", name: "Healthcare" },
              ].map((v) => (
                <button
                  key={v.id}
                  onClick={() => setVenue(v.id as any)}
                  className={`py-2.5 px-2 rounded-xl text-xs font-semibold transition-all border ${
                    venue === v.id
                      ? "bg-neutral-800/20 text-neutral-300 border-neutral-600 shadow-md"
                      : "glass-panel text-gray-400 border-white/10 hover:text-white"
                  }`}
                >
                  {v.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Right Output Card */}
        <div className="lg:col-span-6 glass-panel rounded-3xl p-6 sm:p-8 border-white/10 bg-neutral-950/20 relative flex flex-col justify-between h-full">
          <div className="space-y-5">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <span className="text-xs font-extrabold uppercase tracking-widest text-neutral-300">
                RECOMMENDED SYSTEM SPECIFICATION
              </span>
              <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 text-[10px] font-bold uppercase">
                Turnkey Ready
              </span>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="glass-panel p-4 rounded-2xl border-white/10 bg-black/40">
                <div className="flex items-center gap-2 text-neutral-400 text-xs font-bold mb-1">
                  <Layers className="w-4 h-4" />
                  <span>Optics Projectors</span>
                </div>
                <div className="text-2xl font-black text-white">{projectors} Units</div>
                <div className="text-[11px] text-gray-400 mt-1">Laser 4K Short-Throw</div>
              </div>

              <div className="glass-panel p-4 rounded-2xl border-white/10 bg-black/40">
                <div className="flex items-center gap-2 text-neutral-400 text-xs font-bold mb-1">
                  <Eye className="w-4 h-4" />
                  <span>Optical Motion Tracking</span>
                </div>
                <div className="text-2xl font-black text-white">{trackingSensors} Sensors</div>
                <div className="text-[11px] text-gray-400 mt-1">Multi-Touch Tracking</div>
              </div>

              <div className="glass-panel p-4 rounded-2xl border-white/10 bg-black/40">
                <div className="flex items-center gap-2 text-neutral-400 text-xs font-bold mb-1">
                  <Cpu className="w-4 h-4" />
                  <span>Interactive Content</span>
                </div>
                <div className="text-2xl font-black text-white">{contentGamesCount}+ Modules</div>
                <div className="text-[11px] text-gray-400 mt-1">Curriculum & Games</div>
              </div>

              <div className="glass-panel p-4 rounded-2xl border-white/10 bg-black/40">
                <div className="flex items-center gap-2 text-neutral-400 text-xs font-bold mb-1">
                  <Sparkles className="w-4 h-4" />
                  <span>Dwell Time Boost</span>
                </div>
                <div className="text-2xl font-black text-emerald-400">{estimatedDwellBoost}</div>
                <div className="text-[11px] text-gray-400 mt-1">Visitor Engagement</div>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-gray-300 font-light">
              Want custom CAD floor plans & engineering quotation?
            </div>
            <Link
              href="/contact"
              className="w-full sm:w-auto px-6 py-3 rounded-full font-bold text-xs uppercase tracking-wider text-white bg-black shadow-2xl shadow-white/10 flex items-center justify-center gap-2 transition-transform hover:scale-105 shrink-0"
            >
              <span>Get Full Quote</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
