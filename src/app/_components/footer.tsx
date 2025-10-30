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
          <Link className="main-title-link" href="/">
            B<span className="highlight-text">B</span>B
          </Link>
        </h2>
        <small>© Benjamin Bours 2025</small>
      </div>
    </footer>
  );
};
