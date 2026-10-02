import Link from "next/link";
import { Container } from "./Container";
import { MobileNav } from "./MobileNav";

const phone = "970-985-5845";

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

const navLinkClassName =
  "rounded-sm text-sm font-medium text-white transition-colors hover:text-white/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary";

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-primary shadow-sm">
      <Container className="flex items-center justify-between py-4">
        <Link
          href="/"
          className="rounded-sm font-heading text-lg font-semibold text-white transition-colors hover:text-white/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary sm:text-xl"
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
          <a href={`tel:${phone.replace(/[^+\d]/g, "")}`} className={navLinkClassName}>
            {phone}
          </a>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-md bg-accent px-4 py-2 text-sm font-semibold text-gray-900 shadow-sm transition-colors hover:bg-accent/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
          >
            Get a Free Quote
          </Link>
        </div>

        <MobileNav navLinks={navLinks} phone={phone} />
      </Container>
    </header>
  );
}
