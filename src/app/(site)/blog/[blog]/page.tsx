import { getBlog } from "@/sanity/utils";
import { PortableText } from "@portabletext/react";
import Image from "next/image";

type Props = {
  params: { blog: string };
};

export default async function Blog({ params }: Props) {
  const slug = params.blog;
  const blog = await getBlog(slug);
  return (
    <article className="prose text-zinc-900 dark:text-zinc-50">
      <h1 className="text-zinc-900 dark:text-zinc-50">{blog.name}</h1>
      {blog.image && (
        <Image
          src={blog.image}
          alt={blog.alt ? blog.alt : blog.name}
          width={1600}
          height={900}
          className="not-prose rounded-xl"
        />
      )}
      <PortableText value={blog.content} />
    </article>
  );
}
