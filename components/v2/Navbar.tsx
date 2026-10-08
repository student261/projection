"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "/v2", targetId: "top" },
    { label: "Solutions", href: "/solutions", targetId: "what-we-create" },
    { label: "Industries", href: "/industries", targetId: "where-it-can-work" },
    { label: "Projects", href: "/projects", targetId: "see-it-in-real-spaces" },
    { label: "About", href: "/about", targetId: "why-choose-us" },
    { label: "Contact", href: "/contact", targetId: "final-cta" },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string, targetId?: string) => {
    if (pathname === "/v2" && targetId) {
      e.preventDefault();
      setMobileMenuOpen(false);
      if (targetId === "top") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        const el = document.getElementById(targetId);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      }
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md border-b border-black/[0.08] py-3.5 shadow-[0_4px_20px_rgba(0,0,0,0.05)]"
            : "bg-white/80 backdrop-blur-md border-b border-black/[0.05] py-4 sm:py-5"
        }`}
      >
        <div className="max-w-7xl 2xl:max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link href="/v2" className="flex items-center gap-2 group outline-none">
            <span className="text-xl sm:text-2xl font-black tracking-widest text-black uppercase group-hover:text-cyan-600 transition-colors">
              INTERACT
            </span>
          </Link>

          {/* Desktop Center Links */}
          <nav className="hidden md:flex items-center gap-7 lg:gap-9">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href, link.targetId)}
                  className={`text-xs lg:text-sm tracking-wide transition-colors cursor-pointer ${
                    isActive
                      ? "text-black font-semibold"
                      : "text-slate-600 hover:text-black font-medium"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Right: Action Button + Menu */}
          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2 rounded-full bg-neutral-950 text-white text-xs font-semibold tracking-wider hover:bg-neutral-800 transition-all shadow-sm cursor-pointer"
            >
              <span>Start a Project</span>
            </Link>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
              className="md:hidden w-10 h-10 rounded-xl bg-neutral-100 hover:bg-neutral-200 border border-neutral-200 text-neutral-800 flex items-center justify-center transition-all cursor-pointer shadow-sm"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Dropdown Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white/98 backdrop-blur-2xl pt-24 px-6 pb-10 flex flex-col justify-between md:hidden animate-in fade-in duration-200">
          <div className="flex flex-col space-y-4">
            <span className="text-xs uppercase tracking-widest text-cyan-600 font-semibold mb-2">
              Navigation
            </span>
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href, link.targetId)}
                className="text-2xl font-bold text-slate-900 hover:text-cyan-600 transition-colors flex items-center justify-between py-2 border-b border-slate-100"
              >
                <span>{link.label}</span>
                <ArrowRight className="w-5 h-5 text-slate-400" />
              </Link>
            ))}
          </div>

          <div className="pt-6 border-t border-slate-200 flex flex-col gap-3">
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-3.5 rounded-full bg-black text-white font-semibold text-center text-sm hover:bg-slate-800 transition-colors shadow-lg"
            >
              Start a Project
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
