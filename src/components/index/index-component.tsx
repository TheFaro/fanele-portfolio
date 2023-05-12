import * as React from "react";
import { breakpoint, useViewport } from "../../provider/viewport-provider";
import DesktopView from "../desktop-component/desktop-view";
import MobileView from "../mobile-component/mobile-view";

const AppComponent = () => {
  const { width } = useViewport();
  const brkpoint = 869;
  return width > brkpoint ? (
    <DesktopView></DesktopView>
  ) : (
    <MobileView></MobileView>
  );
};

export default AppComponent;
