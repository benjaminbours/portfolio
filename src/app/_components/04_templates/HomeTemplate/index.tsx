import React from "react";
import { PostPreview } from "./post-preview";
import { Post } from "@/interfaces/post";

interface Props {
  posts: Post[];
}

export const HomeTemplate: React.FC<Props> = ({ posts }) => {
  return (
    <main className="home-template">
      <div className="container">
        <section className="intro-section home-template__header">
          <h1 className="home-template__main-title">
            B<span>B</span>Blog
          </h1>
          <h2 className="home-template__subtitle">
            A blog about software development, and emerging technologies.
          </h2>
        </section>
        <section>
          <ul className="post-list">
            {posts.map((post) => (
              <li className="post-list__item" key={post.slug}>
                <PostPreview key={post.slug} {...post} />
              </li>
            ))}
          </ul>
        </section>
      </div>
    </main>
  );
};
