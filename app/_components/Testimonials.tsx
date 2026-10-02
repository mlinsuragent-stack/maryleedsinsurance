import Image from "next/image";
import { Container } from "./Container";
import { FadeInSection } from "./motion/FadeInSection";
import { HoverCard } from "./motion/HoverCard";
import { MarqueePauseToggle } from "./motion/MarqueePauseToggle";
import { SectionHeading } from "./SectionHeading";

// PLACEHOLDER: replace with real client testimonials
const testimonials = [
  {
    quote:
      "Mary walked us through a complicated commercial claim and never once made us feel like a number. We knew exactly what was happening at every step.",
    name: "Karen D.",
    avatarSeed: "testimonial-karen",
  },
  {
    quote:
      "She took the time to actually explain our options instead of just selling us the most expensive policy. That kind of honesty is rare.",
    name: "Tom R.",
    avatarSeed: "testimonial-tom",
  },
  {
    quote:
      "Between our home, auto, and ranch coverage, Mary has made insurance one less thing we have to worry about.",
    name: "Priya S.",
    avatarSeed: "testimonial-priya",
  },
  {
    quote:
      "As a mid-size distribution company, we needed someone who understood commercial risk, not just personal lines. Mary set us up with property and casualty coverage that actually fits our operation.",
    name: "Dave M., Operations Manager",
    avatarSeed: "testimonial-dave",
  },
  {
    quote:
      "Our ranch runs on tight margins, and Mary found agricultural coverage that fit our operation instead of a generic policy. She genuinely gets ag business.",
    name: "Lena K., Ranch Owner",
    avatarSeed: "testimonial-lena",
  },
  {
    quote:
      "When we grew from 12 to 35 employees, Mary helped us restructure our small business insurance before it became a problem. Painless process, and she was proactive about it.",
    name: "James O., Small Business Owner",
    avatarSeed: "testimonial-james",
  },
];

const cardClassName =
  "flex h-full w-80 shrink-0 flex-col rounded-lg bg-white p-6 shadow-sm transition-shadow duration-200 hover:shadow-lg sm:w-96";

/**
 * Auto-scrolling row of testimonial cards, same pure-CSS marquee pattern as
 * CarrierMarquee (see `.animate-marquee` / `.marquee-viewport` in
 * globals.css): list duplicated once for a seamless loop, duplicate marked
 * aria-hidden, pauses on hover/focus and via the keyboard-focusable
 * `MarqueePauseToggle` button, and falls back to a static wrapped row with
 * no JS under prefers-reduced-motion.
 */
export function Testimonials() {
  return (
    <section className="bg-surface" aria-labelledby="testimonials-heading">
      <Container className="pt-16 sm:pt-24">
        <FadeInSection>
          <SectionHeading id="testimonials-heading">
            What clients say
          </SectionHeading>
        </FadeInSection>
      </Container>
      <MarqueePauseToggle label="client testimonials">
        <FadeInSection className="marquee-viewport group mt-10 pb-16 sm:pb-24">
          <ul className="animate-marquee flex list-none items-stretch gap-6 px-4 group-hover:[animation-play-state:paused] group-focus-within:[animation-play-state:paused] sm:px-6">
            {testimonials.map((testimonial) => (
              <li key={testimonial.name}>
                <HoverCard className={cardClassName}>
                  <figure className="flex h-full flex-col">
                    <div className="flex items-center gap-3">
                      {/* PLACEHOLDER: replace with real client photo */}
                      <Image
                        src={`https://picsum.photos/seed/${testimonial.avatarSeed}/100/100`}
                        alt={`Portrait of ${testimonial.name}, a Mary Leeds Insurance client`}
                        width={100}
                        height={100}
                        className="h-12 w-12 rounded-full object-cover"
                      />
                      <figcaption className="font-heading text-sm font-semibold text-primary">
                        {testimonial.name}
                      </figcaption>
                    </div>
                    <blockquote className="mt-4 text-sm leading-relaxed text-gray-700 sm:text-base">
                      &ldquo;{testimonial.quote}&rdquo;
                    </blockquote>
                  </figure>
                </HoverCard>
              </li>
            ))}
            {testimonials.map((testimonial) => (
              <li key={`${testimonial.name}-duplicate`} aria-hidden="true">
                <div className={cardClassName}>
                  <figure className="flex h-full flex-col">
                    <div className="flex items-center gap-3">
                      <Image
                        src={`https://picsum.photos/seed/${testimonial.avatarSeed}/100/100`}
                        alt=""
                        width={100}
                        height={100}
                        className="h-12 w-12 rounded-full object-cover"
                      />
                      <figcaption className="font-heading text-sm font-semibold text-primary">
                        {testimonial.name}
                      </figcaption>
                    </div>
                    <blockquote className="mt-4 text-sm leading-relaxed text-gray-700 sm:text-base">
                      &ldquo;{testimonial.quote}&rdquo;
                    </blockquote>
                  </figure>
                </div>
              </li>
            ))}
          </ul>
        </FadeInSection>
      </MarqueePauseToggle>
    </section>
  );
}
