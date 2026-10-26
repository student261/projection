"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Sliders, Cpu, Workflow, Layers3, ArrowRight } from "lucide-react";
import SafeImage from "@/components/SafeImage";

const whyUsCards = [
  {
    id: "experience",
    icon: Sliders,
    title: "Experience",
    desc: "A concept planned around your space.",
    img: "/images/projection_cityscape_model.jpg",
  },
  {
    id: "content",
    icon: Cpu,
    title: "Content",
    desc: "Visuals created for the experience.",
    img: "/images/ai_receptionist_concierge.jpg",
  },
  {
    id: "interaction",
    icon: Layers3,
    title: "Interaction",
    desc: "The interaction your visitors will use.",
    img: "/images/museum_interactive_exhibit.jpg",
  },
  {
    id: "installation",
    icon: Workflow,
    title: "Installation",
    desc: "Setup and testing in your space.",
    img: "/images/technician_calibrating_projection.jpg",
  },
];

export default function WhyChooseUs() {
  const [hoveredIndex, setHoveredIndex] = useState<number>(0);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const update = () => setIsDesktop(window.innerWidth >= 1024);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return (
    <section className="py-10 sm:py-12 lg:py-14 bg-white text-black relative">
      <div className="max-w-7xl 2xl:max-w-[1536px] 3xl:max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-5 sm:mb-6 max-w-4xl space-y-2">
          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-[1.1]"
          >
            From the First Idea to a Working Interactive Space
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-sm sm:text-base text-gray-600 font-normal leading-relaxed pt-1 max-w-2xl"
          >
            We bring together the visuals, interaction and setup needed to turn your space into the experience you planned.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-12 items-start relative">
          
          {/* Right Column: Supporting Image (Hidden on Mobile, Sticky on Desktop) */}
          <div className="hidden lg:block lg:order-2 lg:col-span-6 relative lg:sticky lg:top-24 xl:top-28 h-[380px] xl:h-[460px] 2xl:h-[500px] rounded-3xl overflow-hidden bg-gray-100 shadow-xl border border-black/5 z-10">
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

          {/* Left Column: Accordion List (Order 2 on Mobile, 1 on Desktop) */}
          <div className="order-2 lg:order-1 lg:col-span-6 flex flex-col w-full" onMouseLeave={() => setHoveredIndex(0)}>
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
                  <div className="py-3 lg:py-3.5 xl:py-4 flex flex-row items-center justify-between gap-4">
                    
                    {/* Left: Number and Title */}
                    <div className="flex flex-row items-start lg:items-center gap-3 lg:gap-4 xl:gap-5">
                      <span className={`text-sm lg:text-base font-bold font-mono transition-colors duration-300 ${isHovered ? 'text-black' : 'text-neutral-700'}`}>
                        {num}
                      </span>
                      <h3 className={`text-lg sm:text-xl lg:text-xl xl:text-2xl font-bold transition-colors duration-300 ${isHovered ? 'text-black' : 'text-neutral-800 group-hover:text-black'}`}>
                        {card.title}
                      </h3>
                    </div>

                    {/* Right: Icon */}
                    <div className={`w-8 h-8 lg:w-9 lg:h-9 xl:w-10 xl:h-10 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300 ${isHovered ? 'bg-black text-white shadow-md' : 'bg-gray-50 text-gray-500'}`}>
                       <Icon className="w-4 h-4 lg:w-4.5 lg:h-4.5 xl:w-5 xl:h-5" />
                    </div>
                  </div>

                  {/* Expanding Description Area */}
                  <motion.div
                    initial={false}
                    animate={{ 
                      height: (!isDesktop) || isHovered ? "auto" : 0, 
                      opacity: (!isDesktop) || isHovered ? 1 : 0 
                    }}
                    className="overflow-hidden"
                  >
                    <div className="pb-4 pl-[35px] sm:pl-[45px] max-w-xl">
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {card.desc}
                      </p>
                      
                      {/* Mobile Inline Image (Hidden on Desktop) */}
                      <div className="mt-4 w-full h-[180px] sm:h-[240px] rounded-xl overflow-hidden lg:hidden shadow-md">
                        <SafeImage
                          src={card.img}
                          alt={card.title}
                          className="w-full h-full object-cover"
                          containerClassName="w-full h-full"
                        />
                      </div>
                    </div>
                  </motion.div>

                </motion.div>
              );
            })}
            <div className="border-t border-gray-200" />
            
            <div className="pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <p className="text-xs sm:text-sm text-neutral-500 font-light">
                Project scope depends on your requirements.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-black text-white hover:bg-neutral-800 text-xs sm:text-sm font-semibold tracking-wide transition-all shadow-md hover:scale-105 active:scale-95"
              >
                <span>Discuss Your Project</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
