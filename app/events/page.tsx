"use client";

import { useApp, ACTIONS } from "@/context/AppContext";
import Reveal from "@/components/ui/Reveal";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";
import Link from "next/link";

export default function EventsPage() {
  const { filteredEvents, eventTypes, activeEventType, dispatch } = useApp();

  return (
    <>
      {/* ── HEADER ──────────────────────────────────────────────────── */}
      <section
        className="bg-onyx relative overflow-hidden"
        style={{ paddingTop: "var(--nav-height)" }}
      >
        <div className="container-luxury pt-16 pb-12 relative z-10">
          <Reveal>
            <span className="label-tag-light block mb-6">Défilés & Galas</span>
          </Reveal>
          <Reveal delay={1}>
            <h1
              className="font-display font-light text-ivory"
              style={{
                fontSize: "clamp(3rem, 9vw, 7.5rem)",
                lineHeight: 0.9,
                letterSpacing: "-0.025em",
              }}
            >
              Événements
              <br />
              <em className="font-light">de prestige</em>
            </h1>
          </Reveal>
          <Reveal delay={2}>
            <p className="font-body font-light text-ivory/60 text-sm leading-relaxed mt-6 max-w-md">
              Défilés dans les grands hôtels, galas, présentations privées — une
              sélection d'événements mode réalisés à Paris, Milan et sur la Côte
              d'Azur.
            </p>
          </Reveal>
        </div>

        {/* Filter */}
        <div className="border-t border-white/10">
          <div className="container-luxury">
            <div className="flex items-center gap-0 overflow-x-auto">
              {eventTypes.map((type) => (
                <button
                  key={type}
                  onClick={() =>
                    dispatch({ type: ACTIONS.SET_EVENT_TYPE, payload: type })
                  }
                  className={`
                    flex-shrink-0 px-6 py-5 font-body text-xs font-light tracking-widest uppercase
                    border-b-2 transition-all duration-300
                    ${
                      activeEventType === type
                        ? "border-gold text-ivory"
                        : "border-transparent text-ivory/40 hover:text-ivory/70"
                    }
                  `}
                  style={{ letterSpacing: "0.2em" }}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── EVENTS LIST ─────────────────────────────────────────────── */}
      <section className="section-padding bg-ivory">
        <div className="container-luxury">
          <div className="flex flex-col gap-1">
            {filteredEvents.map((event, i) => (
              <Reveal key={event.id} delay={(i % 4) + 1}>
                <article className="group grid grid-cols-1 md:grid-cols-12 gap-0 border border-warm hover:border-onyx transition-colors duration-400">
                  {/* Image */}
                  <div className="md:col-span-5 img-hover-wrap overflow-hidden">
                    <ImagePlaceholder
                      src={event.images?.[0] || event.coverImage}
                      alt={event.title}
                      aspectRatio={i % 2 === 0 ? "wide" : "editorial"}
                      className="w-full h-full"
                    />
                  </div>

                  {/* Content */}
                  <div className="md:col-span-7 p-8 md:p-12 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-6">
                        <span className="label-tag">{event.tag}</span>
                        <span className="label-tag">{event.date}</span>
                      </div>

                      <h2
                        className="font-display font-light text-onyx mb-2"
                        style={{
                          fontSize: "clamp(1.5rem, 3vw, 2.5rem)",
                          letterSpacing: "-0.02em",
                        }}
                      >
                        {event.title}
                      </h2>
                      <p className="font-body font-light text-gold text-sm mb-6">
                        {event.venue} — {event.location}
                      </p>
                      <p className="font-body font-light text-muted text-sm leading-relaxed mb-8 max-w-md">
                        {event.description}
                      </p>
                    </div>

                    {/* Highlights */}
                    <div>
                      <p className="label-tag mb-4">Points clés</p>
                      <ul className="flex flex-col gap-2">
                        {event.highlights.map((h) => (
                          <li
                            key={h}
                            className="flex items-start gap-3 font-body font-light text-xs text-muted"
                          >
                            <span className="text-gold mt-0.5 flex-shrink-0">
                              —
                            </span>
                            {h}
                          </li>
                        ))}
                      </ul>

                      <div className="mt-8 flex items-center gap-2">
                        <span className="label-tag">{event.role}</span>
                      </div>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
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
              Organiser un événement mode ?
            </p>
          </Reveal>
          <Reveal delay={1}>
            <Link href="/contact" className="btn-luxury-outline">
              Contactez-moi
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
