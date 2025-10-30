import React from "react";
import { ProjectPreview } from "./project-preview";
import { Project } from "@/interfaces/project";

interface Props {
  projects: Project[];
  lang: string;
}

export const ProjectsTemplate: React.FC<Props> = ({ projects, lang }) => {
  return (
    <main className="projects-template">
      <div className="container">
        <section className="projects-template__header">
          <h1 className="projects-template__main-title">Projects</h1>
          <p className="projects-template__subtitle">
            A collection of my software engineering work, from 3D multiplayer games to data analytics platforms.
          </p>
        </section>
        <section>
          <ul className="project-list">
            {projects.map((project) => (
              <li className="project-list__item" key={project.slug}>
                <ProjectPreview {...project} lang={lang} />
              </li>
            ))}
          </ul>
        </section>
      </div>
    </main>
  );
};
