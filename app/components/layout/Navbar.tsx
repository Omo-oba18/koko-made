"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useApp, ACTIONS } from "@/context/AppContext";
import Logo from "@/components/ui/Logo";

interface NavLink {
  href: string;
  label: string;
}

const NAV_LINKS: NavLink[] = [
  { href: "/", label: "Accueil" },
  { href: "/about", label: "À Propos" },
  { href: "/collections", label: "Collections" },
  { href: "/events", label: "Événements" },
  { href: "/gallery", label: "Galerie" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const { navScrolled, navOpen, stylist, dispatch } = useApp();
  const isHome = pathname === "/";

  // Logo variant logic:
  // - Homepage + not scrolled = dark bg overlay → white logo
  // - Otherwise = light bg → dark logo
  const useLightLogo = isHome && !navScrolled && !navOpen;

  useEffect(() => {
    const onScroll = () => {
      dispatch({
        type: ACTIONS.SET_NAV_SCROLLED,
        payload: window.scrollY > 40,
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [dispatch]);

  useEffect(() => {
    dispatch({ type: ACTIONS.CLOSE_NAV });
  }, [pathname, dispatch]);

  useEffect(() => {
    document.body.style.overflow = navOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [navOpen]);

  return (
    <>
      {/* ── Fixed header ─────────────────────────────────────────── */}
      <header
        className={[
          "fixed top-0 left-0 right-0 z-50 transition-all",
          navScrolled || !isHome
            ? "bg-[var(--color-ivory)]/95 backdrop-blur-sm border-b border-[var(--color-warm)]/60"
            : "bg-transparent",
        ].join(" ")}
        style={{
          height: "var(--nav-height)",
          transitionDuration: "500ms",
          transitionTimingFunction: "var(--transition-luxury)",
        }}
      >
        <div className="container-luxury h-full flex items-center justify-between gap-8">
          {/* Logo */}
          <Logo variant={useLightLogo ? "light" : "dark"} width={300} />

          {/* Desktop nav */}
          <nav
            className="hidden lg:flex items-center gap-10"
            aria-label="Navigation principale"
          >
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={[
                  "nav-link transition-colors duration-300",
                  pathname === link.href ? "active" : "",
                  useLightLogo ? "nav-link-light" : "",
                ]
                  .filter(Boolean)
                  .join(" ")}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Location tag (desktop) */}
          <div className="hidden lg:block flex-shrink-0">
            <span
              className={["label-tag", useLightLogo ? "label-tag-light" : ""]
                .filter(Boolean)
                .join(" ")}
            >
              {stylist.contact.location.split("—")[0].trim()}
            </span>
          </div>

          {/* Hamburger */}
          <button
            onClick={() => dispatch({ type: ACTIONS.TOGGLE_NAV })}
            className="lg:hidden flex flex-col justify-center gap-[6px] w-10 h-10 p-2"
            aria-label={navOpen ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={navOpen}
          >
            <span
              className="block h-px transition-all duration-400 origin-center"
              style={{
                width: "24px",
                background:
                  useLightLogo && !navOpen
                    ? "rgba(255,255,255,0.9)"
                    : "var(--color-onyx)",
                transform: navOpen ? "rotate(45deg) translateY(5px)" : "none",
                transitionTimingFunction: "var(--transition-luxury)",
              }}
            />
            <span
              className="block h-px transition-all duration-400"
              style={{
                width: navOpen ? "0" : "16px",
                background:
                  useLightLogo && !navOpen
                    ? "rgba(255,255,255,0.9)"
                    : "var(--color-onyx)",
                opacity: navOpen ? 0 : 1,
                transitionTimingFunction: "var(--transition-luxury)",
              }}
            />
            <span
              className="block h-px transition-all duration-400 origin-center"
              style={{
                width: "24px",
                background:
                  useLightLogo && !navOpen
                    ? "rgba(255,255,255,0.9)"
                    : "var(--color-onyx)",
                transform: navOpen ? "rotate(-45deg) translateY(-5px)" : "none",
                transitionTimingFunction: "var(--transition-luxury)",
              }}
            />
          </button>
        </div>
      </header>

      {/* ── Mobile overlay ───────────────────────────────────────── */}
      <div
        className={[
          "fixed inset-0 z-40 bg-[var(--color-ivory)] flex flex-col",
          "transition-all",
          navOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none",
        ].join(" ")}
        style={{
          transitionDuration: "500ms",
          transitionTimingFunction: "var(--transition-luxury)",
          paddingTop: "var(--nav-height)",
        }}
      >
        {/* Mobile logo strip */}
        <div className="container-luxury pt-6 pb-2 border-b border-[var(--color-warm)]">
          <Logo variant="dark" width={100} href="" />
        </div>

        {/* Links */}
        <nav
          className="flex-1 flex flex-col justify-center container-luxury gap-1"
          aria-label="Navigation mobile"
        >
          {NAV_LINKS.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              className={[
                "font-display font-light text-[var(--color-onyx)] py-3",
                "border-b border-[var(--color-warm)]/40",
                "transition-all",
                pathname === link.href
                  ? "text-[var(--color-gold)]"
                  : "hover:text-[var(--color-gold)]",
                navOpen
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-6",
              ]
                .filter(Boolean)
                .join(" ")}
              style={{
                fontSize: "clamp(2rem, 7vw, 3.5rem)",
                letterSpacing: "-0.015em",
                transitionDuration: "500ms",
                transitionDelay: navOpen ? `${i * 0.065}s` : "0s",
                transitionTimingFunction: "var(--transition-reveal)",
              }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Footer info */}
        <div className="container-luxury pb-10 pt-4 border-t border-[var(--color-warm)]">
          <p className="label-tag">{stylist.contact.location}</p>
          <a
            href={`mailto:${stylist.contact.email}`}
            className="label-tag mt-1 block hover:text-[var(--color-onyx)] transition-colors duration-300"
          >
            {stylist.contact.email}
          </a>
        </div>
      </div>
    </>
  );
}
