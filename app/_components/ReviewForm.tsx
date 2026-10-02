"use client";

import { useState } from "react";
import type { ChangeEvent, FocusEvent, FormEvent } from "react";

import { StarRating } from "./StarRating";
import { FormField } from "./ContactFormField";
import {
  type ReviewFieldName,
  type ReviewFormValues,
  initialReviewValues,
  validateReviewAll,
} from "./review-form-validation";

export function ReviewForm() {
  const [values, setValues] = useState<ReviewFormValues>(initialReviewValues);
  const [touched, setTouched] = useState<Partial<Record<ReviewFieldName, boolean>>>({});
  const [submitAttempted, setSubmitAttempted] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const errors = validateReviewAll(values);
  const isValid = Object.keys(errors).length === 0;

  function handleChange(
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    const { name, value } = event.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  }

  function handleBlur(event: FocusEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name } = event.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
  }

  function handleRatingChange(rating: number) {
    setValues((prev) => ({ ...prev, rating }));
    setTouched((prev) => ({ ...prev, rating: true }));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitAttempted(true);

    if (!isValid) return;

    // Deferred to a future task: this does not send data anywhere yet.
    // No fetch call, API route, or server action is wired up here pending
    // a decision on where reviews should be stored/moderated.
    setSubmitted(true);
  }

  function showError(field: ReviewFieldName): string | undefined {
    if (!touched[field] && !submitAttempted) return undefined;
    return errors[field];
  }

  if (submitted) {
    return (
      <div
        role="status"
        className="rounded-lg border border-secondary/30 bg-surface p-6 text-gray-700"
      >
        <h3 className="font-heading text-lg font-semibold text-primary">
          Thanks for the review
        </h3>
        <p className="mt-2 text-sm leading-relaxed sm:text-base">
          Your feedback has been received. We appreciate you taking the time
          to share it.
        </p>
      </div>
    );
  }

  return (
    <form noValidate onSubmit={handleSubmit} className="flex flex-col gap-6">
      <FormField
        id="name"
        name="name"
        label="Name"
        value={values.name}
        error={showError("name")}
        onChange={handleChange}
        onBlur={handleBlur}
      />

      <StarRating
        name="rating"
        value={values.rating}
        onChange={handleRatingChange}
        error={showError("rating")}
      />

      <FormField
        as="textarea"
        id="reviewText"
        name="reviewText"
        label="Your review"
        rows={5}
        value={values.reviewText}
        error={showError("reviewText")}
        onChange={handleChange}
        onBlur={handleBlur}
      />

      <button
        type="submit"
        disabled={!isValid}
        className="inline-flex items-center justify-center rounded-md bg-accent px-6 py-3 text-sm font-semibold text-gray-900 shadow-sm transition-colors hover:bg-accent/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:bg-secondary/40 disabled:text-gray-500 disabled:hover:bg-secondary/40"
      >
        Submit review
      </button>
    </form>
  );
}
