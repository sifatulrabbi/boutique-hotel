import React from "react";
import dayjs from "dayjs";

import Calendar from "./Calendar";

import {useSetRecoilState} from "recoil";
import {showLoginModalState} from "../atoms";

const RoomCardBookingSection = ({show, rate}) => {
  const [totalDays, setTotalDays] = React.useState([]);
  const setShowLoginModal = useSetRecoilState(showLoginModalState);

  const [startDate, setStartDate] = React.useState("");
  const [endDate, setEndDate] = React.useState("");

  React.useEffect(() => {
    if (!endDate) {
      setTotalDays(0);
      return;
    }
    const diff = +dayjs(endDate).diff(startDate, "day");
    setTotalDays(diff);
  }, [startDate, endDate]);

  function handleStartDate(dateStr) {
    setStartDate(dateStr);
  }

  function handleEndDate(dateStr) {
    setEndDate(dateStr);
  }

  return (
    <div className={`w-full px-5 ${show ? "block" : "hidden"}`}>
      <div className="border-t-[1px] border-gray-200 py-6 flex flex-col md:flex-row gap-8 w-full">
        {/* Calendar view */}
        <Calendar
          startDate={startDate}
          endDate={endDate}
          handleStartDate={handleStartDate}
          handleEndDate={handleEndDate}
          bookedDays={[]}
        />
        <div className="w-full text-sm flex flex-col">
          <span className="w-full flex flex-row justify-between border-b-[1px] border-gray-300 py-2">
            <span className="font-bold">Total nights: </span>
            <span>{totalDays}</span>
          </span>
          <span className="w-full flex flex-row justify-between py-2 border-b-[1px] border-gray-300">
            <span className="font-bold">
              ${rate} x {totalDays}
            </span>
            <span>${rate * totalDays}</span>
          </span>
          <span className="w-full flex flex-row justify-between py-2 border-b-[1px] border-gray-300">
            <span className="font-bold">Service fee:</span>
            <span>${totalDays * 10}</span>
          </span>
          <span className="w-full flex flex-row justify-between py-2 border-b-[1px] border-gray-300">
            <span className="font-bold">Cleaning fee:</span>
            <span>${totalDays * 5}</span>
          </span>
          <span className="w-full flex flex-row text-base text-textPrimary justify-between py-2 mb-6">
            <span className="font-bold">Total:</span>
            <span>${rate * totalDays + totalDays * 5 + totalDays * 10}</span>
          </span>
          <button
            className="btn-primary w-full mt-auto disabled:bg-gray-500"
            disabled={totalDays < 1}
            onClick={() => setShowLoginModal((prev) => !prev)}
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default RoomCardBookingSection;
