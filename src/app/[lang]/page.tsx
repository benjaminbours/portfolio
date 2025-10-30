import { getAllProjects } from "@/lib/api";
import { PortfolioHomeTemplate } from "@/app/_components/04_templates/PortfolioHomeTemplate";

interface Props {
  params: {
    lang: string;
  };
}

export default function Index({ params }: Props) {
  const allProjects = getAllProjects(params.lang);
  // Get featured projects or top 3 most recent
  const featuredProjects = allProjects.filter(p => p.featured).slice(0, 3);

  return <PortfolioHomeTemplate featuredProjects={featuredProjects} lang={params.lang} />;
}

export async function generateStaticParams() {
  return [{ lang: 'en' }];
}
