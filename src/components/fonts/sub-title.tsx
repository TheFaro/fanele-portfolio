import * as React from "react";
import {
  subtitleStyle,
  mobileSubtitleStyle,
} from "../../styles/components/subtitle.module.scss";

const SubTitle = ({
  subtitle,
  mobileView,
}: {
  mobileView: boolean;
  subtitle: string;
}) => {
  return (
    <div className={mobileView ? mobileSubtitleStyle : subtitleStyle}>
      <span>{subtitle}</span>
    </div>
  );
};

export default SubTitle;
