import type { ReactNode } from "react";

export function SectionHeading({
  children,
  id,
  as: Tag = "h2",
  tone = "default",
}: {
  children: ReactNode;
  id?: string;
  /** Use "h1" when this is the page's main heading. */
  as?: "h1" | "h2";
  /** "inverse" for headings on the dark teal band. */
  tone?: "default" | "inverse";
}) {
  return (
    <Tag
      id={id}
      className={`font-heading text-2xl font-bold sm:text-3xl ${
        tone === "inverse" ? "text-white" : "text-primary"
      }`}
    >
      {children}
    </Tag>
  );
}
