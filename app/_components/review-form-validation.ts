export type ReviewFormValues = {
  name: string;
  rating: number;
  reviewText: string;
};

export type ReviewFieldName = keyof ReviewFormValues;

export type ReviewFormErrors = Partial<Record<ReviewFieldName, string>>;

export const initialReviewValues: ReviewFormValues = {
  name: "",
  rating: 0,
  reviewText: "",
};

export function validateReviewField(
  field: ReviewFieldName,
  values: ReviewFormValues,
): string | undefined {
  switch (field) {
    case "name":
      return values.name.trim().length === 0 ? "Name is required." : undefined;
    case "rating":
      return values.rating < 1 ? "Select a star rating." : undefined;
    case "reviewText":
      if (values.reviewText.trim().length === 0) return "Review is required.";
      if (values.reviewText.trim().length < 10)
        return "Review must be at least 10 characters.";
      return undefined;
    default:
      return undefined;
  }
}

export function validateReviewAll(values: ReviewFormValues): ReviewFormErrors {
  const errors: ReviewFormErrors = {};
  (Object.keys(values) as ReviewFieldName[]).forEach((field) => {
    const error = validateReviewField(field, values);
    if (error) errors[field] = error;
  });
  return errors;
}
