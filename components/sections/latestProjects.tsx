import { ProjectCard } from "@/components";
import { getRecentProjects } from "@/data/projects";

const LatestProjects = () => {
  const recentProjects = getRecentProjects(3);

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Latest Projects
        </h2>
        <p className="text-center text-neutral-500 dark:text-neutral-400 mb-12 max-w-2xl mx-auto">
          Explore my recent work showcasing modern web applications and
          innovative solutions
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recentProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* TODO: Add a "View All Projects" button below the grid */}
      </div>
    </section>
  );
};

export default LatestProjects;
