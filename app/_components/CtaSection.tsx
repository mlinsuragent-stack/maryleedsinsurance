import { AccentButtonLink } from "./AccentButtonLink";
import { AccentRule } from "./AccentRule";
import { contactInfo, phoneHref } from "./contact-info";
import { Container } from "./Container";
import { FadeInSection } from "./motion/FadeInSection";
import { SectionHeading } from "./SectionHeading";

/**
 * Closing call to action on the homepage, between the testimonials band and
 * the footer. On white: heading/phone link primary 5.09:1, subline gray-700
 * 10.30:1, button text primary-deep on accent 5.83:1 (WCAG AA).
 */
export function CtaSection() {
  return (
    <section className="bg-white" aria-labelledby="cta-heading">
      <Container className="py-16 text-center sm:py-24">
        <FadeInSection>
          <SectionHeading id="cta-heading">
            Ready to talk through your coverage?
          </SectionHeading>
          <AccentRule align="center" className="mt-3" />
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-gray-700 sm:text-lg">
            No pressure, no jargon &mdash; just a conversation about what you
            actually need.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
            <AccentButtonLink
              href="/contact"
              surface="light"
              className="px-6 py-3 text-base"
            >
              Get a Free Quote
            </AccentButtonLink>
            <a
              href={phoneHref}
              className="rounded-sm text-base font-semibold text-primary underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
            >
              or call {contactInfo.phone}
            </a>
          </div>
        </FadeInSection>
      </Container>
    </section>
  );
}
