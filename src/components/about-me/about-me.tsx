import * as React from "react";
import Title from "../fonts/title";
import SubTitle from "../fonts/sub-title";
import {
  heroImage,
  aboutTextWrapper,
  aboutWrapper,
  textTitleStyle,
  textStyle,
  profileItemWrapper,
  wrapper,
  mobileWrapper,
  mobileHeroImage,
  mobileAboutWrapper,
} from "../../styles/components/about-me.module.scss";
import { StaticImage } from "gatsby-plugin-image";
import SubSubTitle from "../fonts/sub-sub-title";

const AboutMe = ({ mobileView }: { mobileView: boolean }) => {
  return (
    <div className={mobileView ? mobileWrapper : wrapper}>
      <Title title="ABOUT ME" mobileView={mobileView}></Title>
      <SubTitle
        mobileView={mobileView}
        subtitle="Let me introduce myself."
      ></SubTitle>

      <div className={mobileView ? mobileAboutWrapper : aboutWrapper}>
        <div>
          <StaticImage
            className={mobileView ? mobileHeroImage : heroImage}
            src="../../assets/background_1.jpg"
            alt="Fanelesibonge sitting on a chair looking professional"
          />
        </div>
        <div className={aboutTextWrapper}>
          <p>
            Lorem ipsum Exercitation culpa qui dolor consequat exercitation
            fugiat laborum ex ea eiusmod ad do aliqua occaecat nisi ad irure
            sunt id pariatur Duis laboris amet exercitation veniam labore
            consectetur ea id quis eiusmod.
          </p>

          <div>
            <SubSubTitle subsubtitle="PROFILE"></SubSubTitle>
            <div className={profileItemWrapper}>
              <span className={textTitleStyle}>FULLNAME:</span>
              <span className={textStyle}>Fanelesibonge Phiwokuhle Malaza</span>
            </div>
            <br />
            <div className={profileItemWrapper}>
              <span className={textTitleStyle}>BIRTH DATE:</span>
              <span className={textStyle}>July 19, 1996</span>
            </div>
            <br />
            <div className={profileItemWrapper}>
              <span className={textTitleStyle}>JOB:</span>
              <span className={textStyle}>
                Freelancer, FullStack Developer (Frontend & Backend)
              </span>
            </div>
            <br />
            <div className={profileItemWrapper}>
              <span className={textTitleStyle}>EMAIL:</span>
              <span className={textStyle}>malazafanelesibonge@gmail.com</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
