"use client";

import SafeImage from "@/components/SafeImage";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Button from "@/components/ui/Button";
import SectionHeading from "@/components/ui/SectionHeading";
import Divider from "@/components/ui/Divider";

const industriesData = [
  {
    id: "education",
    num: "01",
    title: "Education & Learning Spaces",
    slug: "education",
    badge: "Classrooms • STEM Labs • Libraries",
    desc: "Transform traditional classrooms into active, motion-responsive digital environments where students explore STEM, history, and physical science through active movement.",
    img: "https://momentfactory.com/cdn/shop/files/Aura_EgliseSaint-Roch_MomentFactory__DSC4360.png",
    highlights: [
      "K-12 & Higher Education Interactive Projection",
      "Gamified STEM & Sensory Math Modules",
      "Movement-Based Physical & Cognitive Play",
      "Multi-User Collaborative Learning Surfaces",
    ],
  },
  {
    id: "museums",
    num: "02",
    title: "Museums & Cultural Venues",
    slug: "museums-culture",
    badge: "Exhibits • Archives • Immersive Halls",
    desc: "Bring historical artifacts and digital archives to life with interactive displays, projection mapping, and immersive storytelling halls visitors can touch and explore.",
    img: "https://momentfactory.com/cdn/shop/files/Aura_EgliseSaint-Roch_MomentFactory__DSC4360.png",
    highlights: [
      "Interactive Projection Walls for Historical Narratives",
      "Touchless Gallery Kiosks & Artifact Zooming",
      "Large-Scale Architectural Projection Mapping",
      "Interactive Floor Timelines & Spatial Maps",
    ],
  },
  {
    id: "retail",
    num: "03",
    title: "Retail & Flagship Showrooms",
    slug: "retail-showrooms",
    badge: "Storefronts • Pop-Ups • Experience Centers",
    desc: "Captivate shoppers and increase foot traffic with interactive motion floors, digital storefront windows, and immersive product try-on projection spaces.",
    img: "https://momentfactory.com/cdn/shop/files/Aura_EgliseSaint-Roch_MomentFactory__DSC4360.png",
    highlights: [
      "Motion Interactive Storefront Displays",
      "Brand Activation & Seasonal Pop-Up Floors",
      "Product Discovery & Interactive Catalogs",
      "Audience Traffic & Dwell-Time Analytics",
    ],
  },
  {
    id: "healthcare",
    num: "04",
    title: "Healthcare & Sensory Therapy",
    slug: "healthcare",
    badge: "Pediatrics • Sensory Rooms • Waiting Areas",
    desc: "Create comforting, calming, and sensory-stimulating environments for pediatric wards, rehabilitation centers, and therapy spaces.",
    img: "https://momentfactory.com/cdn/shop/files/Aura_EgliseSaint-Roch_MomentFactory__DSC4360.png",
    highlights: [
      "Calming Sensory Therapy Floor Projection",
      "Motor-Skill Rehabilitation & Movement Tracking",
      "Pediatric Waiting Room Distraction Games",
      "Sanitary, Contactless & Easy-to-Clean Tech",
    ],
  },
  {
    id: "entertainment",
    num: "05",
    title: "Entertainment & Theme Venues",
    slug: "entertainment",
    badge: "Theme Parks • Arenas • FEC Centers",
    desc: "Build unforgettable attractions with interactive projection arenas, immersive escape rooms, and multiplayer motion gaming zones.",
    img: "https://momentfactory.com/cdn/shop/files/Aura_EgliseSaint-Roch_MomentFactory__DSC4360.png",
    highlights: [
      "Multiplayer Motion Projection Games",
      "Immersive 360° Attraction Rooms",
      "Interactive Queue Line Entertainment",
      "High-Throughput Venue Software Systems",
    ],
  },
  {
    id: "corporate",
    num: "06",
    title: "Corporate & Executive Spaces",
    slug: "corporate",
    badge: "Lobbies • Executive Centers • Briefing Rooms",
    desc: "Modernize corporate headquarters and executive briefing rooms with branded interactive lobby installations and AI experience walls.",
    img: "https://momentfactory.com/cdn/shop/files/Aura_EgliseSaint-Roch_MomentFactory__DSC4360.png",
    highlights: [
      "Architectural Motion Lobby Installations",
      "Interactive Digital Executive Briefing Walls",
      "Public Wayfinding & Interactive Kiosks",
      "Centralized Brand Media Control",
    ],
  },
  {
    id: "hospitality",
    num: "07",
    title: "Hospitality & Resorts",
    slug: "hospitality",
    badge: "Hotels • Resorts • Atriums & Lounges",
    desc: "Give guests memorable entrance experiences with ambient interactive projection displays in hotel atriums, resort pathways, and luxury lounges.",
    img: "https://momentfactory.com/cdn/shop/files/Aura_EgliseSaint-Roch_MomentFactory__DSC4360.png",
    highlights: [
      "Ambient Atrium Interactive Projections",
      "Luxury Hotel Lobby Water & Floral Visuals",
      "Time-Synchronized Day & Night Art Canvases",
      "Touchless Concierge & Wayfinding Stations",
    ],
  },
  {
    id: "public-spaces",
    num: "08",
    title: "Public Spaces & Transit Venues",
    slug: "public-spaces",
    badge: "Airports • Plazas • Transit Hubs",
    desc: "Bring interactive projection art and dynamic wayfinding to airport concourses, public plazas, civic venues, and transit terminals.",
    img: "https://momentfactory.com/cdn/shop/files/Aura_EgliseSaint-Roch_MomentFactory__DSC4360.png",
    highlights: [
      "High-Traffic Transit Concourse Floor Mapping",
      "Interactive Public Art Installations",
      "All-Weather Durability & High-Brightness Optics",
      "Simple Foot-Traffic and Crowd Analytics",
    ],
  },
];

