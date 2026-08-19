import { Container } from "./Container";
import { SectionHeading } from "./SectionHeading";

// PLACEHOLDER: replace with real client testimonials
const testimonials = [
  {
    quote:
      "Mary walked us through a complicated commercial claim and never once made us feel like a number. We knew exactly what was happening at every step.",
    name: "Karen D.",
  },
  {
    quote:
      "She took the time to actually explain our options instead of just selling us the most expensive policy. That kind of honesty is rare.",
    name: "Tom R.",
  },
  {
    quote:
      "Between our home, auto, and ranch coverage, Mary has made insurance one less thing we have to worry about.",
    name: "Priya S.",
  },
];

export function Testimonials() {
  return (
    <section className="bg-surface" aria-labelledby="testimonials-heading">
      <Container className="py-16 sm:py-24">
        <SectionHeading id="testimonials-heading">
          What clients say
        </SectionHeading>
        <ul className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <li key={testimonial.name}>
              <figure className="h-full rounded-lg bg-white p-6 shadow-sm">
                <blockquote className="text-sm leading-relaxed text-gray-700 sm:text-base">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-4 font-heading text-sm font-semibold text-primary">
                  {testimonial.name}
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
