"use client";

import { CardBody, CardContainer, CardItem } from "@/components";
import { ProjectCardProps } from "@/types";
import Image from "next/image";
import { useState } from "react";
import { useTranslations } from "next-intl";

const ProjectCard = ({ project }: ProjectCardProps) => {
  const t = useTranslations("projects.card");
  const tItems = useTranslations("projects.items");
  const [showModal, setShowModal] = useState(false);

  const handleLiveDemoClick = (e: React.MouseEvent) => {
    if (!project.liveUrl || project.liveUrl.trim() === "") {
      e.preventDefault();
      setShowModal(true);
    }
  };

  const handleViewCode = () => {
    setShowModal(false);
    window.open(project.githubUrl, "_blank");
  };

  return (
    <>
      <CardContainer className="inter-var h-full">
        <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/10 dark:bg-black dark:border-white/20 border-black/10 w-full h-full rounded-xl p-4 sm:p-5 border flex flex-col">
          <CardItem translateZ="100" className="w-full">
            <Image
              src={project.image}
              height={1000}
              width={1000}
              className="h-48 sm:h-56 md:h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
              alt={project.title}
            />
          </CardItem>

          <CardItem
            translateZ="50"
            className="text-lg sm:text-xl font-bold text-neutral-600 dark:text-white mt-3 sm:mt-4"
          >
            {tItems(`${project.id}.title`)}
          </CardItem>
          <CardItem
            as="p"
            translateZ="60"
            className="text-neutral-500 text-xs sm:text-sm max-w-sm mt-2 dark:text-neutral-300 line-clamp-3 grow"
          >
            {tItems(`${project.id}.description`)}
          </CardItem>

          {/* Tech Stack Icons */}
          <CardItem
            translateZ="50"
            className="flex flex-wrap gap-2 mt-3 sm:mt-4 mb-2"
          >
            {project.iconLists.map((icon, index) => (
              <div
                key={index}
                className="border border-white/20 rounded-full bg-black w-8 h-8 sm:w-10 sm:h-10 flex justify-center items-center"
              >
                <Image
                  src={icon}
                  alt="tech icon"
                  width={20}
                  height={20}
                  className="sm:w-6 sm:h-6"
                />
              </div>
            ))}
          </CardItem>

          <div className="flex flex-wrap gap-3 justify-between items-center mt-auto pt-4 sm:pt-6">
            <CardItem
              translateZ={20}
              as="a"
              href={project.githubUrl}
              target="_blank"
              className="px-3 sm:px-4 py-2 rounded-xl text-xs font-normal dark:text-white hover:underline flex items-center gap-2"
            >
              <Image
                src="/github.svg"
                alt="GitHub"
                width={16}
                height={16}
                className="sm:w-5 sm:h-5"
              />
              {t("viewCode")}
            </CardItem>
            <CardItem
              translateZ={20}
              as="a"
              href={project.liveUrl || "#"}
              target={project.liveUrl ? "_blank" : "_self"}
              onClick={handleLiveDemoClick}
              className="px-3 sm:px-4 py-2 rounded-lg bg-black dark:bg-white dark:text-black text-white text-xs font-bold cursor-pointer"
            >
              {t("liveDemo")}
            </CardItem>
          </div>
        </CardBody>
      </CardContainer>

      {/* Modal */}
      {showModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
          onClick={() => setShowModal(false)}
        >
          <div
            className="bg-white dark:bg-black border border-black/10 dark:border-white/20 rounded-xl p-6 max-w-md mx-4 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-xl font-bold text-neutral-800 dark:text-white mb-3">
              {t("modal.title")}
            </h3>
            <p className="text-neutral-600 dark:text-neutral-300 mb-6">
              {t("modal.message")}
            </p>
            <div className="flex gap-3 justify-end">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 rounded-lg border border-black/10 dark:border-white/20 text-neutral-600 dark:text-neutral-300 hover:bg-gray-100 dark:hover:bg-white/10 transition-colors"
              >
                {t("modal.no")}
              </button>
              <button
                onClick={handleViewCode}
                className="px-4 py-2 rounded-lg bg-black dark:bg-white text-white dark:text-black font-bold hover:opacity-90 transition-opacity"
              >
                {t("modal.yes")}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectCard;
