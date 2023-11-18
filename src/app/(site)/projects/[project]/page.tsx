import { getProject } from "@/sanity/utils";
import { PortableText } from "@portabletext/react";

import Image from "next/image";

type Props = {
  params: { project: string };
};

export default async function Project({ params }: Props) {
  const slug = params.project;
  const project = await getProject(slug);
  return (
    <article className="prose text-zinc-900 dark:text-zinc-50">
      <h1 className="text-zinc-900 dark:text-zinc-50">{project.name}</h1>
      {project.image && (
        <Image
          src={project.image}
          alt={project.alt ? project.alt : project.name}
          width={1600}
          height={900}
          className="not-prose aspect-w-16 aspect-h-9 max-w-3xl rounded-xl"
        />
      )}
      <PortableText value={project.content} />
    </article>
  );
}
