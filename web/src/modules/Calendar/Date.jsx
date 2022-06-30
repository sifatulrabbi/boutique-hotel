/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import dayjs from "dayjs";

const DateBtn = ({
  dateStr,
  monthAndYear,
  onSelect,
  startDate,
  endDate,
  bookedDates,
}) => {
  const [isPeakDate, setIsPeakDate] = React.useState(false);
  const [isInBetween, setIsInBetween] = React.useState(false);
  const [isNonBookable, setIsNonBookable] = React.useState(false);
  const [isDisabledDate, setIsDisabled] = React.useState(false);

  /** Dates before today are disabled by default */
  function updatedDisableStatus() {
    if (
      dayjs(dateStr).isBefore(
        new Date(monthAndYear[1], monthAndYear[0]),
        "month",
      ) ||
      dayjs(dateStr).isBefore(Date.now(), "day") ||
      dayjs(dateStr).isAfter(
        new Date(monthAndYear[1], monthAndYear[0]),
        "month",
      )
    ) {
      setIsDisabled(true);
      return;
    }

    const currDate = dayjs(dateStr);
    // If the date is in the past
    if (currDate.isBefore(Date.now(), "day")) {
      setIsNonBookable(true);
      return;
    }
    // If the date is bookable or not
    for (let i = 0; i < bookedDates.length; i++) {
      // If the day is previously booked
      if (currDate.isSame(bookedDates[i], "day")) {
        setIsNonBookable(true);
        break;
      }
    }
  }

  React.useMemo(() => {
    updatedDisableStatus();
  }, [bookedDates]);

  React.useEffect(() => {
    updatePosition();
  }, [startDate, endDate]);

  React.useEffect(() => {}, []);

  function updatePosition() {
    if (!startDate && !endDate) return;

    const d = dayjs(dateStr);

    if (startDate) {
      d.isSame(startDate) && setIsPeakDate(true);
    }
    if (endDate) {
      d.isSame(endDate) && setIsPeakDate(true);
    }
    if (startDate && endDate) {
      d.isBetween(startDate, endDate, "day") && setIsInBetween(true);
    }
  }

  function handleClick() {
    if (onSelect) onSelect(dateStr);
  }

  return (
    <button
      disabled={isDisabledDate || isNonBookable}
      className={`text-xs rounded-full lg:text-sm flex items-center justify-center p-1 h-8 w-8  
        ${
          isDisabledDate
            ? "disabled:text-gray-300"
            : isNonBookable
            ? "disabled:text-textSecondary/80 line-through"
            : "text-textSecondary"
        } 
        ${dayjs(dateStr).isSame(new Date(), "day") ? "font-extrabold" : ""} 
        ${
          isPeakDate
            ? "bg-primary-400 text-white"
            : isInBetween
            ? "bg-primary-100"
            : "bg-white hover:bg-gray-100"
        }`}
      onClick={handleClick}
    >
      {dayjs(dateStr).date()}
    </button>
  );
};

export default DateBtn;
