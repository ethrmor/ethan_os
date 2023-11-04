import { MainNavItem } from "../types/nav";

interface DocsConfig {
  mainNav: MainNavItem[];
}

export const docsConfig: DocsConfig = {
  mainNav: [
    {
      title: "Projects",
      href: "/projects",
    },
    {
      title: "Writings",
      href: "/blog",
    },
    {
      title: "About",
      href: "/about",
    },
    {
      title: "Uses",
      href: "/uses",
    },
  ],
};
