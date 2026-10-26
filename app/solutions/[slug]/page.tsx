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
      ? "Interactive Floor & Wall Projection Solutions"
      : slug === "immersive-environment" || slug === "immersive-environments" || slug === "immersive-experiences"
      ? "Immersive Experiences and Projection Solutions"
      : slug === "ai-experience" || slug === "ai-experiences"
      ? "Interactive AI Experiences for Visitors and Spaces"
      : slug === "interactive-engagement" || slug === "solution-engagement"
      ? "Interactive Games and Engagement Solutions"
      : `${data.heroHeading || data.solutionLabel} | Projection`;

  const description =
    slug === "interactive-projection"
      ? "Turn floors and walls into interactive displays, games and activities that respond to movement and give visitors something to explore."
      : slug === "immersive-environment" || slug === "immersive-environments" || slug === "immersive-experiences"
      ? "Turn rooms and spaces into immersive environments with projection, projection mapping and large visual displays people can step into."
      : slug === "ai-experience" || slug === "ai-experiences"
      ? "Create AI experiences with digital characters, AI photo booths and interactive displays that give visitors something new to talk to, create and explore."
      : slug === "interactive-engagement" || slug === "solution-engagement"
      ? "Create interactive games and activities that get visitors moving, playing and taking part in your space."
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
