import Image from "next/image";
import Link from "next/link";
import { Container } from "./Container";
import { FadeInSection } from "./motion/FadeInSection";
import { HoverCard } from "./motion/HoverCard";

export function Hero() {
  return (
    <section className="bg-white">
      <Container className="py-16 sm:py-24">
        <FadeInSection className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <h1 className="font-heading text-3xl font-bold leading-tight text-primary sm:text-4xl lg:text-5xl">
              Insurance you actually understand, from someone who takes the
              time to explain it.
            </h1>
            <p className="mt-6 text-base leading-relaxed text-gray-700 sm:text-lg">
              Whether you&apos;re choosing coverage for the first time or
              working through a complicated corporate insurance decision or
              an open claim, Mary Leeds walks you through your options in
              plain language and helps you make the call that fits your
              situation &mdash; not a sales quota.
            </p>
            <div className="mt-8">
              <HoverCard className="inline-block">
                <Link
                  href="/get-a-quote"
                  className="inline-flex items-center justify-center rounded-md bg-accent px-6 py-3 text-base font-semibold text-gray-900 shadow-sm transition-colors hover:bg-accent/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                >
                  Get a Quote
                </Link>
              </HoverCard>
            </div>
          </div>
          <div className="w-full max-w-md shrink-0 lg:max-w-lg">
            {/* PLACEHOLDER: replace with real photo */}
            <Image
              src="https://picsum.photos/seed/hero/1200/800"
              alt="A Colorado family sitting down with their insurance agent to review coverage options"
              width={1200}
              height={800}
              className="w-full rounded-lg object-cover shadow-sm"
              priority
            />
          </div>
        </FadeInSection>
      </Container>
    </section>
  );
}
