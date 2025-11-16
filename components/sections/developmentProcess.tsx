"use client";

import React from "react";
import { AnimatePresence, motion } from "motion/react";
import { CanvasRevealEffect, MagicButton } from "@/components";
import { developmentPhases } from "@/data/development-process";
import { DevelopmentPhase } from "@/types";
import { useTranslations } from "next-intl";

const DevelopmentProcess = () => {
  const t = useTranslations("developmentProcess");
  const tPhases = useTranslations("developmentProcess.phases");
  const [activeCard, setActiveCard] = React.useState<number | null>(null);

  return (
    <section className="py-10 md:py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 md:mb-16 pt-8 md:pt-0 dark:text-white text-black block">
          {t("title")}
        </h2>
        <div className="flex flex-col lg:flex-row items-center justify-center w-full gap-4 mx-auto px-4 md:px-8">
          {developmentPhases.map((phaseData) => (
            <Card
              key={phaseData.id}
              phaseData={phaseData}
              isActive={activeCard === phaseData.id}
              onCardClick={() =>
                setActiveCard(activeCard === phaseData.id ? null : phaseData.id)
              }
              tPhases={tPhases}
            >
              <CanvasRevealEffect
                animationSpeed={phaseData.animationSpeed}
                containerClassName={phaseData.containerClassName}
                colors={phaseData.colors}
                dotSize={phaseData.dotSize}
              />
              {phaseData.hasMask && (
                <div className="absolute inset-0 mask-[radial-gradient(400px_at_center,white,transparent)] bg-black/50 dark:bg-black/90" />
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

const Card = ({
  phaseData,
  children,
  isActive,
  onCardClick,
  tPhases,
}: {
  phaseData: DevelopmentPhase;
  children?: React.ReactNode;
  isActive: boolean;
  onCardClick: () => void;
  tPhases: any;
}) => {
  const [hovered, setHovered] = React.useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={onCardClick}
      className="border border-black/20 group/canvas-card flex items-center justify-center dark:border-white/20  max-w-sm w-full mx-auto p-4 relative aspect-square min-h-0 lg:aspect-auto lg:h-120 cursor-pointer lg:cursor-default"
    >
      <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />

      <AnimatePresence>
        {hovered && (
          <motion.div
            key="hover"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full w-full absolute inset-0 hidden lg:block"
          >
            {children}
          </motion.div>
        )}
        {isActive && (
          <motion.div
            key="click"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full w-full absolute inset-0 lg:hidden"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-20 w-full flex flex-col items-center justify-center h-full">
        <div
          className={`text-center text-2xl transition duration-200 w-full mx-auto flex items-center justify-center
          lg:group-hover/canvas-card:-translate-y-4 lg:group-hover/canvas-card:opacity-0
          ${
            isActive
              ? "opacity-0 -translate-y-4 lg:opacity-100 lg:translate-y-0"
              : "opacity-100"
          }`}
        >
          <MagicButton text={tPhases(`${phaseData.id}.phase`)} />
        </div>
        <h2
          className={`dark:text-white text-xl text-center relative z-10 text-black mt-4 font-bold transition duration-200
          lg:opacity-0 lg:group-hover/canvas-card:opacity-100 lg:group-hover/canvas-card:text-white lg:group-hover/canvas-card:-translate-y-2
          ${
            isActive
              ? "opacity-100 text-white -translate-y-2 lg:opacity-0"
              : "opacity-0"
          }`}
        >
          {tPhases(`${phaseData.id}.title`)}
        </h2>
        <p
          className={`dark:text-white text-sm relative z-10 text-black mt-4 transition duration-200 text-center
          lg:opacity-0 lg:group-hover/canvas-card:opacity-100 lg:group-hover/canvas-card:text-white lg:group-hover/canvas-card:-translate-y-2
          ${
            isActive
              ? "opacity-100 text-white -translate-y-2 lg:opacity-0"
              : "opacity-0"
          }`}
        >
          {tPhases(`${phaseData.id}.description`)}
        </p>
      </div>
    </div>
  );
};

const AceternityIcon = () => {
  return (
    <svg
      width="66"
      height="65"
      viewBox="0 0 66 65"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-10 w-10 text-black dark:text-white group-hover/canvas-card:text-white "
    >
      <path
        d="M8 8.05571C8 8.05571 54.9009 18.1782 57.8687 30.062C60.8365 41.9458 9.05432 57.4696 9.05432 57.4696"
        stroke="currentColor"
        strokeWidth="15"
        strokeMiterlimit="3.86874"
        strokeLinecap="round"
        style={{ mixBlendMode: "darken" }}
      />
    </svg>
  );
};

export const Icon = ({ className, ...rest }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};

export default DevelopmentProcess;
