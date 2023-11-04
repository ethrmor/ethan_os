import { getProject } from "@/sanity/utils";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import Link from "next/link";

type Props = {
  params: { project: string };
};

export default async function Project({ params }: Props) {
  const slug = params.project;
  const project = await getProject(slug);
  return (
    <>
      <Link href="/projects">Back</Link>
      <article className="prose prose-sm md:prose-base prose-zinc dark:prose-invert container py-8">
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
    </>
  );
}
