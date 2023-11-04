import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "Description",
};

export default function About() {
  return (
    <div className="container">
      <h1>About</h1>
      <p>Test</p>
    </div>
  );
}
