"use client";

import Link from "next/link";
import { Sparkles, ArrowRight } from "lucide-react";
import { SITE_CONTACT } from "@/lib/constants";
import { useEffect, useRef, useState } from "react";

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null);
  const [footerHeight, setFooterHeight] = useState(520);

  useEffect(() => {
    const updateHeight = () => {
      if (footerRef.current) {
        setFooterHeight(footerRef.current.offsetHeight);
      }
    };
    
    updateHeight();
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  return (
    <div 
      className="relative w-full overflow-hidden" 
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      {/* Dynamic Spacer */}
      <div 
        className="relative w-full pointer-events-none hidden md:block" 
        style={{ height: `${footerHeight}px` }} 
      />

      <footer 
        ref={footerRef}
        className="md:fixed bottom-0 left-0 w-full min-h-[480px] lg:min-h-[520px] bg-[#0a0a0b] text-white border-t border-white/10 pt-16 lg:pt-20 pb-12 z-0 flex flex-col justify-between"
      >
        <div className="max-w-7xl 2xl:max-w-[1536px] 3xl:max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-8 w-full flex-1 flex flex-col justify-between">
            
            {/* Main Footer Layout */}
            <div className="flex flex-col lg:flex-row justify-between gap-12 lg:gap-16 mb-12">
              
              {/* Left: Brand Identity & Manifesto */}
              <div className="lg:w-1/3 flex flex-col justify-between">
                <div className="space-y-4">
                  <Link href="/" className="inline-flex items-center gap-2 group">
                    <Sparkles className="w-5 h-5 text-white" />
                    <span className="text-xl font-bold tracking-tight text-white">
                      PROJECTION
                    </span>
                  </Link>
                  
                  <p className="text-[13px] text-white/60 leading-relaxed max-w-sm pr-4">
                    Designing and engineering spatial motion projection, AI interactive environments, and 360° digital destinations worldwide.
                  </p>
                </div>

                {/* Newsletter / Contact Prompt (Harmonic style) */}
                <div className="mt-8 space-y-3">
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40 block">
                    STAY UPDATED
                  </span>
                  <div className="flex items-center gap-0 max-w-xs border border-white/10 rounded-lg overflow-hidden focus-within:border-white/30 transition-colors">
                    <input 
                      type="email" 
                      placeholder="Enter your email" 
                      className="bg-transparent px-4 py-2.5 text-base sm:text-[13px] text-white placeholder:text-white/30 w-full focus:outline-none"
                    />
                    <button className="px-4 py-2.5 bg-white/5 hover:bg-white/10 text-white transition-colors cursor-pointer">
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Right: Sparse Link Grid (Webflow aesthetic) */}
              <div className="lg:w-2/3 grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-10">
                
                {/* 1. Solutions */}
                <div>
                  <h4 className="text-[10px] uppercase tracking-[0.2em] text-white/40 mb-5">
                    Solutions
                  </h4>
                  <ul className="space-y-3">
                    <li><Link href="/solutions#interactive" className="text-sm font-medium text-white/70 hover:text-white transition-colors">Interactive Spaces</Link></li>
                    <li><Link href="/solutions#immersive" className="text-sm font-medium text-white/70 hover:text-white transition-colors">Immersive Environments</Link></li>
                    <li><Link href="/solutions#ai" className="text-sm font-medium text-white/70 hover:text-white transition-colors">AI Experiences</Link></li>
                    <li><Link href="/solutions#smart" className="text-sm font-medium text-white/70 hover:text-white transition-colors">Smart Engagement</Link></li>
                  </ul>
                </div>

                {/* 2. Industries */}
                <div>
                  <h4 className="text-[10px] uppercase tracking-[0.2em] text-white/40 mb-5">
                    Industries
                  </h4>
                  <ul className="space-y-3">
                    <li><Link href="/industries/education" className="text-sm font-medium text-white/70 hover:text-white transition-colors">Education</Link></li>
                    <li><Link href="/industries/museums-culture" className="text-sm font-medium text-white/70 hover:text-white transition-colors">Museums & Culture</Link></li>
                    <li><Link href="/industries/retail-showrooms" className="text-sm font-medium text-white/70 hover:text-white transition-colors">Retail & Showrooms</Link></li>
                    <li><Link href="/industries/healthcare" className="text-sm font-medium text-white/70 hover:text-white transition-colors">Healthcare</Link></li>
                    <li><Link href="/industries/corporate" className="text-sm font-medium text-white/70 hover:text-white transition-colors">Corporate</Link></li>
                    <li><Link href="/industries/public-spaces" className="text-sm font-medium text-white/70 hover:text-white transition-colors">Public Spaces</Link></li>
                    <li><Link href="/industries/entertainment" className="text-sm font-medium text-white/70 hover:text-white transition-colors">Entertainment</Link></li>
                    <li><Link href="/industries/hospitality" className="text-sm font-medium text-white/70 hover:text-white transition-colors">Hospitality</Link></li>
                  </ul>
                </div>

                {/* 3. Company */}
                <div>
                  <h4 className="text-[10px] uppercase tracking-[0.2em] text-white/40 mb-5">
                    Company
                  </h4>
                  <ul className="space-y-3">
                    <li><Link href="/about" className="text-sm font-medium text-white/70 hover:text-white transition-colors">About Us</Link></li>
                    <li><Link href="/about#careers" className="text-sm font-medium text-white/70 hover:text-white transition-colors flex items-center gap-2">Careers <span className="text-[9px] bg-white/10 px-1.5 py-0.5 rounded text-white">HIRING</span></Link></li>
                    <li><Link href="/contact" className="text-sm font-medium text-white/70 hover:text-white transition-colors">Contact</Link></li>
                    <li><Link href="/blogs" className="text-sm font-medium text-white/70 hover:text-white transition-colors">News</Link></li>
                  </ul>
                </div>

                {/* 4. Resources */}
                <div>
                  <h4 className="text-[10px] uppercase tracking-[0.2em] text-white/40 mb-5">
                    Resources
                  </h4>
                  <ul className="space-y-3">
                    <li><Link href="/#faqs" className="text-sm font-medium text-white/70 hover:text-white transition-colors">FAQs</Link></li>
                    <li><Link href="/projects" className="text-sm font-medium text-white/70 hover:text-white transition-colors">Case Studies</Link></li>
                    <li><a href={`mailto:${SITE_CONTACT.email}`} className="text-sm font-medium text-white/70 hover:text-white transition-colors">Support</a></li>
                  </ul>
                </div>

              </div>
            </div>

            <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-4 border-t border-white/10">
              <div className="flex flex-wrap items-center justify-center gap-6 lg:gap-8">
                <Link href="/" className="inline-flex items-center gap-1.5 opacity-50 hover:opacity-100 transition-opacity" aria-label="Home">
                   <Sparkles className="w-3.5 h-3.5" />
                </Link>
                <Link href="/privacy" className="text-[12px] text-white/50 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="text-[12px] text-white/50 hover:text-white transition-colors">
                  Terms of Service
                </Link>
                <Link href="/cookies" className="text-[12px] text-white/50 hover:text-white transition-colors">
                  Cookie Policy
                </Link>
              </div>
              <div className="text-[12px] font-medium text-white/40">
                © {new Date().getFullYear()} PROJECTION.
              </div>
            </div>
            
          </div>
        </footer>
    </div>
  );
}
