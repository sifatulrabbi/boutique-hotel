/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import dayjs from "dayjs";

import Calendar from "./Calendar";

import recoil from "recoil";
import {showLoginModalState, selectedRoomAndDateInfo} from "../atoms";

const RoomCardBookingSection = ({show, rate, bookedDates}) => {
  const [totalDays, setTotalDays] = React.useState([]);
  const setShowLoginModal = recoil.useSetRecoilState(showLoginModalState);
  const setDateInfo = recoil.useSetRecoilState(selectedRoomAndDateInfo);

  const [startDate, setStartDate] = React.useState("");
  const [endDate, setEndDate] = React.useState("");

  React.useEffect(() => {
    calculateTotalDays();
  }, [startDate, endDate]);

  function calculateTotalDays() {
    if (!startDate || !endDate) {
      setTotalDays(0);
      return;
    }
    let validEndDate = true;
    bookedDates.forEach((date) => {
      if (dayjs(date).isBetween(startDate, endDate)) {
        validEndDate = false;
      }
    });
    if (!validEndDate) {
      setStartDate("");
      setEndDate("");
      return;
    }
    if (dayjs(startDate).isSame(dayjs(endDate))) {
      setTotalDays(1);
      return;
    }
    const diff = +dayjs(endDate).diff(startDate, "day");
    setTotalDays(diff);
  }

  function handleStartDate(dateStr) {
    setStartDate(dateStr);
  }

  function handleEndDate(dateStr) {
    setEndDate(dateStr);
  }

  function handleCheckout() {
    setDateInfo((prev) => ({
      ...prev,
      startDate,
      endDate,
    }));
    setShowLoginModal(true);
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
          bookedDates={bookedDates}
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
            onClick={handleCheckout}
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default RoomCardBookingSection;
