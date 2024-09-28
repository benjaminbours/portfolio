import { getAllPosts } from "@/lib/api";
import { HomeTemplate } from "./_components/04_templates/HomeTemplate";

export default function Index() {
  const posts = getAllPosts();
  return <HomeTemplate posts={posts} />;
}
