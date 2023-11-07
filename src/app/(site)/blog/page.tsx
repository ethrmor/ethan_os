import { getBlogs } from "@/sanity/utils";
import Image from "next/image";
import Link from "next/link";

export default async function Blogs() {
  const blogs = await getBlogs();
  return (
    <div className="flex w-full flex-col gap-4">
      <section className="prose max-w-none text-zinc-900 dark:text-zinc-50">
        <h1 className="text-zinc-900 dark:text-zinc-50">Blogs</h1>
        <div className="not-prose flex gap-4">
          {blogs.map((blog) => (
            <Link href={`/blog/${blog.slug}`} key={blog._id}>
              <article className="overflow-hidden rounded-lg shadow transition hover:shadow-lg">
                {blog.image && (
                  <Image
                    src={blog.image}
                    alt={blog.alt ? blog.alt : blog.name}
                    width={1600}
                    height={900}
                    className="h-56 w-full object-cover"
                  />
                )}

                <div className="bg-white p-4 dark:bg-zinc-900 sm:p-6">
                  <time
                    dateTime="2022-10-10"
                    className="block text-xs text-zinc-600 dark:text-zinc-300"
                  >
                    10th Oct 2022
                  </time>

                  <h3 className="mt-0.5 text-lg text-zinc-900 dark:text-zinc-50">
                    {blog.name}
                  </h3>

                  <p className="mt-2 line-clamp-3 text-sm/relaxed text-zinc-600 dark:text-zinc-300">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Recusandae dolores, possimus pariatur animi temporibus
                    nesciunt praesentium dolore sed nulla ipsum eveniet corporis
                    quidem, mollitia itaque minus soluta, voluptates neque
                    explicabo tempora nisi culpa eius atque dignissimos.
                    Molestias explicabo corporis voluptatem?
                  </p>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
