import type { ReactNode } from "react";
import { Container } from "./Container";

/**
 * Top-of-page intro for content pages (bio, contact, blog, reviews): mint
 * (surface) to white gradient with the page's single h1. Contrast at the
 * mint end (worst case): title primary-deep 10.02:1, subline gray-700
 * 8.66:1; eyebrow chip is primary-dark on white, 8.39:1.
 *
 * `children` is an optional aside (e.g. a portrait); when present the
 * header becomes two columns from lg and stacks below the text on mobile.
 */
export function PageHeader({
  eyebrow,
  title,
  subline,
  children,
}: {
  eyebrow?: string;
  title: string;
  subline: ReactNode;
  children?: ReactNode;
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
        <div className="max-w-2xl">
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
          <p className="mt-4 text-lg leading-relaxed text-gray-700 sm:text-xl">
            {subline}
          </p>
        </div>
        {children}
      </Container>
    </section>
  );
}
