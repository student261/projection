"use client";

import { useState } from "react";
import Footer from "@/components/Footer";
import SafeImage from "@/components/SafeImage";
import Link from "next/link";
import {
  Monitor,
  Tablet,
  Smartphone,
  RotateCw,
  Maximize2,
  Copy,
  Download,
  Crown,
  Sparkles,
  Heart,
  Share2,
  Check,
  Search,
  ExternalLink,
  Code2,
  Layers,
  Cpu,
} from "lucide-react";

const aiEditors = [
  { name: "Antigravity", icon: "🚀", color: "border-white/10 text-black" },
  { name: "Cursor", icon: "⚡", color: "border-blue-500/40 text-blue-600" },
  { name: "Claude", icon: "🧠", color: "border-amber-500/40 text-amber-600" },
  { name: "Lovable", icon: "❤️", color: "border-pink-500/40 text-pink-600" },
  { name: "Bolt.new", icon: "⚡", color: "border-yellow-500/40 text-yellow-600" },
  { name: "Codex", icon: "💻", color: "border-emerald-500/40 text-emerald-600" },
];

const categories = [
  "All",
  "Technology",
  "Web Development",
  "UI/UX Design",
  "Technology Startups",
  "SaaS",
  "Automotive",
  "Architectural",
];

const tags = [
  "#Interactive",
  "#GSAP",
  "#Landing Page",
  "#Immersive",
  "#Animated",
  "#3D",
  "#Spatial",
];

const galleryTemplates = [
  {
    id: "intelligence",
    title: "Intelligence - Agency Landing Page Template",
    category: "Agency",
    badge: "Interactive • GSAP",
    desc: "A sleek, high-contrast agency landing page featuring fluid GSAP animations, dynamic hero components, and interactive service showcases.",
    img: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=65&fm=webp",
    prompt: "Create an interactive HTML5 landing page for a creative AI agency named Intelligence using Tailwind CSS, GSAP animations, dark mode theme, and responsive hero controls.",
    likes: 42,
  },
  {
    id: "hyperion-v12",
    title: "Hyperion V12 — Luxury Automotive Hypercar",
    category: "Automotive",
    badge: "3D • WebGL • Sound Engine",
    desc: "A 900vh pinned viewport hypercar showcase with canvas frame sequence scroll synchronization, Web Audio API sound synthesis, and real-time configurator.",
    img: "https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?auto=format&fit=crop&w=800&q=65&fm=webp",
    prompt: "Build an interactive 3D luxury automotive hypercar website for HYPERION V12 with frame sequence scroll physics, Web Audio engine, and bespoke configurator.",
    likes: 89,
  },
  {
    id: "livspace",
    title: "Livspace — Architectural Interior Experience",
    category: "Architecture",
    badge: "3D • Luxury • Glassmorphism",
    desc: "An ultra-luxurious 850vh spatial architectural residence walkthrough with high-DPI canvas cover rendering, before/after slider, and material curation matrix.",
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=65&fm=webp",
    prompt: "Create an architectural interior design website for LIVSPACE with pinned canvas scroll sequence, before/after comparison slider, and material showcase.",
    likes: 67,
  },
  {
    id: "vaultix",
    title: "Vaultix — Web3 & Crypto Finance Hero",
    category: "SaaS",
    badge: "Web3 • Video Speed • Glass",
    desc: "Ultra-premium crypto finance hero section featuring 1.5x background video playback, glassmorphic stats bar, and interactive specification comparison matrix.",
    img: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=800&q=65&fm=webp",
    prompt: "Generate a Web3/Crypto finance hero section for VAULTIX with 1.5x speed background video, 4-card telemetry footer, and trim comparison modal.",
    likes: 54,
  },
  {
    id: "aero-clouds",
    title: "AERO Aerial Tech — Cloud Drone Section",
    category: "Technology",
    badge: "3D Parallax • Telemetry",
    desc: "Volumetric cloud video background with 3D floating drone dynamic mouse flight physics, altitude HUD telemetry drawers, and reservation list counter.",
    img: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&w=800&q=65&fm=webp",
    prompt: "Build an HTML5 hero section for AERO Aerial Tech with volumetric cloud video, 3D mouse parallax flight physics for a drone asset, and HUD telemetry.",
    likes: 38,
  },
  {
    id: "creativax",
    title: "CreativaX Studio — Editorial Warm Cream",
    category: "Creative Studio",
    badge: "Editorial • Instrument Serif",
    desc: "Warm cream aesthetic studio section featuring elegant Instrument Serif display typography, ambient background video artwork, and social proof stack.",
    img: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=65&fm=webp",
    prompt: "Create a creative studio hero section for CreativaX with warm cream palette (#F5EFE6), Instrument Serif typography, and video showreel modal.",
    likes: 71,
  },
];

