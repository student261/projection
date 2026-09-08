import { Landmark } from 'lucide-react';
import { IndustryData } from './types';

export const museums: IndustryData = {
  slug: "museums",
  icon: Landmark,
  hero: {
    eyebrow: "MUSEUMS & CULTURE",
    title: "Bring History and Art to Life with Immersive Storytelling",
    subtitle: "Transform static galleries into highly engaging, interactive spaces that connect with modern audiences.",
    img: "https://momentfactory.com/cdn/shop/files/Aura_EgliseSaint-Roch_MomentFactory__DSC4360.png",
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
    quote: "\"We don't just want visitors to see history; we want them to feel it.\""
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
      { title: "The Immersive History Hall", desc: "A 360-degree projection room detailing the rise and fall of ancient civilizations.", tags: ["360 Projection", "Spatial Audio"], img: "https://momentfactory.com/cdn/shop/files/Moment_Factory_Signature_Shows_25_SuperReal_D7A1668-WS_5b710a5d-f2e7-4428-ad20-c83c257b7bbe.jpg" },
      { title: "Interactive Dino Dig", desc: "An augmented sandbox where children physically dig to uncover digitally projected fossils.", tags: ["Projection Mapping", "Depth Sensing"], img: "https://momentfactory.com/cdn/shop/files/Moment_Factory_Custom_Experience_Cultural___Educational_NGH_WondersofourWorld_Oceans_JE-188_1_-WS.jpg" },
      { title: "Touchless Art Gallery", desc: "High-resolution digital canvases that let visitors zoom into the brushstrokes of masterpieces using hand gestures.", tags: ["Gesture Recognition", "4K Displays"], img: "https://momentfactory.com/cdn/shop/files/Moment_Factory_Originals_Heritage_Sites_Aura_GraceCathedral_8314-WS.jpg" },
      { title: "The Ocean Floor Experience", desc: "A motion-reactive floor projection that simulates walking through a coral reef, parting the water with every step.", tags: ["Interactive Floor", "Generative Art"], img: "https://momentfactory.com/cdn/shop/files/Aura_EgliseSaint-Roch_MomentFactory__DSC4360.png" },
      { title: "Interactive City Model", desc: "A physical architectural model brought to life with dynamic overhead projection mapping showing urban growth.", tags: ["Object Mapping", "Data Visualization"], img: "https://momentfactory.com/cdn/shop/files/Moment_Factory_Signature_Shows_25_SuperReal_D7A1668-WS_5b710a5d-f2e7-4428-ad20-c83c257b7bbe.jpg" },
      { title: "Digital Planetarium Dome", desc: "Immersive space exploration using ultra-short-throw projectors mapped to curved ceiling architecture.", tags: ["Dome Projection", "Real-time Rendering"], img: "https://momentfactory.com/cdn/shop/files/Moment_Factory_Custom_Experience_Cultural___Educational_NGH_WondersofourWorld_Oceans_JE-188_1_-WS.jpg" }
    ]
  },
  benefits: {
    title: "Museum Metrics & Outcomes",
    intro: "Investing in interactive spatial technology yields measurable returns in visitor satisfaction, attendance, and operational flexibility.",
    items: [
      { title: "Increased Attendance", desc: "Immersive exhibits are massive draws, often doubling attendance numbers among younger demographics." },
      { title: "Longer Dwell Times", desc: "Interactive storytelling keeps visitors engaged in galleries 3x longer than static displays." },
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
  }
};
