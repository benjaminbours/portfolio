import { Metadata } from "next";
import { AboutTemplate } from "@/app/_components/04_templates/AboutTemplate";

export default async function About({ params }: Params) {
  return <AboutTemplate lang={params.lang} />;
}

type Params = {
  params: {
    lang: string;
  };
};

export function generateMetadata({ params }: Params): Metadata {
  const title = `About | Benjamin Bours`;
  const description = `Senior Full-Stack Engineer with 8 years building complex, data-intensive systems across sports technology, 3D applications, and web platforms. Currently based in Lisbon, Portugal.`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
    },
  };
}

export async function generateStaticParams() {
  return [{ lang: 'en' }];
}
