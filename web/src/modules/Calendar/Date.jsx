/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import dayjs from "dayjs";

// interface Props {
//   monthAndYear: [month: number, year: number];
//   dateStr: string;
//   onSelect?: (dateStr: string) => void;
//   startDate?: string;
//   endDate?: string;
// }

const DateBtn = ({
  dateStr,
  monthAndYear,
  onSelect,
  startDate,
  endDate,
  bookedDays,
}) => {
  const [isPeakDate, setIsPeakDate] = React.useState(false);
  const [isInBetween, setIsInBetween] = React.useState(false);

  /** Find out whether the date is from current month or not */
  const isDisabledDate =
    dayjs(dateStr).isBefore(
      new Date(monthAndYear[1], monthAndYear[0]),
      "month",
    ) ||
    dayjs(dateStr).isAfter(new Date(monthAndYear[1], monthAndYear[0]), "month");
  /** If the day is bookable or not. e.g. past days/previously booked dates */
  const isNonBookable =
    dayjs(dateStr).isBefore(Date.now(), "day") ||
    bookedDays?.find((item) => dayjs(item).isSame(dateStr, "day"));

  React.useEffect(() => {
    updatePosition();
  }, [startDate, endDate]);

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
