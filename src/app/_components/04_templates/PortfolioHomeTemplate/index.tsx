import React from "react";
import Link from "next/link";
import { Project } from "@/interfaces/project";
import { ProjectPreview } from "../ProjectsTemplate/project-preview";
import { InteractiveBBB } from "../../InteractiveBBB";

interface Props {
  featuredProjects: Project[];
  lang: string;
}

export const PortfolioHomeTemplate: React.FC<Props> = ({
  featuredProjects,
  lang,
}) => {
  return (
    <main className="portfolio-home-template">
      <div className="container">
        <section className="portfolio-home-template__hero">
          <h1 className="portfolio-home-template__subtitle">
            Benjamin <span>Bours</span>
          </h1>
          <p className="portfolio-home-template__description">
            Software engineer crafting interactive web experiences with modern
            technologies. <br />
            Specialized in <span>making the complex simple</span>.
            <br />
          </p>
          <p className="portfolio-home-template__description">
            From 3D multiplayer games to data analytics platforms, I love
            tackling complex technical challenges and bringing ideas to life.
          </p>

          <p className="portfolio-home-template__description">
            <span>Execution &gt; Ideas</span>
          </p>
        </section>

        <section className="portfolio-home-template__featured">
          <h2>Featured Projects</h2>
          <ul className="project-list">
            {featuredProjects.map((project) => (
              <li className="project-list__item" key={project.slug}>
                <ProjectPreview {...project} lang={lang} />
              </li>
            ))}
          </ul>
        </section>

        {/* <section className="portfolio-home-template__about-preview">
          <h2>Building Interactive Experiences</h2>
          <p>
            I'm a software engineer passionate about creating engaging web
            applications. From 3D multiplayer games to data analytics platforms,
            I love tackling complex technical challenges and bringing ideas to
            life.
          </p>
          <Link href={`/${lang}/blog`} className="button">
            Read My Blog
          </Link>
        </section> */}
      </div>
    </main>
  );
};
