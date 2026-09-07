"use client";

import React, { useState, useRef, useEffect, useCallback } from 'react';
import SafeImage from './SafeImage';
import { GripVertical } from 'lucide-react';

export default function BeforeAfterSlider({ beforeImage, afterImage }: { beforeImage: string, afterImage: string }) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));
    setSliderPosition(percent);
  }, []);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  }, [isDragging, handleMove]);

  const handleTouchMove = useCallback((e: TouchEvent) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  }, [isDragging, handleMove]);

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', () => setIsDragging(false));
      window.addEventListener('touchmove', handleTouchMove);
      window.addEventListener('touchend', () => setIsDragging(false));
    }
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', () => setIsDragging(false));
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', () => setIsDragging(false));
    };
  }, [isDragging, handleMouseMove, handleTouchMove]);

  return (
    <div className="w-full max-w-7xl mx-auto my-24">
      <div className="mb-8 flex justify-between items-end">
        <div>
          <h3 className="text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">Interactive Transformation</h3>
          <p className="text-sm text-slate-500 mt-2 uppercase tracking-widest font-bold">Drag slider to compare Before & After</p>
        </div>
      </div>
      
      <div 
        ref={containerRef}
        className="relative w-full aspect-[4/3] md:aspect-[21/9] rounded-3xl overflow-hidden cursor-ew-resize shadow-[0_20px_50px_rgba(0,0,0,0.15)] select-none border border-black/5"
        onMouseDown={(e) => {
          setIsDragging(true);
          handleMove(e.clientX);
        }}
        onTouchStart={(e) => {
          setIsDragging(true);
          handleMove(e.touches[0].clientX);
        }}
      >
        {/* After Image (Background) */}
        <SafeImage 
          src={afterImage} 
          alt="After"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute bottom-6 right-6 bg-black/80 backdrop-blur-md text-white text-xs font-black px-4 py-2 rounded-full uppercase tracking-widest z-0">
          After Installation
        </div>

        {/* Before Image (Clipped using clip-path for perfection) */}
        <div 
          className="absolute inset-0 w-full h-full border-r-4 border-white shadow-[2px_0_15px_rgba(0,0,0,0.3)] z-10"
          style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
        >
          <SafeImage 
            src={beforeImage} 
            alt="Before"
            className="absolute inset-0 w-full h-full object-cover grayscale brightness-75" // Before is grayscale for dramatic effect
          />
          <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-md text-black text-xs font-black px-4 py-2 rounded-full uppercase tracking-widest">
            Before
          </div>
        </div>

        {/* Slider Handle */}
        <div 
          className="absolute top-0 bottom-0 w-1 bg-white z-20 shadow-[0_0_10px_rgba(0,0,0,0.5)] -ml-[2px]"
          style={{ left: `${sliderPosition}%` }}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg border border-black/10">
            <GripVertical className="w-5 h-5 text-slate-800" />
          </div>
        </div>

      </div>
    </div>
  );
}
