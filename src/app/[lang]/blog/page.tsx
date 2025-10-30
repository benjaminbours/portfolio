import { Metadata } from "next";
import { getAllPosts } from "@/lib/api";
import { HomeTemplate } from "@/app/_components/04_templates/HomeTemplate";

export default async function Blog({ params }: Params) {
  const posts = getAllPosts(params.lang);

  return <HomeTemplate posts={posts} lang={params.lang} />;
}

type Params = {
  params: {
    lang: string;
  };
};

export function generateMetadata({ params }: Params): Metadata {
  const title = `Blog | Benjamin Bours`;
  const description = `Articles about software development, emerging technologies, and web engineering by Benjamin Bours.`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
    },
  };
}
