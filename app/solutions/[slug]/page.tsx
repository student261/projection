import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { notFound } from "next/navigation";
import MasterSolutionContent from "@/components/MasterSolutionContent";
import { solutionDetails } from "../solutionsData";

export function generateStaticParams() {
  return Object.keys(solutionDetails).map((slug) => ({ slug }));
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
