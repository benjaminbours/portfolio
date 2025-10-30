import { Metadata } from "next";
import { getAllProjects } from "@/lib/api";
import { ProjectsTemplate } from "@/app/_components/04_templates/ProjectsTemplate";

export default async function Projects({ params }: Params) {
  const projects = getAllProjects(params.lang);

  return <ProjectsTemplate projects={projects} lang={params.lang} />;
}

type Params = {
  params: {
    lang: string;
  };
};

export function generateMetadata({ params }: Params): Metadata {
  const title = `Projects | Benjamin Bours`;
  const description = `Software engineering projects by Benjamin Bours, featuring 3D multiplayer games, data analytics platforms, and more.`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
    },
  };
}
