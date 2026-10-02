import { ShoppingBag } from 'lucide-react';
import { IndustryData } from './types';

export const retail: IndustryData = {
  slug: "retail",
  icon: ShoppingBag,
  hero: {
    eyebrow: "RETAIL",
    title: "Give Shoppers a Reason to Stop and Stay",
    subtitle: "Turn windows, floors and showrooms into spaces people interact with, not just walk past.",
    img: "/images/industry_retail_hero.jpg",
  },
  challenges: {
    title: "The Challenge in Modern Retail",
    items: [
      { title: "Declining Foot Traffic", desc: "Static windows and displays don't hold attention the way they used to." },
      { title: "Short Dwell Times", desc: "Shoppers move through stores quickly, with limited time spent engaging with any one brand." },
      { title: "E-commerce Competition", desc: "Physical stores struggle to match the convenience and personalization of online shopping." },
      { title: "Static Merchandising", desc: "Traditional displays rarely update or invite any kind of interaction." },
      { title: "Lack of Analytics", desc: "Physical retail often has little visibility into how people actually move through and engage with a space." },
      { title: "Brand Differentiation", desc: "Standing out in a crowded retail environment, mall or high street is harder than ever." }
    ],
  },
  vision: {
    title: "Our Vision for Retail",
    intro: "A store should give people a reason to stop, not just pass through. We build spaces that respond to movement and touch, turning a storefront, floor or showroom into something shoppers want to explore rather than walk past.",
    quote: "A store works best when it gives people something to do, not just something to look at.",
    img: "/images/retail_interactive_showcase.jpg"
  },
  solutions: {
    title: "Interactive Solutions for Retail",
    intro: "All four solutions have verified real-world retail deployments. All four appear on this page.",
    items: [
      { title: "Interactive Spaces", desc: "Turn shop windows, floors and fitting room surfaces into displays that respond to movement and touch." },
      { title: "Immersive Environments", desc: "Projection mapping and large format LED displays for flagship launches, storefronts and product reveals." },
      { title: "AI Experiences", desc: "AI avatars or AI photo experiences at the entrance, counter or fitting room." },
      { title: "Interactive Engagement", desc: "Motion games and brand gamification that give shoppers a reason to stop at the door." }
    ],
  },
  experiences: {
    title: "How Retailers Use These Solutions",
    intro: "This industry connects to two of our use cases:",
    items: [
      {
        title: "Retail Experiences",
        desc: "The core experience of turning a store, window or showroom into a space shoppers stop and explore.",
        tags: ["Retail Experience", "Storefront"],
        img: "/images/retail_interactive_showcase.jpg",
        href: "/use-cases/retail-experiences"
      },
      {
        title: "Brand Activations",
        desc: "Campaign and launch moments people take part in, often run as a pop up or seasonal activation inside a retail space.",
        tags: ["Brand Activation", "Pop Up"],
        img: "/images/cathedral_projection_mapping.jpg",
        href: "/use-cases/brand-activations"
      }
    ]
  },
  useCases: {
    label: "SEE IT IN CONTEXT",
    title: "How Retailers Use These Solutions",
    intro: "This industry connects to two of our use cases:",
    items: [
      {
        title: "Retail Experiences",
        desc: "The core experience of turning a store, window or showroom into a space shoppers stop and explore.",
        href: "/use-cases/retail-experiences",
        cta: "Explore Retail Experiences"
      },
      {
        title: "Brand Activations",
        desc: "Campaign and launch moments people take part in, often run as a pop up or seasonal activation inside a retail space.",
        href: "/use-cases/brand-activations",
        cta: "Explore Brand Activations"
      }
    ]
  },
  howItWorks: {
    label: "HOW IT WORKS",
    title: "From Space to Retail Experience",
    steps: [
      { num: "01", title: "Review the Space", desc: "We look at the storefront, floor, lighting and layout." },
      { num: "02", title: "Plan the Experience", desc: "The interaction, visual layout and content are planned around the brand and the campaign." },
      { num: "03", title: "Build the Content", desc: "Visuals and activities are created to match the brand, products and campaign goal." },
      { num: "04", title: "Install and Calibrate", desc: "The system is installed and calibrated to the exact space and surfaces." }
    ]
  },
  benefits: {
    title: "Benefits for Retailers and Shoppers",
    items: [
      { title: "A Reason to Stop", desc: "Gives shoppers something to engage with before they decide whether to walk in." },
      { title: "Products Shown Differently", desc: "Interactive and immersive formats can show more than a shelf, rack or label." },
      { title: "Flexible Campaigns", desc: "Content can be updated for new products, sales and seasons without replacing the installation." },
      { title: "Reusable Investment", desc: "One installation can support many campaigns and launches over time." }
    ],
  },
  technology: {
    title: "Technology Built for Retail Spaces",
    items: [
      { title: "Motion Tracking", desc: "Detects shopper movement near windows, floors and displays" },
      { title: "High Brightness Projection", desc: "Engineered for ambient retail lighting" },
      { title: "LED and 3D Display Panels", desc: "For storefronts and showroom visuals" },
      { title: "AI Avatar and Photo Generation", desc: "For guided or personalized interactions" },
      { title: "Interactive Touch Surfaces", desc: "For tables, counters and fitting rooms" },
      { title: "Content Management Platform", desc: "Lets store or marketing teams update content centrally" }
    ],
  },
  whyChooseUs: {
    label: "WHY PROJECTION",
    title: "Why Retailers Choose Projection",
    items: [
      { title: "Content you can update yourself", desc: "New campaigns and seasons without a new installation" },
      { title: "One partner across formats", desc: "Interactive surfaces, immersive visuals, AI and games from a single team" },
      { title: "Planned around your calendar", desc: "Installations scoped to launch dates and retail timelines" }
    ]
  },
  faqs: {
    title: "Frequently Asked Questions",
    items: [
      { q: "Can a shop window be interactive?", a: "Yes, where the window and lighting suit the setup. Content can be projected or displayed so it reacts as people walk past." },
      { q: "What can shoppers do at an interactive retail display?", a: "They can play a short game, explore products, see large format visuals, or interact with an AI guide, depending on the setup." },
      { q: "Does the store need major changes?", a: "Requirements depend on the space and the experience. Surface, lighting, ceiling height and equipment placement are reviewed during planning." },
      { q: "Can it work near windows with strong sunlight?", a: "It depends on the equipment and lighting conditions. This is reviewed during planning." },
      { q: "Can the content change for different campaigns?", a: "Yes, content can be planned to change with new products, sales and seasons." },
      { q: "Can it be customized to our brand?", a: "Visuals and activities can be planned around your brand, products and space." },
      { q: "How do we get started?", a: "Share your store, your audience and what you want shoppers to do. We will discuss a suitable approach for your project." }
    ]
  },
  cta: {
    eyebrow: "RETAIL",
    title: "Give Shoppers a Reason to Stop",
    subtitle: "Tell us about your store and what you want shoppers to do.",
    buttonText: "Discuss Your Retail Project",
    img: "/images/industry_retail_hero.jpg"
  }
};
