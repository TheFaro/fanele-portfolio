import * as React from "react";
import { breakpoint, useViewport } from "../../provider/viewport-provider";
import DesktopView from "../desktop-component/desktop-view";
import MobileView from "../mobile-component/mobile-view";
import { useBreakpoint } from "gatsby-plugin-breakpoints";

const AppComponent = () => {
  const { width } = useViewport();
  const brkpoint = 869;

  const breakpoints = useBreakpoint();
  console.log(`These are breakpoints: ${breakpoints}`);
  return breakpoints.sm ? (
    <MobileView></MobileView>
  ) : (
    <DesktopView></DesktopView>
  );
};

export default AppComponent;
