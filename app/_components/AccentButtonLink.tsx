import Link from "next/link";
import type { ReactNode } from "react";

// Focus ring per background, keyed by `surface` (see below).
const focusClassNames = {
  light: "focus-visible:ring-primary focus-visible:ring-offset-white",
  primary: "focus-visible:ring-white focus-visible:ring-offset-primary",
  dark: "focus-visible:ring-white focus-visible:ring-offset-primary-dark",
  deep: "focus-visible:ring-white focus-visible:ring-offset-primary-deep",
} as const;

/**
 * Accent (orange) call-to-action link, e.g. "Get a Free Quote". Text is
 * primary-deep on accent (5.83:1; 4.98:1 at hover:bg-accent/90 over
 * primary-deep, WCAG AA). `surface` names the background the button sits on
 * so the focus ring's offset gap matches it: "light" = white (primary ring),
 * "primary" = hero teal, "dark" = primary-dark (header), "deep" =
 * primary-deep (open mobile menu panel); the dark variants use a white ring
 * (>= 5.09:1 on all three). Sizing, width, and margins come from `className`.
 *
 * `external` renders a plain <a> that opens in a new tab (with
 * rel="noopener noreferrer" and a screen-reader hint) instead of next/link,
 * for off-site URLs such as the Google review link.
 */
export function AccentButtonLink({
  href,
  children,
  surface,
  className = "",
  onClick,
  external = false,
}: {
  href: string;
  children: ReactNode;
  surface: keyof typeof focusClassNames;
  className?: string;
  onClick?: () => void;
  external?: boolean;
}) {
  const classNames = `inline-flex items-center justify-center rounded-md bg-accent font-semibold text-primary-deep shadow-sm transition-colors hover:bg-accent/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${focusClassNames[surface]} ${className}`;

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        onClick={onClick}
        className={classNames}
      >
        {children}
        <span className="sr-only"> (opens in a new tab)</span>
      </a>
    );
  }

  return (
    <Link href={href} onClick={onClick} className={classNames}>
      {children}
    </Link>
  );
}
