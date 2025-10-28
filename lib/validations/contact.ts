import { z } from "zod";

/**
 * Contact form validation schema
 * Enforces data integrity and provides clear error messages
 */
export const contactFormSchema = z.object({
  fullName: z
    .string()
    .min(2, "Full name must be at least 2 characters")
    .max(100, "Full name must not exceed 100 characters")
    .regex(/^[a-zA-Z\s'-]+$/, "Please enter a valid name"),

  email: z
    .string()
    .min(1, "Email is required")
    .email("Please enter a valid email address"),

  companyName: z
    .string()
    .max(100, "Company name must not exceed 100 characters")
    .optional()
    .or(z.literal("")),

  phone: z
    .string()
    .min(1, "Phone number is required")
    .regex(
      /^\+?[1-9]\d{1,14}$/,
      "Please enter a valid phone number with country code"
    ),

  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(1000, "Message must not exceed 1000 characters"),

  privacyConsent: z
    .boolean()
    .refine((val) => val === true, {
      message: "You must agree to the privacy policy to continue",
    }),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
