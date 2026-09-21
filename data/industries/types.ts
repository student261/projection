import { LucideIcon } from 'lucide-react';

export interface IndustryChallenge { title: string; desc: string; }
export interface IndustryVisionPillar { title: string; desc: string; }
export interface IndustrySolution { title: string; desc: string; }
export interface IndustryExperience { title: string; desc: string; tags: string[]; img: string; href?: string; }
export interface IndustryBenefit { title: string; desc: string; }
export interface IndustryTech { title: string; desc: string; }
export interface IndustryFAQ { q: string; a: string; }

export interface IndustryCaseStudy {
  client: string;
  title: string;
  headline?: string;
  tag?: string;
  metric: string;
  metricLabel: string;
  secondaryMetric?: string;
  secondaryMetricLabel?: string;
  desc: string;
  quote?: string;
  quoteAuthor?: string;
  img: string;
  slug?: string;
}

export interface IndustryCTA {
  eyebrow?: string;
  title: string;
  subtitle: string;
  buttonText: string;
  img?: string;
}

export interface IndustryData {
  slug: string;
  icon: any; // Using any for icon import ease
  hero: { eyebrow: string; title: string; subtitle: string; img: string; };
  challenges: { title: string; intro: string; items: IndustryChallenge[]; transition: string; };
  vision: { title: string; intro: string; statement: string; pillars: IndustryVisionPillar[]; transition: string; quote: string; img?: string; };
  solutions: { title: string; intro: string; items: IndustrySolution[]; bottomStatement: string; };
  experiences: { title: string; intro: string; items: IndustryExperience[]; };
  benefits: { title: string; intro: string; items: IndustryBenefit[]; bottomStatement: string; };
  technology: { title: string; intro: string; items: IndustryTech[]; bottomStatement: string; };
  faqs: { title: string; intro: string; items: IndustryFAQ[]; };
  caseStudies?: IndustryCaseStudy[];
  cta?: IndustryCTA;
}
