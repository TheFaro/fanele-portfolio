import * as React from "react";
import { titleStyle } from "../../styles/components/title.module.scss";

const Title = ({ title }: { title: string }) => {
  return (
    <div className={titleStyle}>
      <span>{title}</span>
    </div>
  );
};

export default Title;
