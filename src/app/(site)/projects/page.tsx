import { Icons } from "@/components/icons";
import { getProjects } from "@/sanity/utils";
import Image from "next/image";
import Link from "next/link";

export default async function Projects() {
  const projects = await getProjects();
  return (
    <div className="flex w-full flex-col gap-4">
      <section className="prose max-w-none text-zinc-900 dark:text-zinc-50">
        <h1 className="text-zinc-900 dark:text-zinc-50">Projects</h1>
        <div className="not-prose flex flex-col gap-4">
          {projects.map((project) => (
            <article
              key={project._id}
              className="overflow-hidden rounded-lg shadow transition @container hover:shadow-lg @md:grid-cols-5 dark:hover:shadow-black"
            >
              <div className="grid grid-cols-1 @md:grid-cols-5">
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
                  <Link
                    href={`/projects/${project.slug}`}
                    className="w-full @container"
                  >
                    <h3 className="text-pretty mt-0.5 text-lg text-zinc-900 dark:text-zinc-50">
                      {project.name}
                    </h3>
                  </Link>

                  <p className="mt-3 line-clamp-3 text-sm/relaxed text-zinc-600 dark:text-zinc-300">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Recusandae dolores, possimus pariatur animi temporibus
                    nesciunt praesentium dolore sed nulla ipsum eveniet corporis
                    quidem, mollitia itaque minus soluta, voluptates neque
                    explicabo tempora nisi culpa eius atque dignissimos.
                    Molestias explicabo corporis voluptatem?
                  </p>
                  <div className="mt-3 flex items-center gap-8">
                    <Link
                      href="https://www.github.com/ethrmor/chug-official"
                      className="flex items-center gap-2 text-xs hover:opacity-80"
                    >
                      <Icons.gitHub className="h-5 w-5" />
                      <span className="underline">View on GitHub</span>
                    </Link>
                    <Link
                      href="https://chug-official.vercel.app"
                      className="flex items-center gap-2 text-xs hover:opacity-80"
                    >
                      <Icons.externalLink className="h-5 w-5" />
                      <span className="underline">View Live Site</span>
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
