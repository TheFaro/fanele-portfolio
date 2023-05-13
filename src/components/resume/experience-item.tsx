import { GatsbyImage, StaticImage, getImage } from "gatsby-plugin-image";
import * as React from "react";
import {
  experienceWrapper,
  job_title,
  job_icon,
  icon_style,
  icon_style_wrapper,
  vertical_line,
  title_text,
  duration_text,
  work_wrapper,
  company_name,
  company_desc_separator,
  job_description,
  mobileExperienceWrapper,
  mobileJob_title,
  mobileVertical_line,
  mobileTitle_text,
  mobileDuration_text,
  mobileCompany_name,
  mobileCompany_desc_separator,
  mobileJob_description,
} from "../../styles/components/experience.module.scss";

const ExperienceItem = ({
  mobileView,
  experienceTitle,
  experienceDuration,
  iconPath,
  iconAlt,
  companyName,
  jobDescription,
}: {
  mobileView: boolean;
  experienceTitle: string;
  experienceDuration: string;
  iconPath: any;
  iconAlt: string;
  companyName: string;
  jobDescription: string;
}) => {
  return (
    <div className={mobileView ? mobileExperienceWrapper : experienceWrapper}>
      <div className={mobileView ? mobileJob_title : job_title}>
        <div className={mobileView ? mobileTitle_text : title_text}>
          {experienceTitle}
        </div>
        <div className={mobileView ? mobileDuration_text : duration_text}>
          {experienceDuration}
        </div>
      </div>
      <div className={job_icon}>
        <div className={mobileView ? mobileVertical_line : vertical_line}></div>
      </div>
      <div className={work_wrapper}>
        <div className={mobileView ? mobileCompany_name : company_name}>
          {companyName}
        </div>
        <div
          className={
            mobileView ? mobileCompany_desc_separator : company_desc_separator
          }
        ></div>
        <div className={mobileView ? mobileJob_description : job_description}>
          {jobDescription}
        </div>
      </div>
    </div>
  );
};

export default ExperienceItem;
