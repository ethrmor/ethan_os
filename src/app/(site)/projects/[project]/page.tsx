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
    <section className="py-8">
      <Breadcrumb />
      <article className="prose prose-sm prose-zinc dark:prose-invert md:prose-base">
        <h1>{project.name}</h1>
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
