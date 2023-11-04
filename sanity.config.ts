import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { schemas } from "@/sanity/schemas";

export default defineConfig({
  title: "My Studio",
  projectId: "b2a8pn1e",
  dataset: "production",
  apiVersion: "2023-11-03",
  basePath: "/admin",

  plugins: [deskTool()],

  schema: {
    types: schemas,
  },
});
