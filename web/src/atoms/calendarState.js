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
