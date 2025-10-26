import ProjectCard from "../ProjectCard";
import { getRecentProjects } from "@/data/projects";
import Link from "next/link";

const LatestProjects = () => {
  const recentProjects = getRecentProjects(3);

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Latest <span className="text-purple">Projects</span>
        </h2>
        <p className="text-center text-neutral-500 dark:text-neutral-400 mb-12 max-w-2xl mx-auto">
          Explore my recent work showcasing modern web applications and
          innovative solutions
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
          {recentProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <Link
            href="/projects"
            className="px-8 py-3 rounded-lg bg-purple text-white font-semibold hover:bg-purple/90 transition-colors"
          >
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LatestProjects;
