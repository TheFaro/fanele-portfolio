import * as React from "react";
import Header from "../header/header";
import AboutMe from "../about-me/about-me";
import ResumeView from "../resume/resume";
import ContactView from "../contact-me/contact";

const MobileView = () => {
  return (
    <div>
      <Header mobileView={true}></Header>
      <AboutMe id="about" mobileView={true}></AboutMe>
      <ResumeView mobileView={true}></ResumeView>
      <ContactView id="contact" mobileView={true}></ContactView>
    </div>
  );
};

export default MobileView;
