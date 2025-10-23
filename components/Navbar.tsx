"use client";

import PillNav from "@/components/ui/PillNav";
import { navItems } from "@/data/menu";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const Navbar = () => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted ? theme === "dark" : false;

  return (
    <PillNav
      items={navItems}
      activeHref="/"
      className="custom-nav"
      ease="power2.easeOut"
      baseColor={isDark ? "#ffffff" : "#000000"}
      pillColor={isDark ? "#000000" : "#ffffff"}
      hoveredPillTextColor={isDark ? "#000000" : "#ffffff"}
      pillTextColor={isDark ? "#ffffff" : "#000000"}
      showThemeToggle={true}
    />
  );
};

export default Navbar;
