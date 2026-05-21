import type React from "react";

export type AspectRatio = "portrait" | "editorial" | "square" | "wide" | "tall";

interface ImagePlaceholderProps {
  alt?: string;
  label?: string;
  className?: string;
  style?: React.CSSProperties;
  aspectRatio?: AspectRatio;
}

const RATIOS: Record<AspectRatio, string> = {
  portrait: "aspect-[3/4]",
  editorial: "aspect-[4/5]",
  square: "aspect-[1/1]",
  wide: "aspect-[16/9]",
  tall: "aspect-[2/3]",
};

export default function ImagePlaceholder({
  alt = "",
  label,
  className = "",
  style,
  aspectRatio = "portrait",
}: ImagePlaceholderProps) {
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
