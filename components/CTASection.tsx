"use client";

import { motion } from "framer-motion";
import { ArrowRight, MessageSquare } from "lucide-react";
import Link from "next/link";
import SafeImage from "@/components/SafeImage";

export default function CTASection() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden bg-black text-white">
      {/* Background Media */}
      <div className="absolute inset-0 z-0">
        <SafeImage
          src="https://momentfactory.com/cdn/shop/files/preview_images/0facee35b3b047cea1c88598a5a3c20a.thumbnail.0000000000_500x.jpg"
          alt="Interactive Vision Background"
          className="w-full h-full object-cover object-center opacity-40 filter brightness-75"
          containerClassName="w-full h-full"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mx-auto space-y-8"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight text-white">
            Ready to bring your interactive vision to life?
          </h2>
          <p className="text-white/80 font-light text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
            Tell us what you have in mind, and we&apos;ll help turn your idea into a working interactive experience.
          </p>
          
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              href="/contact" 
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white text-black font-bold text-sm uppercase tracking-widest transition-transform duration-300 hover:scale-105"
            >
              <span>Start Your Project</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            
            <Link 
              href="/contact" 
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold text-sm uppercase tracking-widest transition-all duration-300 hover:bg-white/20 hover:scale-105"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Discuss Options</span>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
