// Solution detail page data — content sourced from the client's homepage.txt
// 11-section layout spec (Sections 01–11), authored fully for "interactive-floor"
// and adapted per solution for the sibling entries.

export type IconName =
  | "activity"
  | "bot"
  | "briefcase"
  | "building2"
  | "circleDot"
  | "clock"
  | "cloud"
  | "cpu"
  | "eye"
  | "film"
  | "footprints"
  | "gamepad2"
  | "graduationCap"
  | "grid3x3"
  | "heartPulse"
  | "landmark"
  | "layers"
  | "lightbulb"
  | "maximize"
  | "messageCircle"
  | "mic"
  | "monitor"
  | "monitorPlay"
  | "palette"
  | "personStanding"
  | "projector"
  | "scan"
  | "scanEye"
  | "server"
  | "shoppingBag"
  | "sliders"
  | "sparkle"
  | "sparkles"
  | "users"
  | "volume2"
  | "wallpaper"
  | "wand2"
  | "workflow"
  | "zap";

export interface SolutionHighlight {
  title: string;
  desc: string;
  icon: IconName;
}

export interface SolutionExperienceCard {
  category: string;
  title: string;
  desc: string;
  icon: IconName;
}

export interface SolutionFeaturedCard {
  category: string;
  title: string;
  desc: string;
  cta: string;
}

export interface SolutionFeature {
  title: string;
  desc: string;
  icon: IconName;
}

export interface SolutionStep {
  name: string;
  desc: string;
  icon: IconName;
}

export interface SolutionIndustry {
  title: string;
  desc: string;
  icon: IconName;
}

export interface SolutionTech {
  title: string;
  desc: string;
  icon: IconName;
}

export interface SolutionBenefit {
  title: string;
  desc: string;
}

export interface SolutionProject {
  industry: string;
  title: string;
  location: string;
  desc: string;
  techs: string[];
}

export interface SolutionFaq {
  q: string;
  a: string;
}

export interface SolutionData {
  slug: string;
  name: string;
  // Section 01 — Hero
  heroLabel: string;
  subtitle: string;
  heroDescription: string;
  // Section 02 — What Is This Solution?
  whatIsHeading: string;
  whatIsDescription: string;
  highlights: SolutionHighlight[];
  // Section 03 — Experience Showcase
  experienceIntro: string;
  featuredExperience: SolutionFeaturedCard;
  experienceCards: SolutionExperienceCard[];
  experienceStatement: string;
  // Section 04 — Key Features
  featuresIntro: string;
  features: SolutionFeature[];
  // Section 05 — How It Works
  howIntro: string;
  steps: SolutionStep[];
  journey: string[];
  // Section 06 — Industries We Serve
  industriesIntro: string;
  featuredIndustry: SolutionFeaturedCard;
  industries: SolutionIndustry[];
  extraIndustries: { title: string; desc: string }[];
  // Section 07 — Technology Behind the Solution
  technologyIntro: string;
  technology: SolutionTech[];
  // Section 08 — Benefits & Outcomes
  benefitsIntro: string;
  featuredBenefit: { title: string; desc: string };
  benefits: SolutionBenefit[];
  // Section 09 — Featured Projects
  projectsIntro: string;
  projects: SolutionProject[];
  // Section 10 — FAQs
  faqIntro: string;
  faqs: SolutionFaq[];
  // Section 11 — Final CTA
  ctaHeading: string;
  ctaDescription: string;
  // Metadata
  metaTitle: string;
  metaDescription: string;
}

// ---------------------------------------------------------------------------
// Shared defaults (verbatim from homepage.txt where given)
// ---------------------------------------------------------------------------

const defaultHighlights: SolutionHighlight[] = [
  {
    title: "Motion Tracking",
    desc: "Advanced sensors detect every movement instantly.",
    icon: "activity",
  },
  {
    title: "Real-Time Interaction",
    desc: "Visuals respond naturally to every step.",
    icon: "clock",
  },
  {
    title: "Multi-User Experience",
    desc: "Supports multiple participants simultaneously.",
    icon: "users",
  },
  {
    title: "Fully Customizable",
    desc: "Experiences can be designed for education, retail, museums, healthcare, and more.",
    icon: "sliders",
  },
];

const defaultFeatures: SolutionFeature[] = [
  {
    title: "Motion Tracking",
    desc: "Advanced motion sensors accurately detect every movement, creating smooth, responsive interactions without requiring controllers or wearable devices.",
    icon: "activity",
  },
  {
    title: "Multi-User Interaction",
    desc: "Supports multiple users simultaneously, making it ideal for collaborative learning, public installations, retail experiences, and entertainment environments.",
    icon: "users",
  },
  {
    title: "Ultra-HD Visual Experience",
    desc: "Deliver vibrant visuals with high-resolution projection, creating immersive environments that capture attention and enhance engagement.",
    icon: "layers",
  },
  {
    title: "Fully Customizable Content",
    desc: "Every experience can be customized to match your objectives, branding, educational content, campaigns, or visitor journey.",
    icon: "palette",
  },
  {
    title: "Instant Real-Time Response",
    desc: "Every step, gesture, or movement is processed instantly, ensuring a natural and seamless interactive experience.",
    icon: "clock",
  },
  {
    title: "Easy Installation & Scalability",
    desc: "Designed to integrate into existing environments with minimal disruption while allowing future expansion as your needs grow.",
    icon: "maximize",
  },
];

