// Shared Canonical Constants for PROJECTION Web Application

export interface IndustryItem {
  id: string;
  slug: string;
  title: string;
  shortTitle: string;
  desc: string;
  href: string;
  iconName: string;
}

export const CANONICAL_INDUSTRIES: IndustryItem[] = [
  {
    id: "education",
    slug: "education",
    title: "Education & Learning Spaces",
    shortTitle: "Education",
    desc: "Transform traditional classrooms into active, motion-responsive digital environments for STEM and sensory learning.",
    href: "/industries/education",
    iconName: "GraduationCap",
  },
  {
    id: "museums",
    slug: "museums-culture",
    title: "Museums & Cultural Venues",
    shortTitle: "Museums & Culture",
    desc: "Bring historical artifacts and digital archives to life with interactive projection walls and touchless exploration.",
    href: "/industries/museums-culture",
    iconName: "Landmark",
  },
  {
    id: "retail",
    slug: "retail-showrooms",
    title: "Retail & Flagship Showrooms",
    shortTitle: "Retail & Showrooms",
    desc: "Captivate shoppers with interactive storefront displays, digital try-on spaces, and product discovery projection floors.",
    href: "/industries/retail-showrooms",
    iconName: "ShoppingBag",
  },
  {
    id: "healthcare",
    slug: "healthcare",
    title: "Healthcare & Sensory Therapy",
    shortTitle: "Healthcare",
    desc: "Create comforting, movement-tracking sensory environments for pediatric wards and rehabilitation therapy.",
    href: "/industries/healthcare",
    iconName: "HeartPulse",
  },
  {
    id: "entertainment",
    slug: "entertainment",
    title: "Entertainment & Theme Venues",
    shortTitle: "Entertainment",
    desc: "Build exciting attraction zones with multiplayer projection gaming arenas and 360-degree immersive rooms.",
    href: "/industries/entertainment",
    iconName: "Gamepad2",
  },
  {
    id: "corporate",
    slug: "corporate",
    title: "Corporate & Executive Spaces",
    shortTitle: "Corporate Venues",
    desc: "Modernize corporate lobbies, experience centers, and executive briefing rooms with architectural motion walls.",
    href: "/industries/corporate",
    iconName: "Building2",
  },
  {
    id: "hospitality",
    slug: "hospitality",
    title: "Hospitality & Resorts",
    shortTitle: "Hospitality",
    desc: "Give guests memorable experiences with ambient interactive projection displays in hotels, resorts, and lounge venues.",
    href: "/industries/hospitality",
    iconName: "Hotel",
  },
  {
    id: "public-spaces",
    slug: "public-spaces",
    title: "Public Spaces & Transit Venues",
    shortTitle: "Public Spaces",
    desc: "Bring interactive projection to airport concourses, public plazas, civic spaces, and transit hubs.",
    href: "/industries/public-spaces",
    iconName: "Globe2",
  },
];

export const SITE_CONTACT = {
  email: "contact@projection.com",
  phone: "+1 (800) 555-PROJ",
  address: "100 Innovation Way, Tech District, San Francisco, CA 94105",
  hours: "Monday - Friday: 9:00 AM - 6:00 PM PST",
  socials: [
    { name: "LinkedIn", href: "https://linkedin.com/company/projection-spatial", iconName: "Share2" },
    { name: "Vimeo", href: "https://vimeo.com/projectionsystems", iconName: "Video" },
    { name: "Instagram", href: "https://instagram.com/projection.spatial", iconName: "MessageSquare" },
    { name: "X (Twitter)", href: "https://x.com/projection_ai", iconName: "Send" },
    { name: "YouTube", href: "https://youtube.com/@projectionsystems", iconName: "Globe" },
  ],
};
