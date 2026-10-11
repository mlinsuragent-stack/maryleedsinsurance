import { Container } from "./Container";
import { MarqueePauseToggle } from "./motion/MarqueePauseToggle";

// PLACEHOLDER: uppercase text wordmarks — swap for real carrier logos
const carriers = [
  "Progressive",
  "The Hartford",
  "Travelers",
  "GEICO",
  "Nationwide",
];

/**
 * Passes of the 5 carriers per loop copy. One pass is only ~820-870px at
 * text-sm (46 uppercase letters at ~10-11px each incl. 0.12em tracking,
 * plus 5 x (32px gap + 6px dot + 32px gap)), narrower than wide screens, so
 * each copy repeats it 3 times (~2460-2610px at text-sm, ~2660-2830px at
 * text-base) to stay wider than a 1920px+ viewport. The track renders two
 * copies (2 x PASSES_PER_COPY passes) and scrolls exactly -50%.
 */
const PASSES_PER_COPY = 3;

const wordmarkClassName =
  "flex shrink-0 items-center gap-8 whitespace-nowrap font-heading text-sm font-semibold uppercase tracking-wordmark text-white/75 sm:text-base";

/**
 * One carrier wordmark followed by a small decorative accent dot. The dot
 * is aria-hidden so screen readers only hear the carrier name. `isLast`
 * hides the trailing dot after the final item of the first (only exposed)
 * pass under reduced motion, where all aria-hidden repeats are removed and
 * the row is static.
 */
function CarrierItem({ name, isLast }: { name: string; isLast: boolean }) {
  return (
    <>
      {name}
      <span
        aria-hidden="true"
        className={`h-1.5 w-1.5 rounded-full bg-accent ${isLast ? "motion-reduce:hidden" : ""}`}
      />
    </>
  );
}

/**
 * Auto-scrolling row of carrier wordmarks on the dark teal band, pure CSS
 * (see `.animate-marquee` / `.marquee-carriers` / `.marquee-viewport` /
 * `.marquee-fade` in globals.css). The track holds two identical copies of
 * PASSES_PER_COPY passes each so the -50% loop is seamless; only the very
 * first pass is exposed, every other item is aria-hidden so screen readers
 * hear each carrier exactly once.
 * Pauses on hover/focus via the CSS rule in globals.css, and via the
 * keyboard-focusable `MarqueePauseToggle` ghost button in the band's
 * bottom-right corner (hence `relative` on the section). Falls back to a
 * static, wrapped, non-duplicated, unfaded row under prefers-reduced-motion
 * (see globals.css).
 *
 * "Commercial & Ag Specialists" is marketing copy describing Mary's focus,
 * not a real carrier — it lives in the caption text rather than the
 * wordmark row so it doesn't read as a fabricated carrier name.
 */
export function CarrierMarquee() {
  return (
    <section
      className="relative bg-linear-to-b from-primary-dark to-primary-deep pt-10 pb-12 sm:py-12"
      aria-label="Insurance carrier partners"
    >
      <Container className="flex flex-col gap-1 md:flex-row md:items-baseline md:justify-between md:gap-6">
        <p className="font-heading text-sm font-semibold uppercase tracking-wordmark text-white">
          Backed by 30+ carrier partners
        </p>
        <p className="text-sm text-white/80">
          Including commercial &amp; ag specialists
        </p>
      </Container>
      <MarqueePauseToggle label="carrier partner logos">
        <div className="marquee-viewport marquee-fade mt-6">
          {/* Seamless loop: px-4 must stay exactly half of gap-8 (which also
              matches the name-to-dot gap inside each item) so the track is
              2 x (15 items + 15 gaps) and -50% is exactly one copy. */}
          <ul className="animate-marquee marquee-carriers flex list-none items-center gap-8 px-4 motion-reduce:justify-center motion-reduce:gap-y-3">
            {Array.from({ length: PASSES_PER_COPY * 2 }, (_, pass) =>
              carriers.map((carrier, index) => (
                <li
                  key={`${carrier}-${pass}`}
                  aria-hidden={pass === 0 ? undefined : true}
                  className={wordmarkClassName}
                >
                  <CarrierItem
                    name={carrier}
                    isLast={pass === 0 && index === carriers.length - 1}
                  />
                </li>
              )),
            )}
          </ul>
        </div>
      </MarqueePauseToggle>
    </section>
  );
}
