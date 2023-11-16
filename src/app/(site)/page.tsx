import { getProjects } from "../../sanity/utils";
import ProjectCard from "@/components/project-card";

export default async function Home() {
  const projects = await getProjects();
  return (
    <section className="flex flex-1 flex-col gap-2 py-8">
      <h1 className="pb-4 pt-12 text-3xl font-extrabold text-zinc-900 dark:text-zinc-50 md:text-5xl">
        Problem solver. Creative thinker.{" "}
        <span className="bg-gradient-to-r from-purple-900 to-purple-700 bg-clip-text text-transparent dark:from-purple-700 dark:to-purple-500">
          Software Developer
        </span>
        .
      </h1>
      <p className="text-md pb-12 text-zinc-600 dark:text-zinc-400">
        I&apos;m Ethan, a software developer based in Illinois. I&apos;m
        passionate about the web and I love building things.
      </p>
      <br />
      <h2>Projects</h2>
      <div className="grid gap-2 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project._id} project={project} />
        ))}
      </div>
    </section>
  );
}
