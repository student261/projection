import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SafeImage from "@/components/SafeImage";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CheckCircle2, ArrowRight, Sparkles, ChevronDown, AlertCircle, Target, Cpu, Wrench, BarChart3 } from "lucide-react";
import Button from "@/components/ui/Button";
import SectionHeading from "@/components/ui/SectionHeading";
import HugeCTA from "@/components/ui/HugeCTA";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";

export interface CaseStudyData {
  slug: string;
  title: string;
  experienceType: string;
  industry: string;
  industryHref: string;
  heroImg: string;
  heroVideo?: string;
  beforeImg?: string;
  sliderAspect?: "portrait" | "landscape";
  overview: string;
  challenge: string;          // Step 1: Challenge
  objective: string;          // Step 2: Objective
  solution: string;           // Step 3: Solution
  approach?: string;
  techUsed: string[];         // Step 4: Technology
  execution: string;          // Step 5: Execution
  experienceDetails: string;
  results: { metric: string; description: string }[]; // Step 6: Result
  gallery: string[];          // Step 7: Gallery
  relatedSolutions: { title: string; href: string }[]; // Step 8: Related Solutions
  relatedIndustries: { title: string; href: string }[];
  nextProject: { title: string; href: string };
  cta?: {                     // Step 9: CTA
    eyebrow?: string;
    title: string;
    subtitle: string;
    buttonText: string;
    buttonHref: string;
  };
}

export type CaseStudyRaw = Partial<CaseStudyData> & Pick<CaseStudyData, "slug" | "title" | "experienceType" | "industry" | "industryHref" | "heroImg" | "overview" | "challenge" | "techUsed" | "experienceDetails" | "results" | "gallery" | "relatedSolutions" | "relatedIndustries" | "nextProject">;

