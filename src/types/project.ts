import { PortableTextBlock } from "sanity";

export type Project = {
  _id: string;
  _createdAt: string;
  name: string;
  slug: string;
  image: string;
  alt: string;
  url: string;
  description: string;
  content: PortableTextBlock[];
};
