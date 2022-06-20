/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import {useCalendar} from "../hooks";
import {v4} from "uuid";
import {FaChevronRight, FaChevronLeft} from "react-icons/fa";
import {useRecoilValue} from "recoil";
import {monthlyCalendarsState} from "../atoms";

const CalendarView = () => {
  const [activeCal, setActiveCal] = React.useState(null);
  const [activeIndex, setActiveIndex] = React.useState(0);
  const monthlyCalendars = useRecoilValue(monthlyCalendarsState);

  const {
    days,
    startDate,
    endDate,
    selectedDates,
    month,
    year,
    handleSelected,
    resetDates,
  } = useCalendar();

  function changeCalForward() {
    setActiveCal(() => {
      if (activeIndex + 1 > monthlyCalendars.length - 1) {
        setActiveIndex(activeIndex);
        return monthlyCalendars[activeIndex];
      } else {
        setActiveIndex(activeIndex + 1);
        return monthlyCalendars[activeIndex + 1];
      }
    });
  }

  function changeCalPrevious() {
    setActiveCal(() => {
      if (activeIndex - 1 < 0) {
        setActiveIndex(activeIndex);
        return monthlyCalendars[activeIndex];
      } else {
        setActiveIndex(activeIndex - 1);
        return monthlyCalendars[activeIndex - 1];
      }
    });
  }

  React.useEffect(() => {
    setActiveCal(monthlyCalendars[0]);
  }, []);

  if (!activeCal) {
    return <div></div>;
  }

  return (
    <div className="w-full flex flex-col overflow-hidden gap-2 rounded-xl border-[1px] border-gray-400">
      <div className="bg-gray-100 p-4 flex flex-row justify-between items-center">
        <button
          className="disabled:opacity-30"
          onClick={changeCalPrevious}
          disabled={startDate !== 0 || endDate !== 0}
        >
          <FaChevronLeft />
        </button>
        <span className="text-textPrimary text-base text-center w-full block">
          {activeCal.month}, {year}
        </span>
        <button
          className="disabled:opacity-50"
          onClick={changeCalForward}
          disabled={startDate !== 0 || endDate !== 0}
        >
          <FaChevronRight />
        </button>
      </div>

      {/* Day names */}
      <div className="grid grid-cols-7 w-full min-w-[250px] p-4">
        {days.map((day) => (
          <div
            key={v4()}
            className="text-xs lg:text-sm font-bold flex flex-col justify-start items-center gap-4 w-full"
          >
            <span className="">{day}</span>
          </div>
        ))}
      </div>

      {/* Dates */}
      <div className="grid grid-cols-7 w-full min-w-[250px] px-4 pb-4">
        {days.map((day) => (
          <div
            key={v4()}
            className="text-xs lg:text-sm font-bold flex flex-col justify-start items-center gap-4 w-full"
          >
            {activeCal.dates[day].map((date) => (
              <button
                key={v4()}
                className={`font-normal text-xs lg:text-sm h-8 w-8 rounded-full 
              ${
                (date !== 0) & (startDate === date)
                  ? "bg-primary-400 text-white"
                  : (date !== 0) & (endDate === date)
                  ? "bg-primary-400 text-white"
                  : selectedDates.includes(date)
                  ? "bg-primary-100"
                  : "hover:bg-gray-100 "
              }`}
                onClick={() => handleSelected(date)}
                disabled={date === 0}
              >
                {date === 0 ? "--" : date}
              </button>
            ))}
          </div>
        ))}
      </div>

      {/* Calendar bottom. From, To and clear selection button */}
      <div className="p-4 bg-gray-100 grid grid-cols-[0.6fr_1fr_1fr]">
        <span className="text-sm font-bold">
          From:{" "}
          <span className="font-normal">
            {startDate === 0 ? "--" : startDate}
          </span>
        </span>
        <span className="text-sm font-bold">
          To:{" "}
          <span className="font-normal">
            {endDate === 0 ? "--" : endDate}, {month}
          </span>
        </span>
        <button
          className="font-bold text-sm text-primary-400"
          onClick={resetDates}
        >
          Clear
        </button>
      </div>
    </div>
  );
};

export default CalendarView;
