import React from "react";
import {days} from "../../utils";

const SmallRequestView = ({
  clientName,
  clientEmail,
  checkIn,
  checkOut,
  total,
}) => {
  return (
    <div className="border-[1px] px-3 py-2 rounded-lg flex flex-row flex-wrap gap-4 bg-red-100/20">
      {/* Client info */}
      <div>
        <span className="block text-sm font-extrabold text-textPrimary">
          {clientName}
        </span>
        <span className="text-xs">{clientEmail}</span>
      </div>

      {/* Dates */}
      <div className="flex flex-row gap-4">
        <div className="flex flex-col justify-center items-center h-full py-1 w-[62px] bg-red-100">
          <span className="font-bold">
            {checkIn.getDate() < 10
              ? `0${checkIn.getDate()}`
              : checkIn.getDate()}
          </span>
          <span className="uppercase text-xs tracking-wider">
            {days[checkOut.getDay()]}
          </span>
        </div>
        <span>To</span>
        <div className="flex flex-col justify-center items-center h-full py-1 w-[62px] bg-red-100">
          <span className="font-bold">
            {checkOut.getDate() < 10
              ? `0${checkOut.getDate()}`
              : checkOut.getDate()}
          </span>
          <span className="uppercase text-xs tracking-wider">
            {days[checkOut.getDay()]}
          </span>
        </div>
      </div>

      {/* Total */}
      <span className="block flex-grow text-end">
        Total
        <br />
        <span className="text-lg text-textPrimary font-extrabold">
          ${total}
        </span>
      </span>
    </div>
  );
};

export default SmallRequestView;
