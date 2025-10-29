"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { Locale, localeNames, localeFlags } from "@/i18n";
import { useState, useRef, useEffect } from "react";

export function LanguageSwitcher() {
  const params = useParams();
  const currentLocale = params.locale as Locale;
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

  const getLocalePath = (locale: Locale) => {
    const pathname = window.location.pathname;
    // Remove the current locale from the pathname
    const pathWithoutLocale = pathname.replace(/^\/(en|ar|tr)/, "");
    // Add the new locale
    return `/${locale}${pathWithoutLocale}`;
  };

  return (
    <div className="relative inline-block" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-lg border border-border bg-background hover:bg-accent transition-colors"
        aria-label="Select language"
        aria-expanded={isOpen}
      >
        <span className="text-lg">{localeFlags[currentLocale]}</span>
        <span className="text-sm font-medium hidden sm:inline">
          {localeNames[currentLocale]}
        </span>
        <svg
          className={`w-4 h-4 transition-transform ${isOpen ? "rotate-180" : ""}`}
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
        <div className="absolute top-full mt-2 right-0 sm:left-0 sm:right-auto min-w-[160px] bg-popover border border-border rounded-lg shadow-lg overflow-hidden z-50">
          {Object.entries(localeNames).map(([locale, name]) => (
            <Link
              key={locale}
              href={getLocalePath(locale as Locale)}
              onClick={() => setIsOpen(false)}
              className={`flex items-center gap-3 px-4 py-3 hover:bg-accent transition-colors ${
                currentLocale === locale
                  ? "bg-accent/50 font-semibold"
                  : ""
              }`}
            >
              <span className="text-lg">
                {localeFlags[locale as Locale]}
              </span>
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
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
