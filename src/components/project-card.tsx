import Link from "next/link";
import Image from "next/image";
import { Project } from "@/types/project";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link href={`/projects/${project.slug}`} className="@container w-full">
      <article className="@md:grid-cols-5 grid grid-cols-1 overflow-hidden rounded-lg shadow transition hover:shadow-lg">
        <div className="col-span-2">
          {project.image && (
            <Image
              src={project.image}
              alt={project.alt ? project.alt : project.name}
              width={1600}
              height={900}
              className="h-full w-full object-cover"
            />
          )}
        </div>

        <div className="col-span-3 bg-white p-4 dark:bg-zinc-900 sm:p-6">
          <time
            dateTime="2022-10-10"
            className="block text-xs text-zinc-600 dark:text-zinc-300"
          >
            10th Oct 2022
          </time>

          <h3 className="text-pretty mt-0.5 text-lg text-zinc-900 dark:text-zinc-50">
            {project.name}
          </h3>

          <p className="mt-2 line-clamp-3 text-sm/relaxed text-zinc-600 dark:text-zinc-300">
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
