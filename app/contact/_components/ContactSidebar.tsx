import {
  contactInfo as contact,
  licensedStatesText,
  phoneHref,
} from "../../_components/contact-info";
import { DarkPanel, DarkPanelHeading } from "../../_components/DarkPanel";

// Links on the dark panel: white ring with a primary-dark offset (white on
// primary-dark 8.39:1). Underline on hover for a non-color affordance.
const focusRingClassName =
  "rounded-sm underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary-dark";

/**
 * "Prefer to talk?" sidebar beside the contact form. On primary-dark
 * (worst case): phone accent-light 5.90:1, email white 8.39:1, address and
 * licensed note surface 7.05:1.
 */
export function ContactSidebar() {
  return (
    <DarkPanel as="aside" labelledBy="talk-heading">
      <DarkPanelHeading id="talk-heading">Prefer to talk?</DarkPanelHeading>
      <a
        href={phoneHref}
        className={`mt-4 inline-block font-heading text-2xl font-bold text-accent-light sm:text-3xl ${focusRingClassName}`}
      >
        {contact.phone}
      </a>
      <div className="mt-4 flex flex-col gap-2 text-sm sm:text-base">
        <a
          href={`mailto:${contact.email}`}
          className={`self-start break-all text-white ${focusRingClassName}`}
        >
          {contact.email}
        </a>
        <p className="text-surface">{contact.address}</p>
      </div>
      <p className="mt-6 border-t border-white/15 pt-6 text-sm text-surface">
        Licensed in {licensedStatesText}
      </p>
    </DarkPanel>
  );
}
