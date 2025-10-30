import Link from "next/link";
import Image from "next/image";
import DateFormatter from "@/app/_components/01_atoms/date-formatter";
import { Project } from "@/interfaces/project";
import GitHubIcon from "@mui/icons-material/GitHub";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { withBasePath } from "@/lib/constants";

export function ProjectPreview({
  title,
  coverImage,
  date,
  excerpt,
  slug,
  tags,
  lang,
  demoUrl,
  githubUrl,
  featured,
}: Project & { lang: string }) {
  return (
    <div className="project-preview">
      <Link
        className="project-preview__image-link"
        href={`/projects/${slug}`}
        aria-label={title}
      >
        <Image
          src={withBasePath(coverImage)}
          alt={`Cover Image for ${title}`}
          width={1300}
          height={630}
        />
        {/* {featured && <span className="project-preview__featured-badge">Featured</span>} */}
      </Link>
      <div className="project-preview__content-container">
        {tags && tags.length > 0 && (
          <ul className="project-preview__tag-list">
            {tags.map((tag) => (
              <li key={tag}>
                <span className="tag">{tag}</span>
              </li>
            ))}
          </ul>
        )}
        <Link href={`/projects/${slug}`}>
          <h3 className="project-preview__title">{title}</h3>
        </Link>
        <DateFormatter dateString={date} />
        <p>{excerpt}</p>
        <div className="project-preview__links">
          {demoUrl && (
            <a
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="button"
            >
              <OpenInNewIcon /> View Demo
            </a>
          )}
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="button"
            >
              <GitHubIcon /> Source Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
