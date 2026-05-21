import type { Metadata } from "next";
import Link from "next/link";
import { STYLIST } from "@/data/stylist";
import { COLLECTIONS } from "@/data/collections";
import { EVENTS } from "@/data/events";
import Reveal from "@/components/ui/Reveal";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";
import Logo from "@/components/ui/Logo";

export const metadata: Metadata = {
  title: "Koko Made — Styliste & Directrice Artistique",
  description:
    "Portfolio de Koko Made, studio de stylisme de mode et direction artistique. Collections, défilés, éditoriaux de luxe — Paris & Milan.",
};

export default function HomePage() {
  const featured = COLLECTIONS.filter((c) => c.featured).slice(0, 3);
  const featuredEvents = EVENTS.filter((e) => e.featured).slice(0, 2);

  return (
    <>
      {/* ── 1. HERO ─────────────────────────────────────────────── */}
      <section
        className="relative min-h-screen flex flex-col justify-end overflow-hidden"
        aria-label="Hero"
      >
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <ImagePlaceholder
            alt="Koko Made — Hero"
            aspectRatio="wide"
            className="w-full h-full !aspect-auto"
          />
          <div className="overlay-dark" />
        </div>

        {/* Top-right metadata tag */}
        <div
          className="absolute top-0 right-0 z-10 hidden md:flex flex-col items-end gap-1 p-8"
          style={{ paddingTop: "calc(var(--nav-height) + 2rem)" }}
        >
          <span className="label-tag-light">Direction Artistique</span>
          <span className="label-tag-light">Paris — Milan</span>
        </div>

        {/* Hero content */}
        <div className="relative z-10 container-luxury pb-20 md:pb-32">
          {/* Large logo display in hero — editorial treatment */}
          <div
            className="mb-8 animate-fade-in"
            style={{ animationDelay: "0.2s", animationFillMode: "both" }}
          >
            <Logo variant="light" width={220} href="" />
          </div>

          <div
            className="animate-fade-up"
            style={{ animationDelay: "0.45s", animationFillMode: "both" }}
          >
            <span className="label-tag-light block mb-5">
              Styliste &amp; Directrice Artistique
            </span>
          </div>

          <h1
            className="font-display font-light text-[var(--color-ivory)] animate-fade-up"
            style={{
              fontSize: "clamp(3.5rem, 10vw, 9rem)",
              lineHeight: 0.88,
              letterSpacing: "-0.025em",
              animationDelay: "0.6s",
              animationFillMode: "both",
            }}
          >
            L&apos;art de
            <br />
            <em
              className="font-light italic"
              style={{ color: "var(--color-gold)" }}
            >
              sublimer
            </em>
          </h1>

          <div
            className="mt-10 flex flex-col md:flex-row items-start md:items-center gap-8 animate-fade-up"
            style={{ animationDelay: "0.8s", animationFillMode: "both" }}
          >
            <p
              className="font-light max-w-sm text-sm leading-relaxed font-body"
              style={{ color: "rgba(255,255,255,0.65)" }}
            >
              {STYLIST.tagline}
            </p>
            <Link
              href="/collections"
              className="btn-luxury"
              style={{ color: "var(--color-ivory)" }}
            >
              Voir les collections&nbsp;
              <span style={{ color: "var(--color-gold)" }}>→</span>
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 animate-fade-in"
          style={{ animationDelay: "1.4s", animationFillMode: "both" }}
        >
          <span className="label-tag-light">Défiler</span>
          <div
            className="w-px h-12 overflow-hidden"
            style={{ background: "rgba(255,255,255,0.2)" }}
          >
            <div
              className="w-full h-full animate-slide-down"
              style={{ background: "rgba(255,255,255,0.7)" }}
            />
          </div>
        </div>
      </section>

      {/* ── 2. PRESS MARQUEE ────────────────────────────────────── */}
      <section
        className="py-5 overflow-hidden border-y border-[var(--color-warm)]"
        style={{ background: "var(--color-cream)" }}
      >
        <div className="flex items-center gap-16 whitespace-nowrap animate-marquee">
          {[...STYLIST.press, ...STYLIST.press].map((p, i) => (
            <span key={i} className="label-tag flex-shrink-0">
              {p}
            </span>
          ))}
        </div>
      </section>

      {/* ── 3. FEATURED COLLECTIONS ─────────────────────────────── */}
      <section className="section-padding bg-[var(--color-ivory)]">
        <div className="container-luxury">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
            <Reveal>
              <span className="label-tag block mb-4">
                Portfolio sélectionné
              </span>
              <h2
                className="font-display font-light text-[var(--color-onyx)]"
                style={{
                  fontSize: "clamp(2rem, 5vw, 4rem)",
                  letterSpacing: "-0.02em",
                  lineHeight: 1,
                }}
              >
                Collections
                <br />
                <em className="font-light">récentes</em>
              </h2>
            </Reveal>
            <Reveal delay={2}>
              <Link href="/collections" className="btn-luxury">
                Toutes les collections →
              </Link>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {featured[0] && (
              <Reveal className="md:col-span-7" variant="scale">
                <Link
                  href="/collections"
                  className="block group img-hover-wrap"
                >
                  <div className="relative overflow-hidden">
                    <ImagePlaceholder
                      alt={featured[0].title}
                      aspectRatio="editorial"
                      label={featured[0].title}
                    />
                  </div>
                  <div className="mt-5 flex items-start justify-between">
                    <div>
                      <span className="label-tag block mb-1">
                        {featured[0].category} — {featured[0].season}
                      </span>
                      <h3
                        className="font-display font-light text-2xl text-[var(--color-onyx)]"
                        style={{ letterSpacing: "-0.01em" }}
                      >
                        {featured[0].title}
                      </h3>
                    </div>
                    <span className="text-[var(--color-gold)] text-xl mt-1 group-hover:translate-x-2 transition-transform duration-400">
                      →
                    </span>
                  </div>
                </Link>
              </Reveal>
            )}
            <div className="md:col-span-5 flex flex-col gap-6">
              {featured.slice(1, 3).map((col, i) => (
                <Reveal key={col.id} delay={(i + 2) as 2 | 3} variant="scale">
                  <Link
                    href="/collections"
                    className="block group img-hover-wrap"
                  >
                    <div className="relative overflow-hidden">
                      <ImagePlaceholder
                        alt={col.title}
                        aspectRatio="wide"
                        label={col.title}
                      />
                    </div>
                    <div className="mt-4 flex items-start justify-between">
                      <div>
                        <span className="label-tag block mb-1">
                          {col.category}
                        </span>
                        <h3 className="font-display font-light text-xl text-[var(--color-onyx)]">
                          {col.title}
                        </h3>
                      </div>
                      <span className="text-[var(--color-muted)] text-lg mt-1 group-hover:translate-x-2 transition-transform duration-400">
                        →
                      </span>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. ABOUT TEASER ─────────────────────────────────────── */}
      <section
        className="section-padding relative overflow-hidden"
        style={{ background: "var(--color-cream)" }}
      >
        <div className="container-luxury">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-20 items-center">
            <Reveal className="md:col-span-5" variant="scale">
              <div className="relative">
                <ImagePlaceholder
                  alt="Portrait styliste"
                  aspectRatio="portrait"
                  label="Portrait"
                />
                <div
                  className="absolute -bottom-4 -right-4 p-6 hidden md:block"
                  style={{ background: "var(--color-onyx)", width: "160px" }}
                >
                  <p
                    className="font-display font-light text-4xl text-[var(--color-ivory)]"
                    style={{ letterSpacing: "-0.02em" }}
                  >
                    18+
                  </p>
                  <p className="label-tag-light mt-1">années</p>
                </div>
              </div>
            </Reveal>

            <div className="md:col-span-7 md:col-start-6">
              <Reveal>
                <span className="label-tag block mb-6">À propos</span>
              </Reveal>
              <Reveal delay={1}>
                <h2
                  className="font-display font-light text-[var(--color-onyx)] mb-8"
                  style={{
                    fontSize: "clamp(2rem, 4.5vw, 3.8rem)",
                    lineHeight: 1.05,
                    letterSpacing: "-0.02em",
                  }}
                >
                  Un regard éditorial{" "}
                  <em className="font-light">au service du vêtement.</em>
                </h2>
              </Reveal>
              <Reveal delay={2}>
                <p
                  className="text-sm leading-relaxed font-light font-body mb-8 max-w-lg"
                  style={{ color: "var(--color-muted)" }}
                >
                  {STYLIST.shortBio}
                </p>
              </Reveal>
              <Reveal delay={3}>
                <div
                  className="grid grid-cols-3 gap-6 pt-8 mb-10"
                  style={{ borderTop: "1px solid var(--color-warm)" }}
                >
                  {STYLIST.stats.slice(0, 3).map((stat) => (
                    <div key={stat.label}>
                      <p
                        className="font-display font-light text-3xl text-[var(--color-onyx)]"
                        style={{ letterSpacing: "-0.02em" }}
                      >
                        {stat.value}
                      </p>
                      <p className="label-tag mt-1">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </Reveal>
              <Reveal delay={4}>
                <Link href="/about" className="btn-luxury">
                  Découvrir mon parcours →
                </Link>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. EVENTS PREVIEW ───────────────────────────────────── */}
      <section className="section-padding bg-[var(--color-ivory)]">
        <div className="container-luxury">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
            <Reveal>
              <span className="label-tag block mb-4">
                Défilés &amp; événements
              </span>
              <h2
                className="font-display font-light"
                style={{
                  fontSize: "clamp(2rem, 5vw, 4rem)",
                  letterSpacing: "-0.02em",
                  lineHeight: 1,
                }}
              >
                Hôtels
                <br />
                <em className="font-light">de prestige</em>
              </h2>
            </Reveal>
            <Reveal delay={2}>
              <Link href="/events" className="btn-luxury">
                Tous les événements →
              </Link>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
            {featuredEvents.map((event, i) => (
              <Reveal key={event.id} delay={(i + 1) as 1 | 2}>
                <Link
                  href="/events"
                  className="group block relative overflow-hidden img-hover-wrap"
                >
                  <ImagePlaceholder
                    alt={event.title}
                    aspectRatio="wide"
                    label={event.venue}
                  />
                  <div className="overlay-dark" />
                  <div className="absolute inset-0 flex flex-col justify-end p-8">
                    <span className="label-tag-light block mb-2">
                      {event.tag} — {event.date}
                    </span>
                    <h3
                      className="font-display font-light text-[var(--color-ivory)]"
                      style={{
                        fontSize: "clamp(1.4rem, 3vw, 2.2rem)",
                        letterSpacing: "-0.01em",
                      }}
                    >
                      {event.title}
                    </h3>
                    <p
                      className="font-body font-light mt-2 text-xs"
                      style={{ color: "rgba(255,255,255,0.65)" }}
                    >
                      {event.venue}
                    </p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. PRESS ────────────────────────────────────────────── */}
      <section
        className="section-padding-sm"
        style={{ background: "var(--color-cream)" }}
      >
        <div className="container-luxury">
          <Reveal>
            <p className="label-tag text-center mb-10">Paru dans</p>
          </Reveal>
          <Reveal delay={1}>
            <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6">
              {STYLIST.press.map((pub) => (
                <span
                  key={pub}
                  className="font-display font-light transition-colors duration-300 hover:text-[var(--color-onyx)] cursor-default"
                  style={{
                    fontSize: "clamp(1rem, 2.5vw, 1.5rem)",
                    letterSpacing: "0.03em",
                    color: "var(--color-muted)",
                  }}
                >
                  {pub}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── 7. CONTACT CTA ──────────────────────────────────────── */}
      <section
        className="section-padding relative overflow-hidden"
        style={{ background: "var(--color-onyx)" }}
      >
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "radial-gradient(circle at 70% 50%, #C4A882 0%, transparent 70%)",
          }}
        />
        <div className="container-luxury text-center relative z-10">
          <Reveal>
            {/* Logo centré dans le CTA */}
            <div className="flex justify-center mb-8">
              <Logo variant="light" width={100} href="" />
            </div>
          </Reveal>
          <Reveal delay={1}>
            <h2
              className="font-display font-light text-[var(--color-ivory)] mb-10"
              style={{
                fontSize: "clamp(2.5rem, 7vw, 6rem)",
                lineHeight: 0.95,
                letterSpacing: "-0.02em",
              }}
            >
              Un projet,
              <br />
              <em className="font-light">une vision ?</em>
            </h2>
          </Reveal>
          <Reveal delay={2}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="btn-luxury-outline"
                style={{
                  color: "var(--color-ivory)",
                  borderColor: "rgba(255,255,255,0.3)",
                  padding: "1rem 2.5rem",
                }}
              >
                Prendre contact
              </Link>
              <a
                href={`https://wa.me/${STYLIST.contact.whatsapp}?text=${encodeURIComponent(STYLIST.contact.whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
