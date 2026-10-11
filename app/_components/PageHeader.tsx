import type { ReactNode } from "react";
import { AccentRule } from "./AccentRule";
import { Container } from "./Container";

/**
 * Top-of-page intro for content pages (bio, contact, blog, reviews): mint
 * (surface) to white gradient with the page's single h1. Contrast at the
 * mint end (worst case): title primary-deep 10.02:1, subline gray-700
 * 8.66:1; eyebrow chip is primary-dark on white, 8.39:1.
 *
 * `children` is an optional aside (e.g. a portrait); when present the
 * header becomes two columns from lg and stacks below the text on mobile.
 * `accentRule` adds the saddle rule bar under the h1. `align="center"`
 * centers the text block (and the rule); meant for headers without an aside.
 */
export function PageHeader({
  eyebrow,
  title,
  subline,
  children,
  accentRule = false,
  align = "start",
}: {
  eyebrow?: string;
  title: string;
  subline: ReactNode;
  children?: ReactNode;
  accentRule?: boolean;
  align?: "start" | "center";
}) {
  return (
    <section
      className="bg-linear-to-b from-surface to-white"
      aria-labelledby="page-title"
    >
      <Container
        className={`py-12 sm:py-16 lg:py-20 ${
          children ? "grid items-center gap-10 lg:grid-cols-2 lg:gap-16" : ""
        }`}
      >
        <div
          className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}
        >
          {eyebrow && (
            <p className="mb-4 inline-flex rounded-full bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-primary-dark shadow-sm sm:text-sm">
              {eyebrow}
            </p>
          )}
          <h1
            id="page-title"
            className="font-heading text-4xl font-extrabold tracking-tight text-primary-deep sm:text-5xl"
          >
            {title}
          </h1>
          {/* mt-4, not the h2s' mt-3: this h1's tighter leading (0-2px
              half-leading vs 3-4px on h2) leaves the same ~16px visible gap. */}
          {accentRule && <AccentRule align={align} className="mt-4" />}
          <p className="mt-4 text-lg leading-relaxed text-gray-700 sm:text-xl">
            {subline}
          </p>
        </div>
        {children}
      </Container>
    </section>
  );
}
