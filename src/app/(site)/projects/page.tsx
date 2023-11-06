import ProjectCard from "@/components/project-card";
import { getProjects } from "@/sanity/utils";

export default async function Projects() {
  const projects = await getProjects();
  return (
    <div className="flex w-full flex-col gap-4">
      <section className="prose max-w-none">
        <h1>Projects</h1>
        <div className="not-prose flex gap-4">
          {projects.map((project) => (
            <ProjectCard key={project._id} project={project} />
          ))}
        </div>
      </section>
    </div>
  );
}
