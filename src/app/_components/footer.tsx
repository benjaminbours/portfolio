import React from "react";
// import { Locale } from "../../i18n-config";
import { Socials } from "./Socials";

interface Props {
  // lng: Locale;
}

export const Footer: React.FC<Props> = ({}) => {
  return (
    <footer className="footer">
      <div className="container">
        <Socials className="footer__socials" />
        <h2>
          B<span>B</span>Blog
        </h2>
        <small>© BBBlog 2024</small>
      </div>
    </footer>
  );
};
