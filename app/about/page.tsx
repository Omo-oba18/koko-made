import Link from "next/link";
import { STYLIST } from "@/data/stylist";
import Reveal from "@/components/ui/Reveal";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";

export const metadata = {
  title: "À Propos",
  description: `Découvrez le parcours de ${STYLIST.name}, styliste et directrice artistique entre Paris et Milan.`,
};

export default function AboutPage() {
  return (
    <>
      {/* ── PAGE HEADER ─────────────────────────────────────────────── */}
      <section
        className="relative flex items-end overflow-hidden bg-cream"
        style={{ paddingTop: "var(--nav-height)", minHeight: "55vh" }}
      >
        <div className="container-luxury pb-16 relative z-10">
          <Reveal>
            <span className="label-tag block mb-6">À Propos</span>
          </Reveal>
          <Reveal delay={1}>
            <h1
              className="font-display font-light text-onyx"
              style={{
                fontSize: "clamp(3rem, 9vw, 8rem)",
                lineHeight: 0.9,
                letterSpacing: "-0.025em",
              }}
            >
              Madeleine
              <br />
              <em className="font-light">KOKO</em>
            </h1>
          </Reveal>
          <Reveal delay={2}>
            <p className="mt-8 font-body font-light text-muted text-sm leading-relaxed max-w-md">
              {STYLIST.tagline}
            </p>
          </Reveal>
        </div>

        {/* Decorative line */}
        <div className="absolute right-0 top-0 bottom-0 w-px bg-warm hidden md:block" />
      </section>

      {/* ── PORTRAIT + OPENING BIO ──────────────────────────────────── */}
      <section className="section-padding bg-ivory">
        <div className="container-luxury">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-20 items-start">
            {/* Portrait column */}
            <div className="md:col-span-5 md:sticky md:top-28">
              <Reveal variant="scale">
                <ImagePlaceholder
                  src="/assets/images/about/portrait-main.jpg"
                  alt="Madeleine KOKO — Portrait Studio"
                  aspectRatio="portrait"
                />
              </Reveal>
              {/* Stats */}
              <Reveal delay={1}>
                <div className="grid grid-cols-2 gap-4 mt-8">
                  {STYLIST.stats.map((stat) => (
                    <div key={stat.label} className="p-5 bg-cream">
                      <p
                        className="font-display font-light text-3xl text-onyx"
                        style={{ letterSpacing: "-0.02em" }}
                      >
                        {stat.value}
                      </p>
                      <p className="label-tag mt-1">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>

            {/* Bio text column */}
            <div className="md:col-span-7">
              <Reveal>
                <span className="label-tag block mb-8">Biographie</span>
              </Reveal>

              {STYLIST.fullBio.map((para, i) => (
                <Reveal key={i} delay={(i % 3) + 1}>
                  <p
                    className="font-body font-light text-muted leading-relaxed mb-8"
                    style={{ fontSize: i === 0 ? "1.05rem" : "0.9rem" }}
                  >
                    {para}
                  </p>
                  {i === 0 && <div className="line-gold mb-8" />}
                </Reveal>
              ))}

              {/* Location / Contact info */}
              <Reveal delay={2}>
                <div className="pt-10 border-t border-warm mt-4">
                  <div className="grid grid-cols-2 gap-8">
                    <div>
                      <p className="label-tag mb-2">Studio</p>
                      <p className="font-body font-light text-sm text-onyx">
                        {STYLIST.contact.studio}
                      </p>
                    </div>
                    <div>
                      <p className="label-tag mb-2">Contact</p>
                      <a
                        href={`mailto:${STYLIST.contact.email}`}
                        className="font-body font-light text-sm text-onyx hover:text-gold transition-colors duration-300"
                      >
                        {STYLIST.contact.email}
                      </a>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── APPROACH — inspiré du style PDF ─────────────────────────── */}
      <section className="section-padding bg-cream">
        <div className="container-luxury">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-6">
              <Reveal>
                <span className="label-tag block mb-6">Mon approche</span>
              </Reveal>
              <Reveal delay={1}>
                <h2
                  className="font-display font-light text-onyx mb-8"
                  style={{
                    fontSize: "clamp(2rem, 4.5vw, 3.5rem)",
                    lineHeight: 1.05,
                    letterSpacing: "-0.02em",
                  }}
                >
                  Une vision
                  <br />
                  <em>mobile-first</em>
                  <br />
                  de la mode.
                </h2>
              </Reveal>
              <Reveal delay={2}>
                <p className="font-body font-light text-muted text-sm leading-relaxed mb-6 max-w-md">
                  Dans un monde visuel en perpétuel mouvement, chaque image doit
                  fonctionner sur tous les formats — du grand écran de défilé au
                  téléphone d'un acheteur à Tokyo. Mon travail s'adapte, se
                  transforme, reste cohérent.
                </p>
              </Reveal>
              <Reveal delay={3}>
                <p className="font-body font-light text-muted text-sm leading-relaxed max-w-md">
                  Je travaille les couleurs, les matières et les silhouettes
                  pour créer des univers accessibles dans leur lecture,
                  exigeants dans leur exécution. Chaque projet est une
                  collaboration totale — du moodboard au set final.
                </p>
              </Reveal>
            </div>

            {/* Two portrait images side by side */}
            <div className="md:col-span-6 grid grid-cols-2 gap-4">
              <Reveal variant="scale" delay={1}>
                <ImagePlaceholder
                  src="/assets/images/about/atelier.jpg"
                  alt="Backstage — atelier"
                  aspectRatio="portrait"
                />
              </Reveal>
              <Reveal variant="scale" delay={2} className="mt-10">
                <ImagePlaceholder
                  src="/assets/images/about/onset.jpg"
                  alt="On-set — défilé"
                  aspectRatio="portrait"
                />
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── CLIENTS / COLLABORATIONS ────────────────────────────────── */}
      <section className="section-padding bg-ivory">
        <div className="container-luxury">
          <Reveal>
            <span className="label-tag block mb-4 text-center">
              Collaborations
            </span>
          </Reveal>
          <Reveal delay={1}>
            <h2
              className="font-display font-light text-onyx text-center mb-16"
              style={{
                fontSize: "clamp(1.8rem, 4vw, 3rem)",
                letterSpacing: "-0.02em",
              }}
            >
              J'ai travaillé avec
            </h2>
          </Reveal>

          {/* Client grid — inspired by PDF's logo row */}
          <Reveal delay={2}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-warm">
              {[
                { name: "Maison Delacroix", role: "Direction Artistique" },
                { name: "Vogue Italia", role: "Stylisme Éditorial" },
                { name: "Atelier Bianchi", role: "Look Book" },
                { name: "Harper's Bazaar", role: "Campagne" },
                { name: "Studio NV Paris", role: "Styling Mode" },
                { name: "Bijoux Hoffmann", role: "Campagne Joaillerie" },
                { name: "Maison Céleste", role: "Défilé Couture" },
                { name: "Numéro Magazine", role: "Éditorial" },
              ].map((client) => (
                <div
                  key={client.name}
                  className="bg-ivory p-8 hover:bg-cream transition-colors duration-400 text-center"
                >
                  <p className="font-display font-light text-lg text-onyx mb-1">
                    {client.name}
                  </p>
                  <p className="label-tag">{client.role}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── PARU DANS ───────────────────────────────────────────────── */}
      <section className="section-padding-sm bg-onyx">
        <div className="container-luxury">
          <Reveal>
            <p className="label-tag-light text-center mb-8">Paru dans</p>
          </Reveal>
          <Reveal delay={1}>
            <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-5">
              {STYLIST.press.map((pub) => (
                <span
                  key={pub}
                  className="font-display font-light text-ivory/50 hover:text-ivory transition-colors duration-300"
                  style={{ fontSize: "clamp(1rem, 2.5vw, 1.5rem)" }}
                >
                  {pub}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────────────────── */}
      <section className="section-padding bg-cream">
        <div className="container-luxury text-center">
          <Reveal>
            <h2
              className="font-display font-light text-onyx mb-8"
              style={{
                fontSize: "clamp(2rem, 5vw, 4rem)",
                letterSpacing: "-0.02em",
              }}
            >
              Un projet ensemble ?
            </h2>
          </Reveal>
          <Reveal delay={1}>
            <Link href="/contact" className="btn-luxury-outline inline-flex">
              Prendre contact
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
