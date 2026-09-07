"use client";

import { useState } from "react";
import Footer from "@/components/Footer";
import Link from "next/link";
import {
  ArrowRight,
  Sparkles,
  ChevronDown,
  CheckCircle2,
  GraduationCap,
  HeartPulse,
  ShoppingBag,
  Landmark,
  Film,
  Utensils,
  Briefcase,
  Building2,
  Search,
  PenTool,
  Code,
  Wrench,
  Headphones,
  HelpCircle,
  Clock,
  Users,
  Palette,
  Maximize2,
  RefreshCw,
  TrendingUp,
  Activity,
  Layers,
  Cpu,
  Eye,
} from "lucide-react";

export default function IndustriesContent() {
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(0);
  const [activeTabIdx, setActiveTabIdx] = useState<number>(0);

  const toggleFaq = (idx: number) => {
    setOpenFaqIdx(openFaqIdx === idx ? null : idx);
  };

  const useCasesList = [
    {
      id: "education",
      title: "Interactive Learning",
      tag: "EDUCATION USE CASES",
      desc: "Turn lessons into hands-on experiences using interactive projection, movement, and digital content.",
      cases: ["Interactive classrooms", "Learning games", "STEM activities", "Movement-based learning", "Digital storytelling"],
      icon: GraduationCap,
    },
    {
      id: "healthcare",
      title: "Patient Engagement & Rehabilitation",
      tag: "HEALTHCARE USE CASES",
      desc: "Use interactive activities to encourage movement and participation in healthcare and rehabilitation environments.",
      cases: ["Rehabilitation activities", "Movement exercises", "Patient engagement", "Interactive therapy environments", "Waiting-area experiences"],
      icon: HeartPulse,
    },
    {
      id: "retail",
      title: "Interactive Brand Experiences",
      tag: "RETAIL USE CASES",
      desc: "Give customers new ways to interact with products, campaigns, and your brand.",
      cases: ["Interactive product displays", "Brand activations", "Digital signage", "Interactive walls", "Customer engagement"],
      icon: ShoppingBag,
    },
    {
      id: "museums",
      title: "Interactive Exhibitions",
      tag: "MUSEUMS & EXHIBITIONS USE CASES",
      desc: "Make exhibits more engaging by allowing visitors to interact with information, stories, visuals, and digital content.",
      cases: ["Interactive exhibits", "Digital storytelling", "Projection mapping", "Interactive walls", "Visitor engagement"],
      icon: Landmark,
    },
    {
      id: "entertainment",
      title: "Interactive Attractions",
      tag: "ENTERTAINMENT USE CASES",
      desc: "Create experiences where visitors can move, play, compete, and interact with digital environments.",
      cases: ["Interactive games", "Motion-based games", "Immersive attractions", "Family entertainment", "Digital play areas"],
      icon: Film,
    },
    {
      id: "hospitality",
      title: "Guest Experiences",
      tag: "HOSPITALITY USE CASES",
      desc: "Add interactive digital experiences to hotels, resorts, events, and other hospitality environments.",
      cases: ["Guest engagement", "Interactive displays", "Digital installations", "Lobby experiences", "Event experiences"],
      icon: Utensils,
    },
    {
      id: "corporate",
      title: "Business & Brand Experiences",
      tag: "CORPORATE USE CASES",
      desc: "Use interactive technology to make presentations, showrooms, experience centers, and events more engaging.",
      cases: ["Experience centers", "Product demonstrations", "Interactive presentations", "Corporate events", "Showrooms"],
      icon: Briefcase,
    },
    {
      id: "public",
      title: "Interactive Public Installations",
      tag: "PUBLIC SPACE USE CASES",
      desc: "Turn high-traffic public spaces into places where people can stop, interact, and engage.",
      cases: ["Airports", "Shopping malls", "Parks", "Community spaces", "Public installations"],
      icon: Building2,
    },
  ];

  const activeUseCase = useCasesList[activeTabIdx];

  return (
    <>
      {/* 01. HERO BANNER */}
      <section className="relative min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[600px] bg-black/20 blur-[160px] rounded-full" />
          <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-indigo-600/15 blur-[130px] rounded-full" />
          <div className="absolute top-1/3 right-1/4 w-[550px] h-[550px] bg-fuchsia-600/15 blur-[140px] rounded-full" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_65%_50%_at_50%_40%,#000_70%,transparent_100%)]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="max-w-5xl mx-auto leading-[1.1] text-white">
            Interactive Experiences Designed for{" "}
            <span className="text-white">Every Industry</span>
          </h1>

          <p className="mt-6 text-base sm:text-xl text-gray-300 max-w-4xl mx-auto font-light leading-relaxed">
            Every industry has unique challenges, audiences, and goals. Our interactive solutions combine Motion Interactive Projection, Interactive Experiences, AI-powered Technology, and Immersive Solutions to transform learning, retail, healthcare, entertainment, and public spaces into engaging, memorable experiences.
          </p>

          <div className="mt-10 flex items-center justify-center">
            <a
              href="#industry-overview"
              className="w-full sm:w-auto px-8 py-4 rounded-full font-semibold text-white bg-black shadow-2xl shadow-white/10 flex items-center justify-center gap-3 transition-transform duration-300 hover:scale-105"
            >
              <span>Explore Industries</span>
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>

          <div className="mt-12 flex flex-col items-center gap-2 text-gray-400 text-xs">
            <span>Discover Our Industries</span>
            <ChevronDown className="w-4 h-4 animate-bounce text-neutral-400" />
          </div>

          <div className="mt-10 pt-8 border-t border-white/10 max-w-3xl mx-auto">
            <p className="text-xs sm:text-sm text-gray-400 flex items-center justify-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-neutral-400 shrink-0" />
              <span>Trusted by educators, retailers, healthcare providers, museums, hospitality brands, entertainment venues, and organizations creating engaging interactive experiences.</span>
            </p>
          </div>
        </div>
      </section>

      {/* 02. INDUSTRY STORYTELLING */}
      <section className="py-24 relative overflow-hidden bg-black/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-panel p-8 sm:p-16 rounded-3xl border-white/10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-black/10 blur-[120px] pointer-events-none" />
            
            <div className="max-w-3xl">
              <h2 className="text-white mb-6">
                Every Industry Deserves an <span className="text-white">Extraordinary Experience</span>
              </h2>
              <div className="space-y-4 text-gray-300 text-sm sm:text-base font-light leading-relaxed mb-8">
                <p>
                  Every industry is different, but one thing remains the same—people remember experiences, not just places.
                </p>
                <p>
                  A classroom becomes more engaging when learning is interactive. A retail store becomes more memorable when customers participate. A museum becomes more meaningful when every exhibit tells a story. A healthcare space becomes more motivating when therapy feels like play.
                </p>
                <p>
                  At <strong className="text-white font-semibold">PROJECTION</strong>, we believe technology should do more than display content—it should create meaningful human connections. That&apos;s why we design interactive experiences that adapt to the unique needs of every industry, transforming everyday environments into spaces that inspire curiosity, encourage participation, and leave lasting impressions.
                </p>
              </div>

              <div className="p-4 rounded-2xl glass-panel border-white/10 mb-8">
                <p className="text-xs sm:text-sm text-purple-200 font-medium italic">
                  &ldquo;Whether you&apos;re educating, entertaining, healing, or engaging, our interactive solutions are designed to bring people and technology together in ways that feel natural, memorable, and impactful.&rdquo;
                </p>
              </div>

              <a
                href="#industry-overview"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-semibold text-white bg-black shadow-2xl shadow-white/10 hover:scale-105 transition-transform"
              >
                <span>Explore Our Industries</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 03. INDUSTRIES OVERVIEW & SHOWCASE */}
      <section id="industry-overview" className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Interactive Technology for <span className="text-white">Every Industry</span>
            </p>
            <p className="mt-4 text-gray-300 text-base sm:text-lg font-light leading-relaxed">
              From education and healthcare to retail, museums, entertainment, and public spaces, our interactive technologies help organizations create engaging experiences for the people they serve.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              {
                id: "education",
                title: "Education",
                icon: GraduationCap,
                desc: "Make learning more active with interactive classrooms, digital activities, motion-based games, and engaging learning environments.",
                apps: "Interactive Learning · Digital Classrooms · Educational Games",
                cta: "View Education",
              },
              {
                id: "healthcare",
                title: "Healthcare",
                icon: HeartPulse,
                desc: "Use interactive technology to support rehabilitation, patient engagement, movement activities, and better healthcare environments.",
                apps: "Rehabilitation · Patient Engagement · Movement Activities",
                cta: "View Healthcare",
              },
              {
                id: "retail",
                title: "Retail",
                icon: ShoppingBag,
                desc: "Create interactive shopping experiences that help customers engage with products, campaigns, and your brand.",
                apps: "Interactive Displays · Product Experiences · Brand Activations",
                cta: "View Retail",
              },
              {
                id: "museums",
                title: "Museums & Exhibitions",
                icon: Landmark,
                desc: "Bring exhibits and stories to life through interactive displays, digital storytelling, projection, and immersive environments.",
                apps: "Interactive Exhibits · Digital Storytelling · Projection Experiences",
                cta: "View Museums",
              },
              {
                id: "entertainment",
                title: "Entertainment",
                icon: Film,
                desc: "Create attractions that combine movement, games, projection, and digital content to keep visitors involved.",
                apps: "Interactive Games · Immersive Attractions · Motion Experiences",
                cta: "View Entertainment",
              },
              {
                id: "hospitality",
                title: "Hospitality",
                icon: Utensils,
                desc: "Give guests memorable experiences through interactive displays, digital installations, and engaging environments.",
                apps: "Guest Experiences · Digital Displays · Interactive Installations",
                cta: "View Hospitality",
              },
              {
                id: "corporate",
                title: "Corporate",
                icon: Briefcase,
                desc: "Make offices, experience centers, events, and product demonstrations more engaging with interactive technology.",
                apps: "Experience Centers · Events · Product Demonstrations",
                cta: "View Corporate",
              },
              {
                id: "public",
                title: "Public Spaces",
                icon: Building2,
                desc: "Bring interactive experiences to airports, malls, parks, community spaces, and other public venues.",
                apps: "Public Installations · Interactive Displays · Digital Experiences",
                cta: "View Public Spaces",
              },
            ].map((ind, idx) => (
              <div
                key={ind.id}
                className="glass-panel p-6 rounded-3xl border-white/10 hover:border-neutral-700/50 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-black flex items-center justify-center text-white mb-5 shadow-2xl shadow-white/10 group-hover:scale-110 transition-transform">
                    <ind.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-white mb-2">{ind.title}</h3>
                  <p className="text-gray-300 text-xs font-light leading-relaxed mb-4">{ind.desc}</p>
                  <p className="text-[11px] text-neutral-300 font-medium mb-6">{ind.apps}</p>
                </div>
                <div className="pt-4 border-t border-white/5">
                  <button
                    onClick={() => {
                      setActiveTabIdx(idx);
                      const el = document.getElementById("industry-applications");
                      el?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-neutral-400 hover:text-neutral-300"
                  >
                    <span>{ind.cta} →</span>
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="glass-panel p-8 rounded-3xl border-white/10 text-center max-w-3xl mx-auto flex flex-col items-center gap-4">
            <h3 className="text-white">Find the Right Technology for Your Industry</h3>
            <p className="text-xs sm:text-sm text-gray-300 font-light">See how interactive experiences can work in your space.</p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-semibold text-white bg-black shadow-2xl shadow-white/10 hover:scale-105 transition-transform"
            >
              <span>View All Industries</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 04. INDUSTRY APPLICATIONS & USE CASES */}
      <section id="industry-applications" className="py-24 relative overflow-hidden bg-black/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Interactive Technology Built for <span className="text-white">Real-World Applications</span>
            </p>
            <p className="mt-4 text-gray-300 text-base sm:text-lg font-light leading-relaxed">
              From interactive learning and rehabilitation to brand experiences and visitor attractions, our technology can be adapted to different goals, spaces, and audiences.
            </p>
          </div>

          {/* Industry Switcher Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
            {useCasesList.map((item, idx) => {
              const isActive = activeTabIdx === idx;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTabIdx(idx)}
                  className={`px-4 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 flex items-center gap-2 ${
                    isActive
                      ? "bg-black text-white shadow-2xl shadow-white/10"
                      : "glass-panel text-gray-300 border-white/10 hover:border-white/10"
                  }`}
                >
                  <item.icon className="w-4 h-4" />
                  <span>{item.id.charAt(0).toUpperCase() + item.id.slice(1)}</span>
                </button>
              );
            })}
          </div>

          {/* Active Tab Content Card */}
          <div className="glass-panel p-8 sm:p-12 rounded-3xl border-white/10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center max-w-5xl mx-auto mb-12">
            <div>
              <span className="text-xs text-neutral-400 font-bold uppercase tracking-wider block mb-2">
                {activeUseCase.tag}
              </span>
              <h3 className="text-white mb-4">
                {activeUseCase.title}
              </h3>
              <p className="text-gray-300 text-sm font-light leading-relaxed mb-6">
                {activeUseCase.desc}
              </p>
              <div className="space-y-2 mb-8">
                {activeUseCase.cases.map((c, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs sm:text-sm text-gray-200">
                    <CheckCircle2 className="w-4 h-4 text-neutral-400 shrink-0" />
                    <span>{c}</span>
                  </div>
                ))}
              </div>
              <Link
                href="/solutions"
                className="inline-flex items-center gap-2 text-sm font-semibold text-neutral-400 hover:text-neutral-300"
              >
                <span>View Solution →</span>
              </Link>
            </div>

            <div className="glass-panel p-8 rounded-2xl border-white/10 text-center flex flex-col items-center justify-center min-h-[250px] relative overflow-hidden">
              <div className="w-16 h-16 rounded-2xl bg-black flex items-center justify-center text-white mb-4 shadow-2xl shadow-white/10">
                <activeUseCase.icon className="w-8 h-8" />
              </div>
              <p className="text-white font-bold text-lg mb-1">{activeUseCase.title}</p>
              <span className="text-xs text-neutral-400 font-medium">Tailored Technology Implementation</span>
            </div>
          </div>

          <div className="glass-panel p-8 rounded-3xl border-white/10 text-center max-w-3xl mx-auto flex flex-col items-center gap-4">
            <h3 className="text-white">Have a Specific Use Case in Mind?</h3>
            <p className="text-xs sm:text-sm text-gray-300 font-light">Tell us what you want to create and we&apos;ll help you choose the right technology.</p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-semibold text-white bg-black shadow-2xl shadow-white/10 hover:scale-105 transition-transform"
            >
              <span>Discuss Your Project</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 05. WHY INTERACTIVE EXPERIENCES MATTER */}
      <section className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Why Interactive <span className="text-white">Experiences Matter</span>
            </p>
            <p className="mt-4 text-gray-300 text-base sm:text-lg font-light leading-relaxed">
              People remember what they take part in. Interactive technology gives audiences a chance to move, respond, learn, and engage instead of simply watching or reading.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              {
                num: "01",
                title: "More Engagement",
                desc: "Interactive experiences give people an active role instead of asking them to simply watch or read.",
                matters: "More participation can lead to stronger audience engagement.",
              },
              {
                num: "02",
                title: "Better Learning",
                desc: "Interactive visuals, movement, games, and activities can make complex information easier to understand and more enjoyable to learn.",
                matters: "People can learn by doing rather than only listening or reading.",
              },
              {
                num: "03",
                title: "Longer Dwell Time",
                desc: "Interactive experiences give visitors a reason to stop, participate, and spend more time in a space.",
                matters: "Useful for retail stores, museums, entertainment venues, exhibitions, and public spaces.",
              },
              {
                num: "04",
                title: "Stronger Brand Connection",
                desc: "Interactive technology allows customers to experience a brand rather than simply see an advertisement.",
                matters: "It can create stronger interactions between people and brands.",
              },
              {
                num: "05",
                title: "Memorable Experiences",
                desc: "People are more likely to remember experiences that involve movement, participation, visuals, and interaction.",
                matters: "A memorable experience can encourage repeat visits, sharing, and word-of-mouth.",
              },
              {
                num: "06",
                title: "Better Use of Space",
                desc: "Floors, walls, rooms, and other surfaces can become part of the experience.",
                matters: "You can add value to existing spaces without relying only on traditional displays.",
              },
            ].map((ben, i) => (
              <div key={i} className="glass-panel p-6 rounded-3xl border-white/10 hover:border-neutral-700/50 transition-all flex flex-col justify-between">
                <div>
                  <span className="text-xs font-extrabold text-neutral-400 block mb-2">{ben.num}</span>
                  <h3 className="text-white mb-2">{ben.title}</h3>
                  <p className="text-gray-300 text-xs font-light leading-relaxed mb-4">{ben.desc}</p>
                </div>
                <div className="pt-4 border-t border-white/5">
                  <p className="text-[11px] text-neutral-300 font-medium">
                    <strong className="text-white">Why it matters:</strong> {ben.matters}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="glass-panel p-8 rounded-3xl border-white/10 text-center max-w-3xl mx-auto flex flex-col items-center gap-4">
            <h3 className="text-white">Ready to Create a More Engaging Space?</h3>
            <p className="text-xs sm:text-sm text-gray-300 font-light">Let&apos;s discuss your goals, space, and audience and find an interactive experience that fits.</p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-semibold text-white bg-black shadow-2xl shadow-white/10 hover:scale-105 transition-transform"
            >
              <span>Talk to Our Experts</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 06. KEY BENEFITS & CAPABILITIES */}
      <section className="py-24 relative overflow-hidden bg-black/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Key Benefits & <span className="text-white">Capabilities</span>
            </p>
            <p className="mt-4 text-gray-300 text-base sm:text-lg font-light leading-relaxed">
              Our interactive solutions combine responsive technology, flexible content, and practical features to help organizations create better experiences for their visitors, customers, students, patients, and teams.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              { title: "More Engagement", desc: "Give people an active role in the experience through movement, touch, games, visuals, and responsive digital content.", best: "Visitors · Customers · Students · Guests" },
              { title: "Better Learning", desc: "Make lessons and information easier to understand through interactive visuals, activities, games, and hands-on experiences.", best: "Schools · Training Centers · Museums · Learning Spaces" },
              { title: "Custom Content", desc: "Use content that matches your brand, audience, subject, campaign, or learning goals.", best: "Brands · Educators · Museums · Businesses" },
              { title: "Multi-User Experience", desc: "Allow several people to interact with the same experience, making it suitable for groups, classrooms, exhibitions, and entertainment spaces.", best: "Groups · Families · Classrooms · Visitors" },
              { title: "Flexible Setup", desc: "Adapt the technology to different room sizes, surfaces, layouts, and environments.", best: "Small Spaces · Large Venues · Events · Permanent Installations" },
              { title: "Easy Content Updates", desc: "Add new activities, games, visuals, campaigns, or learning content as your needs change.", best: "Long-Term Installations · Seasonal Campaigns · Education · Retail" },
            ].map((cap, i) => (
              <div key={i} className="glass-panel p-6 rounded-3xl border-white/10 hover:border-neutral-700/50 transition-all flex flex-col justify-between">
                <div>
                  <h3 className="text-white mb-2">{cap.title}</h3>
                  <p className="text-gray-300 text-xs font-light leading-relaxed mb-4">{cap.desc}</p>
                </div>
                <div className="pt-4 border-t border-white/5">
                  <span className="text-[10px] uppercase tracking-wider text-neutral-400 font-bold block mb-1">Best For</span>
                  <p className="text-xs text-gray-300 font-medium">{cap.best}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Benefit Strip */}
          <div className="glass-panel p-6 rounded-2xl border-white/10 text-center max-w-4xl mx-auto mb-8">
            <span className="text-xs font-bold text-neutral-400 uppercase tracking-widest block mb-2">Built Around Your Goals</span>
            <p className="text-xs sm:text-sm text-gray-200 font-semibold flex flex-wrap items-center justify-center gap-4">
              <span>Engage More People</span>
              <span className="text-neutral-800">•</span>
              <span>Improve Learning</span>
              <span className="text-neutral-800">•</span>
              <span>Increase Participation</span>
              <span className="text-neutral-800">•</span>
              <span>Create Memorable Experiences</span>
            </p>
          </div>

          <div className="text-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-semibold text-white bg-black shadow-2xl shadow-white/10 hover:scale-105 transition-transform"
            >
              <span>See What Our Technology Can Do</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 07. FEATURED PROJECTS & CASE STUDIES */}
      <section className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Featured Projects & <span className="text-white">Case Studies</span>
            </p>
            <p className="mt-4 text-gray-300 text-base sm:text-lg font-light leading-relaxed">
              See how our interactive technology is being used in real spaces to create engaging experiences for different industries and audiences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Interactive Learning Experience",
                industry: "Education",
                tech: "Interactive Projection + Motion Tracking",
                overview: "An interactive learning environment where students can learn through movement, digital visuals, games, and hands-on activities.",
                highlights: ["Interactive learning activities", "Motion-based interaction", "Multi-user participation", "Digital educational content"],
              },
              {
                title: "Interactive Museum Experience",
                industry: "Museums & Exhibitions",
                tech: "Projection Mapping + Interactive Displays",
                overview: "A digital exhibition that uses interactive content and projection to help visitors engage with exhibits and stories.",
                highlights: ["Interactive exhibits", "Digital storytelling", "Visitor participation", "Immersive visuals"],
              },
              {
                title: "Interactive Brand Experience",
                industry: "Retail / Corporate",
                tech: "Interactive Display + Motion Tracking",
                overview: "An interactive installation that gives visitors a new way to interact with a brand, campaign, or product.",
                highlights: ["Brand interaction", "Customer engagement", "Real-time response", "Digital content"],
              },
            ].map((proj, i) => (
              <div key={i} className="glass-panel rounded-3xl p-6 border-white/10 hover:border-neutral-700/50 transition-all flex flex-col justify-between">
                <div>
                  <span className="text-[11px] font-semibold px-3 py-1 rounded-full glass-panel text-neutral-300 border-white/10 mb-4 inline-block">
                    {proj.industry}
                  </span>
                  <h3 className="text-white mb-2">{proj.title}</h3>
                  <p className="text-xs text-neutral-400 font-semibold mb-4">{proj.tech}</p>
                  <p className="text-gray-300 text-xs font-light leading-relaxed mb-6">{proj.overview}</p>
                  
                  <div className="space-y-1.5 mb-6 pt-4 border-t border-white/5">
                    {proj.highlights.map((hl, k) => (
                      <div key={k} className="text-xs text-gray-300 flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-neutral-400 shrink-0" />
                        <span>{hl}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <Link href="/projects" className="inline-flex items-center gap-1.5 text-xs font-semibold text-neutral-400 hover:text-neutral-300">
                  <span>View Case Study</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 08. OUR PROCESS */}
      <section className="py-24 relative overflow-hidden bg-black/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Our <span className="text-white">Process</span>
            </p>
            <p className="mt-4 text-gray-300 text-base sm:text-lg font-light leading-relaxed">
              From the first discussion to installation and ongoing support, we work with you at every stage to bring your interactive experience to life.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-16">
            {[
              { step: "01", name: "DISCOVER", title: "Understand Your Needs", icon: Search, desc: "We start by learning about your industry, audience, space, goals, budget, and technical requirements." },
              { step: "02", name: "PLAN", title: "Plan the Experience", icon: PenTool, desc: "We decide how the experience should work, what technology is needed, and how people will interact with it." },
              { step: "03", name: "DEVELOP", title: "Build the Experience", icon: Code, desc: "Our team develops the digital experience using interactive projection, motion tracking, AI, and displays." },
              { step: "04", name: "INSTALL", title: "Set Up & Test", icon: Wrench, desc: "We install equipment, configure the system, calibrate technology, and test the complete experience." },
              { step: "05", name: "SUPPORT", title: "Keep It Running", icon: Headphones, desc: "After installation, we provide technical support and help you keep your content and system up to date." },
            ].map((st, i) => (
              <div key={i} className="glass-panel p-6 rounded-3xl border-white/10 hover:border-neutral-700/50 transition-all flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center text-white mb-4 shadow-2xl shadow-white/10 font-bold">
                    <st.icon className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-bold text-neutral-400 block mb-1">STEP {st.step} — {st.name}</span>
                  <h3 className="text-white mb-2">{st.title}</h3>
                  <p className="text-gray-300 text-xs font-light leading-relaxed">{st.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="glass-panel p-8 rounded-3xl border-white/10 text-center max-w-3xl mx-auto flex flex-col items-center gap-4">
            <h3 className="text-white">Have an Idea for Your Space?</h3>
            <p className="text-xs sm:text-sm text-gray-300 font-light">Tell us what you want to create, and we&apos;ll help you plan the right interactive experience.</p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-semibold text-white bg-black shadow-2xl shadow-white/10 hover:scale-105 transition-transform"
            >
              <span>Start Your Project</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 09. FREQUENTLY ASKED QUESTIONS */}
      <section className="py-24 relative overflow-hidden bg-black/50 border-t border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 space-y-3">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-neutral-400">
              FREQUENTLY ASKED QUESTIONS
            </span>
            <h2 className="text-white">
              Answers to Your <span className="text-white">Industry Questions</span>
            </h2>
            <p className="mt-4 text-gray-300 text-base font-light max-w-2xl mx-auto leading-relaxed">
              Find answers to the most common questions about our interactive solutions, supported industries, customization options, installation process, and ongoing support.
            </p>
          </div>

          <div className="space-y-4 mb-16">
            {[
              { q: "Which industries do you serve?", a: "We provide interactive solutions for education, retail, healthcare, hospitality, museums, entertainment, corporate environments, public spaces, and many other industries. Every solution is customized to meet the specific needs of your industry." },
              { q: "Can your solutions be customized for my industry?", a: "Yes. Every interactive experience is tailored to your space, audience, objectives, and branding to ensure it aligns with your operational and engagement goals." },
              { q: "How do I know which interactive solution is right for my business?", a: "Our team evaluates your industry, available space, audience, and objectives before recommending the most suitable interactive solution for your project." },
              { q: "Are your interactive solutions suitable for both indoor and outdoor spaces?", a: "Yes. Depending on the project requirements, we design solutions for indoor environments and selected outdoor applications using appropriate hardware and installation methods." },
              { q: "How long does it take to complete a project?", a: "Project timelines vary depending on the scope and complexity. After understanding your requirements, we provide a detailed implementation schedule and estimated delivery timeline." },
              { q: "Do you provide installation and technical support?", a: "Yes. We offer complete services, including consultation, design, installation, training, maintenance, and ongoing technical support." },
              { q: "Can your solutions integrate with our existing infrastructure?", a: "Yes. Our interactive technologies can be integrated with existing spaces and systems wherever technically feasible, minimizing disruption during implementation." },
              { q: "How can I get started with PROJECTION?", a: "Simply contact our team or book a demo. We'll discuss your goals, recommend the right interactive solution, and guide you through every step of the project." },
            ].map((faq, idx) => {
              const isOpen = openFaqIdx === idx;
              const itemNum = String(idx + 1).padStart(2, "0");

              return (
                <div
                  key={idx}
                  className={`glass-panel rounded-2xl transition-all duration-300 overflow-hidden ${
                    isOpen
                      ? "border-neutral-700/80 shadow-[0_0_30px_rgba(147,51,234,0.25)] bg-white/10"
                      : "border-white/10 hover:border-white/20 bg-white/5"
                  }`}
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full text-left p-6 flex items-start justify-between gap-4 text-white font-semibold text-base sm:text-lg hover:text-neutral-300 transition-colors cursor-pointer group"
                  >
                    <div className="flex items-start gap-4">
                      <span className={` text-sm font-extrabold pt-0.5 ${isOpen ? "text-neutral-400" : "text-gray-500 group-hover:text-gray-400"}`}>
                        {itemNum}
                      </span>
                      <span className="leading-snug">{faq.q}</span>
                    </div>
                    <div className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180 bg-black text-white" : "bg-white/10 text-gray-400 group-hover:bg-white/20"}`}>
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-6 text-gray-300 leading-relaxed border-t border-white/5 pt-4 ml-8 font-light space-y-3">
                      <p className="text-xs sm:text-sm">{faq.a}</p>
                      <div className="pt-1">
                        <Link href="/contact" className="text-xs font-bold text-neutral-400 hover:text-neutral-300 inline-flex items-center gap-1.5">
                          <span>Speak with an industry specialist →</span>
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 10. FINAL CTA */}
      <section className="py-20 relative overflow-hidden bg-black/60">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <div className="glass-panel p-10 sm:p-16 rounded-3xl border-white/10 relative overflow-hidden">
            <div className="absolute inset-0 bg-black/10 blur-[100px] pointer-events-none" />
            <h2 className="text-white mb-4 relative z-10">
              Ready to Transform Your Industry Experience?
            </h2>
            <p className="text-gray-300 text-base max-w-2xl mx-auto font-light mb-8 relative z-10">
              Tell us about your industry and space goals, and our team will recommend the best interactive technology.
            </p>
            <div className="flex items-center justify-center relative z-10">
              <Link
                href="/contact"
                className="w-full sm:w-auto px-8 py-4 rounded-full font-semibold text-white bg-black shadow-2xl shadow-white/10 hover:scale-105 transition-transform"
              >
                Discuss Your Project
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
