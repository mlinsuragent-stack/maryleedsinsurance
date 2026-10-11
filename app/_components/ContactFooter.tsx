import Link from "next/link";
import {
  contactInfo as contact,
  licensedStatesText,
  phoneHref,
} from "./contact-info";
import { Container } from "./Container";

const exploreLinks = [
  { href: "/bio", label: "Bio" },
  { href: "/blog", label: "Blog" },
  { href: "/reviews", label: "Leave a review" },
  { href: "/contact", label: "Get a quote" },
];

// Contrast on primary-deep: white 11.93:1, surface 10.02:1, white/75
// (composited) 7.43:1; white focus ring 11.93:1.
const linkClassName =
  "rounded-sm text-surface underline-offset-4 transition-colors hover:text-white hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary-deep";

// Stacked on mobile; from sm the intro spans the top row with Contact and
// Explore side by side below; from lg one row (2/5, 2/5, 1/5) so the email
// address fits on one line.
const columnHeadingClassName =
  "text-sm font-semibold uppercase tracking-wide text-white";

export function ContactFooter() {
  return (
    <footer className="border-t-3 border-saddle bg-primary-deep">
      <Container className="py-12">
        <div className="grid gap-10 sm:grid-cols-2 sm:gap-8 lg:grid-cols-5">
          <div className="sm:col-span-2">
            <p className="font-heading text-lg font-semibold text-white sm:text-xl">
              Mary Leeds Insurance
            </p>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-surface sm:text-base">
              Family-owned, Colorado-based. Helping individuals, families and
              businesses understand their insurance and make confident
              decisions.
            </p>
          </div>

          <div className="lg:col-span-2">
            <h2 className={columnHeadingClassName}>Contact</h2>
            <address className="mt-4 flex flex-col gap-2 text-sm not-italic text-surface sm:text-base">
              <span>{contact.address}</span>
              <a href={phoneHref} className={`self-start ${linkClassName}`}>
                {contact.phone}
              </a>
              <a
                href={`mailto:${contact.email}`}
                className={`self-start ${linkClassName}`}
              >
                {contact.email}
              </a>
            </address>
          </div>

          <div>
            <h2 className={columnHeadingClassName}>Explore</h2>
            <nav aria-label="Footer" className="mt-4">
              <ul className="flex flex-col gap-2 text-sm sm:text-base">
                {exploreLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className={linkClassName}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <p className="mt-4 text-xs text-white/75 sm:text-sm">
              Licensed in {licensedStatesText}
            </p>
          </div>
        </div>

        <p className="mt-10 border-t border-white/15 pt-6 text-xs text-white/75">
          &copy; {new Date().getFullYear()} Mary Leeds Insurance. All rights
          reserved.
        </p>
      </Container>
    </footer>
  );
}
