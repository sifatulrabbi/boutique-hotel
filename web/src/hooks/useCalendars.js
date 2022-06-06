import React from 'react';
import {useRecoilState} from 'recoil';
import {startDateState, endDateState, totalSelectedDatesState} from '../atoms';
import {BookingCalendar} from '../utils';

export function useCalendar() {
  const [startDate, setStartDate] = useRecoilState(startDateState);
  const [endDate, setEndDate] = useRecoilState(endDateState);
  const [isStart, setIsStart] = React.useState(true);
  const [selectedDates, setSelectedDates] = useRecoilState(
    totalSelectedDatesState,
  );

  function handleSelected(date) {
    if (startDate > 0 && endDate > 0) {
      return;
    }

    if (isStart) {
      setStartDate(date);
      setIsStart(false);
    } else {
      setEndDate(date);
      setIsStart(true);
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
  }

  React.useEffect(() => {
    handleSelectedDates();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [startDate, endDate]);

  const calendar = new BookingCalendar(new Date());

  return {
    days: calendar.days,
    daysAndDates: calendar.daysAndDates,
    selectedDates,
    startDate,
    endDate,
    month: calendar.month.name,
    year: calendar.year,
    handleSelected,
    resetDates,
  };
}
