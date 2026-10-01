import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { notFound } from "next/navigation";
import MasterSolutionContent from "@/components/MasterSolutionContent";
import { solutionDetails } from "../solutionsData";

export function generateStaticParams() {
  return Object.keys(solutionDetails).map((slug) => ({ slug }));
}

export async function generateMetadata(props: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await props.params;
  const data = solutionDetails[slug];

  if (!data) {
    return {
      title: "Solution | Projection",
    };
  }

  const title =
    slug === "interactive-projection"
      ? "Interactive Projection for Floors, Walls and Ceilings"
      : slug === "immersive-environment" || slug === "immersive-environments"
      ? "Immersive Environments: Rooms, Projection Mapping and Domes"
      : slug === "ai-experience" || slug === "ai-experiences"
      ? "AI Experiences: AI Avatars and AI Photo Experiences"
      : slug === "interactive-engagement" || slug === "solution-engagement"
      ? "Interactive Engagement: Motion Games and Gamification"
      : `${data.heroHeading || data.solutionLabel} | Projection`;

  const description =
    slug === "interactive-projection"
      ? "Explore interactive projection for floors, walls, ceilings and other surfaces, with responsive experiences designed for different spaces and audiences."
      : slug === "immersive-environment" || slug === "immersive-environments"
      ? "Build immersive rooms, projection mapped surfaces, 360 degree projection and dome environments that surround people with visual content."
      : slug === "ai-experience" || slug === "ai-experiences"
      ? "Add an AI avatar or AI photo experience to an event, booth or brand space. See how AI driven interactions work in a physical setting."
      : slug === "interactive-engagement" || slug === "solution-engagement"
      ? "Turn a floor, wall or booth into a motion game or group activity. See how interactive engagement gets people playing and taking part."
      : data.heroDescription || data.heroSubtitle;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: data.heroImg ? [{ url: data.heroImg }] : [],
    },
  };
}

export default async function SolutionSubpage(props: { params: Promise<{ slug: string }> }) {
  const { slug } = await props.params;
  const data = solutionDetails[slug];

  if (!data) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white text-black flex flex-col">
      <Navbar />
      <MasterSolutionContent data={data} />
      <Footer />
    </main>
  );
}
