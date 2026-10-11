import Link from "next/link";
import { AccentButtonLink } from "./AccentButtonLink";
import { contactInfo, phoneHref } from "./contact-info";
import { Container } from "./Container";
import { MobileNav } from "./MobileNav";

// Bio, Blog, Reviews, and Contact route to their dedicated pages. Services
// links to the in-page "#services" section on the homepage rather than a
// separate route, since that section already exists there. Reviews sits
// after Blog and before Contact, closest to the other content pages.
const navLinks = [
  { href: "/", label: "Home" },
  { href: "/bio", label: "Bio" },
  { href: "/#services", label: "Services" },
  { href: "/blog", label: "Blog" },
  { href: "/reviews", label: "Reviews" },
  { href: "/contact", label: "Contact" },
];

// Dark teal gradient header, same band as CarrierMarquee/Testimonials.
// Contrast on primary-dark (the lighter, worst-case end): surface links
// 7.05:1, white wordmark/hover 8.39:1, white focus ring 8.39:1.
const navLinkClassName =
  "rounded-sm text-sm font-medium text-surface transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary-dark";

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-linear-to-b from-primary-dark to-primary-deep shadow-sm">
      <Container className="flex items-center justify-between py-4">
        <Link
          href="/"
          className="rounded-sm font-heading text-lg font-semibold text-white transition-colors hover:text-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary-dark sm:text-xl"
        >
          Mary Leeds Insurance
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-6 lg:flex">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className={navLinkClassName}>
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <a href={phoneHref} className={navLinkClassName}>
            {contactInfo.phone}
          </a>
          <AccentButtonLink
            href="/contact"
            surface="dark"
            className="px-4 py-2 text-sm"
          >
            Get a Free Quote
          </AccentButtonLink>
        </div>

        <MobileNav navLinks={navLinks} phone={contactInfo.phone} phoneHref={phoneHref} />
      </Container>
    </header>
  );
}
