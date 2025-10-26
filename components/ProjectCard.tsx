import { CardBody, CardContainer, CardItem } from "@/components";
import { Project } from "@/types";
import Image from "next/image";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[22rem] h-auto rounded-xl p-5 border">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
          {project.title}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          {project.description}
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src={project.image}
            height={1000}
            width={1000}
            className="h-48 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt={project.title}
          />
        </CardItem>

        {/* Tech Stack Icons */}
        <CardItem translateZ="50" className="flex gap-2 mt-4">
          {project.iconLists.map((icon, index) => (
            <div
              key={index}
              className="border border-white/[0.2] rounded-full bg-black w-10 h-10 flex justify-center items-center"
            >
              <Image src={icon} alt="tech icon" width={24} height={24} />
            </div>
          ))}
        </CardItem>

        {/* Tags */}
        <CardItem translateZ="40" className="flex flex-wrap gap-2 mt-4">
          {project.tags.slice(0, 4).map((tag, index) => (
            <span
              key={index}
              className="text-xs px-2 py-1 rounded-full bg-neutral-200 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300"
            >
              {tag}
            </span>
          ))}
        </CardItem>

        <div className="flex justify-between items-center mt-6">
          {project.liveUrl && (
            <CardItem
              translateZ={20}
              as="a"
              href={project.liveUrl}
              target="_blank"
              className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white hover:underline"
            >
              Live Demo →
            </CardItem>
          )}
          {project.githubUrl && (
            <CardItem
              translateZ={20}
              as="a"
              href={project.githubUrl}
              target="_blank"
              className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
            >
              View Code
            </CardItem>
          )}
        </div>
      </CardBody>
    </CardContainer>
  );
};

export default ProjectCard;
