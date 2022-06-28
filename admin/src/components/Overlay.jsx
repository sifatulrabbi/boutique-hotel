import React from "react";

const Overlay = ({z, show}) => {
  return (
    <div
      className={`fixed top-0 left-0 bottom-0 right-0 bg-black/40 ${
        show ? "block" : "hidden"
      }`}
      style={{zIndex: z || 10}}
    />
  );
};

export default Overlay;
