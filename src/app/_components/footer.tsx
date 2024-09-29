import React from "react";
import { Socials } from "./Socials";
import Link from "next/link";

interface Props {
  lang: string;
}

export const Footer: React.FC<Props> = ({ lang }) => {
  return (
    <footer className="footer">
      <div className="container">
        <Socials className="footer__socials" />
        <h2>
          <Link className="main-title-link" href={`/${lang}/`}>
            B<span className="highlight-text">B</span>Blog
          </Link>
        </h2>
        <small>© BBBlog 2024</small>
      </div>
    </footer>
  );
};