const caseStudiesData: Record<string, CaseStudyRaw> = {
  "aura-digital-cathedral": {
    slug: "aura-digital-cathedral",
    title: "Sanctuary of Light Cathedral",
    experienceType: "Architectural 360° Projection Mapping & Spatial Audio",
    industry: "Museums & Culture",
    industryHref: "/industries/museums-culture",
    heroImg: "/images/cathedral_projection_mapping.jpg",
    beforeImg: "/images/cathedral_sanctuary_raw.jpg",
    sliderAspect: "portrait",
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
      { metric: "Certified", description: "Non-invasive architectural preservation" },
      { metric: "4.9 / 5", description: "Visitor satisfaction & review score" },
    ],
    gallery: [
      "/images/architectural_light_beam.jpg",
      "/images/horizon_glass_floor.jpg",
      "/images/biosphere_ocean_gallery.jpg",
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
      title: "Skyline Kinetic Glass Floor",
      href: "/projects/skyline-observation-floor",
    },
  },
  "skyline-observation-floor": {
    slug: "skyline-observation-floor",
    title: "Skyline Kinetic Glass Floor",
    experienceType: "High-Altitude Motion Interactive Floor Installation",
    industry: "Public Spaces",
    industryHref: "/industries/public-spaces",
    heroImg: "/images/edge_observation_floor_widescreen_after.jpg",
    beforeImg: "/images/edge_observation_floor_widescreen_before.jpg",
    sliderAspect: "landscape",
    overview:
      "An interactive observation floor installed in a premier high-altitude civic tower that responds to visitor footsteps with simulated structural glass fractures, dynamic atmospheric weather simulations, and regional cartographic projections.",
    challenge:
      "Operating in extreme high-altitude ambient daylight and high visitor throughput where conventional optical cameras struggle with reflections and glare off floor-to-ceiling glass windows.",
    approach:
      "We deployed long-wave infrared tracking sensors paired with ultra-bright commercial display optics and custom anti-reflective structural glass surface coatings.",
    techUsed: [
      "Long-Wave Infrared Motion Tracking Sensors",
      "Real-Time Physics Engine for Glass Crack FX",
      "Multi-User Simultaneous Footstep Detection",
      "High-Traffic Commercial Glass Floor Canvas",
    ],
    experienceDetails:
      "Visitors stepping onto the observation floor trigger dramatic real-time visual ripples and spatial acoustic effects, creating unforgettable viral social media moments.",
    results: [
      { metric: "Panoramic", description: "Observation deck elevation" },
      { metric: "Extended", description: "Guest stay duration" },
      { metric: "Viral", description: "Organic social impressions" },
    ],
    gallery: [
      "/images/interactive_floor_motion.jpg",
      "/images/projection_cityscape_model.jpg",
      "/images/technician_calibrating_projection.jpg",
    ],
    relatedSolutions: [
      { title: "Interactive Floor", href: "/solutions/interactive-floor" },
      { title: "Motion Games", href: "/solutions#interactive" },
    ],
    relatedIndustries: [
      { title: "Public Spaces", href: "/industries/public-spaces" },
      { title: "Entertainment", href: "/industries/entertainment" },
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
    heroImg: "/images/biosphere_ocean_gallery.jpg",
    beforeImg: "/images/ocean_gallery_raw.jpg",
    sliderAspect: "landscape",
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
      { metric: "Multi-User", description: "Simultaneous tracked visitors" },
      { metric: "4K", description: "Ultra-high resolution optical floor" },
      { metric: "Top-Tier", description: "Visitor satisfaction rating" },
    ],
    gallery: [
      "/images/architectural_light_beam.jpg",
      "/images/hospitality_koi_pond.jpg",
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
      title: "Enchanted Night Trail",
      href: "/projects/enchanted-night-trail",
    },
  },
  "enchanted-night-trail": {
    slug: "enchanted-night-trail",
    title: "Enchanted Night Trail",
    experienceType: "Outdoor Forest Projection Mapping & Spatial Experience",
    industry: "Entertainment",
    industryHref: "/industries/entertainment",
    heroImg: "/images/architectural_light_beam.jpg",
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
      { metric: "High-Volume", description: "Seasonal nighttime visitors" },
      { metric: "IP66", description: "All-weather continuous reliability" },
    ],
    gallery: [
      "/images/cathedral_projection_mapping.jpg",
      "/images/horizon_glass_floor.jpg",
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
    heroImg: "/images/ai_receptionist_concierge.jpg",
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
      { metric: "Sub-Frame", description: "Neural render latency" },
      { metric: "Total", description: "Privacy-first local edge processing" },
      { metric: "Top-Tier", description: "User experience rating score" },
    ],
    gallery: [
      "/images/corporate_lobby_wall.jpg",
      "/images/horizon_glass_floor.jpg",
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
    heroImg: "/images/retail_interactive_showcase.jpg",
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
      { metric: "Substantial", description: "Dwell time increase" },
      { metric: "High-Volume", description: "Daily touch interactions" },
    ],
    gallery: [
      "/images/sneaker_customization_table.jpg",
      "/images/interactive_strike_wall.jpg",
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
    heroImg: "/images/planetarium_projection_dome.jpg",
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
      "/images/cat_immersive_dome.jpg",
      "/images/var_ceiling_projection.jpg",
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
    heroImg: "/images/hospital_interactive_corridor.jpg",
    heroVideo: "/immersive-room-showreel.mp4",
    overview:
      "A walk-through sensory tunnel using synchronized projection and optical mirror reflection geometry.",
    challenge: "Creating seamless mirror infinity reflections in high-traffic public concourses.",
    approach: "We combined optical projection mapping with infinite glass reflection physics.",
    techUsed: ["Mirror Geometry Mapping", "Synchronized LED & Projection Array"],
    experienceDetails: "Pedestrians walking through the tunnel trigger infinite light refraction corridors.",
    results: [{ metric: "High-Volume", description: "Annual public pedestrians" }],
    gallery: [
      "/images/architectural_light_beam.jpg",
      "/images/horizon_glass_floor.jpg",
    ],
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
    heroImg: "/images/museum_interactive_exhibit.jpg",
    overview: "Historical artifact display coming to life when visitors approach, revealing hidden historical layers.",
    challenge: "Protecting rare physical artifacts while illuminating fine visual details.",
    approach: "We used low-UV directional micro-projection with proximity sensors.",
    techUsed: ["Low-UV Preservation Projection", "Proximity Infrared Radar"],
    experienceDetails: "As visitors approach glass artifact cases, historical digital layers animate softly behind the objects.",
    results: [{ metric: "Certified", description: "Artifact preservation compliance" }],
    gallery: [
      "/images/museum_dino_sandbox.jpg",
      "/images/projection_cityscape_model.jpg",
    ],
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
    heroImg: "/images/healthcare_sensory_room.jpg",
    overview: "A therapeutic motion projection room engineered for pediatric rehabilitation, motor skill improvement, and sensory decompression in medical centers.",
    challenge: "Creating a fully hygienic, easy to sanitize, and soothing environment for children.",
    approach: "We utilized contactless floor motion projection with gentle ambient soundscapes.",
    techUsed: ["Contactless Motion Tracking", "Spatial Calming Sound Pods"],
    experienceDetails: "Patients engage in gentle stepping and balance games on a soft projected floor canvas.",
    results: [{ metric: "Complete", description: "Touchless sanitary safety" }],
    gallery: [
      "/images/mri_distraction_suite.jpg",
      "/images/hospitality_koi_pond.jpg",
    ],
    relatedSolutions: [{ title: "Interactive Spaces", href: "/solutions#interactive" }],
    relatedIndustries: [{ title: "Healthcare", href: "/industries/healthcare" }],
    nextProject: { title: "Sanctuary of Light Cathedral", href: "/projects/aura-digital-cathedral" },
  },
  "corporate-lobby-installation": {
    slug: "corporate-lobby-installation",
    title: "Corporate Lobby Installation",
    experienceType: "Generative AI Motion Wall & Real-Time Data Canvas",
    industry: "Corporate & Executive Spaces",
    industryHref: "/industries/corporate",
    heroImg: "/images/corporate_lobby_wall.jpg",
    overview:
      "A landmark 24-meter interactive architectural media wall in an enterprise headquarters, visualizing live global environmental data and responding dynamically to executive foot traffic.",
    challenge:
      "Achieving seamless multi-projector laser blending and LiDAR footstep tracking across a curved polished concrete atrium flooded with natural daylight through 30-foot glass curtain walls.",
    approach:
      "We deployed 30,000-lumen high-contrast laser projection engines with motorized optical geometry correction, paired with overhead 3D LiDAR sensors and real-time Unreal Engine 5 simulation servers.",
    techUsed: [
      "Overhead 3D LiDAR Tracking Grid",
      "Real-Time Unreal Engine 5 Generative Simulation",
      "Sub-Millimeter Edge-Blend Calibration",
      "Enterprise Cloud Telemetry & Media Scheduler"
    ],
    experienceDetails:
      "As employees and guests traverse the atrium, ambient fluid particles organically part around their movement paths, creating unforgettable corporate welcoming moments.",
    results: [
      { metric: "24m", description: "Seamless curved display canvas" },
      { metric: "Enterprise", description: "Commercial enterprise uptime" },
      { metric: "Instant", description: "Pedestrian velocity reaction speed" }
    ],
    gallery: [
      "/images/corporate_lobby_wall.jpg",
      "/images/architectural_light_beam.jpg",
      "/images/technician_calibrating_projection.jpg"
    ],
    relatedSolutions: [
      { title: "AI Experiences", href: "/solutions#ai-experiences" },
      { title: "Interactive Spaces", href: "/solutions#interactive" }
    ],
    relatedIndustries: [
      { title: "Corporate & Executive Spaces", href: "/industries/corporate" }
    ],
    nextProject: {
      title: "Interactive Museum Exhibit",
      href: "/projects/interactive-museum-exhibit"
    }
  },
  "interactive-museum-exhibit": {
    slug: "interactive-museum-exhibit",
    title: "Interactive Museum Exhibit",
    experienceType: "Motion-Responsive Touchless Artifact & Science Canvas",
    industry: "Museums & Culture",
    industryHref: "/industries/museums-culture",
    heroImg: "/images/museum_interactive_exhibit.jpg",
    overview:
      "A sprawling interactive museum exhibit combining architectural projection mapping with motion-responsive floors to teach physics, astronomy, and world history through tactile exploration.",
    challenge:
      "Designing a high-throughput, wear-free installation that handles thousands of daily student groups without mechanical wear or hygiene concerns.",
    approach:
      "We engineered an overhead laser tracking matrix and optical floor projection system that responds to hundreds of children concurrently without requiring tags or touchscreens.",
    techUsed: [
      "Long-Throw Laser Projection Matrix",
      "Multi-Zone Ceiling Optical Sensor Fusion",
      "Interactive Multi-User Educational Engine",
      "Continuous Sensor Health Telemetry"
    ],
    experienceDetails:
      "Children step directly into virtual planetary orbits and historical timelines, triggering kinetic animations and audio explanations with every step.",
    results: [
      { metric: "Extended", description: "Increase in gallery dwell time" },
      { metric: "Certified", description: "Zero-contact sanitary compliance" },
      { metric: "Multi-User", description: "Simultaneous active participants" }
    ],
    gallery: [
      "/images/museum_interactive_exhibit.jpg",
      "/images/museum_dino_sandbox.jpg",
      "/images/cathedral_projection_mapping.jpg"
    ],
    relatedSolutions: [
      { title: "Interactive Spaces", href: "/solutions#interactive" },
      { title: "Immersive Rooms", href: "/solutions#immersive" }
    ],
    relatedIndustries: [
      { title: "Museums & Culture", href: "/industries/museums-culture" },
      { title: "Education", href: "/industries/education" }
    ],
    nextProject: {
      title: "Pediatric Hospital Floor",
      href: "/projects/pediatric-hospital-floor"
    }
  },
  "pediatric-hospital-floor": {
    slug: "pediatric-hospital-floor",
    title: "Pediatric Hospital Floor",
    experienceType: "Therapeutic Motion Floor & Calming Riverbed",
    industry: "Healthcare",
    industryHref: "/industries/healthcare",
    heroImg: "/images/hospital_interactive_corridor.jpg",
    heroVideo: "/interactive-floor-showreel.mp4",
    overview:
      "Calming interactive aquatic environments projected onto pediatric hospital corridors, reducing stress and encouraging gentle physical rehabilitation for young patients.",
    challenge:
      "Strict hospital sanitation rules banning physical equipment or cables on clinical floors, alongside sensitive patient emotional states.",
    approach:
      "We mounted all optical projection and motion tracking hardware safely above ceiling tiles, projecting soft water ripples and swimming fish onto the existing hospital floor.",
    techUsed: [
      "Recessed Ceiling Optical Projectors",
      "Zero-Contact Infrared Motion Sensors",
      "Therapeutic Acoustic Soundscapes",
      "Medical-Grade Antimicrobial Surface Compatibility"
    ],
    experienceDetails:
      "Pediatric patients stepping onto the floor create gentle water ripples and discover swimming virtual fish that swim alongside them as they walk.",
    results: [
      { metric: "Proven", description: "Reduction in pre-procedure anxiety" },
      { metric: "Elevated", description: "Voluntary physical therapy mobility" },
      { metric: "Certified", description: "Infection-control compliant" }
    ],
    gallery: [
      "/images/hospital_interactive_corridor.jpg",
      "/images/healthcare_sensory_room.jpg",
      "/images/hospitality_koi_pond.jpg"
    ],
    relatedSolutions: [
      { title: "Interactive Spaces", href: "/solutions#interactive" }
    ],
    relatedIndustries: [
      { title: "Healthcare", href: "/industries/healthcare" }
    ],
    nextProject: {
      title: "Flagship Store Activation",
      href: "/projects/flagship-store-activation"
    }
  },
  "flagship-store-activation": {
    slug: "flagship-store-activation",
    title: "Flagship Store Activation",
    experienceType: "Interactive Merchandising & Motion Storefront",
    industry: "Retail & Showrooms",
    industryHref: "/industries/retail-showrooms",
    heroImg: "/images/retail_interactive_showcase.jpg",
    overview:
      "An experiential retail flagship installation on a luxury shopping boulevard where footsteps trigger blooming floral patterns and dynamic product highlights on luxury displays.",
    challenge:
      "Attracting foot traffic from busy street sidewalks and converting casual window shoppers into engaged in-store visitors.",
    approach:
      "We installed high-brightness rear-projection window glass combined with interior interactive motion floor tiles that react in real-time as shoppers browse.",
    techUsed: [
      "High-Lumen Daylight Laser Projection",
      "Optical Floor Pedestrian Tracking",
      "RFID Lift-and-Learn Integration",
      "Dynamic Cloud Merchandising Scheduler"
    ],
    experienceDetails:
      "As shoppers approach premium product pedestals, customized optical lighting rings expand beneath their feet and illuminate detailed craft stories.",
    results: [
      { metric: "Higher", description: "Storefront-to-interior conversion" },
      { metric: "Substantial", description: "Average product zone dwell time" },
      { metric: "Viral", description: "Organic social video impressions" }
    ],
    gallery: [
      "/images/retail_interactive_showcase.jpg",
      "/images/sneaker_customization_table.jpg",
      "/images/interactive_strike_wall.jpg"
    ],
    relatedSolutions: [
      { title: "Interactive Spaces", href: "/solutions#interactive" },
      { title: "Smart Engagement", href: "/solutions#smart-engagement" }
    ],
    relatedIndustries: [
      { title: "Retail & Showrooms", href: "/industries/retail-showrooms" }
    ],
    nextProject: {
      title: "Immersive STEM Lab",
      href: "/projects/immersive-stem-lab"
    }
  },
  "immersive-stem-lab": {
    slug: "immersive-stem-lab",
    title: "Immersive STEM Lab",
    experienceType: "Kinesthetic Geometry & Collaborative Physics Sandbox",
    industry: "Education",
    industryHref: "/industries/education",
    heroImg: "/images/education_interactive_floor.jpg",
    overview:
      "An educational ecosystem combining responsive topographic sandboxes with interactive wall physics for collaborative student learning.",
    challenge:
      "Bridging abstract mathematical and physics concepts into tangible, physical group experiments that maintain high student engagement.",
    approach:
      "We engineered real-time 3D depth-sensing cameras paired with short-throw projectors to dynamically map contours, vectors, and fluid simulations onto physical surfaces.",
    techUsed: [
      "Topographic 3D Depth Sensing Camera",
      "Ultra-Short-Throw Laser Projection",
      "Physics & Gravity Simulation Engine",
      "Collaborative Multi-Touch UI"
    ],
    experienceDetails:
      "Students shape physical sand to instantly create rivers, mountains, and contour lines, or physically launch virtual particles on projection walls.",
    results: [
      { metric: "Elevated", description: "STEM concept test retention" },
      { metric: "Universal", description: "Active student participation rate" },
      { metric: "Zero", description: "Fragile handheld hardware needed" }
    ],
    gallery: [
      "/images/education_interactive_floor.jpg",
      "/images/var_sandbox_projection.jpg",
      "/images/museum_dino_sandbox.jpg"
    ],
    relatedSolutions: [
      { title: "Interactive Spaces", href: "/solutions#interactive" }
    ],
    relatedIndustries: [
      { title: "Education", href: "/industries/education" }
    ],
    nextProject: {
      title: "Neo-Tokyo Retail Pop-Up",
      href: "/projects/neo-tokyo-retail-popup"
    }
  },
  "neo-tokyo-retail-popup": {
    slug: "neo-tokyo-retail-popup",
    title: "Neo-Tokyo Retail Pop-Up",
    experienceType: "Gamified Touch & Customization Table",
    industry: "Retail & Showrooms",
    industryHref: "/industries/retail-showrooms",
    heroImg: "/images/sneaker_customization_table.jpg",
    heroVideo: "/retail-pedestal-showreel.mp4",
    overview:
      "A futuristic retail pop-up in a premier metropolitan fashion and entertainment district featuring interactive sneaker projection mapping tables and responsive graffiti walls.",
    challenge:
      "Fitting ultra-high-density interactive technology into a compact footprint with rapid 48-hour pop-up assembly and teardown.",
    approach:
      "We developed modular self-calibrating projection pedestals with embedded computer vision tracking that calibrate automatically upon power-up.",
    techUsed: [
      "Self-Calibrating Micro Projection Pedestals",
      "Infrared Touch & Gesture Curtain",
      "Instant Generative Color Shaders",
      "Mobile Checkout Sync"
    ],
    experienceDetails:
      "Shoppers place blank physical sneakers on pedestals and design bespoke animated patterns with their fingertips in real time before ordering.",
    results: [
      { metric: "Measurable", description: "Sales conversion lift" },
      { metric: "10K+", description: "Custom sneaker designs rendered" },
      { metric: "48 Hr", description: "Full turnkey installation time" }
    ],
    gallery: [
      "/images/sneaker_customization_table.jpg",
      "/images/retail_interactive_showcase.jpg",
      "/images/corporate_lobby_wall.jpg"
    ],
    relatedSolutions: [
      { title: "Interactive Spaces", href: "/solutions#interactive" },
      { title: "Smart Engagement", href: "/solutions#smart-engagement" }
    ],
    relatedIndustries: [
      { title: "Retail & Showrooms", href: "/industries/retail-showrooms" }
    ],
    nextProject: {
      title: "AI Receptionist Avatar",
      href: "/projects/ai-receptionist-avatar"
    }
  },
  "ai-receptionist-avatar": {
    slug: "ai-receptionist-avatar",
    title: "AI Receptionist Avatar",
    experienceType: "Conversational AI Avatar Embedded in Architectural Mirrors",
    industry: "Corporate & Executive Spaces",
    industryHref: "/industries/corporate",
    heroImg: "/images/ai_receptionist_concierge.jpg",
    heroVideo: "/ai-receptionist-showreel.mp4",
    overview:
      "A real-time conversational AI avatar host integrated into smart two-way architectural mirrors, welcoming executive visitors and handling guest passes autonomously.",
    challenge:
      "Eliminating uncanny-valley delays while delivering natural voice interaction in noisy corporate reception atriums.",
    approach:
      "We engineered ultra-low-latency voice synthesis with directional beamforming microphone arrays and high-definition micro-LED projection behind dielectric glass.",
    techUsed: [
      "Directional Beamforming Audio Array",
      "Low-Latency Large Language Model Engine",
      "Dielectric Two-Way Smart Mirror Optics",
      "Facial Recognition & Badge Sync"
    ],
    experienceDetails:
      "Visitors approach the executive mirror and speak naturally with a lifelike virtual concierge who prints badges and notifies hosts instantly.",
    results: [
      { metric: "Instant", description: "Voice response glass-to-glass latency" },
      { metric: "Rapid", description: "Guest check-in throughput" },
      { metric: "Touchless", description: "Hands-free visitor management" }
    ],
    gallery: [
      "/images/ai_receptionist_concierge.jpg",
      "/images/cat_ai_avatar.jpg",
      "/images/corporate_lobby_wall.jpg"
    ],
    relatedSolutions: [
      { title: "AI Experiences", href: "/solutions#ai-experiences" }
    ],
    relatedIndustries: [
      { title: "Corporate & Executive Spaces", href: "/industries/corporate" }
    ],
    nextProject: {
      title: "Sensory Interactive Therapy Room",
      href: "/projects/sensory-interactive-therapy-room"
    }
  },
  "sensory-therapy-room": {
    slug: "sensory-therapy-room",
    title: "Sensory Interactive Therapy Room",
    experienceType: "Therapeutic Motion Projection & Sensory Decompression",
    industry: "Healthcare",
    industryHref: "/industries/healthcare",
    heroImg: "/images/healthcare_sensory_room.jpg",
    overview:
      "A specialized multisensory immersion room engineered for neurodiverse children and adults undergoing motor recovery and cognitive decompression.",
    challenge:
      "Creating deeply calming stimuli that adapt automatically to prevent sensory overstimulation or distress.",
    approach:
      "We combined biometric heart-rate-aware ambient lighting with pressure-sensitive motion projection algorithms and spatial acoustics.",
    techUsed: [
      "Non-Invasive Optical Heart Rate Sensing",
      "Adaptive Lighting & Color Temperature Control",
      "Gentle Kinetic Floor & Wall Canvas",
      "Spatial Binaural Acoustic Pods"
    ],
    experienceDetails:
      "Patients interact with floating light spheres and gentle watercolor ripples that synchronize smoothly to their breathing patterns.",
    results: [
      { metric: "Calming", description: "Non-invasive sensory therapy" },
      { metric: "Reduced", description: "Sensory overload episodes" },
      { metric: "Multi-User", description: "Therapist & patient dual participation" }
    ],
    gallery: [
      "/images/healthcare_sensory_room.jpg",
      "/images/hospital_interactive_corridor.jpg",
      "/images/hospitality_koi_pond.jpg"
    ],
    relatedSolutions: [
      { title: "Interactive Spaces", href: "/solutions#interactive" },
      { title: "Immersive Rooms", href: "/solutions#immersive" }
    ],
    relatedIndustries: [
      { title: "Healthcare", href: "/industries/healthcare" }
    ],
    nextProject: {
      title: "Sanctuary of Light Cathedral",
      href: "/projects/aura-digital-cathedral"
    }
  },
  "arcade-active-arena": {
    slug: "arcade-active-arena",
    title: "Kinesthetic Multiplayer Motion Arena",
    experienceType: "Zero-Wearable Dynamic Sports & Interactive Floor Arena",
    industry: "Entertainment",
    industryHref: "/industries/entertainment",
    heroImg: "/images/entertainment_motion_arena.jpg",
    overview:
      "A 50x50ft interactive projection floor and strike wall environment where teams compete in fast-paced neon ball sports, obstacle courses, and cooperative games with zero wearable sensors.",
    challenge:
      "Designing a high-throughput active gaming floor capable of tracking up to 30 sprinting players simultaneously under heavy impact without mechanical wear.",
    approach:
      "We engineered high-framerate ceiling LiDAR arrays paired with shock-dampened 4K laser projection engines, converting durable resilient sports flooring into a living game arena.",
    techUsed: [
      "Multi-Node High-FPS LiDAR Tracking Matrix",
      "Shock-Dampened Laser Projector Enclosures",
      "Real-Time Multiplayer Physics Engine",
      "Automated Tournament Scoring & Leaderboard System"
    ],
    experienceDetails:
      "Players sprint across the illuminated court chasing dynamic light targets, dodging virtual obstacles, and kicking softballs against responsive projected walls.",
    results: [
      { metric: "Multi-Player", description: "Simultaneous active players" },
      { metric: "Zero", description: "Floor hardware mechanical wear" },
      { metric: "100%", description: "Instant game-switching software versatility" }
    ],
    gallery: [
      "/images/entertainment_motion_arena.jpg",
      "/images/interactive_strike_wall.jpg",
      "/images/interactive_floor_motion.jpg"
    ],
    relatedSolutions: [
      { title: "Interactive Spaces", href: "/solutions#interactive" },
      { title: "Smart Engagement", href: "/solutions#smart-engagement" }
    ],
    relatedIndustries: [
      { title: "Entertainment", href: "/industries/entertainment" },
      { title: "Education", href: "/industries/education" }
    ],
    nextProject: {
      title: "Enchanted Night Trail",
      href: "/projects/enchanted-night-trail"
    }
  },
  "concourse-interactive-floor": {
    slug: "concourse-interactive-floor",
    title: "Concourse Motion Interactive Floor",
    experienceType: "Contactless Motion-Reactive Flow Zones for Public Transit",
    industry: "Public Spaces",
    industryHref: "/industries/public-spaces",
    heroImg: "/images/industry_public_spaces_hero.jpg",
    overview:
      "A 200-foot continuous interactive floor projection deployed across high-traffic transit pathways, providing ambient visual relaxation and playful engagement for travelers.",
    challenge:
      "Deploying interactive projection across high-density concourses without causing pedestrian bottlenecks or slowing commuter transit flow.",
    approach:
      "We engineered flow-through generative visual algorithms that ripple outward alongside moving pedestrians, encouraging continuous forward progression.",
    techUsed: [
      "Concealed Overhead High-Lumen Laser Projectors",
      "Vandal-Proof Rigid Ceiling Mount Assemblies",
      "Anonymous Flow-Through Optical Tracking",
      "24-7 Automated Diagnostic Cloud Telemetry"
    ],
    experienceDetails:
      "As passengers walk to their gates, gentle water ripples, autumn leaves, and glowing constellations follow their steps across the stone flooring.",
    results: [
      { metric: "200+ Ft", description: "Continuous projection surface length" },
      { metric: "Zero", description: "Obstruction to pedestrian commuter flow" },
      { metric: "24/7", description: "Unattended municipal operational uptime" }
    ],
    gallery: [
      "/images/industry_public_spaces_hero.jpg",
      "/images/horizon_glass_floor.jpg",
      "/images/hospital_interactive_corridor.jpg"
    ],
    relatedSolutions: [
      { title: "Interactive Spaces", href: "/solutions#interactive" },
      { title: "Immersive Rooms", href: "/solutions#immersive" }
    ],
    relatedIndustries: [
      { title: "Public Spaces", href: "/industries/public-spaces" },
      { title: "Hospitality", href: "/industries/hospitality" }
    ],
    nextProject: {
      title: "Quantum Prism Passage",
      href: "/projects/quantum-prism-passage"
    }
  }
};

