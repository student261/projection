import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SafeImage from "@/components/SafeImage";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Clock, Calendar } from "lucide-react";
import { notFound } from "next/navigation";

interface BlogPost {
  title: string;
  subtitle: string;
  category: string;
  topic: string;
  date: string;
  readTime: string;
  heroImg: string;
  heroCaption: string;
  secondaryImg?: string;
  secondaryCaption?: string;
  author: {
    name: string;
    role: string;
  };
  metrics: { label: string; value: string; detail: string }[];
  takeaway: string;
  sections: {
    partNumber: string;
    title: string;
    content: string[];
    highlight?: string;
  }[];
  quote: {
    text: string;
    attribution: string;
  };
}

// Curated authentic blog content dictionary - STRICTLY NO SLASHES (/) IN CONTENT OR LABELS
const BLOG_DATA: Record<string, BlogPost> = {
  "future-of-motion-interactive-projection": {
    title: "The Future of Motion Interactive Projection",
    subtitle: "How LiDAR sensor fusion, multi-lumen laser arrays, and zero-latency tracking are transforming static physical surfaces into responsive, living architectural canvases.",
    category: "Spatial Technology",
    topic: "Architectural Computing and Sensor Fusion",
    date: "August 24, 2026",
    readTime: "6 Min Read",
    heroImg: "/images/interactive_floor_motion.jpg",
    heroCaption: "Figure 1: Multi-point optical tracking matrix calibrated over an 18-meter floor surface, delivering continuous real-time glass-to-glass response.",
    secondaryImg: "/images/cathedral_projection_mapping.jpg",
    secondaryCaption: "Figure 2: Real-time GPU particle simulation responding dynamically to visitor presence across multi-planar surfaces.",
    author: {
      name: "Projection Systems Architecture",
      role: "Spatial Engineering and Research"
    },
    metrics: [
      { label: "Glass-to-Glass Latency", value: "Real-Time", detail: "Near-instantaneous optical response" },
      { label: "Tracking Pipeline", value: "LiDAR Fusion", detail: "940nm multi-point optical array" },
      { label: "Surface Luminance", value: "15,000+ Lumens", detail: "Pure laser solid-state engine" },
      { label: "Spatial Blending", value: "Sub-Pixel", detail: "Automated geometric mesh warping" },
    ],
    takeaway: "True spatial integration occurs when the hardware disappears. Recessing projectors and LiDAR arrays flush into ceiling architecture allows the physical material itself—whether concrete, pale oak, or plaster—to become the interactive medium.",
    sections: [
      {
        partNumber: "Part 01",
        title: "The Shift From Screens to Living Surfaces",
        content: [
          "The boundaries between built architecture and digital experience are quietly dissolving. For decades, interactive technology meant putting a rectangular screen in a room—or forcing visitors to wear bulky headsets. Both approaches isolate the participant from their physical environment.",
          "Spatial motion projection takes the opposite philosophy: it leaves people completely unencumbered and turns the architecture itself into the interactive medium. When a visitor steps into a room, the floor responds to their stride, walls ripple with light as their hands approach, and the space acknowledges their presence without requiring them to hold a controller or stare down at a personal smartphone.",
          "Unlike LED video walls or floor monitors, projection leaves materials intact. In daylight or when the system is resting, the floor remains natural polished concrete, pale oak, or architectural terrazzo. When energized, light becomes a fluid dynamic layer that lives directly upon those physical textures."
        ]
      },
      {
        partNumber: "Part 02",
        title: "Sensor Fusion: Solving Multi-User Occlusion",
        content: [
          "The primary technical hurdle in interactive projection has never been raw projection brightness; it has always been tracking fidelity in crowded architectural spaces. Early interactive floors relied on a single ceiling-mounted camera. The moment two people stood close together or daylight shifted across the room, tracking degraded or failed entirely.",
          "Modern enterprise installations resolve this with sensor fusion. By networking multiple 940nm solid-state LiDAR units with optical depth sensors, the tracking engine creates an overlapping spatial Cartesian coordinate grid. When one sensor's line of sight is obstructed by a visitor's silhouette, adjacent sensors maintain positional lock.",
          "The result is continuous tracking across dozens of simultaneous participants with near-instantaneous response latency. Footfalls, directional walking velocity, and gestures are captured with millimeter accuracy, ensuring that interactive visuals feel immediate, tactile, and natural."
        ],
        highlight: "Sensor fusion networks eliminate the single-point-of-failure inherent in traditional camera systems, ensuring reliable tracking across changing ambient illumination and dense foot traffic."
      },
      {
        partNumber: "Part 03",
        title: "From Looped Animations to Real-Time Generative Shaders",
        content: [
          "Another fundamental shift is taking place inside the graphics pipeline. Traditional interactive installations relied on pre-rendered video clips triggered by bounding boxes. When you stepped on a tile, a 3-second pre-rendered animation played out.",
          "Today, high-end spatial installations run on real-time GPU compute shaders. The visual canvas is not a video file; it is a live mathematical simulation of fluid dynamics, magnetic particle flow, and volumetric light. When five people cross a lobby simultaneously, their particle wakes collide, merge, and produce emergent organic wave patterns that have never occurred before and will never repeat identically.",
          "This shift elevates interactive projection from a temporary novelty into permanent architectural art. It transforms public atriums, flagship brand environments, and cultural museums into living ecosystems that breathe in tandem with human movement."
        ]
      },
      {
        partNumber: "Part 04",
        title: "Architectural Integration: Concealed Engineering",
        content: [
          "The hallmark of an exceptional spatial installation is that the hardware is entirely concealed. AV equipment should never compete with interior architectural aesthetics.",
          "By specifying ultra-short-throw optics, custom ceiling recess pockets, and integrated thermal ventilation during the schematic design phase, projectors and LiDAR sensors sit flush with acoustic ceiling baffles. All signal transmission runs over single-run fiber infrastructure directly to a centralized server rack, leaving the visual envelope pristine and unobtrusive."
        ]
      }
    ],
    quote: {
      text: "When technology is truly embedded in architecture, the hardware vanishes. You are no longer interacting with an appliance; you are stepping directly into the canvas.",
      attribution: "Projection Systems Architecture Practice"
    }
  },
  "how-ai-is-redefining-interactive-experiences": {
    title: "How AI is Redefining Interactive Experiences",
    subtitle: "Moving beyond pre-programmed loops toward context-aware generative spaces that perceive, adapt, and converse with human occupants.",
    category: "Spatial AI and Vision",
    topic: "Autonomous Spaces and Computer Vision",
    date: "August 18, 2026",
    readTime: "8 Min Read",
    heroImg: "/images/corporate_lobby_wall.jpg",
    heroCaption: "Figure 1: Real-time ambient generative installation responding to collective crowd density and ambient sound levels in an architectural atrium.",
    author: {
      name: "Spatial Computing Research",
      role: "AI and Interactive Media Group"
    },
    metrics: [
      { label: "Perception Engine", value: "Real-Time", detail: "Contactless computer vision" },
      { label: "Content Generation", value: "Procedural", detail: "Zero pre-rendered video loops" },
      { label: "Adaptive Response", value: "Instant", detail: "Dynamic visual re-synthesis" },
      { label: "Sound and Light Sync", value: "Binaural", detail: "Co-localized spatial audio" },
    ],
    takeaway: "Generative AI bridges the gap between fixed architectural surfaces and living, empathetic environments. The space ceases to be a static display and becomes a perceptive host.",
    sections: [
      {
        partNumber: "Part 01",
        title: "Beyond Static Triggers",
        content: [
          "For years, interactive installations were deterministic: if input X occurs, execute animation Y. While engaging initially, deterministic systems lose their novelty quickly because regular occupants learn the underlying script.",
          "Integrating lightweight real-time AI models directly into the spatial pipeline changes the equation. The system doesn't simply detect touch points; it interprets motion vector flow, crowd velocity, dwell time, and group dynamics. A bustling morning rush triggers crisp, energetic flow patterns, while a quiet afternoon visitor induces calm, slow-drifting harmonic visuals."
        ]
      },
      {
        partNumber: "Part 02",
        title: "Context-Aware Environments",
        content: [
          "In healthcare and therapeutic sensory settings, adaptive algorithms modulate visual contrast and soothing soundscapes based on natural human movement pace. The environment works cooperatively to lower stress levels without requiring physical input buttons or wearable sensors.",
          "In flagship commercial settings, interactive surfaces synthesize brand storytelling elements dynamically, matching color palettes and kinetic velocity to the natural pace of visitors traversing the space."
        ]
      }
    ],
    quote: {
      text: "The environment is no longer just a display. It is an intelligent partner that adapts its visual and acoustic presence to the people who inhabit it.",
      attribution: "Spatial Computing Research Group"
    }
  },
  "choosing-the-right-interactive-solution-for-your-space": {
    title: "Choosing the Right Interactive Solution for Your Space",
    subtitle: "A practical engineering guide to evaluating throw distances, ambient lux levels, surface finishes, and sensor placement.",
    category: "Engineering Guide",
    topic: "Field Specification and AV Integration",
    date: "August 10, 2026",
    readTime: "5 Min Read",
    heroImg: "/images/technician_calibrating_projection.jpg",
    heroCaption: "Figure 1: Precision optical calibration verifying geometric grid alignment and lux uniformity across an architectural plane.",
    author: {
      name: "Technical Integration Practice",
      role: "AV Architecture and Calibration"
    },
    metrics: [
      { label: "Illumination Target", value: "10,000+ Lumens", detail: "High ambient light resilience" },
      { label: "Surface Spec", value: "Matte Finishes", detail: "Gain 0.9 to 1.1 non-reflective" },
      { label: "Optics Selection", value: "UST 0.25 to 1", detail: "Zero participant shadow cast" },
      { label: "Ceiling Clearance", value: "3.2m Minimum", detail: "Optimal sensor cone coverage" },
    ],
    takeaway: "The most successful spatial installations are planned during the architectural blueprint phase, ensuring thermal ventilation, optical throw distances, and sensor lines of sight are resolved before construction.",
    sections: [
      {
        partNumber: "Part 01",
        title: "Evaluating Ambient Light and Surface Finishes",
        content: [
          "Ambient light is the single most critical factor when specifying projection systems. High-lumen solid-state laser projectors (12,000 to 20,000+ ANSI lumens) allow crisp projection even in naturally lit spaces, provided direct beam sunlight does not wash across the display zone.",
          "Surface reflectivity is equally critical. High-gloss polished floors cause specular glare and wash out contrast. Specifying matte sealants, honed concrete, or non-specular vinyl maintains deep black levels and vibrant color saturation."
        ]
      },
      {
        partNumber: "Part 02",
        title: "Eliminating Shadow Casting with Optics",
        content: [
          "In interactive floor installations, participant shadows can interrupt tracking or block the image. Utilizing ultra-short-throw lenses mounted at steep downward angles minimizes the shadow footprint to just a few inches behind the participant's feet.",
          "Paired with overhead LiDAR scanners positioned outside the primary projection cone, the sensor beam remains clear and uninterrupted regardless of where visitors stand."
        ]
      }
    ],
    quote: {
      text: "AV engineering should never be treated as an afterthought. Designing mounting recesses and thermal airflow into the architectural package produces flawless results.",
      attribution: "Technical Integration Practice"
    }
  }
};

