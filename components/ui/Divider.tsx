"use client";

import React from "react";

interface DividerProps {
  className?: string;
}

export default function Divider({ className = "" }: DividerProps) {
  return <div className={`w-full border-t border-black/10 my-12 ${className}`} />;
}
