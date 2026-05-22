"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

export type AspectRatio = "portrait" | "editorial" | "square" | "wide" | "tall";

interface ImagePlaceholderProps {
  src?: string;
  alt?: string;
  label?: string;
  className?: string;
  style?: React.CSSProperties;
  aspectRatio?: AspectRatio;
  priority?: boolean;
}

const RATIOS: Record<AspectRatio, string> = {
  portrait: "aspect-[3/4]",
  editorial: "aspect-[4/5]",
  square: "aspect-[1/1]",
  wide: "aspect-[16/9]",
  tall: "aspect-[2/3]",
};

export default function ImagePlaceholder({
  src,
  alt = "",
  label,
  className = "",
  style,
  aspectRatio = "portrait",
  priority = false,
}: ImagePlaceholderProps) {
  const [imageError, setImageError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Reset error state when src changes
  useEffect(() => {
    setImageError(false);
    setIsLoading(true);
  }, [src]);

  // If no src provided, show placeholder
  if (!src) {
    return (
      <div
        className={`img-placeholder w-full ${RATIOS[aspectRatio]} ${className}`}
        style={style}
        role="img"
        aria-label={alt}
      >
        <div className="flex flex-col items-center gap-3 opacity-40">
          <svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
            <circle cx="12" cy="13" r="3" />
          </svg>
          {label && <span className="label-tag">{label}</span>}
        </div>
      </div>
    );
  }

  // If image error occurred, show placeholder
  if (imageError) {
    return (
      <div
        className={`img-placeholder w-full ${RATIOS[aspectRatio]} ${className}`}
        style={style}
        role="img"
        aria-label={alt}
      >
        <div className="flex flex-col items-center gap-3 opacity-40">
          <svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
            <circle cx="12" cy="13" r="3" />
          </svg>
          <span className="label-tag text-xs">Image non disponible</span>
        </div>
      </div>
    );
  }

  // Show real image
  return (
    <div
      className={`relative w-full ${RATIOS[aspectRatio]} overflow-hidden bg-warm/20 ${className}`}
      style={style}
    >
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-warm/10 animate-pulse">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            className="text-muted/40"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="M12 6v6l4 2" />
          </svg>
        </div>
      )}
      <Image
        src={src}
        alt={alt}
        fill
        className={`object-cover transition-opacity duration-300 ${
          isLoading ? "opacity-0" : "opacity-100"
        }`}
        onLoadingComplete={() => setIsLoading(false)}
        onError={() => setImageError(true)}
        priority={priority}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
    </div>
  );
}
