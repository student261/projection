"use client";

import { useState, useEffect, useRef } from "react";
import { Sparkles, Image as ImageIcon } from "lucide-react";

interface SafeImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackSrc?: string;
  containerClassName?: string;
  priority?: boolean;
}

const DEFAULT_FALLBACK = "/images/architectural_light_beam.webp";

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
    if (typeof rawSrc !== "string" || !rawSrc) {
      return fallbackSrc;
    }
    const [baseUrl, query] = rawSrc.split("?");
    let result = baseUrl;

    // Convert local images to WebP if needed
    if ((result.endsWith(".png") || result.endsWith(".jpg") || result.endsWith(".jpeg")) && !result.startsWith("http")) {
      result = result.replace(/\.(png|jpg|jpeg)$/, ".webp");
    }

    if (result.includes("images.unsplash.com")) {
      if (!result.includes("fm=")) {
        result += `${result.includes("?") ? "&" : "?"}fm=webp`;
      }
      if (!result.includes("q=")) {
        result += "&q=75";
      }
      if (!result.includes("w=")) {
        result += "&w=1200";
      }
    }
    return query ? `${result}?${query}` : result;
  };

  const initialSrc = getOptimizedSrc(src);
  const [imgSrc, setImgSrc] = useState<string>(initialSrc);
  const [attemptStage, setAttemptStage] = useState<number>(0);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const updated = getOptimizedSrc(src);
    setImgSrc(updated);
    setAttemptStage(0);
    setIsLoading(true);

    if (imgRef.current?.complete && imgRef.current.naturalWidth > 0) {
      setIsLoading(false);
    }
  }, [src, fallbackSrc]);

  const handleError = () => {
    if (typeof src === "string") {
      const [baseSrc, query] = src.split("?");
      const [baseImgSrc] = imgSrc.split("?");
      const qSuffix = query ? `?${query}` : "";

      // Stage 0: If webp failed, try original src if it was .jpg or .png
      if (attemptStage === 0 && baseImgSrc.endsWith(".webp") && (baseSrc.endsWith(".jpg") || baseSrc.endsWith(".png") || baseSrc.endsWith(".jpeg"))) {
        setAttemptStage(1);
        setImgSrc(src);
        return;
      }
      // If original src was .webp and failed, try .jpg fallback
      if (attemptStage === 0 && baseSrc.endsWith(".webp")) {
        setAttemptStage(1);
        setImgSrc(`${baseSrc.replace(/\.webp$/, ".jpg")}${qSuffix}`);
        return;
      }
    }

    // Stage 1: Try fallbackSrc
    if (attemptStage < 2 && imgSrc !== fallbackSrc) {
      setAttemptStage(2);
      setImgSrc(fallbackSrc);
      return;
    }

    // Final stage: Fallback also failed
    setAttemptStage(3);
    setIsLoading(false);
  };

  const hasFallbackError = attemptStage >= 3;

  return (
    <div className={`relative overflow-hidden ${containerClassName}`}>
      {/* Loading Skeleton Indicator */}
      {isLoading && !hasFallbackError && (
        <div className="absolute inset-0 bg-neutral-900/10 dark:bg-neutral-100/10 animate-pulse flex items-center justify-center z-10 pointer-events-none">
          <Sparkles className="w-4 h-4 text-neutral-400/40 animate-spin" />
        </div>
      )}

      {/* Render Fallback Graphic only if all sources failed */}
      {hasFallbackError ? (
        <div className="absolute inset-0 bg-neutral-950/80 backdrop-blur-sm flex flex-col items-center justify-center p-4 text-center z-10 border border-white/10">
          <div className="w-10 h-10 rounded-xl bg-neutral-900 border border-neutral-700 flex items-center justify-center text-white mb-2 shadow-sm">
            <ImageIcon className="w-5 h-5" />
          </div>
          <span className="text-[10px] font-bold text-neutral-300 tracking-wider uppercase font-mono">
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
