import { IndustryData } from './types';
import { education } from './education';
import { healthcare } from './healthcare';
import { retail } from './retail';
import { museums } from './museums';
import { entertainment } from './entertainment';
import { hospitality } from './hospitality';
import { corporate } from './corporate';
import { publicSpaces } from './public-spaces';

export const sharedDelivery = {
  title: "How We Deliver",
  intro: "Every institution is unique. That's why we follow a collaborative process that transforms your vision into a fully customized interactive experience—from consultation and design to installation, training, and ongoing support.",
  bottomStatement: "A dedicated team works with you throughout every stage, ensuring your interactive environment is delivered on time, performs reliably, and continues to evolve with your needs.",
  steps: [
    { num: "01", title: "Discover", desc: "We begin by understanding your goals, audience, environment, and project requirements to create the right interactive experience." },
    { num: "02", title: "Design", desc: "Our team designs a tailored interactive solution, including space planning, user experience, technology selection, and content strategy." },
    { num: "03", title: "Develop", desc: "We build custom software, interactive content, animations, and experiences that align with your objectives." },
    { num: "04", title: "Install", desc: "Our experts install and integrate the hardware and software, ensuring everything works seamlessly in your environment." },
    { num: "05", title: "Train", desc: "We provide hands-on training so your staff can confidently manage and operate the interactive systems." },
    { num: "06", title: "Ongoing Support", desc: "After launch, we continue to provide maintenance, updates, and technical support to ensure long-term performance." },
  ]
};

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

export * from './types';
