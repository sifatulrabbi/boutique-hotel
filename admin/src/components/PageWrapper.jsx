import React from "react";

const PageWrapper = ({children, className}) => {
  return (
    <div
      className={`flex flex-col p-5 lg:ml-[20vw] max-w-full overflow-x-hidden 
      ${className ? className : ""}`}
    >
      {children}
    </div>
  );
};

export default PageWrapper;
