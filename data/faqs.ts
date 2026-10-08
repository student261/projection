export interface FAQItem {
  id: string;
  categoryLabel: string;
  q: string;
  a: string;
}

export const faqs: FAQItem[] = [
  {
    id: "faq-1",
    categoryLabel: "TECHNOLOGY",
    q: "What is interactive projection and how does it work?",
    a: "Interactive projection combines projected digital content with motion or interaction tracking. When people move within the projected area, the visuals can respond to their movement and create an interactive experience.",
  },
  {
    id: "faq-2",
    categoryLabel: "SPACE REQUIREMENTS",
    q: "What kind of space do I need for interactive projection?",
    a: "The requirements depend on the experience, projection area and installation setup. Floor or wall space, ceiling height, lighting and equipment placement are considered when planning the system.",
  },
  {
    id: "faq-3",
    categoryLabel: "SURFACES",
    q: "Can interactive projection work on different surfaces?",
    a: "Yes. Interactive projection can be designed for floors, walls, tables and other suitable surfaces. The setup depends on the surface, lighting and type of interaction required.",
  },
  {
    id: "faq-4",
    categoryLabel: "CUSTOMIZATION",
    q: "Can the interactive experience be customized?",
    a: "Yes. Content can be designed around your space, audience, brand and project goals, including custom visuals, games and interactive experiences.",
  },
  {
    id: "faq-5",
    categoryLabel: "SOLUTION SELECTION",
    q: "How do you decide which interactive solution is right for my space?",
    a: "The right solution depends on your space, audience, purpose, projection area, lighting and interaction requirements. These factors are reviewed before selecting the appropriate setup.",
  },
  {
    id: "faq-6",
    categoryLabel: "CONSULTATION",
    q: "Can you help me choose the right interactive solution?",
    a: "Yes. We look at your space, audience, goals and the type of experience you want to create, then help you choose the most suitable solution for your project.",
  },
];
