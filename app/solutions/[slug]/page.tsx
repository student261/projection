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
      : `${data.heroHeading || data.solutionLabel} | Projection`;

  const description =
    slug === "interactive-projection"
      ? "Explore interactive projection for floors, walls, ceilings and other surfaces, with responsive experiences designed for different spaces and audiences."
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
