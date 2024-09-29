import { getAllPosts } from "@/lib/api";
import { HomeTemplate } from "@/app/_components/04_templates/HomeTemplate";

interface Props {
  params: {
    lang: string;
  };
}

export default function Index({ params }: Props) {
  const posts = getAllPosts(params.lang);
  return <HomeTemplate posts={posts} lang={params.lang} />;
}
