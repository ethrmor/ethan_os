import Link from "next/link";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import { Project } from "@/types/project";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="flex flex-col gap-2 rounded-md border border-purple-700 p-4 hover:shadow-md"
    >
      <p>Test</p>
      {project.image && (
        <Image
          src={project.image}
          alt={project.alt ? project.alt : project.name}
          width={200}
          height={200}
        />
      )}
      <h2 className="text-purple-700">{project.name}</h2>
      <PortableText value={project.content} />
    </Link>
  );
}
