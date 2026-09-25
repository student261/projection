import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ShieldCheck } from "lucide-react";

export const metadata = {
  title: "Privacy Policy - PROJECTION",
  description: "Privacy policy and spatial data handling practices for PROJECTION interactive environments and optical tracking systems.",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-white text-black flex flex-col pt-24 font-sans selection:bg-black selection:text-white">
      <Navbar />

      <section className="px-4 sm:px-6 lg:px-8 pt-16 pb-12 max-w-4xl mx-auto w-full">
        <div className="flex items-center gap-2 text-[10px] sm:text-[11px] font-mono font-semibold uppercase tracking-[0.2em] text-black/50 mb-6">
          <ShieldCheck className="w-3.5 h-3.5 text-black/40" />
          <span>LEGAL & COMPLIANCE</span>
        </div>

        <h1 className="text-[clamp(2rem,6vw,4rem)] font-black tracking-tight leading-[1.05] text-black mb-6">
          Privacy Policy
        </h1>
        
        <p className="text-sm text-black/50 font-mono mb-12">
          Effective Date: August 2026 · Last Updated: August 2026
        </p>

        <div className="space-y-8 text-black/80 font-light leading-relaxed text-sm sm:text-base">
          <div>
            <h2 className="text-xl sm:text-2xl font-black text-black tracking-tight mb-3">
              1. Overview & Commitment
            </h2>
            <p>
              PROJECTION (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting the privacy of visitors, clients, and partners. This Privacy Policy details our practices concerning data collection, spatial sensor analytics, and personal information across our website and interactive installations.
            </p>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-black text-black tracking-tight mb-3">
              2. Spatial Sensor & Computer Vision Privacy
            </h2>
            <p className="mb-3">
              Our interactive floors, walls, and projection mapping systems utilize ceiling-mounted optical depth cameras and LiDAR sensors to track participant coordinates in real-time. We adhere to a strict <strong>Privacy-by-Design</strong> architecture:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-black/70">
              <li><strong>No Facial Recognition:</strong> Our optical tracking systems process anonymous coordinate meshes (X, Y, Z positions) only. We do not store or capture facial identities.</li>
              <li><strong>Zero Image Storage:</strong> Sensor frames are processed instantaneously in volatile RAM on local edge servers and discarded within 16 milliseconds. No video or raw optical footage is written to persistent disk or transmitted to the cloud.</li>
              <li><strong>Aggregated Foot-Traffic Metrics:</strong> Cloud analytics reports display only anonymized aggregates (such as total daily footfall, dwell-time heatmaps, and zone engagement counts).</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-black text-black tracking-tight mb-3">
              3. Information We Collect Online
            </h2>
            <p className="mb-3">
              When you interact with our website, request a consultation, or subscribe to our intelligence journal, we may collect:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-black/70">
              <li>Contact details: Name, business email, organization name, phone number, and venue specifications.</li>
              <li>Technical usage data: Browser type, operating system, IP address, and anonymized referral metrics to improve site performance.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-black text-black tracking-tight mb-3">
              4. How We Use Your Information
            </h2>
            <p>
              Information collected through our online forms is used solely to respond to inquiries, schedule spatial demonstrations, provide technical feasibility reports, and fulfill contractual project agreements. We never sell, rent, or monetize your contact data with third-party advertising brokers.
            </p>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-black text-black tracking-tight mb-3">
              5. Data Security & Retention
            </h2>
            <p>
              We implement enterprise-grade security protocols, including end-to-end TLS encryption, role-based access control, and ISO-compliant cloud hosting environments. Client project assets and architectural specifications are retained securely for the duration of the commercial agreement and warranty period.
            </p>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-black text-black tracking-tight mb-3">
              6. Contact Our Privacy Team
            </h2>
            <p>
              If you have questions regarding our spatial privacy standards or wish to request data deletion, contact our Data Protection Officer at:
            </p>
            <p className="font-mono text-xs text-black/70 mt-2">
              Email: privacy@projection.com<br />
              PROJECTION Systems Inc. · Attn: Legal & Compliance<br />
              1000 Broadway, Suite 400, New York, NY 10010
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