export default function TemplatesContent() {
  const [activeTemplate, setActiveTemplate] = useState(galleryTemplates[0]);
  const [viewportMode, setViewportMode] = useState<"desktop" | "tablet" | "mobile">("desktop");
  const [copiedPrompt, setCopiedPrompt] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [likesCount, setLikesCount] = useState(12);
  const [hasLiked, setHasLiked] = useState(false);

  const handleCopyPrompt = () => {
    navigator.clipboard.writeText(activeTemplate.prompt);
    setCopiedPrompt(true);
    setTimeout(() => setCopiedPrompt(false), 2500);
  };

  const handleToggleLike = () => {
    if (hasLiked) {
      setLikesCount((prev) => prev - 1);
      setHasLiked(false);
    } else {
      setLikesCount((prev) => prev + 1);
      setHasLiked(true);
    }
  };

  const filteredTemplates = galleryTemplates.filter((item) => {
    const matchesCategory =
      selectedCategory === "All" ||
      item.category.toLowerCase().includes(selectedCategory.toLowerCase());
    const matchesSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.desc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="w-full bg-white text-gray-900 pt-28">
      {/* Hero Header */}
      <section className="py-12 sm:py-16 border-b border-gray-100 bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-black mb-3 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-black" />
                <span>Interactive Design Resources</span>
              </p>
              <h1 className="text-gray-900 max-w-3xl leading-[1.1]">
                570+ AI Animation Website Prompts & Templates
              </h1>
              <p className="text-base sm:text-lg text-gray-600 font-light mt-3 max-w-2xl">
                Explore interactive landing pages, spatial 3D sections, and high-performance prompts compatible with Antigravity, Cursor, Claude, and Bolt.
              </p>
            </div>

            {/* Search Input Bar */}
            <div className="relative w-full sm:w-80 shrink-0">
              <Search className="w-4 h-4 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                placeholder="Search templates or tech..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white border border-gray-200 text-gray-900 placeholder:text-gray-400 text-xs font-semibold rounded-full pl-10 pr-4 py-3 focus:outline-none focus:border-black focus:ring-2 focus:ring-neutral-200 transition-all shadow-sm"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Main Sandbox Showcase Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Active Template Title Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <h2 className="text-gray-900">
              {activeTemplate.title}
            </h2>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold uppercase tracking-wider text-black bg-neutral-100 px-3.5 py-1.5 rounded-full border border-neutral-200">
                {activeTemplate.badge}
              </span>
            </div>
          </div>

          {/* Interactive Preview Container Window */}
          <div className="w-full bg-white border border-gray-200 rounded-3xl overflow-hidden shadow-2xl mb-12 flex flex-col transition-all duration-300">
            {/* Window Top Controls Header */}
            <div className="bg-gray-100 border-b border-gray-200 px-5 py-3 flex items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500 border border-black/10 inline-block" />
                <span className="w-3 h-3 rounded-full bg-yellow-500 border border-black/10 inline-block" />
                <span className="w-3 h-3 rounded-full bg-green-500 border border-black/10 inline-block" />
              </div>

              {/* Viewport Width Switchers */}
              <div className="flex items-center gap-1 bg-white border border-gray-200 rounded-xl p-1 shadow-sm">
                <button
                  onClick={() => setViewportMode("desktop")}
                  title="Desktop View (100%)"
                  className={`p-1.5 rounded-lg text-xs font-bold transition-colors ${
                    viewportMode === "desktop"
                      ? "bg-black text-white"
                      : "text-gray-500 hover:text-gray-900"
                  }`}
                >
                  <Monitor className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewportMode("tablet")}
                  title="Tablet View (768px)"
                  className={`p-1.5 rounded-lg text-xs font-bold transition-colors ${
                    viewportMode === "tablet"
                      ? "bg-black text-white"
                      : "text-gray-500 hover:text-gray-900"
                  }`}
                >
                  <Tablet className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewportMode("mobile")}
                  title="Mobile View (375px)"
                  className={`p-1.5 rounded-lg text-xs font-bold transition-colors ${
                    viewportMode === "mobile"
                      ? "bg-black text-white"
                      : "text-gray-500 hover:text-gray-900"
                  }`}
                >
                  <Smartphone className="w-4 h-4" />
                </button>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => {}}
                  title="Reload Preview"
                  className="p-2 rounded-xl text-gray-500 hover:text-gray-900 hover:bg-gray-200 transition-colors"
                >
                  <RotateCw className="w-4 h-4" />
                </button>
                <button
                  onClick={() => {}}
                  title="Fullscreen Preview"
                  className="p-2 rounded-xl text-gray-500 hover:text-gray-900 hover:bg-gray-200 transition-colors"
                >
                  <Maximize2 className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Viewport Frame Box */}
            <div className="relative w-full min-h-[480px] sm:min-h-[580px] bg-gray-50 flex justify-center items-center p-4">
              <div
                className={`h-full transition-all duration-500 rounded-2xl overflow-hidden shadow-lg border border-gray-200 bg-white relative ${
                  viewportMode === "desktop"
                    ? "w-full"
                    : viewportMode === "tablet"
                    ? "w-[768px]"
                    : "w-[375px]"
                }`}
              >
                <div className="relative aspect-[16/9] sm:aspect-[16/10] w-full overflow-hidden bg-gray-100">
                  <SafeImage
                    src={activeTemplate.img}
                    alt={activeTemplate.title}
                    className="w-full h-full object-cover"
                    containerClassName="w-full h-full"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-8 text-white">
                    <span className="text-xs font-bold uppercase tracking-widest text-neutral-300 mb-2">
                      Live Template Preview
                    </span>
                    <h3 className="mb-3">
                      {activeTemplate.title}
                    </h3>
                    <p className="text-sm font-light text-gray-200 max-w-2xl leading-relaxed">
                      {activeTemplate.desc}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Details & Actions Sidebar Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-20">
            {/* Left Narrative */}
            <div className="lg:col-span-8 space-y-8">
              <div className="bg-gray-50 border border-gray-200 rounded-3xl p-6 sm:p-8">
                <h3 className="text-gray-900 mb-4">About this Template</h3>
                <p className="text-gray-600 font-light leading-relaxed mb-6">
                  {activeTemplate.desc} Designed with high-performance responsive frameworks, hardware-accelerated animations, and structured code blocks optimized for immediate deployment.
                </p>

                <h4 className="text-gray-900 mb-3">Perfect For</h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-gray-700 font-medium">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-black shrink-0" />
                    <span>Digital Experience Studios</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-black shrink-0" />
                    <span>Interactive Product Launches</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-black shrink-0" />
                    <span>High-Tech Spatial Architecture</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-black shrink-0" />
                    <span>AI & Web3 Brand Portfolios</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right Action Sidebar */}
            <div className="lg:col-span-4 space-y-6">
              <div className="bg-white border border-gray-200 rounded-3xl p-6 shadow-sm space-y-6">
                {/* CTA Action Buttons */}
                <div className="space-y-3">
                  <button
                    onClick={handleCopyPrompt}
                    className="w-full h-12 flex items-center justify-between px-5 text-sm font-bold rounded-2xl bg-black hover:bg-neutral-900 text-white shadow-md transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
                  >
                    <span className="flex items-center gap-2.5">
                      {copiedPrompt ? (
                        <>
                          <Check className="w-5 h-5 text-white" />
                          <span>Prompt Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-5 h-5" />
                          <span>Copy AI Prompt</span>
                        </>
                      )}
                    </span>
                    <Crown className="w-5 h-5 text-amber-300" />
                  </button>

                  <Link
                    href="/contact"
                    className="w-full h-12 flex items-center justify-between px-5 text-sm font-bold rounded-2xl bg-gray-900 hover:bg-gray-800 text-white shadow-md transition-all duration-200 hover:-translate-y-0.5"
                  >
                    <span className="flex items-center gap-2.5">
                      <Download className="w-5 h-5" />
                      <span>Request Full Code</span>
                    </span>
                    <ExternalLink className="w-4 h-4 text-gray-400" />
                  </Link>
                </div>

                {/* Compatible AI Editors */}
                <div className="pt-6 border-t border-gray-100">
                  <h4 className="uppercase text-gray-500 mb-3 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-black" />
                    <span>Compatible AI Editors</span>
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {aiEditors.map((editor) => (
                      <div
                        key={editor.name}
                        className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border ${editor.color} text-xs font-bold bg-gray-50`}
                      >
                        <span>{editor.icon}</span>
                        <span>{editor.name}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Social Actions */}
                <div className="pt-6 border-t border-gray-100 flex items-center justify-around">
                  <button
                    onClick={handleToggleLike}
                    className={`flex items-center gap-2 text-sm font-bold transition-colors ${
                      hasLiked ? "text-red-500" : "text-gray-600 hover:text-gray-900"
                    }`}
                  >
                    <Heart className={`w-4 h-4 ${hasLiked ? "fill-red-500" : ""}`} />
                    <span>{likesCount} Likes</span>
                  </button>

                  <button className="flex items-center gap-2 text-sm font-bold text-gray-600 hover:text-gray-900 transition-colors">
                    <Share2 className="w-4 h-4" />
                    <span>Share</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Categories & Tags Filters */}
          <div className="pt-12 border-t border-gray-200 mb-10">
            <h3 className="text-gray-900 mb-6">
              More Templates & Prompts
            </h3>

            {/* Filter Pills */}
            <div className="flex flex-wrap gap-2 mb-8">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                    selectedCategory === cat
                      ? "bg-black text-white shadow-sm"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Tag Badges */}
            <div className="flex flex-wrap gap-2 mb-10">
              {tags.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1 bg-neutral-100 text-neutral-900 text-[11px] font-bold rounded-lg border border-neutral-200"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* Templates Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredTemplates.map((item) => (
                <div
                  key={item.id}
                  onClick={() => setActiveTemplate(item)}
                  className={`group bg-white border rounded-3xl overflow-hidden p-5 transition-all duration-300 cursor-pointer ${
                    activeTemplate.id === item.id
                      ? "border-black ring-2 ring-neutral-200 shadow-xl"
                      : "border-gray-200 hover:border-neutral-400 hover:shadow-lg"
                  }`}
                >
                  <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-gray-100 mb-4">
                    <SafeImage
                      src={item.img}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      containerClassName="w-full h-full"
                    />
                    <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-extrabold text-gray-900 shadow-sm">
                      {item.badge}
                    </div>
                  </div>

                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-gray-900 group-hover:text-black transition-colors line-clamp-1">
                      {item.title}
                    </h4>
                  </div>
                  <p className="text-gray-500 text-xs font-light leading-relaxed line-clamp-2 mb-4">
                    {item.desc}
                  </p>

                  <div className="flex items-center justify-between text-xs font-bold text-black">
                    <span>Preview Template</span>
                    <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
