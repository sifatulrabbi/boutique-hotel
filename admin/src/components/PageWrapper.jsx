import React from "react";

const PageWrapper = ({children, className}) => {
  return (
    <div
      className={`w-full flex flex-col p-5 lg:ml-[20vw] 
      ${className ? className : ""}`}
    >
      {children}
    </div>
  );
};

export default PageWrapper;
