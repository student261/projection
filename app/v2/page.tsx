import Navbar from "@/components/Navbar";
import Hero from "@/components/v2/Hero";
import WhatWeCreate from "@/components/v2/WhatWeCreate";
import TheExperience from "@/components/v2/TheExperience";
import IndustriesServed from "@/components/v2/IndustriesServed";
import FeaturedProjects from "@/components/v2/FeaturedProjects";
import HowWeWork from "@/components/v2/HowWeWork";
import WhyChooseUs from "@/components/v2/WhyChooseUs";
import FAQSection from "@/components/v2/FAQSection";
import { faqs } from "@/data/faqs";
import FinalCTA from "@/components/v2/FinalCTA";
import Footer from "@/components/v2/Footer";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Spaces That React When You Move | PROJECTION",
  description:
    "Projection and interactive technology that turn floors, walls and rooms into experiences that respond as people move through them.",
  keywords: [
    "interactive projection",
    "projection mapping",
    "interactive floors",
    "interactive walls",
    "motion tracking",
    "immersive experiences",
    "spatial AI",
    "interactive environments",
    "experiential design",
  ],
  alternates: {
    canonical: "/v2",
  },
  openGraph: {
    title: "Spaces That React When You Move | PROJECTION",
    description:
      "Projection and interactive technology that turn floors, walls and rooms into experiences that respond as people move through them.",
    url: "/v2",
    siteName: "PROJECTION",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Spaces That React When You Move | PROJECTION",
    description:
      "Projection and interactive technology that turn floors, walls and rooms into experiences that respond as people move through them.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://projection.com/v2#webpage",
      url: "https://projection.com/v2",
      name: "Spaces That React When You Move | PROJECTION",
      description:
        "Projection and interactive technology that turn floors, walls and rooms into experiences that respond as people move through them.",
      isPartOf: {
        "@type": "WebSite",
        "@id": "https://projection.com/#website",
        name: "PROJECTION",
        url: "https://projection.com",
      },
    },
    {
      "@type": "Organization",
      "@id": "https://projection.com/#organization",
      name: "PROJECTION",
      url: "https://projection.com",
      description:
        "Designing and engineering spatial motion projection and interactive experiences worldwide.",
    },
    {
      "@type": "FAQPage",
      "@id": "https://projection.com/v2#faq",
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: {
          "@type": "Answer",
          text: f.a,
        },
      })),
    },
  ],
};

export default function HomeV2() {
  return (
    <main className="min-h-screen bg-white text-black flex flex-col">
      {/* Search Engine Structured Data (JSON-LD) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Global Navigation */}
      <Navbar />

      {/* 01 — Hero: Sticky Scaling Video Card */}
      <Hero />

      {/* Below-the-fold content: Scrolls up and covers the sticky hero */}
      <div className="relative z-10 bg-white text-black min-h-screen">
        {/* 02 — What We Create */}
        <WhatWeCreate />

        {/* 03 — The Experience */}
        <TheExperience />

        {/* 04 — Where It Can Work */}
        <IndustriesServed />

        {/* 05 — See It in Real Spaces */}
        <FeaturedProjects />

        {/* 06 — How We Deliver */}
        <HowWeWork />

        {/* 07 — Why Choose Us */}
        <WhyChooseUs />

        {/* 08 — Frequently Asked Questions */}
        <FAQSection />

        {/* 09 — Final CTA */}
        <FinalCTA />

        {/* Global Footer */}
        <Footer />
      </div>
    </main>
  );
}
