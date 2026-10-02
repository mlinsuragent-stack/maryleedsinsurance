"use client";

import { useState } from "react";
import type { ChangeEvent, FocusEvent, FormEvent } from "react";

import { FormField } from "./ContactFormField";
import {
  type FieldName,
  type FormValues,
  errorClassName,
  initialValues,
  inputClassName,
  insuranceOptions,
  labelClassName,
  validateAll,
} from "./contact-form-validation";

export function ContactForm() {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [touched, setTouched] = useState<Partial<Record<FieldName, boolean>>>({});
  const [submitAttempted, setSubmitAttempted] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const errors = validateAll(values);
  const isValid = Object.keys(errors).length === 0;

  function handleChange(
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) {
    const { name, value } = event.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  }

  function handleBlur(
    event: FocusEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) {
    const { name } = event.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitAttempted(true);

    if (!isValid) return;

    // Deferred to a future task: this does not send data anywhere yet.
    // No fetch call, API route, or server action is wired up here pending
    // security review of the intake pipeline.
    setSubmitted(true);
  }

  function showError(field: FieldName): string | undefined {
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
          Thanks for reaching out
        </h3>
        <p className="mt-2 text-sm leading-relaxed sm:text-base">
          Your message has been received. Mary will get back to you as soon
          as possible.
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

      <FormField
        id="email"
        name="email"
        label="Email"
        type="email"
        value={values.email}
        error={showError("email")}
        onChange={handleChange}
        onBlur={handleBlur}
      />

      <FormField
        id="phone"
        name="phone"
        label="Phone"
        type="tel"
        value={values.phone}
        error={showError("phone")}
        onChange={handleChange}
        onBlur={handleBlur}
      />

      <div>
        <label htmlFor="insuranceType" className={labelClassName}>
          Insurance type
        </label>
        <select
          id="insuranceType"
          name="insuranceType"
          value={values.insuranceType}
          onChange={handleChange}
          onBlur={handleBlur}
          aria-invalid={Boolean(showError("insuranceType"))}
          aria-describedby={
            showError("insuranceType") ? "insuranceType-error" : undefined
          }
          className={inputClassName}
        >
          <option value="">Select an option</option>
          {insuranceOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        {showError("insuranceType") && (
          <p id="insuranceType-error" role="alert" className={errorClassName}>
            {showError("insuranceType")}
          </p>
        )}
      </div>

      <FormField
        as="textarea"
        id="message"
        name="message"
        label="Message"
        rows={5}
        value={values.message}
        error={showError("message")}
        onChange={handleChange}
        onBlur={handleBlur}
      />

      <button
        type="submit"
        disabled={!isValid}
        className="inline-flex items-center justify-center rounded-md bg-accent px-6 py-3 text-sm font-semibold text-gray-900 shadow-sm transition-colors hover:bg-accent/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:bg-secondary/40 disabled:text-gray-500 disabled:hover:bg-secondary/40"
      >
        Send message
      </button>
    </form>
  );
}
