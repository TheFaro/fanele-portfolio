import * as React from "react";
import {
  titleStyle,
  mobileTitleStyle,
} from "../../styles/components/title.module.scss";
import { breakpoint, useViewport } from "../../provider/viewport-provider";

const Title = ({
  title,
  mobileView,
}: {
  title: string;
  mobileView: boolean;
}) => {
  const { width } = useViewport();
  const brkpoint = breakpoint;
  console.log(`this is mobile view value: ${width}`);
  return (
    <div className={mobileView ? mobileTitleStyle : titleStyle}>
      <span>{title}</span>
    </div>
  );
};

export default Title;
