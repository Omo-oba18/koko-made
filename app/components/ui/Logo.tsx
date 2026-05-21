import Image from 'next/image';
import Link from 'next/link';

interface LogoProps {
  /** 'dark' = black logo (on light bg) | 'light' = white logo (on dark bg) */
  variant?: 'dark' | 'light';
  /** Width in px — height scales proportionally (logo is ~2:1 ratio) */
  width?: number;
  className?: string;
  href?: string;
}

/**
 * KokoMade logo component.
 * Place the transparent-bg logo files at:
 *   /public/assets/logo-black.png  ← black ink, transparent bg
 *   /public/assets/logo-white.png  ← white ink, transparent bg
 *
 * During dev, falls back to the provided PNG files (logo-dark / logo-light).
 * When you drop the true transparent logos, rename them accordingly.
 */
export default function Logo({
  variant = 'dark',
  width = 400,
  className = '',
  href = '/',
}: LogoProps) {
  const height = Math.round(width * 0.28); // approx aspect ratio from provided files

  const src =
    variant === 'light'
      ? '/assets/logo/logo-light-1.png'
      : '/assets/logo/logo-dark-1.png';

  const img = (
    <Image
      src={src}
      alt="Koko Made"
      width={width}
      height={height}
      priority
      className={`block select-none ${className}`}
      style={{ objectFit: 'contain' }}
    />
  );

  if (!href) return img;

  return (
    <Link
      href={href}
      className="inline-flex items-center hover:opacity-70 transition-opacity duration-300"
      aria-label="Retour à l'accueil — Koko Made"
    >
      {img}
    </Link>
  );
}