import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FileText } from "lucide-react";

export const metadata = {
  title: "Terms of Service - PROJECTION",
  description: "Terms and conditions governing the use of PROJECTION interactive hardware, software platforms, and digital services.",
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-white text-black flex flex-col pt-24 font-sans selection:bg-black selection:text-white">
      <Navbar />

      <section className="px-4 sm:px-6 lg:px-8 pt-16 pb-12 max-w-4xl mx-auto w-full">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/5 border border-black/10 text-[10px] sm:text-[11px] font-mono font-semibold uppercase tracking-[0.2em] text-black/60 mb-6">
          <FileText className="w-3.5 h-3.5" />
          <span>LEGAL & TERMS</span>
        </div>

        <h1 className="text-[clamp(2rem,6vw,4rem)] font-black tracking-tight leading-[1.05] text-black mb-6">
          Terms of Service
        </h1>
        
        <p className="text-sm text-black/50 font-mono mb-12">
          Effective Date: August 2026 · Last Updated: August 2026
        </p>

        <div className="space-y-8 text-black/80 font-light leading-relaxed text-sm sm:text-base">
          <div>
            <h2 className="text-xl sm:text-2xl font-black text-black tracking-tight mb-3">
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing the PROJECTION website, purchasing commercial hardware systems, or utilizing our cloud orchestration platforms, you agree to comply with and be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
            </p>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-black text-black tracking-tight mb-3">
              2. Intellectual Property Rights
            </h2>
            <p>
              All proprietary spatial software engines, shader libraries, 3D assets, computer vision algorithms, and branding elements created by PROJECTION remain the exclusive intellectual property of PROJECTION Systems Inc., unless explicitly assigned or licensed under a written Master Services Agreement (MSA).
            </p>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-black text-black tracking-tight mb-3">
              3. Commercial Hardware & Software Licenses
            </h2>
            <p>
              Hardware deployments are sold under manufacturer warranties accompanied by active software licenses. You agree not to reverse-engineer, decompile, or modify proprietary optical tracking firmware without prior written authorization from our engineering team.
            </p>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-black text-black tracking-tight mb-3">
              4. Service Level Agreements (SLA) & Uptime
            </h2>
            <p>
              Clients subscribed to our Enterprise Cloud Care packages receive 99.9% uptime monitoring and support as defined in their specific SLA. Scheduled maintenance windows will be communicated at least 72 hours in advance to minimize operational disruption to venue visitors.
            </p>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-black text-black tracking-tight mb-3">
              5. Limitation of Liability
            </h2>
            <p>
              To the maximum extent permitted by applicable law, PROJECTION shall not be liable for indirect, incidental, special, consequential, or punitive damages resulting from venue power interruptions, third-party network outages, or unauthorized physical tampering with on-site equipment.
            </p>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-black text-black tracking-tight mb-3">
              6. Governing Law & Dispute Resolution
            </h2>
            <p>
              These Terms of Service are governed by the laws of the State of New York, USA, without regard to its conflict of law provisions. Any legal disputes arising under these terms shall be resolved exclusively in the state or federal courts located in New York County, NY.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
