"use client";

import { ProjectCard, Pagination } from "@/components";
import { projects } from "@/data/projects";
import { useState } from "react";
import { useTranslations } from "next-intl";

const PROJECTS_PER_PAGE = 9;

const ProjectsPage = () => {
  const t = useTranslations("projects");
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(projects.length / PROJECTS_PER_PAGE);
  const startIndex = (currentPage - 1) * PROJECTS_PER_PAGE;
  const endIndex = startIndex + PROJECTS_PER_PAGE;
  const currentProjects = projects.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <main className="min-h-screen bg-black-100 mt-20">
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
            {t("pageTitle")}
          </h1>
          <p className="text-center text-neutral-500 dark:text-neutral-400 mb-0 max-w-2xl mx-auto">
            {t("pageDescription")}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 py-10">
            {currentProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          {totalPages > 1 && (
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          )}
        </div>
      </section>
    </main>
  );
};

export default ProjectsPage;
