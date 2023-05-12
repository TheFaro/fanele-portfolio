import * as React from "react";
import Header from "../header/header";
import AboutMe from "../about-me/about-me";

const MobileView = () => {
  return (
    <div>
      <Header mobileView={true}></Header>
      <AboutMe></AboutMe>
    </div>
  );
};

export default MobileView;
