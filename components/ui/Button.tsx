"use client";

import React from "react";
import Link from "next/link";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline";
  href?: string;
  children: React.ReactNode;
  className?: string;
}

export default function Button({
  variant = "primary",
  href,
  children,
  className = "",
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-[0.08em] px-6 py-3 transition-all duration-300 active:scale-95 cursor-pointer";

  const variantStyles =
    variant === "primary"
      ? "bg-black text-white hover:bg-gray-800 shadow-sm"
      : "bg-transparent text-black border border-black/20 hover:border-black hover:bg-black hover:text-white";

  const combinedClass = `${baseStyles} ${variantStyles} ${className}`;

  if (href) {
    return (
      <Link href={href} className={combinedClass}>
        {children}
      </Link>
    );
  }

  return (
    <button className={combinedClass} {...props}>
      {children}
    </button>
  );
}
