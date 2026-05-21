import Link from 'next/link';
import type { ReactElement } from 'react';
import { STYLIST } from '@/data/stylist';
import Logo from '@/components/ui/Logo';

const NAV_LINKS = [
  ['/', 'Accueil'],
  ['/about', 'À Propos'],
  ['/collections', 'Collections'],
  ['/events', 'Événements'],
  ['/gallery', 'Galerie'],
  ['/contact', 'Contact'],
] as const;

const SOCIAL_ICONS: Record<string, ReactElement> = {
  instagram: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
      <circle cx="12" cy="12" r="4"/>
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/>
    </svg>
  ),
  pinterest: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 0 1 .083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"/>
    </svg>
  ),
  linkedin: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  ),
};

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[var(--color-onyx)] text-[var(--color-ivory)]" role="contentinfo">

      {/* ── Main grid ─────────────────────────────────────────────── */}
      <div className="container-luxury pt-20 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">

          {/* Brand block */}
          <div className="md:col-span-5 flex flex-col gap-8">
            {/* Logo — white variant */}
            <Logo variant="light" width={300} href="/" />

            <p
              className="text-sm font-light leading-relaxed max-w-xs font-body"
              style={{ color: 'rgba(255,255,255,0.5)' }}
            >
              {STYLIST.shortBio.slice(0, 130)}…
            </p>

            {/* Social links */}
            <div className="flex items-center gap-5">
              {(Object.entries(STYLIST.social) as [string, string][]).map(([platform, url]) => (
                <a
                  key={platform}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={platform}
                  className="flex items-center justify-center w-8 h-8 border border-white/20 rounded-full transition-all duration-300 hover:border-[var(--color-gold)] hover:text-[var(--color-gold)]"
                  style={{ color: 'rgba(255,255,255,0.5)' }}
                >
                  {SOCIAL_ICONS[platform] ?? (
                    <span className="label-tag-light capitalize text-[0.55rem]">{platform.slice(0, 2)}</span>
                  )}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="md:col-span-3 md:col-start-7">
            <p className="label-tag-light mb-6">Navigation</p>
            <nav className="flex flex-col gap-3">
              {NAV_LINKS.map(([href, label]) => (
                <Link
                  key={href}
                  href={href}
                  className="font-body font-light text-sm transition-colors duration-300 hover:text-[var(--color-ivory)]"
                  style={{ color: 'rgba(255,255,255,0.5)' }}
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div className="md:col-span-3">
            <p className="label-tag-light mb-6">Contact</p>
            <div className="flex flex-col gap-4">
              <a
                href={`mailto:${STYLIST.contact.email}`}
                className="font-body font-light text-sm transition-colors duration-300 hover:text-[var(--color-ivory)]"
                style={{ color: 'rgba(255,255,255,0.5)' }}
              >
                {STYLIST.contact.email}
              </a>
              <a
                href={`tel:${STYLIST.contact.phone}`}
                className="font-body font-light text-sm transition-colors duration-300 hover:text-[var(--color-ivory)]"
                style={{ color: 'rgba(255,255,255,0.5)' }}
              >
                {STYLIST.contact.phone}
              </a>
              <p
                className="font-body font-light text-sm leading-relaxed mt-1"
                style={{ color: 'rgba(255,255,255,0.3)' }}
              >
                {STYLIST.contact.studio}
              </p>

              {/* WhatsApp mini CTA */}
              <a
                href={`https://wa.me/${STYLIST.contact.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-2 transition-colors duration-300 hover:text-[var(--color-ivory)]"
                style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.65rem', letterSpacing: '0.2em', textTransform: 'uppercase' }}
              >
                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ── Divider + bottom bar ──────────────────────────────────── */}
      <div className="border-t" style={{ borderColor: 'rgba(255,255,255,0.08)' }}>
        <div className="container-luxury py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="label-tag-light">
            © {year} Koko Made — Tous droits réservés
          </p>
          <div className="flex items-center gap-6">
            <span className="label-tag-light">Paris &amp; Milan</span>
            <span style={{ color: 'rgba(255,255,255,0.15)', fontSize: '0.5rem' }}>◆</span>
            <span className="label-tag-light">Stylisme de luxe</span>
          </div>
        </div>
      </div>
    </footer>
  );
}