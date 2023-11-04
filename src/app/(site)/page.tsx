import Image from "next/image";
import { getProjects } from "../../sanity/utils";
import Link from "next/link";
import ProjectCard from "@/components/project-card";

export default async function Home() {
  const projects = await getProjects();
  return (
    <section className="container flex flex-1 flex-col gap-2 py-4">
      <h1>Projects</h1>
      <div className="flex gap-4">
        {projects.map((project) => (
          <ProjectCard key={project._id} project={project} />
        ))}
      </div>
    </section>
  );
}
