import type { ReactNode } from "react";

/**
 * Dark teal accent panel, same gradient as the Header and CarrierMarquee
 * band. Text on primary-dark (the lighter, worst-case end): white 8.39:1,
 * surface 7.05:1, accent-light 5.90:1, white/80 6.01:1. Focus rings inside
 * should be white with a primary-dark offset (AccentButtonLink
 * `surface="dark"`).
 */
export function DarkPanel({
  children,
  as: Tag = "div",
  labelledBy,
  className = "",
}: {
  children: ReactNode;
  as?: "div" | "section" | "aside";
  /** id of the panel's heading, for section/aside landmarks. */
  labelledBy?: string;
  className?: string;
}) {
  return (
    <Tag
      aria-labelledby={labelledBy}
      className={`rounded-2xl bg-linear-to-b from-primary-dark to-primary-deep p-6 text-white shadow-lg sm:p-8 ${className}`}
    >
      {children}
    </Tag>
  );
}

/** Heading for content inside a DarkPanel (white on primary-dark 8.39:1). */
export function DarkPanelHeading({
  id,
  children,
}: {
  id?: string;
  children: ReactNode;
}) {
  return (
    <h2
      id={id}
      className="font-heading text-xl font-semibold text-white sm:text-2xl"
    >
      {children}
    </h2>
  );
}
