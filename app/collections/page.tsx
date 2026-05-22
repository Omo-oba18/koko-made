"use client";

import { useApp, ACTIONS } from "@/context/AppContext";
import Reveal from "@/components/ui/Reveal";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";
import Link from "next/link";

export default function CollectionsPage() {
  const {
    filteredCollections,
    collectionCategories,
    activeCollectionCategory,
    dispatch,
  } = useApp();

  return (
    <>
      {/* ── HEADER ──────────────────────────────────────────────────── */}
      <section
        className="bg-ivory relative overflow-hidden"
        style={{ paddingTop: "var(--nav-height)" }}
      >
        <div className="container-luxury pt-16 pb-12">
          <Reveal>
            <span className="label-tag block mb-6">Portfolio</span>
          </Reveal>
          <Reveal delay={1}>
            <h1
              className="font-display font-light text-onyx"
              style={{
                fontSize: "clamp(3rem, 9vw, 7.5rem)",
                lineHeight: 0.9,
                letterSpacing: "-0.025em",
              }}
            >
              Collections
            </h1>
          </Reveal>
          <Reveal delay={2}>
            <p className="font-body font-light text-muted text-sm leading-relaxed mt-6 max-w-md">
              Éditoriaux, campagnes, look books — une sélection de travaux
              réalisés pour des maisons de mode, des magazines et des créateurs
              indépendants.
            </p>
          </Reveal>
        </div>

        {/* ── FILTER BAR ──────────────────────────────────────────── */}
        <div className="border-t border-warm">
          <div className="container-luxury">
            <div className="flex items-center gap-0 overflow-x-auto scrollbar-none">
              {collectionCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() =>
                    dispatch({
                      type: ACTIONS.SET_COLLECTION_CATEGORY,
                      payload: cat,
                    })
                  }
                  className={`
                    flex-shrink-0 px-6 py-5 font-body text-xs font-light tracking-widest uppercase
                    border-b-2 transition-all duration-300
                    ${
                      activeCollectionCategory === cat
                        ? "border-onyx text-onyx"
                        : "border-transparent text-muted hover:text-onyx hover:border-warm"
                    }
                  `}
                  style={{ letterSpacing: "0.2em" }}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── COLLECTIONS GRID ────────────────────────────────────────── */}
      <section className="section-padding bg-ivory">
        <div className="container-luxury">
          {filteredCollections.length === 0 ? (
            <div className="py-32 text-center">
              <p className="label-tag">
                Aucune collection dans cette catégorie
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
              {filteredCollections.map((col, i) => {
                // Get the first image from the collection's images array for the cover
                const coverImage =
                  col.images && col.images.length > 0
                    ? col.images[0]
                    : col.coverImage;

                // Determine aspect ratio based on index for variety
                const aspectRatios: (
                  | "portrait"
                  | "editorial"
                  | "square"
                  | "wide"
                  | "tall"
                )[] = ["portrait", "editorial", "square", "wide", "tall"];
                const aspectRatio = aspectRatios[i % aspectRatios.length];

                return (
                  <Reveal key={col.id} delay={(i % 3) + 1} variant="scale">
                    <article className="group cursor-pointer">
                      {/* Image */}
                      <div className="img-hover-wrap relative mb-6">
                        <ImagePlaceholder
                          src={coverImage}
                          alt={col.title}
                          aspectRatio={aspectRatio}
                          className="w-full"
                        />
                        {col.featured && (
                          <div className="absolute top-4 left-4 bg-onyx text-ivory px-3 py-1 z-10">
                            <span className="font-body text-xs font-light tracking-widest uppercase">
                              Sélection
                            </span>
                          </div>
                        )}
                      </div>

                      {/* Info */}
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1 min-w-0">
                          <span className="label-tag block mb-2">
                            {col.category} — {col.season}
                          </span>
                          <h2
                            className="font-display font-light text-onyx mb-3"
                            style={{
                              fontSize: "clamp(1.3rem, 2.5vw, 1.8rem)",
                              letterSpacing: "-0.01em",
                            }}
                          >
                            {col.title}
                          </h2>
                          <p className="font-body font-light text-muted text-xs leading-relaxed line-clamp-3">
                            {col.description}
                          </p>
                        </div>
                        <span className="text-gold text-xl mt-1 flex-shrink-0 group-hover:translate-x-1 transition-transform duration-400">
                          →
                        </span>
                      </div>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mt-5 pt-5 border-t border-warm/60">
                        {col.tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="font-body text-xs font-light text-muted tracking-wide"
                            style={{
                              fontSize: "0.65rem",
                              letterSpacing: "0.15em",
                            }}
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </article>
                  </Reveal>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────────────────── */}
      <section className="section-padding-sm bg-cream">
        <div className="container-luxury flex flex-col md:flex-row items-center justify-between gap-8">
          <Reveal>
            <p
              className="font-display font-light text-onyx"
              style={{
                fontSize: "clamp(1.5rem, 3vw, 2.5rem)",
                letterSpacing: "-0.01em",
              }}
            >
              Vous avez un projet créatif ?
            </p>
          </Reveal>
          <Reveal delay={1}>
            <Link href="/contact" className="btn-luxury-outline">
              Discutons-en
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
