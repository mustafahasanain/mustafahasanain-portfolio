import { ProjectCard } from "@/components";
import { projects } from "@/data/projects";

const ProjectsPage = () => {
  return (
    <main className="min-h-screen bg-black-100">
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            All <span className="text-purple">Projects</span>
          </h1>
          <p className="text-neutral-500 dark:text-neutral-400 max-w-2xl mx-auto text-lg">
            A comprehensive collection of my work including web applications, mobile apps, and innovative digital solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Project Statistics */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <h3 className="text-4xl font-bold text-purple mb-2">{projects.length}</h3>
            <p className="text-neutral-500 dark:text-neutral-400">Total Projects</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-purple mb-2">
              {projects.filter((p) => p.featured).length}
            </h3>
            <p className="text-neutral-500 dark:text-neutral-400">Featured Projects</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-purple mb-2">
              {projects.filter((p) => p.category === "web").length}
            </h3>
            <p className="text-neutral-500 dark:text-neutral-400">Web Applications</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-purple mb-2">
              {projects.filter((p) => p.category === "mobile").length}
            </h3>
            <p className="text-neutral-500 dark:text-neutral-400">Mobile Apps</p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProjectsPage;
