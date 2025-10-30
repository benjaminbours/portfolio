import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllProjects, getProjectBySlug } from "@/lib/api";
import markdownToHtml from "@/lib/markdownToHtml";
import { ProjectTemplate } from "@/app/_components/04_templates/ProjectTemplate";
import { withBasePath } from "@/lib/constants";

export default async function Project({ params }: Params) {
  const project = getProjectBySlug('en', params.slug);

  if (!project) {
    return notFound();
  }

  const content = await markdownToHtml(project.content || "");

  return <ProjectTemplate project={project} content={content} lang="en" />;
}

type Params = {
  params: {
    slug: string;
  };
};

export function generateMetadata({ params }: Params): Metadata {
  const project = getProjectBySlug('en', params.slug);

  if (!project) {
    return notFound();
  }

  const title = `${project.title} | Benjamin Bours`;
  const description = project.excerpt;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [withBasePath(project.ogImage.url)],
    },
  };
}

export async function generateStaticParams() {
  const projects = getAllProjects('en');

  return projects.map((project) => ({
    slug: project.slug,
  }));
}
