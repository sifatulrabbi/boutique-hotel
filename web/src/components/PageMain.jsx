import React from "react";
import {scrollToTop} from "../utils";

const PageMain = ({children, className}) => {
  React.useEffect(() => {
    scrollToTop();
  }, []);

  return (
    <main
      className={`w-full min-h-screen px-container bg-gray-100 mt-[70px] ${className}`}
    >
      {children}
    </main>
  );
};

export default PageMain;
