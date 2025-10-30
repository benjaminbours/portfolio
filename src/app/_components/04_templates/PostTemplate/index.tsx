import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Post } from "@/interfaces/post";
import DateFormatter from "../../01_atoms/date-formatter";

interface Props {
  post: Post;
  content: string;
  lang: string;
}

export const PostTemplate: React.FC<Props> = ({ post, content, lang }) => {
  return (
    <main className="post-template">
      <div className="container">
        <section className="post-template__header">
          <h2>
            <Link className="main-title-link" href={`/${lang}`}>
              B<span className="highlight-text">B</span>B
            </Link>
          </h2>
        </section>
        <article>
          <h1>{post.title}</h1>
          <Image
            src={post.coverImage}
            alt={`Cover Image for ${post.title}`}
            width={1300}
            height={630}
          />
          <DateFormatter dateString={post.date} />
          <div
            className="markdown"
            dangerouslySetInnerHTML={{ __html: content }}
          />
          <div className="post-template__end">
            <DateFormatter dateString={post.date} />
            <h3 className="post-template__author">
              <span>Benjamin Bours</span>
            </h3>
          </div>
        </article>
      </div>
    </main>
  );
};
