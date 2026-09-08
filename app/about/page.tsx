import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import WhyChooseUs from "@/components/WhyChooseUs";
import SafeImage from "@/components/SafeImage";
import { Cpu, Target, Maximize, Zap, Shield, ArrowRight } from "lucide-react";

export const metadata = {
  title: "About The Studio - PROJECTION",
  description: "Take a look behind the hardware. Meet the spatial engineers and visionaries transforming physical spaces into living digital ecosystems.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white text-black flex flex-col pt-24 selection:bg-black selection:text-white font-sans">
      <Navbar />

      {/* Hero Section: Split Screen Visual */}
      <section className="w-full min-h-[85vh] grid grid-cols-1 lg:grid-cols-2 bg-white border-b border-black/10">
        
        {/* Text Side */}
        <div className="flex flex-col justify-center px-6 sm:px-12 lg:px-24 py-20 lg:py-0">
          <div className="mb-6 flex items-center gap-3 text-[10px] uppercase tracking-[0.2em] font-bold text-black/50">
            <span className="w-8 h-[1px] bg-black/20"></span>
            BEHIND THE HARDWARE
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.05] mb-8">
            We engineer <br className="hidden lg:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-black via-black/80 to-black/40">living spaces.</span>
          </h1>
          <p className="text-lg sm:text-xl text-black/60 font-light leading-relaxed max-w-xl mb-12">
            PROJECTION was founded on a singular obsession: eradicating the boundary between the physical and the digital. We are an elite collective of spatial software engineers, optical hardware architects, and experiential designers.
          </p>
          
          <div className="grid grid-cols-2 gap-8 max-w-lg">
            <div>
              <div className="text-4xl font-black mb-1">12+</div>
              <div className="text-[10px] uppercase tracking-widest text-black/50 font-bold">Years of R&D</div>
            </div>
            <div>
              <div className="text-4xl font-black mb-1">140</div>
              <div className="text-[10px] uppercase tracking-widest text-black/50 font-bold">Global Deployments</div>
            </div>
          </div>
        </div>

        {/* Image Side */}
        <div className="relative h-[50vh] lg:h-auto bg-gray-100 overflow-hidden border-t lg:border-t-0 lg:border-l border-black/10">
          <SafeImage 
            src="https://momentfactory.com/cdn/shop/files/Moment_Factory_Signature_Shows_25_SuperReal_D7A1668-WS_5b710a5d-f2e7-4428-ad20-c83c257b7bbe.jpg"
            alt="PROJECTION Engineering Studio"
            className="w-full h-full object-cover opacity-90 mix-blend-multiply"
            containerClassName="w-full h-full bg-gray-100"
          />
          <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-white via-white/50 to-transparent opacity-90" />
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 sm:py-32 bg-white border-b border-black/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            
            <div className="order-2 lg:order-1 relative aspect-square lg:aspect-auto lg:h-[600px] w-full border border-black/10 bg-gray-100 overflow-hidden p-4">
               <div className="w-full h-full relative overflow-hidden bg-white">
                <SafeImage 
                  src="https://momentfactory.com/cdn/shop/files/SQCagARcade_Montreal_MomentFactory_-9.jpg"
                  alt="Optical Sensor Calibration"
                  className="w-full h-full object-cover opacity-80 mix-blend-multiply"
                  containerClassName="w-full h-full"
                />
                {/* Technical Overlay Graphics */}
                <div className="absolute inset-0 border border-black/20 m-4 pointer-events-none">
                  <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-black/30 -translate-x-1 -translate-y-1" />
                  <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-black/30 translate-x-1 -translate-y-1" />
                  <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-black/30 -translate-x-1 translate-y-1" />
                  <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-black/30 translate-x-1 translate-y-1" />
                </div>
               </div>
            </div>

            <div className="order-1 lg:order-2">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-8">
                We don't buy hardware.<br />
                <span className="text-black/40">We invent it.</span>
              </h2>
              <div className="space-y-6 text-black/70 font-light leading-relaxed text-lg mb-10">
                <p>
                  Most agencies buy off-the-shelf projectors and string them together with basic motion tracking software. We approach spatial engineering differently. 
                </p>
                <p>
                  Our R&D lab in New York develops proprietary LiDAR and optical sensor arrays that fuse data in real-time. This allows our central AI engine to map spaces down to the millimeter and track up to 100 individuals simultaneously with absolute zero latency.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="p-6 border border-black/10 bg-black/5 backdrop-blur-sm">
                  <Cpu className="w-6 h-6 text-black mb-4" />
                  <h4 className="text-sm font-bold uppercase tracking-widest mb-2">Sensor Fusion</h4>
                  <p className="text-xs text-black/60 font-light">Combining LiDAR, structured light, and optical cameras for true spatial awareness.</p>
                </div>
                <div className="p-6 border border-black/10 bg-black/5 backdrop-blur-sm">
                  <Zap className="w-6 h-6 text-black mb-4" />
                  <h4 className="text-sm font-bold uppercase tracking-widest mb-2">Zero Latency AI</h4>
                  <p className="text-xs text-black/60 font-light">Custom GPU edge-servers process massive point clouds in milliseconds.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Integration into existing global components */}
      <div className="bg-white text-black">
        <WhyChooseUs />
        <CTASection />
      </div>

      <Footer />
    </main>
  );
}
