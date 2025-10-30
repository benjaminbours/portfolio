import { Post } from "@/interfaces/post";
import { Project } from "@/interfaces/project";
import fs from "fs";
import matter from "gray-matter";
import { notFound } from "next/navigation";
import { join } from "path";

const postsDirectory = join(process.cwd(), "_posts");
const projectsDirectory = join(process.cwd(), "_projects");

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

export function getProjectSlugs(lang: string) {
  return fs.readdirSync(join(projectsDirectory, lang));
}

export function getProjectBySlug(lang: string, slug: string) {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(projectsDirectory, lang, `${realSlug}.md`);
  const fileExist = fs.existsSync(fullPath);
  if (!fileExist) {
    notFound();
  }
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return { ...data, slug: realSlug, content } as Project;
}

export function getAllProjects(lang: string): Project[] {
  const slugs = getProjectSlugs(lang);
  const projects = slugs
    .map((slug) => getProjectBySlug(lang, slug))
    // sort projects by date in descending order
    .sort((project1, project2) => (project1.date > project2.date ? -1 : 1));
  return projects;
}
