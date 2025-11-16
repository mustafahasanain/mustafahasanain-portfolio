"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import {
  ArrowUp,
  Mail,
  MessageCircle,
  Send,
  Facebook,
  Linkedin,
  Twitter,
  Instagram,
} from "lucide-react";
import Link from "next/link";
import { defaultLocale } from "@/i18n";

const Footer = () => {
  const { theme, resolvedTheme } = useTheme();
  const t = useTranslations("footer");
  const locale = useLocale();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Use resolvedTheme to get the actual theme being used (handles 'system' preference)
  const isDark = resolvedTheme === "dark";

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Helper function to create locale-aware paths
  const getLocalePath = (path: string) => {
    if (locale === defaultLocale) {
      return path;
    }
    return `/${locale}${path}`;
  };

  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: t("social.email"),
      url: "mailto:contact@mustafahasanain.com",
      icon: Mail,
    },
    {
      name: t("social.whatsapp"),
      url: "https://wa.me/9647904188727",
      icon: MessageCircle,
    },
    {
      name: t("social.telegram"),
      url: "https://t.me/mustafahasanain",
      icon: Send,
    },
  ];

  const socialMediaLinks = [
    {
      id: "facebook",
      url: "https://www.facebook.com/people/Mustafa-Hasanain-Web-Developer/61582474967319/?mibextid=wwXIfr&rdid=11qzyfqLBCMasXLh&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1DiKTdww4M%2F%3Fmibextid%3DwwXIfr",
      icon: Facebook,
      name: "Facebook",
    },
    {
      id: "linkedin",
      url: "https://linkedin.com/in/mustafahasanain",
      icon: Linkedin,
      name: "LinkedIn",
    },
    {
      id: "x",
      url: "https://x.com/mustafahasanain",
      icon: Twitter,
      name: "X",
    },
    {
      id: "instagram",
      url: "https://www.instagram.com/mustafahasanain1/",
      icon: Instagram,
      name: "Instagram",
    },
  ];

  return (
    <footer
      className="w-full border-t border-border transition-colors"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-8 md:py-12">
        <div className="flex items-center justify-between w-full">
          <div
            className="text-sm transition-colors text-muted-foreground"
          >
            {t("copyright", { year: currentYear })}
          </div>

          <button
            onClick={scrollToTop}
            className="group flex items-center gap-3 text-sm font-medium tracking-wide transition-colors text-muted-foreground hover:text-foreground"
            aria-label="Back to top"
          >
            <span>{t("backToTop")}</span>
            <div
              className="w-12 h-12 rounded-full border border-border bg-muted flex items-center justify-center transition-all group-hover:scale-110 group-hover:bg-foreground group-hover:text-background"
            >
              <ArrowUp className="w-5 h-5" />
            </div>
          </button>
        </div>

        <div className="flex flex-col justify-center mt-20 mb-16 md:mb-24">
          <h2
            className="text-sm font-medium tracking-wider transition-colors text-muted-foreground"
          >
            {t("cta")}
          </h2>

          <Link
            href={getLocalePath("/contact")}
            className="block text-[70px] md:text-[120px] lg:text-[220px] font-bold leading-none tracking-tight mb-12 md:mb-16 transition-colors duration-300 text-foreground hover:text-primary"
          >
            {t("letsTalk")}
          </Link>

          <div className="flex items-center justify-between w-full flex-wrap gap-4 mt-6">
            <div className="flex flex-wrap gap-4 justify-start sm:flex-nowrap sm:gap-4 [@media(max-width:640px)]:flex-nowrap [@media(max-width:640px)]:gap-2">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-8 py-3 rounded-full border border-border text-sm font-medium tracking-wide transition-all hover:scale-105 sm:px-8 sm:py-3 sm:text-sm [@media(max-width:640px)]:px-4 [@media(max-width:640px)]:py-2 [@media(max-width:640px)]:text-xs flex items-center gap-2 text-foreground hover:bg-foreground hover:text-background"
                  >
                    <Icon className="w-4 h-4" />
                    {link.name}
                  </a>
                );
              })}
            </div>

            <div className="flex justify-end">
              <div className="flex items-center gap-4">
                {socialMediaLinks.map((link) => {
                  const Icon = link.icon;
                  return (
                    <a
                      key={link.id}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full border border-border bg-muted flex items-center justify-center transition-all duration-300 hover:scale-110 hover:bg-foreground hover:text-background"
                      aria-label={link.name}
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
