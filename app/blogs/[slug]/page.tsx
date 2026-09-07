import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SafeImage from "@/components/SafeImage";
import Link from "next/link";
import { ArrowLeft, Clock, Calendar } from "lucide-react";
import { notFound } from "next/navigation";

// Full blog content dictionary
const BLOG_DATA: Record<string, any> = {
  "future-of-motion-interactive-projection": {
    title: "The Future of Motion Interactive Projection",
    category: "Technology",
    date: "August 24, 2026",
    readTime: "6 min read",
    heroImg: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=2000&q=80",
    content: (
      <>
        <p className="lead">
          The boundaries between the physical and digital worlds are dissolving. What used to require bulky VR headsets or awkward AR glasses is now being seamlessly integrated directly into the architecture around us through advanced motion interactive projection.
        </p>
        <h2>The Shift from Screens to Surfaces</h2>
        <p>
          For decades, our interaction with digital content has been confined to rectangular screens. However, spatial engineering is breaking this paradigm. By utilizing high-lumen laser projectors combined with precise LiDAR and optical tracking sensors, we can now turn any physical surface—floors, walls, ceilings, and even complex architectural facades—into a responsive, multi-touch canvas.
        </p>
        <p>
          This shift is profound. In retail, it means storefront windows that react to the proximity of pedestrians. In education, it transforms static gymnasiums into collaborative, interactive STEM learning environments.
        </p>
        <h2>Hardware Meets Intelligent Software</h2>
        <p>
          The true breakthrough isn't just in brighter projectors; it's in the sensor fusion. Modern spatial engines use multiple overlapping optical sensors to create a seamless tracking grid. This allows the software to track dozens of users simultaneously with sub-millimeter precision and zero noticeable latency.
        </p>
        <blockquote>
          "We are no longer looking *at* the digital world. We are stepping *into* it. The architecture itself has become the interface."
        </blockquote>
        <h2>What's Next?</h2>
        <p>
          As we look towards 2027 and beyond, expect to see the integration of generative AI into these spaces. Imagine an interactive floor that doesn't just ripple when you walk on it, but actively learns from crowd flow to generate new, evolving ecosystems of digital art. The future is truly boundless.
        </p>
      </>
    )
  },
  "how-ai-is-redefining-interactive-experiences": {
    title: "How AI is Redefining Interactive Experiences",
    category: "AI & Innovation",
    date: "August 18, 2026",
    readTime: "8 min read",
    heroImg: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=2000&q=80",
    content: (
      <>
        <p className="lead">
          Artificial Intelligence is moving out of the chatbot window and stepping into the physical room. Generative AI is the missing link that is turning interactive installations from pre-programmed loops into truly living, breathing environments.
        </p>
        <h2>Beyond Pre-Rendered Graphics</h2>
        <p>
          Traditionally, projection mapping and interactive floors relied on pre-rendered graphic loops. A fish would swim away when you stepped near it, but it was a strictly coded behavior. Today, by integrating lightweight Large Language Models (LLMs) and real-time computer vision, the environment can actually "see" and "understand" the audience.
        </p>
        <h2>Autonomous AI Avatars</h2>
        <p>
          One of the most exciting applications is the rise of spatial AI avatars. Imagine walking into a flagship retail store and being greeted by a life-sized, holographic concierge projected onto a glass partition. Using sentiment analysis via optical cameras, the avatar can detect if you look confused or excited, and adjust its tone and body language accordingly while answering your spoken questions in real-time.
        </p>
        <h2>Procedural Environments</h2>
        <p>
          AI also allows for procedural environment generation. For instance, in a pediatric hospital's sensory room, an AI engine can monitor a child's heart rate (via contactless sensors) and automatically shift the projected visuals from high-energy gamification to a soothing, slow-moving underwater biome to help lower their anxiety. 
        </p>
        <p>
          The environment is no longer just a display; it is a caretaker, an entertainer, and a responsive partner.
        </p>
      </>
    )
  },
  "choosing-the-right-interactive-solution-for-your-space": {
    title: "Choosing the Right interactive Solution for Your Space",
    category: "Guide",
    date: "August 10, 2026",
    readTime: "5 min read",
    heroImg: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=2000&q=80",
    content: (
      <>
        <p className="lead">
          Investing in interactive spatial technology is a major decision. Whether you are an architect designing a new museum wing or a brand manager planning a flagship store, choosing the right hardware and software stack is critical to the success of the installation.
        </p>
        <h2>1. Assess the Ambient Light</h2>
        <p>
          The number one enemy of projection is ambient light. If your space features massive floor-to-ceiling windows with direct sunlight, a standard interactive floor projection might look washed out. In these scenarios, you have two choices:
        </p>
        <ul>
          <li>Invest in ultra-high lumen laser projectors (15,000+ lumens).</li>
          <li>Pivot from projection to an interactive LED floor or wall, which emits its own light and can compete directly with the sun.</li>
        </ul>
        <h2>2. Define the Interaction Zone</h2>
        <p>
          How many people will interact with the installation at once? A single optical sensor can typically cover a 15x15 foot area and track up to 10 people accurately. If you are building a massive 360-degree immersive room, you will need a "Sensor Fusion" network—multiple overlapping sensors calibrated to act as a single tracking grid.
        </p>
        <h2>3. Choose the Right Surface</h2>
        <p>
          Projection mapping requires a relatively matte surface. Highly reflective gloss floors or mirrors will bounce the light away from the viewer, ruining the effect. We always recommend working with your architectural team to specify matte, light-colored flooring (like light grey concrete or matte white vinyl) for maximum color vibrancy.
        </p>
        <h2>Conclusion</h2>
        <p>
          The best installations are those where the technology is considered during the architectural blueprint phase, not as an afterthought. Reach out to our engineering team early in your design process for a spatial consultation.
        </p>
      </>
    )
  }
};

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = BLOG_DATA[slug];
  
  if (!post) {
    return { title: "Post Not Found - PROJECTION" };
  }

  return {
    title: `${post.title} | PROJECTION Insights`,
    description: post.content?.props?.children[0]?.props?.children || `Read about ${post.title} on PROJECTION Insights.`,
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = BLOG_DATA[slug];

  if (!post) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.title,
    "image": [post.heroImg],
    "datePublished": new Date(post.date).toISOString(),
    "dateModified": new Date(post.date).toISOString(),
    "author": [{
      "@type": "Person",
      "name": "Dr. Elena Rostova"
    }],
    "publisher": {
      "@type": "Organization",
      "name": "PROJECTION",
      "logo": {
        "@type": "ImageObject",
        "url": "https://projection.com/logo.png"
      }
    }
  };

  return (
    <main className="min-h-screen bg-white text-black flex flex-col pt-24 selection:bg-black selection:text-white">
      <Navbar />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Article Header */}
      <article className="w-full">
        <header className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20 text-center">
          <Link 
            href="/blogs"
            className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-black/50 hover:text-black transition-colors mb-10"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Back to All Resources
          </Link>
          
          <div className="mb-6 flex items-center justify-center gap-4 text-[10px] uppercase tracking-widest font-bold">
            <span className="px-3 py-1 bg-black text-white">{post.category}</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] mb-8">
            {post.title}
          </h1>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 text-[11px] uppercase tracking-widest text-black/60 font-bold">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full overflow-hidden bg-black/10">
                <SafeImage src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=100&q=80" alt="Author" className="w-full h-full object-cover" />
              </div>
              <span className="text-black">Dr. Elena Rostova</span>
            </div>
            <div className="hidden sm:block w-1 h-1 rounded-full bg-black/20"></div>
            <div className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5" />
              {post.date}
            </div>
            <div className="hidden sm:block w-1 h-1 rounded-full bg-black/20"></div>
            <div className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5" />
              {post.readTime}
            </div>
            <div className="hidden sm:block w-1 h-1 rounded-full bg-black/20"></div>
            <div className="flex items-center gap-1.5 text-black/40">
              Updated: {post.date}
            </div>
          </div>
        </header>

        {/* Hero Image */}
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 lg:mb-24">
          <div className="aspect-[21/9] sm:aspect-video w-full relative overflow-hidden bg-gray-100 border border-black/10 rounded-2xl">
            <SafeImage 
              src={post.heroImg}
              alt={post.title}
              className="w-full h-full object-cover"
              containerClassName="w-full h-full"
            />
          </div>
        </div>

        {/* Article Body */}
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 text-black/80 font-light leading-relaxed text-lg sm:text-xl [&>p]:mb-8 [&>p.lead]:text-2xl [&>p.lead]:font-normal [&>p.lead]:text-black [&>h2]:text-3xl [&>h2]:sm:text-4xl [&>h2]:font-black [&>h2]:text-black [&>h2]:mb-6 [&>h2]:mt-16 [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:mb-8 [&>ul>li]:mb-2 [&>blockquote]:border-l-4 [&>blockquote]:border-black [&>blockquote]:pl-6 [&>blockquote]:italic [&>blockquote]:my-12 [&>blockquote]:text-2xl [&>blockquote]:font-medium [&>blockquote]:text-black">
          {post.content}
        </div>
      </article>

      {/* Internal Links & Related Articles */}
      <section className="bg-gray-50 border-t border-b border-black/10 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl font-black mb-8 text-black">Keep Exploring</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <Link href="/solutions" className="p-6 bg-white border border-black/10 hover:border-black/30 rounded-xl transition-all group">
              <div className="text-[10px] font-bold uppercase tracking-widest text-black/40 mb-2">Capabilities</div>
              <div className="font-bold text-black group-hover:text-blue-600 transition-colors">Our Spatial Solutions</div>
            </Link>
            <Link href="/industries" className="p-6 bg-white border border-black/10 hover:border-black/30 rounded-xl transition-all group">
              <div className="text-[10px] font-bold uppercase tracking-widest text-black/40 mb-2">Sectors</div>
              <div className="font-bold text-black group-hover:text-blue-600 transition-colors">Industries We Serve</div>
            </Link>
            <Link href="/projects" className="p-6 bg-white border border-black/10 hover:border-black/30 rounded-xl transition-all group">
              <div className="text-[10px] font-bold uppercase tracking-widest text-black/40 mb-2">Portfolio</div>
              <div className="font-bold text-black group-hover:text-blue-600 transition-colors">Recent Installations</div>
            </Link>
          </div>
        </div>
      </section>

      {/* Next Steps CTA */}
      <section className="bg-black text-white py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-black mb-6">Ready to innovate your space?</h2>
          <p className="text-white/70 font-light mb-10 max-w-2xl mx-auto">
            Speak directly with our spatial engineering team to discuss how we can implement these technologies in your next architectural project.
          </p>
          <Link 
            href="/contact"
            className="inline-block px-8 py-4 bg-white text-black text-xs font-bold uppercase tracking-widest hover:bg-gray-200 transition-colors"
          >
            Schedule a Consultation
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
