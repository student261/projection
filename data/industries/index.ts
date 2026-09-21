import { IndustryData } from './types';
import { education } from './education';
import { healthcare } from './healthcare';
import { retail } from './retail';
import { museums } from './museums';
import { entertainment } from './entertainment';
import { hospitality } from './hospitality';
import { corporate } from './corporate';
import { publicSpaces } from './public-spaces';

export interface DeliveryWorkflow {
  title: string;
  intro: string;
  bottomStatement: string;
  stages: {
    num: string;
    timeframe: string;
    title: string;
    desc: string;
    img: string;
  }[];
}

export const industryDeliveryWorkflows: Record<string, DeliveryWorkflow> = {
  education: {
    title: "How We Deliver Every Space",
    intro: "A turnkey, four-week journey from first classroom walkthrough to white-glove installation and ongoing teacher support.",
    bottomStatement: "School installations are completed during weekends or academic breaks — ensuring zero disruption to classroom schedules.",
    stages: [
      {
        num: "01",
        timeframe: "WEEKS 1–2",
        title: "Plan & Scan",
        desc: "We scan your room dimensions, evaluate daylight angles, and customize interactive curriculum software to your grade levels.",
        img: "/images/corporate_lobby_wall.jpg"
      },
      {
        num: "02",
        timeframe: "WEEKS 3–4",
        title: "Build & Install",
        desc: "White-glove laser mounting, sensor calibration, and game testing scheduled during weekends or breaks with zero class disruption.",
        img: "/images/technician_calibrating_projection.jpg"
      },
      {
        num: "03",
        timeframe: "LAUNCH & BEYOND",
        title: "Coach & Support",
        desc: "Hands-on teacher training so educators feel ready in under five minutes, backed by lifetime proactive hardware care.",
        img: "/images/ai_receptionist_concierge.jpg"
      }
    ]
  },
  "retail-showrooms": {
    title: "How We Deliver Every Space",
    intro: "A turnkey, four-week journey from storefront walkthrough and 3D space scanning to white-glove installation, staff training, and ongoing campaign management.",
    bottomStatement: "Retail installations are completed during off-hours or store closing — ensuring zero disruption to store operating hours and customer foot traffic.",
    stages: [
      {
        num: "01",
        timeframe: "WEEKS 1–2",
        title: "Plan & Scan",
        desc: "We map your retail floor plan, evaluate ambient lux from daylight and mall illumination, and calibrate interactive brand content to your seasonal merchandising campaigns.",
        img: "/images/corporate_lobby_wall.jpg"
      },
      {
        num: "02",
        timeframe: "WEEKS 3–4",
        title: "Build & Install",
        desc: "Concealed overhead projector mounting, optical tracking grid calibration, and interactive software commissioning scheduled overnight with zero disruption to shopping hours.",
        img: "/images/technician_calibrating_projection.jpg"
      },
      {
        num: "03",
        timeframe: "LAUNCH & BEYOND",
        title: "Train & Support",
        desc: "Hands-on store staff and retail manager training so teams can trigger new campaigns effortlessly via cloud CMS, backed by 24/7 proactive hardware monitoring.",
        img: "/images/ai_receptionist_concierge.jpg"
      }
    ]
  },
  healthcare: {
    title: "How We Deliver Every Space",
    intro: "A certified, four-week journey from clinical facility review to hygienic overhead installation and healthcare staff onboarding.",
    bottomStatement: "All healthcare installations strictly adhere to clinical sanitation protocols, scheduled during low-census or maintenance hours with zero disruption to patient care.",
    stages: [
      {
        num: "01",
        timeframe: "WEEKS 1–2",
        title: "Clinical Space Audit",
        desc: "We assess waiting corridors, sensory therapy rooms, and pediatric suites, ensuring complete compliance with clinical lighting and infection control standards.",
        img: "/images/corporate_lobby_wall.jpg"
      },
      {
        num: "02",
        timeframe: "WEEKS 3–4",
        title: "Sterile Concealed Mounting",
        desc: "Overhead ceiling rigging and optical calibration with zero floor-level hardware or loose cabling, keeping therapeutic surfaces fully touchless and sanitary.",
        img: "/images/technician_calibrating_projection.jpg"
      },
      {
        num: "03",
        timeframe: "LAUNCH & BEYOND",
        title: "Clinical Staff Handover",
        desc: "Staff orientation for therapists and nurse supervisors to customize calming sensory routines, backed by remote cloud diagnostics.",
        img: "/images/ai_receptionist_concierge.jpg"
      }
    ]
  },
  hospitality: {
    title: "How We Deliver Every Space",
    intro: "A turnkey, four-week journey from architectural lobby survey to white-glove commissioning and concierge operations training.",
    bottomStatement: "Deployments are scheduled during off-peak overnight hours to maintain an uninterrupted, premium five-star guest experience.",
    stages: [
      {
        num: "01",
        timeframe: "WEEKS 1–2",
        title: "Architectural Assessment",
        desc: "We scan high-ceiling atriums, arrival vestibules, and dining zones to calculate multi-surface throw ratios, acoustic integration, and luxury finish preservation.",
        img: "/images/corporate_lobby_wall.jpg"
      },
      {
        num: "02",
        timeframe: "WEEKS 3–4",
        title: "Concealed Rigging & Blending",
        desc: "Discreet installation behind architectural coves and ceiling baffles with seamless multi-projector calibration, preserving elegant interior aesthetics.",
        img: "/images/technician_calibrating_projection.jpg"
      },
      {
        num: "03",
        timeframe: "LAUNCH & BEYOND",
        title: "Guest Experience Handover",
        desc: "Hospitality team training to schedule seasonal ambiances and VIP arrival visuals, backed by 24/7 proactive hardware telemetry.",
        img: "/images/ai_receptionist_concierge.jpg"
      }
    ]
  },
  "museums-culture": {
    title: "How We Deliver Every Space",
    intro: "A curatorially aligned, four-week journey from historic artifact conservation review to non-invasive optical commissioning.",
    bottomStatement: "Certified non-invasive rigging systems protect historic architecture and sensitive exhibits — preserving archival standards without drilling into sensitive stonework.",
    stages: [
      {
        num: "01",
        timeframe: "WEEKS 1–2",
        title: "Volumetric Laser Scanning",
        desc: "We capture sub-millimeter 3D scans of gallery surfaces, evaluating surface reflectance and strict conservation lux limits before physical deployment.",
        img: "/images/corporate_lobby_wall.jpg"
      },
      {
        num: "02",
        timeframe: "WEEKS 3–4",
        title: "Non-Destructive Rigging",
        desc: "Clamp-based, museum-grade mounts and multi-projector edge blending calibrated during closure days with zero impact on exhibition schedules.",
        img: "/images/technician_calibrating_projection.jpg"
      },
      {
        num: "03",
        timeframe: "LAUNCH & BEYOND",
        title: "Docent & Curatorial Handover",
        desc: "Docent and operations team walkthroughs to manage interactive historical narratives, accompanied by automated system monitoring.",
        img: "/images/ai_receptionist_concierge.jpg"
      }
    ]
  },
  entertainment: {
    title: "How We Deliver Every Space",
    intro: "A turnkey, four-week journey from venue capacity modeling to high-throughput commissioning and operator training.",
    bottomStatement: "Designed for high-traffic commercial operations with rapid overnight installation — ensuring venues open on schedule without box-office downtime.",
    stages: [
      {
        num: "01",
        timeframe: "WEEKS 1–2",
        title: "Flow Simulation & Tech Spec",
        desc: "We model visitor throughput, kinetic tracking bounds, and ambient sound levels to architect immersive multi-user arenas.",
        img: "/images/corporate_lobby_wall.jpg"
      },
      {
        num: "02",
        timeframe: "WEEKS 3–4",
        title: "High-Durability Integration",
        desc: "Industrial-grade overhead projector rigging, wide-angle tracking sensor matrices, and real-time game engine calibration for continuous play.",
        img: "/images/technician_calibrating_projection.jpg"
      },
      {
        num: "03",
        timeframe: "LAUNCH & BEYOND",
        title: "Operator Handover & Live Ops",
        desc: "Operations training for venue staff to switch game modes, manage leaderboards, and update sponsor overlays, backed by round-the-clock telemetry.",
        img: "/images/ai_receptionist_concierge.jpg"
      }
    ]
  },
  corporate: {
    title: "How We Deliver Every Space",
    intro: "A structured, four-week journey from architectural lobby audit to enterprise IT integration and briefing center handover.",
    bottomStatement: "Installations are coordinated over weekends and scheduled maintenance windows with strict adherence to corporate IT security standards.",
    stages: [
      {
        num: "01",
        timeframe: "WEEKS 1–2",
        title: "Spatial Audit & Security Scoping",
        desc: "We review executive briefing centers and lobby dimensions, coordinate with corporate IT on local network privacy, and map generative visual concepts.",
        img: "/images/corporate_lobby_wall.jpg"
      },
      {
        num: "02",
        timeframe: "WEEKS 3–4",
        title: "Precision Commercial Installation",
        desc: "Concealed optical mounting, real-time sensor array calibration, and enterprise data API integration completed outside office hours.",
        img: "/images/technician_calibrating_projection.jpg"
      },
      {
        num: "03",
        timeframe: "LAUNCH & BEYOND",
        title: "Facilities & IT Onboarding",
        desc: "IT admin and executive briefing team training to manage dynamic welcoming visuals and conference media via secure internal controls.",
        img: "/images/ai_receptionist_concierge.jpg"
      }
    ]
  },
  "public-spaces": {
    title: "How We Deliver Every Space",
    intro: "A turnkey, four-week civic journey from pedestrian flow analysis to vandal-proof overhead mounting and transit operations handover.",
    bottomStatement: "Executed within nocturnal municipal engineering windows — maintaining completely unobstructed pedestrian flow through busy public concourses.",
    stages: [
      {
        num: "01",
        timeframe: "WEEKS 1–2",
        title: "Pedestrian Transit Mapping",
        desc: "We analyze concourse foot-traffic volume, transit lighting fluctuations, and structural ceiling points to plan continuous overhead coverage.",
        img: "/images/corporate_lobby_wall.jpg"
      },
      {
        num: "02",
        timeframe: "WEEKS 3–4",
        title: "Vandal-Resistant Overhead Rigging",
        desc: "Tamper-proof overhead mounts and ruggedized laser projectors calibrated during transit closure windows without blocking pedestrian pathways.",
        img: "/images/technician_calibrating_projection.jpg"
      },
      {
        num: "03",
        timeframe: "LAUNCH & BEYOND",
        title: "Civic Operations & Care",
        desc: "Handover to facility directors with automated 24/7 cloud health telemetry, bulb-life tracking, and scheduled seasonal art updates.",
        img: "/images/ai_receptionist_concierge.jpg"
      }
    ]
  }
};

