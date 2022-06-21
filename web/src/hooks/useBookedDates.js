/* eslint-disable react-hooks/exhaustive-deps */
import {getApiUrl, getBookedDatesArray, mergeDuplicateDates} from "../utils";
import recoil from "recoil";
import axios from "axios";
import {bookedDatesState} from "../atoms";

export function useBookedDates() {
  const setBookedDates = recoil.useSetRecoilState(bookedDatesState);

  async function getReservations(roomId) {
    const resp = await axios.get(getApiUrl(`/reservations/room/${roomId}`));

    if (resp.data.data) {
      return resp.data.data;
    }

    return [];
  }

  async function updateBookedDates(roomId) {
    if (roomId < 1) {
      setBookedDates(["none"]);
      return;
    }

    const reservations = await getReservations(roomId);
    const bookedDates = [];

    if (reservations.length < 1) {
      setBookedDates(["none"]);
      return;
    }

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

  return {updateBookedDates};
}
