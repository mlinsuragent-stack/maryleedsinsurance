import type { ReactNode } from "react";

/** Body paragraph used throughout the bio page. */
export function BioParagraph({ children }: { children: ReactNode }) {
  return (
    <p className="mt-4 text-base leading-relaxed text-gray-700 first-of-type:mt-6 sm:text-lg">
      {children}
    </p>
  );
}
