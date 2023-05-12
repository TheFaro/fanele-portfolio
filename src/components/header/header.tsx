import * as React from "react";
import {
  container,
  container_wrapper,
  heading,
  authorName,
  skills,
  moreAboutMe,
  linkStyle,
} from "../../styles/components/header.module.scss";
import {
  mobileContainer,
  mobile_container_wrapper,
  mobileHeading,
  mobileSkills,
  mobileAuthorName,
  mobileMoreAboutMe,
} from "../../styles/components/mobile.module.scss";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

const Header = ({ mobileView }: { mobileView: boolean }) => (
  <div className={mobileView ? mobileContainer : container}>
    <div className={mobileView ? mobile_container_wrapper : container_wrapper}>
      <div className={mobileView ? mobileHeading : heading}>
        <span>HELLO, WORLD</span>
      </div>
      <div className={mobileView ? mobileAuthorName : authorName}>
        <span>I'm Fanelesibonge Malaza.</span>
      </div>
      <div className={mobileView ? mobileSkills : skills}>
        Full Stack Software Developer
      </div>
      <div className={mobileView ? mobileMoreAboutMe : moreAboutMe}>
        <Link className={linkStyle} to="/#about">
          MORE ABOUT ME{" "}
          <StaticImage
            src="../../assets/arrow_down_3.png"
            alt="downward arrow"
          />
        </Link>
      </div>
    </div>
  </div>
);

// export const Header = () => <title>Fanelesibonge Malaza | Portfolio</title>
//
export default Header;
