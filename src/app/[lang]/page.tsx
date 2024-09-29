import { getAllPosts } from "@/lib/api";
import { HomeTemplate } from "@/app/_components/04_templates/HomeTemplate";

interface Props {
  params: {
    lang: string;
  };
}

export default function Index({ params }: Props) {
  console.log("HERE", params.lang);

  const posts = getAllPosts();
  return <HomeTemplate posts={posts} />;
}
