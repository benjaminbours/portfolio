import { Metadata } from "next";
import { getAllProjects } from "@/lib/api";
import { ProjectsTemplate } from "@/app/_components/04_templates/ProjectsTemplate";

export default async function Projects() {
  const projects = getAllProjects('en');

  return <ProjectsTemplate projects={projects} lang="en" />;
}

export const metadata: Metadata = {
  title: `Projects | Benjamin Bours`,
  description: `Software engineering projects by Benjamin Bours, featuring 3D multiplayer games, data analytics platforms, and more.`,
  openGraph: {
    title: `Projects | Benjamin Bours`,
    description: `Software engineering projects by Benjamin Bours, featuring 3D multiplayer games, data analytics platforms, and more.`,
  },
};
