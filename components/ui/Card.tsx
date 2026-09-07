"use client";

import React from "react";
import Link from "next/link";
import SafeImage from "@/components/SafeImage";

interface CardProps {
  title: string;
  category?: string;
  img?: string;
  href?: string;
  className?: string;
  aspectRatio?: string;
  children?: React.ReactNode;
}

export default function Card({
  title,
  category,
  img,
  href,
  className = "",
  aspectRatio = "aspect-[16/10]",
  children,
}: CardProps) {
  const content = (
    <div className={`group relative overflow-hidden bg-white border border-black/10 ${className}`}>
      {img && (
        <div className={`relative w-full ${aspectRatio} overflow-hidden bg-gray-100`}>
          <SafeImage
            src={img}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-700 ease-out"
            containerClassName="w-full h-full absolute inset-0"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
        </div>
      )}

      <div className="p-6 relative z-10 bg-white">
        {category && (
          <span className="text-[10px] uppercase tracking-[0.2em] text-black/60 block mb-1.5">
            {category}
          </span>
        )}
        <h3 className="text-black group-hover:text-black/80 transition-colors">
          {title}
        </h3>
        {children && <div className="mt-3 text-xs text-black/70 font-light leading-relaxed">{children}</div>}
      </div>
    </div>
  );

  if (href) {
    return (
      <Link href={href} className="block focus:outline-none">
        {content}
      </Link>
    );
  }

  return content;
}
