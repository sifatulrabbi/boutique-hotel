import React from "react";

const Card = ({children, className}) => {
  return (
    <div
      className={`bg-white rounded-xl p-4 flex flex-col gap-4 ${
        className ? className : ""
      }`}
    >
      {children}
    </div>
  );
};

export default Card;
