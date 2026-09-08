import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import BlogListingClient from "./BlogListingClient";

export const metadata = {
  title: "Insights & Intelligence - PROJECTION",
  description: "Advanced spatial engineering insights and digital installation trends.",
};

const blogs = [
  {
    id: 1,
    slug: "future-of-motion-interactive-projection",
    title: "The Future of Motion Interactive Projection",
    excerpt: "Explore how optical sensor tracking and projection mapping are revolutionizing interactive environments.",
    category: "Technology",
    date: "Aug 24, 2026",
    img: "https://momentfactory.com/cdn/shop/files/Moment_Factory_Signature_Shows_25_SuperReal_D7A1668-WS_5b710a5d-f2e7-4428-ad20-c83c257b7bbe.jpg",
    readTime: "6 min read"
  },
  {
    id: 2,
    slug: "how-ai-is-redefining-interactive-experiences",
    title: "How AI is Redefining Interactive Experiences",
    excerpt: "Learn how generative AI avatars allow installations to respond naturally.",
    category: "AI & Innovation",
    date: "Aug 18, 2026",
    img: "https://momentfactory.com/cdn/shop/files/Aura_EgliseSaint-Roch_MomentFactory__DSC4360.png",
    readTime: "8 min read"
  },
  {
    id: 3,
    slug: "choosing-the-right-interactive-solution-for-your-space",
    title: "Choosing the Right Interactive Solution",
    excerpt: "A comprehensive guide on evaluating throw distance, light, and sensors.",
    category: "Guide",
    date: "Aug 10, 2026",
    img: "https://momentfactory.com/cdn/shop/files/SQCagARcade_Montreal_MomentFactory_-9.jpg",
    readTime: "5 min read"
  },
];

export default function BlogsPage() {
  return (
    <main className="min-h-screen bg-white text-black flex flex-col pt-24 font-sans selection:bg-black selection:text-white">
      <Navbar />

      {/* Engaging Page Header */}
      <section className="px-4 sm:px-6 lg:px-8 pt-16 pb-12 max-w-screen-2xl mx-auto w-full">
        <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.9] uppercase text-black">
          The Spatial<br />Intelligence<br />Journal.
        </h1>
        <p className="mt-8 text-xl lg:text-2xl font-light text-black/60 max-w-2xl leading-relaxed">
          Deep-dive technical insights, architectural case studies, and the latest trends in interactive environments and spatial computing.
        </p>
        <div className="mt-8 flex items-center gap-4 text-[10px] uppercase tracking-[0.3em] font-bold text-black/40 border-t border-black/10 pt-6 max-w-sm">
          <span>Explore Knowledge Base</span>
        </div>
      </section>

      {/* Interactive Client Component for Search/Filter and Listings */}
      <BlogListingClient blogs={blogs} />

      <Footer />
    </main>
  );
}
