/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import recoil from "recoil";
import {getApiUrl, getBookedDatesArray} from "../utils";
import axios from "axios";
import {monthlyCalendarsState, bookedDatesState} from "../atoms";

export function useBookedDates() {
  const setBookedDates = recoil.useSetRecoilState(bookedDatesState);
  const currentMonth = recoil.useRecoilValue(monthlyCalendarsState);
  const [reservations, setReservations] = React.useState([]);

  async function getReservations() {
    const resp = await axios.get(getApiUrl("/reservations/all"));

    if (resp.data.success) {
      setReservations(resp.data.data);
    }
  }

  function updateBookedDates() {
    const bookedDates = [];

    currentMonth.forEach((month) => {
      reservations.forEach((reservation) => {
        const start = new Date(reservation.checkIn);
        const end = new Date(reservation.checkOut);

        const bookedDatesArray = getBookedDatesArray(start, end);
        bookedDates.push([...bookedDatesArray]);
      });
    });

    console.log(bookedDates);
    setBookedDates(bookedDates);
  }

  React.useEffect(() => {
    getReservations();
  }, []);

  React.useEffect(() => {
    updateBookedDates();
  }, [reservations, currentMonth]);
}
