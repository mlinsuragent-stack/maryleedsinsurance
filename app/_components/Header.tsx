import Link from "next/link";
import { Container } from "./Container";

export function Header() {
  return (
    <header className="bg-primary">
      <Container className="flex items-center justify-between py-4">
        <Link
          href="/"
          className="rounded-sm font-heading text-lg font-semibold text-white transition-colors hover:text-white/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary sm:text-xl"
        >
          Mary Leeds Insurance
        </Link>
      </Container>
    </header>
  );
}
