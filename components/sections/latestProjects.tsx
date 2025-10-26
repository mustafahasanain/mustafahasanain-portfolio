import { ProjectCard, FigmaButton } from "@/components";
import { getRecentProjects } from "@/data/projects";

const LatestProjects = () => {
  const recentProjects = getRecentProjects(3);

  return (
    <section className="py-20" id="projects">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Latest Projects
        </h2>
        <p className="text-center text-neutral-500 dark:text-neutral-400 mb-0 max-w-2xl mx-auto">
          Explore my recent work showcasing modern web applications and
          innovative solutions
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 py-10">
          {recentProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <div className="flex gap-4 justify-center mt-8">
          <FigmaButton text="More Projects" url="/projects" variant="outline" />
        </div>
      </div>
    </section>
  );
};

export default LatestProjects;
