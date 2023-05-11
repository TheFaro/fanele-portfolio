import * as React from "react";
import { subtitleStyle } from "../../styles/components/subtitle.module.scss";

const SubTitle = ({ subtitle }: { subtitle: string }) => {
  return (
    <div className={subtitleStyle}>
      <span>{subtitle}</span>
    </div>
  );
};

export default SubTitle;
