import Navbar from "@/components/Navbar";
import MasterIndustryContent from "@/components/MasterIndustryContent";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Interactive Industry Solutions & Education Showcase - PROJECTION",
  description: "Master Industry Showcase: Transforming Modern Education, Learning Spaces, Corporate Experience Centers, and Public Venues through Interactive Projection & AI Technology.",
};

export default function IndustriesPage() {
  return (
    <main className="min-h-screen bg-white text-black flex flex-col">
      <Navbar />
      <MasterIndustryContent />
      <Footer />
    </main>
  );
}
