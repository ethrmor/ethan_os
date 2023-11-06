import { getProject } from "@/sanity/utils";
import { PortableText } from "@portabletext/react";
import { Breadcrumb } from "@/components/breadcrumb";
import Image from "next/image";

type Props = {
  params: { project: string };
};

export default async function Project({ params }: Props) {
  const slug = params.project;
  const project = await getProject(slug);
  return (
    <section className="prose text-zinc-900 dark:text-zinc-50">
      <Breadcrumb className="not-prose" />
      <article>
        <h1 className="text-zinc-900 dark:text-zinc-50">{project.name}</h1>
        {project.image && (
          <Image
            src={project.image}
            alt={project.alt ? project.alt : project.name}
            width={1600}
            height={900}
            className="rounded-xl"
          />
        )}
        <PortableText value={project.content} />
      </article>
    </section>
  );
}
