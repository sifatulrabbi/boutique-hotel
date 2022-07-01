import axios from "axios";
import dayjs from "dayjs";
import {getApiUrl} from "./getApiUrl";

/**
 * Get all the reservations of the selected Room
 */
export async function selectedRoomsBookedDates(roomId) {
  const url = getApiUrl(`/reservations/room/${roomId}`);
  const resp = await axios.get(url);
  if (!resp.data.success) return [];

  const reservations = resp.data.data;
  const bookedDates = [];

  reservations.forEach((reservation) => {
    const startDate = dayjs(reservation.checkIn);
    const endDate = dayjs(reservation.checkOut);

    let date = startDate.add(1, "day");
    do {
      bookedDates.push(date.format());
      date = date.add(1, "day");
    } while (date.isBetween(startDate, endDate, "day"));
    bookedDates.push(endDate.format());
  });

  return bookedDates;
}
