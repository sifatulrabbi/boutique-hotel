import axios from "axios";
import {getApiUrl} from "../utils";

import recoil from "recoil";
import {roomsState, requestsState, reservationsState} from "../atoms";

export function useFetchData() {
  const setRooms = recoil.useSetRecoilState(roomsState);
  const setRequests = recoil.useSetRecoilState(requestsState);
  const setReservations = recoil.useSetRecoilState(reservationsState);

  /**
   * Get all the rooms
   */
  async function getRoomsData() {
    const resp = await axios.get(getApiUrl("/rooms/all"));

    if (resp.data.success) {
      setRooms(resp.data.data);
    }
  }

  /**
   * Get all the reservation requests
   */
  async function getRequestsData() {
    const resp = await axios.get(getApiUrl("/requests/all"));

    if (resp.data.success) {
      setRequests(resp.data.data);
    }
  }

  /**
   * Get all the accepted reservations
   */
  async function getReservationsData() {
    const resp = await axios.get(getApiUrl("/reservations/all"));

    if (resp.data.success) {
      setReservations(resp.data.data);
    }
  }

  /**
   * Get all the data (room, reservation, requests)
   */
  async function getAllData() {
    await Promise.all([
      getRoomsData(),
      getRequestsData(),
      getReservationsData(),
    ]);
  }

  return {
    getRoomsData,
    getRequestsData,
    getReservationsData,
    getAllData,
  };
}
