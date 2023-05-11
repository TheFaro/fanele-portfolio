import * as React from "react";
import DesktopView from "../components/desktop-component/desktop-view";
import ViewportProvider, { useViewport } from "../provider/viewport-provider";
import AppComponent from "../components/index/index-component";

const IndexPage = () => {
  return (
    <ViewportProvider>
      <AppComponent />
    </ViewportProvider>
  );
};

export const Head = () => <title>My portfolio Page</title>;

export default IndexPage;
