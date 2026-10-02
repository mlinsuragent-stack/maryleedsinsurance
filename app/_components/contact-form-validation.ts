export type InsuranceType =
  | ""
  | "Life Insurance"
  | "Small Business Insurance"
  | "Property & Casualty"
  | "Commercial Insurance";

export type FormValues = {
  name: string;
  email: string;
  phone: string;
  insuranceType: InsuranceType;
  message: string;
};

export type FieldName = keyof FormValues;

export type FormErrors = Partial<Record<FieldName, string>>;

export const insuranceOptions: InsuranceType[] = [
  "Life Insurance",
  "Small Business Insurance",
  "Property & Casualty",
  "Commercial Insurance",
];

export const initialValues: FormValues = {
  name: "",
  email: "",
  phone: "",
  insuranceType: "",
  message: "",
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phonePattern = /^(?=.*\d)[\d\s()+-]{7,}$/;

export function validateField(
  field: FieldName,
  values: FormValues,
): string | undefined {
  const value = values[field];

  switch (field) {
    case "name":
      return value.trim().length === 0 ? "Name is required." : undefined;
    case "email":
      if (value.trim().length === 0) return "Email is required.";
      if (!emailPattern.test(value.trim())) return "Enter a valid email address.";
      return undefined;
    case "phone":
      if (value.trim().length === 0) return "Phone number is required.";
      if (!phonePattern.test(value.trim())) return "Enter a valid phone number.";
      return undefined;
    case "insuranceType":
      return value.trim().length === 0 ? "Select an insurance type." : undefined;
    case "message":
      if (value.trim().length === 0) return "Message is required.";
      if (value.trim().length < 10) return "Message must be at least 10 characters.";
      return undefined;
    default:
      return undefined;
  }
}

export function validateAll(values: FormValues): FormErrors {
  const errors: FormErrors = {};
  (Object.keys(values) as FieldName[]).forEach((field) => {
    const error = validateField(field, values);
    if (error) errors[field] = error;
  });
  return errors;
}

export const inputClassName =
  "mt-1 w-full rounded-md border border-secondary/30 bg-white px-3 py-2 text-sm text-gray-900 shadow-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/40 sm:text-base";

export const labelClassName = "block text-sm font-medium text-gray-900 sm:text-base";

export const errorClassName = "mt-1 text-sm text-primary";
