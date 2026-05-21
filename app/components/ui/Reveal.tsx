"use client";

import React, {
  useEffect,
  useRef,
  type ElementType,
  type ReactNode,
} from "react";

type RevealVariant = "up" | "left" | "scale";

export function useReveal(threshold = 0.15) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("is-visible");
          observer.unobserve(el);
        }
      },
      { threshold, rootMargin: "0px 0px -60px 0px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return ref;
}

interface RevealProps {
  children: ReactNode;
  className?: string;
  variant?: RevealVariant;
  delay?: number;
  as?: ElementType;
  threshold?: number;
}

export default function Reveal({
  children,
  className = "",
  variant = "up",
  delay = 0,
  as: Tag = "div",
  threshold = 0.15,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("is-visible");
          observer.unobserve(el);
        }
      },
      { threshold, rootMargin: "0px 0px -60px 0px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  const variantClass =
    variant === "left"
      ? "reveal-left"
      : variant === "scale"
        ? "reveal-scale"
        : "reveal";

  const delayClass = delay > 0 ? `reveal-delay-${delay}` : "";

  return (
    <Tag
      ref={ref as React.RefObject<HTMLDivElement>}
      className={[variantClass, delayClass, className]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </Tag>
  );
}
