import * as React from "react";
import Header from "../header/header";
import AboutMe from "../about-me/about-me";

const MobileView = () => {
  return (
    <div>
      <Header aboutId={"about"} mobileView={true}></Header>
      <AboutMe id="about" mobileView={true}></AboutMe>
    </div>
  );
};

export default MobileView;
