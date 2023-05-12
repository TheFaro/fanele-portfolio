import * as React from "react";
import Header from "../header/header";
import AboutMe from "../about-me/about-me";

const DesktopView = () => {
  return (
    <div>
      <Header mobileView={false}></Header>
      <AboutMe id="about" mobileView={false}></AboutMe>
    </div>
  );
};

export default DesktopView;
