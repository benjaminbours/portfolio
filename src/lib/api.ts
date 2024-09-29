import { Post } from "@/interfaces/post";
import fs from "fs";
import matter from "gray-matter";
import { notFound } from "next/navigation";
import { join } from "path";

const postsDirectory = join(process.cwd(), "_posts");

export function getPostSlugs(lang: string) {
  return fs.readdirSync(join(postsDirectory, lang));
}

export function getPostBySlug(lang: string, slug: string) {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(postsDirectory, lang, `${realSlug}.md`);
  const fileExist = fs.existsSync(fullPath);
  if (!fileExist) {
    notFound();
  }
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return { ...data, slug: realSlug, content } as Post;
}

export function getAllPosts(lang: string): Post[] {
  const slugs = getPostSlugs(lang);
  const posts = slugs
    .map((slug) => getPostBySlug(lang, slug))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  return posts;
}
