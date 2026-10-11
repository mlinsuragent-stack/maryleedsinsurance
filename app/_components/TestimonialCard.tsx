import Image from "next/image";

export type TestimonialImage = {
  /** Square, face-centered crop (see public/images/avatars/). */
  src: string;
};

export type Testimonial = {
  quote: string;
  name: string;
  descriptor?: string;
  featured?: boolean;
  image?: TestimonialImage;
};

function getInitials(name: string): string {
  return name
    .split(/\s+/)
    .map((part) => part.replace(/[^A-Za-z]/g, "").charAt(0))
    .join("")
    .toUpperCase();
}

/**
 * Neutral initials circle used in place of a client photo. Decorative only:
 * the client's name is always rendered as text next to it. Mint circle with
 * primary-deep text (10.0:1) so it reads on the dark teal band.
 */
function InitialsAvatar({ name }: { name: string }) {
  return (
    <span
      aria-hidden="true"
      className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-surface font-heading text-sm font-semibold text-primary-deep"
    >
      {getInitials(name)}
    </span>
  );
}

/**
 * Client photo in the same circle as InitialsAvatar. Decorative (empty alt)
 * because the client's name is rendered as text right next to it.
 */
function PhotoAvatar({ image }: { image: TestimonialImage }) {
  return (
    <Image
      src={image.src}
      alt=""
      width={48}
      height={48}
      sizes="48px"
      className="h-12 w-12 shrink-0 rounded-full object-cover"
    />
  );
}

/**
 * Inner content of a testimonial card (avatar, attribution, quote). The
 * surrounding card wrapper is supplied by the caller so the marquee can use
 * an interactive HoverCard for the real items and a plain div for the
 * aria-hidden loop duplicates.
 *
 * Colors assume the translucent card on the dark teal band (worst-case
 * background ~#1b6463, a conservative 8% bound for the real white/7): name accent-light 4.82:1, descriptor white/80
 * 5.05:1, quote white/90 5.91:1 (WCAG AA >= 4.5:1).
 */
export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <figure className="flex h-full flex-col">
      <div className="flex items-center gap-3">
        {testimonial.image ? (
          <PhotoAvatar image={testimonial.image} />
        ) : (
          <InitialsAvatar name={testimonial.name} />
        )}
        <figcaption className="flex flex-col">
          <span className="font-heading text-sm font-semibold text-accent-light">
            {testimonial.name}
          </span>
          {testimonial.descriptor ? (
            <span className="text-xs text-white/80">
              {testimonial.descriptor}
            </span>
          ) : null}
        </figcaption>
      </div>
      <blockquote className="mt-4 text-sm leading-relaxed text-white/90 sm:text-base">
        &ldquo;{testimonial.quote}&rdquo;
      </blockquote>
    </figure>
  );
}
