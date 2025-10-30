import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllProjects, getProjectBySlug } from "@/lib/api";
import markdownToHtml from "@/lib/markdownToHtml";
import { ProjectTemplate } from "@/app/_components/04_templates/ProjectTemplate";
import { LOCALES } from "@/lib/constants";

export default async function Project({ params }: Params) {
  const project = getProjectBySlug(params.lang, params.slug);

  if (!project) {
    return notFound();
  }

  const content = await markdownToHtml(project.content || "");

  return <ProjectTemplate project={project} content={content} lang={params.lang} />;
}

type Params = {
  params: {
    lang: string;
    slug: string;
  };
};

export function generateMetadata({ params }: Params): Metadata {
  const project = getProjectBySlug(params.lang, params.slug);

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
      images: [project.ogImage.url],
    },
  };
}

export async function generateStaticParams() {
  return LOCALES.reduce((acc, locale) => {
    const projects = getAllProjects(locale);

    projects.forEach((project) => {
      acc.push({
        lang: locale,
        slug: project.slug,
      });
    });

    return acc;
  }, [] as any[]);
}
