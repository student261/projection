import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Cookie } from "lucide-react";

export const metadata = {
  title: "Cookie Policy - PROJECTION",
  description: "Cookie policy and tracking transparency standards for the PROJECTION website and digital spatial platforms.",
};

export default function CookiePolicyPage() {
  return (
    <main className="min-h-screen bg-white text-black flex flex-col pt-24 font-sans selection:bg-black selection:text-white">
      <Navbar />

      <section className="px-4 sm:px-6 lg:px-8 pt-16 pb-12 max-w-4xl mx-auto w-full">
        <div className="flex items-center gap-2 text-[10px] sm:text-[11px] font-mono font-semibold uppercase tracking-[0.2em] text-black/50 mb-6">
          <Cookie className="w-3.5 h-3.5 text-black/40" />
          <span>LEGAL & COMPLIANCE</span>
        </div>

        <h1 className="text-[clamp(2rem,6vw,4rem)] font-black tracking-tight leading-[1.05] text-black mb-6">
          Cookie Policy
        </h1>
        
        <p className="text-sm text-black/50 font-mono mb-12">
          Effective Date: August 2026 · Last Updated: August 2026
        </p>

        <div className="space-y-8 text-black/80 font-light leading-relaxed text-sm sm:text-base">
          <div>
            <h2 className="text-xl sm:text-2xl font-black text-black tracking-tight mb-3">
              1. What Are Cookies
            </h2>
            <p>
              Cookies are small text files placed on your device by websites you visit. They are widely used to make websites work efficiently, enhance user experience, and provide analytical telemetry to site operators.
            </p>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-black text-black tracking-tight mb-3">
              2. How We Use Cookies
            </h2>
            <p className="mb-3">
              PROJECTION utilizes strictly necessary, functional, and performance cookies to maintain platform security, preserve site preferences, and evaluate website interaction metrics. We categorize our cookies as follows:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-black/70">
              <li>
                <strong>Strictly Necessary Cookies:</strong> Essential for core website navigation, secure session management, and load balancing across our global edge networks.
              </li>
              <li>
                <strong>Performance & Analytics Cookies:</strong> Anonymous telemetry tracking (such as page visit durations, navigation drop-off rates, and device resolutions) that helps us optimize spatial demo rendering performance.
              </li>
              <li>
                <strong>Functional & Preference Cookies:</strong> Remember your interface configurations, such as interactive canvas settings, volume states, and regional preferences.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-black text-black tracking-tight mb-3">
              3. Third-Party Analytics
            </h2>
            <p>
              We may employ privacy-focused analytics services to understand how visitors engage with our technical case studies and solution specifications. These services collect only aggregated, anonymized telemetry without associating IP addresses with personally identifiable information.
            </p>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-black text-black tracking-tight mb-3">
              4. Managing & Disabling Cookies
            </h2>
            <p>
              Most web browsers allow you to control cookie preferences through their settings menus. You may configure your browser to reject all non-essential cookies, alert you when a cookie is placed, or delete existing cookies. Please note that disabling essential cookies may impact certain interactive animations or 3D canvas experiences on our site.
            </p>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-black text-black tracking-tight mb-3">
              5. Updates to This Policy
            </h2>
            <p>
              We may periodically update this Cookie Policy to reflect technical enhancements or regulatory changes. Any modifications will be posted to this page with an updated effective date.
            </p>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-black text-black tracking-tight mb-3">
              6. Contact Us
            </h2>
            <p>
              If you have questions regarding our use of cookies and web telemetry, please contact our compliance desk at:
            </p>
            <p className="font-mono text-xs text-black/70 mt-2">
              Email: compliance@projection.com<br />
              PROJECTION Systems Inc. · Attn: Data Privacy Officer<br />
              1000 Broadway, Suite 400, New York, NY 10010
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
