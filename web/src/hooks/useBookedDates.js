/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import {getApiUrl, getBookedDatesArray, mergeDuplicateDates} from "../utils";
import recoil from "recoil";
import axios from "axios";
import {
  monthlyCalendarsState,
  bookedDatesState,
  selectedRoomState,
} from "../atoms";

export function useBookedDates() {
  const setBookedDates = recoil.useSetRecoilState(bookedDatesState);
  const currentMonth = recoil.useRecoilValue(monthlyCalendarsState);
  const selectedRoomId = recoil.useRecoilValue(selectedRoomState);

  const [reservations, setReservations] = React.useState([]);

  async function getReservations() {
    const resp = await axios.get(
      getApiUrl(`/reservations/room/${selectedRoomId}`),
    );

    if (resp.data.success) {
      setReservations(resp.data.data);
    }
  }

  function updateBookedDates() {
    if (selectedRoomId < 1) return;

    const bookedDates = [];

    reservations.forEach((reservation) => {
      const start = new Date(reservation.checkIn);
      const end = new Date(reservation.checkOut);

      const bookedDatesArray = getBookedDatesArray(start, end);
      bookedDates.push([...bookedDatesArray]);
    });

    if (bookedDates.length > 0) {
      const mergedDates = mergeDuplicateDates(
        bookedDates.reduce((prev, curr) => [...prev, ...curr]),
      );

      console.log(mergedDates);
      setBookedDates(mergedDates);
    }
  }

  React.useEffect(() => {
    getReservations();
  }, []);

  React.useEffect(() => {
    updateBookedDates();
  }, [reservations, currentMonth]);
}
