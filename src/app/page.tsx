import { getAllProjects } from "@/lib/api";
import { PortfolioHomeTemplate } from "@/app/_components/04_templates/PortfolioHomeTemplate";

export default function Index() {
  const allProjects = getAllProjects('en');
  // Get featured projects or top 3 most recent
  const featuredProjects = allProjects.filter(p => p.featured).slice(0, 3);

  return <PortfolioHomeTemplate featuredProjects={featuredProjects} lang="en" />;
}
