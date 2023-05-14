import * as React from "react";
import Title from "../fonts/title";
import SubTitle from "../fonts/sub-title";
import {
  resume_text,
  resume_wrapper,
  workExperience,
  mobileResume_text,
} from "../../styles/components/resume.module.scss";
import ExperienceItem from "./experience-item";
import { useStaticQuery, graphql } from "gatsby";

const ResumeView = ({ mobileView }: { mobileView: boolean }) => {
  // console.log(data);

  const data = useStaticQuery(graphql`
    query {
      allMdx(sort: { frontmatter: { order: ASC } }) {
        edges {
          node {
            excerpt(pruneLength: 1055)
            id
            frontmatter {
              experienceTitle
              experienceDuration
              iconPath
              iconAlt
              companyName
              technologiesUsed
              link_to_1
              link_to_2
              majors
              school
              duration
            }
          }
        }
      }
    }
  `);

  // console.log(data.allMdx.edges);

  return (
    <div className={resume_wrapper}>
      <Title title="RESUME" mobileView={mobileView}></Title>
      <SubTitle
        subtitle="More of my credentials."
        mobileView={mobileView}
      ></SubTitle>
      <div className={mobileView ? mobileResume_text : resume_text}>
        EXPERT IN: Web Development (HTML5, CSS3, JS6), Android Apps (Java, Dart,
        Flutter), Desktop Apps (Python, Java, Flutter), API Development.
        <br />
        <br />
        INTERMEDIATE IN: Nest.Js, Vue.Js, TypeScript, Numerical Analysis,
        Database Management, Angular, Gatsby, Sass.
      </div>
      <div className={workExperience}>Work Experience</div>
      {data.allMdx.edges.map((edge: any) =>
        // const node = edge.node.frontmatter;
        // console.log('')
        edge.node.frontmatter.companyName != null ? (
          <ExperienceItem
            mobileView={mobileView}
            experienceTitle={edge.node.frontmatter.experienceTitle}
            experienceDuration={edge.node.frontmatter.experienceDuration}
            iconPath={edge.node.frontmatter.iconPath}
            iconAlt={edge.node.frontmatter.iconAlt}
            companyName={edge.node.frontmatter.companyName}
            jobDescription={edge.node.excerpt}
          />
        ) : null
      )}

      <div className={workExperience}>Education</div>
      {data.allMdx.edges.map((edge: any) =>
        edge.node.frontmatter.majors != null ? (
          <ExperienceItem
            mobileView={mobileView}
            experienceTitle={edge.node.frontmatter.majors}
            experienceDuration={edge.node.frontmatter.duration}
            companyName={edge.node.frontmatter.school}
            iconPath={""}
            iconAlt={""}
            jobDescription={""}
          />
        ) : null
      )}
    </div>
  );
};

export default ResumeView;