const ALL_POSTS_META = [
  {
    slug: "future-of-motion-interactive-projection",
    title: "The Future of Motion Interactive Projection",
    category: "Spatial Technology",
    readTime: "6 Min Read",
    index: "01",
    summary: "LiDAR sensor fusion, laser arrays, and zero-latency tracking in physical architecture."
  },
  {
    slug: "how-ai-is-redefining-interactive-experiences",
    title: "How AI is Redefining Interactive Experiences",
    category: "Spatial AI and Vision",
    readTime: "8 Min Read",
    index: "02",
    summary: "Context-aware generative spaces that perceive and adapt to crowd dynamics."
  },
  {
    slug: "choosing-the-right-interactive-solution-for-your-space",
    title: "Choosing the Right Interactive Solution",
    category: "Engineering Guide",
    readTime: "5 Min Read",
    index: "03",
    summary: "A practical guide to throw distance, lux targets, matte surfaces, and optical placement."
  }
];

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = BLOG_DATA[slug];
  
  if (!post) {
    return { title: "Publication Not Found - PROJECTION" };
  }

  return {
    title: `${post.title} | PROJECTION Spatial Intelligence`,
    description: post.subtitle,
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
    "description": post.subtitle,
    "image": [post.heroImg],
    "datePublished": new Date(post.date).toISOString(),
    "dateModified": new Date(post.date).toISOString(),
    "author": [{
      "@type": "Organization",
      "name": post.author.name
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

  const otherPosts = ALL_POSTS_META.filter(p => p.slug !== slug);

  return (
    <main className="min-h-screen bg-white text-black flex flex-col pt-24 selection:bg-black selection:text-white font-sans antialiased">
      <Navbar />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Top Editorial Header */}
      <header className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 pb-12">
        {/* Navigation Breadcrumb */}
        <div className="mb-10">
          <Link 
            href="/blogs"
            className="inline-flex items-center gap-2.5 text-xs font-mono font-medium uppercase tracking-[0.2em] text-black/50 hover:text-black transition-colors group"
          >
            <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
            <span>All Publications</span>
          </Link>
        </div>

        {/* Category & Topic - Clean Typography, Strictly No Slashes */}
        <div className="flex flex-wrap items-center gap-3 text-xs font-mono uppercase tracking-[0.18em] mb-6">
          <span className="font-bold text-black">
            {post.category}
          </span>
          <span className="text-black/30">•</span>
          <span className="text-black/50 font-normal">
            {post.topic}
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.04] text-black mb-8 max-w-5xl">
          {post.title}
        </h1>

        {/* Subtitle / Deck */}
        <p className="text-xl sm:text-2xl font-light leading-relaxed text-black/75 max-w-4xl mb-12">
          {post.subtitle}
        </p>

        {/* Metadata Byline - Zero Cards, Pure Clean Typography, No Slashes */}
        <div className="flex flex-wrap items-center gap-y-3 gap-x-8 text-xs font-mono uppercase tracking-[0.16em] text-black/50 pt-6">
          <div>
            <span className="text-black/30 mr-2">AUTHORED BY</span>
            <span className="text-black font-semibold">{post.author.name}</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="w-3.5 h-3.5 text-black/40" />
            <span className="text-black/80">{post.date}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-3.5 h-3.5 text-black/40" />
            <span className="text-black/80">{post.readTime}</span>
          </div>
        </div>
      </header>

      {/* Hero Visual Showcase - Pure Borderless Cinematic Presentation */}
      <section className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 sm:mb-24">
        <div className="w-full aspect-[21/10] sm:aspect-[21/9] relative overflow-hidden bg-neutral-100">
          <SafeImage 
            src={post.heroImg}
            alt={post.title}
            priority={true}
            className="w-full h-full object-cover"
            containerClassName="w-full h-full"
          />
        </div>
        <div className="mt-4 flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 text-xs font-mono text-black/50">
          <p className="leading-relaxed max-w-3xl">
            {post.heroCaption}
          </p>
          <span className="shrink-0 uppercase tracking-widest text-black/30">
            Spatial Systems Architecture
          </span>
        </div>
      </section>

      {/* Two-Column Editorial Article Grid */}
      <section className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Main Article Content (8 cols) */}
          <article className="lg:col-span-8 space-y-16">
            
            {/* Sections Loop */}
            {post.sections.map((section, idx) => (
              <div key={idx} className="space-y-6">
                <div className="text-xs font-mono uppercase tracking-[0.25em] text-black/40">
                  {section.partNumber}
                </div>
                
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-black leading-snug">
                  {section.title}
                </h2>

                <div className="space-y-6 text-black/80 font-light leading-relaxed text-lg sm:text-[19px]">
                  {section.content.map((paragraph, pIdx) => (
                    <p 
                      key={pIdx}
                      className={idx === 0 && pIdx === 0 ? "text-xl sm:text-2xl font-light text-black leading-relaxed" : ""}
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>

                {section.highlight && (
                  <div className="pl-6 py-2 my-8 border-l-2 border-black">
                    <p className="text-base sm:text-lg font-medium text-black italic leading-relaxed">
                      {section.highlight}
                    </p>
                  </div>
                )}

                {/* Inline Architectural Photographic Accent after Part 02 */}
                {idx === 1 && post.secondaryImg && (
                  <div className="pt-8 pb-4 space-y-3">
                    <div className="w-full aspect-[16/9] relative overflow-hidden bg-neutral-100">
                      <SafeImage 
                        src={post.secondaryImg}
                        alt="Architectural Projection Field Installation"
                        priority={true}
                        className="w-full h-full object-cover"
                        containerClassName="w-full h-full"
                      />
                    </div>
                    {post.secondaryCaption && (
                      <p className="text-xs font-mono text-black/50 leading-relaxed">
                        {post.secondaryCaption}
                      </p>
                    )}
                  </div>
                )}
              </div>
            ))}

            {/* Editorial Pull Quote */}
            <div className="py-12 my-8">
              <blockquote className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-black leading-[1.25]">
                &ldquo;{post.quote.text}&rdquo;
              </blockquote>
              <div className="mt-4 text-xs font-mono uppercase tracking-[0.2em] text-black/50">
                — {post.quote.attribution}
              </div>
            </div>

            {/* Architecture In Practice Summary */}
            <div className="space-y-4 pt-4">
              <div className="text-xs font-mono uppercase tracking-[0.25em] text-black/40">
                Synthesis
              </div>
              <h3 className="text-2xl font-bold tracking-tight text-black">
                The Path to Implementation
              </h3>
              <p className="text-black/80 font-light leading-relaxed text-lg sm:text-[19px]">
                Architectural projection has evolved past the era of one-off digital novelties. When optical precision, multi-sensor calibration, and real-time generative software are harmonized from initial design blueprints, spaces gain a dynamic personality that elevates how people congregate, learn, and experience built spaces.
              </p>
            </div>

          </article>

          {/* Sticky Editorial Sidebar / Marginalia (4 cols) - Zero Cards, Pure Clean Typography */}
          <aside className="lg:col-span-4 lg:sticky lg:top-28 space-y-12">
            
            {/* System Metrics Panel */}
            <div className="space-y-6">
              <div className="text-xs font-mono uppercase tracking-[0.25em] text-black/40">
                Technical Specifications
              </div>
              
              <div className="space-y-6">
                {post.metrics.map((metric, mIdx) => (
                  <div key={mIdx} className="space-y-1">
                    <div className="text-xs font-mono uppercase tracking-wider text-black/50">
                      {metric.label}
                    </div>
                    <div className="text-2xl font-black tracking-tight text-black">
                      {metric.value}
                    </div>
                    <div className="text-xs font-light text-black/60">
                      {metric.detail}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Specifier Brief */}
            <div className="space-y-3 pt-6">
              <div className="text-xs font-mono uppercase tracking-[0.25em] text-black/40">
                Specifier Brief
              </div>
              <p className="text-sm font-light text-black/80 leading-relaxed">
                {post.takeaway}
              </p>
            </div>

            {/* Practice Contact Direct */}
            <div className="space-y-3 pt-6">
              <div className="text-xs font-mono uppercase tracking-[0.25em] text-black/40">
                Technical Consultation
              </div>
              <p className="text-xs font-light text-black/60 leading-relaxed">
                Consult directly with our systems engineering team regarding optical throw ratios, laser lumens, and LiDAR grid specifications.
              </p>
              <Link 
                href="/contact"
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-black hover:opacity-70 transition-opacity pt-1"
              >
                <span>Request Technical Brief</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>

          </aside>

        </div>
      </section>

      {/* Related Publications - Zero Box Cards, Pure Editorial Typographic Flow, Strictly No Slashes */}
      <section className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="mb-12">
          <div className="text-xs font-mono uppercase tracking-[0.25em] text-black/40 mb-2">
            Further Reading
          </div>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-black">
            Spatial Intelligence Journal
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          {otherPosts.map((related) => (
            <Link
              key={related.slug}
              href={`/blogs/${related.slug}`}
              className="group block space-y-4"
            >
              <div className="flex items-center justify-between text-xs font-mono text-black/40 uppercase tracking-widest">
                <span>Article {related.index} • {related.category}</span>
                <span>{related.readTime}</span>
              </div>
              
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-black group-hover:text-black/70 transition-colors leading-snug">
                {related.title}
              </h3>

              <p className="text-sm sm:text-base font-light text-black/65 leading-relaxed">
                {related.summary}
              </p>

              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-black group-hover:gap-3 transition-all pt-2">
                <span>Read Publication</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Seamless Minimalist Bottom Inquiry Section */}
      <section className="w-full bg-black text-white py-24 sm:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <div className="text-xs font-mono uppercase tracking-[0.3em] text-white/50">
            Spatial Systems Integration
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.06]">
            Architect your next interactive surface.
          </h2>
          <p className="text-base sm:text-xl font-light text-white/70 max-w-2xl mx-auto leading-relaxed">
            Collaborate directly with our engineering and creative team to design custom projection mapping and zero-latency sensor experiences for your venue.
          </p>
          <div className="pt-4">
            <Link 
              href="/contact"
              className="w-full sm:w-auto inline-flex justify-center items-center gap-3 px-8 py-4 bg-white text-black text-xs font-mono font-bold uppercase tracking-widest hover:bg-neutral-200 transition-colors"
            >
              <span>Consult with an Architect</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
