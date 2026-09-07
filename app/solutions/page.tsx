import Navbar from "@/components/Navbar";
import SolutionsContent from "@/components/SolutionsContent";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Interactive Solutions - PROJECTION",
  description: "Interactive Solutions Designed to Transform Every Experience. Explore Motion Interactive Projection, Immersive Environments, AI Experiences, and Smart Engagement.",
};

export default function SolutionsPage() {
  return (
    <main className="min-h-screen bg-white text-black flex flex-col">
      <Navbar />
      <SolutionsContent />
      <Footer />
    </main>
  );
}
