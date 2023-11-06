import Link from "next/link";

export default function Uses() {
  return (
    <div className="prose">
      <h1>Uses</h1>
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
      <h2>Hardware</h2>
      <ul>
        <li>
          2017 13&quot; MacBook Pro
          <p>
            I bought this new in 2019 and have regretted it ever since. I plan
            on upgrading to a 2023 15&quot; M2 MacBook Air by the end of the
            year.
          </p>
        </li>
        <li>
          Logitech MX Mechanical Mini for Mac Keyboard
          <p>
            I&apos;ve always been a fan mechanical keyboards, but I hated the
            loud, obnoxious ones, which I know is a bit of an oxymoron. I
            recently upgraded to the Logitech MX Mechanical as I&apos;ve used
            their MX mouse for years.
          </p>
        </li>
        <li>
          Logitech MX Master 2S Mouse
          <p>
            You&apos;ll notice a trend that I really enjoy Logitech products.
            This may be due to the fact that I have not tried out many
            alternatives, because I have been so happy since the start. The
            quality is so nice and, in my experience, their products last much
            longer than many electronics today.
          </p>
        </li>
      </ul>
      <h2>Software</h2>
      <ul>
        <li>
          Raycast
          <p>&apos;Nuff Said.</p>
        </li>
      </ul>
    </div>
  );
}
