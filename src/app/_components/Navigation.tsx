"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { InteractiveBBB } from "./InteractiveBBB";

interface Props {
  lang: string;
}

export const Navigation: React.FC<Props> = ({ lang }) => {
  const pathname = usePathname();
  const [isHidden, setIsHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Show nav when at top of page
      if (currentScrollY < 10) {
        setIsHidden(false);
        setLastScrollY(currentScrollY);
        return;
      }

      // Only hide nav when scrolling down
      // When scrolling up, show nav and it stays visible
      if (currentScrollY > lastScrollY) {
        setIsHidden(true);
      } else if (currentScrollY < lastScrollY) {
        setIsHidden(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  const isActive = (path: string) => {
    if (path === `/${lang}`) {
      return pathname === `/${lang}` || pathname === `/${lang}/`;
    }
    return pathname.startsWith(path);
  };

  return (
    <nav
      className={`navigation ${isHidden ? "navigation--hidden" : ""}`}
      onMouseEnter={() => setIsHidden(false)}
    >
      <div className="container navigation__container">
        <Link href={`/${lang}`} className="navigation__logo">
          <InteractiveBBB />
        </Link>
        <ul className="navigation__links">
          <li>
            <Link
              href={`/${lang}`}
              className={isActive(`/${lang}`) ? "active" : ""}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href={`/${lang}/projects`}
              className={isActive(`/${lang}/projects`) ? "active" : ""}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              href={`/${lang}/blog`}
              className={isActive(`/${lang}/blog`) ? "active" : ""}
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              href={`/${lang}/about`}
              className={isActive(`/${lang}/about`) ? "active" : ""}
            >
              About
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
