import ProjectCard from "@/components/project-card";
import { getProjects } from "@/sanity/utils";

export default async function Projects() {
  const projects = await getProjects();
  return (
    <div className="flex flex-col gap-4 py-8">
      <h1 className="text-2xl">Projects</h1>
      {projects.map((project) => (
        <ProjectCard key={project._id} project={project} />
      ))}
    </div>
  );
}
