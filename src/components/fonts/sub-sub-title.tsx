import * as React from "react";
import {
  subtitle,
  mobileSubtitle,
} from "../../styles/components/subsubtitle.module.scss";

const SubSubTitle = ({
  subsubtitle,
  mobileView,
}: {
  subsubtitle: string;
  mobileView: boolean;
}) => {
  return (
    <div className={mobileView ? mobileSubtitle : subtitle}>{subsubtitle}</div>
  );
};

export default SubSubTitle;
