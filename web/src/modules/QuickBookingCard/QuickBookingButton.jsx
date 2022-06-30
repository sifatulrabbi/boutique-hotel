import React from "react";

import Calendar from "../Calendar";

const QuickBookingButton = ({primaryLabel, secondaryLabel, className}) => {
  const [show, setShow] = React.useState(false);

  function toggleShow() {
    setShow((prev) => !prev);
  }

  function handleHide() {
    setShow(false);
  }

  return (
    <div className="relative flex flex-col lg:flex-row items-center w-full justify-between">
      <button
        className={`text-textPrimary flex flex-col gap-1 w-full flex-grow p-4 rounded-3xl hover:bg-gray-50 lg:w-max ${className}`}
        onClick={toggleShow}
      >
        <span className="font-bold text-sm">{primaryLabel}</span>
        <span className="text-xs">{secondaryLabel}</span>
      </button>
      <div className="h-px w-[90%] mx-auto lg:mx-0 lg:h-[3rem] bg-gray-200 lg:w-px" />
      <div
        className={`absolute h-max z-[10] rounded-xl top-full left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gray-100 shadow-lg w-max max-w-[90vw] md:max-w-md 
        ${show ? "block" : "hidden"}`}
      >
        <Calendar />
        <div className="w-full p-4 border-t-[1px] flex flex-row gap-4 justify-between items-center">
          <button className="text-red-400" onClick={handleHide}>
            Cancel
          </button>
          <button className="btn-secondary py-2">Ok</button>
        </div>
      </div>
    </div>
  );
};

export default QuickBookingButton;
