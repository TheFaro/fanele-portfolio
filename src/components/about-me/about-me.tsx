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
  mobileAboutTextWrapper,
  mobileTextStyle,
  mobileTextTitleStyle,
  hireMeButton,
  mobileHireMeButton,
  downloadCVButton,
  mobileDownloadCVButton,
  buttonsContainer,
  mobileButtonsContainer,
} from "../../styles/components/about-me.module.scss";
import { StaticImage } from "gatsby-plugin-image";
import SubSubTitle from "../fonts/sub-sub-title";
import resume from "../../assets/Fanelesibonge Malaza Resume.pdf";
import { Link } from "gatsby";

const AboutMe = ({ mobileView, id }: { mobileView: boolean; id: string }) => {
  return (
    <div id={id} className={mobileView ? mobileWrapper : wrapper}>
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
        <div className={mobileView ? mobileAboutTextWrapper : aboutTextWrapper}>
          <p>
            As a youth from Eswatini, I possess an avid eagerness to constantly
            challenge my intellectual abilities by continuously aqcuiring novel
            concepts and insights. My passion for problem-solving has led me to
            engage in diverse professions, where I have created software with
            varying applications for various stakeholders clients such as
            finance (
            <a
              href="https://play.google.com/store/apps/details?id=com.simplesource.simple_books"
              target="_blank"
            >
              <b>Simple Books</b>
            </a>
            ), voting systems (
            <a href="https://voter.ummo.xyz" target="_blank">
              <b>SRC Voter</b>
            </a>
            ) and location addressing (
            <a
              href="https://play.google.com/store/apps/details?id=xyz.ummo.pozi"
              target="_blank"
            >
              <b>Pozi - Digital Addressor</b>
            </a>
            )
          </p>

          <div>
            <SubSubTitle
              mobileView={mobileView}
              subsubtitle="PROFILE"
            ></SubSubTitle>
            <div className={profileItemWrapper}>
              <span
                className={mobileView ? mobileTextTitleStyle : textTitleStyle}
              >
                FULLNAME:
              </span>
              <span className={mobileView ? mobileTextStyle : textStyle}>
                Fanelesibonge Phiwokuhle Malaza
              </span>
            </div>
            <br />
            <div className={profileItemWrapper}>
              <span
                className={mobileView ? mobileTextTitleStyle : textTitleStyle}
              >
                BIRTH DATE:
              </span>
              <span className={mobileView ? mobileTextStyle : textStyle}>
                July 19, 1996
              </span>
            </div>
            <br />
            <div className={profileItemWrapper}>
              <span
                className={mobileView ? mobileTextTitleStyle : textTitleStyle}
              >
                JOB:
              </span>
              <span className={mobileView ? mobileTextStyle : textStyle}>
                Freelancer, FullStack Developer (Frontend & Backend)
              </span>
            </div>
            <br />
            <div className={profileItemWrapper}>
              <span
                className={mobileView ? mobileTextTitleStyle : textTitleStyle}
              >
                EMAIL:
              </span>
              <span className={mobileView ? mobileTextStyle : textStyle}>
                malazafanelesibonge@gmail.com
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className={mobileView ? mobileButtonsContainer : buttonsContainer}>
        <Link to="/#contact">
          <div className={mobileView ? mobileHireMeButton : hireMeButton}>
            HIRE ME
          </div>
        </Link>

        <a href={resume} download>
          <div
            className={mobileView ? mobileDownloadCVButton : downloadCVButton}
          >
            DOWNLOAD CV
          </div>
        </a>
      </div>
    </div>
  );
};

export default AboutMe;
