import React from "react";
import { PostPreview } from "./post-preview";
import { Post } from "@/interfaces/post";

interface Props {
  posts: Post[];
  lang: string;
}

export const HomeTemplate: React.FC<Props> = ({ posts, lang }) => {
  return (
    <main className="home-template">
      <div className="container">
        <section className="home-template__header">
          <h1 className="home-template__main-title">
            B<span className="highlight-text">B</span>Blog
          </h1>
          <h2 className="home-template__subtitle">
            A blog about software development, and emerging technologies.
          </h2>
        </section>
        <section>
          <ul className="post-list">
            {posts.map((post) => (
              <li className="post-list__item" key={post.slug}>
                <PostPreview {...post} lang={lang} />
              </li>
            ))}
          </ul>
        </section>
      </div>
    </main>
  );
};
