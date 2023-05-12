import * as React from "react";
import { breakpoint, useViewport } from "../../provider/viewport-provider";
import DesktopView from "../desktop-component/desktop-view";
import MobileView from "../mobile-component/mobile-view";

const AppComponent = () => {
  const { width } = useViewport();
  const brkpoint = breakpoint;
  console.log(width);
  return width < brkpoint ? (
    <MobileView></MobileView>
  ) : (
    <DesktopView></DesktopView>
  );
};

export default AppComponent;
