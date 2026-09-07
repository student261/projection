"use client";

import React from "react";

interface SectionHeadingProps {
  label?: string;
  heading: string;
  subheading?: string;
  centered?: boolean;
  dark?: boolean;
  className?: string;
}

export default function SectionHeading({
  label,
  heading,
  subheading,
  centered = false,
  dark = false,
  className = "",
}: SectionHeadingProps) {
  return (
    <div className={`mb-12 ${centered ? "text-center mx-auto max-w-3xl" : "max-w-2xl"} ${className}`}>
      {label && (
        <span className={`text-[10px] uppercase tracking-[0.25em] block mb-2 ${dark ? "text-white/60" : "text-black/60"}`}>
          {label}
        </span>
      )}
      <h2 className={`${dark ? "text-white" : "text-black"}`}>
        {heading}
      </h2>
      {subheading && (
        <p className={`mt-4 text-sm sm:text-base font-light leading-relaxed ${dark ? "text-white/70" : "text-black/70"}`}>
          {subheading}
        </p>
      )}
    </div>
  );
}
