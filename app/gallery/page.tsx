"use client";

import { useEffect } from "react";
import { useApp, ACTIONS } from "@/context/AppContext";
import Reveal from "@/components/ui/Reveal";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";

export default function GalleryPage() {
  const {
    filteredGallery,
    galleryCategories,
    activeGalleryCategory,
    lightboxOpen,
    lightboxIndex,
    currentLightboxItem,
    dispatch,
  } = useApp();

  // Keyboard navigation for lightbox
  useEffect(() => {
    if (!lightboxOpen) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") dispatch({ type: ACTIONS.LIGHTBOX_NEXT });
      if (e.key === "ArrowLeft") dispatch({ type: ACTIONS.LIGHTBOX_PREV });
      if (e.key === "Escape") dispatch({ type: ACTIONS.CLOSE_LIGHTBOX });
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [lightboxOpen, dispatch]);

  // Lock scroll when lightbox open
  useEffect(() => {
    document.body.style.overflow = lightboxOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [lightboxOpen]);

  return (
    <>
      {/* ── HEADER ──────────────────────────────────────────────────── */}
      <section
        className="bg-ivory relative"
        style={{ paddingTop: "var(--nav-height)" }}
      >
        <div className="container-luxury pt-16 pb-8">
          <Reveal>
            <span className="label-tag block mb-6">Galerie</span>
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
              Archive
              <br />
              <em className="font-light">visuelle</em>
            </h1>
          </Reveal>
          <Reveal delay={2}>
            <p className="font-body font-light text-muted text-sm leading-relaxed mt-6 max-w-md">
              Une sélection d'images issues de 10 ans de collaborations —
              éditoriaux, backstages, défilés et campagnes.
            </p>
          </Reveal>
        </div>

        {/* Filter bar */}
        <div className="border-t border-warm mt-6">
          <div className="container-luxury">
            <div className="flex items-center gap-0 overflow-x-auto">
              {galleryCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() =>
                    dispatch({
                      type: ACTIONS.SET_GALLERY_CATEGORY,
                      payload: cat,
                    })
                  }
                  className={`
                    flex-shrink-0 px-5 py-5 font-body text-xs font-light tracking-widest uppercase
                    border-b-2 transition-all duration-300
                    ${
                      activeGalleryCategory === cat
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

      {/* ── MASONRY GALLERY ─────────────────────────────────────────── */}
      <section className="section-padding bg-ivory">
        <div className="container-luxury">
          <div className="masonry-grid">
            {filteredGallery.map((item, i) => (
              <Reveal
                key={item.id}
                className="masonry-item"
                variant="scale"
                delay={(i % 3) + 1}
              >
                <button
                  className="w-full block group img-hover-wrap relative text-left"
                  onClick={() =>
                    dispatch({ type: ACTIONS.OPEN_LIGHTBOX, payload: i })
                  }
                  aria-label={`Ouvrir : ${item.alt}`}
                >
                  {/* Image */}
                  <div className="relative overflow-hidden">
                    <ImagePlaceholder
                      alt={item.alt}
                      aspectRatio={
                        item.size === "tall"
                          ? "portrait"
                          : item.size === "wide"
                            ? "wide"
                            : "square"
                      }
                      label={item.caption}
                    />
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-onyx/0 group-hover:bg-onyx/30 transition-all duration-400 flex items-center justify-center">
                      <div className="opacity-0 group-hover:opacity-100 transition-all duration-400 translate-y-3 group-hover:translate-y-0">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="white"
                          strokeWidth="1"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <circle cx="11" cy="11" r="8" />
                          <line x1="21" y1="21" x2="16.65" y2="16.65" />
                          <line x1="11" y1="8" x2="11" y2="14" />
                          <line x1="8" y1="11" x2="14" y2="11" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  {/* Caption */}
                  <div className="mt-3 flex items-center justify-between">
                    <div>
                      <p className="font-body font-light text-onyx text-xs">
                        {item.caption}
                      </p>
                      <p className="label-tag mt-0.5">
                        {item.category} — {item.year}
                      </p>
                    </div>
                  </div>
                </button>
              </Reveal>
            ))}
          </div>

          {filteredGallery.length === 0 && (
            <div className="py-32 text-center">
              <p className="label-tag">Aucune image dans cette catégorie</p>
            </div>
          )}
        </div>
      </section>

      {/* ── LIGHTBOX ────────────────────────────────────────────────── */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-50 bg-onyx/95 flex items-center justify-center backdrop-blur-sm"
          onClick={() => dispatch({ type: ACTIONS.CLOSE_LIGHTBOX })}
        >
          {/* Content */}
          <div
            className="relative w-full max-w-4xl mx-4 animate-fade-in"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Image */}
            {currentLightboxItem && (
              <ImagePlaceholder
                alt={currentLightboxItem.alt}
                aspectRatio={
                  currentLightboxItem.size === "tall"
                    ? "portrait"
                    : currentLightboxItem.size === "wide"
                      ? "wide"
                      : "square"
                }
                label={currentLightboxItem.caption}
                className="max-h-[80vh] w-full"
              />
            )}

            {/* Caption bar */}
            <div className="mt-4 flex items-center justify-between">
              <div>
                <p className="font-body font-light text-ivory text-sm">
                  {currentLightboxItem?.caption}
                </p>
                <p className="label-tag-light mt-1">
                  {currentLightboxItem?.category} — {currentLightboxItem?.year}
                </p>
              </div>
              <p className="label-tag-light">
                {lightboxIndex + 1} / {filteredGallery.length}
              </p>
            </div>
          </div>

          {/* Navigation */}
          <button
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-ivory/60 hover:text-ivory transition-colors duration-300 p-4"
            onClick={(e) => {
              e.stopPropagation();
              dispatch({ type: ACTIONS.LIGHTBOX_PREV });
            }}
            aria-label="Image précédente"
          >
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
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>
          <button
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-ivory/60 hover:text-ivory transition-colors duration-300 p-4"
            onClick={(e) => {
              e.stopPropagation();
              dispatch({ type: ACTIONS.LIGHTBOX_NEXT });
            }}
            aria-label="Image suivante"
          >
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
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>

          {/* Close */}
          <button
            className="absolute top-6 right-6 text-ivory/60 hover:text-ivory transition-colors duration-300 p-3"
            onClick={() => dispatch({ type: ACTIONS.CLOSE_LIGHTBOX })}
            aria-label="Fermer la galerie"
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>
      )}
    </>
  );
}
