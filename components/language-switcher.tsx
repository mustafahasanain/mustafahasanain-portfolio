"use client";

import { useParams, usePathname, useRouter } from "next/navigation";
import {
  Locale,
  locales,
  localeNames,
  localeFlags,
  defaultLocale,
} from "@/i18n";
import { useState, useRef, useEffect } from "react";

export function LanguageSwitcher() {
  const params = useParams();
  const pathname = usePathname();
  const router = useRouter();
  const currentLocale = (params.locale as Locale) || defaultLocale;
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLocaleChange = (newLocale: Locale) => {
    setIsOpen(false);

    // Don't do anything if clicking the current locale
    if (newLocale === currentLocale) {
      return;
    }

    // Get the full browser pathname
    const fullPathname = window.location.pathname;

    // Remove any existing locale from the path
    // Split into segments and filter out empty strings
    const segments = fullPathname.split("/").filter(Boolean);

    // Check if first segment is a locale and remove it
    const pathSegments =
      segments[0] && locales.includes(segments[0] as Locale)
        ? segments.slice(1)
        : segments;

    // Reconstruct the path without locale
    const pathWithoutLocale =
      pathSegments.length > 0 ? "/" + pathSegments.join("/") : "/";

    // Construct the new URL - always use locale prefix initially
    const newPath = `/${newLocale}${pathWithoutLocale}`;

    // Use client-side navigation instead of full page reload
    // This will change the language without re-rendering the entire page
    router.push(newPath);
  };

  const CurrentFlag = localeFlags[currentLocale];

  return (
    <div className="relative inline-block" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-lg border border-border bg-background hover:bg-accent transition-colors"
        aria-label="Select language"
        aria-expanded={isOpen}
      >
        <CurrentFlag className="w-5 h-5" />
        <span className="text-sm font-medium hidden sm:inline">
          {localeNames[currentLocale]}
        </span>
        <svg
          className={`w-4 h-4 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute top-full mt-2 right-0 min-w-40 bg-popover border border-border rounded-lg shadow-lg overflow-hidden z-50">
          {Object.entries(localeNames).map(([locale, name]) => {
            const FlagComponent = localeFlags[locale as Locale];
            return (
              <button
                key={locale}
                onClick={() => handleLocaleChange(locale as Locale)}
                className={`w-full flex items-center gap-3 px-4 py-3 hover:bg-accent transition-colors ${
                  currentLocale === locale ? "bg-accent/50 font-semibold" : ""
                }`}
              >
                <FlagComponent className="w-5 h-5" />
                <span className="text-sm">{name}</span>
                {currentLocale === locale && (
                  <svg
                    className="w-4 h-4 ms-auto"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
