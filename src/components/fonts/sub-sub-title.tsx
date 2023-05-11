import * as React from "react";
import { subtitle } from "../../styles/components/subsubtitle.module.scss";

const SubSubTitle = ({ subsubtitle }: { subsubtitle: string }) => {
  return <div className={subtitle}>{subsubtitle}</div>;
};

export default SubSubTitle;
