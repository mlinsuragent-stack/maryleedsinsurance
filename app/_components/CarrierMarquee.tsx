import { Container } from "./Container";
import { MarqueePauseToggle } from "./motion/MarqueePauseToggle";

// PLACEHOLDER: styled text badges — swap for real carrier logos
const carriers = [
  "Progressive",
  "The Hartford",
  "Travelers",
  "GEICO",
  "Nationwide",
];

const badgeClassName =
  "shrink-0 whitespace-nowrap rounded-full border border-primary/20 bg-white px-6 py-3 font-heading text-sm font-semibold text-primary shadow-sm sm:text-base";

/**
 * Auto-scrolling row of carrier partner badges, pure CSS (see
 * `.animate-marquee` / `.marquee-viewport` in globals.css). The list is
 * duplicated once so the loop is seamless; the duplicate is aria-hidden so
 * screen readers only hear each carrier once. Pauses on hover/focus via
 * Tailwind's group-hover with an arbitrary `animation-play-state` property,
 * and via the keyboard-focusable `MarqueePauseToggle` button (no JS
 * involved in the hover case). Falls back to a static, wrapped,
 * non-duplicated row under prefers-reduced-motion (see globals.css).
 *
 * "Commercial & Ag Specialists" is marketing copy describing Mary's focus,
 * not a real carrier — it lives in the caption text below rather than the
 * badge row so it doesn't read as a fabricated carrier name.
 */
export function CarrierMarquee() {
  return (
    <section
      className="bg-surface py-10 sm:py-12"
      aria-label="Insurance carrier partners"
    >
      <Container>
        <p className="text-center font-heading text-sm font-semibold uppercase tracking-wide text-primary sm:text-base">
          Backed by 30+ carrier partners
        </p>
        <p className="mt-1 text-center text-sm text-gray-600">
          Including commercial &amp; ag specialists
        </p>
      </Container>
      <MarqueePauseToggle label="carrier partner logos">
        <div className="marquee-viewport group mt-6">
          <ul className="animate-marquee flex list-none items-center gap-4 px-4 group-hover:[animation-play-state:paused] group-focus-within:[animation-play-state:paused]">
            {carriers.map((carrier) => (
              <li key={carrier} className={badgeClassName}>
                {carrier}
              </li>
            ))}
            {carriers.map((carrier) => (
              <li key={`${carrier}-duplicate`} aria-hidden="true" className={badgeClassName}>
                {carrier}
              </li>
            ))}
          </ul>
        </div>
      </MarqueePauseToggle>
    </section>
  );
}
