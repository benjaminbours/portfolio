import { Metadata } from "next";
import { AboutTemplate } from "@/app/_components/04_templates/AboutTemplate";

export default async function About() {
  return <AboutTemplate lang="en" />;
}

export const metadata: Metadata = {
  title: `About | Benjamin Bours`,
  description: `Senior Full-Stack Engineer with 8 years building complex, data-intensive systems across sports technology, 3D applications, and web platforms. Currently based in Lisbon, Portugal.`,
  openGraph: {
    title: `About | Benjamin Bours`,
    description: `Senior Full-Stack Engineer with 8 years building complex, data-intensive systems across sports technology, 3D applications, and web platforms. Currently based in Lisbon, Portugal.`,
  },
};
