"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";

// ============================================================================
// CONFIGURATION BLOCK
// ============================================================================
const CONFIG = {
  COMPANY_NAME: "",
  PHONE: "",
  EMAIL: "",
  FORM_ENDPOINT: "",
};

// Helper for config values
const getCompany = () => CONFIG.COMPANY_NAME.trim() || "[COMPANY NAME]";
const getPhone = () => CONFIG.PHONE.trim() || "[PHONE NUMBER]";
const getEmail = () => CONFIG.EMAIL.trim() || "[EMAIL ADDRESS]";

// ============================================================================
// SCREENSHOT FRAME COMPONENT (Direct, Fully Visible Image Display)
// ============================================================================
function ScreenshotFrame({
  src,
  alt,
}: {
  src: string;
  alt: string;
  label?: string;
  specs?: string;
}) {
  return (
    <div className="w-full rounded-lg overflow-hidden border border-neutral-200 bg-white shadow-sm flex items-center justify-center">
      <img
        src={src}
        alt={alt}
        className="w-full h-auto object-contain block"
      />
    </div>
  );
}

// ============================================================================
// MAIN PAGE COMPONENT: LottoTrack Pro (Black & White Brand Palette)
// ============================================================================
export default function LottoTrackPage() {
  const [showTalkToUs, setShowTalkToUs] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formSending, setFormSending] = useState(false);
  const [formError, setFormError] = useState("");
  const [formSuccess, setFormSuccess] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    store: "",
    state: "GA",
    message: "",
    hpWebsite: "",
  });

  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const talkToUsRef = useRef<HTMLDivElement>(null);

  const handleTalkToUs = () => {
    setShowTalkToUs(true);
    setTimeout(() => {
      talkToUsRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" });
      talkToUsRef.current?.focus();
    }, 50);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (fieldErrors[name]) {
      setFieldErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Honeypot spam check
    if (formData.hpWebsite.trim() !== "") {
      return;
    }

    const errors: Record<string, string> = {};
    if (!formData.name.trim()) {
      errors.name = "Please enter your name.";
    }
    if (!formData.email.trim()) {
      errors.email = "Please enter your email address.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errors.email = "Please enter a valid email address.";
    }

    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      return;
    }

    if (CONFIG.FORM_ENDPOINT.trim() !== "") {
      setFormSending(true);
      setFormError("");
      try {
        const res = await fetch(CONFIG.FORM_ENDPOINT.trim(), {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ ...formData, submittedAt: new Date().toISOString() }),
        });
        if (res.ok) {
          setFormSuccess(`Request sent! Thank you, ${formData.name}. We will be in touch shortly.`);
          setFormData({ name: "", email: "", phone: "", store: "", state: "GA", message: "", hpWebsite: "" });
        } else {
          throw new Error("Submission failed");
        }
      } catch {
        setFormError("Submission failed. Unable to send your request. Please email us directly.");
      } finally {
        setFormSending(false);
      }
    } else {
      setFormSubmitted(true);
    }
  };

  const mailtoRecipient = getEmail();
  const mailtoSubject = encodeURIComponent(`LottoTrack Pro Demo Request: ${formData.name}`);
  const mailtoBody = encodeURIComponent(
    `Hello,\n\nI would like to request a demo of LottoTrack Pro.\n\n` +
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Phone: ${formData.phone || "Not provided"}\n` +
      `Store/Company: ${formData.store || "Not provided"}\n` +
      `State: ${formData.state || "Not provided"}\n` +
      `What I would like to see: ${formData.message || "General demonstration"}\n\n` +
      `Sent from LottoTrack Pro landing page.`
  );
  const mailtoUrl = `mailto:${mailtoRecipient}?subject=${mailtoSubject}&body=${mailtoBody}`;

  const workflowSteps = [
    {
      step: "01",
      title: "A pack arrives.",
      sentence: "Scan the barcode.",
      file: "01-scan-pack.png?v=5",
      label: "[REAL PRODUCT SCREENSHOT: PACK SCAN]",
    },
    {
      step: "02",
      title: "LottoTrack identifies it.",
      sentence: "See the game, price and pack number.",
      file: "02-pack-identified.png",
      label: "[REAL PRODUCT SCREENSHOT: PACK IDENTIFIED]",
    },
    {
      step: "03",
      title: "Put it in a box.",
      sentence: "Choose a dispenser box and enter the starting ticket number.",
      file: "03-choose-box.png?v=5",
      label: "[REAL PRODUCT SCREENSHOT: CHOOSE BOX]",
    },
    {
      step: "04",
      title: "Inventory updates.",
      sentence: "See what's left in each box.",
      file: "05-inventory-updates.png",
      label: "[REAL PRODUCT SCREENSHOT: INVENTORY UPDATES]",
    },
    {
      step: "05",
      title: "The shift closes.",
      sentence: "The system calculates the expected cash.",
      file: "06-close-shift.png",
      label: "[REAL PRODUCT SCREENSHOT: CLOSE SHIFT]",
    },
    {
      step: "06",
      title: "The report is ready.",
      sentence: "Print, export or email it.",
      file: "07-report.png",
      label: "[REAL PRODUCT SCREENSHOT: REPORT READY]",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-neutral-900 font-sans antialiased selection:bg-black selection:text-white">
      {/* Skip link for keyboard accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-50 px-4 py-2 bg-black text-white font-semibold rounded shadow-md"
      >
        Skip to main content
      </a>

      {/* ====================================================================
           HEADER: Pure Black & White Brand Identity
           ==================================================================== */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link href="#top" className="flex items-center gap-2 text-lg font-extrabold tracking-tight text-black">
            <span className="w-2 h-2 rounded-full bg-black" aria-hidden="true" />
            <span>LottoTrack Pro</span>
          </Link>

          <nav aria-label="Primary navigation" className="hidden md:flex items-center gap-8">
            <a href="#how" className="text-sm font-medium text-neutral-600 hover:text-black transition-colors">
              How It Works
            </a>
            <a href="#benefits" className="text-sm font-medium text-neutral-600 hover:text-black transition-colors">
              Benefits
            </a>
            <a href="#faq" className="text-sm font-medium text-neutral-600 hover:text-black transition-colors">
              FAQ
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#demo"
              className="inline-flex items-center justify-center text-sm font-semibold px-4 py-2 rounded bg-black text-white hover:bg-neutral-800 transition-colors shadow-sm"
            >
              Request a Demo
            </a>
          </div>
        </div>
      </header>

      <main id="main-content">
        {/* ==================================================================
             1. HERO SECTION: Physical Counter Dispenser Rack + Live System POS
             ================================================================== */}
        <section className="bg-white pt-8 pb-6 sm:pt-12 sm:pb-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Left Column: Approved Copy & Conversion */}
              <div className="lg:col-span-7 space-y-5">
                <span className="inline-block text-xs font-mono font-bold tracking-widest text-neutral-500 uppercase">
                  Retail lottery POS and shift tracking
                </span>
                <h1 className="text-4xl sm:text-5xl lg:text-5xl font-extrabold tracking-tight text-black leading-[1.08]">
                  Stop handwriting your lottery logs.
                </h1>
                <p className="text-base sm:text-lg text-neutral-600 leading-relaxed max-w-2xl">
                  LottoTrack Pro tracks every scratch-off pack, keeps your inventory and sales up to date, and helps balance your cash drawer at the end of the shift.
                </p>
                <div className="flex flex-wrap items-center gap-4 pt-1">
                  <a
                    href="#demo"
                    className="inline-flex items-center justify-center text-base font-semibold px-6 py-3 rounded bg-black text-white hover:bg-neutral-800 transition-colors shadow-sm"
                  >
                    Request a Demo
                  </a>
                  <a
                    href="#how"
                    className="inline-flex items-center justify-center text-base font-semibold px-6 py-3 rounded bg-white text-black border border-neutral-300 hover:bg-neutral-50 transition-colors"
                  >
                    See How It Works
                  </a>
                </div>
                <div className="flex items-center gap-2 pt-1 text-xs text-neutral-500">
                  <span className="w-1.5 h-1.5 rounded-full bg-black" aria-hidden="true" />
                  <span>Works in a web browser. Nothing to install.</span>
                </div>
              </div>

              {/* Right Column: Physical Acrylic Rack + Live System POS Screen */}
              <div className="lg:col-span-5 space-y-4">
                <div className="grid grid-cols-2 gap-4 items-end">
                  <div className="flex flex-col items-center">
                    <img
                      src="/lottotrack/dispenser-rack.jpg"
                      alt="Physical acrylic retail lottery scratch-off dispenser rack"
                      className="w-full h-auto max-h-[220px] object-contain rounded border border-neutral-200 p-1 bg-white"
                    />
                    <span className="text-[11px] text-neutral-500 text-center mt-1.5 font-medium">
                      Physical Dispenser Rack
                    </span>
                  </div>
                  <div className="flex flex-col items-center">
                    <img
                      src="/lottotrack/screenshots/cashier-screen.png?v=3"
                      alt="Live LottoTrack POS Register Screen showing 20 active dispenser boxes, live ticket counts, and $1017.00 settlement"
                      className="w-full h-auto max-h-[220px] object-contain rounded border border-neutral-200 shadow-sm bg-white"
                    />
                    <span className="text-[11px] text-neutral-500 text-center mt-1.5 font-medium">
                      Live Counter POS System
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Demo Video Container (Hidden until video is supplied) */}
        <div id="demo-video-container" hidden aria-hidden="true" className="max-w-7xl mx-auto px-4" />

        {/* ==================================================================
             2. THE PROBLEM SECTION: Open Editorial Layout (Zero Card Boxes)
             ================================================================== */}
        <section className="pt-4 pb-12 sm:pt-6 sm:pb-16 border-b border-neutral-200 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
              <div className="lg:col-span-5">
                <span className="inline-block text-xs font-mono font-bold tracking-widest text-neutral-400 uppercase mb-2">
                  The Problem
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-black leading-tight">
                  Lottery paperwork is slow. Mistakes make it worse.
                </h2>
                <p className="mt-3 text-base sm:text-lg text-neutral-600 leading-relaxed">
                  At the end of a busy shift, you shouldn't have to rebuild what happened from handwritten notes and a calculator.
                </p>
              </div>

              <div className="lg:col-span-7 lg:border-l border-neutral-200 lg:pl-10">
                <ul className="divide-y divide-neutral-200">
                  {[
                    "Writing ticket numbers by hand takes time and gives mistakes another place to start.",
                    "One wrong number can throw off your sales and your reconciliation.",
                    "The drawer doesn't match, and now you have to work out where the difference came from.",
                    "Inventory isn't clear. You shouldn't have to check every box just to know what's left.",
                  ].map((point, index) => (
                    <li key={index} className="py-4 first:pt-0 last:pb-0 flex items-start gap-4">
                      <span className="font-mono text-xs font-bold text-black pt-1 shrink-0">
                        0{index + 1}
                      </span>
                      <p className="text-base font-medium text-neutral-900 leading-normal">
                        {point}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Live System Solution Showcase: Real Inventory Status Screen */}
            <div className="mt-10 pt-8 border-t border-neutral-200">
              <div className="max-w-3xl mb-4">
                <span className="text-xs font-mono font-bold tracking-widest text-neutral-500 uppercase">
                  Live System Screenshot
                </span>
                <h3 className="text-xl font-bold text-black mt-1">
                  Real-time Dispenser Stock &amp; Audit Dashboard
                </h3>
                <p className="text-sm text-neutral-600 mt-1">
                  LottoTrack replaces handwritten paperwork with instant visibility into every box, pack and ticket.
                </p>
              </div>
              <div className="rounded-lg overflow-hidden border border-neutral-200 shadow-md">
                <img
                  src="/lottotrack/screenshots/rack.png?v=4"
                  alt="Live LottoTrack Lottery Inventory Status dashboard showing 19 active dispenser packs, 1,863 tickets left in rack, 288 sold today ($1317.00), and $5,883.00 total rack value"
                  className="w-full h-auto object-contain block"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ==================================================================
             3. HOW IT WORKS (id="how"): Three-Step Model
             ================================================================== */}
        <section id="how" className="py-20 border-b border-neutral-200 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-black mb-12">
              Three things happen. You do the scanning.
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
              <div className="border-t-2 border-black pt-6">
                <span className="font-mono text-2xl font-extrabold text-black block mb-3">01</span>
                <h3 className="text-xl font-bold text-black mb-2">Scan it.</h3>
                <p className="text-neutral-600 text-sm leading-relaxed">
                  Scan a pack when it arrives. Scan a ticket when you sell it. No typing long ticket numbers.
                </p>
              </div>

              <div className="border-t-2 border-black pt-6">
                <span className="font-mono text-2xl font-extrabold text-black block mb-3">02</span>
                <h3 className="text-xl font-bold text-black mb-2">LottoTrack keeps up.</h3>
                <p className="text-neutral-600 text-sm leading-relaxed">
                  Inventory, ticket positions, sales and sold-out packs update as you work.
                </p>
              </div>

              <div className="border-t-2 border-black pt-6">
                <span className="font-mono text-2xl font-extrabold text-black block mb-3">03</span>
                <h3 className="text-xl font-bold text-black mb-2">Get the report.</h3>
                <p className="text-neutral-600 text-sm leading-relaxed">
                  When the shift is finished, your reports are ready to print, export or email.
                </p>
              </div>
            </div>

            <p className="mt-10 pt-6 border-t border-neutral-200 font-semibold text-lg text-black">
              You scan. LottoTrack keeps the record.
            </p>
          </div>
        </section>

        {/* ==================================================================
             4. ONE RECORD FROM PACK TO SALE: STACKED CARD SCROLL ANIMATION
             Cards stick and stack progressively so it does not feel long
             ================================================================== */}
        <section className="py-20 border-b border-neutral-200 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-12">
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-black">
                One record from pack to sale.
              </h2>
              <p className="mt-3 text-lg text-neutral-600">
                LottoTrack Pro follows each pack from delivery to the finished shift report. The steps below show where the record is made.
              </p>
            </div>

            {/* PROGRESSIVE STICKY CARD STACK */}
            <div className="relative space-y-6 lg:space-y-0 pb-12">
              {workflowSteps.map((item, idx) => (
                <article
                  key={idx}
                  style={{
                    // Sticky top offset stacks cards neatly with visible headers
                    top: `calc(84px + ${idx * 16}px)`,
                    zIndex: idx + 10,
                  }}
                  className="lg:sticky bg-white border border-neutral-200 rounded-2xl p-6 sm:p-10 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center transition-all duration-300 mb-6 lg:mb-12 last:mb-0"
                >
                  <div className="lg:col-span-5 space-y-3">
                    <span className="font-mono text-xs font-bold text-neutral-400 uppercase tracking-widest">
                      Step {item.step}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-black tracking-tight">
                      {item.title}
                    </h3>
                    <p className="text-base text-neutral-600">
                      {item.sentence}
                    </p>
                  </div>
                  <div className="lg:col-span-7">
                    <ScreenshotFrame
                      src={`/lottotrack/screenshots/${item.file}`}
                      alt={item.label}
                      label={item.label}
                      specs={`${item.file} : 16:10 Frame`}
                    />
                  </div>
                </article>
              ))}
            </div>

            <p className="pt-6 border-t border-neutral-200 font-semibold text-lg text-black">
              The work happens at the counter. The record stays connected.
            </p>
          </div>
        </section>

        {/* ==================================================================
             5. OWNERS AND CASHIERS (id="benefits"): Two Perspectives (No Cards)
             ================================================================== */}
        <section id="benefits" className="py-14 sm:py-20 border-b border-neutral-200 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-black mb-12">
              Less paperwork for you. Less guesswork for them.
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
              {/* Store Owner */}
              <div className="border-t-2 border-black pt-6 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-black pb-4 mb-6 border-b border-neutral-200">
                    For the store owner:
                  </h3>
                  <ul className="space-y-4 mb-8 text-sm text-neutral-700">
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-black mt-2 shrink-0" />
                      <span>Save time at the end of the shift. Sales are calculated from the ticket positions recorded during the shift.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-black mt-2 shrink-0" />
                      <span>Catch problems early. See whether the drawer is balanced, over or short.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-black mt-2 shrink-0" />
                      <span>Know what's in your rack. See active packs, tickets remaining, sold-out packs and stored inventory.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-black mt-2 shrink-0" />
                      <span>Check in without being there. Add an email in Settings and receive the shift report when the shift closes.</span>
                    </li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <ScreenshotFrame
                    src="/lottotrack/screenshots/rack.png?v=4"
                    alt="[REAL PRODUCT SCREENSHOT: RACK OVERVIEW]"
                    label="[REAL PRODUCT SCREENSHOT: RACK OVERVIEW]"
                    specs="rack.png : 16:10 Frame"
                  />
                  <ScreenshotFrame
                    src="/lottotrack/screenshots/shift-report.png?v=4"
                    alt="[REAL PRODUCT SCREENSHOT: SHIFT REPORT]"
                    label="[REAL PRODUCT SCREENSHOT: SHIFT REPORT]"
                    specs="shift-report.png : 16:10 Frame"
                  />
                </div>
              </div>

              {/* Cashier */}
              <div className="border-t-2 border-black pt-6 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-black pb-4 mb-6 border-b border-neutral-200">
                    For the person behind the counter:
                  </h3>
                  <ul className="space-y-4 mb-8 text-sm text-neutral-700">
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-black mt-2 shrink-0" />
                      <span>Large controls. Clear buttons and number pads make common actions easy.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-black mt-2 shrink-0" />
                      <span>Spoken prompts. Audio feedback guides scanning and workflow steps.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-black mt-2 shrink-0" />
                      <span>Built-in quick guide. The basic workflow is explained inside the system.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-black mt-2 shrink-0" />
                      <span>Easy shift handoff. Switch the active cashier and continue with the next shift.</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <ScreenshotFrame
                    src="/lottotrack/screenshots/cashier-screen.png?v=3"
                    alt="[REAL PRODUCT SCREENSHOT: CASHIER SCREEN]"
                    label="[REAL PRODUCT SCREENSHOT: CASHIER SCREEN]"
                    specs="cashier-screen.png : 16:10 Frame"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ==================================================================
             6. CASH RECONCILIATION: Clean White Canvas (No Card Container)
             ================================================================== */}
        <section className="py-14 sm:py-20 border-b border-neutral-200 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-black">
              Know what the drawer should contain.
            </h2>
            <p className="mt-3 text-lg text-neutral-600 max-w-3xl mb-8">
              Ticket sales, payouts and your starting float come together to calculate the cash you should have. Online sales and cashouts can be entered too.
            </p>

            <div className="border-t border-b border-neutral-200 py-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 font-mono text-sm mb-8">
              <div>
                <span className="text-[11px] block uppercase text-neutral-500">Ticket sales</span>
                <span className="font-bold text-black text-base">+ $412</span>
              </div>
              <div>
                <span className="text-[11px] block uppercase text-neutral-500">Payouts</span>
                <span className="font-bold text-black text-base">- $96</span>
              </div>
              <div>
                <span className="text-[11px] block uppercase text-neutral-500">Bank float</span>
                <span className="font-bold text-black text-base">+ $150</span>
              </div>
              <div>
                <span className="text-[11px] block uppercase text-neutral-500">Expected cash</span>
                <span className="font-bold text-black text-base">$466</span>
              </div>
              <div>
                <span className="text-[11px] block uppercase text-neutral-500">Counted cash</span>
                <span className="font-bold text-black text-base">$466</span>
              </div>
              <div>
                <span className="text-[11px] block uppercase text-neutral-500">Status</span>
                <span className="font-bold text-black text-base">Balanced</span>
              </div>
            </div>

            <p className="text-base font-semibold text-black mb-4">
              If the numbers don't match, you'll see Over or Short.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="border-l-2 border-black pl-4">
                <div className="font-bold text-black text-base mb-1">Balanced</div>
                <div className="font-mono text-xs text-neutral-500">($466 counted against expected $466)</div>
              </div>

              <div className="border-l-2 border-neutral-400 pl-4">
                <div className="font-bold text-black text-base mb-1">Over</div>
                <div className="font-mono text-xs text-neutral-500">($480 counted against expected $466)</div>
              </div>

              <div className="border-l-2 border-neutral-400 pl-4">
                <div className="font-bold text-black text-base mb-1">Short</div>
                <div className="font-mono text-xs text-neutral-500">($450 counted against expected $466)</div>
              </div>
            </div>

            <span className="inline-block text-[11px] font-mono text-neutral-500 uppercase tracking-wider mt-6">
              Example figures shown for illustration.
            </span>
          </div>
        </section>

        {/* ==================================================================
             8. FIX MISTAKES: Clean White Canvas (No Cards)
             ================================================================== */}
        <section className="py-14 sm:py-20 border-b border-neutral-200 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-black">
              Made a mistake? Fix it.
            </h2>

            <div className="border-t border-neutral-200 pt-8 mt-8">
              {/* WRONG > FIX > CORRECTED Workflow */}
              <div className="py-3 font-mono text-xs sm:text-sm flex flex-wrap items-center gap-3 mb-6">
                <span className="text-neutral-500">ticket entered 0187</span>
                <span className="text-neutral-400" aria-hidden="true">&gt;</span>
                <span className="border border-black px-2.5 py-1 font-bold text-black">
                  Fix Position
                </span>
                <span className="text-neutral-400" aria-hidden="true">&gt;</span>
                <span className="text-black font-bold">correct position 0186</span>
              </div>

              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-neutral-700">
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-black" />
                  <span>Wrong ticket number? Use Fix Position.</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-black" />
                  <span>Wrong box? Switch boxes or change the box number.</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-black" />
                  <span>Pack finished? Mark it sold out.</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-black" />
                  <span>Taking a pack off the counter? Return it to the Lottery or move it to storage for later.</span>
                </li>
              </ul>

              <span className="inline-block text-[11px] font-mono text-neutral-500 uppercase tracking-wider mt-6">
                Example workflow.
              </span>
            </div>

            <p className="mt-8 font-semibold text-lg text-black">
              You don't have to start over because one number was wrong.
            </p>
          </div>
        </section>

        {/* ==================================================================
             9. EVERYTHING IN ONE PLACE: Clean Open List (No Cards)
             ================================================================== */}
        <section className="py-14 sm:py-20 border-b border-neutral-200 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-black mb-8">
              Everything in one place.
            </h2>

            <ul className="divide-y divide-neutral-200 border-t border-b border-neutral-200">
              {[
                { title: "Dispenser rack:", desc: "manage up to 65 boxes, with the game, ticket position and tickets left." },
                { title: "Pack inventory:", desc: "active, sold-out and stored packs, with their value." },
                { title: "Scan history:", desc: "barcode scans saved with the time they were scanned." },
                { title: "Shift tracking:", desc: "shift mode or daily mode." },
                { title: "Cash reconciliation:", desc: "balanced, over or short." },
                { title: "Reports:", desc: "shift, day, receipt, email and export." },
              ].map((item, i) => (
                <li key={i} className="py-4 text-sm text-neutral-700 flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-2">
                  <strong className="text-black font-semibold min-w-[140px]">{item.title}</strong>
                  <span>{item.desc}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ==================================================================
             10. FAQ (id="faq"): Clean Open Accordion (No Cards)
             ================================================================== */}
        <section id="faq" className="py-14 sm:py-20 border-b border-neutral-200 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-black mb-8">
              Frequently Asked Questions
            </h2>

            <div className="divide-y divide-neutral-200 border-t border-b border-neutral-200">
              {[
                {
                  q: "Do I need to install anything?",
                  a: "No. LottoTrack Pro runs in a web browser on your counter computer or tablet.",
                },
                {
                  q: "How do I sell a ticket?",
                  a: "Scan the ticket barcode, or press +1 on that box.",
                },
                {
                  q: "What if I enter the wrong ticket number?",
                  a: "Open the box and use Fix Position to correct it.",
                },
                {
                  q: "Can more than one person use it?",
                  a: "Yes. You can switch the active cashier, and each shift report records who worked that shift.",
                },
                {
                  q: "Can I return or store unsold packs?",
                  a: "Yes. Packs can be returned or moved into storage and loaded again later.",
                },
                {
                  q: "Will it work with my state's lottery?",
                  a: "The current day report follows the Georgia Lottery layout. Contact us to ask about your state.",
                },
              ].map((faq, i) => (
                <details key={i} className="group py-5">
                  <summary className="font-semibold text-base text-black cursor-pointer list-none flex items-center justify-between">
                    <span>{faq.q}</span>
                    <span className="text-neutral-400 group-open:rotate-180 transition-transform text-xs">▼</span>
                  </summary>
                  <p className="mt-3 text-sm text-neutral-600 leading-relaxed pr-6">
                    {faq.a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ==================================================================
             11. FINAL CTA AND DEMO FORM (id="demo"): Clean Open Layout (No Cards)
             ================================================================== */}
        <section id="demo" className="py-14 sm:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="border-t-2 border-black pt-12 grid grid-cols-1 lg:grid-cols-12 gap-12">
              {/* Pitch */}
              <div className="lg:col-span-5 space-y-6">
                <span className="text-xs font-mono font-bold tracking-widest text-neutral-500 uppercase">
                  Ready to leave the paper behind?
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-black leading-tight">
                  Put the paper reconciliation away.
                </h2>
                <p className="text-base sm:text-lg text-neutral-600 leading-relaxed">
                  See how LottoTrack Pro can handle your lottery counter, from the first scan to the finished shift report.
                </p>

                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <a
                    href="#demo-name"
                    onClick={() => document.getElementById("demo-name")?.focus()}
                    className="inline-flex items-center justify-center text-sm font-semibold px-5 py-2.5 rounded bg-black text-white hover:bg-neutral-800 transition-colors shadow-sm"
                  >
                    Request a Demo
                  </a>
                  <button
                    type="button"
                    onClick={handleTalkToUs}
                    className="inline-flex items-center justify-center text-sm font-semibold px-5 py-2.5 rounded bg-white text-black border border-neutral-300 hover:bg-neutral-50 transition-colors"
                  >
                    Talk to Us
                  </button>
                </div>

                {/* Talk to Us Card */}
                {showTalkToUs && (
                  <div
                    ref={talkToUsRef}
                    tabIndex={-1}
                    className="mt-6 p-5 bg-white border border-neutral-300 rounded-lg text-sm space-y-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-black"
                  >
                    <div className="font-bold text-black uppercase tracking-wider text-xs">
                      Contact LottoTrack Pro
                    </div>
                    <div className="text-neutral-700">
                      Phone: <span className="font-mono">{getPhone()}</span>
                    </div>
                    <div className="text-neutral-700">
                      Email: <span className="font-mono">{getEmail()}</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Form */}
              <div className="lg:col-span-7 lg:border-l border-neutral-200 lg:pl-12">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-black">Request a Demo</h3>
                  <p className="text-sm text-neutral-600 mt-1">
                    See LottoTrack Pro in action and ask questions about your lottery operation.
                  </p>
                </div>

                {/* Success Message */}
                {formSuccess && (
                  <div className="p-4 mb-6 bg-neutral-100 border border-neutral-400 text-black text-sm rounded">
                    {formSuccess}
                  </div>
                )}

                {/* Error Message */}
                {formError && (
                  <div className="p-4 mb-6 bg-red-50 border border-red-500 text-red-800 text-sm rounded">
                    {formError}
                  </div>
                )}

                {/* Unconnected Form State (Fallback mailto) */}
                {formSubmitted && CONFIG.FORM_ENDPOINT.trim() === "" && (
                  <div className="p-4 mb-6 bg-neutral-100 border border-neutral-400 text-black text-sm rounded leading-relaxed">
                    <strong>This form is not connected yet.</strong>
                    <br />
                    To send your request directly,{" "}
                    <a href={mailtoUrl} className="font-bold underline text-black">
                      click here to email {mailtoRecipient}
                    </a>{" "}
                    with your entered details.
                  </div>
                )}

                <form onSubmit={handleFormSubmit} noValidate className="space-y-4">
                  {/* Anti-spam honeypot */}
                  <input
                    type="text"
                    name="hpWebsite"
                    value={formData.hpWebsite}
                    onChange={handleInputChange}
                    tabIndex={-1}
                    autoComplete="off"
                    className="absolute opacity-0 pointer-events-none h-0 w-0 p-0 m-0"
                    aria-hidden="true"
                  />

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="demo-name" className="block text-xs font-semibold text-black mb-1">
                        Name <span className="text-neutral-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="demo-name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className={`w-full px-3.5 py-2 text-sm bg-neutral-50 border rounded focus:outline-none focus:ring-2 focus:ring-black ${
                          fieldErrors.name ? "border-red-500" : "border-neutral-300"
                        }`}
                      />
                      {fieldErrors.name && (
                        <span className="text-xs text-red-500 mt-1 block">{fieldErrors.name}</span>
                      )}
                    </div>

                    <div>
                      <label htmlFor="demo-email" className="block text-xs font-semibold text-black mb-1">
                        Email <span className="text-neutral-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="demo-email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className={`w-full px-3.5 py-2 text-sm bg-neutral-50 border rounded focus:outline-none focus:ring-2 focus:ring-black ${
                          fieldErrors.email ? "border-red-500" : "border-neutral-300"
                        }`}
                      />
                      {fieldErrors.email && (
                        <span className="text-xs text-red-500 mt-1 block">{fieldErrors.email}</span>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="demo-phone" className="block text-xs font-semibold text-black mb-1">
                        Phone
                      </label>
                      <input
                        type="tel"
                        id="demo-phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-3.5 py-2 text-sm bg-neutral-50 border border-neutral-300 rounded focus:outline-none focus:ring-2 focus:ring-black"
                      />
                    </div>

                    <div>
                      <label htmlFor="demo-store" className="block text-xs font-semibold text-black mb-1">
                        Store / Company
                      </label>
                      <input
                        type="text"
                        id="demo-store"
                        name="store"
                        value={formData.store}
                        onChange={handleInputChange}
                        className="w-full px-3.5 py-2 text-sm bg-neutral-50 border border-neutral-300 rounded focus:outline-none focus:ring-2 focus:ring-black"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="demo-state" className="block text-xs font-semibold text-black mb-1">
                      State
                    </label>
                    <select
                      id="demo-state"
                      name="state"
                      value={formData.state}
                      onChange={handleInputChange}
                      className="w-full px-3.5 py-2 text-sm bg-neutral-50 border border-neutral-300 rounded focus:outline-none focus:ring-2 focus:ring-black"
                    >
                      <option value="GA">Georgia</option>
                      <option value="AL">Alabama</option>
                      <option value="FL">Florida</option>
                      <option value="NC">North Carolina</option>
                      <option value="SC">South Carolina</option>
                      <option value="TN">Tennessee</option>
                      <option value="OTHER">Other State</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="demo-message" className="block text-xs font-semibold text-black mb-1">
                      Message
                    </label>
                    <textarea
                      id="demo-message"
                      name="message"
                      rows={3}
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="What would you like to see?"
                      className="w-full px-3.5 py-2 text-sm bg-neutral-50 border border-neutral-300 rounded focus:outline-none focus:ring-2 focus:ring-black resize-y"
                    />
                  </div>

                  <p className="text-xs text-neutral-500">
                    [PRIVACY LINE: owner to confirm]
                  </p>

                  <button
                    type="submit"
                    disabled={formSending}
                    className="w-full py-3 px-6 bg-black text-white font-semibold text-sm rounded hover:bg-neutral-800 transition-colors disabled:opacity-60"
                  >
                    {formSending ? "Sending..." : "Request a Demo"}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ====================================================================
           FOOTER
           ==================================================================== */}
      <footer className="border-t border-neutral-200 bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div className="space-y-1">
            <div className="text-base font-extrabold text-black">LottoTrack Pro</div>
            <div className="text-xs text-neutral-500">
              Retail Lottery POS and Shift Tracking System.
            </div>
          </div>

          <div className="text-xs text-neutral-500 space-y-1 font-mono">
            <div>{getCompany()}</div>
            <div>Phone: {getPhone()}</div>
            <div>Email: {getEmail()}</div>
          </div>

          <div className="flex gap-6 text-xs text-neutral-500">
            <a href="#how" className="hover:text-black transition-colors">How It Works</a>
            <a href="#benefits" className="hover:text-black transition-colors">Benefits</a>
            <a href="#faq" className="hover:text-black transition-colors">FAQ</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