export default function MasterIndustryContent() {
  return (
    <div className="w-full bg-white text-black pt-24">
      {/* Hero Section */}
      <section className="py-16 border-b border-black/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="INDUSTRY SOLUTIONS"
            heading="Built for Every Industry. Designed for Every Experience."
            subheading="From active classrooms to immersive museums and retail flagship stores, our spatial technology transforms commercial spaces."
          />
        </div>
      </section>

      {/* Industries Visual Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {industriesData.map((item) => (
              <Link 
                href={`/industries/${item.slug}`} 
                key={item.id}
                className="group flex flex-col bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-black">
                  <SafeImage
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1.5s] ease-out opacity-90 group-hover:opacity-100"
                    containerClassName="w-full h-full"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-80" />
                  <div className="absolute top-4 left-4 bg-white/20 backdrop-blur-md px-3 py-1 rounded-full border border-white/30 text-[9px] uppercase tracking-widest text-white">
                    {item.badge}
                  </div>
                </div>

                <div className="p-6 sm:p-8 flex flex-col flex-1">
                  <span className="text-3xl text-gray-200 font-black block mb-2 font-mono group-hover:text-black transition-colors duration-500">
                    {item.num}
                  </span>
                  <h3 className="text-xl font-bold text-black mb-3 group-hover:text-black/70 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600 font-light leading-relaxed mb-6 flex-1">
                    {item.desc}
                  </p>

                  <div className="mt-auto inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-black group-hover:text-gray-500 transition-colors">
                    <span>Explore Solutions</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Divider />

      {/* CTA Section */}
      <section className="py-20 bg-white text-black border-t border-black/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="text-black mb-2">Ready to transform your venue?</h2>
            <p className="text-black/60 font-light text-sm max-w-xl">
              Talk to our optical engineers to select the ideal interactive projection configuration for your audience.
            </p>
          </div>
          <Button href="/contact" variant="primary">
            Consult with Experts
          </Button>
        </div>
      </section>
    </div>
  );
}
