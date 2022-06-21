import {atom, selector} from "recoil";
import {BookingCalendar} from "../utils";

export const startDateState = atom({
  key: "startDateState",
  default: 0,
});

export const endDateState = atom({
  key: "endDateState",
  default: 0,
});

export const totalSelectedDatesState = atom({
  key: "totalSelectedDatesState",
  default: [],
});

export const monthlyCalendarsState = selector({
  key: "monthlyCalendarsState",
  get: () => {
    const calendar = new BookingCalendar();

    return calendar.monthlyCalendar;
  },
});

/**
 * State to store all the booked dates of the current month
 */
export const bookedDatesState = atom({
  key: "BookedDatesState",
  default: [],
});

/**
 * State to store the currently selected month's index
 */
export const selectedMonthState = atom({
  key: "ActiveMonthState",
  default: -1,
});
