import type { ReactNode } from "react";

/**
 * White card surface (rounded, subtle border, soft shadow). Exported so
 * elements that can't be a plain div (e.g. the blog's linked post cards)
 * share the same look; add padding/overflow/hover via your own classes.
 * `cardSurfaceClassName` is the same card without the gray border, for
 * callers that supply their own border (the blog's earth-tone trim).
 */
export const cardSurfaceClassName = "rounded-2xl bg-white shadow-md";

export const cardClassName = `${cardSurfaceClassName} border border-gray-200`;

/** Padded white card wrapping a form (contact and review forms). */
export function Card({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`${cardClassName} p-6 sm:p-8 ${className}`}>{children}</div>
  );
}
