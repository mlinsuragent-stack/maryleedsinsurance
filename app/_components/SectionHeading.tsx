import type { ReactNode } from "react";

export function SectionHeading({
  children,
  id,
  as: Tag = "h2",
}: {
  children: ReactNode;
  id?: string;
  /** Use "h1" when this is the page's main heading. */
  as?: "h1" | "h2";
}) {
  return (
    <Tag
      id={id}
      className="font-heading text-2xl font-bold text-primary sm:text-3xl"
    >
      {children}
    </Tag>
  );
}
