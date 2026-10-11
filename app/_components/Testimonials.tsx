import { Container } from "./Container";
import { FadeInSection } from "./motion/FadeInSection";
import { HoverCard } from "./motion/HoverCard";
import { MarqueePauseToggle } from "./motion/MarqueePauseToggle";
import { SectionHeading } from "./SectionHeading";
import { TestimonialCard, type Testimonial } from "./TestimonialCard";

// Real client testimonials (source: content/testimonials.md). Attribution is
// first name + last initial only; never add client emails or phone numbers.
// Stacey B. is listed first: hers is the only farm & ranch testimonial,
// which matches the agency's ag/commercial target market.
const testimonials: Testimonial[] = [
  {
    quote:
      "Mary has worked with me on home and auto as well as farm and ranch for the past 10 years. She worked diligently to make sure we always had the best for what we were needing at a reasonable price. She will work hard to meet your needs.",
    name: "Stacey B.",
    image: { src: "/images/avatars/stacey-b.jpg" },
    descriptor: "client for 10 years",
  },
  {
    quote:
      "I have known and worked with Mary for over 10 years. She is professional, caring, and determined to help you find the best insurance policies for your needs. She patiently explains terminology you might not understand or new concepts in the industry. She invests time in searching to put your priorities first. She builds lasting links with clients and work partners. I would definitely recommend working with her if you are looking for a person who is caring and will put your insurance requirements first.",
    name: "Sandra J.",
    image: { src: "/images/avatars/sandra-j.jpg" },
    descriptor: "client for over 10 years",
  },
  {
    quote:
      "I've worked with Mary for over 15 years now. I really appreciate the amount of time she spends looking at multiple companies to get me the best insurance rates possible. She is very good at explaining the details of any given policy. She lets me know what coverage levels are ideal for my situation. I highly recommend working with Mary for your insurance needs.",
    name: "Eric H.",
    image: { src: "/images/avatars/eric-h.jpg" },
    descriptor: "client for over 15 years",
  },
  {
    quote:
      "Mary has managed all of my insurance policies and has done so with great care and efficiency and with a delightful personal touch.",
    name: "Bill G.",
  },
];

// Fixed card width with normally wrapping text so the longer real quotes
// grow the card vertically instead of overflowing; the `items-stretch` row
// keeps all cards the same height.
// Translucent card on the dark teal band: white/7 over primary-dark is the
// worst-case text background (~#1b6463 if it were 8%, a conservative bound for the real 7%); see TestimonialCard colors.
// Every card gets an accent top border (border-t-accent so the other three
// sides keep the subtle mint border). It only adds height, so the marquee's
// horizontal loop math is unaffected.
const cardClassName =
  "flex h-full w-80 shrink-0 flex-col rounded-lg border border-surface/20 border-t-4 border-t-accent bg-white/7 p-6 shadow-sm transition-shadow duration-200 hover:shadow-lg sm:w-96";

/**
 * Auto-scrolling row of testimonial cards on the dark teal band, same
 * pure-CSS marquee pattern as CarrierMarquee (see `.animate-marquee` /
 * `.marquee-viewport` / `.marquee-fade` in globals.css), with the
 * `.marquee-thirds` variant: list rendered three times for a seamless loop
 * on wide screens, copies marked aria-hidden, pauses on hover/focus and via
 * the keyboard-focusable `MarqueePauseToggle` ghost button (absolutely
 * positioned in the band's bottom-right corner, hence `relative` on the
 * section), and falls back to a static wrapped, unfaded row with no JS
 * under prefers-reduced-motion.
 */
export function Testimonials() {
  return (
    <section
      className="relative bg-linear-to-b from-primary-dark to-primary-deep"
      aria-labelledby="testimonials-heading"
    >
      <Container className="pt-16 sm:pt-24">
        <FadeInSection>
          <SectionHeading id="testimonials-heading" tone="inverse">
            What clients say
          </SectionHeading>
        </FadeInSection>
      </Container>
      <MarqueePauseToggle label="client testimonials">
        {/* pt-4 leaves room inside overflow-hidden for the HoverCard scale
            and hover shadow, which were clipped at the viewport's top edge. */}
        <FadeInSection className="marquee-viewport marquee-fade mt-6 pt-4 pb-16 sm:pb-24">
          {/* Seamless loop: px-3 must stay exactly half of gap-6 so one
              copy (cards + gaps) is exactly 1/3 of the track width.
              Three copies (two aria-hidden) so 4 cards cover wide screens
              without a blank gap before the loop repeats. */}
          <ul className="animate-marquee marquee-thirds flex list-none items-stretch gap-6 px-3">
            {testimonials.map((testimonial) => (
              <li key={testimonial.name}>
                <HoverCard className={cardClassName}>
                  <TestimonialCard testimonial={testimonial} />
                </HoverCard>
              </li>
            ))}
            {[1, 2].map((copy) =>
              testimonials.map((testimonial) => (
                <li
                  key={`${testimonial.name}-duplicate-${copy}`}
                  aria-hidden="true"
                >
                  <div className={cardClassName}>
                    <TestimonialCard testimonial={testimonial} />
                  </div>
                </li>
              )),
            )}
          </ul>
        </FadeInSection>
      </MarqueePauseToggle>
    </section>
  );
}
