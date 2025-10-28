"use client";

import { PillNav } from "@/components";
import { navItems } from "@/data/menu";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const Navbar = () => {
  const { theme } = useTheme();
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
        activeHref="/"
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
