"use client";

import { useReducedMotion } from "framer-motion";
import { useRef, useState } from "react";
import type { ReactNode } from "react";

/**
 * Wraps a marquee (CarrierMarquee, Testimonials) with a visible,
 * keyboard-focusable pause/play toggle button.
 *
 * Both marquees already pause on `:hover`/`:focus-within` via CSS (see
 * `.animate-marquee` in globals.css), but neither contains a focusable
 * element, so `group-focus-within` can never be triggered by a keyboard-only
 * visitor (WCAG 2.2.2). This button fixes that directly: it sets
 * `animationPlayState` on any `.animate-marquee` element it wraps, which
 * takes priority over the CSS hover/focus rule while paused, and falls back
 * to that rule (hover still pauses) once un-paused.
 *
 * Hidden entirely under `prefers-reduced-motion`, since the marquee is
 * already static in that case (see globals.css) and the toggle would be a
 * no-op.
 *
 * Styled as an unobtrusive ghost button for the dark teal marquee bands. It
 * is absolutely positioned in the bottom-right corner of the nearest
 * positioned ancestor, so the caller's band `<section>` must be `relative`
 * (and leave enough bottom padding for it). It comes after the marquee in
 * DOM/tab order.
 */
export function MarqueePauseToggle({
  children,
  label,
}: {
  children: ReactNode;
  label: string;
}) {
  const [paused, setPaused] = useState(false);
  const viewportRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <>{children}</>;
  }

  const togglePaused = () => {
    const next = !paused;
    setPaused(next);
    viewportRef.current
      ?.querySelectorAll<HTMLElement>(".animate-marquee")
      .forEach((el) => {
        el.style.animationPlayState = next ? "paused" : "";
      });
  };

  return (
    <div>
      <div ref={viewportRef}>{children}</div>
      <button
        type="button"
        onClick={togglePaused}
        aria-pressed={paused}
        className="absolute bottom-2 right-2 inline-flex h-8.5 w-8.5 items-center justify-center rounded-full border border-white/30 bg-transparent text-white opacity-50 transition-opacity hover:opacity-100 focus-visible:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-primary-deep sm:bottom-3 sm:right-3"
      >
        <span className="sr-only">
          {paused ? `Play ${label}` : `Pause ${label}`}
        </span>
        {paused ? (
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-3.5 w-3.5"
          >
            <path d="M8 5v14l11-7z" />
          </svg>
        ) : (
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-3.5 w-3.5"
          >
            <path d="M6 5h4v14H6zM14 5h4v14h-4z" />
          </svg>
        )}
      </button>
    </div>
  );
}
