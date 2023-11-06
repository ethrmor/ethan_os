import Link from "next/link";
import Image from "next/image";
import { Project } from "@/types/project";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link href={`/projects/${project.slug}`}>
      <article className="overflow-hidden rounded-lg shadow transition hover:shadow-lg">
        {project.image && (
          <Image
            src={project.image}
            alt={project.alt ? project.alt : project.name}
            width={1600}
            height={900}
            className="h-56 w-full object-cover"
          />
        )}

        <div className="bg-white p-4 sm:p-6">
          <time dateTime="2022-10-10" className="block text-xs text-gray-500">
            10th Oct 2022
          </time>

          <h3 className="mt-0.5 text-lg text-gray-900">{project.name}</h3>

          <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae
            dolores, possimus pariatur animi temporibus nesciunt praesentium
            dolore sed nulla ipsum eveniet corporis quidem, mollitia itaque
            minus soluta, voluptates neque explicabo tempora nisi culpa eius
            atque dignissimos. Molestias explicabo corporis voluptatem?
          </p>
        </div>
      </article>
    </Link>
  );
}
