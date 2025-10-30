import { Metadata } from "next";
import { getAllPosts } from "@/lib/api";
import { HomeTemplate } from "@/app/_components/04_templates/HomeTemplate";

export default async function Blog() {
  const posts = getAllPosts('en');

  return <HomeTemplate posts={posts} lang="en" />;
}

export const metadata: Metadata = {
  title: `Blog | Benjamin Bours`,
  description: `Articles about software development, emerging technologies, and web engineering by Benjamin Bours.`,
  openGraph: {
    title: `Blog | Benjamin Bours`,
    description: `Articles about software development, emerging technologies, and web engineering by Benjamin Bours.`,
  },
};
