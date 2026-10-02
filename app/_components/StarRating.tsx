"use client";

import { useState } from "react";

import { errorClassName, labelClassName } from "./contact-form-validation";

const stars = [1, 2, 3, 4, 5];

/**
 * Star rating control built from real radio inputs so keyboard behavior
 * (Tab in/out of the group, arrow keys to move between stars, Space/Enter
 * handled natively by the input) comes for free from the browser rather
 * than being reimplemented by hand. The inputs are visually hidden with
 * `sr-only`, not `hidden`, so they stay focusable; the star glyph is purely
 * decorative (`aria-hidden`) and each label's accessible name comes from
 * the visually-hidden "n stars" text instead.
 */
export function StarRating({
  name,
  value,
  onChange,
  error,
}: {
  name: string;
  value: number;
  onChange: (value: number) => void;
  error?: string;
}) {
  const errorId = `${name}-error`;
  const [hovered, setHovered] = useState<number | null>(null);
  const displayValue = hovered ?? value;

  return (
    <fieldset>
      <legend className={labelClassName}>Rating</legend>
      <div
        role="radiogroup"
        aria-invalid={Boolean(error)}
        aria-describedby={error ? errorId : undefined}
        className="mt-1 flex gap-1"
        onMouseLeave={() => setHovered(null)}
      >
        {stars.map((star) => (
          <label
            key={star}
            onMouseEnter={() => setHovered(star)}
            className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-sm has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-primary has-[:focus-visible]:ring-offset-2"
          >
            <input
              type="radio"
              name={name}
              value={star}
              checked={value === star}
              onChange={() => onChange(star)}
              className="sr-only"
            />
            <span
              aria-hidden="true"
              className={`text-3xl leading-none ${
                star <= displayValue ? "text-accent" : "text-secondary/40"
              }`}
            >
              &#9733;
            </span>
            <span className="sr-only">
              {star} star{star > 1 ? "s" : ""}
            </span>
          </label>
        ))}
      </div>
      {error && (
        <p id={errorId} role="alert" className={errorClassName}>
          {error}
        </p>
      )}
    </fieldset>
  );
}
