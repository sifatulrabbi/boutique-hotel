import React from "react";

const Card = ({children, className}) => {
  return (
    <div
      className={`bg-white rounded-2xl p-4 flex gap-4 
      ${className ? className : ""}`}
    >
      {children}
    </div>
  );
};

export default Card;
