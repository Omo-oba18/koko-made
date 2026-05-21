"use client";

import Image from "next/image";
import { useState } from "react";
import ImagePlaceholder from "./ImagePlaceholder";
import type { AspectRatio } from "./ImagePlaceholder";

// Re-export for convenience
export type { AspectRatio };

interface SmartImageProps {
  src?: string;
  alt: string;
  fill?: boolean;
  width?: number;
  height?: number;
  className?: string;
  containerClassName?: string;
  aspectRatio?: AspectRatio;
  label?: string;
  priority?: boolean;
  sizes?: string;
}

export default function SmartImage({
  src,
  alt,
  fill = false,
  width,
  height,
  className = "",
  containerClassName = "",
  aspectRatio = "portrait",
  label,
  priority = false,
  sizes,
}: SmartImageProps) {
  const [error, setError] = useState(false);

  if (error || !src) {
    return (
      <ImagePlaceholder
        alt={alt}
        label={label ?? alt}
        className={containerClassName || className}
        aspectRatio={aspectRatio}
      />
    );
  }

  if (fill) {
    return (
      <Image
        src={src}
        alt={alt}
        fill
        className={`object-cover ${className}`}
        onError={() => setError(true)}
        priority={priority}
        sizes={sizes ?? "(max-width: 768px) 100vw, 50vw"}
      />
    );
  }

  return (
    <div className={`relative overflow-hidden ${containerClassName}`}>
      <Image
        src={src}
        alt={alt}
        width={width ?? 800}
        height={height ?? 1000}
        className={`w-full h-full object-cover ${className}`}
        onError={() => setError(true)}
        priority={priority}
        sizes={sizes}
      />
    </div>
  );
}
