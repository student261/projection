"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Sparkles,
  ChevronDown,
  Layers,
  Cpu,
  Gamepad2,
  ShoppingBag,
  GraduationCap,
  HeartPulse,
  Landmark,
  ArrowRight,
  Menu,
  X,
  Zap,
  BookOpen,
  FileText,
  HelpCircle,
  Terminal,
  Expand,
  Brain,
  Footprints,
  Projector,
  Trophy,
  Camera,
} from "lucide-react";
import SafeImage from "@/components/SafeImage";

interface MegamenuPreview {
  badge: string;
  title: string;
  desc: string;
  href: string;
  img: string;
}

const DEFAULT_SOLUTION_PREVIEW: MegamenuPreview = {
  badge: "SUITE",
  title: "Full Interactive Engine",
  desc: "Explore all commercial spatial motion projection & multimedia technologies.",
  href: "/solutions",
  img: "/images/interactive_floor_motion.jpg",
};

const DEFAULT_INDUSTRY_PREVIEW: MegamenuPreview = {
  badge: "SECTORS",
  title: "Industry Architecture",
  desc: "Explore tailored spatial projection systems engineered across 8 major commercial sectors.",
  href: "/industries",
  img: "/images/retail_interactive_showcase.jpg",
};

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [solPreview, setSolPreview] = useState<MegamenuPreview>(DEFAULT_SOLUTION_PREVIEW);
  const [indPreview, setIndPreview] = useState<MegamenuPreview>(DEFAULT_INDUSTRY_PREVIEW);

  const pathname = usePathname();
  const lastScrollY = useRef(0);

  // When at the top of pages with dark heroes, the navbar sits over the dark hero image and requires bright white text.
  // On the homepage, the navbar sits on the white canvas framing the hero card, using dark text.
  const isDarkHero = (pathname === "/projects" || pathname === "/about" || pathname === "/solutions" || pathname === "/industries" || pathname.startsWith("/solutions/") || pathname.startsWith("/industries/") || pathname.startsWith("/projects/")) && !scrolled && !mobileMenuOpen;
  const navTextActive = isDarkHero ? "text-white font-semibold" : "text-black font-semibold";
  const navTextMuted = isDarkHero ? "text-white/90 hover:text-white font-medium" : "text-neutral-700 hover:text-black font-medium";
  
  const scrolledRef = useRef(false);
  const visibleRef = useRef(true);

  useEffect(() => {
    let ticking = false;

    const updateScroll = () => {
      const currentScrollY = window.scrollY;

      const nextScrolled = currentScrollY > 20;
      if (nextScrolled !== scrolledRef.current) {
        scrolledRef.current = nextScrolled;
        setScrolled(nextScrolled);
      }

      let nextVisible = visibleRef.current;
      if (currentScrollY <= 20) {
        nextVisible = true;
      } else if (currentScrollY > lastScrollY.current + 8) {
        nextVisible = false;
      } else if (currentScrollY < lastScrollY.current - 8) {
        nextVisible = true;
      }

      if (nextVisible !== visibleRef.current) {
        visibleRef.current = nextVisible;
        setVisible(nextVisible);
      }

      lastScrollY.current = currentScrollY;
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(updateScroll);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu drawer is open to prevent background page scroll bleed
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <>
    <header
      className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-500 ease-in-out ${
        visible || mobileMenuOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0 pointer-events-none"
      } ${
        scrolled || mobileMenuOpen
          ? "py-3 bg-white/95 backdrop-blur-xl shadow-lg shadow-black/5"
          : "py-6 bg-transparent"
      }`}
    >
      <div className="w-full max-w-[1880px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Company Logo */}
          <Link href="/" className="flex items-center gap-2.5 group focus:outline-none">
            <div className={`w-8 h-8 rounded-lg flex items-center justify-center transition-transform duration-500 group-hover:scale-105 shadow-md ${isDarkHero ? 'bg-white/20 text-white backdrop-blur-sm border border-white/30' : 'bg-black text-white'}`}>
              <Sparkles className="w-4 h-4" />
            </div>
            <span className={`text-xl sm:text-2xl font-bold tracking-tight ${navTextActive}`}>
              Projection
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {/* 1. SOLUTIONS MEGAMENU */}
            <div className="group py-2 static" onMouseLeave={() => setSolPreview(DEFAULT_SOLUTION_PREVIEW)}>
              <Link
                href="/solutions"
                className={`flex items-center gap-1.5 text-[13px] font-medium transition-colors duration-200 py-1 ${
                  pathname.startsWith("/solutions")
                    ? `${navTextActive} underline underline-offset-4`
                    : `${navTextMuted} hover:underline underline-offset-4`
                }`}
              >
                <span>Solutions</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 group-hover:rotate-180 ${isDarkHero ? 'text-white/70' : 'text-[var(--text-secondary)]'}`} />
              </Link>

              {/* Solutions Full-bleed MegaMenu Tray */}
              <div className="absolute top-full left-0 w-full bg-white shadow-2xl border-t border-black/10 opacity-0 -translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300 ease-out z-50 before:content-[''] before:absolute before:-top-6 before:left-0 before:w-full before:h-6">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                  <div className="grid grid-cols-12 gap-12">
                    <div className="col-span-7 grid grid-cols-2 gap-3">

                    {/* Interactive Spaces */}
                    <Link
                      href="/solutions/interactive-spaces"
                      onMouseEnter={() => setSolPreview({ badge: "INTERACTIVE SPACES", title: "Motion-Responsive Floors & Walls", desc: "Responsive floor and wall projection that reacts to every footstep in real time.", href: "/solutions/interactive-spaces", img: "/images/interactive_floor_motion.jpg" })}
                      className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-gray-100 transition-all duration-200 group/item"
                    >
                      <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center text-black shrink-0 group-hover/item:bg-black group-hover/item:text-white transition-all">
                        <Layers className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-black flex items-center gap-1">
                          <span>Interactive Spaces</span>
                          <ArrowRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all" />
                        </div>
                        <div className="text-[11px] text-gray-500 font-light leading-snug">Floors, walls & surfaces</div>
                      </div>
                    </Link>

                    {/* Immersive Environment */}
                    <Link
                      href="/solutions/immersive-environment"
                      onMouseEnter={() => setSolPreview({ badge: "IMMERSIVE ROOMS", title: "360° Projection Environments", desc: "Full-room seamless projection mapping for galleries, lobbies, and event spaces.", href: "/solutions/immersive-environment", img: "/images/biosphere_ocean_gallery.jpg" })}
                      className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-gray-100 transition-all duration-200 group/item"
                    >
                      <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center text-black shrink-0 group-hover/item:bg-black group-hover/item:text-white transition-all">
                        <Expand className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-black flex items-center gap-1">
                          <span>Immersive Environments</span>
                          <ArrowRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all" />
                        </div>
                        <div className="text-[11px] text-gray-500 font-light leading-snug">360° rooms & projection mapping</div>
                      </div>
                    </Link>

                    {/* AI Experience */}
                    <Link
                      href="/solutions/ai-experience"
                      onMouseEnter={() => setSolPreview({ badge: "AI EXPERIENCES", title: "Generative AI Avatars & Vision", desc: "Computer vision systems and generative AI avatars that respond to visitor presence.", href: "/solutions/ai-experience", img: "/images/ai_receptionist_concierge.jpg" })}
                      className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-gray-100 transition-all duration-200 group/item"
                    >
                      <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center text-black shrink-0 group-hover/item:bg-black group-hover/item:text-white transition-all">
                        <Brain className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-black flex items-center gap-1">
                          <span>AI Experiences</span>
                          <ArrowRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all" />
                        </div>
                        <div className="text-[11px] text-gray-500 font-light leading-snug">Computer vision & AI avatars</div>
                      </div>
                    </Link>

                    {/* Smart Engagement */}
                    <Link
                      href="/solutions/solution-engagement"
                      onMouseEnter={() => setSolPreview({ badge: "SMART ENGAGEMENT", title: "Kiosks & Motion Games", desc: "Interactive kiosks, gamified activations, and cloud-managed engagement hubs.", href: "/solutions/solution-engagement", img: "/images/interactive_strike_wall.jpg" })}
                      className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-gray-100 transition-all duration-200 group/item"
                    >
                      <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center text-black shrink-0 group-hover/item:bg-black group-hover/item:text-white transition-all">
                        <Gamepad2 className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-black flex items-center gap-1">
                          <span>Smart Engagement</span>
                          <ArrowRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all" />
                        </div>
                        <div className="text-[11px] text-gray-500 font-light leading-snug">Kiosks, games & analytics</div>
                      </div>
                    </Link>

                    {/* Interactive Floor */}
                    <Link
                      href="/solutions/interactive-floor"
                      onMouseEnter={() => setSolPreview({ badge: "INTERACTIVE FLOOR", title: "Motion-Tracked Floor Projection", desc: "Responsive floor surfaces that track footsteps with real-time visual and audio feedback.", href: "/solutions/interactive-floor", img: "/images/education_interactive_floor.jpg" })}
                      className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-gray-100 transition-all duration-200 group/item"
                    >
                      <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center text-black shrink-0 group-hover/item:bg-black group-hover/item:text-white transition-all">
                        <Footprints className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-black flex items-center gap-1">
                          <span>Interactive Floor</span>
                          <ArrowRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all" />
                        </div>
                        <div className="text-[11px] text-gray-500 font-light leading-snug">Footstep-reactive projection surfaces</div>
                      </div>
                    </Link>

                    {/* Projection Mapping */}
                    <Link
                      href="/solutions/projection-mapping"
                      onMouseEnter={() => setSolPreview({ badge: "PROJECTION MAPPING", title: "Architectural Surface Mapping", desc: "Large-scale laser and digital mapping over buildings, vaults, and landmark structures.", href: "/solutions/projection-mapping", img: "/images/cathedral_projection_mapping.jpg" })}
                      className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-gray-100 transition-all duration-200 group/item"
                    >
                      <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center text-black shrink-0 group-hover/item:bg-black group-hover/item:text-white transition-all">
                        <Projector className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-black flex items-center gap-1">
                          <span>Projection Mapping</span>
                          <ArrowRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all" />
                        </div>
                        <div className="text-[11px] text-gray-500 font-light leading-snug">Landmark & architectural mapping</div>
                      </div>
                    </Link>

                    {/* Brand Gamification */}
                    <Link
                      href="/solutions/brand-gamification"
                      onMouseEnter={() => setSolPreview({ badge: "BRAND GAMIFICATION", title: "Gamified Brand Activations", desc: "Leaderboard games and branded motion challenges that drive audience dwell time.", href: "/solutions/brand-gamification", img: "/images/entertainment_motion_arena.jpg" })}
                      className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-gray-100 transition-all duration-200 group/item"
                    >
                      <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center text-black shrink-0 group-hover/item:bg-black group-hover/item:text-white transition-all">
                        <Trophy className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-black flex items-center gap-1">
                          <span>Brand Gamification</span>
                          <ArrowRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all" />
                        </div>
                        <div className="text-[11px] text-gray-500 font-light leading-snug">Games, leaderboards & activations</div>
                      </div>
                    </Link>

                    {/* AI Avatar */}
                    <Link
                      href="/solutions/ai-avatar-photobooth"
                      onMouseEnter={() => setSolPreview({ badge: "AI AVATAR", title: "AI Photobooth & Concierge", desc: "Generative AI portrait experiences and intelligent digital concierge avatars.", href: "/solutions/ai-avatar-photobooth", img: "/images/projection_cityscape_model.jpg" })}
                      className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-gray-100 transition-all duration-200 group/item"
                    >
                      <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center text-black shrink-0 group-hover/item:bg-black group-hover/item:text-white transition-all">
                        <Camera className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-black flex items-center gap-1">
                          <span>AI Photobooth & Avatars</span>
                          <ArrowRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all" />
                        </div>
                        <div className="text-[11px] text-gray-500 font-light leading-snug">Generative portrait & concierge AI</div>
                      </div>
                    </Link>

                    </div>

                    {/* Dynamic Solution Preview Card */}
                    <Link
                      href={solPreview.href}
                      className="col-span-5 rounded-2xl p-5 bg-black text-white flex flex-col justify-between relative overflow-hidden group/card transition-all duration-300 border border-white/10 shadow-2xl cursor-pointer"
                    >
                      <div className="w-full h-44 rounded-xl overflow-hidden relative border border-white/15 shrink-0 bg-gray-900">
                        <SafeImage
                          src={solPreview.img}
                          alt={solPreview.title}
                          className="w-full h-full object-cover brightness-105 group-hover/card:scale-105 transition-transform duration-700"
                          containerClassName="w-full h-full"
                        />
                        <div className="absolute top-2.5 left-2.5 z-10">
                          <span className="text-[9px] font-mono font-bold tracking-widest text-white bg-black/80 backdrop-blur-md px-2.5 py-1 rounded-full uppercase border border-white/20">
                            {solPreview.badge}
                          </span>
                        </div>
                      </div>
                      <div className="pt-4 space-y-2 flex-1 flex flex-col justify-between">
                        <div>
                          <h4 className="text-base font-black text-white tracking-tight">{solPreview.title}</h4>
                          <p className="text-xs text-white/75 font-light leading-relaxed line-clamp-2 mt-1">{solPreview.desc}</p>
                        </div>
                        <div className="pt-2 inline-flex items-center gap-1.5 text-xs font-bold text-white group-hover/card:text-blue-300 transition-colors">
                          <span>Explore Solution</span>
                          <ArrowRight className="w-3.5 h-3.5 group-hover/card:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* 2. INDUSTRIES MEGAMENU */}
            <div className="group py-2 static" onMouseLeave={() => setIndPreview(DEFAULT_INDUSTRY_PREVIEW)}>
              <Link
                href="/industries"
                className={`flex items-center gap-1.5 text-[13px] font-medium transition-colors duration-200 py-1 ${
                  pathname.startsWith("/industries")
                    ? `${navTextActive} underline underline-offset-4`
                    : `${navTextMuted} hover:underline underline-offset-4`
                }`}
              >
                <span>Industries</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 group-hover:rotate-180 ${isDarkHero ? 'text-white/70' : 'text-[var(--text-secondary)]'}`} />
              </Link>

              {/* Industries Full-bleed MegaMenu Tray */}
              <div className="absolute top-full left-0 w-full bg-white shadow-2xl border-t border-black/10 opacity-0 -translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300 ease-out z-50 before:content-[''] before:absolute before:-top-6 before:left-0 before:w-full before:h-6">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                  <div className="grid grid-cols-12 gap-12">
                    <div className="col-span-7 grid grid-cols-2 gap-3">

                    {/* 1. Retail */}
                    <Link
                      href="/industries/retail-showrooms"
                      onMouseEnter={() => setIndPreview({ badge: "RETAIL & SHOWROOMS", title: "Storefront Activations", desc: "Interactive window projections & touchless product showcases boosting store foot-traffic.", href: "/industries/retail-showrooms", img: "/images/retail_interactive_showcase.jpg" })}
                      className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-gray-100 transition-all duration-200 group/item"
                    >
                      <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center text-black shrink-0 group-hover/item:bg-black group-hover/item:text-white transition-all">
                        <ShoppingBag className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-black flex items-center gap-1">
                          <span>Retail</span>
                          <ArrowRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all" />
                        </div>
                        <div className="text-[11px] text-gray-500 font-light leading-snug">Storefronts & brand showcases</div>
                      </div>
                    </Link>

                    {/* 2. Education */}
                    <Link
                      href="/industries/education"
                      onMouseEnter={() => setIndPreview({ badge: "EDUCATION & STEM", title: "Interactive Classrooms", desc: "Active movement-based projection floors for collaborative STEM labs & schools.", href: "/industries/education", img: "/images/education_interactive_floor.jpg" })}
                      className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-gray-100 transition-all duration-200 group/item"
                    >
                      <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center text-black shrink-0 group-hover/item:bg-black group-hover/item:text-white transition-all">
                        <GraduationCap className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-black flex items-center gap-1">
                          <span>Education</span>
                          <ArrowRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all" />
                        </div>
                        <div className="text-[11px] text-gray-500 font-light leading-snug">Classrooms & STEM labs</div>
                      </div>
                    </Link>

                    {/* 3. Healthcare */}
                    <Link
                      href="/industries/healthcare"
                      onMouseEnter={() => setIndPreview({ badge: "HEALTHCARE", title: "Therapeutic Sensory Rooms", desc: "Pediatric rehabilitation & sensory decompression rooms with soothing motion floor projection.", href: "/industries/healthcare", img: "/images/healthcare_sensory_room.jpg" })}
                      className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-gray-100 transition-all duration-200 group/item"
                    >
                      <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center text-black shrink-0 group-hover/item:bg-black group-hover/item:text-white transition-all">
                        <HeartPulse className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-black flex items-center gap-1">
                          <span>Healthcare</span>
                          <ArrowRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all" />
                        </div>
                        <div className="text-[11px] text-gray-500 font-light leading-snug">Sensory therapy & pediatric care</div>
                      </div>
                    </Link>

                    {/* 4. Museums */}
                    <Link
                      href="/industries/museums-culture"
                      onMouseEnter={() => setIndPreview({ badge: "MUSEUMS & EXPOS", title: "Cultural Heritage Mapping", desc: "Architectural light mapping, cathedral projection, and 360-degree exhibit chambers.", href: "/industries/museums-culture", img: "/images/museum_interactive_exhibit.jpg" })}
                      className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-gray-100 transition-all duration-200 group/item"
                    >
                      <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center text-black shrink-0 group-hover/item:bg-black group-hover/item:text-white transition-all">
                        <Landmark className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-black flex items-center gap-1">
                          <span>Museums</span>
                          <ArrowRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all" />
                        </div>
                        <div className="text-[11px] text-gray-500 font-light leading-snug">Cultural landmarks & galleries</div>
                      </div>
                    </Link>

                    {/* 5. Entertainment */}
                    <Link
                      href="/industries/entertainment"
                      onMouseEnter={() => setIndPreview({ badge: "ENTERTAINMENT", title: "Active Arenas & Games", desc: "Motion-tracked active sports arenas, projection floors, and interactive team games.", href: "/industries/entertainment", img: "/images/entertainment_motion_arena.jpg" })}
                      className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-gray-100 transition-all duration-200 group/item"
                    >
                      <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center text-black shrink-0 group-hover/item:bg-black group-hover/item:text-white transition-all">
                        <Gamepad2 className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-black flex items-center gap-1">
                          <span>Entertainment</span>
                          <ArrowRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all" />
                        </div>
                        <div className="text-[11px] text-gray-500 font-light leading-snug">Theme parks & active arenas</div>
                      </div>
                    </Link>

                    {/* 6. Hospitality */}
                    <Link
                      href="/industries/hospitality"
                      onMouseEnter={() => setIndPreview({ badge: "HOSPITALITY", title: "Lobbies & Grand Salons", desc: "Transformative 360-degree multimedia hotel lobbies and ambient responsive digital skies.", href: "/industries/hospitality", img: "/images/hospitality_ambient_atrium.jpg" })}
                      className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-gray-100 transition-all duration-200 group/item"
                    >
                      <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center text-black shrink-0 group-hover/item:bg-black group-hover/item:text-white transition-all">
                        <Sparkles className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-black flex items-center gap-1">
                          <span>Hospitality</span>
                          <ArrowRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all" />
                        </div>
                        <div className="text-[11px] text-gray-500 font-light leading-snug">Hotels, resorts & lounges</div>
                      </div>
                    </Link>

                    {/* 7. Corporate */}
                    <Link
                      href="/industries/corporate"
                      onMouseEnter={() => setIndPreview({ badge: "CORPORATE", title: "Atriums & Executive Centers", desc: "High-impact kinetic media walls and interactive data visualization for world headquarters.", href: "/industries/corporate", img: "/images/corporate_lobby_wall.jpg" })}
                      className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-gray-100 transition-all duration-200 group/item"
                    >
                      <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center text-black shrink-0 group-hover/item:bg-black group-hover/item:text-white transition-all">
                        <Layers className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-black flex items-center gap-1">
                          <span>Corporate</span>
                          <ArrowRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all" />
                        </div>
                        <div className="text-[11px] text-gray-500 font-light leading-snug">Global HQ atriums & briefing labs</div>
                      </div>
                    </Link>

                    {/* 8. Public Spaces */}
                    <Link
                      href="/industries/public-spaces"
                      onMouseEnter={() => setIndPreview({ badge: "PUBLIC SPACES", title: "Transit & Urban Architecture", desc: "Massive digital LED corridors and architectural projection in airports and stations.", href: "/industries/public-spaces", img: "/images/interactive_floor_motion.jpg" })}
                      className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-gray-100 transition-all duration-200 group/item"
                    >
                      <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center text-black shrink-0 group-hover/item:bg-black group-hover/item:text-white transition-all">
                        <Zap className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-black flex items-center gap-1">
                          <span>Public Spaces</span>
                          <ArrowRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all" />
                        </div>
                        <div className="text-[11px] text-gray-500 font-light leading-snug">Airports, transit & municipal plazas</div>
                      </div>
                    </Link>

                    </div>

                    {/* Dynamic Industry Preview Card */}
                    <Link
                      href={indPreview.href}
                      className="col-span-5 rounded-2xl p-5 bg-black text-white flex flex-col justify-between relative overflow-hidden group/card transition-all duration-300 border border-white/10 shadow-2xl cursor-pointer"
                    >
                      <div className="w-full h-44 rounded-xl overflow-hidden relative border border-white/15 shrink-0 bg-gray-900">
                        <SafeImage
                          src={indPreview.img}
                          alt={indPreview.title}
                          className="w-full h-full object-cover brightness-105 group-hover/card:scale-105 transition-transform duration-700"
                          containerClassName="w-full h-full"
                        />
                        <div className="absolute top-2.5 left-2.5 z-10">
                          <span className="text-[9px] font-mono font-bold tracking-widest text-white bg-black/80 backdrop-blur-md px-2.5 py-1 rounded-full uppercase border border-white/20">
                            {indPreview.badge}
                          </span>
                        </div>
                      </div>
                      <div className="pt-4 space-y-2 flex-1 flex flex-col justify-between">
                        <div>
                          <h4 className="text-base font-black text-white tracking-tight">{indPreview.title}</h4>
                          <p className="text-xs text-white/75 font-light leading-relaxed line-clamp-2 mt-1">{indPreview.desc}</p>
                        </div>
                        <div className="pt-2 inline-flex items-center gap-1.5 text-xs font-bold text-white group-hover/card:text-blue-300 transition-colors">
                          <span>Explore Sector Portfolio</span>
                          <ArrowRight className="w-3.5 h-3.5 group-hover/card:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* 3. PROJECTS (DIRECT LINK) */}
            <Link
              href="/projects"
              className={`text-[13px] font-medium transition-colors duration-200 py-1 ${
                pathname.startsWith("/projects")
                  ? `${navTextActive} underline underline-offset-4`
                  : `${navTextMuted} hover:underline underline-offset-4`
              }`}
            >
              Projects
            </Link>

            {/* 4. RESOURCES DROPDOWN */}
            <div className="relative group py-2">
              <Link
                href="/blogs"
                className={`flex items-center gap-1.5 text-[13px] font-medium transition-colors duration-200 py-1 ${
                  pathname.startsWith("/blogs") || pathname === "/lab"
                    ? `${navTextActive} underline underline-offset-4`
                    : `${navTextMuted} hover:underline underline-offset-4`
                }`}
              >
                <span>Resources</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 group-hover:rotate-180 ${isDarkHero ? 'text-white/70' : 'text-[var(--text-secondary)]'}`} />
              </Link>

              <div className="absolute top-[calc(100%-8px)] left-1/2 -translate-x-1/2 pt-4 z-50 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-200 ease-out">
                <div className="w-[300px] rounded-2xl p-3 shadow-2xl border border-black/10 bg-white space-y-1 relative">
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white border-l border-t border-black/10 rotate-45 rounded-tl-sm z-[-1]" />
                  <Link href="/lab" className="flex items-center justify-between p-3 rounded-xl hover:bg-gray-100 transition-colors text-sm text-black/80 hover:text-black group/ritem">
                    <div className="flex items-center gap-2"><Terminal className="w-3.5 h-3.5 text-black/60" /><span>Sensor Fusion Lab</span></div>
                    <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover/ritem:opacity-100 transition-opacity text-black" />
                  </Link>
                  <Link href="/blogs" className="flex items-center justify-between p-3 rounded-xl hover:bg-gray-100 transition-colors text-sm text-black/80 hover:text-black group/ritem">
                    <div className="flex items-center gap-2"><BookOpen className="w-3.5 h-3.5 text-black/60" /><span>Latest Blogs & Insights</span></div>
                    <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover/ritem:opacity-100 transition-opacity text-black" />
                  </Link>
                  <Link href="/blogs/future-of-motion-interactive-projection" className="flex items-center justify-between p-3 rounded-xl hover:bg-gray-100 transition-colors text-sm text-black/80 hover:text-black group/ritem">
                    <div className="flex items-center gap-2"><FileText className="w-3.5 h-3.5 text-black/60" /><span>Future of Motion Projection</span></div>
                    <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover/ritem:opacity-100 transition-opacity text-black" />
                  </Link>
                  <Link href="/blogs/how-ai-is-redefining-interactive-experiences" className="flex items-center justify-between p-3 rounded-xl hover:bg-gray-100 transition-colors text-sm text-black/80 hover:text-black group/ritem">
                    <div className="flex items-center gap-2"><Cpu className="w-3.5 h-3.5 text-black/60" /><span>AI in Interactive Tech</span></div>
                    <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover/ritem:opacity-100 transition-opacity text-black" />
                  </Link>
                  <Link href="/blogs/choosing-the-right-interactive-solution-for-your-space" className="flex items-center justify-between p-3 rounded-xl hover:bg-gray-100 transition-colors text-sm text-black/80 hover:text-black group/ritem">
                    <div className="flex items-center gap-2"><Sparkles className="w-3.5 h-3.5 text-black/60" /><span>Buyer's Technology Guide</span></div>
                    <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover/ritem:opacity-100 transition-opacity text-black" />
                  </Link>
                </div>
              </div>
            </div>

            {/* 5. COMPANY MEGAMENU */}
            <div className="relative group py-2">
              <button
                className={`flex items-center gap-1.5 text-[13px] font-medium transition-colors duration-200 cursor-pointer py-1 ${
                  pathname.startsWith("/about") || pathname.startsWith("/contact")
                    ? `${navTextActive} underline underline-offset-4`
                    : `${navTextMuted} hover:underline underline-offset-4`
                }`}
              >
                <span>Company</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 group-hover:rotate-180 ${isDarkHero ? 'text-white/70' : 'text-[var(--text-secondary)]'}`} />
              </button>

              {/* Company Dropdown with Hover Bridge */}
              <div className="absolute top-[calc(100%-8px)] right-0 pt-4 z-50 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-200 ease-out">
                <div className="w-[200px] rounded-2xl p-3 shadow-2xl border border-black/10 bg-white space-y-1 relative">
                  {/* Pointer Caret */}
                  <div className="absolute -top-2 right-8 w-4 h-4 bg-white border-l border-t border-black/10 rotate-45 rounded-tl-sm z-[-1]" />
                  <Link
                    href="/about"
                    className="flex items-center justify-between p-3 rounded-xl hover:bg-gray-100 transition-colors text-sm text-black/80 hover:text-black group/citem"
                  >
                    <span>About Us</span>
                    <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover/citem:opacity-100 transition-opacity" />
                  </Link>
                  <Link
                    href="/contact"
                    className="flex items-center justify-between p-3 rounded-xl hover:bg-gray-100 transition-colors text-sm text-black/80 group/citem"
                  >
                    <span>Contact Us</span>
                    <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover/citem:opacity-100 transition-opacity" />
                  </Link>
                </div>
              </div>
            </div>
          </nav>

          {/* Primary CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/contact"
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-200 active:scale-95 shadow-md flex items-center gap-2 ${
                isDarkHero
                  ? "bg-white text-black hover:bg-neutral-100"
                  : "bg-black text-white hover:bg-neutral-800"
              }`}
            >
              <span>Book a Demo</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            className={`lg:hidden p-2.5 rounded-xl border shadow-sm cursor-pointer ${
              isDarkHero
                ? "bg-white/10 text-white border-white/20 hover:bg-white/20"
                : "bg-[var(--foreground)] text-[var(--background)] border-[var(--border-light)] hover:opacity-90"
            }`}
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>
    </header>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-[990] bg-white pt-[85px] pb-6 px-6 overflow-y-auto animate-in fade-in slide-in-from-top-4 duration-300">
          <div className="flex flex-col space-y-1 pb-24">
            
            <details className="group border-b border-black/10 [&_summary::-webkit-details-marker]:hidden" open>
              <summary className="flex items-center justify-between py-5 text-base font-bold cursor-pointer text-black">
                <span>Solutions</span>
                <ChevronDown className="w-5 h-5 transition-transform duration-300 group-open:rotate-180 text-black/50 group-hover:text-black" />
              </summary>
              <div className="pb-6 space-y-6">
                <div>
                  <Link href="/solutions/interactive-spaces" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-2 font-bold text-black py-2 text-sm">
                    <Sparkles className="w-4 h-4 text-blue-600" />
                    Interactive Spaces
                  </Link>
                  <div className="pl-6 space-y-2.5 mt-1">
                    <Link href="/solutions/interactive-floor" onClick={() => setMobileMenuOpen(false)} className="block py-1.5 text-sm text-gray-600 hover:text-black transition-colors">Interactive Floor</Link>
                    <Link href="/solutions/interactive-wall" onClick={() => setMobileMenuOpen(false)} className="block py-1.5 text-sm text-gray-600 hover:text-black transition-colors">Interactive Wall</Link>
                    <Link href="/solutions/interactive-ceiling" onClick={() => setMobileMenuOpen(false)} className="block py-1.5 text-sm text-gray-600 hover:text-black transition-colors">Interactive Ceiling</Link>
                    <Link href="/solutions/interactive-window" onClick={() => setMobileMenuOpen(false)} className="block py-1.5 text-sm text-gray-600 hover:text-black transition-colors">Interactive Window</Link>
                    <Link href="/solutions/interactive-mirror-table" onClick={() => setMobileMenuOpen(false)} className="block py-1.5 text-sm text-gray-600 hover:text-black transition-colors">Interactive Mirror / Table</Link>
                  </div>
                </div>

                <div>
                  <Link href="/solutions/immersive-environment" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-2 font-bold text-black py-2 text-sm">
                    <Projector className="w-4 h-4 text-purple-600" />
                    Immersive Environment
                  </Link>
                  <div className="pl-6 space-y-2.5 mt-1">
                    <Link href="/solutions/projection-mapping" onClick={() => setMobileMenuOpen(false)} className="block py-1.5 text-sm text-gray-600 hover:text-black transition-colors">Projection Mapping</Link>
                    <Link href="/solutions/immersive-room" onClick={() => setMobileMenuOpen(false)} className="block py-1.5 text-sm text-gray-600 hover:text-black transition-colors">360° Immersive Room</Link>
                    <Link href="/solutions/led-tunnel" onClick={() => setMobileMenuOpen(false)} className="block py-1.5 text-sm text-gray-600 hover:text-black transition-colors">LED Tunnel</Link>
                    <Link href="/solutions/holographic-display" onClick={() => setMobileMenuOpen(false)} className="block py-1.5 text-sm text-gray-600 hover:text-black transition-colors">Holographic Display</Link>
                  </div>
                </div>

                <div>
                  <Link href="/solutions/ai-experience" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-2 font-bold text-black py-2 text-sm">
                    <Brain className="w-4 h-4 text-emerald-600" />
                    AI Experience
                  </Link>
                  <div className="pl-6 space-y-2.5 mt-1">
                    <Link href="/solutions/ai-avatar-photobooth" onClick={() => setMobileMenuOpen(false)} className="block py-1.5 text-sm text-gray-600 hover:text-black transition-colors">AI Avatar / Photo Booth</Link>
                  </div>
                </div>

                <div>
                  <Link href="/solutions/solution-engagement" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-2 font-bold text-black py-2 text-sm">
                    <Gamepad2 className="w-4 h-4 text-orange-600" />
                    Solution Engagement
                  </Link>
                  <div className="pl-6 space-y-2.5 mt-1">
                    <Link href="/solutions/brand-gamification" onClick={() => setMobileMenuOpen(false)} className="block py-1.5 text-sm text-gray-600 hover:text-black transition-colors">Brand Gamification</Link>
                    <Link href="/solutions/motion-games" onClick={() => setMobileMenuOpen(false)} className="block py-1.5 text-sm text-gray-600 hover:text-black transition-colors">Motion Games</Link>
                  </div>
                </div>
              </div>
            </details>

            <details className="group border-b border-black/10 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex items-center justify-between py-5 text-base font-bold cursor-pointer text-black">
                <span>Industries</span>
                <ChevronDown className="w-5 h-5 transition-transform duration-300 group-open:rotate-180 text-black/50 group-hover:text-black" />
              </summary>
              <div className="pb-6 space-y-1 mt-2">
                <Link href="/industries/retail-showrooms" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-3 py-3 text-sm text-gray-700 hover:text-black font-medium transition-colors">
                  <ShoppingBag className="w-4 h-4 opacity-50" />
                  Retail & Showrooms
                </Link>
                <Link href="/industries/education" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-3 py-3 text-sm text-gray-700 hover:text-black font-medium transition-colors">
                  <GraduationCap className="w-4 h-4 opacity-50" />
                  Education
                </Link>
                <Link href="/industries/healthcare" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-3 py-3 text-sm text-gray-700 hover:text-black font-medium transition-colors">
                  <HeartPulse className="w-4 h-4 opacity-50" />
                  Healthcare
                </Link>
                <Link href="/industries/museums-culture" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-3 py-3 text-sm text-gray-700 hover:text-black font-medium transition-colors">
                  <Landmark className="w-4 h-4 opacity-50" />
                  Museums & Culture
                </Link>
                <Link href="/industries/corporate" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-3 py-3 text-sm text-gray-700 hover:text-black font-medium transition-colors">
                  <Layers className="w-4 h-4 opacity-50" />
                  Corporate
                </Link>
                <Link href="/industries/public-spaces" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-3 py-3 text-sm text-gray-700 hover:text-black font-medium transition-colors">
                  <Footprints className="w-4 h-4 opacity-50" />
                  Public Spaces
                </Link>
                <Link href="/industries/entertainment" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-3 py-3 text-sm text-gray-700 hover:text-black font-medium transition-colors">
                  <Trophy className="w-4 h-4 opacity-50" />
                  Entertainment
                </Link>
                <Link href="/industries/hospitality" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-3 py-3 text-sm text-gray-700 hover:text-black font-medium transition-colors">
                  <HelpCircle className="w-4 h-4 opacity-50" />
                  Hospitality
                </Link>
              </div>
            </details>

            <div className="border-b border-black/10">
              <Link href="/projects" onClick={() => setMobileMenuOpen(false)} className="flex items-center justify-between py-5 text-base font-bold text-black">
                <span>Projects</span>
                <ArrowRight className="w-5 h-5 opacity-50" />
              </Link>
            </div>

            <details className="group border-b border-black/10 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex items-center justify-between py-5 text-base font-bold cursor-pointer text-black">
                <span>Resources</span>
                <ChevronDown className="w-5 h-5 transition-transform duration-300 group-open:rotate-180 text-black/50 group-hover:text-black" />
              </summary>
              <div className="pb-6 space-y-1 mt-2">
                <Link href="/lab" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-3 py-3 text-sm text-gray-900 font-bold hover:text-black transition-colors">
                  <Terminal className="w-4 h-4 opacity-50" />
                  Sensor Fusion Lab
                </Link>
                <Link href="/blogs" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-3 py-3 text-sm text-gray-900 font-bold hover:text-black transition-colors">
                  <FileText className="w-4 h-4 opacity-50" />
                  Latest Blogs & Insights
                </Link>
                <div className="h-px bg-black/5 my-2 w-full"></div>
                <Link href="/blogs/future-of-motion-interactive-projection" onClick={() => setMobileMenuOpen(false)} className="block py-2.5 text-sm text-gray-600 hover:text-black">Future of Motion Projection</Link>
                <Link href="/blogs/how-ai-is-redefining-interactive-experiences" onClick={() => setMobileMenuOpen(false)} className="block py-2.5 text-sm text-gray-600 hover:text-black">AI in Interactive Tech</Link>
                <Link href="/blogs/choosing-the-right-interactive-solution-for-your-space" onClick={() => setMobileMenuOpen(false)} className="block py-2.5 text-sm text-gray-600 hover:text-black">Buyer's Technology Guide</Link>
              </div>
            </details>

            <details className="group border-b border-black/10 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex items-center justify-between py-5 text-base font-bold cursor-pointer text-black">
                <span>Company</span>
                <ChevronDown className="w-5 h-5 transition-transform duration-300 group-open:rotate-180 text-black/50 group-hover:text-black" />
              </summary>
              <div className="pb-6 space-y-1 mt-2">
                <Link href="/about" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-3 py-3 text-sm text-gray-700 hover:text-black font-medium transition-colors">
                  About Us
                </Link>
                <Link href="/contact" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-3 py-3 text-sm text-gray-700 hover:text-black font-medium transition-colors">
                  Contact Us
                </Link>
              </div>
            </details>

            <div className="pt-8">
              <Link
                href="/contact"
                className="w-full flex items-center justify-center gap-2 py-4 rounded-full font-bold text-sm text-white bg-black active:scale-95 transition-transform shadow-xl shadow-black/20"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span>Book a Demo</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
