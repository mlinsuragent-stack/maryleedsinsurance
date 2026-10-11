import Image from "next/image";

// Bio photo columns: max-w-xs / sm:max-w-sm when stacked, two fifths of the
// max-w-6xl container on large screens.
const DEFAULT_SIZES = "(min-width: 1024px) 26rem, (min-width: 640px) 24rem, 20rem";

// "rounded": soft rounded frame; "arch": semicircular top for the 3:4 intro
// portrait (see the `arch` radius token in tailwind.config.ts). `aspect-3/4`
// pins the border box to 3:4; without it the 6px tan border sits outside the
// image's 3:4 content box and the top arch flattens.
const shapeClassNames = {
  rounded: "rounded-2xl border-4 border-white shadow-lg",
  arch: "aspect-3/4 rounded-arch border-6 border-tan shadow-xl",
} as const;

/** Framed (white, or tan for the arch), shadowed photo for the bio page. */
export function BioPhoto({
  src,
  alt,
  width,
  height,
  sizes = DEFAULT_SIZES,
  priority = false,
  shape = "rounded",
  className = "",
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  sizes?: string;
  priority?: boolean;
  shape?: keyof typeof shapeClassNames;
  /** Extra sizing classes (e.g. a fixed height or aspect override). */
  className?: string;
}) {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      sizes={sizes}
      priority={priority}
      className={`w-full object-cover ${shapeClassNames[shape]} ${className}`}
    />
  );
}
