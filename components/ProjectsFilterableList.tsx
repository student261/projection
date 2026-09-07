"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import {
  ArrowUpRight,
  Filter,
  X,
  FileText,
  Video,
  Sparkles,
  LayoutGrid,
  List,
  MapPin,
  Search,
  SlidersHorizontal,
  Eye,
  Zap,
  ChevronRight,
  Layers,
  Globe2,
  CheckCircle2,
} from "lucide-react";
import SafeImage from "@/components/SafeImage";

export interface ProjectItem {
  id: string;
  slug: string;
  title: string;
  solution: string;
  industry: string;
  type: string;
  metrics: string;
  desc: string;
  img: string;
  location?: string;
  year?: string;
  client?: string;
  techStack?: string[];
}

const SOLUTIONS = [
  "Interactive Spaces",
  "Immersive Environments",
  "AI Experiences",
  "Smart Engagement",
];

const INDUSTRIES = [
  "Education",
  "Museums & Culture",
  "Retail & Showrooms",
  "Healthcare",
  "Entertainment",
  "Hospitality",
  "Corporate",
  "Public Spaces",
];

interface ProjectsFilterableListProps {
  initialProjects: ProjectItem[];
}

export default function ProjectsFilterableList({ initialProjects }: ProjectsFilterableListProps) {
  const [selectedSolutions, setSelectedSolutions] = useState<string[]>([]);
  const [selectedIndustries, setSelectedIndustries] = useState<string[]>([]);
  const [activeTypeTab, setActiveTypeTab] = useState<"all" | "case-study" | "videos">("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState<"default" | "newest" | "title">("default");
  const [viewMode, setViewMode] = useState<"list" | "grid">("list");
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);
  const [quickViewProject, setQuickViewProject] = useState<ProjectItem | null>(null);

  const toggleSolution = (sol: string) => {
    setSelectedSolutions((prev) =>
      prev.includes(sol) ? prev.filter((item) => item !== sol) : [...prev, sol]
    );
  };

  const toggleIndustry = (ind: string) => {
    setSelectedIndustries((prev) =>
      prev.includes(ind) ? prev.filter((item) => item !== ind) : [...prev, ind]
    );
  };

  const clearAllFilters = () => {
    setSelectedSolutions([]);
    setSelectedIndustries([]);
    setActiveTypeTab("all");
    setSearchQuery("");
    setSortBy("default");
  };

  const filteredProjects = useMemo(() => {
    let result = initialProjects.filter((p) => {
      const matchSolution =
        selectedSolutions.length === 0 || selectedSolutions.includes(p.solution);
      const matchIndustry =
        selectedIndustries.length === 0 || selectedIndustries.includes(p.industry);

      let matchType = true;
      if (activeTypeTab === "case-study") {
        matchType = p.type.toLowerCase().includes("case study");
      } else if (activeTypeTab === "videos") {
        matchType =
          p.type.toLowerCase().includes("video") ||
          p.type.toLowerCase().includes("installation");
      }

      const query = searchQuery.toLowerCase().trim();
      const matchSearch =
        query === "" ||
        p.title.toLowerCase().includes(query) ||
        p.desc.toLowerCase().includes(query) ||
        (p.location && p.location.toLowerCase().includes(query)) ||
        p.solution.toLowerCase().includes(query) ||
        p.industry.toLowerCase().includes(query);

      return matchSolution && matchIndustry && matchType && matchSearch;
    });

    if (sortBy === "newest") {
      result = [...result].sort((a, b) => Number(b.year || "2025") - Number(a.year || "2025"));
    } else if (sortBy === "title") {
      result = [...result].sort((a, b) => a.title.localeCompare(b.title));
    }

    return result;
  }, [initialProjects, selectedSolutions, selectedIndustries, activeTypeTab, searchQuery, sortBy]);

  const activeFilterCount =
    selectedSolutions.length +
    selectedIndustries.length +
    (activeTypeTab !== "all" ? 1 : 0) +
    (searchQuery !== "" ? 1 : 0);

  return (
    <div className="relative min-h-[60vh] space-y-12">
      {/* Top Architectural Filter & Control Toolbar */}
      <div className="bg-white border border-black/10 rounded-2xl p-4 sm:p-6 shadow-sm space-y-4">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          {/* Search Box */}
          <div className="relative w-full lg:w-80">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-black/50" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search projects, cities, or tech..."
              className="w-full pl-10 pr-8 py-2.5 bg-gray-50 border border-black/15 text-xs text-black focus:outline-none focus:border-black focus:bg-white transition-all rounded-xl placeholder:text-black/40"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-black/40 hover:text-black"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* Center Type Tabs */}
          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={() => setActiveTypeTab("all")}
              className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-[0.08em] transition-all cursor-pointer flex items-center gap-1.5 ${
                activeTypeTab === "all"
                  ? "bg-black text-white shadow-md"
                  : "bg-gray-100 text-black/70 hover:text-black hover:bg-gray-200 border border-black/5"
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>All ({initialProjects.length})</span>
            </button>

            <button
              onClick={() => setActiveTypeTab("case-study")}
              className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-[0.08em] transition-all cursor-pointer flex items-center gap-1.5 ${
                activeTypeTab === "case-study"
                  ? "bg-black text-white shadow-md"
                  : "bg-gray-100 text-black/70 hover:text-black hover:bg-gray-200 border border-black/5"
              }`}
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Case Studies</span>
            </button>

            <button
              onClick={() => setActiveTypeTab("videos")}
              className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-[0.08em] transition-all cursor-pointer flex items-center gap-1.5 ${
                activeTypeTab === "videos"
                  ? "bg-black text-white shadow-md"
                  : "bg-gray-100 text-black/70 hover:text-black hover:bg-gray-200 border border-black/5"
              }`}
            >
              <Video className="w-3.5 h-3.5" />
              <span>Installations & Videos</span>
            </button>
          </div>

          {/* Right Sort & View Controls */}
          <div className="flex items-center gap-3 shrink-0">
            {/* Sort Selector */}
            <div className="flex items-center gap-2 border border-black/15 px-3 py-2 bg-gray-50 rounded-xl text-xs">
              <SlidersHorizontal className="w-3.5 h-3.5 text-black/60" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="bg-transparent text-black font-bold focus:outline-none cursor-pointer"
              >
                <option value="default">Sort: Featured</option>
                <option value="newest">Sort: Newest (2026)</option>
                <option value="title">Sort: Title (A-Z)</option>
              </select>
            </div>

            {/* View Mode Switcher */}
            <div className="flex items-center border border-black/15 p-1 bg-gray-50 rounded-xl">
              <button
                onClick={() => setViewMode("list")}
                className={`p-2 rounded-lg transition-all cursor-pointer ${
                  viewMode === "list"
                    ? "bg-black text-white shadow-sm"
                    : "text-black/60 hover:text-black"
                }`}
                title="List View"
                aria-label="List View"
              >
                <List className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode("grid")}
                className={`p-2 rounded-lg transition-all cursor-pointer ${
                  viewMode === "grid"
                    ? "bg-black text-white shadow-sm"
                    : "text-black/60 hover:text-black"
                }`}
                title="Grid View"
                aria-label="Grid View"
              >
                <LayoutGrid className="w-4 h-4" />
              </button>
            </div>

            {/* Mobile Filter Trigger */}
            <button
              onClick={() => setMobileFilterOpen(!mobileFilterOpen)}
              className="lg:hidden flex items-center gap-2 px-4 py-2 bg-black text-white text-xs uppercase tracking-widest rounded-xl cursor-pointer"
            >
              <Filter className="w-3.5 h-3.5" />
              <span>Filter ({activeFilterCount})</span>
            </button>
          </div>
        </div>

        {/* Active Filter Badges Ticker */}
        {activeFilterCount > 0 && (
          <div className="flex flex-wrap items-center gap-2 pt-3 border-t border-black/10">
            <span className="text-[10px] font-bold uppercase tracking-wider text-black/50 mr-2">
              Active Filters ({activeFilterCount}):
            </span>

            {searchQuery && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-black text-white text-[10px] rounded-full">
                <span>Search: "{searchQuery}"</span>
                <button onClick={() => setSearchQuery("")} className="hover:text-red-300 font-bold ml-1">
                  ×
                </button>
              </span>
            )}

            {selectedSolutions.map((sol) => (
              <span
                key={sol}
                className="inline-flex items-center gap-1.5 px-3 py-1 bg-black/5 border border-black/15 text-[10px] text-black rounded-full"
              >
                <span>{sol}</span>
                <button onClick={() => toggleSolution(sol)} className="hover:text-red-600 font-bold ml-1">
                  ×
                </button>
              </span>
            ))}

            {selectedIndustries.map((ind) => (
              <span
                key={ind}
                className="inline-flex items-center gap-1.5 px-3 py-1 bg-black/5 border border-black/15 text-[10px] text-black rounded-full"
              >
                <span>{ind}</span>
                <button onClick={() => toggleIndustry(ind)} className="hover:text-red-600 font-bold ml-1">
                  ×
                </button>
              </span>
            ))}

            <button
              onClick={clearAllFilters}
              className="text-[10px] text-black/60 hover:text-black underline underline-offset-4 ml-auto uppercase tracking-wider cursor-pointer"
            >
              Reset All
            </button>
          </div>
        )}
      </div>

      {/* Catalog Main Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left Sidebar Filters */}
        <aside
          className={`lg:col-span-3 space-y-8 bg-white border border-black/10 p-6 rounded-2xl shadow-sm ${
            mobileFilterOpen ? "block" : "hidden lg:block"
          }`}
        >
          <div className="flex items-center justify-between border-b border-black/10 pb-4">
            <h3 className="uppercase tracking-[0.2em] text-black flex items-center gap-2">
              <Filter className="w-3.5 h-3.5 text-black" />
              <span>Catalog Filters</span>
            </h3>
            {activeFilterCount > 0 && (
              <button
                onClick={clearAllFilters}
                className="text-[10px] text-black/60 hover:text-black flex items-center gap-1 uppercase tracking-widest cursor-pointer underline underline-offset-4"
              >
                Clear ({activeFilterCount})
              </button>
            )}
          </div>

          {/* Group 1: Solution Capability */}
          <div className="space-y-4">
            <h4 className="text-[11px] uppercase text-black/50 flex items-center gap-1.5">
              <Zap className="w-3 h-3 text-black" />
              <span>Solution Capability</span>
            </h4>
            <div className="space-y-2.5">
              {SOLUTIONS.map((sol) => {
                const checked = selectedSolutions.includes(sol);
                return (
                  <label
                    key={sol}
                    className="flex items-center gap-3 text-xs text-black/70 hover:text-black cursor-pointer select-none group"
                  >
                    <div
                      className={`w-4 h-4 rounded-md border transition-all flex items-center justify-center ${
                        checked
                          ? "bg-black border-black text-white shadow-sm"
                          : "border-black/30 group-hover:border-black bg-white"
                      }`}
                    >
                      {checked && <CheckCircle2 className="w-3.5 h-3.5 text-white" />}
                    </div>
                    <input
                      type="checkbox"
                      checked={checked}
                      onChange={() => toggleSolution(sol)}
                      className="sr-only"
                    />
                    <span
                      className={`transition-colors ${
                        checked ? "text-black font-bold" : "text-black/70 group-hover:text-black"
                      }`}
                    >
                      {sol}
                    </span>
                  </label>
                );
              })}
            </div>
          </div>

          <div className="w-full border-t border-black/10" />

          {/* Group 2: Industry Sector */}
          <div className="space-y-4">
            <h4 className="text-[11px] uppercase text-black/50 flex items-center gap-1.5">
              <Globe2 className="w-3 h-3 text-black" />
              <span>Industry Sector</span>
            </h4>
            <div className="space-y-2.5">
              {INDUSTRIES.map((ind) => {
                const checked = selectedIndustries.includes(ind);
                return (
                  <label
                    key={ind}
                    className="flex items-center gap-3 text-xs text-black/70 hover:text-black cursor-pointer select-none group"
                  >
                    <div
                      className={`w-4 h-4 rounded-md border transition-all flex items-center justify-center ${
                        checked
                          ? "bg-black border-black text-white shadow-sm"
                          : "border-black/30 group-hover:border-black bg-white"
                      }`}
                    >
                      {checked && <CheckCircle2 className="w-3.5 h-3.5 text-white" />}
                    </div>
                    <input
                      type="checkbox"
                      checked={checked}
                      onChange={() => toggleIndustry(ind)}
                      className="sr-only"
                    />
                    <span
                      className={`transition-colors ${
                        checked ? "text-black font-bold" : "text-black/70 group-hover:text-black"
                      }`}
                    >
                      {ind}
                    </span>
                  </label>
                );
              })}
            </div>
          </div>
        </aside>

        {/* Right Main Projects Showcase Area */}
        <main className="lg:col-span-9 space-y-6">
          {/* Header Counter & Status */}
          <div className="flex items-center justify-between border-b border-black/10 pb-4">
            <span className="text-xs uppercase tracking-[0.2em] font-bold text-black flex items-center gap-2">
              <Layers className="w-4 h-4 text-black" />
              <span>Showing {filteredProjects.length} {filteredProjects.length === 1 ? "Installation" : "Installations"}</span>
            </span>
            <span className="text-[10px] text-black/50 uppercase">
              PROJECTION STUDIO ARCHIVE
            </span>
          </div>

          {/* Empty State */}
          {filteredProjects.length === 0 ? (
            <div className="py-24 text-center border border-black/10 p-8 bg-white space-y-4 rounded-2xl shadow-sm">
              <div className="w-12 h-12 rounded-2xl bg-gray-100 border border-black/10 flex items-center justify-center mx-auto text-black">
                <Search className="w-6 h-6" />
              </div>
              <h3 className="text-black">No installations match your criteria</h3>
              <p className="text-xs font-light text-black/70 max-w-md mx-auto">
                Try adjusting your search keywords, clear filters, or view all global projects.
              </p>
              <button
                onClick={clearAllFilters}
                className="px-6 py-3 bg-black text-white text-xs uppercase tracking-widest hover:bg-gray-800 transition-all cursor-pointer rounded-xl shadow-md"
              >
                Reset Catalog Filters
              </button>
            </div>
          ) : viewMode === "list" ? (
            /* Luxury Editorial List View */
            <div className="space-y-6">
              {filteredProjects.map((p, index) => {
                const indexNum = String(index + 1).padStart(2, "0");
                return (
                  <article
                    key={p.id}
                    className="group bg-white border border-black/10 rounded-2xl p-5 sm:p-6 transition-all duration-300 hover:shadow-xl hover:border-black/30 relative overflow-hidden"
                  >
                    <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
                      {/* Left Oversized Monospace Index & Framed Thumbnail */}
                      <div className="flex items-center gap-5 w-full lg:w-auto shrink-0">
                        <span className="text-2xl sm:text-4xl font-black text-black/20 group-hover:text-black transition-colors duration-300 shrink-0">
                          {indexNum}
                        </span>

                        <div className="w-full sm:w-72 aspect-[16/10] border border-black/15 overflow-hidden relative group/img bg-gray-900 rounded-xl shadow-md shrink-0">
                          <SafeImage
                            src={p.img}
                            alt={p.title}
                            className="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-700"
                            containerClassName="w-full h-full"
                          />
                          <div className="absolute top-2.5 left-2.5 z-10">
                            <span className="text-[9px] font-bold tracking-wider text-white bg-black/80 backdrop-blur-md px-2.5 py-1 rounded-full uppercase border border-white/20">
                              {p.type}
                            </span>
                          </div>

                          {/* Quick View Button Overlay */}
                          <button
                            onClick={() => setQuickViewProject(p)}
                            className="absolute bottom-2.5 right-2.5 z-10 opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 bg-white/95 text-black px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider flex items-center gap-1 shadow-lg cursor-pointer hover:bg-black hover:text-white"
                          >
                            <Eye className="w-3 h-3" />
                            <span>Quick View</span>
                          </button>
                        </div>
                      </div>

                      {/* Middle Details & Badges */}
                      <div className="space-y-3 flex-1">
                        <div className="flex flex-wrap items-center gap-3 text-[10px] uppercase text-black/60">
                          {p.location && (
                            <span className="flex items-center gap-1 bg-gray-100 px-2.5 py-1 rounded-full text-black font-semibold">
                              <MapPin className="w-3 h-3 text-black" />
                              <span>{p.location}</span>
                            </span>
                          )}
                          {p.year && <span className="bg-gray-100 px-2.5 py-1 rounded-full text-black font-bold">• {p.year}</span>}
                        </div>

                        <Link
                          href={`/projects/${p.slug}`}
                          className="inline-flex items-center gap-2 text-xl sm:text-2xl font-bold text-black tracking-tight group-hover:text-black transition-colors"
                        >
                          <span>{p.title}</span>
                          <ArrowUpRight className="w-5 h-5 text-black opacity-40 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                        </Link>

                        <p className="text-xs text-black/75 font-light leading-relaxed max-w-xl line-clamp-2">
                          {p.desc}
                        </p>

                        <div className="flex flex-wrap items-center gap-2 pt-1">
                          <span className="px-3 py-1 bg-black text-white text-[10px] font-bold uppercase rounded-full shadow-sm">
                            {p.solution}
                          </span>
                          <span className="px-3 py-1 bg-gray-100 border border-black/10 text-black text-[10px] font-semibold uppercase rounded-full">
                            {p.industry}
                          </span>
                        </div>
                      </div>

                      {/* Right High-Impact Metric & Action Button */}
                      <div className="flex flex-col sm:items-end justify-between gap-4 shrink-0 pt-3 lg:pt-0 w-full lg:w-auto border-t lg:border-t-0 border-black/10">
                        <div className="bg-black text-white px-4 py-2 rounded-full text-xs font-bold flex items-center gap-2 shadow-md">
                          <Zap className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" />
                          <span>{p.metrics}</span>
                        </div>

                        <Link
                          href={`/projects/${p.slug}`}
                          className="px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-black hover:bg-gray-800 transition-all duration-200 shadow-md inline-flex items-center gap-2 cursor-pointer w-full sm:w-auto justify-center"
                        >
                          <span>Explore Case Study</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          ) : (
            /* Luxury Grid View Cards */
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredProjects.map((p, index) => {
                const indexNum = String(index + 1).padStart(2, "0");
                return (
                  <article
                    key={p.id}
                    className="bg-white border border-black/10 rounded-2xl group flex flex-col justify-between overflow-hidden hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
                  >
                    <div>
                      {/* Top Framed Image */}
                      <div className="aspect-[16/10] border-b border-black/10 overflow-hidden relative group/img bg-gray-900">
                        <SafeImage
                          src={p.img}
                          alt={p.title}
                          className="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-700"
                          containerClassName="w-full h-full"
                        />
                        <div className="absolute top-3 left-3 bg-black/80 backdrop-blur-md border border-white/20 px-3 py-1 text-[10px] font-bold text-white uppercase tracking-wider rounded-full flex items-center gap-2 shadow-lg">
                          <span className="text-white/60">{indexNum}</span>
                          <span>•</span>
                          <span>{p.metrics}</span>
                        </div>

                        <button
                          onClick={() => setQuickViewProject(p)}
                          className="absolute bottom-3 right-3 opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 bg-white/95 text-black px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider flex items-center gap-1 shadow-lg cursor-pointer hover:bg-black hover:text-white"
                        >
                          <Eye className="w-3 h-3" />
                          <span>Quick View</span>
                        </button>
                      </div>

                      {/* Content Body */}
                      <div className="p-6 space-y-3">
                        <div className="flex items-center justify-between text-[10px] text-black/60 uppercase">
                          <span className="flex items-center gap-1">
                            <MapPin className="w-3 h-3 text-black/50" />
                            <span>{p.location || "Global Installation"}</span>
                          </span>
                          <span className="px-2.5 py-0.5 bg-gray-100 text-black font-semibold rounded-full border border-black/10">
                            {p.type}
                          </span>
                        </div>

                        <Link
                          href={`/projects/${p.slug}`}
                          className="block text-xl font-bold text-black tracking-tight group-hover:underline underline-offset-4"
                        >
                          {p.title}
                        </Link>

                        <p className="text-xs text-black/75 font-light leading-relaxed line-clamp-2">
                          {p.desc}
                        </p>
                      </div>
                    </div>

                    {/* Footer Action Bar */}
                    <div className="px-6 py-4 border-t border-black/10 bg-gray-50 flex items-center justify-between text-[10px]">
                      <span className="font-bold text-black bg-white px-2.5 py-1 rounded-full border border-black/10">
                        {p.solution}
                      </span>
                      <Link
                        href={`/projects/${p.slug}`}
                        className="font-bold text-black uppercase tracking-wider flex items-center gap-1 hover:underline"
                      >
                        <span>Case Study</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </article>
                );
              })}
            </div>
          )}
        </main>
      </div>

      {/* Interactive Quick View Modal */}
      {quickViewProject && (
        <div className="fixed inset-0 z-[2000] flex items-center justify-center p-4 bg-black/60 backdrop-blur-md transition-all animate-fadeIn">
          <div className="bg-white border border-black/15 rounded-3xl max-w-2xl w-full p-6 sm:p-8 space-y-6 shadow-2xl relative max-h-[90vh] overflow-y-auto">
            {/* Close Button */}
            <button
              onClick={() => setQuickViewProject(null)}
              className="absolute top-5 right-5 w-9 h-9 rounded-full bg-gray-100 text-black hover:bg-black hover:text-white transition-colors flex items-center justify-center cursor-pointer shadow-sm"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header Badge & Title */}
            <div className="space-y-2">
              <div className="flex flex-wrap items-center gap-2 text-[10px] uppercase">
                <span className="px-3 py-1 bg-black text-white rounded-full font-bold">
                  {quickViewProject.solution}
                </span>
                <span className="px-3 py-1 bg-gray-100 text-black rounded-full font-semibold border border-black/10">
                  {quickViewProject.industry}
                </span>
                {quickViewProject.location && (
                  <span className="text-black/60 flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    <span>{quickViewProject.location}</span>
                  </span>
                )}
              </div>

              <h3 className="text-black">
                {quickViewProject.title}
              </h3>
            </div>

            {/* High Res Showcase Image */}
            <div className="aspect-[16/9] rounded-2xl overflow-hidden relative border border-black/10 shadow-lg">
              <SafeImage
                src={quickViewProject.img}
                alt={quickViewProject.title}
                className="w-full h-full object-cover"
                containerClassName="w-full h-full"
              />
              <div className="absolute top-3 left-3 bg-black/80 text-white backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold uppercase border border-white/20">
                ⚡ {quickViewProject.metrics}
              </div>
            </div>

            {/* Description & Detail Overview */}
            <div className="space-y-4 text-black">
              <p className="text-sm font-light leading-relaxed text-black/80">
                {quickViewProject.desc}
              </p>

              <div className="p-4 bg-gray-50 border border-black/10 rounded-2xl grid grid-cols-2 gap-4 text-xs">
                <div>
                  <span className="text-black/50 block text-[10px] uppercase font-bold">Year Completed</span>
                  <span className="font-bold text-black">{quickViewProject.year || "2026"}</span>
                </div>
                <div>
                  <span className="text-black/50 block text-[10px] uppercase font-bold">Installation Type</span>
                  <span className="font-bold text-black">{quickViewProject.type}</span>
                </div>
              </div>
            </div>

            {/* Modal Actions */}
            <div className="flex items-center justify-between pt-2 border-t border-black/10">
              <button
                onClick={() => setQuickViewProject(null)}
                className="px-5 py-2.5 text-xs uppercase text-black/60 hover:text-black font-bold cursor-pointer"
              >
                Close Preview
              </button>
              <Link
                href={`/projects/${quickViewProject.slug}`}
                className="px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-black hover:bg-gray-800 transition-all shadow-md flex items-center gap-2"
              >
                <span>Read Full Case Study</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
