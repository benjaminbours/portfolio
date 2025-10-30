import { Footer } from "@/app/_components/footer";
import { Navigation } from "@/app/_components/Navigation";
import { HOME_OG_IMAGE_URL } from "@/lib/constants";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./_styles/main.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: `Benjamin Bours - Software Engineer`,
  description: `Portfolio and blog of Benjamin Bours, software engineer crafting interactive experiences with modern web technologies.`,
  openGraph: {
    images: [HOME_OG_IMAGE_URL],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={`${process.env.__NEXT_ROUTER_BASEPATH || ''}/favicon/apple-touch-icon.png`}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href={`${process.env.__NEXT_ROUTER_BASEPATH || ''}/favicon/favicon-32x32.png`}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href={`${process.env.__NEXT_ROUTER_BASEPATH || ''}/favicon/favicon-16x16.png`}
        />
        <link rel="manifest" href={`${process.env.__NEXT_ROUTER_BASEPATH || ''}/favicon/site.webmanifest`} />
        <link rel="icon" type="image/svg+xml" href={`${process.env.__NEXT_ROUTER_BASEPATH || ''}/favicon/favicon.svg`} />
        <link
          rel="shortcut icon"
          type="image/x-icon"
          href={`${process.env.__NEXT_ROUTER_BASEPATH || ''}/favicon/favicon.ico`}
        />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta
          name="msapplication-config"
          content={`${process.env.__NEXT_ROUTER_BASEPATH || ''}/favicon/browserconfig.xml`}
        />
        <meta name="theme-color" content="#000" />
        <link rel="alternate" type="application/rss+xml" href={`${process.env.__NEXT_ROUTER_BASEPATH || ''}/feed.xml`} />
      </head>
      <body className={inter.className}>
        <div className="main-container">
          <Navigation lang="en" />
          {children}
          <Footer lang="en" />
        </div>
      </body>
    </html>
  );
}
