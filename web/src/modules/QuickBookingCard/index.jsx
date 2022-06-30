import React from "react";

import {Link} from "react-router-dom";
import QuickBookingButton from "./QuickBookingButton";
import DateView from "./DateView";
import Calendar from "../Calendar";
import dayjs from "dayjs";

const QuickBookingCard = ({className}) => {
  const [startDate, setStartDate] = React.useState("");
  const [endDate, setEndDate] = React.useState("");
  const [show, setShow] = React.useState(false);

  function toggleShow() {
    setShow((prev) => !prev);
  }

  function handleHide() {
    setShow(false);
  }

  function handleStartDate(dateStr) {
    setStartDate(dateStr);
  }

  function handleEndDate(dateStr) {
    setEndDate(dateStr);
  }

  React.useEffect(() => {
    setStartDate(dayjs(Date.now()));
    setEndDate(dayjs(Date.now()));
  }, []);

  return (
    <>
      <div
        className={`bg-white flex flex-col rounded-3xl w-full max-w-[90%] mx-auto lg:flex-row lg:justify-between lg:items-center p-4 ${className}`}
      >
        <QuickBookingButton
          toggleShow={toggleShow}
          primaryLabel={"Check-in"}
          secondaryLabel={"Select a date"}
        />
        <QuickBookingButton
          toggleShow={toggleShow}
          primaryLabel={"Check-out"}
          secondaryLabel={"Select a date"}
        />

        {/* from and to view section */}
        <div className="flex flex-row gap-4 justify-start items-end h-max px-4 py-4 lg:py-0 w-max mb-6 lg:mb-0">
          <DateView
            date={dayjs(startDate).format("DD")}
            month={dayjs(startDate).format("MMM")}
          />
          <span className="text-sm text-textSecondary">to</span>
          <DateView
            date={dayjs(endDate).format("DD")}
            month={dayjs(endDate).format("MMM")}
          />
        </div>

        {/* Booking button to proceed to the room booking page */}
        <Link to="/rooms">
          <button className="btn-primary w-full lg:w-max py-4">
            Check available rooms
          </button>
        </Link>
      </div>
      <div
        className={`fixed h-max z-[11] rounded-xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gray-100 shadow-lg w-max max-w-[90vw] md:max-w-md 
        ${show ? "block" : "hidden"}`}
      >
        <Calendar
          startDate={startDate}
          endDate={endDate}
          handleStartDate={handleStartDate}
          handleEndDate={handleEndDate}
          bookedDates={[]}
        />
        <div className="w-full p-4 border-t-[1px] flex flex-row gap-4 justify-between items-center">
          <button className="text-red-400" onClick={handleHide}>
            Cancel
          </button>
          <button className="btn-secondary py-2">Ok</button>
        </div>
      </div>
      <div
        className={`fixed top-0 left-0 bottom-0 right-0 bg-black/40 z-[1] ${
          show ? "block" : "hidden"
        }`}
        onClick={handleHide}
      ></div>
    </>
  );
};

export default QuickBookingCard;
