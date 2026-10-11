"use client";

import Link from "next/link";
import { useState } from "react";
import { AccentButtonLink } from "./AccentButtonLink";

type NavLink = {
  href: string;
  label: string;
};

// Panel sits on primary-deep (the gradient's dark end): surface links
// 10.02:1, 7.49:1 on the white/10 hover fill; white focus ring 11.93:1.
const menuLinkClassName =
  "block rounded-sm px-2 py-3 text-base font-medium text-surface transition-colors hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary-deep";

/**
 * Hamburger toggle + slide-down panel for small screens. This is the only
 * interactive piece of the header, kept as a small client leaf so Header
 * itself can stay a Server Component.
 */
export function MobileNav({
  navLinks,
  phone,
  phoneHref,
}: {
  navLinks: NavLink[];
  phone: string;
  phoneHref: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
        aria-controls="mobile-nav-panel"
        className="inline-flex h-11 w-11 items-center justify-center rounded-md p-2 text-white transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary-dark"
      >
        <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-6 w-6"
        >
          {open ? (
            <path d="M18 6 6 18M6 6l12 12" />
          ) : (
            <path d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {open && (
        <div
          id="mobile-nav-panel"
          className="absolute inset-x-0 top-full border-t border-white/10 bg-primary-deep px-4 pb-6 pt-2 shadow-lg"
        >
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={menuLinkClassName}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <a
                href={phoneHref}
                onClick={() => setOpen(false)}
                className={menuLinkClassName}
              >
                {phone}
              </a>
            </li>
            <li className="mt-2">
              <AccentButtonLink
                href="/contact"
                surface="deep"
                onClick={() => setOpen(false)}
                className="w-full px-4 py-3 text-sm"
              >
                Get a Free Quote
              </AccentButtonLink>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
