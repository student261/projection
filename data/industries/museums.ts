import { Landmark } from 'lucide-react';
import { IndustryData } from './types';

export const museums: IndustryData = {
  slug: "museums-culture",
  icon: Landmark,
  hero: {
    eyebrow: "MUSEUMS, CULTURE & HERITAGE",
    title: "Bring Art and Living History to Life with Immersive Storytelling",
    subtitle: "Transform static archives and quiet galleries into multisensory, interactive journeys that inspire modern audiences.",
    img: "/images/industry_museums_hero.jpg",
  },
  challenges: {
    title: "The Challenge in Museums",
    intro: "Modern visitors, especially younger generations, expect more than just static displays. They want to be part of the story, but preserving delicate artifacts while providing deep interaction is a complex balance.",
    items: [
      { title: "Static Exhibitions", desc: "Traditional plaques and glass cases struggle to hold the attention of digital-native visitors." },
      { title: "Fragile Artifacts", desc: "Historical items cannot be physically handled, creating a barrier between the visitor and the history." },
      { title: "Limited Space", desc: "Museums have vast archives but limited floor space to display information and context." },
      { title: "Accessibility Needs", desc: "Standard exhibits often fail to provide multi-lingual or multi-sensory experiences." },
      { title: "Dwell Time", desc: "Visitors often move through galleries too quickly without absorbing the educational material." },
      { title: "Attracting Youth", desc: "Competing with digital entertainment requires more dynamic and immersive museum experiences." }
    ],
    transition: "Interactive spatial technology solves this by overlaying digital storytelling onto physical spaces without risking artifacts."
  },
  vision: {
    title: "Our Vision for Culture",
    intro: "We believe the best museums don't just display history; they allow you to step inside it. By combining 360-degree projection with touchless interactivity, we turn archival data into emotional, memorable experiences.",
    statement: "Every cultural institution should have the tools to make their stories accessible, engaging, and unforgettable.",
    pillars: [
      { title: "🌟 Immersive Storytelling", desc: "Surround visitors with 360-degree visual narratives that provide deep historical context." },
      { title: "🤝 Touchless Discovery", desc: "Allow guests to interact with and zoom into high-resolution artifacts using only hand gestures." },
      { title: "🚀 Dynamic Archives", desc: "Turn a single digital table into a portal for thousands of archived documents and photos." },
      { title: "🌍 Inclusive Design", desc: "Offer content that adapts to different languages, ages, and learning styles instantly." }
    ],
    transition: "Our interactive solutions bring this vision to life for galleries, heritage sites, and science centers worldwide.",
    quote: "\"We don't just want visitors to see history; we want them to feel it.\"",
    img: "/images/cathedral_projection_mapping.jpg"
  },
  solutions: {
    title: "Interactive Museum Solutions",
    intro: "From grand entrance halls to intimate artifact displays, our interactive solutions are designed to enhance the museum journey at every step.",
    items: [
      { title: "360° Projection Mapping", desc: "Transform entire rooms into immersive environments that transport visitors to different eras or landscapes." },
      { title: "Interactive Timelines", desc: "Large-scale touch walls where multiple visitors can scrub through history and explore interconnected events." },
      { title: "Touchless Artifact Kiosks", desc: "Sensors that allow visitors to rotate, zoom, and explore 3D scans of delicate artifacts without touching a screen." },
      { title: "Augmented Reality Floors", desc: "Walk across ancient maps or interactive ecological simulations projected directly onto the gallery floor." },
      { title: "Digital Guestbooks", desc: "Interactive light walls where visitors can leave their mark or share their thoughts digitally." },
      { title: "Gamified Science Exhibits", desc: "Motion-tracked games that teach physics, biology, and chemistry through full-body movement." }
    ],
    bottomStatement: "Every solution is custom-designed to respect the architectural integrity of your institution."
  },
  experiences: {
    title: "Featured Cultural Exhibits",
    intro: "See how leading museums are using interactive projection to break attendance records and deeply engage their communities.",
    items: [
      { title: "The Immersive History Hall", desc: "A 360-degree projection room detailing the rise and fall of ancient civilizations.", tags: ["360 Projection", "Spatial Audio"], img: "/images/cathedral_projection_mapping.jpg", href: "/projects/aura-digital-cathedral" },
      { title: "Interactive Dino Dig", desc: "An augmented sandbox where children physically dig to uncover digitally projected fossils.", tags: ["Projection Mapping", "Depth Sensing"], img: "/images/museum_dino_sandbox.jpg", href: "/contact" },
      { title: "Touchless Art Gallery", desc: "High-resolution digital canvases that let visitors zoom into the brushstrokes of masterpieces using hand gestures.", tags: ["Gesture Recognition", "4K Displays"], img: "/images/biosphere_ocean_gallery.jpg", href: "/projects/chrono-echoes-artifact-wall" },
      { title: "The Ocean Floor Experience", desc: "A motion-reactive floor projection that simulates walking through a coral reef, parting the water with every step.", tags: ["Interactive Floor", "Generative Art"], img: "/images/interactive_floor_motion.jpg", href: "/projects/biosphere-ocean-experience" },
      { title: "Interactive City Model", desc: "A physical architectural model brought to life with dynamic overhead projection mapping showing urban growth.", tags: ["Object Mapping", "Data Visualization"], img: "/images/projection_cityscape_model.jpg", href: "/contact" },
      { title: "Digital Planetarium Dome", desc: "Immersive space exploration using ultra-short-throw projectors mapped to curved ceiling architecture.", tags: ["Dome Projection", "Real-time Rendering"], img: "/images/planetarium_projection_dome.jpg", href: "/projects/celestial-dome-observatory" }
    ]
  },
  benefits: {
    title: "Museum Metrics & Outcomes",
    intro: "Investing in interactive spatial technology yields measurable returns in visitor satisfaction, attendance, and operational flexibility.",
    items: [
      { title: "Increased Attendance", desc: "Immersive exhibits are massive draws, often doubling attendance numbers among younger demographics." },
      { title: "Longer Dwell Times", desc: "Interactive storytelling keeps visitors engaged in galleries substantially longer than static displays." },
      { title: "Flexible Gallery Space", desc: "Change entire exhibitions overnight simply by updating the software content, saving millions in physical build costs." },
      { title: "Multi-language Support", desc: "Easily switch languages or offer personalized content based on visitor profiles." },
      { title: "Enhanced Accessibility", desc: "Touchless and large-scale visual installations are more accessible to visitors with varying physical abilities." },
      { title: "Social Media Sharing", desc: "Visually stunning immersive rooms naturally encourage photography, driving organic marketing." }
    ],
    bottomStatement: "Create a museum that adapts, evolves, and continues to draw crowds year after year."
  },
  technology: {
    title: "Museum-Grade Technology",
    intro: "We understand that museums require technology that is virtually invisible, entirely silent, and capable of running flawlessly for years.",
    items: [
      { title: "Ultra-Short Throw Optics", desc: "Project massive, seamless images in tight gallery spaces without visitors casting shadows." },
      { title: "Acoustically Silent Hardware", desc: "Laser projectors and media servers designed to operate silently so they don't disrupt the gallery ambiance." },
      { title: "Edge-Blending Software", desc: "Seamlessly stitch multiple projectors together to create massive, continuous canvases on any architectural surface." },
      { title: "Touchless Radar Sensors", desc: "Detect hand gestures and body movement accurately without requiring any physical glass screens." },
      { title: "Archival CMS Integrations", desc: "Software that securely connects your interactive displays directly to your existing digital archives." },
      { title: "Automated Show Control", desc: "Systems that automatically power on, calibrate, and sync audio/visuals before the museum opens every morning." }
    ],
    bottomStatement: "Invisible technology powering unforgettable cultural experiences."
  },
  faqs: {
    title: "Museum Installation FAQs",
    intro: "Answers to common questions regarding heritage buildings, artifact safety, and exhibition integration.",
    items: [
      { q: "Can projection mapping damage delicate artifacts?", a: "No. We use specially calibrated LED and Laser light sources that do not emit harmful UV or IR radiation, ensuring total safety for sensitive pigments and materials." },
      { q: "Our building is a heritage site. Can you install without damaging walls?", a: "Yes. We frequently work in Grade I listed buildings. We use freestanding truss systems, tension mounts, and wireless data transmission to avoid drilling into historic architecture." },
      { q: "How do we update the content for new temporary exhibitions?", a: "Our proprietary CMS allows your curatorial team to upload new videos, text, and interactive modules easily. We also provide templates for rapid exhibition turnovers." },
      { q: "Can the interactive floor handle thousands of daily visitors?", a: "Yes, because the floor itself is just the projection surface. All the technology (projectors and cameras) is safely rigged on the ceiling, completely immune to foot traffic." },
      { q: "What happens if a projector loses alignment?", a: "Our systems include automated camera-based recalibration. If a projector is bumped, the system can automatically re-align the edge-blending within seconds." },
      { q: "Can we sync the visuals with spatial audio?", a: "Absolutely. We design and integrate multi-channel spatial audio systems that track with the interactive visual elements to create a truly immersive environment." }
    ]
  },
  caseStudies: [
    {
      client: "Gothic Heritage Sanctuary",
      title: "Architectural 360° Projection Mapping & Spatial Audio",
      headline: "Transforming Historic Stone Sanctuaries into Living Digital Canvases",
      tag: "ARCHITECTURAL PROJECTION",
      metric: "Global",
      metricLabel: "Annual Visitors Welcomed",
      secondaryMetric: "Certified",
      secondaryMetricLabel: "Historic Preservation",
      desc: "An architectural light and sound masterpiece mapping 28 high-lumen 4K laser projectors across 60-foot vaulted ceilings with sub-millimeter precision and spatial 3D audio.",
      quote: "The installation completely transformed how visitors experience our cathedral without placing a single screw in historic stonework.",
      img: "/images/cathedral_projection_mapping.jpg",
      slug: "aura-digital-cathedral"
    },
    {
      client: "BioSphere Science Center",
      title: "Interactive Museum Floor & 360° Marine Canvas",
      headline: "Touchless Deep-Sea Exploration Through Kinetic Motion Projection",
      tag: "INTERACTIVE FLOOR & WALL",
      metric: "Multi-User",
      metricLabel: "Simultaneous Tracked Visitors",
      secondaryMetric: "Top-Tier",
      secondaryMetricLabel: "Visitor Satisfaction Rating",
      desc: "A 360-degree reactive ocean floor projection reacting dynamically to marine biodiversity interaction, scattering schools of fish and parting bioluminescent water ripples underfoot.",
      quote: "Guests of all generations spend hours exploring the interactive reef floor — substantially extended gallery dwell times.",
      img: "/images/biosphere_ocean_gallery.jpg",
      slug: "biosphere-ocean-experience"
    },
    {
      client: "National Antiquities Wing",
      title: "Chrono Echoes Artifact Wall",
      headline: "Low-UV Micro-Projection Unlocking Hidden Historical Layers",
      tag: "HERITAGE PRESERVATION DISPLAY",
      metric: "Certified",
      metricLabel: "UV Preservation Compliance",
      secondaryMetric: "Top-Tier",
      secondaryMetricLabel: "Educational Review Score",
      desc: "Directional low-UV micro-projection with infrared radar proximity tracking that softly illuminates historical digital layers and animations behind glass artifact cases.",
      quote: "Delicate historical artifacts can now communicate their full context and history safely without compromising conservation rules.",
      img: "/images/museum_interactive_exhibit.jpg",
      slug: "chrono-echoes-artifact-wall"
    }
  ],
  cta: {
    eyebrow: "CULTURAL SPATIAL DESIGN",
    title: "Curate Immersive Cultural Journeys.",
    subtitle: "Bring your historic archives, fine art, and scientific exhibitions into vivid, interactive reality.",
    buttonText: "Curate Immersive Cultural Journeys",
    img: "/images/industry_museums_hero.jpg"
  }
};
