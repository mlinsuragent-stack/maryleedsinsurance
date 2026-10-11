import { licensedStatesText } from "../../_components/contact-info";
import { CtaSection } from "../../_components/CtaSection";

/**
 * Closing section on the bio page: the shared light CtaSection with the
 * licensed states as the heading (from contact-info, so it stays in sync
 * with the footer and contact page) and no phone link. Non-breaking spaces
 * around the "&" keep the last two states together, so phones break
 * after "Colorado," instead of leaving "Texas" alone on the second line.
 */
export function LicensedCta() {
  return (
    <CtaSection
      headingId="licensed-heading"
      heading={`Licensed in ${licensedStatesText.replace(" & ", "\u00a0&\u00a0")}`}
      subline={
        <>
          Whether it&apos;s your family, your business, or your ranch
          &mdash; start with a conversation.
        </>
      }
      buttonLabel="Get in touch with Mary"
      showPhone={false}
    />
  );
}
