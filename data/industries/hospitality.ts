import { Film } from 'lucide-react';
import { IndustryData } from './types';

export const hospitality: IndustryData = {
  slug: "hospitality",
  icon: Film,
  hero: {
    eyebrow: "LUXURY HOSPITALITY & RESORTS",
    title: "Unforgettable Guest Welcome Moments and Ambient Atmospheres",
    subtitle: "Elevate luxury hotels, resorts, and Michelin-tier dining with interactive ambient surfaces that redefine architectural hospitality.",
    img: "/images/industry_hospitality_hero.jpg",
  },
  challenges: {
    title: "The Challenge in Hospitality",
    intro: "Luxury hotels and resorts are constantly searching for ways to differentiate their properties and create memorable 'wow' moments that guests want to capture and share.",
    items: [
      { title: "First Impressions", desc: "The lobby experience sets the tone for the entire stay, yet many lobbies feel static and uninspiring." },
      { title: "Social Media Visibility", desc: "Properties struggle to create organic, viral moments that encourage guests to post online." },
      { title: "Day/Night Transitions", desc: "Venues need atmospheres that can shift from bright and energetic during the day to calm and luxurious at night." },
      { title: "Family Engagement", desc: "Resorts need ways to keep children entertained in lobbies and restaurants without disrupting other guests." },
      { title: "Event Customization", desc: "Banquet halls require expensive physical decorations to customize spaces for weddings and corporate events." },
      { title: "Wayfinding", desc: "Large resorts often have confusing layouts that frustrate arriving guests." }
    ],
    transition: "Interactive ambient technology allows hospitality venues to dynamically alter their atmosphere and create instantly shareable moments."
  },
  vision: {
    title: "Our Vision for Hospitality",
    intro: "We believe a hotel should feel alive. By integrating subtle, responsive projections and ambient interactive surfaces, we help properties create environments that breathe with the rhythm of their guests.",
    statement: "Every luxury venue should offer an adaptive, immersive atmosphere that elevates the guest experience from the moment they arrive.",
    pillars: [
      { title: "🌟 The 'Wow' Arrival", desc: "Create breathtaking entrance experiences with motion-reactive floors and generative art walls." },
      { title: "🤝 Ambient Luxury", desc: "Use subtle, calming interactions like digital water ripples that respond to footsteps in the lounge." },
      { title: "🚀 Dynamic Venues", desc: "Instantly change the entire theme of a ballroom or restaurant through projection mapping." },
      { title: "🌍 Seamless Integration", desc: "Ensure technology blends invisibly into high-end architectural design." }
    ],
    transition: "This vision empowers hoteliers to curate the perfect mood for any moment, day or night.",
    quote: "\"Luxury is no longer just about service; it's about how an environment makes you feel.\"",
    img: "/images/hospitality_ambient_atrium.jpg"
  },
  solutions: {
    title: "Interactive Hospitality Solutions",
    intro: "Our solutions are designed to enhance the aesthetics of luxury properties while providing engaging touchpoints for guests of all ages.",
    items: [
      { title: "Interactive Lobby Floors", desc: "Ambient projections, such as koi ponds or autumn leaves, that react naturally as guests walk to the reception desk." },
      { title: "Motion-Reactive Dining Tables", desc: "Projected visuals on dining tables that interact with plates and glassware to create a multi-sensory culinary journey." },
      { title: "Banquet Projection Mapping", desc: "Transform plain ballroom walls into immersive 360-degree environments for weddings and corporate galas." },
      { title: "Digital Concierge Walls", desc: "Touchless interactive displays where guests can explore local attractions, spa menus, and resort maps." },
      { title: "Kids Club Interactive Zones", desc: "Dedicated projection play areas that keep children active and entertained safely." },
      { title: "Generative Art Installations", desc: "Digital art pieces in the atrium that evolve based on the weather, time of day, or crowd density." }
    ],
    bottomStatement: "Enhance your property's prestige with technology that feels like magic, not machinery."
  },
  experiences: {
    title: "Featured Hospitality Experiences",
    intro: "Explore how premier resorts and dining destinations are using interactive projection to captivate their guests.",
    items: [
      { title: "The Virtual Koi Pond Entrance", desc: "A massive lobby floor projection of a realistic pond where digital fish swim away from guests' footsteps.", tags: ["Interactive Floor", "Ambient Tech"], img: "/images/hospitality_koi_pond.jpg", href: "/contact" },
      { title: "Immersive Fine Dining", desc: "A 12-course culinary experience where the table projections change to match the theme of every dish.", tags: ["Table Projection", "Object Tracking"], img: "/images/dining_projection_table.jpg", href: "/projects/multisensory-dining-experience" },
      { title: "The 360° Wedding Ballroom", desc: "A banquet hall that can transform from a virtual forest to a starry night sky instantly via projection mapping.", tags: ["360 Projection", "Event Tech"], img: "/images/cathedral_projection_mapping.jpg", href: "/contact" },
      { title: "Interactive Hotel Bar", desc: "A bar top that illuminates and creates digital ripples around guests' cocktail glasses.", tags: ["Interactive Surface", "Lidar Sensing"], img: "/images/interactive_cocktail_bar.jpg", href: "/contact" },
      { title: "Digital Waterfall Atrium", desc: "A multi-story indoor waterfall created entirely with projection mapping that responds to lobby noise levels.", tags: ["Large Scale Projection", "Audio Reactive"], img: "/images/architectural_light_beam.jpg", href: "/contact" },
      { title: "Resort Kids Play Cave", desc: "An interactive projection room where younger guests can play motion games while parents relax nearby.", tags: ["Motion Games", "Family Engagement"], img: "/images/education_interactive_floor.jpg", href: "/contact" }
    ]
  },
  benefits: {
    title: "Hospitality Metrics & Outcomes",
    intro: "Interactive installations in hospitality drive direct revenue through event bookings, F&B upsells, and massive organic marketing.",
    items: [
      { title: "Viral Social Sharing", desc: "Interactive lobbies become the most photographed spot in the hotel, generating millions of organic social impressions." },
      { title: "Premium Event Bookings", desc: "Venues with built-in 360° projection mapping command significant premiums for weddings and corporate events." },
      { title: "Increased F&B Spend", desc: "Interactive dining and bar experiences keep guests on-property rather than seeking entertainment elsewhere." },
      { title: "Operational Flexibility", desc: "Change the mood of the lobby from an energetic morning check-in to a sultry evening lounge with one button." },
      { title: "Brand Differentiation", desc: "Stand out in a crowded luxury market by offering experiences that guests literally cannot find anywhere else." },
      { title: "Zero Physical Clutter", desc: "Digital decorations require zero storage space, zero setup time, and zero physical waste." }
    ],
    bottomStatement: "Turn your property into a destination that guests talk about long after they check out."
  },
  technology: {
    title: "Discreet Integration Technology",
    intro: "In luxury hospitality, the technology must be invisible. We specialize in concealing hardware within high-end architectural finishes.",
    items: [
      { title: "Concealed Projector Lifts", desc: "Motorized lifts that drop projectors from the ceiling only when in use, preserving clean ceiling lines." },
      { title: "Whisper-Quiet Lasers", desc: "Advanced laser projectors with specialized cooling systems that operate silently in quiet lobbies and restaurants." },
      { title: "Ambient Light Rejection", desc: "High-contrast projection techniques that perform flawlessly even in sunlit hotel atriums." },
      { title: "Automated Day/Night Scheduling", desc: "Software that automatically transitions content based on the astronomical clock and hotel schedule." },
      { title: "Crestron/Control4 Integration", desc: "Seamless API integration with the hotel's existing AV and lighting control systems." },
      { title: "Remote Managed Services", desc: "Proactive 24/7 system monitoring to ensure flawless operation without burdening the hotel IT staff." }
    ],
    bottomStatement: "Flawless technical execution that never breaks the illusion of luxury."
  },
  faqs: {
    title: "Hospitality Installation FAQs",
    intro: "Answers to common questions from hotel GMs, AV directors, and interior designers.",
    items: [
      { q: "Can the projectors be hidden from guest view?", a: "Yes. We work closely with interior designers and architects to conceal projectors inside ceiling soffits, custom enclosures, or motorized drop-down lifts." },
      { q: "Is the interactive floor slippery?", a: "No. The interactive floor uses your existing flooring material (marble, carpet, wood). We simply project light onto it, so it does not alter the slip resistance or texture at all." },
      { q: "How do we control the content for private events?", a: "We provide an easy-to-use iPad interface. Event staff can instantly switch the ballroom projection from a standard ambient theme to custom corporate branding or wedding visuals." },
      { q: "Does the system require a dedicated AV technician to run?", a: "Not at all. Our systems are fully automated. They turn on in the morning, switch themes throughout the day, and power down at night without any human intervention." },
      { q: "Can you project onto dark surfaces like dark marble or wood?", a: "Yes, though it requires specialized content design. We often use high-contrast, bright generative art (like glowing water or neon accents) that pops beautifully against dark, polished surfaces." },
      { q: "How fast can you develop custom content for a VIP guest?", a: "Our CMS includes a templating engine that allows hotel staff to instantly generate personalized welcome messages or logos on the lobby floor or walls in seconds." }
    ]
  },
  caseStudies: [
    {
      client: "The Grand Palm Resort",
      title: "Virtual Koi Pond & Living Arrival Floor",
      headline: "Footstep-Responsive Water Ripples Welcoming Global Travelers",
      tag: "INTERACTIVE LOBBY FLOOR",
      metric: "Substantial",
      metricLabel: "Lobby Dwell & Engagement",
      secondaryMetric: "Top-Tier",
      secondaryMetricLabel: "Guest Delight Score",
      desc: "A motion-responsive arrival concourse where footsteps create realistic water ripples, parting bioluminescent fish and floating leaves across polished stone flooring.",
      quote: "Arriving guests pause in awe the moment they enter the lobby — it became the signature social photo spot of our resort.",
      img: "/images/hospitality_koi_pond.jpg",
      slug: "grand-hotel-living-floor"
    },
    {
      client: "Azure Bay Luxury Resort",
      title: "Ambient Atrium Interactive Canopy",
      headline: "Generative Natural Light & Acoustic-Reactive Spatial Architecture",
      tag: "ARCHITECTURAL PROJECTION",
      metric: "Extended",
      metricLabel: "Lounge Dwell Time",
      secondaryMetric: "Commercial",
      secondaryMetricLabel: "Operational Reliability",
      desc: "Multi-story generative architectural projection mapping evolving with daylight cycles, ambient acoustics, and guest movement in the central atrium.",
      quote: "The dynamic light transforms the mood from sunlit tranquility during brunch to intimate luxury cocktails by night.",
      img: "/images/industry_hospitality_hero.jpg",
      slug: "ambient-atrium-interactive-canopy"
    },
    {
      client: "L'Ombre Michelin Dining",
      title: "Multi-Sensory Table Projection Experience",
      headline: "Synchronized Culinary Art & Dynamic Plate Tracking",
      tag: "TABLETOP PROJECTION",
      metric: "High Demand",
      metricLabel: "Tasting Reservation Uptake",
      secondaryMetric: "Zero",
      secondaryMetricLabel: "Hardware on Tables",
      desc: "A 12-course sensory culinary journey where overhead micro-projectors track dish placement and animate story layers around each plate.",
      quote: "It turned dining into performance art. Our reservations booked out six months in advance.",
      img: "/images/dining_projection_table.jpg",
      slug: "multisensory-dining-experience"
    }
  ],
  cta: {
    eyebrow: "HOSPITALITY SPATIAL ARCHITECTURE",
    title: "Transform Your Hospitality Space.",
    subtitle: "Curate unforgettable arrival moments and interactive dining spectacles that guests share across the world.",
    buttonText: "Transform Your Hospitality Space",
    img: "/images/industry_hospitality_hero.jpg"
  }
};
