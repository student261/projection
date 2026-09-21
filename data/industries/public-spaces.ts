import { Compass } from 'lucide-react';
import { IndustryData } from './types';

export const publicSpaces: IndustryData = {
  slug: "public-spaces",
  icon: Compass,
  hero: {
    eyebrow: "PUBLIC SPACES, AIRPORTS & CIVIC HUBS",
    title: "Engage Tens of Thousands in High-Traffic Civic Environments",
    subtitle: "Turn international airports, transit concourses, and civic plazas into interactive visual landmarks with zero physical footprint.",
    img: "/images/industry_public_spaces_hero.jpg",
  },
  challenges: {
    title: "The Challenge in Public Venues",
    intro: "Transit hubs, airports, and public plazas process tens of thousands of people daily. These massive spaces often feel cold, confusing, and purely utilitarian, leading to traveler stress and missed revenue opportunities.",
    items: [
      { title: "Traveler Stress", desc: "Airports and transit hubs are inherently stressful environments where passengers seek moments of calm or distraction." },
      { title: "Vast, Empty Architecture", desc: "Large concourses and blank walls represent wasted opportunities for civic engagement and advertising." },
      { title: "Confusing Wayfinding", desc: "Navigating massive public transit systems relies on static signage that cannot adapt to real-time changes or crowds." },
      { title: "Vandalism and Wear", desc: "Any physical installation in a public space is subject to heavy wear, tear, and potential vandalism." },
      { title: "Crowd Flow Bottlenecks", desc: "Traditional attractions can cause crowds to gather and block critical pedestrian traffic lanes." },
      { title: "Monetization Limits", desc: "Traditional billboard advertising is becoming less effective as travelers focus on their mobile devices." }
    ],
    transition: "Large-scale interactive projection transforms these utilitarian transit spaces into engaging, dynamic civic landmarks."
  },
  vision: {
    title: "Our Vision for Public Spaces",
    intro: "We believe public infrastructure should inspire civic pride and improve the traveler experience. By integrating massive interactive canvases into the architecture, we turn transit from a chore into a journey.",
    statement: "Every airport and public plaza should feature dynamic digital art that connects, guides, and entertains the community.",
    pillars: [
      { title: "🌟 Reduce Travel Stress", desc: "Introduce calming, ambient interactive art into high-stress environments like TSA checkpoints or terminal gates." },
      { title: "🤝 Seamless Wayfinding", desc: "Project dynamic directional arrows and flight info directly onto the floor, guiding passengers naturally." },
      { title: "🚀 Zero Physical Footprint", desc: "Because the art is projected light, it occupies zero floor space and cannot be vandalized." },
      { title: "🌍 Unmissable Advertising", desc: "Offer brands the ability to sponsor massive, interactive floor and wall activations that travelers actually want to engage with." }
    ],
    transition: "We deliver this vision through rugged, commercial-grade technology designed specifically for massive public venues.",
    quote: "\"Public spaces shouldn't just move people; they should move people emotionally.\"",
    img: "/images/horizon_glass_floor.jpg"
  },
  solutions: {
    title: "Public Venue Solutions",
    intro: "We design massive, durable interactive installations capable of engaging thousands of people simultaneously without disrupting crowd flow.",
    items: [
      { title: "Airport Concourse Interactive Floors", desc: "Massive projection zones spanning hundreds of feet where children can play and adults can engage with ambient art while walking to their gates." },
      { title: "Dynamic Wayfinding Projections", desc: "Floor and wall projections that dynamically change to point travelers toward their specific gates or exits based on real-time data." },
      { title: "Civic Projection Mapping", desc: "Transform the exterior of public buildings or monuments into storytelling canvases during city festivals or holidays." },
      { title: "Interactive Transit Tunnels", desc: "Turn long, boring underground subway transfer tunnels into immersive digital aquariums or interactive light shows." },
      { title: "Digital Plaza Waterfalls", desc: "Large-scale interactive wall projections in shopping mall atriums that simulate nature and respond to crowd density." },
      { title: "Sponsored Brand Zones", desc: "Interactive floor zones that can be leased to advertisers for highly engaging, gamified brand campaigns." }
    ],
    bottomStatement: "Solutions designed to handle the scale, security, and durability requirements of public infrastructure."
  },
  experiences: {
    title: "Featured Civic Installations",
    intro: "Explore how the world's most innovative airports and smart cities are using interactive spatial design to improve public life.",
    items: [
      { title: "The Interactive Airport Terminal", desc: "A 200-foot interactive floor projection that acts as a digital playground for children waiting for flights.", tags: ["Interactive Floor", "Airport Tech"], img: "/images/horizon_glass_floor.jpg", href: "/solutions/interactive-floor" },
      { title: "Smart City Wayfinding", desc: "A transit hub floor that projects personalized, color-coded arrows to guide passengers to their connecting trains.", tags: ["Dynamic Wayfinding", "API Integration"], img: "/images/projection_cityscape_model.jpg", href: "/solutions/interactive-spaces" },
      { title: "The Digital Subway Tunnel", desc: "An immersive projection mapped pedestrian tunnel that changes themes based on the season or local events.", tags: ["Projection Mapping", "Public Art"], img: "/images/hospital_interactive_corridor.jpg", href: "/projects/quantum-prism-passage" },
      { title: "Civic Plaza Monument Mapping", desc: "Permanent architectural projection mapping on a city hall facade, used for nightly civic storytelling.", tags: ["Outdoor Projection", "Event Tech"], img: "/images/cathedral_projection_mapping.jpg", href: "/solutions/projection-mapping" },
      { title: "Interactive Mall Atrium", desc: "A massive multi-story digital waterfall in a shopping center that parts when visitors walk near the base.", tags: ["Large Scale LED", "Motion Tracking"], img: "/images/hospitality_ambient_atrium.jpg", href: "/solutions/interactive-spaces" },
      { title: "Sponsored Holographic Zone", desc: "A leased public space where brands deploy interactive 3D campaigns to engage passing crowds without physical builds.", tags: ["DOOH Advertising", "Brand Activation"], img: "/images/ai_receptionist_concierge.jpg", href: "/solutions/holographic-display" }
    ]
  },
  benefits: {
    title: "Public Infrastructure ROI",
    intro: "Interactive public installations provide immense civic value while opening up lucrative new channels for Digital Out-Of-Home (DOOH) advertising.",
    items: [
      { title: "New Advertising Revenue", desc: "Lease interactive zones to premium brands, offering them higher engagement rates than static billboards." },
      { title: "Improved Passenger Experience (PAX)", desc: "Airports with interactive entertainment zones consistently score higher in global passenger satisfaction surveys." },
      { title: "Reduced Congestion", desc: "Dynamic wayfinding moves people through transit hubs more efficiently, reducing bottlenecks during peak hours." },
      { title: "Zero Vandalism Risk", desc: "Because the 'installation' is just projected light from the ceiling, there is nothing for the public to break, scratch, or steal." },
      { title: "Civic Pride & Press", desc: "Innovative public art installations generate massive global press coverage and elevate the city's modern profile." },
      { title: "Flexible Space Usage", desc: "Switch a public plaza from a relaxing ambient art piece to an interactive holiday festival instantly via software." }
    ],
    bottomStatement: "Enhance the public experience while generating new revenue streams for venue operators."
  },
  technology: {
    title: "Infrastructure-Grade Technology",
    intro: "Public space technology must be indestructible, weather-resistant, and capable of running 24/7/365 without fail.",
    items: [
      { title: "Long-Range Optical Sensors", desc: "Lidar and depth sensors capable of tracking hundreds of people simultaneously from high airport ceilings." },
      { title: "High-Lumen Commercial Lasers", desc: "Massive 20,000+ lumen projectors designed to cut through the bright ambient light of glass-roofed transit hubs." },
      { title: "Environmental Enclosures", desc: "Weatherproof, climate-controlled housings for outdoor projection mapping in extreme heat or freezing conditions." },
      { title: "Fail-Safe Redundancy", desc: "Dual-server architectures ensuring that if one component fails, the public display continues running seamlessly." },
      { title: "Remote DOOH CMS", desc: "A centralized cloud platform allowing advertising agencies to buy and push interactive campaigns remotely." },
      { title: "Data Privacy Compliance", desc: "Edge-computed tracking that analyzes crowd flow and interactions entirely anonymously, ensuring GDPR and local privacy compliance." }
    ],
    bottomStatement: "Engineered for absolute reliability in the world's most demanding environments."
  },
  faqs: {
    title: "Public Space Installation FAQs",
    intro: "Answers to common questions from city planners, airport authorities, and DOOH advertisers.",
    items: [
      { q: "Is the tracking camera system a privacy or security risk?", a: "No. Our sensors do not capture or record video. They only generate anonymous depth data (point clouds) to track movement, making them fully compliant with strict public privacy laws." },
      { q: "Can the projectors withstand airport vibrations or subway trains?", a: "Yes. We use specialized vibration-dampening rigging systems and automated camera-based recalibration software to ensure the projection remains perfectly aligned." },
      { q: "How do you install this in an airport that operates 24/7?", a: "We have extensive experience with phased overnight installations in high-security, 24/7 environments, ensuring zero disruption to daily passenger operations." },
      { q: "Are the outdoor projectors weather-proof?", a: "The projectors themselves are housed in IP65-rated environmental enclosures with active heating and cooling, allowing them to operate year-round in any climate." },
      { q: "Will an interactive floor cause crowds to block the terminal?", a: "We design the content specifically for 'flow-through' engagement. The interactions are ambient and respond as people walk, encouraging them to keep moving rather than stopping." },
      { q: "Can advertisers measure the ROI of an interactive zone?", a: "Yes. The system provides detailed analytics on how many people passed by, how many stepped onto the active zone, and the average dwell time, providing clear DOOH metrics." }
    ]
  },
  caseStudies: [
    {
      client: "Metropolitan Skyline Observatory",
      title: "Skyline Kinetic Glass Floor",
      headline: "High-Altitude Motion Interactive Floor in Architectural Observatory Tower",
      tag: "HIGH-ALTITUDE CIVIC INSTALLATION",
      metric: "Panoramic",
      metricLabel: "Observation Deck Elevation",
      secondaryMetric: "Substantial",
      secondaryMetricLabel: "Increase in Guest Stay",
      desc: "An interactive observation floor that responds to footsteps with simulated structural glass fractures, dynamic cloud patterns, and regional cartographic projections with zero-latency infrared sensors.",
      quote: "Visitors stepping onto the observation floor trigger dramatic real-time visual ripples — creating unforgettable viral social media impressions.",
      img: "/images/horizon_glass_floor.jpg",
      slug: "skyline-observation-floor"
    },
    {
      client: "Civic Metro Authority",
      title: "Quantum Prism Passage",
      headline: "LED & Projection Sensory Concourse Tunnel",
      tag: "TRANSIT SENSORY TUNNEL",
      metric: "High-Volume",
      metricLabel: "Annual Pedestrians Engaged",
      secondaryMetric: "Certified",
      secondaryMetricLabel: "Vandal-Proof Integration",
      desc: "A walk-through sensory concourse tunnel combining optical projection mapping with synchronized mirror geometry to turn daily pedestrian transit into a calming, interactive journey.",
      quote: "The sensory tunnel turned a congested underground pedestrian passage into the highlight of the city's commute.",
      img: "/images/hospital_interactive_corridor.jpg",
      slug: "quantum-prism-passage"
    },
    {
      client: "Central European Transit Terminal",
      title: "Concourse Motion Interactive Floor",
      headline: "Contactless Motion-Reactive Flow Zones for Family Travelers",
      tag: "FLOW-THROUGH INTERACTION",
      metric: "200+ Ft",
      metricLabel: "Continuous Projection Surface",
      secondaryMetric: "Zero",
      secondaryMetricLabel: "Obstruction to Crowd Flow",
      desc: "Ceiling-mounted high-lumen projection creating responsive water ripples and digital wildlife along terminal pathways, reducing travel stress without creating bottlenecks.",
      quote: "Families waiting for connecting flights have a delightful, safe play area that takes up zero physical floor space.",
      img: "/images/industry_public_spaces_hero.jpg",
      slug: "concourse-interactive-floor"
    }
  ],
  cta: {
    eyebrow: "CIVIC INFRASTRUCTURE ACTIVATION",
    title: "Activate Civic Public Spaces.",
    subtitle: "Transform high-traffic transit hubs, airports, and public plazas into unforgettable kinetic landmarks.",
    buttonText: "Activate Civic Public Spaces",
    img: "/images/industry_public_spaces_hero.jpg"
  }
};
