import * as React from "react";
import { useViewport } from "../../provider/viewport-provider";
import DesktopView from "../desktop-component/desktop-view";
import MobileView from "../mobile-component/mobile-view";

const AppComponent = () => {
  const { width } = useViewport();
  const breakpoint = 1081;
  console.log(width);
  return width < breakpoint ? (
    <MobileView></MobileView>
  ) : (
    <DesktopView></DesktopView>
  );
};

export default AppComponent;