export function getIndustryDelivery(slug: string): DeliveryWorkflow {
  return industryDeliveryWorkflows[slug] || industryDeliveryWorkflows["retail-showrooms"] || industryDeliveryWorkflows.education;
}

export const sharedDelivery = industryDeliveryWorkflows.education;

export const industriesData: Record<string, IndustryData> = {
  education,
  healthcare,
  'retail-showrooms': retail,
  'museums-culture': museums,
  entertainment,
  hospitality,
  corporate,
  'public-spaces': publicSpaces
};

export function getIndustryCaseStudies(industry: IndustryData) {
  if (industry.caseStudies && industry.caseStudies.length > 0) {
    return industry.caseStudies;
  }
  return [
    {
      client: "Flagship Installation",
      title: `${industry.hero.title} Showcase`,
      headline: "Transforming Physical Environments with Interactive Motion",
      tag: "SPATIAL COMPUTING",
      metric: "High",
      metricLabel: "Higher Engagement",
      secondaryMetric: "Continuous",
      secondaryMetricLabel: "Operational Uptime",
      desc: "An enterprise-grade deployment combining optical motion tracking and high-lumen projection to create an intuitive, multi-user physical environment.",
      quote: "The interactive installations completely transformed how visitors move through and interact with our space.",
      img: industry.hero.img,
      slug: "flagship-store-activation"
    },
    {
      client: "Sensory Interactive Surface",
      title: "Zero-Latency Responsive Architecture",
      headline: "Intuitive Environments That Respond in Real Time",
      tag: "IMMERSIVE SURFACE",
      metric: "Continuous",
      metricLabel: "Uptime Reliability",
      secondaryMetric: "15 ms",
      secondaryMetricLabel: "Response Latency",
      desc: "Integrating zero-latency computer vision and ultra-short throw laser projection to build an environment that responds naturally to human behavior.",
      quote: "Guests immediately understood the interface without a single instruction manual or tutorial.",
      img: "/images/interactive_floor_motion.jpg",
      slug: "interactive-museum-exhibit"
    },
    {
      client: "Digital Motion Canvas",
      title: "Large-Scale Multi-User Wall",
      headline: "Collaborative Interactive Experiences at Scale",
      tag: "COLLABORATIVE DIGITAL",
      metric: "12+",
      metricLabel: "Simultaneous Touch Points",
      secondaryMetric: "400+",
      secondaryMetricLabel: "Square Feet Covered",
      desc: "A bespoke spatial computing installation extending across high-traffic areas to deliver real-time interactive experiences without wearable hardware.",
      quote: "It became the defining centerpiece of the facility from opening day onward.",
      img: "/images/biosphere_ocean_gallery.jpg",
      slug: "quantum-prism-passage"
    }
  ];
}

export * from './types';

