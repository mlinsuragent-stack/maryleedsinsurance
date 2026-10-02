"use client";

import { useReducedMotion } from "framer-motion";
import { useRef, useState } from "react";
import type { ReactNode } from "react";
import { Container } from "../Container";

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
      <Container>
        <button
          type="button"
          onClick={togglePaused}
          aria-pressed={paused}
          className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-primary/20 bg-white p-2 text-primary shadow-sm transition-colors hover:bg-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
        >
          <span className="sr-only">
            {paused ? `Play ${label}` : `Pause ${label}`}
          </span>
          {paused ? (
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-4 w-4"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          ) : (
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-4 w-4"
            >
              <path d="M6 5h4v14H6zM14 5h4v14h-4z" />
            </svg>
          )}
        </button>
      </Container>
      <div ref={viewportRef}>{children}</div>
    </div>
  );
}
