import type { MetadataRoute } from "next";
import { projects } from "@/data/projects";
import { site } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const pages = [
    { path: "/", priority: 1 },
    { path: "/proyectos", priority: 0.9 },
    { path: "/experiencia", priority: 0.8 },
    { path: "/sobre-mi", priority: 0.8 },
    { path: "/conferencias", priority: 0.7 },
    { path: "/contacto", priority: 0.6 },
  ];

  return [
    ...pages.map((page) => ({
      url: `${site.url}${page.path}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: page.priority,
    })),
    ...projects.map((project) => ({
      url: `${site.url}/proyectos/${project.slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
