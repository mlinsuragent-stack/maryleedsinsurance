import Image from "next/image";
import { AccentButtonLink } from "./AccentButtonLink";
import { Container } from "./Container";
import { FadeInSection } from "./motion/FadeInSection";
import { HoverCard } from "./motion/HoverCard";

const trustChips = [
  "Licensed in CO, AZ & TX",
  "30+ Carrier Partners",
  "Family-Owned Colorado Business",
  "Mid-Market & Ag Specialists",
];

export function Hero() {
  // Vertical gradient ending on primary-dark: the whole bottom edge then
  // matches the carrier band's from-primary-dark top, so there's no seam.
  return (
    <section className="relative overflow-hidden bg-linear-to-b from-primary via-primary to-primary-dark">
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
                <AccentButtonLink
                  href="/contact"
                  surface="primary"
                  className="px-6 py-3 text-base"
                >
                  Get a Free Quote
                </AccentButtonLink>
              </HoverCard>
            </div>
            {/* Outlined trust chips. Text is white, not surface: the chips
                sit on the gradient's primary end, where surface is only
                4.28:1 but white is 5.09:1 (WCAG AA). */}
            <ul
              aria-label="Why clients trust Mary Leeds Insurance"
              className="mt-6 grid grid-cols-2 gap-2"
            >
              {trustChips.map((chip) => (
                <li
                  key={chip}
                  className="flex items-center justify-center rounded-full border-2 border-saddle px-3 py-1 text-center text-xs font-medium text-white sm:text-sm"
                >
                  {chip}
                </li>
              ))}
            </ul>
          </div>
          <div className="w-full max-w-110 shrink-0">
            {/* 3:4 frame for a 3:4 portrait (1932x2576), so object-cover
                crops almost nothing (~1px per side from the 4px border-box
                border). The horse's ear tips touch the photo's top edge and
                Mary's face runs to its right edge, so any frame taller or
                wider than 3:4 would cut one of them; object-top keeps the
                top edge if the ratio ever drifts. Capped at 440px (max-w-110)
                so at lg+ the card is ~440x587, roughly the text column's
                height at xl. */}
            <Image
              src="/images/mary-horse-buckskin.jpg"
              alt="Mary Leeds in a USA cap taking a selfie beside her buckskin quarter horse under a blue sky"
              width={1932}
              height={2576}
              sizes="(min-width: 472px) 440px, calc(100vw - 2rem)"
              className="aspect-3/4 w-full rounded-lg border-4 border-saddle object-cover object-top shadow-sm"
              priority
            />
          </div>
        </FadeInSection>
      </Container>
    </section>
  );
}
