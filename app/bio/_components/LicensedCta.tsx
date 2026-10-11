import { AccentButtonLink } from "../../_components/AccentButtonLink";
import { licensedStates } from "../../_components/contact-info";
import { Container } from "../../_components/Container";
import { DarkPanel, DarkPanelHeading } from "../../_components/DarkPanel";
import { FadeInSection } from "../../_components/motion/FadeInSection";

/**
 * Closing panel on the bio page: licensed states plus a contact link, on
 * the dark teal gradient. State chips are white text on white/10 over
 * primary-dark (composites to ~#206866), 6.49:1.
 */
export function LicensedCta() {
  return (
    <section aria-labelledby="licensed-heading" className="bg-white">
      <Container className="py-16 sm:py-24">
        <FadeInSection>
          <DarkPanel
            className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between"
          >
            <div>
              <DarkPanelHeading id="licensed-heading">
                Licensed in
              </DarkPanelHeading>
              <ul className="mt-4 flex flex-wrap gap-3">
                {licensedStates.map((state) => (
                  <li
                    key={state}
                    className="rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white"
                  >
                    {state}
                  </li>
                ))}
              </ul>
            </div>
            <AccentButtonLink
              href="/contact"
              surface="dark"
              className="shrink-0 self-start px-6 py-3 text-sm md:self-center"
            >
              Get in touch with Mary
            </AccentButtonLink>
          </DarkPanel>
        </FadeInSection>
      </Container>
    </section>
  );
}
