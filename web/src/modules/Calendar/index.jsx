/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import {v4} from "uuid";
import dayjs from "dayjs";
import isBetween from "dayjs/plugin/isBetween";
import {useCalendar} from "../../hooks/useCalendarV2";

import {MdChevronLeft, MdChevronRight} from "react-icons/md";
import DateBtn from "./Date";

dayjs.extend(isBetween);

const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const Calendar = ({
  bordered,
  startDate,
  endDate,
  handleStartDate,
  handleEndDate,
  bookedDays,
}) => {
  const [isStart, setIsStart] = React.useState(true);

  const {
    monthAndYear,
    calendarDates,
    updateMonthAndYear,
    nextMonth,
    prevMonth,
    setToday,
  } = useCalendar();

  React.useEffect(() => {
    updateMonthAndYear();
  }, []);

  /**
   * Handle the date selection
   */
  function handleSelect(dateStr) {
    // The last date is flexible and can change without using the clear button
    if (isStart) {
      handleStartDate(dateStr);
      setIsStart(false);
    } else {
      if (dayjs(dateStr).isBefore(startDate)) return;
      handleEndDate(dateStr);
    }
  }

  /**
   * Clears all the selected dates
   */
  function clearSelection() {
    handleStartDate("");
    handleEndDate("");
    setIsStart(true);
  }

  return (
    <div
      className={`max-w-md w-full rounded-xl overflow-hidden bg-white 
      ${bordered ? "border-[1px] border-gray-200" : ""}`}
    >
      {/* Top part */}
      <div className="w-full p-2 py-4 flex flex-row justify-between items-center bg-gray-100">
        <button
          onClick={prevMonth}
          className="hover:bg-gray-200 p-2 rounded-full"
        >
          <MdChevronLeft />
        </button>
        <div className="w-full grid grid-cols-[1fr_auto] items-center px-2">
          <span className="block font-bold">
            {monthNames[monthAndYear[0]]}, {monthAndYear[1]}
          </span>
          <button
            className="text-primary-400 text-xs uppercase tracking-wider rounded p-2 hover:bg-gray-200"
            onClick={setToday}
          >
            Today
          </button>
        </div>
        <button
          onClick={nextMonth}
          className="hover:bg-gray-200 p-2 rounded-full"
        >
          <MdChevronRight />
        </button>
      </div>

      {/* Body */}
      <div className="max-w-full h-auto grid grid-cols-7 p-4">
        {calendarDates.map((date, index) => (
          <div key={v4()} className="w-full flex flex-col gap-4 justify-start">
            <span className="text-center w-full block text-xs font-bold lg:text-sm p-2">
              {dayNames[index]}
            </span>
            {date.map((dateStr) => (
              <DateBtn
                key={v4()}
                dateStr={dateStr}
                monthAndYear={monthAndYear}
                onSelect={handleSelect}
                startDate={startDate}
                endDate={endDate}
                bookedDays={bookedDays}
              />
            ))}
          </div>
        ))}
      </div>

      {/* Bottom */}
      <div className="flex flex-row items-center w-full px-4 py-2 bg-gray-100">
        <div className="w-full text-xs grid grid-cols-2">
          <span className="flex flex-col justify-start items-start gap-1">
            <span className="font-bold inline-block mr-1">From:</span>
            {startDate ? dayjs(startDate).format("ddd, DD/MM/YY") : "--"}
          </span>
          <span className="flex flex-col justify-start items-start gap-1">
            <span className="font-bold inline-block mr-1">To:</span>
            {endDate ? dayjs(endDate).format("ddd, DD/MM/YY") : "--"}
          </span>
        </div>
        <button
          className="text-primary-400 text-xs uppercase tracking-wider rounded p-2 hover:bg-gray-200"
          onClick={clearSelection}
        >
          Clear
        </button>
      </div>
    </div>
  );
};

export default Calendar;
