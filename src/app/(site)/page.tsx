import { getProjects } from "../../sanity/utils";
import ProjectCard from "@/components/project-card";

export default async function Home() {
  const projects = await getProjects();
  return (
    <section className="flex flex-1 flex-col gap-2 py-8">
      <h1 className="pb-4 pt-20 text-3xl font-extrabold text-zinc-900 dark:text-zinc-50">
        Problem solver. Creative thinker. Software Developer.
      </h1>
      <p className="text-md pb-12 text-zinc-600 dark:text-zinc-400">
        I&apos;m Ethan, a software developer based in Illinois. I&apos;m
        passionate about the web and I love building things.
      </p>
      <br />
      <h2>Projects</h2>
      <div className="flex flex-col gap-4 md:flex-row">
        {projects.map((project) => (
          <ProjectCard key={project._id} project={project} />
        ))}
      </div>
    </section>
  );
}
