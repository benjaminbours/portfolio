import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug } from "@/lib/api";
import markdownToHtml from "@/lib/markdownToHtml";
import { PostTemplate } from "@/app/_components/04_templates/PostTemplate";

export default async function Post({ params }: Params) {
  const post = getPostBySlug('en', params.slug);

  if (!post) {
    return notFound();
  }

  const content = await markdownToHtml(post.content || "");

  return <PostTemplate post={post} content={content} lang="en" />;
}

type Params = {
  params: {
    slug: string;
  };
};

export function generateMetadata({ params }: Params): Metadata {
  const post = getPostBySlug('en', params.slug);

  if (!post) {
    return notFound();
  }

  const title = `${post.title} | Benjamin Bours`;
  const description = post.excerpt;

  return {
    title,
    description,
    openGraph: {
      title,
      images: [post.ogImage.url],
    },
  };
}

export async function generateStaticParams() {
  const posts = getAllPosts('en');

  return posts.map((post) => ({
    slug: post.slug,
  }));
}
