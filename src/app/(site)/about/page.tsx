import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "Description",
};

export default function About() {
  return (
    <div className="py-8">
      <h1>About</h1>
      <p>Test</p>
    </div>
  );
}
