import * as React from "react";
import Header from "../header/header";
import AboutMe from "../about-me/about-me";
import ResumeView from "../resume/resume";

const MobileView = () => {
  return (
    <div>
      <Header mobileView={true}></Header>
      <AboutMe id="about" mobileView={true}></AboutMe>
      <ResumeView mobileView={true}></ResumeView>
    </div>
  );
};

export default MobileView;
