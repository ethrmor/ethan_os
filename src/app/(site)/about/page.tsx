import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "Description",
};

export default function About() {
  return (
    <div className="prose">
      <h1>About</h1>
      <p className="text-gray-700 dark:text-gray-300">
        Hey there! I&apos;m thrilled to have you visit my personal website.
        I&apos;m a passionate software developer, dedicated to crafting
        exceptional digital experiences. Tech has always been my thing, and I
        love geeking out over coding, problem-solving, and creating intuitive
        and efficient solutions. With a strong foundation in computer science
        and experience in several programming languages, I&apos;m well-equipped
        to tackle any challenge that comes my way.
      </p>
      <p>
        From designing and developing sleek user interfaces to building robust
        back-end systems, I enjoy the entire software development lifecycle and
        thrive in dynamic environments. I&apos;ve had the opportunity to work on
        exciting projects and collaborate with incredible teams throughout my
        career. These experiences have not only sharpened my technical skills
        but have also taught me the importance of teamwork and effective
        communication. I believe in fostering a collaborative and supportive
        environment where creative ideas can flourish, and everyone&apos;s
        contributions are valued. But it&apos;s not all about the code for me—my
        passion for software development extends beyond the screen. I&apos;m a
        firm believer in the power of technology to make a positive impact on
        people&apos;s lives. Whether it&apos;s creating software that enhances
        productivity or developing innovative solutions to real-world problems,
        I aim to use my skills to make a difference.{" "}
      </p>
      <p>
        When I&apos;m not coding, you can usually find me exploring new hiking
        trails, playing video games, or reading the latest tech blogs. I&apos;m
        constantly seeking new opportunities to grow and learn, as I believe
        that staying curious is the key to staying ahead in this ever-evolving
        field. I hope that as you navigate through my website, you&apos;ll get a
        sense of my passion and expertise.{" "}
      </p>
      <p>
        Let&apos;s connect and explore how we can work together to bring your
        ideas to life. Thanks for stopping by!
      </p>
    </div>
  );
}
