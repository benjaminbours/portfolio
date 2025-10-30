import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Project } from "@/interfaces/project";
import DateFormatter from "../../01_atoms/date-formatter";
import GitHubIcon from "@mui/icons-material/GitHub";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

interface Props {
  project: Project;
  content: string;
  lang: string;
}

export const ProjectTemplate: React.FC<Props> = ({ project, content, lang }) => {
  return (
    <main className="project-template">
      <div className="container">
        <section className="project-template__header">
          <h2>
            <Link className="main-title-link" href={`/${lang}`}>
              B<span className="highlight-text">B</span>B
            </Link>
          </h2>
        </section>
        <article>
          <h1>{project.title}</h1>
          <Image
            src={project.coverImage}
            alt={`Cover Image for ${project.title}`}
            width={1300}
            height={630}
          />
          <div className="project-template__meta">
            <DateFormatter dateString={project.date} />
            {project.tags && project.tags.length > 0 && (
              <ul className="project-template__tag-list">
                {project.tags.map((tag) => (
                  <li key={tag}>
                    <span className="tag">{tag}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div className="project-template__links">
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="button"
              >
                <OpenInNewIcon /> View Demo
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="button"
              >
                <GitHubIcon /> Source Code
              </a>
            )}
          </div>
          <div
            className="markdown"
            dangerouslySetInnerHTML={{ __html: content }}
          />
          <div className="project-template__end">
            <DateFormatter dateString={project.date} />
            <h3 className="project-template__author">
              <span>Benjamin Bours</span>
            </h3>
          </div>
        </article>
      </div>
    </main>
  );
};
