"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, BookOpen, Clock, Calendar } from "lucide-react";
import SafeImage from "@/components/SafeImage";

const blogs = [
  {
    id: "future-motion-interactive",
    slug: "future-of-motion-interactive-projection",
    title: "The Future of Motion Interactive Projection",
    desc: "See how interactive projection is being used in education, healthcare, retail, entertainment, and other spaces.",
    category: "INTERACTIVE TECH",
    date: "AUG 2026",
    readTime: "5 MIN READ",
    img: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=75",
  },
  {
    id: "ai-redefining-experiences",
    slug: "how-ai-is-redefining-interactive-experiences",
    title: "How AI is Redefining Interactive Experiences",
    desc: "Learn how AI is helping businesses create smarter and more responsive digital experiences.",
    category: "ARTIFICIAL INTELLIGENCE",
    date: "AUG 2026",
    readTime: "6 MIN READ",
    img: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=75",
  },
  {
    id: "choosing-right-solution",
    slug: "choosing-the-right-interactive-solution-for-your-space",
    title: "Choosing the Right Interactive Solution for Your Space",
    desc: "A simple guide to choosing the right interactive technology based on your space, audience, budget, and goals.",
    category: "BUYER'S GUIDE",
    date: "AUG 2026",
    readTime: "4 MIN READ",
    img: "https://images.unsplash.com/photo-1518998053901-5348d3961a04?auto=format&fit=crop&w=800&q=75",
  },
];

export default function LatestBlogs() {
  return (
    <section className="py-10 lg:py-12 bg-[var(--background)] border-t border-[var(--border-light)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-10 sm:mb-12 space-y-3">
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.3em] text-[var(--text-secondary)]"
          >
            LATEST BLOGS & INSIGHTS
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-2xl sm:text-4xl lg:text-5xl font-black text-[var(--foreground)] tracking-tighter leading-[1.05]"
          >
            Insights That Inspire Innovation
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-sm sm:text-base lg:text-lg text-[var(--text-secondary)] font-light leading-relaxed pt-2"
          >
            Read about the latest trends, ideas, and practical uses of interactive technology, AI, immersive experiences, and digital innovation.
          </motion.p>
        </div>

        {/* 3 Blog Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <motion.article
              key={blog.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              className="group flex flex-col justify-between transition-all duration-500 cursor-pointer"
            >
              <div>
                <Link href={`/blogs/${blog.slug}`} className="block aspect-[16/10] overflow-hidden relative rounded-2xl mb-6 img-hover-wrap">
                  <SafeImage
                    src={blog.img}
                    alt={blog.title}
                    className="w-full h-full object-cover"
                    containerClassName="w-full h-full absolute inset-0"
                  />
                  <div className="absolute top-4 left-4 bg-[var(--background)]/80 backdrop-blur-md px-3 py-1.5 text-[9px] font-bold text-[var(--foreground)] uppercase tracking-widest rounded-full border border-[var(--border-light)]">
                    {blog.category}
                  </div>
                </Link>

                <div className="px-1 flex-grow flex flex-col space-y-3">
                  <div className="flex items-center gap-4 text-[10px] text-[var(--text-secondary)] uppercase font-bold">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3 opacity-50" />
                      <span>{blog.date}</span>
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3 opacity-50" />
                      <span>{blog.readTime}</span>
                    </span>
                  </div>

                  <Link
                    href={`/blogs/${blog.slug}`}
                    className="block text-xl font-black text-[var(--foreground)] tracking-tight group-hover:text-black transition-colors leading-tight"
                  >
                    {blog.title}
                  </Link>

                  <p className="text-xs text-[var(--text-secondary)] font-light leading-relaxed">
                    {blog.desc}
                  </p>
                </div>
              </div>

              <div className="pt-6 pb-2">
                <Link
                  href={`/blogs/${blog.slug}`}
                  className="text-[10px] font-bold uppercase tracking-widest text-black group-hover:text-[var(--foreground)] inline-flex items-center gap-1.5 transition-colors"
                >
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Premium Dark CTA Banner */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 lg:mt-20 p-8 sm:p-10 lg:p-12 rounded-[2rem] bg-black text-white relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-8 shadow-2xl shadow-black/20 group border border-white/5"
        >
          {/* Ambient Glows */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
             <div className="absolute top-1/2 right-0 w-[300px] h-[300px] bg-white/5 blur-[80px] rounded-full -translate-y-1/2 translate-x-1/3 group-hover:bg-white/10 transition-colors duration-1000" />
          </div>

          <div className="relative z-10 max-w-xl text-center lg:text-left space-y-3">
            <div className="inline-flex items-center justify-center lg:justify-start gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-white/50 mb-1">
              <BookOpen className="w-3.5 h-3.5" />
              <span>Continue Learning</span>
            </div>
            <h3 className="text-white">
              Read More Insights
            </h3>
            <p className="text-white/60 font-light text-sm leading-relaxed">
              Dive deeper into interactive technology, industry trends, spatial engineering, and the latest generative AI developments.
            </p>
          </div>

          <div className="relative z-10 shrink-0">
            <Link
              href="/blogs"
              className="group/btn flex items-center gap-3 px-7 py-4 rounded-full bg-white text-black font-extrabold text-xs uppercase tracking-[0.15em] transition-all duration-500 hover:bg-gray-100 hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(255,255,255,0.15)]"
            >
              <span>View All Blogs</span>
              <div className="w-7 h-7 rounded-full bg-black flex items-center justify-center group-hover/btn:translate-x-1 transition-transform duration-300">
                <ArrowRight className="w-3.5 h-3.5 text-white" />
              </div>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
