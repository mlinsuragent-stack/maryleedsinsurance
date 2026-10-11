import type { ReactNode } from "react";

/**
 * White card surface (rounded, subtle border, soft shadow). Exported so
 * elements that can't be a plain div (e.g. the blog's linked post cards)
 * share the same look; add padding/overflow/hover via your own classes.
 */
export const cardClassName =
  "rounded-2xl border border-gray-200 bg-white shadow-md";

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
