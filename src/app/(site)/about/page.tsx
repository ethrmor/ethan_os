import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description: "Description",
};

export default function About() {
  return (
    <div className="prose text-zinc-900 dark:text-zinc-50">
      <h1 className="text-zinc-900 dark:text-zinc-50">Hi, I&apos;m Ethan</h1>
      <p>
        I&apos;m a software developer based in Illinois, currently building
        websites at{" "}
        <Link href="https://centralstatesmarketing.com">
          Central States Marketing
        </Link>
        .
      </p>
      <h2>How&apos;d we get here?</h2>
      <p>
        It wasn&apos;t always software. Well, it was, I just didn&apos;t always
        know. Having grown up during the dawn of the modern internet, I was no
        stranger to using CSS to customize my MySpace theme.{" "}
      </p>
    </div>
  );
}
