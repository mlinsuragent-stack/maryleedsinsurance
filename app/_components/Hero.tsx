import Link from "next/link";
import { Container } from "./Container";

export function Hero() {
  return (
    <section className="bg-white">
      <Container className="py-16 sm:py-24">
        <div className="max-w-2xl">
          <h1 className="font-heading text-3xl font-bold leading-tight text-primary sm:text-4xl lg:text-5xl">
            Insurance you actually understand, from someone who takes the
            time to explain it.
          </h1>
          <p className="mt-6 text-base leading-relaxed text-gray-700 sm:text-lg">
            Whether you&apos;re choosing coverage for the first time or working
            through a complicated corporate insurance decision or an open
            claim, Mary Leeds walks you through your options in plain
            language and helps you make the call that fits your situation
            &mdash; not a sales quota.
          </p>
          <div className="mt-8">
            <Link
              href="/get-a-quote"
              className="inline-flex items-center justify-center rounded-md bg-accent px-6 py-3 text-base font-semibold text-gray-900 shadow-sm transition-colors hover:bg-accent/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