// Aliases mapping for alternate slugs
caseStudiesData["classroom-projection"] = caseStudiesData["interactive-learning-experience"] || caseStudiesData["immersive-stem-lab"];
caseStudiesData["ocean-wonders"] = caseStudiesData["360-exhibit-tunnel"] || caseStudiesData["biosphere-ocean-experience"];
caseStudiesData["ai-avatar-companion"] = caseStudiesData["retail-gamification"] || caseStudiesData["ai-receptionist-avatar"];
caseStudiesData["immersive-museum-experience"] = caseStudiesData["360-exhibit-tunnel"] || caseStudiesData["interactive-museum-exhibit"];
caseStudiesData["interactive-brand-experience"] = caseStudiesData["retail-gamification"] || caseStudiesData["flagship-store-activation"];
caseStudiesData["sensory-interactive-therapy-room"] = caseStudiesData["sensory-therapy-room"];

// Fallback generator so NO project slug ever 404s
function getProjectData(slug: string): CaseStudyData {
  const base = caseStudiesData[slug];
  if (base) {
    return {
      ...base,
      objective: base.objective || "Deliver an active, unforgettable spatial environment that elevates visitor dwell time, drives organic word-of-mouth engagement, and preserves architectural integrity with zero physical surface damage.",
      solution: base.solution || base.approach || "We engineered an integrated optical projection and spatial sensor matrix customized to the venue geometry, converting physical surfaces into living interactive canvases.",
      execution: base.execution || "White-glove field implementation including custom non-invasive ceiling brackets, multi-projector sub-millimeter edge blending, optical sensor alignment, and 24-7 remote cloud telemetry.",
      cta: base.cta || {
        eyebrow: "SPATIAL CONSULTATION & BRIEFING",
        title: "Ready to Transform Your Venue with Spatial Projection?",
        subtitle: "Schedule a 1-on-1 technical briefing with our optical physicists, LiDAR computer vision architects, and creative technologists to scope your space.",
        buttonText: "Schedule Technical Briefing",
        buttonHref: "/contact"
      }
    };
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
    heroImg: "/images/entertainment_motion_arena.jpg",
    overview:
      `A custom interactive installation deployed at ${formattedTitle}, combining optical tracking, high-lumen projection mapping, and real-time spatial content.`,
    challenge:
      "Integrating cutting-edge motion projection into complex architecture while ensuring high reliability, ultra-low latency, and engaging multi-user interaction.",
    objective:
      "Create an active, memorable spatial destination that increases visitor throughput, drives dwell time, and operates autonomously with zero wearable sensors.",
    solution:
      "We engineered a custom hardware-software stack tailored specifically for the venue's geometric parameters and visitor flow dynamics, turning ordinary architectural surfaces into living digital canvases.",
    techUsed: [
      "High-Precision 3D LiDAR Motion Tracking Engine",
      "4K Ultra-Short Throw Laser Projection Mapping",
      "Real-Time Spatial Content Generator",
      "Cloud Analytics & Monitoring System",
    ],
    execution:
      "White-glove commissioning including precision ceiling brackets, non-invasive cable management, automated optical edge blending, and 24-7 remote telemetry diagnostics.",
    experienceDetails:
      "Visitors engage intuitively with responsive light and sound canvases, turning ordinary physical floor and wall surfaces into unforgettable digital moments.",
    results: [
      { metric: "Substantial", description: "Increase in audience engagement" },
      { metric: "Enterprise", description: "Reliable commercial uptime" },
      { metric: "Multi-User", description: "Simultaneous spatial tracking" },
    ],
    gallery: [
      "/images/hospitality_ambient_atrium.jpg",
      "/images/cathedral_projection_mapping.jpg",
      "/images/horizon_glass_floor.jpg",
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
      title: "Sanctuary of Light Cathedral",
      href: "/projects/aura-digital-cathedral",
    },
    cta: {
      eyebrow: "SPATIAL CONSULTATION & BRIEFING",
      title: "Ready to Transform Your Venue With Spatial Intelligence?",
      subtitle: "Schedule a 1-on-1 technical briefing with our optical physicists, LiDAR computer vision architects, and creative technologists.",
      buttonText: "Schedule Technical Briefing",
      buttonHref: "/contact"
    }
  };
}

