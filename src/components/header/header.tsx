import * as React from "react";
import {
  container,
  container_wrapper,
  heading,
  authorName,
  skills,
  moreAboutMe,
} from "../../styles/components/header.module.scss";
import { StaticImage } from "gatsby-plugin-image";

const Header = () => (
  <div className={container}>
    <div className={container_wrapper}>
      <div className={heading}>
        <span>HELLO, WORLD</span>
      </div>
      <div className={authorName}>
        <span>I'm Fanelesibonge Malaza.</span>
      </div>
      <div className={skills}>Full Stack Software Developer</div>
      <div className={moreAboutMe}>
        MORE ABOUT ME{" "}
        <StaticImage src="../../assets/arrow_down_3.png" alt="downward arrow" />
      </div>
    </div>
  </div>
);

// export const Header = () => <title>Fanelesibonge Malaza | Portfolio</title>
//
export default Header;
