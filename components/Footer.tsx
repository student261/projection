import Link from "next/link";
import { Sparkles, ArrowRight } from "lucide-react";
import { SITE_CONTACT } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0b] text-white border-t border-white/10 pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Layout */}
        <div className="flex flex-col lg:flex-row justify-between gap-16 mb-24">
          
          {/* Left: Brand Identity & Manifesto */}
          <div className="lg:w-1/3 flex flex-col justify-between">
            <div className="space-y-6">
              <Link href="/" className="inline-flex items-center gap-2 group">
                <Sparkles className="w-5 h-5 text-white" />
                <span className="text-xl font-bold tracking-tight text-white">
                  PROJECTION
                </span>
              </Link>
              
              <p className="text-[14px] text-white/60 leading-relaxed max-w-sm pr-4">
                Designing and engineering spatial motion projection, AI interactive environments, and 360° digital destinations worldwide.
              </p>
            </div>

            {/* Newsletter / Contact Prompt (Harmonic style) */}
            <div className="mt-12 space-y-4">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40 block">
                STAY UPDATED
              </span>
              <div className="flex items-center gap-0 max-w-xs border border-white/10 rounded-lg overflow-hidden focus-within:border-white/30 transition-colors">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="bg-transparent px-4 py-3 text-[13px] text-white placeholder:text-white/30 w-full focus:outline-none"
                />
                <button className="px-4 py-3 bg-white/5 hover:bg-white/10 text-white transition-colors">
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Right: Sparse Link Grid (Webflow aesthetic) */}
          <div className="lg:w-2/3 grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12">
            
            {/* 1. Solutions */}
            <div>
              <h4 className="text-[10px] uppercase tracking-[0.2em] text-white/40 mb-6">
                Solutions
              </h4>
              <ul className="space-y-4">
                <li><Link href="/solutions#interactive" className="text-[14px] font-medium text-white/70 hover:text-white transition-colors">Interactive Spaces</Link></li>
                <li><Link href="/solutions#immersive" className="text-[14px] font-medium text-white/70 hover:text-white transition-colors">Immersive Environments</Link></li>
                <li><Link href="/solutions#ai" className="text-[14px] font-medium text-white/70 hover:text-white transition-colors">AI Experiences</Link></li>
                <li><Link href="/solutions#smart" className="text-[14px] font-medium text-white/70 hover:text-white transition-colors">Smart Engagement</Link></li>
              </ul>
            </div>

            {/* 2. Industries */}
            <div>
              <h4 className="text-[10px] uppercase tracking-[0.2em] text-white/40 mb-6">
                Industries
              </h4>
              <ul className="space-y-4">
                <li><Link href="/industries/education" className="text-[14px] font-medium text-white/70 hover:text-white transition-colors">Education</Link></li>
                <li><Link href="/industries/museums-culture" className="text-[14px] font-medium text-white/70 hover:text-white transition-colors">Museums & Culture</Link></li>
                <li><Link href="/industries/retail-showrooms" className="text-[14px] font-medium text-white/70 hover:text-white transition-colors">Retail & Showrooms</Link></li>
                <li><Link href="/industries/healthcare" className="text-[14px] font-medium text-white/70 hover:text-white transition-colors">Healthcare</Link></li>
              </ul>
            </div>

            {/* 3. Company */}
            <div>
              <h4 className="text-[10px] uppercase tracking-[0.2em] text-white/40 mb-6">
                Company
              </h4>
              <ul className="space-y-4">
                <li><Link href="/about" className="text-[14px] font-medium text-white/70 hover:text-white transition-colors">About Us</Link></li>
                <li><Link href="/about#careers" className="text-[14px] font-medium text-white/70 hover:text-white transition-colors flex items-center gap-2">Careers <span className="text-[9px] bg-white/10 px-1.5 py-0.5 rounded text-white">HIRING</span></Link></li>
                <li><Link href="/contact" className="text-[14px] font-medium text-white/70 hover:text-white transition-colors">Contact</Link></li>
                <li><Link href="/blogs" className="text-[14px] font-medium text-white/70 hover:text-white transition-colors">News & Lab</Link></li>
              </ul>
            </div>

            {/* 4. Resources */}
            <div>
              <h4 className="text-[10px] uppercase tracking-[0.2em] text-white/40 mb-6">
                Resources
              </h4>
              <ul className="space-y-4">
                <li><Link href="/#faqs" className="text-[14px] font-medium text-white/70 hover:text-white transition-colors">FAQs</Link></li>
                <li><Link href="/projects" className="text-[14px] font-medium text-white/70 hover:text-white transition-colors">Case Studies</Link></li>
                <li><a href={`mailto:${SITE_CONTACT.email}`} className="text-[14px] font-medium text-white/70 hover:text-white transition-colors">Support</a></li>
              </ul>
            </div>

          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6 border-t border-white/10">
          <div className="flex flex-wrap items-center justify-center gap-6 lg:gap-8">
            <Link href="/" className="inline-flex items-center gap-1.5 opacity-50 hover:opacity-100 transition-opacity">
               <Sparkles className="w-3.5 h-3.5" />
            </Link>
          </div>
          <div className="text-[13px] font-medium text-white/40">
            © {new Date().getFullYear()} PROJECTION.
          </div>
        </div>
        
      </div>
    </footer>
  );
}
