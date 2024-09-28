import React from "react";
// import { Locale } from "../../i18n-config";
import { Socials } from "./Socials";
import Link from "next/link";

interface Props {
  // lng: Locale;
}

export const Footer: React.FC<Props> = ({}) => {
  return (
    <footer className="footer">
      <div className="container">
        <Socials className="footer__socials" />
        <h2>
          <Link className="main-title-link" href="/">
            B<span>B</span>Blog
          </Link>
        </h2>
        <small>© BBBlog 2024</small>
      </div>
    </footer>
  );
};
