import React from "react";
import {useRecoilState} from "recoil";
import {startDateState, endDateState, totalSelectedDatesState} from "../atoms";
import {BookingCalendar, dateWithinBookedDate} from "../utils";

export function useCalendar() {
  const calendar = new BookingCalendar(new Date());

  const [startDate, setStartDate] = useRecoilState(startDateState);
  const [endDate, setEndDate] = useRecoilState(endDateState);
  const [isStart, setIsStart] = React.useState(true);
  const [selectedDates, setSelectedDates] = useRecoilState(
    totalSelectedDatesState,
  );
  const [monthlyCalendars] = React.useState(calendar.monthlyCalendar);

  function handleSelected(date, bookedDates) {
    if (startDate > 0 && endDate > 0) {
      return;
    }

    if (isStart) {
      setStartDate(date);
      setIsStart(false);
    } else {
      if (date < startDate) {
        return;
      }
      setEndDate(date);
      setIsStart(true);

      // Determine if the start and end date is overlapping the already booked dates
      const overlappingDate = dateWithinBookedDate(
        startDate,
        date,
        bookedDates,
      );
      if (overlappingDate) {
        setStartDate(0);
        setEndDate(0);
      }
    }
  }

  function handleSelectedDates() {
    if (startDate < 1 || endDate < 1) {
      setSelectedDates([]);
      return;
    }

    const dates = [];
    let start = startDate;
    do {
      dates.push(start);
      start++;
    } while (start < endDate + 1);

    setSelectedDates(dates);
  }

  function resetDates() {
    setStartDate(0);
    setEndDate(0);
    setIsStart(true);
    setSelectedDates([]);
  }

  React.useEffect(() => {
    handleSelectedDates();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [startDate, endDate]);

  return {
    days: calendar.days,
    daysAndDates: calendar.daysAndDates,
    selectedDates,
    startDate,
    endDate,
    month: calendar.month.name,
    year: calendar.year,
    monthlyCalendars,
    handleSelected,
    resetDates,
  };
}
