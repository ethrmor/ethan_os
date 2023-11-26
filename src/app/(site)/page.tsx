import Image from "next/image";
import Link from "next/link";

import { getProjects, getBlogs } from "../../sanity/utils";
import { Icons } from "@/components/icons";

export default async function Home() {
  const projects = await getProjects();
  const blogs = await getBlogs();
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
        Hi 👋🏻 I&apos;m Ethan. Welcome to my tiny little corner of the internet.
        I am a software developer based in Illinois who is passionate about all
        things web. I love to build things, whether it&apos;s with my hands or
        with code.
      </p>
      <br />
      <h2 className="text-lg font-bold md:text-2xl">Selected Projects</h2>
      <div className="grid gap-2 pb-12">
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
                  explicabo tempora nisi culpa eius atque dignissimos. Molestias
                  explicabo corporis voluptatem?
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
      <h2 className="text-lg font-bold md:text-2xl">Latest Writings</h2>
      <div className="flex flex-col gap-2">
        {blogs.map((blog) => (
          <article key={blog._id}>
            <div className="sm:py-6">
              <time
                dateTime="2022-10-10"
                className="block text-xs text-zinc-600 dark:text-zinc-300"
              >
                {prettifyDate(blog._createdAt)}
              </time>
              <Link href={`/blog/${blog.slug}`} className="font-bold underline">
                <h3 className="text-pretty mt-0.5 text-lg text-zinc-900 dark:text-zinc-50">
                  {blog.name}
                </h3>
              </Link>
              <p className="mt-2 line-clamp-3 text-sm/relaxed text-zinc-600 dark:text-zinc-300">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Recusandae dolores, possimus pariatur animi temporibus nesciunt
                praesentium dolore sed nulla ipsum eveniet corporis quidem,
                mollitia itaque minus soluta, voluptates neque explicabo tempora
                nisi culpa eius atque dignissimos. Molestias explicabo corporis
                voluptatem?
              </p>
              <Link
                href={`/blog/${blog.slug}`}
                className="mt-3 flex items-center gap-2 text-xs underline hover:opacity-90"
              >
                Read More
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function prettifyDate(date: string) {
  const d = new Date(date);
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
