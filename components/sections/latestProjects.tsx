"use client";

import { ProjectCard, FigmaButton } from "@/components";
import { getRecentProjects } from "@/data/projects";
import { useTranslations, useLocale } from "next-intl";

const LatestProjects = () => {
  const t = useTranslations("latestProjects");
  const locale = useLocale();
  const recentProjects = getRecentProjects(3);

  return (
    <section className="py-12 sm:py-16 md:py-20" id="projects">
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 sm:mb-4">
          {t("title")}
        </h2>
        <p className="text-center text-sm sm:text-base text-neutral-500 dark:text-neutral-400 mb-0 max-w-2xl mx-auto px-4">
          {t("description")}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 py-8 sm:py-10">
          {recentProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <div className="flex gap-4 justify-center mt-4 sm:mt-2">
          <FigmaButton text={t("cta")} url={`/${locale}/projects`} variant="outline" />
        </div>
      </div>
    </section>
  );
};

export default LatestProjects;
