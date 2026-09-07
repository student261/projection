import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturedProjects from "@/components/FeaturedProjects";
import SolutionsOverview from "@/components/SolutionsOverview";
import IndustriesServed from "@/components/IndustriesServed";
import HowWeWork from "@/components/HowWeWork";
import LatestBlogs from "@/components/LatestBlogs";
import WhyChooseUs from "@/components/WhyChooseUs";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

export const metadata = {
  title: "PROJECTION - Interactive Spaces & Motion Projection Experiences",
  description: "Transform commercial spaces with AI-powered motion interactive projection, immersive 360 environments, and smart audience engagement solutions.",
};

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black flex flex-col">
      <Navbar />
      <Hero />
      <SolutionsOverview />
      <FeaturedProjects />
      <IndustriesServed />
      <HowWeWork />
      <LatestBlogs />
      <WhyChooseUs />
      <FAQSection />
      <Footer />
    </main>
  );
}

