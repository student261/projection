"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sliders, Workflow, Users, Headphones } from "lucide-react";
import SafeImage from "@/components/SafeImage";

const differentiators = [
  {
    id: "custom",
    icon: Sliders,
    num: "01",
    title: "Custom",
    desc: "Every experience is designed around your specific space, not a template.",
    img: "/images/projection_cityscape_model.jpg",
  },
  {
    id: "end-to-end",
    icon: Workflow,
    num: "02",
    title: "End-to-End",
    desc: "We handle everything from concept through installation, so you're not managing multiple vendors.",
    img: "/images/technician_calibrating_projection.jpg",
  },
  {
    id: "experience-led",
    icon: Users,
    num: "03",
    title: "Experience-Led",
    desc: "We design around how people actually move through and use a space, not just the technology itself.",
    img: "/images/museum_interactive_exhibit.jpg",
  },
  {
    id: "ongoing-support",
    icon: Headphones,
    num: "04",
    title: "Ongoing Support",
    desc: "We don't disappear after launch — we help maintain and evolve the experience over time.",
    img: "/images/architectural_light_beam.jpg",
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
    <section id="why-choose-us" className="pt-8 sm:pt-10 lg:pt-12 pb-10 sm:pb-14 lg:pb-16 bg-white text-black relative border-t border-gray-100">
      <div className="max-w-7xl 2xl:max-w-[1536px] 3xl:max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-8 sm:mb-10 max-w-4xl space-y-2">
          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-[1.1] text-black"
          >
            Why Work With Us
          </motion.h2>

          <p className="text-sm sm:text-base text-black/70 font-normal leading-relaxed pt-1 max-w-2xl">
            We focus on what actually matters — creating experiences that work for your space, your audience and your goals.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-12 items-start relative">
          
          {/* Right Column: Supporting Image (Hidden on Mobile, Sticky on Desktop) */}
          <div className="hidden lg:block lg:order-2 lg:col-span-6 relative lg:sticky lg:top-24 xl:top-28 h-[380px] xl:h-[440px] 2xl:h-[480px] rounded-3xl overflow-hidden bg-gray-100 shadow-xl border border-black/5 z-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={differentiators[hoveredIndex].id}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="absolute inset-0 w-full h-full"
              >
                <SafeImage
                  src={differentiators[hoveredIndex].img}
                  alt={differentiators[hoveredIndex].title}
                  className="w-full h-full object-cover object-center"
                  containerClassName="w-full h-full"
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Left Column: Accordion List (Order 2 on Mobile, 1 on Desktop) */}
          <div className="order-2 lg:order-1 lg:col-span-6 flex flex-col w-full" onMouseLeave={() => setHoveredIndex(0)}>
            {differentiators.map((card, index) => {
              const Icon = card.icon;
              const isHovered = hoveredIndex === index;

              return (
                <motion.div 
                  key={card.id}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onClick={() => setHoveredIndex(index)}
                  className="group border-t border-gray-200 hover:border-black/50 transition-colors duration-300 cursor-pointer overflow-hidden"
                >
                  <div className="py-4 lg:py-5 flex flex-row items-center justify-between gap-4">
                    
                    {/* Left: Number and Title */}
                    <div className="flex flex-row items-center gap-4">
                      <span className={`text-sm lg:text-base font-bold font-mono transition-colors duration-300 ${isHovered ? 'text-black' : 'text-neutral-400'}`}>
                        {card.num}
                      </span>
                      <h3 className={`text-lg sm:text-xl font-bold transition-colors duration-300 ${isHovered ? 'text-black' : 'text-neutral-800 group-hover:text-black'}`}>
                        {card.title}
                      </h3>
                    </div>

                    {/* Right: Icon */}
                    <div className={`w-9 h-9 lg:w-10 lg:h-10 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300 ${isHovered ? 'bg-black text-white shadow-md' : 'bg-gray-50 text-gray-500'}`}>
                      <Icon className="w-4 h-4" />
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
                      <p className="text-sm text-gray-600 leading-relaxed font-light">
                        {card.desc}
                      </p>
                      
                      {/* Mobile Inline Image (Hidden on Desktop) */}
                      <div className="mt-4 w-full h-[180px] sm:h-[220px] rounded-xl overflow-hidden lg:hidden shadow-md">
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
          </div>

        </div>
      </div>
    </section>
  );
}
