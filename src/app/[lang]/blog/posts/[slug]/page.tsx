import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug } from "@/lib/api";
import markdownToHtml from "@/lib/markdownToHtml";
import { PostTemplate } from "@/app/_components/04_templates/PostTemplate";
import { LOCALES } from "@/lib/constants";

export default async function Post({ params }: Params) {
  const post = getPostBySlug(params.lang, params.slug);

  if (!post) {
    return notFound();
  }

  const content = await markdownToHtml(post.content || "");

  return <PostTemplate post={post} content={content} lang={params.lang} />;
}

type Params = {
  params: {
    lang: string;
    slug: string;
  };
};

export function generateMetadata({ params }: Params): Metadata {
  const post = getPostBySlug(params.lang, params.slug);

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
  return LOCALES.reduce((acc, locale) => {
    const posts = getAllPosts(locale);

    posts.forEach((post) => {
      acc.push({
        lang: locale,
        slug: post.slug,
      });
    });

    return acc;
  }, [] as any[]);
}
