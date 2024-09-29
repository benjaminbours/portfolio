import Link from "next/link";
import React from "react";

export const NotFoundTemplate: React.FC = () => {
  return (
    <main className="not-found-template">
      <div className="container">
        <section className="home-template__header">
          <h1 className="home-template__main-title">
            B<span className="highlight-text">B</span>Blog
          </h1>
          <h2 className="home-template__subtitle">
            A blog about software development, and emerging technologies.
          </h2>
        </section>
        <section className="not-found-template__content">
          <h2>
            Oops! Looks like this page has B-
            <span className="highlight-text">B</span>-Bounced away.
          </h2>
          <p>
            In the meantime, why not return to the homepage and explore some
            fully compiled content?
          </p>
          <Link className="button" href="/">
            Return Home
          </Link>
        </section>
      </div>
    </main>
  );
};
