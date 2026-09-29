"use client";

import { useState } from "react";
import {
  Activity,
  Users,
  Tv,
  Sparkles,
  Layers,
  RefreshCw,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const capabilities = [
  {
    num: "01",
    title: "Active Participation",
    desc: "Students engage with content through movement, not just observation.",
    icon: Activity,
    diagramType: "motion" as const,
  },
  {
    num: "02",
    title: "Group Learning",
    desc: "Shared activities that multiple students can take part in together.",
    icon: Users,
    diagramType: "network" as const,
  },
  {
    num: "03",
    title: "Visual Learning",
    desc: "Subjects presented through projection and interactive display instead of static material.",
    icon: Tv,
    diagramType: "projection" as const,
  },
  {
    num: "04",
    title: "Flexible Content",
    desc: "Activities adapted across subjects, age groups and lesson plans.",
    icon: Sparkles,
    diagramType: "layers" as const,
  },
  {
    num: "05",
    title: "Multi-Space Use",
    desc: "Works in classrooms, libraries, STEM labs and auditoriums.",
    icon: Layers,
    diagramType: "facility" as const,
  },
  {
    num: "06",
    title: "Reusable Setup",
    desc: "One installation supports different lessons and content over time.",
    icon: RefreshCw,
    diagramType: "lifecycle" as const,
  },
];

type DiagramType = "motion" | "network" | "projection" | "layers" | "facility" | "lifecycle";

function SchematicDiagram({ type }: { type: DiagramType }) {
  const baseGrid = (
    <>
      <line x1="0" y1="0" x2="400" y2="0" stroke="#E5E7EB" strokeWidth="0.5" />
      <line x1="0" y1="60" x2="400" y2="60" stroke="#E5E7EB" strokeWidth="0.5" strokeDasharray="2 4" />
      <line x1="0" y1="120" x2="400" y2="120" stroke="#E5E7EB" strokeWidth="0.5" strokeDasharray="2 4" />
      <line x1="0" y1="180" x2="400" y2="180" stroke="#E5E7EB" strokeWidth="0.5" strokeDasharray="2 4" />
      <line x1="0" y1="240" x2="400" y2="240" stroke="#E5E7EB" strokeWidth="0.5" />
    </>
  );

  // 01: Active Participation - Architectural Floor Tracking Blueprint
  if (type === "motion") {
    return (
      <svg viewBox="0 0 400 240" className="w-full h-full" fill="none">
        {baseGrid}
        {/* Overhead Sensor Unit (Clean, centered, no dangling lines) */}
        <rect x="180" y="14" width="40" height="14" stroke="#171717" strokeWidth="1.5" fill="white" rx="2" />
        <circle cx="200" cy="21" r="3" fill="#171717" />

        {/* Projection Cone originating cleanly from bottom of sensor */}
        <path d="M194 28 L90 195" stroke="#171717" strokeWidth="0.8" strokeOpacity="0.3" />
        <path d="M206 28 L310 195" stroke="#171717" strokeWidth="0.8" strokeOpacity="0.3" />

        {/* Floor Interactive Zone */}
        <ellipse cx="200" cy="195" rx="110" ry="24" stroke="#171717" strokeWidth="1.5" fill="none" />
        
        {/* Concentric Step Ripples (Clean, harmonious, no messy overlapping blobs) */}
        <ellipse cx="200" cy="195" rx="75" ry="16" stroke="#171717" strokeWidth="1" strokeDasharray="4 3" fill="none" />
        <ellipse cx="200" cy="195" rx="45" ry="10" stroke="#171717" strokeWidth="0.8" strokeDasharray="3 2" fill="none" />
        <ellipse cx="200" cy="195" rx="20" ry="5" stroke="#171717" strokeWidth="1" fill="none" />
        <circle cx="200" cy="195" r="3.5" fill="#171717" />

        {/* Kinetic Motion Path vector entering the active zone */}
        <path d="M130 190 Q165 182 198 194" stroke="#171717" strokeWidth="1" strokeDasharray="3 3" />
        <polygon points="194,192 201,195 196,197" fill="#171717" />

        {/* Clear Architectural Labels with Leader Lines */}
        {/* Label 1: Overhead Sensor */}
        <line x1="220" y1="21" x2="275" y2="21" stroke="#737373" strokeWidth="0.8" />
        <circle cx="220" cy="21" r="1.5" fill="#171717" />
        <text x="282" y="24" fill="#737373" fontSize="8.5" fontFamily="monospace" letterSpacing="0.08em">TRACKING SENSOR</text>

        {/* Label 2: Optical Field (Text sits cleanly ABOVE shelf line, no strikethrough) */}
        <text x="22" y="93" fill="#737373" fontSize="8.5" fontFamily="monospace" letterSpacing="0.08em">OPTICAL FIELD</text>
        <line x1="22" y1="98" x2="135" y2="98" stroke="#737373" strokeWidth="0.8" />
        <circle cx="135" cy="98" r="1.5" fill="#171717" />

        {/* Label 3: Floor Interaction */}
        <line x1="200" y1="195" x2="280" y2="155" stroke="#737373" strokeWidth="0.8" />
        <circle cx="200" cy="195" r="1.5" fill="#171717" />
        <line x1="280" y1="155" x2="355" y2="155" stroke="#737373" strokeWidth="0.8" />
        <text x="280" y="149" fill="#737373" fontSize="8.5" fontFamily="monospace" letterSpacing="0.08em">INTERACTION STEP</text>
      </svg>
    );
  }

  // 02: Group Learning - Multi-User Collaborative Blueprint
  if (type === "network") {
    return (
      <svg viewBox="0 0 400 240" className="w-full h-full" fill="none">
        {baseGrid}
        {/* Shared Collaborative Floor / Table Surface */}
        <ellipse cx="200" cy="135" rx="110" ry="38" stroke="#171717" strokeWidth="1.5" fill="none" />
        <ellipse cx="200" cy="135" rx="60" ry="20" stroke="#171717" strokeWidth="1" strokeDasharray="3 3" fill="none" />

        {/* User Station 01 (Left) */}
        <circle cx="120" cy="135" r="14" stroke="#171717" strokeWidth="1.2" fill="white" />
        <circle cx="120" cy="135" r="4" fill="#171717" />
        <ellipse cx="120" cy="135" rx="28" ry="10" stroke="#171717" strokeWidth="0.8" strokeDasharray="2 2" fill="none" />

        {/* User Station 02 (Center-Top) */}
        <circle cx="200" cy="108" r="14" stroke="#171717" strokeWidth="1.2" fill="white" />
        <circle cx="200" cy="108" r="4" fill="#171717" />
        <ellipse cx="200" cy="108" rx="28" ry="10" stroke="#171717" strokeWidth="0.8" strokeDasharray="2 2" fill="none" />

        {/* User Station 03 (Right) */}
        <circle cx="280" cy="135" r="14" stroke="#171717" strokeWidth="1.2" fill="white" />
        <circle cx="280" cy="135" r="4" fill="#171717" />
        <ellipse cx="280" cy="135" rx="28" ry="10" stroke="#171717" strokeWidth="0.8" strokeDasharray="2 2" fill="none" />

        {/* Multi-User Synchronized Collaboration Network Lines */}
        <line x1="134" y1="135" x2="186" y2="114" stroke="#171717" strokeWidth="1" strokeDasharray="2 2" />
        <line x1="266" y1="135" x2="214" y2="114" stroke="#171717" strokeWidth="1" strokeDasharray="2 2" />
        <path d="M134 140 Q200 160 266 140" stroke="#171717" strokeWidth="1" strokeDasharray="2 2" />
        <circle cx="200" cy="148" r="3" fill="#171717" />

        {/* Blueprint Callouts with Leader Lines */}
        {/* Label 1: Multi-User Touchpoints */}
        <line x1="280" y1="135" x2="315" y2="85" stroke="#737373" strokeWidth="0.8" />
        <circle cx="280" cy="135" r="1.5" fill="#171717" />
        <line x1="315" y1="85" x2="365" y2="85" stroke="#737373" strokeWidth="0.8" />
        <text x="260" y="78" fill="#737373" fontSize="8.5" fontFamily="monospace" letterSpacing="0.08em">MULTI-TOUCH POINTS</text>

        {/* Label 2: Shared Workspace */}
        <line x1="90" y1="135" x2="40" y2="135" stroke="#737373" strokeWidth="0.8" />
        <circle cx="90" cy="135" r="1.5" fill="#171717" />
        <text x="14" y="128" fill="#737373" fontSize="8.5" fontFamily="monospace" letterSpacing="0.08em">SHARED SURFACE</text>

        {/* Label 3: Collaborative Link */}
        <line x1="200" y1="150" x2="200" y2="205" stroke="#737373" strokeWidth="0.8" />
        <circle cx="200" cy="150" r="1.5" fill="#171717" />
        <text x="148" y="218" fill="#737373" fontSize="8.5" fontFamily="monospace" letterSpacing="0.08em">SYNCED INTERACTION</text>
      </svg>
    );
  }

  // 03: Visual Learning - Large-Scale Wall Display Blueprint
  if (type === "projection") {
    return (
      <svg viewBox="0 0 400 240" className="w-full h-full" fill="none">
        {baseGrid}
        {/* Ceiling projector casting wide beam */}
        <rect x="50" y="25" width="34" height="14" stroke="#171717" strokeWidth="1.5" fill="white" rx="1" />
        <circle cx="67" cy="39" r="3" fill="#171717" />
        
        {/* Projection Cone hitting the large wall screen */}
        <path d="M67 39 L180 30" stroke="#171717" strokeWidth="0.8" strokeOpacity="0.3" strokeDasharray="3 3" />
        <path d="M67 39 L180 200" stroke="#171717" strokeWidth="0.8" strokeOpacity="0.3" strokeDasharray="3 3" />

        {/* Large Architectural Wall Projection Surface */}
        <rect x="180" y="30" width="180" height="170" stroke="#171717" strokeWidth="1.5" fill="white" />
        <rect x="186" y="36" width="168" height="158" stroke="#E5E7EB" strokeWidth="0.8" strokeDasharray="2 2" fill="none" />
        
        {/* Visual Content: 3D Solar / Science Orbit System */}
        <circle cx="270" cy="115" r="16" fill="#171717" />
        <ellipse cx="270" cy="115" rx="65" ry="26" stroke="#171717" strokeWidth="1.2" strokeDasharray="4 2" fill="none" />
        <circle cx="315" cy="100" r="5" fill="#171717" fillOpacity="0.7" />
        <ellipse cx="270" cy="115" rx="40" ry="55" stroke="#171717" strokeWidth="0.8" strokeOpacity="0.4" fill="none" />
        <circle cx="245" cy="150" r="4" fill="#171717" fillOpacity="0.4" />

        {/* Blueprint Callouts with Leader Lines */}
        {/* Label 1: Optics Emitter */}
        <line x1="67" y1="25" x2="67" y2="12" stroke="#737373" strokeWidth="0.8" />
        <text x="24" y="9" fill="#737373" fontSize="8.5" fontFamily="monospace" letterSpacing="0.08em">OPTICAL PROJECTOR</text>

        {/* Label 2: Display Canvas */}
        <line x1="330" y1="30" x2="330" y2="14" stroke="#737373" strokeWidth="0.8" />
        <text x="282" y="9" fill="#737373" fontSize="8.5" fontFamily="monospace" letterSpacing="0.08em">DISPLAY WALL</text>

        {/* Label 3: Dynamic Visuals */}
        <line x1="270" y1="200" x2="270" y2="216" stroke="#737373" strokeWidth="0.8" />
        <circle cx="270" cy="200" r="1.5" fill="#171717" />
        <text x="225" y="226" fill="#737373" fontSize="8.5" fontFamily="monospace" letterSpacing="0.08em">DYNAMIC 3D VISUALS</text>
      </svg>
    );
  }

  // 04: Flexible Content - Modular educational subjects switching seamlessly
  if (type === "layers") {
    return (
      <svg viewBox="0 0 400 240" className="w-full h-full" fill="none">
        {baseGrid}
        {/* Central Display Screen */}
        <rect x="130" y="50" width="140" height="140" stroke="#171717" strokeWidth="1.5" fill="white" />
        <rect x="140" y="60" width="120" height="120" stroke="#E5E7EB" strokeWidth="1" strokeDasharray="2 2" fill="none" />

        {/* Science Atom Icon on screen */}
        <ellipse cx="200" cy="120" rx="32" ry="12" stroke="#171717" strokeWidth="1.2" transform="rotate(30 200 120)" fill="none" />
        <ellipse cx="200" cy="120" rx="32" ry="12" stroke="#171717" strokeWidth="1.2" transform="rotate(-30 200 120)" fill="none" />
        <circle cx="200" cy="120" r="5" fill="#171717" />

        {/* Surrounding Subject Modules with Switch Arrows */}
        {/* Math (Top Left) */}
        <circle cx="70" cy="75" r="22" stroke="#171717" strokeWidth="1.2" fill="white" />
        <text x="63" y="81" fill="#171717" fontSize="16" fontFamily="serif" fontWeight="bold">∑</text>
        <path d="M92 75 Q110 70 125 75" stroke="#171717" strokeWidth="1" strokeDasharray="2 2" />

        {/* Globe / Geography (Top Right) */}
        <circle cx="330" cy="75" r="22" stroke="#171717" strokeWidth="1.2" fill="white" />
        <circle cx="330" cy="75" r="14" stroke="#171717" strokeWidth="1" />
        <ellipse cx="330" cy="75" rx="6" ry="14" stroke="#171717" strokeWidth="0.8" fill="none" />
        <line x1="316" y1="75" x2="344" y2="75" stroke="#171717" strokeWidth="0.8" />
        <path d="M308 75 Q290 70 275 75" stroke="#171717" strokeWidth="1" strokeDasharray="2 2" />

        {/* Arts Palette (Bottom Left) */}
        <circle cx="70" cy="165" r="22" stroke="#171717" strokeWidth="1.2" fill="white" />
        <circle cx="65" cy="160" r="2.5" fill="#171717" />
        <circle cx="75" cy="160" r="2.5" fill="#171717" />
        <circle cx="70" cy="170" r="2.5" fill="#171717" />
        <path d="M92 165 Q110 170 125 165" stroke="#171717" strokeWidth="1" strokeDasharray="2 2" />

        {/* Pulse / Logic (Bottom Right) */}
        <circle cx="330" cy="165" r="22" stroke="#171717" strokeWidth="1.2" fill="white" />
        <polyline points="318,165 324,165 328,155 332,175 336,165 342,165" stroke="#171717" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M308 165 Q290 170 275 165" stroke="#171717" strokeWidth="1" strokeDasharray="2 2" />
      </svg>
    );
  }

  // 05: Multi-Space Use - 3 campus spaces (Classroom, STEM Lab, Auditorium)
  if (type === "facility") {
    return (
      <svg viewBox="0 0 400 240" className="w-full h-full" fill="none">
        {baseGrid}
        {/* Space 1: Classroom */}
        <g transform="translate(40, 50)">
          <rect x="0" y="0" width="95" height="130" stroke="#171717" strokeWidth="1.2" fill="white" />
          <rect x="37" y="0" width="20" height="6" fill="#171717" />
          <path d="M47 6 L15 110 M47 6 L80 110" stroke="#171717" strokeWidth="0.8" strokeOpacity="0.3" strokeDasharray="2 2" />
          <line x1="25" y1="100" x2="70" y2="100" stroke="#171717" strokeWidth="1.5" />
          <line x1="30" y1="100" x2="30" y2="118" stroke="#171717" strokeWidth="1" />
          <line x1="65" y1="100" x2="65" y2="118" stroke="#171717" strokeWidth="1" />
          <text x="22" y="145" fill="#737373" fontSize="9" fontFamily="monospace" letterSpacing="0.1em">CLASSROOM</text>
        </g>

        {/* Space 2: STEM Lab */}
        <g transform="translate(152, 50)">
          <rect x="0" y="0" width="95" height="130" stroke="#171717" strokeWidth="1.2" fill="white" />
          <rect x="37" y="0" width="20" height="6" fill="#171717" />
          <path d="M47 6 L15 110 M47 6 L80 110" stroke="#171717" strokeWidth="0.8" strokeOpacity="0.3" strokeDasharray="2 2" />
          <rect x="15" y="60" width="65" height="40" stroke="#171717" strokeWidth="1" fill="none" />
          <line x1="15" y1="80" x2="80" y2="80" stroke="#171717" strokeWidth="1" />
          <line x1="30" y1="60" x2="30" y2="80" stroke="#171717" strokeWidth="0.8" />
          <line x1="50" y1="60" x2="50" y2="80" stroke="#171717" strokeWidth="0.8" />
          <text x="24" y="145" fill="#737373" fontSize="9" fontFamily="monospace" letterSpacing="0.1em">STEM LAB</text>
        </g>

        {/* Space 3: Auditorium */}
        <g transform="translate(264, 50)">
          <rect x="0" y="0" width="95" height="130" stroke="#171717" strokeWidth="1.2" fill="white" />
          <rect x="37" y="0" width="20" height="6" fill="#171717" />
          <path d="M47 6 L10 115 M47 6 L85 115" stroke="#171717" strokeWidth="0.8" strokeOpacity="0.3" strokeDasharray="2 2" />
          <path d="M15 95 Q47 90 80 95" stroke="#171717" strokeWidth="1.2" />
          <path d="M10 110 Q47 105 85 110" stroke="#171717" strokeWidth="1.2" />
          <text x="16" y="145" fill="#737373" fontSize="9" fontFamily="monospace" letterSpacing="0.1em">AUDITORIUM</text>
        </g>
      </svg>
    );
  }

  // 06: Reusable Setup - Timeline showing hardware permanence across years
  return (
    <svg viewBox="0 0 400 240" className="w-full h-full" fill="none">
      {baseGrid}
      {/* Central Permanent Hardware Unit */}
      <rect x="165" y="40" width="70" height="32" stroke="#171717" strokeWidth="1.5" fill="white" rx="2" />
      <circle cx="185" cy="56" r="4" fill="#171717" />
      <line x1="200" y1="50" x2="220" y2="50" stroke="#171717" strokeWidth="1" />
      <line x1="200" y1="56" x2="220" y2="56" stroke="#171717" strokeWidth="1" />
      <line x1="200" y1="62" x2="215" y2="62" stroke="#171717" strokeWidth="1" />
      <text x="160" y="30" fill="#737373" fontSize="9" fontFamily="monospace" letterSpacing="0.1em">PERMANENT SYSTEM</text>

      {/* Connection line down */}
      <line x1="200" y1="72" x2="200" y2="120" stroke="#171717" strokeWidth="1.5" strokeDasharray="3 3" />
      <polygon points="196,120 204,120 200,126" fill="#171717" />

      {/* Multi-Year Timeline Progression */}
      <line x1="60" y1="170" x2="340" y2="170" stroke="#171717" strokeWidth="1.5" />
      
      {/* Year 1 Node */}
      <circle cx="100" cy="170" r="14" fill="white" stroke="#171717" strokeWidth="1.5" />
      <circle cx="100" cy="170" r="4" fill="#171717" />
      <text x="82" y="198" fill="#171717" fontSize="10" fontFamily="monospace" fontWeight="bold">YEAR 01</text>
      <text x="73" y="212" fill="#737373" fontSize="8" fontFamily="monospace">CURRICULUM</text>

      {/* Year 2 Node */}
      <circle cx="200" cy="170" r="14" fill="white" stroke="#171717" strokeWidth="1.5" />
      <circle cx="200" cy="170" r="4" fill="#171717" />
      <text x="182" y="198" fill="#171717" fontSize="10" fontFamily="monospace" fontWeight="bold">YEAR 02</text>
      <text x="175" y="212" fill="#737373" fontSize="8" fontFamily="monospace">EXPANSIONS</text>

      {/* Year 3+ Node */}
      <circle cx="300" cy="170" r="14" fill="white" stroke="#171717" strokeWidth="1.5" />
      <circle cx="300" cy="170" r="4" fill="#171717" />
      <text x="282" y="198" fill="#171717" fontSize="10" fontFamily="monospace" fontWeight="bold">YEAR 03+</text>
      <text x="268" y="212" fill="#737373" fontSize="8" fontFamily="monospace">FUTURE LESSONS</text>

      {/* Continuous renewal cycle arrow */}
      <path d="M315 156 Q335 105 245 56" stroke="#171717" strokeWidth="1" strokeDasharray="3 3" />
      <polygon points="245,56 255,56 250,65" fill="#171717" fillOpacity="0.6" />
    </svg>
  );
}

export default function CapabilitiesStudio() {
  const [activeIndex, setActiveIndex] = useState(0);
  const current = capabilities[activeIndex];
  const IconComp = current.icon;

  return (
    <div className="w-full">
      {/* 6-Tab Selector */}
      <div className="border-b border-neutral-200 overflow-x-auto scrollbar-none mb-10 sm:mb-14">
        <div className="flex items-center min-w-max lg:min-w-full justify-start lg:justify-center">
          {capabilities.map((item, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`py-3 sm:py-4 px-4 sm:px-5 text-left border-b-2 transition-all duration-200 flex items-center gap-2 ${
                idx === activeIndex
                  ? "border-neutral-900 text-neutral-900"
                  : "border-transparent text-neutral-400 hover:text-neutral-700 hover:border-neutral-300"
              }`}
            >
              <span className={`font-mono text-xs ${idx === activeIndex ? "font-bold" : ""}`}>
                {item.num}
              </span>
              <span className={`text-xs sm:text-sm tracking-tight whitespace-nowrap ${idx === activeIndex ? "font-bold" : "font-medium"}`}>
                {item.title}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Split Layout: Schematic + Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-start">

        {/* Left: SVG Schematic */}
        <div>
          {/* SVG Canvas */}
          <div className="w-full">
            <SchematicDiagram type={current.diagramType} />
          </div>
        </div>

        {/* Right: Content */}
        <div className="flex flex-col justify-between lg:pt-4">
          <div className="space-y-6 min-h-[220px] sm:min-h-[240px] lg:min-h-[250px]">
            {/* Icon */}
            <div className="flex items-center">
              <IconComp className="w-6 h-6 text-neutral-800" strokeWidth={1.5} />
            </div>

            {/* Title */}
            <h3 className="text-2xl sm:text-3xl lg:text-[2.5rem] font-extrabold tracking-tight text-neutral-900 leading-tight">
              {current.title}
            </h3>

            {/* Description */}
            <p className="text-sm sm:text-base lg:text-lg text-neutral-600 font-light leading-relaxed max-w-lg">
              {current.desc}
            </p>
          </div>

          {/* Navigation - Locked vertical position */}
          <div className="pt-6 flex items-center border-t border-neutral-200 mt-6 sm:mt-8">
            <div className="flex items-center gap-4">
              <button
                onClick={() => setActiveIndex(prev => prev === 0 ? capabilities.length - 1 : prev - 1)}
                className="inline-flex items-center gap-1 text-xs font-mono font-bold uppercase tracking-wider text-neutral-500 hover:text-black transition-colors py-1.5"
              >
                <ChevronLeft className="w-3.5 h-3.5" />
                PREV
              </button>
              <span className="text-neutral-300 text-xs">/</span>
              <button
                onClick={() => setActiveIndex(prev => prev === capabilities.length - 1 ? 0 : prev + 1)}
                className="inline-flex items-center gap-1 text-xs font-mono font-bold uppercase tracking-wider text-neutral-500 hover:text-black transition-colors py-1.5"
              >
                NEXT
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
