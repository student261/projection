import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import InteractiveLearningContent from "./InteractiveLearningContent";
import { interactiveLearningData } from "@/data/use-cases/interactive-learning";

export const metadata: Metadata = {
  title: interactiveLearningData.seo.title,
  description: interactiveLearningData.seo.description,
  alternates: {
    canonical: interactiveLearningData.seo.canonical,
  },
  openGraph: {
    title: interactiveLearningData.seo.title,
    description: interactiveLearningData.seo.description,
    url: interactiveLearningData.seo.canonical,
    type: "website",
    images: [
      {
        url: interactiveLearningData.seo.ogImage,
        width: 1200,
        height: 630,
        alt: "Students interacting with projected learning visuals",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: interactiveLearningData.seo.title,
    description: interactiveLearningData.seo.description,
    images: [interactiveLearningData.seo.ogImage],
  },
};

export default function InteractiveLearningPage() {
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: interactiveLearningData.seo.title,
    description: interactiveLearningData.seo.description,
    url: interactiveLearningData.seo.canonical,
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: interactiveLearningData.faq.items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <main className="min-h-screen bg-white text-black flex flex-col selection:bg-black selection:text-white">
        <Navbar />
        <InteractiveLearningContent />
        <Footer />
      </main>
    </>
  );
}
