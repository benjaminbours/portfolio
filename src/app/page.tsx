import { getAllPosts } from "@/lib/api";
import { PostPreview } from "./_components/post-preview";

export default function Index() {
  const allPosts = getAllPosts();

  return (
    <main>
      <div className="container">
        <section className="intro-section">
          <h1 className="intro-section__title">B<span>B</span>Blog</h1>
          <h2 className="intro-section__subtitle">
            A blog about software development, and emerging technologies.
          </h2>
        </section>
        <section>
          <ul className="post-list">
            {allPosts.map((post) => (
              <li className="post-list__item" key={post.slug}>
                <PostPreview key={post.slug} {...post} />
              </li>
            ))}
          </ul>
        </section>
      </div>
    </main>
  );
}
