"use client";

import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { defaultLocale } from "@/i18n";
import { useLocale } from "next-intl";

/**
 * Client component that redirects from /en/* to /* for the default locale
 * This ensures clean URLs without /en prefix for English pages
 */
export default function LocaleRedirect() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    // Only redirect if we're on the default locale (English)
    if (locale === defaultLocale) {
      // Check if the pathname starts with /en
      if (pathname.startsWith(`/${defaultLocale}`)) {
        // Remove the /en prefix
        const newPath = pathname.replace(`/${defaultLocale}`, "") || "/";

        // Replace the current history entry (don't add to history stack)
        router.replace(newPath);
      }
    }
  }, [locale, pathname, router]);

  // This component doesn't render anything
  return null;
}
