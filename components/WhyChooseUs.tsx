"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sliders, Cpu, Award, Workflow, Layers3, Headphones } from "lucide-react";
import SafeImage from "@/components/SafeImage";

const whyUsCards = [
  {
    id: "custom-solutions",
    icon: Sliders,
    title: "Custom Solutions",
    desc: "Every project is built around your space, audience, requirements, and goals.",
    img: "https://momentfactory.com/cdn/shop/files/Aura_EgliseSaint-Roch_MomentFactory__DSC4360.png",
  },
  {
    id: "advanced-tech",
    icon: Cpu,
    title: "Advanced Interactive Technology",
    desc: "Use the latest AI, motion tracking, projection mapping, and interactive technologies in your space.",
    img: "https://momentfactory.com/cdn/shop/files/6D9A8671-WS.jpg",
  },
  {
    id: "industry-expertise",
    icon: Award,
    title: "Industry Expertise",
    desc: "Our experience covers education, healthcare, retail, museums, hospitality, entertainment, and more.",
    img: "https://momentfactory.com/cdn/shop/files/TLX04130-Moment_Factory_Originals_Digital_Art_Experiences__Brainstorm-WS.jpg",
  },
  {
    id: "end-to-end",
    icon: Workflow,
    title: "End-to-End Delivery",
    desc: "From the first conversation and design to installation, training, and ongoing support, we handle the complete process.",
    img: "https://momentfactory.com/cdn/shop/files/Moment_Factory_Changi_Experience_Public_Spaces_DSC09469-WS.jpg",
  },
  {
    id: "scalable",
    icon: Layers3,
    title: "Scalable & Future-Ready",
    desc: "Start with what you need today and add new features, content, and technologies as your requirements grow.",
    img: "https://momentfactory.com/cdn/shop/files/Moment_Factory_Public_Spaces_Shinjuku_Station_IMG_0457-Modifier-WS.jpg",
  },
  {
    id: "dedicated-support",
    icon: Headphones,
    title: "Dedicated Support",
    desc: "Get technical assistance, updates, maintenance, and ongoing support to keep your experience running smoothly.",
    img: "https://momentfactory.com/cdn/shop/files/AuraInvalides_MomentFactory_MouvementIII_HD-WS.jpg",
  },
];

export default function WhyChooseUs() {
  const [hoveredIndex, setHoveredIndex] = useState<number>(0);

  return (
    <section className="py-10 lg:py-12 bg-white border-t border-gray-100 overflow-hidden text-black relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-8 lg:mb-10 max-w-4xl">
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-[9px] font-bold uppercase tracking-[0.3em] text-gray-500 mb-2 sm:mb-3"
          >
            WHY CHOOSE US
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-3xl lg:text-5xl font-black tracking-tight leading-[1.05]"
          >
            Why Industry Leaders <br className="hidden lg:block" />
            Choose PROJECTION
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Accordion List */}
          <div className="lg:col-span-6 flex flex-col w-full" onMouseLeave={() => setHoveredIndex(0)}>
            {whyUsCards.map((card, index) => {
              const Icon = card.icon;
              const isHovered = hoveredIndex === index;
              const num = (index + 1).toString().padStart(2, "0");

              return (
                <motion.div 
                  key={card.id}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-20px" }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onClick={() => setHoveredIndex(index)}
                  className="group border-t border-gray-200 hover:border-black/50 transition-colors duration-300 cursor-pointer overflow-hidden"
                >
                  <div className="py-3 lg:py-4 flex flex-row items-center justify-between gap-4">
                    
                    {/* Left: Number and Title */}
                    <div className="flex flex-row items-start lg:items-center gap-3 lg:gap-5">
                      <span className={`text-sm lg:text-base font-bold font-mono transition-colors duration-300 ${isHovered ? 'text-black' : 'text-gray-400'}`}>
                        {num}
                      </span>
                      <h3 className={`text-lg sm:text-xl lg:text-2xl font-bold transition-colors duration-300 ${isHovered ? 'text-black' : 'text-gray-400'}`}>
                        {card.title}
                      </h3>
                    </div>

                    {/* Right: Icon */}
                    <div className={`w-8 h-8 lg:w-10 lg:h-10 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300 ${isHovered ? 'bg-black text-white shadow-md' : 'bg-gray-50 text-gray-500'}`}>
                       <Icon className="w-4 h-4 lg:w-5 lg:h-5" />
                    </div>
                  </div>

                  {/* Expanding Description Area */}
                  <motion.div
                    initial={false}
                    animate={{ height: isHovered ? "auto" : 0, opacity: isHovered ? 1 : 0 }}
                    className="overflow-hidden"
                  >
                    <div className="pb-4 pl-[35px] sm:pl-[45px] max-w-xl">
                      <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                        {card.desc}
                      </p>
                    </div>
                  </motion.div>

                </motion.div>
              );
            })}
            <div className="border-t border-gray-200" />
          </div>

          {/* Right Column: Supporting Image */}
          <div className="lg:col-span-6 sticky top-24 h-[350px] lg:h-[480px] rounded-3xl overflow-hidden bg-gray-100 shadow-xl border border-black/5">
            <AnimatePresence mode="wait">
              <motion.div
                key={whyUsCards[hoveredIndex].id}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="absolute inset-0 w-full h-full"
              >
                <SafeImage
                  src={whyUsCards[hoveredIndex].img}
                  alt={whyUsCards[hoveredIndex].title}
                  className="w-full h-full object-cover object-center"
                  containerClassName="w-full h-full"
                />
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}
