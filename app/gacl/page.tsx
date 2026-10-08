"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Search,
  Menu,
  ChevronDown,
  ArrowRight,
  Calendar,
  FlaskConical,
  Globe2,
  Atom,
  Handshake,
  Leaf,
  Recycle,
  Users2,
  Ship,
  Factory,
  Compass,
  CheckCircle2,
  ExternalLink,
  ChevronRight,
} from "lucide-react";

export default function GACLPage() {
  const [activeTab, setActiveTab] = useState("all");

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans antialiased selection:bg-teal-500 selection:text-white">
      {/* =========================================================================
          01 / HEADER + HERO & METRICS
      ========================================================================= */}
      <header className="relative bg-white border-b border-slate-100 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* GACL Logo */}
            <div className="flex items-center gap-3">
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <span className="text-3xl font-black tracking-tight text-[#002B49] flex items-center">
                    Ga<span className="relative inline-block text-teal-600">c<span className="absolute -top-2 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-teal-500"></span></span>l
                  </span>
                </div>
                <span className="text-[10px] tracking-wide text-slate-500 uppercase font-medium">
                  Gujarat Alkalies and Chemicals Limited
                </span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-7 text-xs font-semibold text-slate-700 uppercase tracking-wider">
              <a href="#hero" className="text-[#002B49] border-b-2 border-teal-500 pb-1">Home</a>
              <a href="#journey" className="hover:text-teal-600 transition-colors">About</a>
              <a href="#products" className="hover:text-teal-600 transition-colors">Products</a>
              <a href="#applications" className="hover:text-teal-600 transition-colors">Applications</a>
              <a href="#sustainability" className="hover:text-teal-600 transition-colors">Sustainability</a>
              <a href="#innovation" className="hover:text-teal-600 transition-colors">Innovation</a>
              <a href="#reach" className="hover:text-teal-600 transition-colors">Global Reach</a>
              <a href="#news" className="hover:text-teal-600 transition-colors">News</a>
            </nav>

            {/* Quick Access & Tools */}
            <div className="flex items-center space-x-5">
              <button className="text-slate-500 hover:text-[#002B49] transition-colors p-1.5" aria-label="Search">
                <Search className="w-4 h-4" />
              </button>
              <div className="hidden sm:flex items-center gap-1 text-xs font-semibold text-slate-700 hover:text-teal-600 cursor-pointer border border-slate-200 rounded-full px-3 py-1.5">
                <span>Quick Access</span>
                <ChevronDown className="w-3.5 h-3.5" />
              </div>
              <button className="lg:hidden text-slate-700 p-2" aria-label="Menu">
                <Menu className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Banner */}
      <section id="hero" className="relative overflow-hidden bg-gradient-to-r from-slate-50 via-white to-blue-50/30 pt-12 pb-16 lg:py-20 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-6 z-10">
              <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-teal-600 uppercase bg-teal-50 px-3 py-1 rounded-full border border-teal-200/60">
                <span>01</span>
                <span>/</span>
                <span>HEADER + HERO</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#002B49] leading-[1.15] tracking-tight">
                Chemistry that helps build{" "}
                <span className="text-teal-600 block sm:inline">India’s future.</span>
              </h1>

              <p className="text-base sm:text-lg text-slate-600 max-w-xl leading-relaxed font-normal">
                From commodity chemicals to speciality chemicals, advanced technology and sustainable growth — GACL is powering India’s journey towards 2047.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href="#products"
                  className="inline-flex items-center gap-2 bg-[#002B49] hover:bg-[#001f35] text-white px-7 py-3.5 rounded-full font-semibold text-sm transition-all duration-200 shadow-sm hover:shadow-md group"
                >
                  <span>Explore Products</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="#journey"
                  className="inline-flex items-center gap-2 bg-white hover:bg-slate-50 text-[#002B49] border border-slate-300 px-7 py-3.5 rounded-full font-semibold text-sm transition-all duration-200 hover:border-slate-400"
                >
                  <span>Discover GACL</span>
                </a>
              </div>
            </div>

            {/* Right Visual with Viksit Bharat Tag */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200/80 bg-slate-900 group">
                <img
                  src="/sections_9/sec_01_header_hero_2x.png"
                  alt="GACL Industrial Facility at Sunrise"
                  className="w-full h-auto object-cover object-center group-hover:scale-[1.02] transition-transform duration-700"
                />
                {/* Viksit Bharat Tag Badge */}
                <div className="absolute top-6 right-6 bg-slate-900/80 backdrop-blur-md border border-white/20 text-white px-4 py-2 rounded-xl text-right">
                  <div className="flex items-center justify-end gap-1.5">
                    <span className="w-2 h-0.5 bg-teal-400"></span>
                    <span className="text-[10px] tracking-widest uppercase font-semibold text-teal-300">VIKSIT BHARAT</span>
                  </div>
                  <div className="text-2xl font-black tracking-tight text-white/90">2047</div>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Bar */}
          <div className="mt-14 pt-8 border-t border-slate-200/80 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center gap-4 p-4 rounded-xl hover:bg-slate-50 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-teal-50 border border-teal-200 flex items-center justify-center text-teal-600">
                <Calendar className="w-6 h-6" />
              </div>
              <div>
                <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Since</div>
                <div className="text-2xl font-bold text-[#002B49]">1973</div>
                <div className="text-xs text-slate-500">Our Journey</div>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 rounded-xl hover:bg-slate-50 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600">
                <FlaskConical className="w-6 h-6" />
              </div>
              <div>
                <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Experience</div>
                <div className="text-2xl font-bold text-[#002B49]">50+</div>
                <div className="text-xs text-slate-500">Years of Excellence</div>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 rounded-xl hover:bg-slate-50 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600">
                <Globe2 className="w-6 h-6" />
              </div>
              <div>
                <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Global Reach</div>
                <div className="text-2xl font-bold text-[#002B49]">60+</div>
                <div className="text-xs text-slate-500">Countries Worldwide</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          02 / OUR JOURNEY
      ========================================================================= */}
      <section id="journey" className="py-20 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Narrative */}
            <div className="lg:col-span-5 space-y-5">
              <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-teal-600 uppercase bg-teal-50 px-3 py-1 rounded-full">
                <span>02</span>
                <span>/</span>
                <span>OUR JOURNEY</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#002B49] leading-tight">
                Built on legacy. <br />
                Moving toward the future.
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                Since 1973, GACL has grown alongside India’s industrial journey — expanding its capabilities, product portfolio and global presence while continuing to invest in technology and sustainability.
              </p>
              <div>
                <a
                  href="#journey"
                  className="inline-flex items-center gap-2 text-teal-700 hover:text-teal-800 font-bold text-sm tracking-wide group"
                >
                  <span>Explore Our Journey</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>

            {/* Right Timeline Cards */}
            <div className="lg:col-span-7">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                {/* 1973 Card */}
                <div className="group rounded-xl overflow-hidden border border-slate-200 bg-white hover:shadow-lg transition-all">
                  <div className="p-4 border-b border-slate-100">
                    <span className="text-lg font-bold text-[#002B49]">1973</span>
                    <p className="text-xs text-slate-500">Our Beginning</p>
                  </div>
                  <div className="h-40 overflow-hidden bg-slate-100">
                    <img
                      src="/sections_9/sec_02_our_journey_2x.png"
                      alt="1973 Foundation"
                      className="w-full h-full object-cover object-left group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>

                {/* TODAY Card */}
                <div className="group rounded-xl overflow-hidden border border-slate-200 bg-white hover:shadow-lg transition-all">
                  <div className="p-4 border-b border-slate-100">
                    <span className="text-lg font-bold text-[#002B49]">TODAY</span>
                    <p className="text-xs text-slate-500">Stronger. Bigger. Smarter.</p>
                  </div>
                  <div className="h-40 overflow-hidden bg-slate-100">
                    <img
                      src="/sections_9/sec_02_our_journey_2x.png"
                      alt="Modern GACL Complex"
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>

                {/* 2047 Card */}
                <div className="group rounded-xl overflow-hidden border border-slate-200 bg-white hover:shadow-lg transition-all">
                  <div className="p-4 border-b border-slate-100">
                    <span className="text-lg font-bold text-teal-600">2047</span>
                    <p className="text-xs text-slate-500">A Sustainable Tomorrow</p>
                  </div>
                  <div className="h-40 overflow-hidden bg-slate-100">
                    <img
                      src="/sections_9/sec_02_our_journey_2x.png"
                      alt="Futuristic Sustainable Vision"
                      className="w-full h-full object-cover object-right group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          03 / PRODUCTS & SPECIALITY CHEMICALS
      ========================================================================= */}
      <section id="products" className="py-20 bg-[#07172A] text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Description */}
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-teal-400 uppercase bg-teal-900/40 border border-teal-500/30 px-3 py-1 rounded-full">
                <span>03</span>
                <span>/</span>
                <span>PRODUCTS & SPECIALITY CHEMICALS</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
                From essential chemicals to speciality solutions.
              </h2>
              <p className="text-slate-300 text-sm leading-relaxed">
                We are expanding our portfolio with high-value, performance-driven speciality chemicals for tomorrow’s industries.
              </p>
              <div>
                <a
                  href="#products"
                  className="inline-flex items-center gap-2 border border-white/40 hover:border-white text-white px-6 py-3 rounded-full text-xs font-semibold tracking-wide uppercase transition-all duration-200 group"
                >
                  <span>Explore Products</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>

            {/* Right Product Spotlight Image */}
            <div className="lg:col-span-7">
              <div className="relative rounded-2xl overflow-hidden border border-teal-500/20 shadow-2xl group bg-slate-900">
                <img
                  src="/sections_9/sec_03_products_speciality_2x.png"
                  alt="GACL Speciality Chemicals and Laboratory"
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute bottom-6 right-6 bg-slate-950/80 backdrop-blur-md border border-cyan-500/30 p-4 rounded-xl max-w-xs">
                  <div className="text-xs font-bold text-teal-400">Hydrogen Peroxide</div>
                  <p className="text-[11px] text-slate-300 mt-1">Enabling a cleaner, safer and more advanced future.</p>
                  <a href="#products" className="inline-flex items-center gap-1 text-[11px] text-teal-300 hover:text-teal-200 font-semibold mt-2">
                    Know More <ArrowRight className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          04 / APPLICATIONS & INDUSTRIES
      ========================================================================= */}
      <section id="applications" className="py-20 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Title */}
            <div className="lg:col-span-4 space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-teal-600 uppercase bg-teal-50 px-3 py-1 rounded-full">
                <span>04</span>
                <span>/</span>
                <span>APPLICATIONS & INDUSTRIES</span>
              </div>
              <h2 className="text-3xl font-extrabold text-[#002B49] leading-tight">
                Powering industries. <br />Enriching lives.
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                Our chemicals find applications across diverse industries, from electronics to healthcare, agriculture to clean energy.
              </p>
              <div>
                <a href="#applications" className="inline-flex items-center gap-2 text-teal-700 font-bold text-sm group">
                  <span>Explore Applications</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>

            {/* Right Parallelogram Banner Image */}
            <div className="lg:col-span-8">
              <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-lg group">
                <img
                  src="/sections_9/sec_04_applications_industries_2x.png"
                  alt="Industries: Electronics, Pharma, Agriculture, Textiles, Clean Energy"
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          05 / SUSTAINABILITY
      ========================================================================= */}
      <section id="sustainability" className="py-20 bg-gradient-to-b from-white to-emerald-50/30 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-5 space-y-5">
              <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-emerald-700 uppercase bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                <span>05</span>
                <span>/</span>
                <span>SUSTAINABILITY</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#002B49] leading-tight">
                A cleaner planet. <br />A safer tomorrow.
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                We are committed to reducing our environmental footprint and building a more sustainable future for generations to come.
              </p>
              <div>
                <a href="#sustainability" className="inline-flex items-center gap-2 text-emerald-700 hover:text-emerald-800 font-bold text-sm group">
                  <span>Our Sustainability Approach</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>

            {/* Right Showcase Image & Key Pillars */}
            <div className="lg:col-span-7">
              <div className="rounded-2xl overflow-hidden shadow-xl border border-emerald-200/60 group">
                <img
                  src="/sections_9/sec_05_sustainability_2x.png"
                  alt="GACL Sustainability Landscape and Pillars"
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          06 / INNOVATION
      ========================================================================= */}
      <section id="innovation" className="py-20 bg-[#08192E] text-white border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Copy */}
            <div className="lg:col-span-5 space-y-5">
              <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-teal-400 uppercase bg-teal-900/50 border border-teal-500/30 px-3 py-1 rounded-full">
                <span>06</span>
                <span>/</span>
                <span>INNOVATION</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
                Turning ideas into impact.
              </h2>
              <p className="text-slate-300 text-sm leading-relaxed">
                Through advanced technology, R&D and strategic partnerships, we create solutions for a more sustainable and progressive tomorrow.
              </p>
              <div>
                <a href="#innovation" className="inline-flex items-center gap-2 text-teal-400 hover:text-teal-300 font-semibold text-sm group">
                  <span>Our Innovation Journey</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>

            {/* Right Image Banner */}
            <div className="lg:col-span-7">
              <div className="rounded-2xl overflow-hidden border border-slate-700 shadow-2xl group">
                <img
                  src="/sections_9/sec_06_innovation_2x.png"
                  alt="Scientist in R&D Innovation Lab"
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          07 / INDIA + GLOBAL REACH
      ========================================================================= */}
      <section id="reach" className="py-20 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Top Headline */}
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-teal-600 uppercase bg-teal-50 px-3 py-1 rounded-full">
              <span>07</span>
              <span>/</span>
              <span>INDIA + GLOBAL REACH</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#002B49]">
              A global footprint. A stronger India.
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              With a strong presence in India and exports to more than 60 countries, GACL is part of a truly global chemical network.
            </p>
            <div>
              <a href="#reach" className="inline-flex items-center gap-2 text-teal-700 font-bold text-sm group">
                <span>Explore Global Reach</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* Full Graphic Container */}
          <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-xl group">
            <img
              src="/sections_9/sec_07_global_reach_2x.png"
              alt="Global Route Network Map and Indicators"
              className="w-full h-auto object-cover group-hover:scale-[1.02] transition-transform duration-700"
            />
          </div>
        </div>
      </section>

      {/* =========================================================================
          08 / NEWS
      ========================================================================= */}
      <section id="news" className="py-20 bg-slate-50 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          {/* Section Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-teal-600 uppercase bg-teal-50 px-3 py-1 rounded-full">
                <span>08</span>
                <span>/</span>
                <span>NEWS</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#002B49]">
                What’s new at GACL.
              </h2>
              <p className="text-slate-600 text-sm">Stay updated with our latest news, updates and achievements.</p>
            </div>
            <a href="#news" className="inline-flex items-center gap-2 text-teal-700 font-bold text-sm group">
              <span>View All News</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* News Banner Image */}
          <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-xl group">
            <img
              src="/sections_9/sec_08_news_2x.png"
              alt="GACL News Cards and Press Releases"
              className="w-full h-auto object-cover group-hover:scale-[1.02] transition-transform duration-700"
            />
          </div>
        </div>
      </section>

      {/* =========================================================================
          09 / FINAL CTA + FOOTER
      ========================================================================= */}
      <footer id="contact" className="bg-[#051324] text-white">
        {/* Banner with Engineer and Sunrise Industrial Facility */}
        <div className="relative overflow-hidden border-b border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 relative z-10">
            <div className="max-w-2xl space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-teal-400 uppercase bg-teal-900/50 border border-teal-500/30 px-3 py-1 rounded-full">
                <span>09</span>
                <span>/</span>
                <span>FINAL CTA</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
                Together for a stronger, cleaner and more prosperous tomorrow.
              </h2>
              <p className="text-slate-300 text-base leading-relaxed">
                Let’s build the future with sustainable chemistry.
              </p>
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href="#products"
                  className="inline-flex items-center gap-2 bg-white hover:bg-slate-100 text-[#002B49] px-7 py-3.5 rounded-full font-bold text-sm transition-all duration-200 shadow-md group"
                >
                  <span>Explore Products</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 bg-transparent hover:bg-white/10 text-white border border-white/40 px-7 py-3.5 rounded-full font-semibold text-sm transition-all duration-200"
                >
                  <span>Get in Touch</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Background Visual Image */}
          <div className="absolute inset-0 z-0 opacity-40">
            <img
              src="/sections_9/sec_09_final_cta_footer_2x.png"
              alt="GACL Engineer at Sunset Facility"
              className="w-full h-full object-cover object-right"
            />
          </div>
        </div>

        {/* Corporate Footer Navigation */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 pb-10 border-b border-slate-800">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <span className="text-3xl font-black tracking-tight text-white flex items-center">
                Ga<span className="relative inline-block text-teal-400">c<span className="absolute -top-2 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-teal-400"></span></span>l
              </span>
              <div className="border-l border-slate-700 pl-3">
                <span className="text-[11px] tracking-wide text-slate-400 block uppercase font-medium">
                  Gujarat Alkalies and Chemicals Limited
                </span>
              </div>
            </div>

            {/* Links */}
            <nav className="flex flex-wrap justify-center items-center gap-x-6 gap-y-2 text-xs font-semibold text-slate-400 uppercase tracking-wider">
              <a href="#hero" className="hover:text-white transition-colors">Home</a>
              <a href="#journey" className="hover:text-white transition-colors">About</a>
              <a href="#products" className="hover:text-white transition-colors">Products</a>
              <a href="#applications" className="hover:text-white transition-colors">Applications</a>
              <a href="#sustainability" className="hover:text-white transition-colors">Sustainability</a>
              <a href="#innovation" className="hover:text-white transition-colors">Innovation</a>
              <a href="#reach" className="hover:text-white transition-colors">Global Reach</a>
              <a href="#news" className="hover:text-white transition-colors">News</a>
            </nav>

            {/* Search & Quick Access */}
            <div className="flex items-center gap-4 text-xs text-slate-400">
              <button className="flex items-center gap-1.5 hover:text-white transition-colors">
                <Search className="w-4 h-4" />
                <span>Search</span>
              </button>
              <div className="flex items-center gap-1 hover:text-white cursor-pointer">
                <span>Quick Access</span>
                <ChevronDown className="w-3.5 h-3.5" />
              </div>
            </div>
          </div>

          {/* Bottom Copyright & Legal */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
            <div>© 2025 GACL. All rights reserved.</div>
            <div className="flex items-center gap-6">
              <a href="#" className="hover:text-slate-400 transition-colors">Privacy Policy</a>
              <span>|</span>
              <a href="#" className="hover:text-slate-400 transition-colors">Terms & Conditions</a>
            </div>
            <div className="flex items-center gap-4 text-slate-400">
              <a href="#" aria-label="LinkedIn" className="hover:text-white transition-colors">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.64a1.62 1.62 0 0 0-1.63 1.63c0 .9.73 1.63 1.63 1.63s1.63-.73 1.63-1.63c0-.9-.73-1.63-1.63-1.63Z"/></svg>
              </a>
              <a href="#" aria-label="YouTube" className="hover:text-white transition-colors">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="m10 15 5.19-3L10 9v6m11.56-7.83c.13.47.22 1.1.28 1.9.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83-.25.9-.83 1.48-1.73 1.73-.47.13-1.33.22-2.65.28-1.3.07-2.49.1-3.59.1L12 22c-4.19 0-6.8-.16-7.83-.44-.9-.25-1.48-.83-1.73-1.73-.13-.47-.22-1.1-.28-1.9-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83.25-.9.83-1.48 1.73-1.73.47-.13 1.33-.22 2.65-.28 1.3-.07 2.49-.1 3.59-.1L12 2c4.19 0 6.8.16 7.83.44.9.25 1.48.83 1.73 1.73Z"/></svg>
              </a>
              <a href="#" aria-label="Twitter / X" className="hover:text-white transition-colors">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
