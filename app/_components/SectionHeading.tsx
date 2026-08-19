import type { ReactNode } from "react";

export function SectionHeading({
  children,
  id,
}: {
  children: ReactNode;
  id?: string;
}) {
  return (
    <h2
      id={id}
      className="font-heading text-2xl font-bold text-primary sm:text-3xl"
    >
      {children}
    </h2>
  );
}
