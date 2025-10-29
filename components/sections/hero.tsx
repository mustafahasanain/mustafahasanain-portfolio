"use client";

import { BlurTitle, FigmaButton, Grid } from "@/components";
import { useTranslations } from "next-intl";

const Hero = () => {
  const t = useTranslations("hero");

  return (
    <div className="relative w-full h-screen">
      <div className="absolute inset-0 w-full h-full">
        <Grid />
      </div>

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative z-10 w-full max-w-6xl px-4 text-center">
          <p className="inline-block text-sm md:text-base tracking-[0.3em] uppercase mb-8 text-gray-800 dark:text-gray-300 bg-white dark:bg-[#0a0a0a] px-3 py-1 rounded">
            {t("tagline")}
          </p>

          <BlurTitle />

          <FigmaButton
            className="mt-10 px-8 py-3 border-2 bg-white dark:bg-[#0a0a0a] border-black/30 rounded-md text-black dark:text-white hover:bg-black/10 dark:hover:bg-white/10 transition-all duration-300 flex items-center gap-2 mx-auto"
            text={t("cta")}
            url="#projects"
            variant="outline"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
