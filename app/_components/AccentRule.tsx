/**
 * Short saddle rule bar under a heading (decorative trim). `align` should
 * mirror the heading's own alignment; pass spacing via `className`.
 */
export function AccentRule({
  align = "start",
  className = "",
}: {
  align?: "start" | "center";
  className?: string;
}) {
  return (
    <div
      aria-hidden="true"
      className={`h-1 w-14 rounded-full bg-saddle ${
        align === "center" ? "mx-auto" : ""
      } ${className}`}
    />
  );
}
