import React from "react";

const DatePicker = ({state}) => {
  function setSelectedDate(e) {
    state[1](e.target.value);
  }

  return <div className="grid grid-cols-7">{}</div>;
};

export default DatePicker;

/*
 [
  1,2,3,4,5,6,7,
  8,9,10,11,12,13,14,
  15,16,17,18,19,20,21,
  22,23,24,25,26,27,28,
  29,30,31,0,0,0,0
 ]
 */
