import type { ChangeEvent, FocusEvent } from "react";

import {
  errorClassName,
  inputClassName,
  labelClassName,
} from "./contact-form-validation";

type SharedProps = {
  id: string;
  name: string;
  label: string;
  value: string;
  error?: string;
  onChange: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onBlur: (event: FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
};

type FormFieldProps =
  | (SharedProps & { as?: "input"; type?: "text" | "email" | "tel" })
  | (SharedProps & { as: "textarea"; rows?: number });

export function FormField(props: FormFieldProps) {
  const { id, name, label, value, error, onChange, onBlur } = props;
  const errorId = `${id}-error`;

  return (
    <div>
      <label htmlFor={id} className={labelClassName}>
        {label}
      </label>
      {props.as === "textarea" ? (
        <textarea
          id={id}
          name={name}
          rows={props.rows ?? 5}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? errorId : undefined}
          className={inputClassName}
        />
      ) : (
        <input
          id={id}
          name={name}
          type={props.type ?? "text"}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? errorId : undefined}
          className={inputClassName}
        />
      )}
      {error && (
        <p id={errorId} role="alert" className={errorClassName}>
          {error}
        </p>
      )}
    </div>
  );
}
