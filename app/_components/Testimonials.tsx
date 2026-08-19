import Image from "next/image";
import { Container } from "./Container";
import { FadeInSection } from "./motion/FadeInSection";
import { HoverCard } from "./motion/HoverCard";
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
];

export function Testimonials() {
  return (
    <section className="bg-surface" aria-labelledby="testimonials-heading">
      <Container className="py-16 sm:py-24">
        <FadeInSection>
          <SectionHeading id="testimonials-heading">
            What clients say
          </SectionHeading>
          <ul className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <li key={testimonial.name}>
                <HoverCard className="h-full rounded-lg bg-white p-6 shadow-sm transition-shadow duration-200 hover:shadow-lg">
                  <figure className="h-full">
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
          </ul>
        </FadeInSection>
      </Container>
    </section>
  );
}
