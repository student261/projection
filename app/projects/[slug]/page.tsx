import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SafeImage from "@/components/SafeImage";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CheckCircle2, ArrowRight, Sparkles } from "lucide-react";
import Button from "@/components/ui/Button";
import SectionHeading from "@/components/ui/SectionHeading";
import Divider from "@/components/ui/Divider";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";

export interface CaseStudyData {
  slug: string;
  title: string;
  experienceType: string;
  industry: string;
  industryHref: string;
  heroImg: string;
  overview: string;
  challenge: string;
  approach: string;
  techUsed: string[];
  experienceDetails: string;
  results: { metric: string; description: string }[];
  gallery: string[];
  relatedSolutions: { title: string; href: string }[];
  relatedIndustries: { title: string; href: string }[];
  nextProject: { title: string; href: string };
}

const caseStudiesData: Record<string, CaseStudyData> = {
  "aura-digital-cathedral": {
    slug: "aura-digital-cathedral",
    title: "AURA Sanctuary Projection",
    experienceType: "Architectural 360° Projection Mapping & Spatial Audio",
    industry: "Museums & Culture",
    industryHref: "/industries/museums-culture",
    heroImg: "https://momentfactory.com/cdn/shop/files/Moment_Factory_Signature_Shows_25_SuperReal_D7A1668-WS_5b710a5d-f2e7-4428-ad20-c83c257b7bbe.jpg",
    overview:
      "An architectural light & sound masterpiece transforming historic stone sanctuaries into immersive digital canvases that respond to ambient acoustics and visitor positioning.",
    challenge:
      "Preserving the structural integrity of historic stone architecture while installing 28 high-lumen 4K laser projectors without drilling or altering historical stonework.",
    approach:
      "We engineered a custom non-invasive truss mounting structure paired with ultra-precise spatial projection calibration software to map every arch, column, and vault with sub-millimeter precision.",
    techUsed: [
      "28x 4K High-Lumen Laser Projection Array",
      "Sub-Millimeter 3D Laser Scanning & Mesh Mapping",
      "Interactive Spatial 3D Audio System",
      "Real-Time Acoustic Reactive Lighting Engine",
    ],
    experienceDetails:
      "As visitors step inside the sanctuary, spatial soundwaves sync seamlessly with celestial light projections across the 60-foot vaulted ceilings, evoking a transcendent sensory journey.",
    results: [
      { metric: "1.2M+", description: "Annual visitors welcomed globally" },
      { metric: "100%", description: "Non-invasive architectural preservation" },
      { metric: "4.9 / 5", description: "Visitor satisfaction & review score" },
    ],
    gallery: [
      "https://momentfactory.com/cdn/shop/files/Moment_Factory_Signature_Shows_25_SuperReal_D7A1668-WS_5b710a5d-f2e7-4428-ad20-c83c257b7bbe.jpg",
      "https://momentfactory.com/cdn/shop/files/Moment_Factory_Signature_Shows_25_SuperReal_D7A1668-WS_5b710a5d-f2e7-4428-ad20-c83c257b7bbe.jpg",
      "https://momentfactory.com/cdn/shop/files/Moment_Factory_Signature_Shows_25_SuperReal_D7A1668-WS_5b710a5d-f2e7-4428-ad20-c83c257b7bbe.jpg",
    ],
    relatedSolutions: [
      { title: "Projection Mapping", href: "/solutions#immersive" },
      { title: "Immersive Rooms", href: "/solutions#immersive" },
    ],
    relatedIndustries: [
      { title: "Museums & Culture", href: "/industries/museums-culture" },
      { title: "Public Spaces", href: "/industries/public-spaces" },
    ],
    nextProject: {
      title: "Horizon Glass Motion Floor",
      href: "/projects/edge-nyc-horizon-portal",
    },
  },
  "edge-nyc-horizon-portal": {
    slug: "edge-nyc-horizon-portal",
    title: "Horizon Glass Motion Floor",
    experienceType: "High-Altitude Motion Interactive Floor Installation",
    industry: "Public Spaces",
    industryHref: "/industries/public-spaces",
    heroImg: "https://momentfactory.com/cdn/shop/files/Moment_Factory_Signature_Shows_25_SuperReal_D7A1668-WS_5b710a5d-f2e7-4428-ad20-c83c257b7bbe.jpg",
    overview:
      "An interactive observation floor 1,100 feet above Manhattan that responds to footsteps with simulated glass fractures, atmospheric weather patterns, and NYC cityscape history.",
    challenge:
      "Operating in extreme sunlight conditions and high visitor throughput where conventional optical cameras struggle with reflections and glare off glass windows.",
    approach:
      "We deployed long-wave infrared tracking sensors paired with ultra-bright commercial display optics and custom anti-reflective glass surface coatings.",
    techUsed: [
      "Long-Wave Infrared Motion Tracking Sensors",
      "Real-Time Physics Engine for Glass Crack FX",
      "Multi-User Simultaneous Footstep Detection",
      "High-Traffic Commercial Floor Canvas",
    ],
    experienceDetails:
      "Visitors stepping onto the observation floor trigger dramatic real-time visual ripples and sound effects, creating thrilling viral social media share moments.",
    results: [
      { metric: "1,100 Ft", description: "Observation deck elevation" },
      { metric: "3.5x", description: "Increase in guest stay duration" },
      { metric: "500K+", description: "Social media video impressions" },
    ],
    gallery: [
      "https://momentfactory.com/cdn/shop/files/Moment_Factory_Signature_Shows_25_SuperReal_D7A1668-WS_5b710a5d-f2e7-4428-ad20-c83c257b7bbe.jpg",
      "https://momentfactory.com/cdn/shop/files/Moment_Factory_Signature_Shows_25_SuperReal_D7A1668-WS_5b710a5d-f2e7-4428-ad20-c83c257b7bbe.jpg",
      "https://momentfactory.com/cdn/shop/files/Moment_Factory_Signature_Shows_25_SuperReal_D7A1668-WS_5b710a5d-f2e7-4428-ad20-c83c257b7bbe.jpg",
    ],
    relatedSolutions: [
      { title: "Interactive Floor & Wall", href: "/solutions#interactive" },
      { title: "Smart Engagement", href: "/solutions#smart" },
    ],
    relatedIndustries: [
      { title: "Public Spaces", href: "/industries/public-spaces" },
      { title: "Hospitality & Venues", href: "/industries/hospitality" },
    ],
    nextProject: {
      title: "BioSphere Ocean Experience",
      href: "/projects/biosphere-ocean-experience",
    },
  },
  "biosphere-ocean-experience": {
    slug: "biosphere-ocean-experience",
    title: "BioSphere Ocean Experience",
    experienceType: "Interactive Museum Floor & 360° Marine Canvas",
    industry: "Museums & Culture",
    industryHref: "/industries/museums-culture",
    heroImg: "https://momentfactory.com/cdn/shop/files/Moment_Factory_Signature_Shows_25_SuperReal_D7A1668-WS_5b710a5d-f2e7-4428-ad20-c83c257b7bbe.jpg",
    overview:
      "A 360-degree reactive ocean floor projection reacting dynamically to marine biodiversity interaction and visitor presence.",
    challenge:
      "Simulating deep-sea marine physics and realistic water ripples with zero latency for up to 50 active exhibition participants.",
    approach:
      "We engineered multi-sensor LiDAR ceiling nodes combined with fluid dynamics GPU particle shaders.",
    techUsed: [
      "LiDAR Floor Sensing Grid",
      "Real-Time Ocean Fluid Dynamics Shaders",
      "Multi-User Motion Tracking",
      "Spatial Coral Reef Audio Pods",
    ],
    experienceDetails:
      "As guests walk across the ocean floor, bioluminescent rays react to their footsteps while schools of fish scatter dynamically.",
    results: [
      { metric: "50+", description: "Simultaneous tracked visitors" },
      { metric: "4K", description: "Ultra-high resolution optical floor" },
      { metric: "98%", description: "Visitor satisfaction rating" },
    ],
    gallery: [
      "https://momentfactory.com/cdn/shop/files/Moment_Factory_Signature_Shows_25_SuperReal_D7A1668-WS_5b710a5d-f2e7-4428-ad20-c83c257b7bbe.jpg",
      "https://momentfactory.com/cdn/shop/files/Moment_Factory_Signature_Shows_25_SuperReal_D7A1668-WS_5b710a5d-f2e7-4428-ad20-c83c257b7bbe.jpg",
    ],
    relatedSolutions: [
      { title: "Interactive Spaces", href: "/solutions#interactive" },
      { title: "Immersive Rooms", href: "/solutions#immersive" },
    ],
    relatedIndustries: [
      { title: "Museums & Culture", href: "/industries/museums-culture" },
      { title: "Education", href: "/industries/education" },
    ],
    nextProject: {
      title: "Lumina Enchanted Forest",
      href: "/projects/lumina-night-walk",
    },
  },
  "lumina-night-walk": {
    slug: "lumina-night-walk",
    title: "Lumina Enchanted Forest",
    experienceType: "Outdoor Forest Projection Mapping & Spatial Experience",
    industry: "Entertainment",
    industryHref: "/industries/entertainment",
    heroImg: "https://momentfactory.com/cdn/shop/files/Moment_Factory_Signature_Shows_25_SuperReal_D7A1668-WS_5b710a5d-f2e7-4428-ad20-c83c257b7bbe.jpg",
    overview:
      "A 2.4 km nighttime outdoor illuminated trail featuring motion-tracked projection mapping onto natural forest foliage, waterfalls, and rock faces.",
    challenge:
      "Operating outdoor projection equipment reliably across all weather conditions including rain, snow, and extreme ambient humidity.",
    approach:
      "We engineered IP66 weatherproof laser projector enclosures with active climate regulation and long-range optical sensor nodes along the trail.",
    techUsed: [
      "IP66 Weatherproof Laser Projector Housings",
      "Natural Surface Mesh Mapping Software",
      "Long-Range Trail Proximity Sensors",
      "Sync-Lock Spatial Outdoor Audio Nodes",
    ],
    experienceDetails:
      "Visitors walk through an enchanted forest where trees illuminate as they approach and mythical projections appear across waterfall mist.",
    results: [
      { metric: "2.4 km", description: "Outdoor illuminated trail length" },
      { metric: "300K+", description: "Nighttime visitors per season" },
      { metric: "IP66", description: "All-weather continuous reliability" },
    ],
    gallery: [
      "https://momentfactory.com/cdn/shop/files/Moment_Factory_Signature_Shows_25_SuperReal_D7A1668-WS_5b710a5d-f2e7-4428-ad20-c83c257b7bbe.jpg",
      "https://momentfactory.com/cdn/shop/files/Moment_Factory_Signature_Shows_25_SuperReal_D7A1668-WS_5b710a5d-f2e7-4428-ad20-c83c257b7bbe.jpg",
    ],
    relatedSolutions: [
      { title: "Immersive Environments", href: "/solutions#immersive" },
      { title: "Projection Mapping", href: "/solutions#immersive" },
    ],
    relatedIndustries: [
      { title: "Entertainment", href: "/industries/entertainment" },
      { title: "Public Spaces", href: "/industries/public-spaces" },
    ],
    nextProject: {
      title: "Generative AI Mirror Room",
      href: "/projects/generative-ai-mirror-room",
    },
  },
  "generative-ai-mirror-room": {
    slug: "generative-ai-mirror-room",
    title: "Generative AI Mirror Room",
    experienceType: "Computer Vision & AI Avatar Chamber",
    industry: "Corporate & Tech",
    industryHref: "/industries/corporate",
    heroImg: "https://momentfactory.com/cdn/shop/files/Moment_Factory_Signature_Shows_25_SuperReal_D7A1668-WS_5b710a5d-f2e7-4428-ad20-c83c257b7bbe.jpg",
    overview:
      "A real-time generative AI mirror chamber reacting to visitor movement, voice, and facial gestures with dynamic digital avatars.",
    challenge:
      "Synthesizing 60fps real-time neural renders without latency while tracking multiple audience posture cues simultaneously.",
    approach:
      "We deployed edge neural processors paired with optical camera depth matrices.",
    techUsed: [
      "Edge Neural Processing Grid",
      "Depth Camera Skeletal Tracking",
      "Generative Spatial Sound Synth",
      "High-Contrast Glass Mirror Displays",
    ],
    experienceDetails:
      "Visitors step into a mirrored chamber where digital shadows transform into fluid generative art and responsive AI companions.",
    results: [
      { metric: "<15ms", description: "Sub-frame neural render latency" },
      { metric: "100%", description: "Privacy-first local edge processing" },
      { metric: "4.9", description: "User experience rating score" },
    ],
    gallery: [
      "https://momentfactory.com/cdn/shop/files/Moment_Factory_Signature_Shows_25_SuperReal_D7A1668-WS_5b710a5d-f2e7-4428-ad20-c83c257b7bbe.jpg",
      "https://momentfactory.com/cdn/shop/files/Moment_Factory_Signature_Shows_25_SuperReal_D7A1668-WS_5b710a5d-f2e7-4428-ad20-c83c257b7bbe.jpg",
    ],
    relatedSolutions: [
      { title: "AI Experiences", href: "/solutions#ai" },
      { title: "Smart Engagement", href: "/solutions#smart" },
    ],
    relatedIndustries: [
      { title: "Corporate Venues", href: "/industries/corporate" },
      { title: "Retail & Showrooms", href: "/industries/retail-showrooms" },
    ],
    nextProject: {
      title: "Neo-Shinjuku Interactive Wall",
      href: "/projects/neo-shinjuku-interactive-wall",
    },
  },
  "neo-shinjuku-interactive-wall": {
    slug: "neo-shinjuku-interactive-wall",
    title: "Neo-Shinjuku Interactive Wall",
    experienceType: "Gamified Touch & Motion Projection Wall",
    industry: "Retail & Showrooms",
    industryHref: "/industries/retail-showrooms",
    heroImg: "https://momentfactory.com/cdn/shop/files/Moment_Factory_Signature_Shows_25_SuperReal_D7A1668-WS_5b710a5d-f2e7-4428-ad20-c83c257b7bbe.jpg",
    overview:
      "A multi-touch interactive projection wall built for luxury nightlife, retail flagships, and brand activations.",
    challenge:
      "Maintaining touch accuracy on non-standard interior textures under high ambient lighting.",
    approach:
      "We calibrated optical infrared curtain sensors across the vertical canvas.",
    techUsed: [
      "Infrared Laser Curtain Sensors",
      "Multi-Touch Gesture Detection",
      "High-Lumen Short Throw Laser Optics",
    ],
    experienceDetails:
      "Guests touch and swipe visual elements directly on the architectural wall to unlock audio tracks and visual FX.",
    results: [
      { metric: "3.2x", description: "Dwell time increase" },
      { metric: "10K+", description: "Daily touch interactions" },
    ],
    gallery: [
      "https://momentfactory.com/cdn/shop/files/Moment_Factory_Signature_Shows_25_SuperReal_D7A1668-WS_5b710a5d-f2e7-4428-ad20-c83c257b7bbe.jpg",
    ],
    relatedSolutions: [
      { title: "Interactive Spaces", href: "/solutions#interactive" },
    ],
    relatedIndustries: [
      { title: "Retail & Showrooms", href: "/industries/retail-showrooms" },
    ],
    nextProject: {
      title: "Celestial Dome Observatory",
      href: "/projects/celestial-dome-observatory",
    },
  },
  "celestial-dome-observatory": {
    slug: "celestial-dome-observatory",
    title: "Celestial Dome Observatory",
    experienceType: "360° Architectural Fulldome Environment",
    industry: "Museums & Culture",
    industryHref: "/industries/museums-culture",
    heroImg: "https://momentfactory.com/cdn/shop/files/Moment_Factory_Signature_Shows_25_SuperReal_D7A1668-WS_5b710a5d-f2e7-4428-ad20-c83c257b7bbe.jpg",
    overview:
      "A giant architectural dome projection environment simulating interstellar journeys with spatial audio.",
    challenge:
      "Aligning 16 high-resolution projectors across hemispherical acoustics without optical overlap artifacts.",
    approach:
      "We deployed automated camera-based geometric warp algorithms.",
    techUsed: [
      "Hemispherical Projection Alignment Engine",
      "32-Channel Spatial Dome Acoustics",
    ],
    experienceDetails:
      "Visitors lean back in the observatory dome as constellations and cosmic particle streams react to motion controls.",
    results: [
      { metric: "360°", description: "Seamless immersive projection" },
      { metric: "16x", description: "4K Laser projector array" },
    ],
    gallery: [
      "https://momentfactory.com/cdn/shop/files/Moment_Factory_Signature_Shows_25_SuperReal_D7A1668-WS_5b710a5d-f2e7-4428-ad20-c83c257b7bbe.jpg",
    ],
    relatedSolutions: [
      { title: "Immersive Rooms", href: "/solutions#immersive" },
    ],
    relatedIndustries: [
      { title: "Museums & Culture", href: "/industries/museums-culture" },
    ],
    nextProject: {
      title: "Quantum Prism Passage",
      href: "/projects/quantum-prism-passage",
    },
  },
  "quantum-prism-passage": {
    slug: "quantum-prism-passage",
    title: "Quantum Prism Passage",
    experienceType: "LED & Projection Sensory Tunnel",
    industry: "Public Spaces",
    industryHref: "/industries/public-spaces",
    heroImg: "https://momentfactory.com/cdn/shop/files/Moment_Factory_Signature_Shows_25_SuperReal_D7A1668-WS_5b710a5d-f2e7-4428-ad20-c83c257b7bbe.jpg",
    overview:
      "A walk-through sensory tunnel using synchronized projection and optical mirror reflection geometry.",
    challenge: "Creating seamless mirror infinity reflections in high-traffic public concourses.",
    approach: "We combined optical projection mapping with infinite glass reflection physics.",
    techUsed: ["Mirror Geometry Mapping", "Synchronized LED & Projection Array"],
    experienceDetails: "Pedestrians walking through the tunnel trigger infinite light refraction corridors.",
    results: [{ metric: "1M+", description: "Annual public pedestrians" }],
    gallery: ["https://momentfactory.com/cdn/shop/files/Moment_Factory_Signature_Shows_25_SuperReal_D7A1668-WS_5b710a5d-f2e7-4428-ad20-c83c257b7bbe.jpg"],
    relatedSolutions: [{ title: "Interactive Spaces", href: "/solutions#interactive" }],
    relatedIndustries: [{ title: "Public Spaces", href: "/industries/public-spaces" }],
    nextProject: { title: "Chrono Echoes Artifact Wall", href: "/projects/chrono-echoes-artifact-wall" },
  },
  "chrono-echoes-artifact-wall": {
    slug: "chrono-echoes-artifact-wall",
    title: "Chrono Echoes Artifact Wall",
    experienceType: "Interactive Heritage Display",
    industry: "Museums & Culture",
    industryHref: "/industries/museums-culture",
    heroImg: "https://momentfactory.com/cdn/shop/files/Moment_Factory_Signature_Shows_25_SuperReal_D7A1668-WS_5b710a5d-f2e7-4428-ad20-c83c257b7bbe.jpg",
    overview: "Historical artifact display coming to life when visitors approach, revealing hidden historical layers.",
    challenge: "Protecting rare physical artifacts while illuminating fine visual details.",
    approach: "We used low-UV directional micro-projection with proximity sensors.",
    techUsed: ["Low-UV Preservation Projection", "Proximity Infrared Radar"],
    experienceDetails: "As visitors approach glass artifact cases, historical digital layers animate softly behind the objects.",
    results: [{ metric: "100%", description: "Artifact preservation compliance" }],
    gallery: ["https://momentfactory.com/cdn/shop/files/Moment_Factory_Signature_Shows_25_SuperReal_D7A1668-WS_5b710a5d-f2e7-4428-ad20-c83c257b7bbe.jpg"],
    relatedSolutions: [{ title: "Projection Mapping", href: "/solutions#immersive" }],
    relatedIndustries: [{ title: "Museums & Culture", href: "/industries/museums-culture" }],
    nextProject: { title: "Sensory Interactive Therapy Room", href: "/projects/sensory-interactive-therapy-room" },
  },
  "sensory-interactive-therapy-room": {
    slug: "sensory-interactive-therapy-room",
    title: "Sensory Interactive Therapy Room",
    experienceType: "Calming Motion Floor & Pediatric Rehabilitation System",
    industry: "Healthcare",
    industryHref: "/industries/healthcare",
    heroImg: "https://momentfactory.com/cdn/shop/files/Moment_Factory_Signature_Shows_25_SuperReal_D7A1668-WS_5b710a5d-f2e7-4428-ad20-c83c257b7bbe.jpg",
    overview: "A therapeutic motion projection room engineered for pediatric rehabilitation, motor skill improvement, and sensory decompression in medical centers.",
    challenge: "Creating a 100% hygienic, easy to sanitize, and soothing environment for children.",
    approach: "We utilized contactless floor motion projection with gentle ambient soundscapes.",
    techUsed: ["Contactless Motion Tracking", "Spatial Calming Sound Pods"],
    experienceDetails: "Patients engage in gentle stepping and balance games on a soft projected floor canvas.",
    results: [{ metric: "100%", description: "Hygienic touchless technology" }],
    gallery: ["https://momentfactory.com/cdn/shop/files/Moment_Factory_Signature_Shows_25_SuperReal_D7A1668-WS_5b710a5d-f2e7-4428-ad20-c83c257b7bbe.jpg"],
    relatedSolutions: [{ title: "Interactive Spaces", href: "/solutions#interactive" }],
    relatedIndustries: [{ title: "Healthcare", href: "/industries/healthcare" }],
    nextProject: { title: "AURA Sanctuary Projection", href: "/projects/aura-digital-cathedral" },
  },
};

