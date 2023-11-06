import Image from "next/image";
import { getProjects } from "../../sanity/utils";
import Link from "next/link";
import ProjectCard from "@/components/project-card";

export default async function Home() {
  const projects = await getProjects();
  return (
    <section className="flex max-w-4xl flex-1 flex-col gap-2 py-8">
      <h1 className="pb-4 pt-20 text-2xl font-bold md:text-5xl">
        Problem solver. Creative thinker. <br />
        Software Developer.
      </h1>
      <p className="pb-12 text-lg">
        I&apos;m Ethan, a software developer based in Illinois. I&apos;m
        passionate about the web and I love building things.
      </p>
      <br />
      <h2>Projects</h2>
      <div className="flex gap-4">
        {projects.map((project) => (
          <ProjectCard key={project._id} project={project} />
        ))}
      </div>
    </section>
  );
}
