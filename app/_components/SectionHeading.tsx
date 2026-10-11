import type { ReactNode } from "react";

/** Section-level h2. Page titles (h1) use PageHeader or the homepage Hero. */
export function SectionHeading({
  children,
  id,
  tone = "default",
}: {
  children: ReactNode;
  id?: string;
  /** "inverse" for headings on the dark teal band. */
  tone?: "default" | "inverse";
}) {
  return (
    <h2
      id={id}
      className={`font-heading text-2xl font-bold sm:text-3xl ${
        tone === "inverse" ? "text-white" : "text-primary"
      }`}
    >
      {children}
    </h2>
  );
}
