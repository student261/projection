import { ShoppingBag } from 'lucide-react';
import { IndustryData } from './types';

export const retail: IndustryData = {
  slug: "retail-showrooms",
  icon: ShoppingBag,
  hero: {
    eyebrow: "RETAIL & SHOWROOM INNOVATION",
    title: "Interactive Showrooms That Turn Browsing into High-Value Conversion",
    subtitle: "Transform storefronts, flagship environments, and luxury showrooms into kinetic destinations with motion-reactive display architecture.",
    img: "/images/industry_retail_hero.jpg",
  },
  challenges: {
    title: "The Challenge in Modern Retail",
    intro: "Brick-and-mortar retail faces unprecedented competition from e-commerce. To drive foot traffic and sales, physical stores must offer experiences that cannot be replicated online.",
    items: [
      { title: "Declining Foot Traffic", desc: "Standard window displays no longer capture the attention of modern, distracted consumers." },
      { title: "Short Dwell Times", desc: "Shoppers move through stores quickly without engaging deeply with brand narratives." },
      { title: "E-commerce Competition", desc: "Physical stores struggle to match the dynamic, personalized nature of online shopping." },
      { title: "Static Merchandising", desc: "Traditional printed displays are expensive to update and offer zero interactive value." },
      { title: "Lack of Analytics", desc: "Physical retail often lacks the deep engagement metrics available to digital marketers." },
      { title: "Brand Differentiation", desc: "Standing out in crowded malls and high streets requires bold, memorable experiences." }
    ],
    transition: "To thrive, retail environments must evolve from transactional spaces into immersive, interactive brand destinations."
  },
  vision: {
    title: "Our Vision for Retail",
    intro: "We believe the future of retail is experiential. By merging digital interactivity with physical spaces, we help brands create immersive environments that stop shoppers in their tracks.",
    statement: "Every flagship store should offer an unforgettable, interactive journey that deepens brand loyalty and drives conversion.",
    pillars: [
      { title: "🌟 Captivate Passersby", desc: "Use motion-reactive window displays to instantly grab attention and increase store entry rates." },
      { title: "🤝 Deepen Engagement", desc: "Keep customers in-store longer with interactive product discovery and gamified activations." },
      { title: "🚀 Dynamic Storytelling", desc: "Update campaigns instantly across global locations without printing a single poster." },
      { title: "🌍 Measure Impact", desc: "Gain real-time insights into foot traffic, dwell time, and interaction rates." }
    ],
    transition: "We deliver this vision through scalable interactive installations tailored for global retail brands.",
    quote: "\"The most successful retail spaces are no longer just stores; they are interactive brand experiences.\"",
    img: "/images/retail_interactive_showcase.jpg"
  },
  solutions: {
    title: "Interactive Retail Solutions",
    intro: "From the storefront to the fitting room, our interactive solutions are designed to engage customers at every touchpoint of their shopping journey.",
    items: [
      { title: "Interactive Shop Windows", desc: "Glass storefronts that respond to the movement of pedestrians outside, pulling them into the brand narrative." },
      { title: "Lift-and-Learn Displays", desc: "Smart shelving that triggers detailed product information and dynamic visuals when a customer picks up an item." },
      { title: "Immersive Fitting Rooms", desc: "Interactive mirrors and projection mapping that allow customers to change lighting and request different sizes seamlessly." },
      { title: "Gamified Floor Activations", desc: "Motion-responsive floors for seasonal campaigns that encourage play and social media sharing." },
      { title: "Architectural Projection Mapping", desc: "Transform the interior architecture of flagship stores with breathtaking, dynamic brand visuals." },
      { title: "Interactive Product Catalogs", desc: "Large-scale touch walls where customers can explore the entire digital inventory in a highly visual way." }
    ],
    bottomStatement: "Every solution is integrated seamlessly into your store architecture to enhance, not distract from, your products."
  },
  experiences: {
    title: "Featured Brand Activations",
    intro: "Explore how leading global brands are using interactive spatial technology to redefine the in-store experience.",
    items: [
      { title: "Flagship Storefront Window", desc: "A motion-reactive digital display that increases foot traffic by engaging pedestrians as they walk past.", tags: ["Interactive Window", "Computer Vision"], img: "/images/industry_retail_hero.jpg", href: "/projects/flagship-store-activation" },
      { title: "Sneaker Customization Zone", desc: "An interactive projection mapping table where customers can design and preview custom sneakers in real-time.", tags: ["Projection Mapping", "Touch Integration"], img: "/images/sneaker_customization_table.jpg", href: "/projects/neo-tokyo-retail-popup" },
      { title: "Luxury Fashion Pop-Up", desc: "A fully immersive 360-degree projection room detailing the heritage and craftsmanship of the brand.", tags: ["360 Projection", "Spatial Audio"], img: "/images/cathedral_projection_mapping.jpg", href: "/projects/neo-shinjuku-interactive-wall" },
      { title: "Interactive Cosmetics Counter", desc: "Lift-and-learn technology that instantly displays tutorials and ingredients when a product is picked up.", tags: ["RFID Sensors", "Smart Displays"], img: "/images/cosmetics_smart_counter.jpg", href: "/contact" },
      { title: "Gamified Kids Apparel Section", desc: "An interactive floor projector that keeps children entertained while parents shop nearby.", tags: ["Interactive Floor", "Motion Tracking"], img: "/images/education_interactive_floor.jpg", href: "/contact" },
      { title: "Digital Brand Atrium", desc: "A massive, multi-story LED and projection installation that acts as the vibrant heartbeat of the retail space.", tags: ["Large Scale LED", "Generative Content"], img: "/images/hospitality_ambient_atrium.jpg", href: "/contact" }
    ]
  },
  benefits: {
    title: "Retail Metrics & Outcomes",
    intro: "Interactive brand experiences deliver measurable returns on investment by driving traffic, extending dwell time, and increasing conversions.",
    items: [
      { title: "Increased Foot Traffic", desc: "Interactive storefronts consistently capture attention, driving substantial increases in storefront-to-interior foot traffic." },
      { title: "Extended Dwell Time", desc: "Immersive in-store activations keep customers engaged longer, directly correlating with higher sales volumes." },
      { title: "Social Media Amplification", desc: "Visually stunning interactive spaces naturally encourage organic sharing and user-generated content on platforms like Instagram and TikTok." },
      { title: "Agile Campaign Management", desc: "Update visuals across hundreds of stores globally with a single click via our cloud CMS." },
      { title: "Deep Customer Insights", desc: "Gather anonymous analytics on how many people stopped, interacted, and dwelled at your activations." },
      { title: "Omnichannel Connection", desc: "Bridge the gap by seamlessly connecting in-store interactive experiences with mobile commerce and loyalty apps." }
    ],
    bottomStatement: "Turn physical retail spaces into powerful, measurable brand marketing channels."
  },
  technology: {
    title: "Retail-Ready Technology",
    intro: "We deploy commercial-grade interactive technologies designed to run flawlessly 24/7 in high-traffic retail environments, backed by powerful cloud management.",
    items: [
      { title: "High-Brightness Projection", desc: "Laser projectors engineered to cut through bright ambient retail lighting and sunlight." },
      { title: "Cloud Content Management", desc: "A centralized platform to schedule and deploy seasonal campaigns across global store networks." },
      { title: "RFID & Object Recognition", desc: "Sensors that instantly identify which physical products a customer is holding to trigger relevant content." },
      { title: "Anonymous Analytics Cameras", desc: "Edge-computing vision systems that measure footfall and engagement without storing personal data." },
      { title: "Interactive Glass Films", desc: "Specialized films that turn standard storefront windows into high-contrast projection surfaces." },
      { title: "Hidden Hardware Integration", desc: "Compact media servers and concealed sensors that maintain your store's premium aesthetic." }
    ],
    bottomStatement: "Reliable, scalable, and completely integrated into your retail architecture."
  },
  faqs: {
    title: "Retail Interactive FAQs",
    intro: "Common questions about deploying interactive experiences in flagship stores and retail rollouts.",
    items: [
      { q: "Can the interactive window work in direct sunlight?", a: "We use ultra-high brightness laser projectors and specialized ambient-light-rejecting (ALR) films to ensure visibility, though we often optimize content for peak impact during afternoon and evening hours." },
      { q: "How easy is it to change the campaign content?", a: "Extremely easy. Our cloud CMS allows your marketing team to upload new videos, update game assets, or change branding across all store locations instantly from a web browser." },
      { q: "Can the system track how many people interact?", a: "Yes. Our computer vision systems provide dashboards showing total passersby, stop rate, interaction rate, and average dwell time." },
      { q: "Do you offer solutions for temporary pop-up stores?", a: "Yes, we offer rapidly deployable, modular interactive setups specifically designed for short-term brand activations, pop-ups, and exhibitions." },
      { q: "Can the interactive floor handle heavy foot traffic?", a: "The interactive floor is purely projected light and camera tracking. There is no physical hardware on the floor itself, making it immune to wear and tear from heavy foot traffic." },
      { q: "Can customers use their smartphones to interact?", a: "Yes. We frequently integrate QR code handshakes that allow customers to control the large-scale displays using their own mobile devices, bridging the physical and digital." },
      { q: "How do you handle maintenance if a projector goes down?", a: "We actively monitor system health remotely. If a unit fails, we receive an alert instantly and coordinate with local AV partners for rapid swap-outs." },
      { q: "Can we integrate this with our inventory system?", a: "Yes, our API allows integrations with POS and inventory systems to ensure 'Lift and Learn' displays only showcase in-stock variations." }
    ]
  },
  caseStudies: [
    {
      client: "Neo-Shinjuku District",
      title: "Gamified Touch & Motion Projection Wall",
      headline: "Multi-Touch Dynamic Façade Driving Viral Footfall",
      tag: "TOUCH & GESTURE WALL",
      metric: "Substantial",
      metricLabel: "Dwell Time Increase",
      secondaryMetric: "Continuous",
      secondaryMetricLabel: "Daily Interactions",
      desc: "A multi-touch interactive projection wall built for luxury retail fashion pop-ups and nightlife activations, responding instantly to pedestrian touch and body gestures.",
      quote: "Passersby couldn't resist stopping to play with the wall, translating directly into a massive surge in store entries.",
      img: "/images/retail_interactive_showcase.jpg",
      slug: "neo-shinjuku-interactive-wall"
    },
    {
      client: "Haute Horlogerie Luxury Flagship",
      title: "Flagship Store Activation",
      headline: "Footstep-Responsive Floral Motion Floor & Kinetic Display",
      tag: "INTERACTIVE FLOOR & WALL",
      metric: "Substantial",
      metricLabel: "Store Entry Lift",
      secondaryMetric: "Multi-Fold",
      secondaryMetricLabel: "Engagement Duration",
      desc: "An immersive retail brand activation where footsteps trigger blooming floral particle simulations and highlight seasonal product capsules.",
      quote: "The storefront became the defining spectacle of the entire shopping district during our holiday campaign.",
      img: "/images/industry_retail_hero.jpg",
      slug: "flagship-store-activation"
    },
    {
      client: "Neo-Tokyo Brand Lab",
      title: "Neo-Tokyo Retail Pop-Up",
      headline: "Interactive Product Customization & Holographic Shelving",
      tag: "SMART MERCHANDISING",
      metric: "Elevated",
      metricLabel: "Sales Conversion Lift",
      secondaryMetric: "Commercial-Grade",
      secondaryMetricLabel: "System Reliability",
      desc: "An experiential pop-up combining RFID lift-and-learn pedestals with custom sneaker projection mapping tables for instant personalized design.",
      quote: "Shoppers customized products in real time right in front of their eyes, resulting in our highest sales velocity ever.",
      img: "/images/sneaker_customization_table.jpg",
      slug: "neo-tokyo-retail-popup"
    }
  ],
  cta: {
    eyebrow: "RETAIL SPATIAL TRANSFORMATION",
    title: "Elevate Your Retail Experience.",
    subtitle: "Ready to convert passersby into loyal customers with motion-responsive storefronts and interactive product showcases?",
    buttonText: "Elevate Your Retail Experience",
    img: "/images/industry_retail_hero.jpg"
  }
};
