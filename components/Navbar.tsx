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
  img: "https://momentfactory.com/cdn/shop/files/SQCagARcade_Montreal_MomentFactory_-9.jpg",
};

const DEFAULT_INDUSTRY_PREVIEW: MegamenuPreview = {
  badge: "SECTORS",
  title: "Industry Showcase",
  desc: "Explore all targeted architectural sectors.",
  href: "/industries",
  img: "https://momentfactory.com/cdn/shop/files/Aura_EgliseSaint-Roch_MomentFactory__DSC4360.png",
};

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [solPreview, setSolPreview] = useState<MegamenuPreview>(DEFAULT_SOLUTION_PREVIEW);
  const [indPreview, setIndPreview] = useState<MegamenuPreview>(DEFAULT_INDUSTRY_PREVIEW);

  const pathname = usePathname();
  const lastScrollY = useRef(0);

  // When at the top of the homepage, solution page, or industry page, the navbar sits over a dark hero image.
  const isDarkHero = (pathname === "/" || pathname.startsWith("/solutions/") || pathname.startsWith("/industries/")) && !scrolled;
  const navTextActive = isDarkHero ? "text-white" : "text-[var(--foreground)]";
  const navTextMuted = isDarkHero ? "text-white/70 hover:text-white" : "text-[var(--text-secondary)] hover:text-[var(--foreground)]";
  
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      if (currentScrollY <= 20) {
        setVisible(true);
      } else if (currentScrollY > lastScrollY.current + 5) {
        setVisible(false);
      } else if (currentScrollY < lastScrollY.current - 5) {
        setVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-500 ease-in-out ${
        visible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0 pointer-events-none"
      } ${
        scrolled
          ? "py-3 glass-panel shadow-lg shadow-black/5"
          : "py-6 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Company Logo */}
          <Link href="/" className="flex items-center gap-3 group focus:outline-none">
            <div className={`w-8 h-8 rounded-lg flex items-center justify-center transition-transform duration-500 group-hover:scale-105 shadow-xl ${isDarkHero ? 'bg-white text-black' : 'bg-[var(--foreground)] text-[var(--background)]'}`}>
              <Sparkles className="w-4 h-4" />
            </div>
            <span className={`text-xl sm:text-2xl font-black tracking-widest uppercase  ${navTextActive}`}>
              PROJECTION
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {/* 1. SOLUTIONS MEGAMENU */}
            <div className="group py-2 static" onMouseLeave={() => setSolPreview(DEFAULT_SOLUTION_PREVIEW)}>
              <Link
                href="/solutions"
                className={`flex items-center gap-1.5 text-[12px] uppercase font-bold tracking-[0.08em] transition-colors duration-200 py-1 ${
                  pathname.startsWith("/solutions")
                    ? `${navTextActive} underline underline-offset-4`
                    : `${navTextMuted} hover:underline underline-offset-4`
                }`}
              >
                <span>Solution</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 group-hover:rotate-180 ${isDarkHero ? 'text-white/70' : 'text-[var(--text-secondary)]'}`} />
              </Link>

              {/* Full-bleed MegaMenu Tray */}
              <div className="absolute top-full left-0 w-screen bg-white shadow-2xl border-t border-black/10 opacity-0 -translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300 ease-out z-50 before:content-[''] before:absolute before:-top-6 before:left-0 before:w-screen before:h-6">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                  <div className="grid grid-cols-12 gap-12">
                    <div className="col-span-7 grid grid-cols-2 gap-6">
                    {/* Category 1: Interactive Spaces */}
                    <div>
                      <Link
                        href="/solutions/interactive-spaces"
                        onMouseEnter={() =>
                          setSolPreview({
                              badge: "ACTIVE ARENA",
                              title: "ARcade & Active Spaces",
                              desc: "Transform floors, walls, and architectural environments into responsive interactive ecosystems.",
                              href: "/solutions/interactive-spaces",
                              img: "https://momentfactory.com/cdn/shop/files/SQCagARcade_Montreal_MomentFactory_-9.jpg",
                            })
                        }
                        className="flex items-center gap-2 mb-2 text-[11px] font-bold uppercase tracking-wider text-black hover:text-gray-500 transition-colors group/header"
                      >
                        <Sparkles className="w-3.5 h-3.5 text-black group-hover/header:text-gray-500 transition-colors" />
                        <span>Interactive Spaces</span>
                      </Link>
                      <ul className="space-y-1 text-[11px] font-light text-black/70">
                        <li>
                          <Link
                            href="/solutions/interactive-floor"
                            onMouseEnter={() =>
                              setSolPreview({
                              badge: "GROUND INTERACTION",
                              title: "Motion Tracking Floors",
                              desc: "Footfall-activated particle physics, sports games, and interactive ground environments.",
                              href: "/solutions/interactive-floor",
                              img: "https://momentfactory.com/cdn/shop/files/MF_ARcade_BrunoDestombes_DSC01692-HR.jpg",
                            })
                            }
                            className="hover:text-black hover:underline block py-0.5 transition-colors"
                          >
                            • Interactive Floor
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/solutions/interactive-wall"
                            onMouseEnter={() =>
                              setSolPreview({
                              badge: "VERTICAL SURFACE",
                              title: "Generative Media Walls",
                              desc: "LiDAR-powered interactive digital walls reacting to hand touch and bodily presence.",
                              href: "/solutions/interactive-wall",
                              img: "https://momentfactory.com/cdn/shop/files/Moment_Factory_Public_Spaces_ATT_Discovery_District_21.png",
                            })
                            }
                            className="hover:text-black hover:underline block py-0.5 transition-colors"
                          >
                            • Interactive Wall
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/solutions/interactive-ceiling"
                            onMouseEnter={() =>
                              setSolPreview({
                              badge: "OVERHEAD CANOPY",
                              title: "Tokyo Shinjuku Digital Canopy",
                              desc: "Massive color-bath dynamic light ceiling tunnels and responsive suspended digital art.",
                              href: "/solutions/interactive-ceiling",
                              img: "https://momentfactory.com/cdn/shop/files/Moment_Factory_Public_Spaces_Shinjuku_Station_A03_3-WS.jpg",
                            })
                            }
                            className="hover:text-black hover:underline block py-0.5 transition-colors"
                          >
                            • Interactive Ceiling
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/solutions/interactive-window"
                            onMouseEnter={() =>
                              setSolPreview({
                              badge: "STREETFRONT TECH",
                              title: "Smart Interactive Windows",
                              desc: "Through-glass radar and gesture tracking turning commercial storefronts into 24/7 engagement portals.",
                              href: "/solutions/interactive-window",
                              img: "https://momentfactory.com/cdn/shop/files/20160103_momentfactory-0985-WS_grande.jpg",
                            })
                            }
                            className="hover:text-black hover:underline block py-0.5 transition-colors"
                          >
                            • Interactive Window
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/solutions/interactive-mirror-table"
                            onMouseEnter={() =>
                              setSolPreview({
                              badge: "TACTILE SURFACE",
                              title: "Changi Airport Smart Tables",
                              desc: "Multi-user interactive projection tables with touchless optical gesture and RFID object recognition.",
                              href: "/solutions/interactive-mirror-table",
                              img: "https://momentfactory.com/cdn/shop/files/Moment_Factory_Custom_Experience_Cultural___Educational_NGPA_AnimalsofEarth_Photo_Ark_JE-035_1_-WS.jpg",
                            })
                            }
                            className="hover:text-black hover:underline block py-0.5 transition-colors"
                          >
                            • Interactive Mirror / Table
                          </Link>
                        </li>
                      </ul>
                    </div>

                    {/* Category 2: Immersive Environment */}
                    <div>
                      <Link
                        href="/solutions/immersive-environment"
                        onMouseEnter={() =>
                          setSolPreview({
                              badge: "SPATIAL IMMERSION",
                              title: "Superreal Architectural Immersion",
                              desc: "Full-scale architectural multimedia transformation turning classical interiors into dimensional dreamscapes.",
                              href: "/solutions/immersive-environment",
                              img: "https://momentfactory.com/cdn/shop/files/Moment_Factory_Signature_Shows_25_SuperReal_D7A1668-WS_5b710a5d-f2e7-4428-ad20-c83c257b7bbe.jpg",
                            })
                        }
                        className="flex items-center gap-2 mb-2 text-[11px] font-bold uppercase tracking-wider text-black hover:text-gray-500 transition-colors group/header"
                      >
                        <Layers className="w-3.5 h-3.5 text-black group-hover/header:text-gray-500 transition-colors" />
                        <span>Immersive Environment</span>
                      </Link>
                      <ul className="space-y-1 text-[11px] font-light text-black/70">
                        <li>
                          <Link
                            href="/solutions/projection-mapping"
                            onMouseEnter={() =>
                              setSolPreview({
                              badge: "LANDMARK MAPPING",
                              title: "AURA Notre-Dame Basilica",
                              desc: "World-renowned architectural projection mapping transforming historical sacred architecture into light.",
                              href: "/solutions/projection-mapping",
                              img: "https://momentfactory.com/cdn/shop/files/KarelChladek-5286-WS.jpg",
                            })
                            }
                            className="hover:text-black hover:underline block py-0.5 transition-colors"
                          >
                            • Projection Mapping
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/solutions/immersive-room"
                            onMouseEnter={() =>
                              setSolPreview({
                              badge: "360° SENSORY",
                              title: "Mirror Mirror 360° Labyrinth",
                              desc: "Multi-sensory rooms synchronizing 360° projection, infinity mirrors, and spatial soundscapes.",
                              href: "/solutions/immersive-room",
                              img: "https://momentfactory.com/cdn/shop/files/TLX04130-Moment_Factory_Originals_Digital_Art_Experiences__Brainstorm-WS.jpg",
                            })
                            }
                            className="hover:text-black hover:underline block py-0.5 transition-colors"
                          >
                            • Immersive Room (180/360)
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/solutions/led-tunnel"
                            onMouseEnter={() =>
                              setSolPreview({
                              badge: "DIGITAL PASSAGE",
                              title: "Tokyo Metro Light Corridor",
                              desc: "Immersive transit corridors with seamless architectural LED walls, ceilings, and motion-reactive portals.",
                              href: "/solutions/led-tunnel",
                              img: "https://momentfactory.com/cdn/shop/files/Moment_Factory_Public_Spaces_Shinjuku_Station_A03_3-WS.jpg",
                            })
                            }
                            className="hover:text-black hover:underline block py-0.5 transition-colors"
                          >
                            • LED Tunnel
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/solutions/holographic-display"
                            onMouseEnter={() =>
                              setSolPreview({
                              badge: "FLOATING OPTICS",
                              title: "Superreal Holographic Portals",
                              desc: "Volumetric floating projections and transparent light sculptures creating impossible optical illusions.",
                              href: "/solutions/holographic-display",
                              img: "https://momentfactory.com/cdn/shop/files/Moment_Factory_Themed_Entertainment_Wonderbox_Paradise_city_korea_DSC07507-WS.jpg",
                            })
                            }
                            className="hover:text-black hover:underline block py-0.5 transition-colors"
                          >
                            • Holographic Display
                          </Link>
                        </li>
                      </ul>
                    </div>

                    {/* Category 3: AI Experience */}
                    <div className="pt-2">
                      <Link
                        href="/solutions/ai-experience"
                        onMouseEnter={() =>
                          setSolPreview({
                              badge: "GENERATIVE AI",
                              title: "AT&T Discovery District Canvas",
                              desc: "Real-time AI generative simulations transforming architecture with dynamic visitor tracking and fluid physics.",
                              href: "/solutions/ai-experience",
                              img: "https://momentfactory.com/cdn/shop/files/Moment_Factory_Public_Spaces_ATT_Discovery_District_21.png",
                            })
                        }
                        className="flex items-center gap-2 mb-2 text-[11px] font-bold uppercase tracking-wider text-black hover:text-gray-500 transition-colors group/header"
                      >
                        <Cpu className="w-3.5 h-3.5 text-black group-hover/header:text-gray-500 transition-colors" />
                        <span>AI Experience</span>
                      </Link>
                      <ul className="space-y-1 text-[11px] font-light text-black/70">
                        <li>
                          <Link
                            href="/solutions/ai-avatar-photobooth"
                            onMouseEnter={() =>
                              setSolPreview({
                              badge: "DIGITAL AVATARS",
                              title: "Real Madrid Biometric Hub",
                              desc: "Gamified interactive photo booths and biometric motion stations capturing visitor movements into live digital avatars.",
                              href: "/solutions/ai-avatar-photobooth",
                              img: "https://momentfactory.com/cdn/shop/files/Moment_Factory_Custom_Experiences_Sports_Entertainment_Real_Madrid_Games_087-WS_46fdefce-745c-4f6c-91a6-97cbf378a1d3.jpg",
                            })
                            }
                            className="hover:text-black hover:underline block py-0.5 transition-colors"
                          >
                            • AI Avatar / Photo Booth
                          </Link>
                        </li>
                      </ul>
                    </div>

                    {/* Category 4: Solution Engagement */}
                    <div className="pt-2">
                      <Link
                        href="/solutions/solution-engagement"
                        onMouseEnter={() =>
                          setSolPreview({
                              badge: "HIGH DWELL TECH",
                              title: "The Wonderfall at Changi T2",
                              desc: "A monumental 14-meter digital waterfall installation captivating millions of global passengers.",
                              href: "/solutions/solution-engagement",
                              img: "https://momentfactory.com/cdn/shop/files/Moment_Factory_Changi_Experience_Studio_JE-077-WS.jpg",
                            })
                        }
                        className="flex items-center gap-2 mb-2 text-[11px] font-bold uppercase tracking-wider text-black hover:text-gray-500 transition-colors group/header"
                      >
                        <Gamepad2 className="w-3.5 h-3.5 text-black group-hover/header:text-gray-500 transition-colors" />
                        <span>Solution Engagement</span>
                      </Link>
                      <ul className="space-y-1 text-[11px] font-light text-black/70">
                        <li>
                          <Link
                            href="/solutions/brand-gamification"
                            onMouseEnter={() =>
                              setSolPreview({
                              badge: "BRAND ODYSSEY",
                              title: "The Messi Experience",
                              desc: "Interactive motion-tracked brand installations, competitive stadium challenges, and fan journey experiences.",
                              href: "/solutions/brand-gamification",
                              img: "https://momentfactory.com/cdn/shop/files/TME_MomentFactory_THELASTCHANCE_5.jpg",
                            })
                            }
                            className="hover:text-black hover:underline block py-0.5 transition-colors"
                          >
                            • Brand Gamification
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/solutions/motion-games"
                            onMouseEnter={() =>
                              setSolPreview({
                              badge: "ACTIVE GAMING",
                              title: "ARcade Motion Arena",
                              desc: "Multi-player active games where floor and wall projections react to physical bodily movement with zero wearables.",
                              href: "/solutions/motion-games",
                              img: "https://momentfactory.com/cdn/shop/files/SQCagARcade_Montreal_MomentFactory_-9.jpg",
                            })
                            }
                            className="hover:text-black hover:underline block py-0.5 transition-colors"
                          >
                            • Motion Games
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* Right Dynamic Interactive Preview Card */}
                  <Link
                    href={solPreview.href}
                    className="col-span-5 rounded-xl p-4 bg-black text-white flex flex-col justify-between relative overflow-hidden group/card transition-all duration-300 border border-black/20 shadow-xl cursor-pointer"
                  >
                    <div className="w-full h-36 rounded-lg overflow-hidden relative border border-white/10 shrink-0 bg-gray-900">
                      <SafeImage
                        src={solPreview.img}
                        alt={solPreview.title}
                        className="w-full h-full object-cover group-hover/card:scale-105 transition-transform duration-700"
                        containerClassName="w-full h-full"
                      />
                      <div className="absolute top-2 left-2 z-10">
                        <span className="text-[9px] font-bold tracking-widest text-white bg-black/80 backdrop-blur-md px-2.5 py-1 rounded-full uppercase border border-white/20 flex items-center gap-1">
                          <Zap className="w-3 h-3 text-white" />
                          <span>{solPreview.badge}</span>
                        </span>
                      </div>
                    </div>

                    <div className="pt-3 space-y-1.5 flex-1 flex flex-col justify-between">
                      <div>
                        <h4 className="text-white">
                          {solPreview.title}
                        </h4>
                        <p className="text-[11px] text-white/70 font-light leading-relaxed line-clamp-2 mt-1">
                          {solPreview.desc}
                        </p>
                      </div>

                      <div className="pt-2 inline-flex items-center gap-1.5 text-[11px] font-bold text-white group-hover/card:text-gray-200">
                        <span>Explore Technology</span>
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
                className={`flex items-center gap-1.5 text-[12px] uppercase font-bold tracking-[0.08em] transition-colors duration-200 py-1 ${
                  pathname.startsWith("/industries")
                    ? `${navTextActive} underline underline-offset-4`
                    : `${navTextMuted} hover:underline underline-offset-4`
                }`}
              >
                <span>Industries</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 group-hover:rotate-180 ${isDarkHero ? 'text-white/70' : 'text-[var(--text-secondary)]'}`} />
              </Link>

              {/* Full-bleed MegaMenu Tray */}
              <div className="absolute top-full left-0 w-screen bg-white shadow-2xl border-t border-black/10 opacity-0 -translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300 ease-out z-50 before:content-[''] before:absolute before:-top-6 before:left-0 before:w-screen before:h-6">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                  <div className="grid grid-cols-12 gap-12">
                    <div className="col-span-7 grid grid-cols-2 gap-4">
                    <Link
                      href="/industries/retail-showrooms"
                      onMouseEnter={() =>
                        setIndPreview({
                          badge: "RETAIL & SHOWROOMS",
                          title: "Storefront Activations",
                          desc: "Interactive window projections & touchless product showcases boosting store foot-traffic.",
                          href: "/industries/retail-showrooms",
                          img: "https://momentfactory.com/cdn/shop/files/Aura_EgliseSaint-Roch_MomentFactory__DSC4360.png",
                        })
                      }
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
                        <div className="text-[11px] text-gray-500 font-light leading-snug">
                          Storefronts & brand activations
                        </div>
                      </div>
                    </Link>

                    <Link
                      href="/industries/education"
                      onMouseEnter={() =>
                        setIndPreview({
                          badge: "EDUCATION & STEM",
                          title: "Interactive Classrooms",
                          desc: "Active movement-based projection floors for collaborative STEM labs & schools.",
                          href: "/industries/education",
                          img: "https://momentfactory.com/cdn/shop/files/Aura_EgliseSaint-Roch_MomentFactory__DSC4360.png",
                        })
                      }
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
                        <div className="text-[11px] text-gray-500 font-light leading-snug">
                          Classrooms & STEM labs
                        </div>
                      </div>
                    </Link>

                    <Link
                      href="/industries/healthcare"
                      onMouseEnter={() =>
                        setIndPreview({
                          badge: "HEALTHCARE",
                          title: "Therapeutic Sensory Rooms",
                          desc: "Pediatric rehabilitation & sensory decompression rooms with soothing motion floor projection.",
                          href: "/industries/healthcare",
                          img: "https://momentfactory.com/cdn/shop/files/Aura_EgliseSaint-Roch_MomentFactory__DSC4360.png",
                        })
                      }
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
                        <div className="text-[11px] text-gray-500 font-light leading-snug">
                          Sensory therapy & pediatric care
                        </div>
                      </div>
                    </Link>

                    <Link
                      href="/industries/museums-culture"
                      onMouseEnter={() =>
                        setIndPreview({
                          badge: "MUSEUMS & EXPOS",
                          title: "Cultural Installations",
                          desc: "Architectural light mapping, cathedral projection, and 360-degree exhibit tunnels.",
                          href: "/industries/museums-culture",
                          img: "https://momentfactory.com/cdn/shop/files/Aura_EgliseSaint-Roch_MomentFactory__DSC4360.png",
                        })
                      }
                      className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-gray-100 transition-all duration-200 group/item"
                    >
                      <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center text-black shrink-0 group-hover/item:bg-black group-hover/item:text-white transition-all">
                        <Landmark className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-black flex items-center gap-1">
                          <span>Expo & Culture</span>
                          <ArrowRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all" />
                        </div>
                        <div className="text-[11px] text-gray-500 font-light leading-snug">
                          Museums, exhibitions & venues
                        </div>
                      </div>
                    </Link>
                    
                    <Link href="/industries" className="col-span-1 md:col-span-2 text-center p-3 mt-2 rounded-xl bg-gray-50 hover:bg-gray-100 text-xs font-bold uppercase tracking-widest transition-colors flex items-center justify-center gap-2">
                      View All 8 Industries <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>

                  {/* Dynamic Industry Card Preview */}
                  <Link
                    href={indPreview.href}
                    className="col-span-5 rounded-xl p-4 bg-black text-white flex flex-col justify-between relative overflow-hidden group/card transition-all duration-300 border border-black/20 shadow-xl cursor-pointer"
                  >
                    <div className="w-full h-32 rounded-lg overflow-hidden relative border border-white/10 shrink-0 bg-gray-900">
                      <SafeImage
                        src={indPreview.img}
                        alt={indPreview.title}
                        className="w-full h-full object-cover group-hover/card:scale-105 transition-transform duration-700"
                        containerClassName="w-full h-full"
                      />
                      <div className="absolute top-2 left-2 z-10">
                        <span className="text-[9px] font-bold tracking-widest text-white bg-black/80 backdrop-blur-md px-2.5 py-1 rounded-full uppercase border border-white/20">
                          {indPreview.badge}
                        </span>
                      </div>
                    </div>

                    <div className="pt-3 space-y-1.5 flex-1 flex flex-col justify-between">
                      <div>
                        <h4 className="text-white">
                          {indPreview.title}
                        </h4>
                        <p className="text-[11px] text-white/70 font-light leading-relaxed line-clamp-2 mt-1">
                          {indPreview.desc}
                        </p>
                      </div>

                      <div className="pt-2 inline-flex items-center gap-1.5 text-[11px] font-bold text-white group-hover/card:text-gray-200">
                        <span>Explore Sector</span>
                        <ArrowRight className="w-3 h-3 group-hover/card:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>

            {/* 3. PROJECTS (DIRECT LINK - NO DROPDOWN) */}
            <Link
              href="/projects"
              className={`text-[12px] uppercase font-bold tracking-[0.08em] transition-colors duration-200 py-1 ${
                pathname.startsWith("/projects")
                  ? `${navTextActive} underline underline-offset-4`
                  : `${navTextMuted} hover:underline underline-offset-4`
              }`}
            >
              Projects
            </Link>

            {/* 4. RESOURCES (MEGAMENU / DROPDOWN WITH FAILSAFE HOVER BRIDGE) */}
            <div className="relative group py-2">
              <Link
                href="/blogs"
                className={`flex items-center gap-1.5 text-[12px] uppercase font-bold tracking-[0.08em] transition-colors duration-200 py-1 ${
                  pathname.startsWith("/blogs") || pathname === "/lab"
                    ? `${navTextActive} underline underline-offset-4`
                    : `${navTextMuted} hover:underline underline-offset-4`
                }`}
              >
                <span>Resources</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 group-hover:rotate-180 ${isDarkHero ? 'text-white/70' : 'text-[var(--text-secondary)]'}`} />
              </Link>

              {/* Resources Dropdown Menu with Hover Bridge */}
              <div className="absolute top-[calc(100%-8px)] left-1/2 -translate-x-1/2 pt-4 z-50 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-200 ease-out before:content-[''] before:absolute before:-top-4 before:-left-12 before:-right-12 before:h-8">
                <div className="w-[320px] rounded-2xl p-4 shadow-2xl border border-black/10 bg-white space-y-1 relative">
                  {/* Pointer Caret */}
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white border-l border-t border-black/10 rotate-45 rounded-tl-sm z-[-1]" />
                  <Link
                    href="/lab"
                    className="flex items-center justify-between p-3 rounded-xl hover:bg-gray-100 transition-colors text-sm text-black/80 hover:text-black group/ritem"
                  >
                    <div className="flex items-center gap-2">
                      <Terminal className="w-3.5 h-3.5 text-black/60" />
                      <span>Sensor Fusion Lab</span>
                    </div>
                    <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover/ritem:opacity-100 transition-opacity text-black" />
                  </Link>
                  <Link
                    href="/blogs"
                    className="flex items-center justify-between p-3 rounded-xl hover:bg-gray-100 transition-colors text-sm text-black/80 hover:text-black group/ritem"
                  >
                    <div className="flex items-center gap-2">
                      <BookOpen className="w-3.5 h-3.5 text-black/60" />
                      <span>Latest Blogs & Insights</span>
                    </div>
                    <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover/ritem:opacity-100 transition-opacity text-black" />
                  </Link>
                  <Link
                    href="/blogs/future-of-motion-interactive-projection"
                    className="flex items-center justify-between p-3 rounded-xl hover:bg-gray-100 transition-colors text-sm text-black/80 hover:text-black group/ritem"
                  >
                    <div className="flex items-center gap-2">
                      <FileText className="w-3.5 h-3.5 text-black/60" />
                      <span>Future of Motion Projection</span>
                    </div>
                    <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover/ritem:opacity-100 transition-opacity text-black" />
                  </Link>
                  <Link
                    href="/blogs/how-ai-is-redefining-interactive-experiences"
                    className="flex items-center justify-between p-3 rounded-xl hover:bg-gray-100 transition-colors text-sm text-black/80 hover:text-black group/ritem"
                  >
                    <div className="flex items-center gap-2">
                      <Cpu className="w-3.5 h-3.5 text-black/60" />
                      <span>AI in Interactive Tech</span>
                    </div>
                    <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover/ritem:opacity-100 transition-opacity text-black" />
                  </Link>
                  <Link
                    href="/blogs/choosing-the-right-interactive-solution-for-your-space"
                    className="flex items-center justify-between p-3 rounded-xl hover:bg-gray-100 transition-colors text-sm text-black/80 hover:text-black group/ritem"
                  >
                    <div className="flex items-center gap-2">
                      <Sparkles className="w-3.5 h-3.5 text-black/60" />
                      <span>Buyer's Technology Guide</span>
                    </div>
                    <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover/ritem:opacity-100 transition-opacity text-black" />
                  </Link>
                </div>
              </div>
            </div>

            {/* 5. COMPANY MEGAMENU */}
            <div className="relative group py-2">
              <button
                className={`flex items-center gap-1.5 text-[12px] uppercase font-bold tracking-[0.08em] transition-colors duration-200 cursor-pointer py-1 ${
                  pathname.startsWith("/about") || pathname.startsWith("/contact")
                    ? `${navTextActive} underline underline-offset-4`
                    : `${navTextMuted} hover:underline underline-offset-4`
                }`}
              >
                <span>Company</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 group-hover:rotate-180 ${isDarkHero ? 'text-white/70' : 'text-[var(--text-secondary)]'}`} />
              </button>

              {/* Company Dropdown with Hover Bridge */}
              <div className="absolute top-[calc(100%-8px)] left-1/2 -translate-x-1/2 pt-4 z-50 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-200 ease-out before:content-[''] before:absolute before:-top-4 before:-left-12 before:-right-12 before:h-8">
                <div className="w-[240px] rounded-2xl p-3 shadow-2xl border border-black/10 bg-white space-y-1 relative">
                  {/* Pointer Caret */}
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white border-l border-t border-black/10 rotate-45 rounded-tl-sm z-[-1]" />
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
              className="px-6 py-2.5 rounded-full text-sm font-extrabold uppercase tracking-wider text-white bg-black hover:bg-neutral-800 transition-all duration-200 active:scale-95 shadow-md shadow-black/30 flex items-center gap-2"
            >
              <span>Book a Demo</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
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

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[76px] bg-white border-b border-black/10 p-6 shadow-xl transition-all duration-200 max-h-[85vh] overflow-y-auto space-y-6">
          <div className="flex flex-col space-y-4">
            <div className="border-b border-black/10 pb-3">
              <span className="text-sm uppercase text-black/50 block mb-2 font-bold">Solutions</span>
              <div className="pl-3 space-y-2 text-xs text-black/80 font-light">
                <div>
                  <Link href="/solutions/interactive-spaces" onClick={() => setMobileMenuOpen(false)} className="font-bold text-black block py-0.5">
                    Interactive Spaces
                  </Link>
                  <div className="pl-2 space-y-0.5 text-black/70">
                    <Link href="/solutions/interactive-floor" onClick={() => setMobileMenuOpen(false)} className="block py-0.5 hover:text-black">• Interactive Floor</Link>
                    <Link href="/solutions/interactive-wall" onClick={() => setMobileMenuOpen(false)} className="block py-0.5 hover:text-black">• Interactive Wall</Link>
                    <Link href="/solutions/interactive-ceiling" onClick={() => setMobileMenuOpen(false)} className="block py-0.5 hover:text-black">• Interactive Ceiling</Link>
                    <Link href="/solutions/interactive-window" onClick={() => setMobileMenuOpen(false)} className="block py-0.5 hover:text-black">• Interactive Window</Link>
                    <Link href="/solutions/interactive-mirror-table" onClick={() => setMobileMenuOpen(false)} className="block py-0.5 hover:text-black">• Interactive Mirror / Table</Link>
                  </div>
                </div>
                <div>
                  <Link href="/solutions/immersive-environment" onClick={() => setMobileMenuOpen(false)} className="font-bold text-black block py-0.5">
                    Immersive Environment
                  </Link>
                  <div className="pl-2 space-y-0.5 text-black/70">
                    <Link href="/solutions/projection-mapping" onClick={() => setMobileMenuOpen(false)} className="block py-0.5 hover:text-black">• Projection Mapping</Link>
                    <Link href="/solutions/immersive-room" onClick={() => setMobileMenuOpen(false)} className="block py-0.5 hover:text-black">• 360° Immersive Room</Link>
                    <Link href="/solutions/led-tunnel" onClick={() => setMobileMenuOpen(false)} className="block py-0.5 hover:text-black">• LED Tunnel</Link>
                    <Link href="/solutions/holographic-display" onClick={() => setMobileMenuOpen(false)} className="block py-0.5 hover:text-black">• Holographic Display</Link>
                  </div>
                </div>
                <div>
                  <Link href="/solutions/ai-experience" onClick={() => setMobileMenuOpen(false)} className="font-bold text-black block py-0.5">
                    AI Experience
                  </Link>
                  <div className="pl-2 space-y-0.5 text-black/70">
                    <Link href="/solutions/ai-avatar-photobooth" onClick={() => setMobileMenuOpen(false)} className="block py-0.5 hover:text-black">• AI Avatar / Photo Booth</Link>
                  </div>
                </div>
                <div>
                  <Link href="/solutions/solution-engagement" onClick={() => setMobileMenuOpen(false)} className="font-bold text-black block py-0.5">
                    Solution Engagement
                  </Link>
                  <div className="pl-2 space-y-0.5 text-black/70">
                    <Link href="/solutions/brand-gamification" onClick={() => setMobileMenuOpen(false)} className="block py-0.5 hover:text-black">• Brand Gamification</Link>
                    <Link href="/solutions/motion-games" onClick={() => setMobileMenuOpen(false)} className="block py-0.5 hover:text-black">• Motion Games</Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-b border-black/10 pb-3">
              <span className="text-sm uppercase text-black/50 block mb-2 font-bold">Industries</span>
              <div className="pl-3 space-y-1 text-sm text-black/80 font-light">
                <Link href="/industries/retail-showrooms" onClick={() => setMobileMenuOpen(false)} className="block py-1 hover:text-black">
                  • Retail (Storefronts & brand activations)
                </Link>
                <Link href="/industries/retail-showrooms" onClick={() => setMobileMenuOpen(false)} className="block py-1 hover:text-black">• Retail & Showrooms</Link>
                <Link href="/industries/education" onClick={() => setMobileMenuOpen(false)} className="block py-1 hover:text-black">• Education</Link>
                <Link href="/industries/healthcare" onClick={() => setMobileMenuOpen(false)} className="block py-1 hover:text-black">• Healthcare</Link>
                <Link href="/industries/museums-culture" onClick={() => setMobileMenuOpen(false)} className="block py-1 hover:text-black">• Museums & Culture</Link>
                <Link href="/industries/corporate" onClick={() => setMobileMenuOpen(false)} className="block py-1 hover:text-black">• Corporate</Link>
                <Link href="/industries/public-spaces" onClick={() => setMobileMenuOpen(false)} className="block py-1 hover:text-black">• Public Spaces</Link>
                <Link href="/industries/entertainment" onClick={() => setMobileMenuOpen(false)} className="block py-1 hover:text-black">• Entertainment</Link>
                <Link href="/industries/hospitality" onClick={() => setMobileMenuOpen(false)} className="block py-1 hover:text-black">• Hospitality</Link>
              </div>
            </div>

            <div className="border-b border-black/10 pb-3 flex flex-col gap-3">
              <Link href="/projects" onClick={() => setMobileMenuOpen(false)} className="text-sm uppercase text-black block font-bold">
                Projects
              </Link>
            </div>

            <div className="border-b border-black/10 pb-3">
              <span className="text-sm uppercase text-black/50 block mb-2 font-bold">Resources</span>
              <div className="pl-3 space-y-1 text-sm text-black/80 font-light">
                <Link href="/lab" onClick={() => setMobileMenuOpen(false)} className="block py-1 hover:text-black font-bold">
                  • Sensor Fusion Lab
                </Link>
                <Link href="/blogs" onClick={() => setMobileMenuOpen(false)} className="block py-1 hover:text-black font-bold">
                  • Latest Blogs & Insights
                </Link>
                <Link href="/blogs/future-of-motion-interactive-projection" onClick={() => setMobileMenuOpen(false)} className="block py-1 hover:text-black">
                  • Future of Motion Projection
                </Link>
                <Link href="/blogs/how-ai-is-redefining-interactive-experiences" onClick={() => setMobileMenuOpen(false)} className="block py-1 hover:text-black">
                  • AI in Interactive Tech
                </Link>
                <Link href="/blogs/choosing-the-right-interactive-solution-for-your-space" onClick={() => setMobileMenuOpen(false)} className="block py-1 hover:text-black">
                  • Buyer's Technology Guide
                </Link>
              </div>
            </div>

            <div className="border-b border-black/10 pb-3">
              <span className="text-sm uppercase text-black/50 block mb-2 font-bold">Company</span>
              <div className="pl-3 space-y-1 text-sm text-black/80 font-light">
                <Link href="/about" onClick={() => setMobileMenuOpen(false)} className="block py-1 hover:text-black font-bold">
                  • About Us
                </Link>
                <Link href="/contact" onClick={() => setMobileMenuOpen(false)} className="block py-1 hover:text-black">
                  • Contact Us
                </Link>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="/contact"
                className="w-full text-center py-4 rounded-full font-bold text-sm uppercase tracking-wider text-white bg-black block"
                onClick={() => setMobileMenuOpen(false)}
              >
                Book a Demo
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
