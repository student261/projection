"use client";

import { useState, useEffect, useRef } from "react";
import { Sparkles, Image as ImageIcon } from "lucide-react";

interface SafeImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackSrc?: string;
  containerClassName?: string;
  priority?: boolean;
}

const DEFAULT_FALLBACK =
  "https://momentfactory.com/cdn/shop/files/KarelChladek-5286-WS.jpg";

export default function SafeImage({
  src,
  alt = "Interactive Experience",
  className = "",
  fallbackSrc = DEFAULT_FALLBACK,
  containerClassName = "",
  priority = false,
  loading,
  decoding = "async",
  ...props
}: SafeImageProps) {
  const imgRef = useRef<HTMLImageElement | null>(null);

  const getOptimizedSrc = (rawSrc?: string | Blob): string => {
    if (typeof rawSrc !== "string" || !rawSrc) return fallbackSrc;
    let result = rawSrc;

    // Auto convert local PNG paths to WebP for maximum compression & speed
    if (result.endsWith(".png") && !result.startsWith("http")) {
      result = result.replace(/\.png$/, ".webp");
    }

    if (result.includes("images.unsplash.com")) {
      const hasQuery = result.includes("?");
      const joiner = hasQuery ? "&" : "?";
      if (!result.includes("fm=")) {
        result += `${result.includes("?") ? "&" : "?"}fm=webp`;
      }
      if (!result.includes("q=")) {
        result += "&q=75";
      }
      if (!result.includes("w=")) {
        result += "&w=800";
      }
    }
    return result;
  };

  const initialSrc = getOptimizedSrc(src);
  const [imgSrc, setImgSrc] = useState<string>(initialSrc);
  const [hasPrimaryError, setHasPrimaryError] = useState(false);
  const [hasFallbackError, setHasFallbackError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const updated = getOptimizedSrc(src);
    setImgSrc(updated);
    setHasPrimaryError(false);
    setHasFallbackError(false);
    setIsLoading(true);

    // If image is already complete in browser cache, resolve loading state immediately
    if (imgRef.current?.complete) {
      setIsLoading(false);
    }
  }, [src, fallbackSrc]);

  const handleError = () => {
    if (!hasPrimaryError) {
      // First error: switch to fallback
      setHasPrimaryError(true);
      if (imgSrc !== fallbackSrc) {
        setImgSrc(fallbackSrc);
      } else {
        // The original src WAS the fallback, so it failed immediately
        setHasFallbackError(true);
      }
    } else {
      // Second error: fallback also failed
      setHasFallbackError(true);
    }
  };

  return (
    <div className={`relative overflow-hidden ${containerClassName}`}>
      {/* Loading Skeleton Indicator */}
      {isLoading && !hasFallbackError && (
        <div className="absolute inset-0 bg-gray-100 animate-pulse flex items-center justify-center z-20 pointer-events-none">
          <Sparkles className="w-5 h-5 text-neutral-400/50 animate-spin" />
        </div>
      )}

      {/* Render Fallback Graphic if double error occurs */}
      {hasFallbackError ? (
        <div className="absolute inset-0 bg-gray-100 flex flex-col items-center justify-center p-4 text-center z-10">
          <div className="w-10 h-10 rounded-xl bg-neutral-100 border border-neutral-200 flex items-center justify-center text-black mb-2 shadow-sm">
            <ImageIcon className="w-5 h-5" />
          </div>
          <span className="text-[10px] font-bold text-gray-700 tracking-wider uppercase">
            {alt || "Interactive Experience"}
          </span>
        </div>
      ) : null}

      <img
        {...props}
        ref={imgRef}
        src={imgSrc}
        alt={alt}
        loading={priority ? "eager" : loading || "lazy"}
        decoding={decoding}
        {...(priority ? { fetchPriority: "high" } : {})}
        className={`${className} ${hasFallbackError ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300 relative z-0`}
        onLoad={() => setIsLoading(false)}
        onError={handleError}
      />
    </div>
  );
}

