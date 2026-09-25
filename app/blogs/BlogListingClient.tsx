"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Search, Filter } from "lucide-react";
import SafeImage from "@/components/SafeImage";

interface Blog {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  img: string;
  readTime: string;
}

export default function BlogListingClient({ blogs }: { blogs: Blog[] }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", ...Array.from(new Set(blogs.map(b => b.category)))];

  const filteredBlogs = blogs.filter(b => {
    const matchesSearch = b.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          b.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === "All" || b.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const featured = filteredBlogs.length > 0 ? filteredBlogs[0] : null;
  const archives = filteredBlogs.length > 1 ? filteredBlogs.slice(1) : [];

  return (
    <>
      {/* Search & Filter Toolbar */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-screen-2xl mx-auto w-full mb-16">
        <div className="flex flex-col md:flex-row gap-6 justify-between items-start md:items-center bg-gray-50 p-6 rounded-2xl border border-black/10">
          
          <div className="relative w-full md:w-96">
            <Search className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-black/40" />
            <input 
              type="text" 
              placeholder="Search insights..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-white border border-black/10 rounded-xl text-base sm:text-sm focus:outline-none focus:ring-2 focus:ring-black/20 transition-all"
            />
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <Filter className="w-4 h-4 text-black/50 mr-2" />
            {categories.map(cat => (
              <button 
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-md text-[10px] font-bold uppercase tracking-widest transition-colors ${
                  activeCategory === cat 
                    ? "bg-black text-white" 
                    : "bg-white text-black/60 border border-black/10 hover:border-black/30"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Article */}
      {featured && (
        <section className="px-4 sm:px-6 lg:px-8 mb-24 max-w-screen-2xl mx-auto w-full">
          <Link 
            href={`/blogs/${featured.slug}`}
            className="group relative block w-full min-h-[460px] sm:min-h-0 h-auto sm:h-[60vh] lg:h-[75vh] overflow-hidden bg-gray-100 rounded-2xl border border-black/10 shadow-lg"
          >
            <SafeImage 
              src={featured.img} 
              alt={featured.title} 
              className="w-full h-full object-cover opacity-90 mix-blend-multiply group-hover:scale-105 group-hover:opacity-100 transition-all duration-[1.5s] ease-out"
              containerClassName="absolute inset-0 w-full h-full bg-gray-100" 
            />
            
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90" />

            <div className="relative sm:absolute inset-0 p-6 sm:p-8 lg:p-16 flex flex-col justify-between h-full">
              <div className="flex justify-between items-start">
                <span className="text-[10px] sm:text-[11px] font-mono font-semibold uppercase tracking-[0.2em] text-white/80">
                  Featured Insight
                </span>
              </div>

              <div className="max-w-4xl mt-auto pt-12 sm:pt-0">
                <div className="flex items-center gap-3 sm:gap-4 text-[9px] sm:text-[10px] font-mono uppercase tracking-[0.2em] font-semibold text-white/80 mb-3 sm:mb-6">
                  <span className="text-white font-bold">{featured.category}</span>
                  <span>•</span>
                  <span>{featured.readTime}</span>
                </div>
                <h2 className="text-2xl sm:text-4xl lg:text-7xl font-black leading-[1.08] sm:leading-[1.05] mb-3 sm:mb-6 tracking-tight text-white group-hover:text-gray-300 transition-all duration-500">
                  {featured.title}
                </h2>
                {/* Excerpt forced visible on featured card */}
                <p className="text-sm sm:text-base lg:text-xl font-light text-white/80 max-w-2xl leading-relaxed">
                  {featured.excerpt}
                </p>
              </div>
            </div>
          </Link>
        </section>
      )}

      {/* The Archives */}
      {archives.length > 0 && (
        <section className="px-4 sm:px-6 lg:px-8 pb-32 max-w-screen-2xl mx-auto w-full">
          <h3 className="text-[10px] font-mono uppercase tracking-[0.3em] font-bold text-black mb-8">
            Recent Publications
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
            {archives.map((b) => (
              <Link
                key={b.id}
                href={`/blogs/${b.slug}`}
                className="group flex flex-col items-start gap-6"
              >
                <div className="w-full aspect-[16/9] overflow-hidden rounded-2xl bg-gray-100 border border-black/10 shadow-sm relative">
                  <SafeImage 
                    src={b.img} 
                    alt={b.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1.5s] ease-out"
                  />
                </div>

                <div>
                  <div className="flex items-center gap-3 text-[10px] font-mono uppercase tracking-[0.2em] font-semibold text-black/50 mb-4">
                    <span className="text-black font-bold">{b.category}</span>
                    <span>•</span>
                    <span>{b.date}</span>
                    <span>•</span>
                    <span>{b.readTime}</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-black tracking-tight mb-4 text-black group-hover:text-black/70 transition-colors md:min-h-[4.5rem] line-clamp-2">
                    {b.title}
                  </h2>
                  {/* Excerpt forced visible on standard cards */}
                  <p className="text-black/60 font-light leading-relaxed max-w-xl mb-6 flex-1 line-clamp-3">
                    {b.excerpt}
                  </p>
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-black group-hover:text-black/70 transition-colors">
                    Read Article <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      {filteredBlogs.length === 0 && (
        <div className="py-32 text-center text-black/50 font-light text-xl">
          No articles found matching your criteria.
        </div>
      )}
    </>
  );
}