const defaultSteps: SolutionStep[] = [
  {
    name: "Movement",
    desc: "The experience begins the moment someone walks into the interactive area.",
    icon: "footprints",
  },
  {
    name: "Motion Detection",
    desc: "Advanced infrared sensors and cameras instantly detect every movement with high precision.",
    icon: "scanEye",
  },
  {
    name: "Real-Time Processing",
    desc: "The software processes movement data in real time and determines the appropriate visual response.",
    icon: "cpu",
  },
  {
    name: "Projection Engine",
    desc: "High-performance projectors display immersive visuals directly onto the floor, perfectly synchronized with movement.",
    icon: "projector",
  },
  {
    name: "Interactive Experience",
    desc: "Every movement creates a responsive digital experience that encourages exploration, learning, and engagement.",
    icon: "sparkles",
  },
];

const defaultJourney = [
  "Person Walks",
  "System Detects Motion",
  "Software Processes Data",
  "Projector Displays Content",
  "User Interacts",
];

const defaultFeaturedIndustry: SolutionFeaturedCard = {
  category: "Featured Industry",
  title: "Education",
  desc: "Create engaging learning environments where students actively participate through movement, collaboration, and immersive educational content.",
  cta: "Explore Education",
};

const defaultIndustries: SolutionIndustry[] = [
  {
    title: "Healthcare",
    desc: "Transform waiting areas into calming and engaging spaces that improve patient experiences.",
    icon: "heartPulse",
  },
  {
    title: "Museums",
    desc: "Bring history, science, and culture to life through immersive interactive installations.",
    icon: "landmark",
  },
  {
    title: "Retail",
    desc: "Increase customer engagement and create memorable shopping experiences.",
    icon: "shoppingBag",
  },
  {
    title: "Entertainment",
    desc: "Deliver exciting attractions that encourage movement, participation, and repeat visits.",
    icon: "film",
  },
];

const defaultExtraIndustries = [
  {
    title: "Corporate",
    desc: "Interactive lobbies, innovation centers, and experience zones.",
  },
  {
    title: "Events & Exhibitions",
    desc: "Immersive brand activations and interactive exhibition spaces.",
  },
  {
    title: "Public Spaces",
    desc: "Airports, malls, community centers, and smart public installations.",
  },
];

const defaultFeaturedBenefit = {
  title: "Create Experiences People Remember",
  desc: "Every interaction is designed to capture attention, encourage participation, and create lasting memories. From education and museums to retail and entertainment, the experience becomes the highlight of every space.",
};

const defaultBenefits: SolutionBenefit[] = [
  {
    title: "Higher Engagement",
    desc: "Visitors naturally interact with immersive environments, increasing participation and creating more memorable experiences.",
  },
  {
    title: "Collaborative Learning",
    desc: "Encourages teamwork, communication, and active participation through movement-based experiences.",
  },
  {
    title: "Fully Customizable",
    desc: "Content, themes, branding, and interactions can be tailored to suit your audience and objectives.",
  },
  {
    title: "Easy to Integrate",
    desc: "Designed to fit seamlessly into existing environments with minimal disruption during installation.",
  },
  {
    title: "Scalable Solution",
    desc: "From a single classroom to a large entertainment venue, the solution grows with your requirements.",
  },
  {
    title: "Future Ready",
    desc: "Built with modern technology that supports updates, new content, and evolving interactive experiences.",
  },
];

const experienceStatement =
  "Every interaction is designed to create memorable experiences that inspire learning, exploration, and meaningful engagement across every environment.";

const featuresIntro =
  "Every interactive environment is powered by advanced technology working seamlessly behind the scenes. From real-time motion tracking to fully customizable content, our solutions are designed to deliver engaging, reliable, and scalable experiences across every industry.";

const benefitsIntro =
  "Every interactive installation is designed with a purpose—to create meaningful engagement, encourage participation, and transform ordinary environments into memorable experiences. Whether you're enhancing education, improving customer engagement, or creating immersive attractions, our solutions deliver measurable value across every industry.";

const ctaHeading = "Ready to Transform Your Space?";

// Shared FAQ answers (verbatim from homepage.txt Section 10)
function buildFaqs(first: SolutionFaq, industryAnswer: string, overrides: Partial<Record<number, SolutionFaq>> = {}): SolutionFaq[] {
  const base: SolutionFaq[] = [
    first,
    {
      q: "Which industries can use this solution?",
      a: industryAnswer,
    },
    {
      q: "Can the content be customized?",
      a: "Yes. Every experience can be fully customized to match your branding, educational objectives, campaigns, games, themes, or visitor journey.",
    },
    {
      q: "How many people can interact at the same time?",
      a: "The system supports multiple users simultaneously, making it ideal for collaborative activities and high-traffic environments.",
    },
    {
      q: "Is the system suitable for permanent installations?",
      a: "Yes. Our solutions are designed for both temporary events and permanent installations, depending on your project requirements.",
    },
    {
      q: "Do you provide installation and support?",
      a: "Yes. We provide consultation, installation, testing, training, and ongoing technical support to ensure the solution operates smoothly.",
    },
    {
      q: "Can the solution integrate with existing spaces?",
      a: "Absolutely. Our solutions are designed to integrate seamlessly into existing environments with minimal disruption.",
    },
    {
      q: "How do I get started?",
      a: "Simply contact our team for a consultation. We'll understand your goals, recommend the right solution, and guide you through the complete project process.",
    },
  ];
  for (const [idx, faq] of Object.entries(overrides)) {
    const i = Number(idx);
    if (faq) base[i] = faq;
  }
  return base;
}
