import * as React from "react";
import {
  titleStyle,
  mobileTitleStyle,
} from "../../styles/components/title.module.scss";

const Title = ({
  title,
  mobileView,
}: {
  title: string;
  mobileView: boolean;
}) => {
  return (
    <div className={mobileView ? mobileTitleStyle : titleStyle}>
      <span>{title}</span>
    </div>
  );
};

export default Title;
