import React from "react";
import dayjs from "dayjs";
import {getApiUrl} from "../../utils";
import axios from "axios";

import QuickBookingButton from "./QuickBookingButton";
import DateView from "./DateView";
import Calendar from "../Calendar";
import SmallRoomCard from "../SmallRoomCard";
import {v4} from "uuid";

const QuickBookingCard = ({className}) => {
  const [startDate, setStartDate] = React.useState("");
  const [endDate, setEndDate] = React.useState("");
  const [show, setShow] = React.useState(false);
  const [availableRooms, setAvailableRooms] = React.useState([]);

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

  async function handleAvailableRooms() {
    if (!startDate || !endDate) return setShow(true);

    handleHide();

    const checkIn = dayjs(startDate).format("YYYY-MM-DD");
    const checkOut = dayjs(endDate).format("YYYY-MM-DD");
    const url = getApiUrl(`/rooms/all?checkIn=${checkIn}&checkOut=${checkOut}`);
    const resp = await axios.get(url);
    setAvailableRooms(resp.data.data);
  }

  return (
    <>
      <div
        className={`bg-white grid grid-cols-1 rounded-3xl w-full max-w-[90%] mx-auto lg:grid-cols-4 lg:justify-between gap-4 items-center p-4 ${className}`}
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
            date={startDate ? dayjs(startDate).format("DD") : "_"}
            month={startDate ? dayjs(startDate).format("MMM") : ""}
          />
          <span className="text-sm text-textSecondary">to</span>
          <DateView
            date={endDate ? dayjs(endDate).format("DD") : "_"}
            month={endDate ? dayjs(endDate).format("MMM") : ""}
          />
        </div>

        <button
          className="btn-primary py-4 flex w-full"
          onClick={handleAvailableRooms}
        >
          Find rooms
        </button>
      </div>
      {availableRooms.length > 0 && (
        <div className="bg-white p-2 rounded-xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {availableRooms.map((room) => (
            <SmallRoomCard key={v4()} {...room} />
          ))}
        </div>
      )}
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
          <button className="btn-secondary py-2" onClick={handleAvailableRooms}>
            Ok
          </button>
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
