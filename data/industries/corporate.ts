import { Monitor } from 'lucide-react';
import { IndustryData } from './types';

export const corporate: IndustryData = {
  slug: "corporate",
  icon: Monitor,
  hero: {
    eyebrow: "CORPORATE & EXECUTIVE HEADQUARTERS",
    title: "Inspire Enterprise Clients and Showcase Strategic Innovation",
    subtitle: "Modernize corporate headquarters, executive briefing centers, and lobbies with real-time generative digital architecture.",
    img: "/images/industry_corporate_hero.jpg",
  },
  challenges: {
    title: "The Challenge in Corporate Spaces",
    intro: "Corporate headquarters and executive briefing centers are critical tools for closing enterprise deals, recruiting top talent, and communicating brand vision, but they often rely on outdated presentation methods.",
    items: [
      { title: "Static Presentations", desc: "PowerPoint presentations fail to capture the scale, innovation, and dynamic nature of modern enterprise solutions." },
      { title: "Uninspiring Lobbies", desc: "Corporate entrances often feature generic architecture that does nothing to communicate the company's forward-thinking brand." },
      { title: "Complex Data Visualization", desc: "Explaining global operations, supply chains, or data networks is difficult without interactive, large-scale visualization." },
      { title: "Hybrid Work Culture", desc: "With fewer employees in the office, the physical headquarters must serve as a highly impactful destination rather than just a workspace." },
      { title: "Brand Consistency", desc: "Managing physical branding across multiple global offices is slow and expensive." },
      { title: "Visitor Engagement", desc: "Guests waiting in lobbies are often left staring at their phones rather than engaging with the company's story." }
    ],
    transition: "Interactive spatial architecture transforms corporate spaces into powerful, persuasive environments that communicate innovation instantly."
  },
  vision: {
    title: "Our Vision for Corporate Spaces",
    intro: "We believe a company's physical headquarters should be its most powerful marketing asset. By integrating interactive data visualization and architectural projection, we turn offices into immersive storytelling centers.",
    statement: "Every corporate headquarters should physically embody the innovation and scale of the business it houses.",
    pillars: [
      { title: "🌟 The Innovation Lobby", desc: "Welcome VIP guests with personalized, motion-reactive digital art that reflects your brand identity." },
      { title: "🤝 Interactive Briefings", desc: "Replace static screens with massive, touchless data walls that executives can control with gestures." },
      { title: "🚀 Global Data Visualization", desc: "Showcase real-time global operations on interactive projection-mapped globes or cityscapes." },
      { title: "🌍 Agile Branding", desc: "Update the look, feel, and messaging of your entire office instantly from a central cloud dashboard." }
    ],
    transition: "This is how we help Fortune 500 companies build executive briefing centers that accelerate sales cycles and impress stakeholders.",
    quote: "\"Your headquarters should be a physical manifestation of your company's future.\"",
    img: "/images/corporate_lobby_wall.jpg"
  },
  solutions: {
    title: "Corporate Interactive Solutions",
    intro: "We design high-end interactive installations specifically for the needs of enterprise sales, executive briefings, and corporate branding.",
    items: [
      { title: "Executive Briefing Walls", desc: "Massive ultra-high-resolution touch walls where executives can present complex data, 3D models, and global strategies." },
      { title: "Generative Brand Lobbies", desc: "Lobby floors and walls featuring digital art that reacts to the movement of employees and guests, reflecting real-time company data." },
      { title: "Interactive Product Showrooms", desc: "Projection mapped physical models that allow clients to explore software, machinery, or architectural designs interactively." },
      { title: "AI Reception Kiosks", desc: "Holographic or screen-based AI avatars that can greet guests by name, notify hosts, and provide interactive wayfinding." },
      { title: "Data-Driven Sculptures", desc: "Physical art installations in the atrium that change color and pattern based on live company stock prices or sustainability metrics." },
      { title: "Immersive Boardrooms", desc: "Meeting spaces surrounded by 360-degree projection to completely immerse clients in your brand environment." }
    ],
    bottomStatement: "Sophisticated, secure, and designed to impress your most important clients."
  },
  experiences: {
    title: "Featured Corporate Environments",
    intro: "See how leading enterprises are using interactive spatial design to win business and inspire their workforce.",
    items: [
      { title: "The Interactive Briefing Center", desc: "A 40-foot touchless interactive wall where executives present global supply chain data using hand gestures.", tags: ["Gesture Recognition", "Data Viz"], img: "/images/horizon_glass_floor.jpg", href: "/projects/corporate-lobby-installation" },
      { title: "Generative Data Lobby", desc: "A lobby floor projection that generates unique digital art patterns based on the real-time volume of global company transactions.", tags: ["Generative Art", "API Integration"], img: "/images/interactive_floor_motion.jpg", href: "/solutions/interactive-floor" },
      { title: "Projection Mapped Cityscape", desc: "A massive physical model of a smart city in the showroom, brought to life with overhead projection detailing energy usage and traffic flows.", tags: ["Projection Mapping", "Physical + Digital"], img: "/images/projection_cityscape_model.jpg", href: "/solutions/projection-mapping" },
      { title: "The 360° Innovation Lab", desc: "An immersive room where R&D teams can step inside 3D CAD models of new products before they are physically prototyped.", tags: ["360 Projection", "CAD Integration"], img: "/images/planetarium_projection_dome.jpg", href: "/solutions/immersive-room" },
      { title: "Interactive Timeline Wall", desc: "A touch-enabled digital hallway detailing the 100-year history and future roadmap of the corporation.", tags: ["Interactive Wall", "Storytelling"], img: "/images/architectural_light_beam.jpg", href: "/solutions/interactive-wall" },
      { title: "Personalized VIP Welcome", desc: "Lobby displays that use secure opt-in mobile tracking to instantly theme the entrance to a visiting client's brand colors.", tags: ["Proximity Sensing", "CMS Automation"], img: "/images/ai_receptionist_concierge.jpg", href: "/projects/ai-receptionist-avatar" }
    ]
  },
  benefits: {
    title: "Enterprise ROI & Impact",
    intro: "Corporate interactive installations are powerful sales and recruitment tools that deliver measurable business value.",
    items: [
      { title: "Accelerated Sales Cycles", desc: "Immersive executive briefings increase client comprehension of complex products, leading to faster deal closures." },
      { title: "Top Talent Recruitment", desc: "A high-tech, visually stunning headquarters serves as a massive competitive advantage when recruiting top-tier tech talent." },
      { title: "Centralized Brand Control", desc: "Marketing teams can push updated messaging, videos, and branding to every global office lobby simultaneously." },
      { title: "Memorable VIP Visits", desc: "Personalizing the interactive environment for visiting executives leaves a lasting, premium impression of your brand." },
      { title: "Improved Data Comprehension", desc: "Visualizing massive datasets in an interactive, spatial format allows executives to spot trends they would miss on a spreadsheet." },
      { title: "Dynamic Space Utilization", desc: "Transform a single showroom from a product demo space into a corporate event venue instantly via software." }
    ],
    bottomStatement: "Invest in physical spaces that actively work to grow your business."
  },
  technology: {
    title: "Enterprise-Grade Technology",
    intro: "We understand that corporate IT environments require strict security, seamless AV integration, and absolute reliability.",
    items: [
      { title: "Secure On-Premise Servers", desc: "Options for fully air-gapped or securely networked local rendering servers to protect sensitive corporate data." },
      { title: "Enterprise API Integrations", desc: "Connect our interactive displays directly to Salesforce, PowerBI, or proprietary data lakes for live data visualization." },
      { title: "Unified AV Control", desc: "Deep integration with Crestron, AMX, and Extron systems so executives can control the room from a single familiar interface." },
      { title: "High-Resolution LED & Laser", desc: "Deploying the finest pixel-pitch LEDs and 4K laser projectors for crisp, professional text and data rendering." },
      { title: "SOC2 Compliant Cloud CMS", desc: "For networked systems, our cloud management platform adheres to strict enterprise security and access control standards." },
      { title: "Redundant Failover Systems", desc: "Mission-critical briefing centers are equipped with automatic failover hardware to ensure a presentation never drops." }
    ],
    bottomStatement: "Designed to meet the rigorous security and reliability standards of global IT departments."
  },
  faqs: {
    title: "Corporate Installation FAQs",
    intro: "Answers to common questions from IT directors, facilities managers, and executive sponsors.",
    items: [
      { q: "Can we display live, sensitive company data safely?", a: "Yes. Our systems can be installed completely on-premise without external internet access, pulling data securely from your internal network via local APIs." },
      { q: "How hard is it for executives to learn to use the interactive walls?", a: "Our interfaces are designed to be entirely intuitive, using natural gestures (swipes, points, pinches) that mirror smartphone usage. Zero training is required." },
      { q: "Will the projectors wash out in our glass-walled lobby?", a: "For high-ambient-light glass lobbies, we often recommend fine-pitch LED walls instead of projection, or we use ultra-high brightness lasers combined with ALR surfaces." },
      { q: "Can the lobby art reflect our brand colors?", a: "Absolutely. We design generative algorithms that are strictly bound to your corporate brand guidelines, ensuring the art is always on-brand while constantly evolving." },
      { q: "How do you handle maintenance without disrupting the office?", a: "Hardware is installed discreetly. We utilize remote monitoring to diagnose issues and schedule any necessary physical maintenance outside of business hours." },
      { q: "Can we integrate video conferencing into the interactive wall?", a: "Yes. We frequently integrate Zoom, Teams, or Webex into the massive interactive canvases, allowing for hybrid briefings with life-size remote participants." }
    ]
  },
  caseStudies: [
    {
      client: "Global Tech Headquarters",
      title: "Generative AI Mirror Room",
      headline: "Real-Time Neural Renders & Conversational Digital Avatars",
      tag: "AI & COMPUTER VISION",
      metric: "Sub-Frame",
      metricLabel: "Neural Render Latency",
      secondaryMetric: "Complete",
      secondaryMetricLabel: "Local Edge Privacy",
      desc: "A real-time generative AI mirror chamber reacting to visitor movement and voice gestures with dynamic digital avatars and responsive spatial visualizations.",
      quote: "Executive visitors were stunned by the responsiveness of the generative reflections — it instantly communicated our technological superiority.",
      img: "/images/ai_receptionist_concierge.jpg",
      slug: "generative-ai-mirror-room"
    },
    {
      client: "Enterprise Technology Campus",
      title: "Corporate Lobby Installation",
      headline: "Generative Foot-Traffic & Employee Data Visualization Wall",
      tag: "DATA VISUALIZATION WALL",
      metric: "Seamless",
      metricLabel: "Real-Time Cloud Sync",
      secondaryMetric: "4K",
      secondaryMetricLabel: "Ultra-High Resolution",
      desc: "A massive interactive data visualization wall reacting to foot traffic, global transactions, and sustainability metrics in real time.",
      quote: "The lobby installation transformed a mundane waiting area into a breathtaking showcase of our global impact.",
      img: "/images/corporate_lobby_wall.jpg",
      slug: "corporate-lobby-installation"
    },
    {
      client: "International Financial Center",
      title: "AI Receptionist Avatar Concierge",
      headline: "Conversational Spatial Intelligence Embedded in Smart Mirrors",
      tag: "AI RECEPTION CONCIERGE",
      metric: "Enterprise",
      metricLabel: "Greeting Accuracy",
      secondaryMetric: "Sub-Second",
      secondaryMetricLabel: "Response Time",
      desc: "Real-time conversational AI avatar embedded into architectural smart mirrors for touchless visitor registration, host alerts, and intuitive building wayfinding.",
      quote: "Clients love the sleek concierge greeting — it streamlines check-in while setting a high-tech tone for every meeting.",
      img: "/images/industry_corporate_hero.jpg",
      slug: "ai-receptionist-avatar"
    }
  ],
  cta: {
    eyebrow: "EXECUTIVE SPATIAL COMPUTING",
    title: "Build Next-Level Corporate Experiences.",
    subtitle: "Equip your executive briefing centers and headquarters with interactive digital architecture that closes deals and impresses stakeholders.",
    buttonText: "Build Next-Level Corporate Experiences",
    img: "/images/industry_corporate_hero.jpg"
  }
};
