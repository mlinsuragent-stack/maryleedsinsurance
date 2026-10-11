import type { ReactNode } from "react";
import { AccentButtonLink } from "./AccentButtonLink";
import { AccentRule } from "./AccentRule";
import { contactInfo, phoneHref } from "./contact-info";
import { Container } from "./Container";
import { FadeInSection } from "./motion/FadeInSection";
import { SectionHeading } from "./SectionHeading";

/**
 * Closing call to action on white: centered heading, subline, and an accent
 * button to /contact. Defaults are the homepage copy (between the
 * testimonials band and the footer); the bio page passes its own. On white:
 * heading/phone link primary 5.09:1, subline gray-700 10.30:1, button text
 * primary-deep on accent 5.83:1 (WCAG AA).
 */
export function CtaSection({
  headingId = "cta-heading",
  heading = "Ready to talk through your coverage?",
  subline = (
    <>
      No pressure, no jargon &mdash; just a conversation about what you
      actually need.
    </>
  ),
  buttonLabel = "Get a Free Quote",
  showPhone = true,
}: {
  headingId?: string;
  heading?: ReactNode;
  subline?: ReactNode;
  buttonLabel?: ReactNode;
  /** Show the "or call …" phone link beside the button. */
  showPhone?: boolean;
}) {
  return (
    <section className="bg-white" aria-labelledby={headingId}>
      <Container className="py-16 text-center sm:py-24">
        <FadeInSection>
          <SectionHeading id={headingId}>{heading}</SectionHeading>
          <AccentRule align="center" className="mt-3" />
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-gray-700 sm:text-lg">
            {subline}
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
            <AccentButtonLink
              href="/contact"
              surface="light"
              className="px-6 py-3 text-base"
            >
              {buttonLabel}
            </AccentButtonLink>
            {showPhone && (
              <a
                href={phoneHref}
                className="rounded-sm text-base font-semibold text-primary underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              >
                or call {contactInfo.phone}
              </a>
            )}
          </div>
        </FadeInSection>
      </Container>
    </section>
  );
}
