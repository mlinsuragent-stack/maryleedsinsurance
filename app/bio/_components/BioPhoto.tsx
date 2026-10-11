import Image from "next/image";

// Bio photo columns: max-w-xs / sm:max-w-sm when stacked, roughly one third
// of the max-w-6xl container on large screens.
const DEFAULT_SIZES = "(min-width: 1024px) 21rem, (min-width: 640px) 24rem, 20rem";

/** Rounded, shadowed photo shared by the bio page sections. */
export function BioPhoto({
  src,
  alt,
  width,
  height,
  sizes = DEFAULT_SIZES,
  priority = false,
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  sizes?: string;
  priority?: boolean;
}) {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      sizes={sizes}
      priority={priority}
      className="w-full rounded-lg object-cover shadow-sm"
    />
  );
}
