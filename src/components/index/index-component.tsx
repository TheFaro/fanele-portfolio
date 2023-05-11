import * as React from "react";
import { useViewport } from "../../provider/viewport-provider";
import DesktopView from "../desktop-component/desktop-view";

const AppComponent = () => {
  const { width } = useViewport();
  const breakpoint = 728;
  return width < breakpoint ? (
    <p>This is app component</p>
  ) : (
    <DesktopView></DesktopView>
  );
};

export default AppComponent;
