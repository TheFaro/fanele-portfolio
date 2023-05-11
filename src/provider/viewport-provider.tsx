import * as React from "react";

const viewportContext = React.createContext({});

const ViewportProvider = ({ children }: { children: any }) => {
  const hasWindow = typeof window !== "undefined";
  const [width, setWidth] = React.useState(
    hasWindow ? window.innerWidth : null
  );
  const [height, setHeight] = React.useState(
    hasWindow ? window.innerHeight : null
  );

  const handleWindowSize = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };

  React.useEffect(() => {
    window.addEventListener("resize", handleWindowSize);
    return () => window.removeEventListener("resize", handleWindowSize);
  });

  return (
    <viewportContext.Provider value={{ width, height }}>
      {children}
    </viewportContext.Provider>
  );
};

export const useViewport = () => {
  const { width, height } = React.useContext(viewportContext);
  return { width, height };
};

export default ViewportProvider;
