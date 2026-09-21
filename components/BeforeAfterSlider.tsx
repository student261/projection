"use client";

import React, { useState, useRef, useEffect, useCallback } from 'react';
import SafeImage from './SafeImage';
import { Sparkles } from 'lucide-react';

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
  hideHeader?: boolean;
  aspectRatio?: "portrait" | "landscape" | "auto";
  className?: string;
}

export default function BeforeAfterSlider({
  beforeImage,
  afterImage,
  beforeLabel = "RAW ARCHITECTURE (BEFORE)",
  afterLabel = "ACTIVATED PROJECTION (AFTER)",
  hideHeader = true,
  aspectRatio = "auto",
  className = ""
}: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const [detectedAspect, setDetectedAspect] = useState<"portrait" | "landscape">(
    aspectRatio === "portrait" || aspectRatio === "landscape" ? aspectRatio : "portrait"
  );
  const containerRef = useRef<HTMLDivElement>(null);

  // Auto-detect image aspect ratio if not explicitly specified
  useEffect(() => {
    if (aspectRatio === "portrait" || aspectRatio === "landscape") {
      setDetectedAspect(aspectRatio);
      return;
    }
    const img = new Image();
    img.src = afterImage;
    img.onload = () => {
      if (img.naturalWidth > 0 && img.naturalHeight > 0) {
        setDetectedAspect(img.naturalWidth / img.naturalHeight < 1 ? "portrait" : "landscape");
      }
    };
  }, [afterImage, aspectRatio]);

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
    if (e.touches.length > 0) {
      handleMove(e.touches[0].clientX);
    }
  }, [isDragging, handleMove]);

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', () => setIsDragging(false));
      window.addEventListener('touchmove', handleTouchMove, { passive: true });
      window.addEventListener('touchend', () => setIsDragging(false));
    }
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', () => setIsDragging(false));
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', () => setIsDragging(false));
    };
  }, [isDragging, handleMouseMove, handleTouchMove]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") {
      setSliderPosition((prev) => Math.max(0, prev - 5));
    } else if (e.key === "ArrowRight") {
      setSliderPosition((prev) => Math.min(100, prev + 5));
    }
  };

  const isPortrait = detectedAspect === "portrait";

  return (
    <div className={`w-full mx-auto my-2 sm:my-4 ${className}`}>
      {!hideHeader && (
        <div className="mb-3 flex items-center justify-between text-[10px] sm:text-xs font-mono uppercase tracking-wider text-black/60">
          <span className="flex items-center gap-1.5 font-bold">
            <Sparkles className="w-3.5 h-3.5 text-black" />
            <span>Interactive Spatial Transformation</span>
          </span>
          <span className="font-medium text-black/50">
            Drag slider left / right to compare
          </span>
        </div>
      )}

      {/* Centered Slider Container with true aspect-ratio framing */}
      <div className="w-full flex justify-center items-center">
        <div
          ref={containerRef}
          role="slider"
          aria-valuenow={Math.round(sliderPosition)}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label="Before and after spatial transformation comparison"
          tabIndex={0}
          onKeyDown={handleKeyDown}
          className={`relative w-full rounded-2xl sm:rounded-3xl overflow-hidden cursor-ew-resize select-none border border-neutral-800 bg-neutral-950 shadow-2xl touch-none ${
            isPortrait
              ? "max-w-lg aspect-[3/4] max-h-[60vh]"
              : "max-w-4xl lg:max-w-5xl aspect-[16/9] max-h-[58vh]"
          }`}
          onMouseDown={(e) => {
            setIsDragging(true);
            handleMove(e.clientX);
          }}
          onTouchStart={(e) => {
            setIsDragging(true);
            if (e.touches.length > 0) {
              handleMove(e.touches[0].clientX);
            }
          }}
        >
          {/* After Image (Background - Activated Projection Space) */}
          <img
            src={afterImage}
            alt="After Installation - Activated Projection"
            className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none select-none"
            draggable={false}
          />

          {/* After Label Badge (Floating HUD style) */}
          <div className="absolute bottom-3.5 sm:bottom-5 right-3.5 sm:right-5 bg-black/85 backdrop-blur-md text-white text-[9px] sm:text-[11px] font-mono font-bold px-3 sm:px-3.5 py-1.5 rounded-full uppercase tracking-wider z-0 border border-white/20 shadow-lg pointer-events-none whitespace-nowrap">
            {afterLabel}
          </div>

          {/* Before Image (Clipped overlay showing raw physical space) */}
          <div
            className="absolute inset-0 w-full h-full z-10"
            style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
          >
            <img
              src={beforeImage}
              alt="Before Installation - Raw Architecture"
              className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none select-none"
              draggable={false}
            />
            {/* Ambient shadow for realistic architectural depth */}
            <div className="absolute inset-0 bg-black/15 mix-blend-multiply pointer-events-none" />

            {/* Before Label Badge */}
            <div className="absolute bottom-3.5 sm:bottom-5 left-3.5 sm:left-5 bg-black/85 backdrop-blur-md text-white text-[9px] sm:text-[11px] font-mono font-bold px-3 sm:px-3.5 py-1.5 rounded-full uppercase tracking-wider border border-white/20 shadow-lg pointer-events-none whitespace-nowrap">
              {beforeLabel}
            </div>
          </div>

          {/* Interactive Hint Indicator (Floating Top Pill) */}
          <div className="absolute top-3.5 sm:top-4 left-1/2 -translate-x-1/2 bg-black/70 backdrop-blur-md text-white/90 text-[9px] sm:text-[11px] font-mono font-semibold px-3 sm:px-4 py-1 rounded-full uppercase tracking-widest border border-white/20 pointer-events-none z-10 shadow-lg flex items-center gap-1.5 whitespace-nowrap">
            <span className="text-white/60">‹</span>
            <span>DRAG TO REVEAL</span>
            <span className="text-white/60">›</span>
          </div>

          {/* Vertical Slider Divider Line */}
          <div
            className="absolute top-0 bottom-0 w-[2px] bg-white z-20 shadow-[0_0_12px_rgba(0,0,0,0.8),0_0_6px_rgba(255,255,255,0.9)] -ml-[1px]"
            style={{ left: `${sliderPosition}%` }}
          >
            {/* Tactile Circular Knob */}
            <div
              className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 sm:w-11 sm:h-11 bg-white rounded-full flex items-center justify-center shadow-[0_4px_24px_rgba(0,0,0,0.5)] border-2 border-neutral-100 cursor-ew-resize transition-transform duration-150 ${
                isDragging ? "scale-110 shadow-[0_0_20px_rgba(255,255,255,0.6)]" : "hover:scale-105"
              }`}
            >
              <div className="flex items-center gap-0.5 text-neutral-900">
                <svg
                  className="w-3 h-3 sm:w-3.5 sm:h-3.5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="15 18 9 12 15 6" />
                </svg>
                <div className="w-[1.5px] h-3 bg-neutral-300 rounded-full" />
                <svg
                  className="w-3 h-3 sm:w-3.5 sm:h-3.5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
