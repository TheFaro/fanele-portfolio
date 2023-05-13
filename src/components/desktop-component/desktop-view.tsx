import * as React from "react";
import Header from "../header/header";
import AboutMe from "../about-me/about-me";
import ResumeView from "../resume/resume";
import { graphql } from "gatsby";

const DesktopView = () => {
  return (
    <div>
      <Header mobileView={false}></Header>
      <AboutMe id="about" mobileView={false}></AboutMe>
      <ResumeView mobileView={false}></ResumeView>
    </div>
  );
};

export default DesktopView;
