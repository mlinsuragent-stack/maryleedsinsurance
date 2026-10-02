import Image from "next/image";
import Link from "next/link";
import { Container } from "./Container";
import { FadeInSection } from "./motion/FadeInSection";
import { HoverCard } from "./motion/HoverCard";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary to-gray-950">
      {/* Subtle drifting dot pattern, pure CSS keyframes (see globals.css). */}
      <div
        aria-hidden="true"
        className="hero-animated-bg pointer-events-none absolute inset-0 opacity-60"
      />
      <Container className="relative py-16 sm:py-24">
        <FadeInSection className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <h1 className="font-heading text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
              Insurance you actually understand, from someone who takes the
              time to explain it.
            </h1>
            <p className="mt-6 text-base leading-relaxed text-white/95 sm:text-lg">
              A family-owned, Colorado-based agency helping you navigate
              corporate insurance and claims decisions in plain language
              &mdash; whether you&apos;re choosing coverage for the first
              time or working through an open claim. Mary Leeds walks you
              through your options and helps you make the call that fits
              your situation, not a sales quota.
            </p>
            <div className="mt-8">
              <HoverCard className="inline-block">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-md bg-accent px-6 py-3 text-base font-semibold text-gray-900 shadow-sm transition-colors hover:bg-accent/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
                >
                  Get a Free Quote
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
