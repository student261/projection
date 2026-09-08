"use client";

import SafeImage from "@/components/SafeImage";

const clientLogos = [
  {
    name: "National Geographic",
    src: "https://momentfactory.com/cdn/shop/files/Aura_EgliseSaint-Roch_MomentFactory__DSC4360.png",
    tag: "Museum & Media",
  },
  {
    name: "Futuroscope",
    src: "https://momentfactory.com/cdn/shop/files/Moment_Factory_Signature_Shows_25_SuperReal_D7A1668-WS_5b710a5d-f2e7-4428-ad20-c83c257b7bbe.jpg",
    tag: "Interactive Venue",
  },
  {
    name: "Hudson Yards",
    src: "https://momentfactory.com/cdn/shop/files/6D9A8671-WS.jpg",
    tag: "Architectural Space",
  },
  {
    name: "Sphere Residency",
    src: "https://momentfactory.com/cdn/shop/files/Moment_Factory_Public_Spaces_Shinjuku_Station_IMG_0457-Modifier-WS.jpg",
    tag: "Immersive Dome",
  },
  {
    name: "Changi Airport",
    src: "https://momentfactory.com/cdn/shop/files/Moment-Factory-Changi_Airports_Terminal_4_Theatre_of_experience-7-WS.jpg",
    tag: "Spatial Terminal",
  },
  {
    name: "Real Madrid Games",
    src: "https://momentfactory.com/cdn/shop/files/AuraInvalides_MomentFactory_MouvementIII_HD-WS.jpg",
    tag: "Brand Activation",
  },
];

export default function LogoMarquee() {
  return (
    <section className="py-8 bg-white border-y border-black/10 overflow-hidden relative">
      {/* Marquee Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-5 text-center">
        <p className="text-[10px] uppercase tracking-[0.25em] text-black/50 font-bold">
          Trusted by educators, healthcare providers, retailers, museums, and entertainment venues worldwide
        </p>
      </div>

      {/* Left & Right Gradient Mask Fades */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

      {/* Infinite Smooth Marquee Track */}
      <div className="relative flex overflow-x-hidden w-full py-2">
        <div className="animate-marquee items-center gap-6 sm:gap-8">
          {[...clientLogos, ...clientLogos, ...clientLogos].map((logo, index) => (
            <div
              key={index}
              className="w-48 sm:w-56 h-20 sm:h-24 rounded-2xl relative overflow-hidden group shrink-0 border border-black/15 shadow-md cursor-pointer bg-gray-900"
            >
              {/* Background Image */}
              <SafeImage
                src={logo.src}
                alt={logo.name}
                className="w-full h-full object-cover opacity-75 grayscale group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                containerClassName="w-full h-full"
              />

              {/* Gradient Mask Overlay for Text Legibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10" />

              {/* Text Overlaid directly ON Image */}
              <div className="absolute inset-0 z-20 p-3.5 flex flex-col justify-between">
                <div className="flex justify-end">
                  <span className="text-[9px] font-bold tracking-widest text-white/80 bg-black/60 backdrop-blur-md px-2 py-0.5 rounded-full uppercase border border-white/20">
                    {logo.tag}
                  </span>
                </div>
                <div>
                  <h4 className="text-white uppercase group-hover:text-amber-300 transition-colors drop-shadow-sm">
                    {logo.name}
                  </h4>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
