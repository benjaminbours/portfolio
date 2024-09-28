import Link from "next/link";
import Image from "next/image";
import DateFormatter from "@/app/_components/01_atoms/date-formatter";
import { Post } from "@/interfaces/post";

export function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  slug,
  tags,
}: Post) {
  return (
    <Link className="post-preview" href={`/posts/${slug}`} aria-label={title}>
      <Image
        src={coverImage}
        alt={`Cover Image for ${title}`}
        width={1300}
        height={630}
      />
      <div className="post-preview__content-container">
        {tags && tags.length > 0 && (
          <ul className="post-preview__tag-list">
            {tags.map((tag) => (
              <li>
                <span className="tag" key={tag}>
                  {tag}
                </span>
              </li>
            ))}
          </ul>
        )}
        <h3 className="post-preview__title">{title}</h3>
        <DateFormatter dateString={date} />
        <p>{excerpt}</p>
      </div>
    </Link>
  );
}
