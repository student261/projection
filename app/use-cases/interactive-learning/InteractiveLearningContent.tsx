"use client";

import { useState } from "react";
import Link from "next/link";
import SafeImage from "@/components/SafeImage";
import { ArrowRight, Plus, Minus, Sparkles } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { interactiveLearningData } from "@/data/use-cases/interactive-learning";

export default function InteractiveLearningContent() {
  const data = interactiveLearningData;
  const shouldReduceMotion = useReducedMotion();
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const fadeIn = {
    initial: shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-40px" },
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  };

  return (
    <div className="w-full bg-white text-black overflow-hidden selection:bg-black selection:text-white">
      {/* SECTION 1: HERO (full viewport, dark) */}
      <section
        aria-label="Interactive Learning Hero"
        className="relative h-screen min-h-[580px] flex flex-col justify-between items-center overflow-hidden pt-24 sm:pt-28 pb-8 bg-black text-white"
      >
        <div className="absolute inset-0 z-0 pointer-events-none">
          <SafeImage
            src={data.hero.img}
            alt={data.hero.alt}
            className="w-full h-full object-cover opacity-60"
            containerClassName="w-full h-full bg-black"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black pointer-events-none" />
        </div>

        <div className="my-auto relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
          <motion.div {...fadeIn}>
            <div className="inline-flex items-center justify-center gap-2 text-[10px] sm:text-[11px] font-mono font-semibold uppercase tracking-[0.25em] text-white/70 mb-3">
              <Sparkles className="w-3.5 h-3.5 text-white/70" />
              <span>{data.hero.label}</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.08] max-w-4xl mx-auto mb-4">
              {data.hero.h1}
            </h1>

            <p className="text-sm sm:text-base lg:text-lg text-white/80 font-light max-w-2xl mx-auto mb-8 leading-relaxed">
              {data.hero.supporting}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 w-full sm:w-auto">
              <Link
                href={data.hero.primaryCtaHref}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-white text-black text-xs sm:text-sm font-bold uppercase tracking-wider hover:bg-neutral-200 transition-all active:scale-95 shadow-xl w-full sm:w-auto"
              >
                <span>{data.hero.primaryCtaText}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href={data.hero.secondaryCtaHref}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-white/10 text-white hover:bg-white/20 border border-white/20 backdrop-blur-md text-xs sm:text-sm font-bold uppercase tracking-wider transition-all active:scale-95 w-full sm:w-auto"
              >
                <span>{data.hero.secondaryCtaText}</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2: THE EXPERIENCE */}
      <section
        id="the-experience"
        aria-labelledby="experience-heading"
        className="py-14 sm:py-16 lg:py-20 bg-white text-black"
      >
        <div className="max-w-7xl 2xl:max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Visual Column */}
            <motion.div {...fadeIn} className="lg:col-span-7 order-1 lg:order-1">
              <div className="relative aspect-[16/11] rounded-2xl overflow-hidden bg-neutral-100 shadow-xl">
                <SafeImage
                  src={data.experience.img}
                  alt={data.experience.alt}
                  className="w-full h-full object-cover"
                  containerClassName="w-full h-full"
                />
              </div>
            </motion.div>

            {/* Editorial Content Column */}
            <motion.div {...fadeIn} className="lg:col-span-5 order-2 lg:order-2 space-y-3 sm:space-y-4">
              <div className="text-[10px] sm:text-[11px] font-mono tracking-[0.25em] text-black/60 uppercase">
                {data.experience.label}
              </div>
              <h2
                id="experience-heading"
                className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black tracking-tight leading-tight"
              >
                {data.experience.h2}
              </h2>
              <p className="text-sm sm:text-base lg:text-lg text-neutral-600 font-light leading-relaxed max-w-xl">
                {data.experience.copy}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 3: THE NEED */}
      <section
        id="the-need"
        aria-labelledby="need-heading"
        className="py-14 sm:py-16 lg:py-20 bg-[#FAF9F5] text-black border-y border-black/10"
      >
        <div className="max-w-7xl 2xl:max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeIn} className="max-w-3xl mb-8 sm:mb-10">
            <span className="text-[10px] sm:text-[11px] font-mono tracking-[0.25em] text-black/60 uppercase block mb-2">
              {data.need.label}
            </span>
            <h2
              id="need-heading"
              className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight leading-tight text-black"
            >
              {data.need.h2}
            </h2>
          </motion.div>

          {/* Four Oversized Typographic Statements separated ONLY by hairlines */}
          <div className="border-b border-black/15">
            {data.need.items.map((item, idx) => (
              <motion.div
                key={idx}
                {...fadeIn}
                className="border-t border-black/15 py-6 sm:py-7 grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8 items-baseline"
              >
                <div className="lg:col-span-2 font-mono text-xs sm:text-sm font-bold text-neutral-400">
                  {item.num}
                </div>
                <div className="lg:col-span-5 text-xl sm:text-2xl font-bold text-black tracking-tight leading-snug">
                  {item.title}
                </div>
                <div className="lg:col-span-5 text-sm sm:text-base text-neutral-600 font-light leading-relaxed max-w-lg">
                  {item.desc}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: HOW STUDENTS INTERACT */}
      <section
        id="how-students-interact"
        aria-labelledby="interact-heading"
        className="py-14 sm:py-16 lg:py-20 bg-black text-white relative overflow-hidden"
      >
        <div className="max-w-7xl 2xl:max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 mb-8 sm:mb-10">
          <motion.div {...fadeIn}>
            <span className="text-[10px] sm:text-[11px] font-mono tracking-[0.25em] text-white/60 uppercase block mb-2">
              {data.howStudentsInteract.label}
            </span>
            <h2
              id="interact-heading"
              className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight leading-tight text-white"
            >
              {data.howStudentsInteract.h2}
            </h2>
          </motion.div>
        </div>

        {/* Visual horizontal sequence of five tall images edge to edge */}
        <div className="w-full">
          <div className="flex flex-col md:flex-row w-full divide-y md:divide-y-0 md:divide-x divide-white/10">
            {data.howStudentsInteract.items.map((item, idx) => (
              <motion.div
                key={idx}
                {...fadeIn}
                className="relative flex-1 h-[340px] sm:h-[400px] lg:h-[480px] overflow-hidden group select-none"
              >
                <SafeImage
                  src={item.img}
                  alt={item.alt}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  containerClassName="w-full h-full absolute inset-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent pointer-events-none" />

                <div className="absolute bottom-0 inset-x-0 p-5 sm:p-6 z-10 flex flex-col justify-end">
                  <span className="font-mono text-xs text-white/50 mb-1 block">
                    0{idx + 1}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-1.5">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-white/80 font-light leading-relaxed max-w-xs transition-opacity duration-300">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: WHERE IT CAN BE USED */}
      <section
        id="where-it-can-be-used"
        aria-labelledby="spaces-heading"
        className="py-14 sm:py-16 lg:py-20 bg-white text-black"
      >
        <div className="max-w-7xl 2xl:max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeIn} className="max-w-3xl mb-8 sm:mb-10">
            <span className="text-[10px] sm:text-[11px] font-mono tracking-[0.25em] text-black/60 uppercase block mb-2">
              {data.whereItCanBeUsed.label}
            </span>
            <h2
              id="spaces-heading"
              className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight leading-tight text-black"
            >
              {data.whereItCanBeUsed.h2}
            </h2>
          </motion.div>

          {/* Row of six narrow tall images with different heights, space name over each image */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5 lg:gap-4 items-end">
            {data.whereItCanBeUsed.items.map((item, idx) => {
              // Asymmetric heights for distinct editorial silhouette
              const heightVariants = [
                "h-[300px] lg:h-[350px]",
                "h-[330px] lg:h-[410px]",
                "h-[280px] lg:h-[320px]",
                "h-[320px] lg:h-[380px]",
                "h-[290px] lg:h-[340px]",
                "h-[340px] lg:h-[420px]",
              ];
              const hClass = heightVariants[idx % heightVariants.length];

              return (
                <motion.div
                  key={idx}
                  {...fadeIn}
                  className="flex flex-col w-full"
                >
                  <div className="mb-2.5">
                    <h3 className="text-base sm:text-lg font-bold text-black tracking-tight leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-xs text-neutral-600 font-light leading-relaxed mt-0.5 line-clamp-2">
                      {item.desc}
                    </p>
                  </div>
                  <div className={`relative ${hClass} w-full rounded-xl overflow-hidden bg-neutral-100 group shadow-md`}>
                    <SafeImage
                      src={item.img}
                      alt={item.alt}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      containerClassName="w-full h-full"
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>

          <div className="mt-8 sm:mt-10 text-xs font-mono text-neutral-500 text-center lg:text-left">
            {data.whereItCanBeUsed.note}
          </div>
        </div>
      </section>

      {/* SECTION 6: WHAT STUDENTS CAN DO */}
      <section
        id="what-students-can-do"
        aria-labelledby="activities-heading"
        className="py-14 sm:py-16 lg:py-20 bg-[#FAF9F5] text-black border-y border-black/10"
      >
        <div className="max-w-7xl 2xl:max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeIn} className="max-w-3xl mb-10 sm:mb-12">
            <span className="text-[10px] sm:text-[11px] font-mono tracking-[0.25em] text-black/60 uppercase block mb-2">
              {data.whatStudentsCanDo.label}
            </span>
            <h2
              id="activities-heading"
              className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight leading-tight text-black"
            >
              {data.whatStudentsCanDo.h2}
            </h2>
          </motion.div>

          {/* Large alternating image and text rows, one activity per row */}
          <div className="space-y-12 sm:space-y-16 lg:space-y-20">
            {data.whatStudentsCanDo.items.map((item, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <motion.div
                  key={idx}
                  {...fadeIn}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
                >
                  <div
                    className={`w-full lg:col-span-7 ${
                      isEven ? "order-1 lg:order-1" : "order-1 lg:order-2"
                    }`}
                  >
                    <div className="relative h-[260px] sm:h-[320px] lg:h-[380px] w-full rounded-2xl overflow-hidden bg-neutral-200 group shadow-md">
                      <SafeImage
                        src={item.img}
                        alt={item.alt}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        containerClassName="w-full h-full"
                      />
                    </div>
                  </div>

                  <div
                    className={`w-full lg:col-span-5 space-y-2.5 sm:space-y-3 ${
                      isEven ? "order-2 lg:order-2" : "order-2 lg:order-1"
                    }`}
                  >
                    <span className="font-mono text-xs font-bold text-neutral-400 block">
                      ACTIVITY 0{idx + 1}
                    </span>
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-black tracking-tight leading-tight">
                      {item.title}
                    </h3>
                    <p className="text-sm sm:text-base text-neutral-600 font-light leading-relaxed pt-1">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 7: SEE WHAT'S POSSIBLE */}
      <section
        id="see-whats-possible"
        aria-labelledby="gallery-heading"
        className="py-14 sm:py-16 lg:py-20 bg-black text-white overflow-hidden"
      >
        <div className="max-w-7xl 2xl:max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeIn} className="max-w-3xl mb-8 sm:mb-10">
            <span className="text-[10px] sm:text-[11px] font-mono tracking-[0.25em] text-white/60 uppercase block mb-2">
              {data.seeWhatsPossible.label}
            </span>
            <h2
              id="gallery-heading"
              className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight leading-tight text-white mb-3"
            >
              {data.seeWhatsPossible.h2}
            </h2>
            <p className="text-sm sm:text-base text-white/70 font-light">
              {data.seeWhatsPossible.supporting}
            </p>
          </motion.div>

          {/* Full-bleed immersive gallery band */}
          <div className="space-y-4 sm:space-y-6">
            {/* Wide showcase image */}
            {data.seeWhatsPossible.images[0] && (
              <motion.div
                {...fadeIn}
                className="relative aspect-[21/9] sm:aspect-[16/7] w-full rounded-2xl overflow-hidden bg-neutral-900 shadow-xl"
              >
                <SafeImage
                  src={data.seeWhatsPossible.images[0].src}
                  alt={data.seeWhatsPossible.images[0].alt}
                  className="w-full h-full object-cover"
                  containerClassName="w-full h-full"
                />
              </motion.div>
            )}

            {/* Asymmetric offset smaller images */}
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 sm:gap-6 items-center">
              {data.seeWhatsPossible.images.slice(1, 5).map((img, idx) => {
                const colSpanClass =
                  idx === 0 || idx === 3
                    ? "sm:col-span-7 aspect-[16/10]"
                    : "sm:col-span-5 aspect-[4/3]";

                return (
                  <motion.div
                    key={idx}
                    {...fadeIn}
                    className={`relative ${colSpanClass} rounded-xl overflow-hidden bg-neutral-900 group shadow-md`}
                  >
                    <SafeImage
                      src={img.src}
                      alt={img.alt}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      containerClassName="w-full h-full"
                    />
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Concept visuals caption controlled by boolean */}
          {data.seeWhatsPossible.showConceptLabel && (
            <div className="mt-6 text-center">
              <span className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.2em] text-white/40">
                {data.seeWhatsPossible.conceptLabel}
              </span>
            </div>
          )}
        </div>
      </section>

      {/* SECTION 8: HOW IT WORKS */}
      <section
        id="how-it-works"
        aria-labelledby="how-it-works-heading"
        className="py-14 sm:py-16 lg:py-20 bg-white text-black"
      >
        <div className="max-w-7xl 2xl:max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeIn} className="max-w-3xl mb-8 sm:mb-10">
            <span className="text-[10px] sm:text-[11px] font-mono tracking-[0.25em] text-black/60 uppercase block mb-2">
              {data.howItWorks.label}
            </span>
            <h2
              id="how-it-works-heading"
              className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight leading-tight text-black"
            >
              {data.howItWorks.h2}
            </h2>
          </motion.div>

          {/* One thin horizontal line with four numbered points (01 to 04) */}
          <div className="border-t border-black/15 pt-6 sm:pt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {data.howItWorks.items.map((item, idx) => (
              <motion.div key={idx} {...fadeIn} className="flex flex-col">
                <span className="text-xs font-mono font-bold text-neutral-400 mb-2 block">
                  {item.num}
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-black tracking-tight mb-1.5">
                  {item.title}
                </h3>
                <p className="text-sm sm:text-base text-neutral-600 font-light leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 9: WHAT IT ENABLES */}
      <section
        id="what-it-enables"
        aria-labelledby="enables-heading"
        className="py-14 sm:py-16 lg:py-20 bg-[#FAF9F5] text-black border-y border-black/10"
      >
        <div className="max-w-7xl 2xl:max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeIn} className="max-w-3xl mb-8 sm:mb-10">
            <span className="text-[10px] sm:text-[11px] font-mono tracking-[0.25em] text-black/60 uppercase block mb-2">
              {data.whatItEnables.label}
            </span>
            <h2
              id="enables-heading"
              className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight leading-tight text-black"
            >
              {data.whatItEnables.h2}
            </h2>
          </motion.div>

          {/* Four oversized typographic phrases with a tiny one-line description each */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-10 lg:gap-x-16 gap-y-8 sm:gap-y-10">
            {data.whatItEnables.items.map((item, idx) => (
              <motion.div key={idx} {...fadeIn} className="flex flex-col">
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-black tracking-tight leading-tight mb-2">
                  {item.title}
                </h3>
                <p className="text-sm sm:text-base text-neutral-600 font-light leading-relaxed max-w-md">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 10: RELATED SOLUTIONS (NO LINKS) */}
      {/* // TODO: add internal links after site structure is finalized */}
      <section
        id="related-solutions"
        aria-labelledby="solutions-heading"
        className="py-14 sm:py-16 lg:py-20 bg-white text-black scroll-mt-20"
      >
        <div className="max-w-7xl 2xl:max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeIn} className="max-w-3xl mb-6 sm:mb-8">
            <span className="text-[10px] sm:text-[11px] font-mono tracking-[0.25em] text-black/60 uppercase block mb-2">
              {data.relatedSolutions.label}
            </span>
            <h2
              id="solutions-heading"
              className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight leading-tight text-black"
            >
              {data.relatedSolutions.h2}
            </h2>
          </motion.div>

          {/* Three text rows with a thin line under each, plain text only */}
          <div className="border-t border-black/10">
            {data.relatedSolutions.items.map((item, idx) => (
              <motion.div
                key={idx}
                {...fadeIn}
                className="border-b border-black/10 py-5 sm:py-6 flex flex-col md:flex-row md:items-baseline justify-between gap-3 sm:gap-4"
              >
                <div className="text-lg sm:text-xl lg:text-2xl font-bold text-black tracking-tight">
                  {item.title}
                </div>
                <div className="text-sm sm:text-base text-neutral-600 font-light max-w-lg">
                  {item.desc}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 11: RELATED INDUSTRIES (NO LINKS) */}
      {/* // TODO: add internal links after site structure is finalized */}
      <section
        id="related-industries"
        aria-labelledby="industries-heading"
        className="py-14 sm:py-16 lg:py-20 bg-white text-black border-t border-black/10"
      >
        <div className="max-w-7xl 2xl:max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeIn} className="max-w-3xl mb-6 sm:mb-8">
            <span className="text-[10px] sm:text-[11px] font-mono tracking-[0.25em] text-black/60 uppercase block mb-2">
              {data.relatedIndustries.label}
            </span>
            <h2
              id="industries-heading"
              className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight leading-tight text-black"
            >
              {data.relatedIndustries.h2}
            </h2>
          </motion.div>

          {/* Two text rows, plain text only */}
          <div className="border-t border-black/10">
            {data.relatedIndustries.items.map((item, idx) => (
              <motion.div
                key={idx}
                {...fadeIn}
                className="border-b border-black/10 py-5 sm:py-6 flex flex-col md:flex-row md:items-baseline justify-between gap-3 sm:gap-4"
              >
                <div className="text-lg sm:text-xl lg:text-2xl font-bold text-black tracking-tight">
                  {item.title}
                </div>
                <div className="text-sm sm:text-base text-neutral-600 font-light max-w-lg">
                  {item.desc}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 12: FAQ */}
      <section
        id="faq"
        aria-labelledby="faq-heading"
        className="py-14 sm:py-16 lg:py-20 bg-[#FAF9F5] text-black border-t border-black/10"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeIn} className="text-center mb-8 sm:mb-10">
            <span className="text-[10px] sm:text-[11px] font-mono tracking-[0.25em] text-black/60 uppercase block mb-2">
              {data.faq.label}
            </span>
            <h2
              id="faq-heading"
              className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight leading-tight text-black"
            >
              Frequently Asked Questions
            </h2>
          </motion.div>

          {/* Simple text lines with thin dividers and a plus icon, first item open */}
          <div className="border-t border-black/15">
            {data.faq.items.map((faq, idx) => {
              const isOpen = openFaq === idx;

              return (
                <div key={idx} className="border-b border-black/15">
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full py-4 sm:py-5 text-left flex items-start justify-between gap-4 sm:gap-6 cursor-pointer group"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-start gap-3.5 sm:gap-5">
                      <span className="font-mono text-xs text-neutral-400 pt-0.5 shrink-0">
                        0{idx + 1}
                      </span>
                      <h3 className="text-sm sm:text-base font-bold text-black leading-snug">
                        {faq.q}
                      </h3>
                    </div>
                    <div className="w-7 h-7 rounded-full flex items-center justify-center shrink-0 border border-black/20 text-black transition-transform duration-300">
                      {isOpen ? (
                        <Minus className="w-3.5 h-3.5" />
                      ) : (
                        <Plus className="w-3.5 h-3.5" />
                      )}
                    </div>
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      isOpen ? "max-h-[800px] opacity-100 pb-4 sm:pb-5" : "max-h-0 opacity-0"
                    } pl-7 sm:pl-10 pr-4 text-xs sm:text-sm font-light text-neutral-600 leading-relaxed`}
                  >
                    <p className="max-w-2xl">{faq.a}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 13: FINAL CTA */}
      <section
        id="final-cta"
        aria-labelledby="cta-heading"
        className="relative py-16 sm:py-20 lg:py-24 overflow-hidden bg-black text-white"
      >
        <div className="absolute inset-0 z-0 pointer-events-none">
          <SafeImage
            src={data.finalCta.bgImg}
            alt="Atmospheric projection illumination in a learning space"
            className="w-full h-full object-cover opacity-40"
            containerClassName="w-full h-full bg-black"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent pointer-events-none" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
          <motion.div {...fadeIn}>
            <h2
              id="cta-heading"
              className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight leading-tight mb-4"
            >
              {data.finalCta.h2}
            </h2>
            <p className="text-sm sm:text-base text-white/80 font-light max-w-2xl mx-auto mb-6 leading-relaxed">
              {data.finalCta.supporting}
            </p>
            <Link
              href={data.finalCta.buttonHref}
              className="inline-flex items-center gap-2.5 px-8 py-3.5 sm:py-4 rounded-full bg-white text-black text-xs sm:text-sm font-bold uppercase tracking-wider hover:bg-neutral-200 transition-all duration-300 active:scale-95 shadow-2xl"
            >
              <span>{data.finalCta.buttonText}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
