"use client";

import { PillNav } from "@/components";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import { defaultLocale } from "@/i18n";

const Navbar = () => {
  const { theme } = useTheme();
  const t = useTranslations("nav");
  const locale = useLocale();
  const [mounted, setMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < 10) {
        // Always show navbar at the very top
        setIsVisible(true);
      } else if (currentScrollY < lastScrollY) {
        // Scrolling up - show navbar immediately
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY) {
        // Scrolling down - hide navbar completely
        setIsVisible(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  const isDark = mounted ? theme === "dark" : false;

  // Helper function to create locale-aware paths
  const getLocalePath = (path: string) => {
    if (locale === defaultLocale) {
      return path;
    }
    return `/${locale}${path}`;
  };

  const navItems = [
    { id: "home", label: t("home"), href: getLocalePath("/") },
    { id: "about", label: t("about"), href: getLocalePath("/#about") },
    { id: "projects", label: t("projects"), href: getLocalePath("/projects") },
    { id: "contact", label: t("contact"), href: getLocalePath("/contact") },
  ];

  return (
    <div
      className="fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out"
      style={{
        transform: isVisible ? "translateY(0)" : "translateY(-150%)",
        opacity: isVisible ? 1 : 0,
      }}
    >
      <PillNav
        items={navItems}
        activeHref={getLocalePath("/")}
        className="custom-nav pt-4"
        ease="power2.easeOut"
        baseColor={isDark ? "#ffffff" : "#000000"}
        pillColor={isDark ? "#000000" : "#ffffff"}
        hoveredPillTextColor={isDark ? "#000000" : "#ffffff"}
        pillTextColor={isDark ? "#ffffff" : "#000000"}
        showThemeToggle={true}
      />
    </div>
  );
};

export default Navbar;
