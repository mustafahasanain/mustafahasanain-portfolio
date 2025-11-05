import { defineRouting } from "next-intl/routing";
import { locales, defaultLocale } from "@/i18n";

export const routing = defineRouting({
  // All supported locales
  locales: locales,

  // Default locale (English)
  defaultLocale: defaultLocale,

  // Never show locale prefix for default locale (English)
  // Always show for non-default locales (Arabic, Turkish)
  localePrefix: "as-needed",
});
