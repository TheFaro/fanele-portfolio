import * as React from "react";
import Header from "../components/header/header";
import AboutMe from "../components/about-me/about-me";
// import { container } from "../styles/index.module.css";

const IndexPage = () => {
  return (
    <div>
      <Header></Header>
      <AboutMe></AboutMe>
    </div>
  );
};

export const Head = () => <title>My portfolio Page</title>;

export default IndexPage;
