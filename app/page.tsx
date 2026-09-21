import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SolutionsOverview from "@/components/SolutionsOverview";

// Dynamically import below-the-fold components to boost initial page load performance
const FeaturedProjects = dynamic(() => import("@/components/FeaturedProjects"), { ssr: true });
const IndustriesServed = dynamic(() => import("@/components/IndustriesServed"), { ssr: true });
const HowWeWork = dynamic(() => import("@/components/HowWeWork"), { ssr: true });
const LatestBlogs = dynamic(() => import("@/components/LatestBlogs"), { ssr: true });
const WhyChooseUs = dynamic(() => import("@/components/WhyChooseUs"), { ssr: true });
const FAQSection = dynamic(() => import("@/components/FAQSection"), { ssr: true });
const Footer = dynamic(() => import("@/components/Footer"), { ssr: true });

export const metadata = {
  title: "PROJECTION - Interactive Spaces & Motion Projection Experiences",
  description: "Transform commercial spaces with AI-powered motion interactive projection, immersive 360 environments, and smart audience engagement solutions.",
};

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black flex flex-col">
      <Navbar />
      <Hero />
      {/* All sections below scroll up and COVER the sticky hero section when scrolling down */}
      <div className="relative z-10 bg-white text-black min-h-screen">
        <SolutionsOverview />
        <FeaturedProjects />
        <IndustriesServed />
        <HowWeWork />
        <LatestBlogs />
        <WhyChooseUs />
        <FAQSection />
        <Footer />
      </div>
    </main>
  );
}
