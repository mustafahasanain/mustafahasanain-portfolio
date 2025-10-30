"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import BlurText from "./ui/BlurText";

const BlurTitle = () => {
  const { theme, resolvedTheme } = useTheme();
  const t = useTranslations("hero");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleAnimationComplete = () => {
    console.log("Animation completed!");
  };

  const currentTheme = mounted
    ? theme === "system"
      ? resolvedTheme
      : theme
    : "dark";
  const accentColor = currentTheme === "dark" ? "#cbacf9" : "#AD7CF6";

  return (
    <div className="space-y-2 justify-center w-full">
      <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-black dark:text-white text-center">
        <BlurText
          text={t("title.part1")}
          delay={150}
          animateBy="words"
          direction="bottom"
          className="inline"
        />
        <BlurText
          text={t("title.part2Colored")}
          delay={150}
          animateBy="words"
          direction="bottom"
          className="inline"
          style={{ color: accentColor }}
        />
        <BlurText
          text={t("title.part3")}
          delay={150}
          animateBy="words"
          direction="bottom"
          className="inline"
        />
        <BlurText
          text={t("title.part4Colored")}
          delay={150}
          animateBy="words"
          direction="bottom"
          onAnimationComplete={handleAnimationComplete}
          className="inline"
          style={{ color: accentColor }}
        />
        <BlurText
          text={t("title.part5")}
          delay={150}
          animateBy="words"
          direction="bottom"
          className="inline"
        />
      </h1>
    </div>
  );
};

export default BlurTitle;
