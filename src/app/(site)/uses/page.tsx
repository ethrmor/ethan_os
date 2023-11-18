import Link from "next/link";

export default function Uses() {
  return (
    <div className="prose text-zinc-900 dark:text-zinc-50">
      <h1 className="text-zinc-900 dark:text-zinc-50">Uses</h1>
      <p>
        Inspired by{" "}
        <Link
          className="text-purple-600 underline hover:underline-offset-2"
          href="uses.tech"
        >
          uses.tech
        </Link>{" "}
        from the brilliant Wes Bos, /uses features the technology I use on a
        day-to-day basis. I attempt to keep this list up-to-date, but it may not
        always be. Feel free to check back periodically for updates!
      </p>
      <h2 className="text-zinc-900 dark:text-zinc-50">Hardware</h2>
      <ul>
        <li className="text-lg">
          2017 13&quot; MacBook Pro
          <p className="mt-0 text-base text-zinc-600 dark:text-zinc-300">
            I bought this new in 2019 and have regretted it ever since. I plan
            on upgrading to a 2023 15&quot; M2 MacBook Air by the end of the
            year.
          </p>
        </li>
        <li className="text-lg">
          Logitech MX Mechanical Mini for Mac Keyboard
          <p className="mt-0 text-base text-zinc-600 dark:text-zinc-300">
            I&apos;ve always been a fan mechanical keyboards, but I hated the
            loud, obnoxious ones, which I know is a bit of an oxymoron. I
            recently upgraded to the Logitech MX Mechanical as I&apos;ve used
            their MX mouse for years.
          </p>
        </li>
        <li className="text-lg">
          Logitech MX Master 2S Mouse
          <p className="mt-0 text-base text-zinc-600 dark:text-zinc-300">
            You&apos;ll notice a trend that I really enjoy Logitech products.
            This may be due to the fact that I have not tried out many
            alternatives, because I have been so happy since the start. The
            quality is so nice and, in my experience, their products last much
            longer than many electronics today.
          </p>
        </li>
      </ul>
      <h2 className="text-zinc-900 dark:text-zinc-50">Software</h2>
      <ul>
        <li className="text-lg">
          Raycast
          <p className="mt-0 text-base text-zinc-600 dark:text-zinc-300">
            &apos;Nuff Said.
          </p>
        </li>
        <li className="text-lg">
          Cursor
          <p className="mt-0 text-base text-zinc-600 dark:text-zinc-300">
            My entire career I&apos;ve been using VS Code, but I recently made
            the switch to Cursor and I&apos;m loving it so far. I&apos;m a huge
            fan of the design and the AI integration, with the ability to add my
            own API key, is incredible.
          </p>
        </li>
        <li className="text-lg">
          Arc Broswer
          <p className="mt-0 text-base text-zinc-600 dark:text-zinc-300">
            It was tough to leave Firefox, but I&apos;m really enjoying Arc.
            It&apos;s a beautiful design and it just feels nice.
          </p>
        </li>
      </ul>
    </div>
  );
}
