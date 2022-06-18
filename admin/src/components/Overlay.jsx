import React from "react";

const Overlay = ({z}) => {
  return (
    <div
      className="fixed top-0 left-0 bottom-0 right-0 bg-black/40"
      style={{zIndex: z || 10}}
    />
  );
};

export default Overlay;
