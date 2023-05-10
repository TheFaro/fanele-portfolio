import * as React from "react";
import { Link } from "gatsby";
import {
  container,
  navLinks,
  navLinkItem,
  heading,
  siteTitle,
} from "./layout.module.css";

const Layout = ({
  pageTitle,
  children,
}: {
  pageTitle: string;
  children: any;
}) => (
  <div className={container}>
    <header className={siteTitle}>My Gatsby Site</header>
    <nav>
      <ul className={navLinks}>
        <li className={navLinkItem}>
          <Link to="/">Home</Link>
        </li>
        <li className={navLinkItem}>
          <Link to="/about">About</Link>
        </li>
        <li className={navLinkItem}>
          <Link to="/blog" className={navLinkItem}>
            Blog
          </Link>
        </li>
      </ul>
    </nav>
    <main>
      <h1 className={heading}>{pageTitle}</h1>
      {children}
    </main>
  </div>
);

export default Layout;