// Aliases mapping for alternate slugs
caseStudiesData["classroom-projection"] = caseStudiesData["interactive-learning-experience"];
caseStudiesData["ocean-wonders"] = caseStudiesData["360-exhibit-tunnel"];
caseStudiesData["ai-avatar-companion"] = caseStudiesData["retail-gamification"];
caseStudiesData["immersive-museum-experience"] = caseStudiesData["360-exhibit-tunnel"];
caseStudiesData["interactive-brand-experience"] = caseStudiesData["retail-gamification"];

// Fallback generator so NO project slug ever 404s
function getProjectData(slug: string): CaseStudyData {
  if (caseStudiesData[slug]) {
    return caseStudiesData[slug];
  }

  const formattedTitle = slug
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");

  return {
    slug,
    title: formattedTitle,
    experienceType: "Spatial Motion Projection & Interactive Installation",
    industry: "Commercial Architecture",
    industryHref: "/industries",
    heroImg: "https://momentfactory.com/cdn/shop/files/Moment_Factory_Signature_Shows_25_SuperReal_D7A1668-WS_5b710a5d-f2e7-4428-ad20-c83c257b7bbe.jpg",
    overview:
      `A custom interactive installation deployed at ${formattedTitle}, combining optical tracking, high-lumen projection mapping, and real-time spatial content.`,
    challenge:
      "Integrating cutting-edge motion projection into complex architecture while ensuring high reliability, ultra-low latency, and engaging multi-user interaction.",
    approach:
      "We engineered a custom hardware-software stack tailored specifically for the venue's geometric parameters and visitor flow dynamics.",
    techUsed: [
      "High-Precision Motion Tracking Engine",
      "4K Ultra-Short Throw Projection Mapping",
      "Real-Time Spatial Content Generator",
      "Cloud Analytics & Monitoring System",
    ],
    experienceDetails:
      "Visitors engage intuitively with responsive light and sound canvases, turning ordinary physical floor and wall surfaces into unforgettable digital moments.",
    results: [
      { metric: "↑ 65%", description: "Increase in audience engagement" },
      { metric: "100%", description: "Reliable commercial uptime" },
      { metric: "Multi-User", description: "Simultaneous spatial tracking" },
    ],
    gallery: [
      "https://momentfactory.com/cdn/shop/files/Moment_Factory_Signature_Shows_25_SuperReal_D7A1668-WS_5b710a5d-f2e7-4428-ad20-c83c257b7bbe.jpg",
      "https://momentfactory.com/cdn/shop/files/Moment_Factory_Signature_Shows_25_SuperReal_D7A1668-WS_5b710a5d-f2e7-4428-ad20-c83c257b7bbe.jpg",
      "https://momentfactory.com/cdn/shop/files/Moment_Factory_Signature_Shows_25_SuperReal_D7A1668-WS_5b710a5d-f2e7-4428-ad20-c83c257b7bbe.jpg",
    ],
    relatedSolutions: [
      { title: "Interactive Spaces", href: "/solutions#interactive" },
      { title: "Immersive Environments", href: "/solutions#immersive" },
    ],
    relatedIndustries: [
      { title: "Museums & Culture", href: "/industries/museums-culture" },
      { title: "Retail & Showrooms", href: "/industries/retail-showrooms" },
    ],
    nextProject: {
      title: "AURA Digital Cathedral",
      href: "/projects/aura-digital-cathedral",
    },
  };
}