export function generateStaticParams() {
  return Object.keys(caseStudiesData).map((slug) => ({ slug }));
}

export default async function CaseStudyPage(props: { params: Promise<{ slug: string }> }) {
  const { slug } = await props.params;
  const project = getProjectData(slug);
  const nextSlug = project.nextProject?.href ? project.nextProject.href.replace("/projects/", "").replace(/^\//, "") : "";
  const nextProjectData = nextSlug ? getProjectData(nextSlug) : null;

  return (
    <main className="min-h-screen bg-white text-black flex flex-col selection:bg-black selection:text-white">
      <Navbar />

      {/* ─── HERO SECTION (Cinematic Widescreen Viewport Fit) ─── */}
      <section className="relative h-screen min-h-screen max-h-screen w-full flex flex-col justify-center pt-20 sm:pt-24 pb-8 overflow-hidden bg-black text-white">
        {/* Background Image / Video Layer: Left shadow for high legibility, right unhindered for vibrant projection visuals */}
        <div className="absolute inset-0 pointer-events-none z-0">
          {project.heroVideo ? (
            <video 
              src={project.heroVideo} 
              poster={project.heroImg}
              autoPlay 
              loop 
              muted 
              playsInline 
              preload="auto"
              className="w-full h-full object-cover opacity-85 brightness-105 contrast-105" 
            />
          ) : (
            <SafeImage 
              src={project.heroImg} 
              alt={project.title} 
              className="w-full h-full object-cover opacity-85 brightness-105 contrast-105 scale-105 animate-[slow-pan_28s_ease-in-out_infinite_alternate]" 
              containerClassName="w-full h-full bg-slate-950" 
              priority
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/55 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-transparent to-black/70" />
        </div>

        {/* Center Hero Content (Left-aligned over architectural backdrop) */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full">
          <div className="max-w-3xl space-y-4 sm:space-y-5">
            {/* Eyebrow Pill Badges */}
            <div className="flex flex-wrap items-center gap-2.5 text-[10px] sm:text-[11px] font-mono font-semibold uppercase tracking-[0.2em]">
              <span className="px-3.5 py-1 rounded-full border border-white/30 text-white bg-white/10 backdrop-blur-md shadow-sm">
                CASE STUDY
              </span>
              {project.heroVideo && (
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-emerald-400/40 text-emerald-300 bg-emerald-950/60 backdrop-blur-md shadow-sm">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>LIVE FOOTAGE</span>
                </span>
              )}
              <Link
                href={project.industryHref}
                className="px-3.5 py-1 rounded-full border border-white/20 text-white/80 hover:text-white hover:bg-white/10 transition-colors backdrop-blur-sm"
              >
                {project.industry}
              </Link>
            </div>

            {/* Project Title */}
            <h1 className="font-black text-white tracking-tight leading-[1.08] drop-shadow-2xl text-[clamp(1.85rem,5.5vw,4rem)]">
              {project.title}
            </h1>

            {/* Subtitle / Experience Details */}
            <p className="text-sm sm:text-base lg:text-lg text-white/85 font-light leading-relaxed max-w-2xl drop-shadow-md">
              {project.experienceType}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <Link
                href="#case-study-details"
                className="inline-flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-wider px-6 sm:px-7 py-3 rounded-full bg-white text-black hover:bg-neutral-200 shadow-xl transition-all duration-300 active:scale-95 cursor-pointer"
              >
                <span>Explore Case Study</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-wider px-6 sm:px-7 py-3 rounded-full bg-white/10 text-white hover:bg-white/20 border border-white/20 backdrop-blur-md transition-all duration-300 active:scale-95"
              >
                Request Briefing
              </Link>
            </div>

            {/* Sleek Architectural Metrics Strip (perfect level alignment) */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-8 pt-3 sm:pt-4 max-w-3xl items-start">
              {project.results.map((res, i) => (
                <div key={i} className="flex flex-col justify-start">
                  <div className="h-7 sm:h-9 lg:h-10 flex items-center">
                    <span className="text-xl sm:text-2xl lg:text-3xl font-black text-white tracking-tight font-sans leading-none">
                      {res.metric}
                    </span>
                  </div>
                  <div className="text-[9px] sm:text-[10px] text-white/70 font-mono uppercase tracking-wider font-semibold leading-tight pt-1">
                    {res.description}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── MAIN ARCHITECTURAL FORMAT (WITHOUT NUMBERING) ─── */}
      <div id="case-study-details" className="scroll-mt-16 pt-8 sm:pt-12 pb-16 sm:pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full space-y-16 sm:space-y-24">
        
        {/* ─── SPATIAL TRANSFORMATION: BEFORE & AFTER SLIDER ─── */}
        {project.beforeImg && (
          <div className="space-y-3 sm:space-y-4">
            <div className="space-y-1 text-center max-w-2xl mx-auto">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/5 text-[10px] sm:text-[11px] font-mono font-semibold uppercase tracking-[0.2em] text-black">
                <Sparkles className="w-3 h-3 text-black" />
                <span>SPATIAL TRANSFORMATION</span>
              </span>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-black tracking-tight text-black">
                Raw Architecture vs. Activated Projection
              </h2>
              <p className="text-xs sm:text-sm text-neutral-600 font-light leading-relaxed">
                Drag the interactive split-slider to compare the raw physical space against the activated projection canvas.
              </p>
            </div>

            <BeforeAfterSlider
              beforeImage={project.beforeImg}
              afterImage={project.heroImg}
              beforeLabel="RAW VENUE (BEFORE)"
              afterLabel="ACTIVATED PROJECTION (AFTER)"
              aspectRatio={project.sliderAspect || "auto"}
              hideHeader={true}
            />
          </div>
        )}

        {/* ─── STRATEGIC SCOPE: THE CHALLENGE & THE OBJECTIVE ─── */}
        <div className="space-y-6">
          <div className="space-y-2">
            <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-[0.25em] text-black/50 font-bold block">
              STRATEGIC SCOPE
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-black">
              Architectural Challenge &amp; Strategic Objectives
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-stretch">
            {/* Challenge (Elevated Dark Slate Card) */}
            <div className="p-5 sm:p-8 lg:p-10 rounded-3xl border border-neutral-800 bg-neutral-950 text-white flex flex-col justify-between shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-48 h-48 bg-red-500/10 rounded-full blur-3xl pointer-events-none" />
              <div className="space-y-4 relative z-10">
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-[10px] sm:text-[11px] font-mono font-bold uppercase tracking-wider bg-red-500/15 border border-red-500/30 text-red-400 shadow-sm">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>THE CHALLENGE</span>
                  </span>
                  <span className="text-[10px] font-mono text-white/40 uppercase font-semibold">SITE CONSTRAINTS</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-black tracking-tight text-white pt-1">
                  Architectural Obstacles &amp; Constraints
                </h3>
                <p className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed">
                  {project.challenge}
                </p>
              </div>
              <div className="mt-8 flex items-center gap-2 text-xs font-mono text-red-400 font-medium relative z-10">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                <span>Critical Site Obstacles Scoped &amp; Mitigated</span>
              </div>
            </div>

            {/* Objective (Elevated Pure White Card) */}
            <div className="p-5 sm:p-8 lg:p-10 rounded-3xl border border-black/10 bg-white text-black flex flex-col justify-between shadow-xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-48 h-48 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
              <div className="space-y-4 relative z-10">
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-[10px] sm:text-[11px] font-mono font-bold uppercase tracking-wider bg-blue-500/10 border border-blue-500/25 text-blue-600 shadow-sm">
                    <Target className="w-3.5 h-3.5" />
                    <span>THE OBJECTIVE</span>
                  </span>
                  <span className="text-[10px] font-mono text-black/40 uppercase font-semibold">STRATEGIC GOALS</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-black tracking-tight text-black pt-1">
                  Experiential &amp; Operational Targets
                </h3>
                <p className="text-xs sm:text-sm text-neutral-700 font-light leading-relaxed">
                  {project.objective}
                </p>
              </div>
              <div className="mt-8 flex items-center gap-2 text-xs font-mono text-blue-600 font-medium relative z-10">
                <span className="w-2 h-2 rounded-full bg-blue-500" />
                <span>Verified Visitor Engagement Mandate</span>
              </div>
            </div>
          </div>
        </div>

        {/* ─── ENGINEERING ARCHITECTURE: THE SOLUTION & THE TECHNOLOGY ─── */}
        <div className="space-y-6">
          <div className="space-y-2">
            <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-[0.25em] text-black/50 font-bold block">
              ENGINEERING ARCHITECTURE
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-black">
              Spatial Solution &amp; Hardware Matrix
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch">
            {/* Solution (7 Cols) */}
            <div className="lg:col-span-7 p-5 sm:p-8 lg:p-10 rounded-3xl border border-black/10 bg-white shadow-xl flex flex-col justify-between space-y-6 relative overflow-hidden group">
              <div className="space-y-5">
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 text-[10px] sm:text-[11px] font-mono uppercase tracking-[0.2em] text-emerald-600 font-bold bg-emerald-50 border border-emerald-200/80 px-3.5 py-1 rounded-full shadow-sm">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>THE SOLUTION</span>
                  </span>
                  <span className="text-[10px] font-mono text-black/40 uppercase font-semibold">SPATIAL CONCEPT &amp; DESIGN</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-black tracking-tight text-black pt-1">
                  Architectural Spatial Engineering
                </h3>
                <p className="text-xs sm:text-sm text-neutral-700 font-light leading-relaxed">
                  {project.solution}
                </p>
                {project.overview && (
                  <div className="bg-neutral-50 rounded-2xl p-4 sm:p-5 border border-black/5 space-y-1.5">
                    <span className="text-[9px] sm:text-[10px] font-mono uppercase tracking-widest text-black/40 font-bold block">
                      DEPLOYMENT VISION
                    </span>
                    <p className="text-xs sm:text-sm text-neutral-800 font-light italic leading-relaxed">
                      &ldquo;{project.overview}&rdquo;
                    </p>
                  </div>
                )}
              </div>

              {/* Spatial Mechanics Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-3 pt-2">
                <div className="p-3 sm:p-3.5 rounded-2xl bg-neutral-50 border border-black/5 space-y-1">
                  <span className="text-[9px] sm:text-[10px] font-mono font-bold uppercase tracking-wider text-black/50 block">SURFACE MESH</span>
                  <span className="text-[11px] sm:text-xs font-semibold text-black block leading-tight">Laser Calibrated</span>
                </div>
                <div className="p-3 sm:p-3.5 rounded-2xl bg-neutral-50 border border-black/5 space-y-1">
                  <span className="text-[9px] sm:text-[10px] font-mono font-bold uppercase tracking-wider text-black/50 block">DYNAMIC ENGINE</span>
                  <span className="text-[11px] sm:text-xs font-semibold text-black block leading-tight">60 FPS Real-time</span>
                </div>
                <div className="p-3 sm:p-3.5 rounded-2xl bg-neutral-50 border border-black/5 space-y-1">
                  <span className="text-[9px] sm:text-[10px] font-mono font-bold uppercase tracking-wider text-black/50 block">INTEGRATION</span>
                  <span className="text-[11px] sm:text-xs font-semibold text-black block leading-tight">Non-Invasive Mount</span>
                </div>
              </div>
            </div>

            {/* Technology Stack (5 Cols) */}
            <div className="lg:col-span-5 p-8 sm:p-10 rounded-3xl border border-neutral-800 bg-neutral-950 text-white shadow-2xl flex flex-col justify-between space-y-6 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-48 h-48 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
              <div className="space-y-5 relative z-10">
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 text-[10px] sm:text-[11px] font-mono uppercase tracking-[0.2em] text-cyan-400 font-bold bg-cyan-500/15 border border-cyan-500/30 px-3.5 py-1 rounded-full shadow-sm">
                    <Cpu className="w-3.5 h-3.5" />
                    <span>THE TECHNOLOGY</span>
                  </span>
                  <span className="text-[10px] font-mono text-white/40 uppercase font-semibold">HARDWARE &amp; SENSORS</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-black tracking-tight text-white pt-1">
                  Deployed Hardware Architecture
                </h3>
                <div className="space-y-2.5 pt-1">
                  {project.techUsed.map((t, i) => (
                    <div
                      key={i}
                      className="p-3 sm:p-3.5 rounded-2xl bg-white/[0.04] border border-white/[0.08] hover:border-cyan-500/40 hover:bg-white/[0.07] transition-all flex items-start gap-3 group/item"
                    >
                      <div className="mt-1 w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)] shrink-0" />
                      <div className="min-w-0 flex-1">
                        <p className="text-xs sm:text-sm text-neutral-200 font-medium leading-snug tracking-wide">
                          {t}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Status Indicator Bar */}
              <div className="pt-2 flex items-center justify-between text-[10px] sm:text-[11px] font-mono text-white/50 relative z-10">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-neutral-300 font-medium">Commercial Duty Cycle</span>
                </span>
                <span className="uppercase tracking-widest text-cyan-400/80 font-bold">ACTIVE TELEMETRY</span>
              </div>
            </div>
          </div>
        </div>

        {/* ─── COMMISSIONING & IMPACT: THE EXECUTION & THE RESULT ─── */}
        <div className="space-y-6">
          <div className="space-y-2">
            <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-[0.25em] text-black/50 font-bold block">
              COMMISSIONING &amp; IMPACT
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-black">
              Precision Execution &amp; Measured ROI
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch">
            {/* Execution (6 Cols - Elevated Dark Obsidian Chassis) */}
            <div className="lg:col-span-6 p-5 sm:p-8 lg:p-10 rounded-3xl border border-neutral-800 bg-neutral-950 text-white shadow-2xl flex flex-col justify-between space-y-6 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-48 h-48 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
              <div className="space-y-5 relative z-10">
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 text-[10px] sm:text-[11px] font-mono uppercase tracking-[0.2em] text-amber-400 font-bold bg-amber-500/15 border border-amber-500/30 px-3.5 py-1 rounded-full shadow-sm">
                    <Wrench className="w-3.5 h-3.5" />
                    <span>THE EXECUTION</span>
                  </span>
                  <span className="text-[10px] font-mono text-white/40 uppercase font-semibold">COMMISSIONING PROTOCOL</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-black tracking-tight text-white pt-1">
                  Precision Rigging &amp; Alignment
                </h3>
                <p className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed">
                  {project.execution}
                </p>
              </div>

              {/* Commissioning Milestones Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-3 pt-2 relative z-10">
                <div className="p-3 sm:p-3.5 rounded-2xl bg-white/[0.04] border border-white/[0.08] space-y-1">
                  <span className="text-[9px] sm:text-[10px] font-mono font-bold uppercase tracking-wider text-amber-400 block">RIGGING</span>
                  <span className="text-[11px] sm:text-xs font-semibold text-white block leading-tight">Non-Invasive Mounts</span>
                </div>
                <div className="p-3 sm:p-3.5 rounded-2xl bg-white/[0.04] border border-white/[0.08] space-y-1">
                  <span className="text-[9px] sm:text-[10px] font-mono font-bold uppercase tracking-wider text-amber-400 block">CALIBRATION</span>
                  <span className="text-[11px] sm:text-xs font-semibold text-white block leading-tight">Sub-Millimeter Blend</span>
                </div>
                <div className="p-3 sm:p-3.5 rounded-2xl bg-white/[0.04] border border-white/[0.08] space-y-1">
                  <span className="text-[9px] sm:text-[10px] font-mono font-bold uppercase tracking-wider text-amber-400 block">TELEMETRY</span>
                  <span className="text-[11px] sm:text-xs font-semibold text-white block leading-tight">24/7 Cloud Health</span>
                </div>
              </div>

              {/* Commissioning Status Indicator Bar */}
              <div className="pt-2 flex items-center justify-between text-[10px] sm:text-[11px] font-mono text-white/50 relative z-10">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                  <span className="text-neutral-300 font-medium">Turnkey Field Implementation</span>
                </span>
                <span className="uppercase tracking-widest text-amber-400/80 font-bold">CERTIFIED COMMISSIONING</span>
              </div>
            </div>

            {/* Result (6 Cols - Elevated Pure White Card with Metric Pods) */}
            <div className="lg:col-span-6 p-5 sm:p-8 lg:p-10 rounded-3xl border border-black/10 bg-white text-black shadow-xl flex flex-col justify-between space-y-6 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-48 h-48 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />
              <div className="space-y-5 relative z-10">
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 text-[10px] sm:text-[11px] font-mono uppercase tracking-[0.2em] text-purple-600 font-bold bg-purple-50 border border-purple-200/80 px-3.5 py-1 rounded-full shadow-sm">
                    <BarChart3 className="w-3.5 h-3.5" />
                    <span>THE RESULT</span>
                  </span>
                  <span className="text-[10px] font-mono text-black/40 uppercase font-semibold">MEASURABLE IMPACT &amp; ROI</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-black tracking-tight text-black pt-1">
                  Audience Metrics &amp; ROI
                </h3>
                <p className="text-xs sm:text-sm text-neutral-700 font-light leading-relaxed">
                  {project.experienceDetails}
                </p>
              </div>

              {/* Metric Pods Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3 pt-2 relative z-10">
                {project.results.map((res, i) => (
                  <div
                    key={i}
                    className="p-3.5 sm:p-4 rounded-2xl bg-neutral-50 border border-black/5 hover:border-purple-300 hover:bg-neutral-100/60 transition-all flex flex-col justify-start space-y-1 group/metric"
                  >
                    <div className="h-7 sm:h-9 lg:h-10 flex items-center">
                      <span className="text-xl sm:text-2xl lg:text-3xl font-black text-black font-sans tracking-tight leading-none">
                        {res.metric}
                      </span>
                    </div>
                    <div className="text-[9px] sm:text-[10px] text-neutral-600 font-mono uppercase tracking-wider font-semibold leading-tight pt-1">
                      {res.description}
                    </div>
                  </div>
                ))}
              </div>

              {/* Result Status Indicator Bar */}
              <div className="pt-2 flex items-center justify-between text-[10px] sm:text-[11px] font-mono text-black/50 relative z-10">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-purple-600" />
                  <span className="text-neutral-700 font-medium">Audience Validation Verified</span>
                </span>
                <span className="uppercase tracking-widest text-purple-600 font-bold">PROJECT TARGET MET</span>
              </div>
            </div>
          </div>
        </div>

        {/* ─── INSTALLATION GALLERY ─── */}
        <div className="space-y-5">
          <div>
            <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-[0.2em] text-black/50 font-bold block mb-1">
              DOCUMENTATION
            </span>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-black tracking-tight text-black">
              Visual Documentation &amp; Environments
            </h2>
          </div>

          {/* Multi-angle Installation Gallery */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
            {project.gallery.map((imgUrl, i) => (
              <div key={i} className="relative aspect-[16/10] rounded-2xl overflow-hidden border border-black/10 bg-black group shadow-sm">
                <SafeImage
                  src={imgUrl}
                  alt={`${project.title} Visual ${i + 1}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  containerClassName="w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                <div className="absolute bottom-3 left-3 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-white bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/20">
                    Field View {i + 1}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ─── RELATED SOLUTIONS & ECOSYSTEM ─── */}
        <div className="space-y-6">
          <div className="space-y-2">
            <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-[0.25em] text-black/50 font-bold block">
              ECOSYSTEM ARCHITECTURE
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-black">
              Ecosystem Technologies &amp; Industries
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-stretch">
            {/* Related Solutions */}
            <div className="p-8 sm:p-10 rounded-3xl border border-black/10 bg-white shadow-xl flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 text-[10px] sm:text-[11px] font-mono uppercase tracking-[0.2em] text-emerald-600 font-bold bg-emerald-50 border border-emerald-200/80 px-3.5 py-1 rounded-full shadow-sm">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>CAPABILITIES</span>
                  </span>
                  <span className="text-[10px] font-mono text-black/40 uppercase font-semibold">SPATIAL SOLUTIONS</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-black tracking-tight text-black pt-1">
                  Related Spatial Solutions
                </h3>
                <p className="text-xs sm:text-sm text-neutral-600 font-light leading-relaxed">
                  Complementary projection mapping and motion tracking disciplines architected for parallel venue deployments.
                </p>
              </div>

              <div className="space-y-2.5 pt-2">
                {project.relatedSolutions.map((sol, i) => (
                  <Link
                    key={i}
                    href={sol.href}
                    className="group flex items-center justify-between p-4 rounded-2xl bg-neutral-50/80 border border-black/5 hover:border-black/20 hover:bg-white hover:shadow-md transition-all"
                  >
                    <div className="space-y-0.5">
                      <span className="text-[9px] font-mono uppercase tracking-wider text-black/40 font-bold block">
                        SPECIALIZED SOLUTION
                      </span>
                      <span className="text-xs sm:text-sm font-bold text-black group-hover:text-black transition-colors block">
                        {sol.title}
                      </span>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-white border border-black/10 flex items-center justify-center text-black group-hover:bg-black group-hover:text-white transition-all shadow-sm">
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Industry Applications */}
            <div className="p-8 sm:p-10 rounded-3xl border border-black/10 bg-white shadow-xl flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 text-[10px] sm:text-[11px] font-mono uppercase tracking-[0.2em] text-blue-600 font-bold bg-blue-50 border border-blue-200/80 px-3.5 py-1 rounded-full shadow-sm">
                    <Target className="w-3.5 h-3.5" />
                    <span>APPLICATIONS</span>
                  </span>
                  <span className="text-[10px] font-mono text-black/40 uppercase font-semibold">COMMERCIAL VERTICALS</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-black tracking-tight text-black pt-1">
                  Industry Applications
                </h3>
                <p className="text-xs sm:text-sm text-neutral-600 font-light leading-relaxed">
                  Tailored commercial implementations engineered to meet regulatory, architectural, and foot-traffic demands.
                </p>
              </div>

              <div className="space-y-2.5 pt-2">
                {project.relatedIndustries.map((ind, i) => (
                  <Link
                    key={i}
                    href={ind.href}
                    className="group flex items-center justify-between p-4 rounded-2xl bg-neutral-50/80 border border-black/5 hover:border-black/20 hover:bg-white hover:shadow-md transition-all"
                  >
                    <div className="space-y-0.5">
                      <span className="text-[9px] font-mono uppercase tracking-wider text-black/40 font-bold block">
                        MARKET SECTOR
                      </span>
                      <span className="text-xs sm:text-sm font-bold text-black group-hover:text-black transition-colors block">
                        {ind.title}
                      </span>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-white border border-black/10 flex items-center justify-center text-black group-hover:bg-black group-hover:text-white transition-all shadow-sm">
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Next Case Study Navigation (Understated Editorial Continuation Link) */}
          <Link
            href={project.nextProject.href}
            className="group block p-6 sm:p-8 rounded-3xl bg-neutral-50/80 hover:bg-neutral-100 border border-black/5 transition-all"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="space-y-1">
                <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-[0.2em] text-black/50 font-bold block">
                  CONTINUE READING • NEXT CASE STUDY
                </span>
                <h3 className="text-lg sm:text-xl lg:text-2xl font-black text-black group-hover:text-neutral-700 transition-colors">
                  {project.nextProject.title}
                </h3>
                {nextProjectData?.experienceType && (
                  <p className="text-xs text-neutral-500 font-light">
                    {nextProjectData.experienceType}
                  </p>
                )}
              </div>

              <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-black group-hover:translate-x-1 transition-transform shrink-0">
                <span>View Next Project</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </Link>
        </div>
      </div>

      {/* ─── SITE-STANDARD FULL-WIDTH CINEMATIC STUDIO CTA ─── */}
      <HugeCTA
        badge="Spatial Consultation & Feasibility"
        title={
          <>
            Ready to bring your <br className="hidden sm:block" /> interactive vision to life?
          </>
        }
        subtitle="Collaborate directly with our principal optical physicists, LiDAR computer vision architects, and creative technologists to craft a tailored technical proposal for your venue."
        primaryBtnText="Schedule Technical Briefing"
        primaryBtnHref="/contact"
        secondaryBtnText="Book a Demo"
        secondaryBtnHref="/contact"
      />

      <Footer />
    </main>
  );
}