export default async function CaseStudyPage(props: { params: Promise<{ slug: string }> }) {
  const { slug } = await props.params;
  const project = getProjectData(slug);

  return (
    <main className="min-h-screen bg-white text-black flex flex-col pt-24">
      <Navbar />

      {/* Immersive Video Hero Section */}
      <section className="relative h-[90vh] min-h-[600px] flex items-end pb-20 overflow-hidden bg-black border-b border-black/10">
        <div className="absolute inset-0 pointer-events-none bg-slate-900">
          <SafeImage src={project.heroImg} alt={project.title} className="w-full h-full object-cover opacity-50 mix-blend-overlay" containerClassName="w-full h-full" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-24">
          <div className="flex flex-wrap items-center gap-3 mb-6 text-[10px] uppercase tracking-widest">
            <span className="px-3 py-1 border border-white/20 text-white font-bold bg-white/10 backdrop-blur-md rounded-full">
              CASE STUDY
            </span>
            <Link
              href={project.industryHref}
              className="px-3 py-1 border border-white/20 text-white/80 hover:text-white hover:bg-white/10 transition-colors rounded-full"
            >
              {project.industry}
            </Link>
          </div>

          <h1 className="text-white max-w-5xl mb-6 text-5xl sm:text-6xl lg:text-8xl font-black tracking-tight leading-[1.05]">
            {project.title}
          </h1>

          <p className="text-lg sm:text-2xl text-white/80 font-light max-w-4xl leading-relaxed mb-12">
            {project.experienceType}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl border border-white/10 p-8 bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl">
            {project.results.map((res, i) => (
              <div key={i} className="border-l-2 border-white pl-5 py-1">
                <div className="text-3xl sm:text-4xl lg:text-5xl text-white font-black mb-2">{res.metric}</div>
                <div className="text-[10px] sm:text-xs text-white/70 font-bold uppercase tracking-[0.2em] leading-relaxed">{res.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content Body */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full space-y-16">
        {/* Project Overview & Challenge */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Detailed Content Grid: Four Sections (Challenge, Solution, Technology, Result) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 sm:gap-20 max-w-5xl">
            {/* Challenge & Solution */}
            <div>
              <div className="mb-12">
                <h2 className="text-black mb-4 flex items-center gap-2">
                  <ArrowRight className="w-4 h-4 text-black" />
                  <span>The Challenge</span>
                </h2>
                <p className="text-xs text-black/80 font-light leading-relaxed mb-6">
                  {project.challenge}
                </p>
              </div>

              <div>
                <h2 className="text-black mb-4 flex items-center gap-2">
                  <ArrowRight className="w-4 h-4 text-black" />
                  <span>The Solution</span>
                </h2>
                <p className="text-xs text-black/80 font-light leading-relaxed mb-6">
                  {project.approach || project.overview}
                </p>
              </div>
            </div>

            {/* Technology & Result */}
            <div>
              <div className="mb-12">
                <h2 className="text-black mb-4 flex items-center gap-2">
                  <ArrowRight className="w-4 h-4 text-black" />
                  <span>Technology Stack</span>
                </h2>
                <ul className="space-y-2.5">
                  {project.techUsed.map((t, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-black/70 font-light">
                      <CheckCircle2 className="w-3.5 h-3.5 text-black shrink-0 mt-0.5" />
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-black mb-4 flex items-center gap-2">
                  <ArrowRight className="w-4 h-4 text-black" />
                  <span>The Result</span>
                </h2>
                <p className="text-xs text-black/80 font-light leading-relaxed mb-6">
                  {project.experienceDetails}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                  {project.results.map((res, i) => (
                    <div key={i} className="border-l-2 border-black/10 pl-4 py-2">
                      <div className="text-2xl text-black font-black mb-1">{res.metric}</div>
                      <div className="text-[10px] text-black/50 uppercase tracking-widest font-bold">
                        {res.description}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* The Interactive Transformation Slider */}
        <BeforeAfterSlider 
          beforeImage="https://momentfactory.com/cdn/shop/files/Moment_Factory_Signature_Shows_25_SuperReal_D7A1668-WS_5b710a5d-f2e7-4428-ad20-c83c257b7bbe.jpg" // Placeholder for an empty space
          afterImage={project.heroImg} 
        />

        <Divider />

        {/* Project Gallery */}
        <div>
          <SectionHeading label="VISUAL SHOWCASE" heading="Installation Gallery" />
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
            {project.gallery.map((imgUrl, i) => (
              <div key={i} className="relative aspect-[16/10] border border-black/10 bg-white overflow-hidden group">
                <SafeImage
                  src={imgUrl}
                  alt={`${project.title} Gallery Image ${i + 1}`}
                  className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-700"
                  containerClassName="w-full h-full"
                />
              </div>
            ))}
          </div>
        </div>

        <Divider />

        {/* Related Solutions & Related Industries */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 border border-black/10 bg-white">
            <h3 className="uppercase text-black/60 mb-4">Related Solutions</h3>
            <div className="flex flex-wrap gap-2.5">
              {project.relatedSolutions.map((sol, i) => (
                <Link
                  key={i}
                  href={sol.href}
                  className="px-4 py-2 border border-black/20 text-black/80 hover:bg-black hover:text-white text-xs tracking-wider transition-all"
                >
                  {sol.title} →
                </Link>
              ))}
            </div>
          </div>

          <div className="p-8 border border-black/10 bg-white">
            <h3 className="uppercase text-black/60 mb-4">Related Industries</h3>
            <div className="flex flex-wrap gap-2.5">
              {project.relatedIndustries.map((ind, i) => (
                <Link
                  key={i}
                  href={ind.href}
                  className="px-4 py-2 border border-black/20 text-black/80 hover:bg-black hover:text-white text-xs tracking-wider transition-all"
                >
                  {ind.title} →
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Next Project Nav */}
        <div className="p-8 border border-black/10 bg-white flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <span className="text-[10px] uppercase tracking-[0.2em] text-black/50 block font-bold">
              NEXT CASE STUDY
            </span>
            <h4 className="text-black mt-1">
              {project.nextProject.title}
            </h4>
          </div>
          <Button href={project.nextProject.href} variant="primary">
            Explore Case Study →
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  );
}
