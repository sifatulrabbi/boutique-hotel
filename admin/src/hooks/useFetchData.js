import axios from "axios";
import {getApiUrl} from "../utils";
import recoil from "recoil";
import {roomsState, requestsState, reservationsState} from "../atoms";

export function useFetchData() {
  const setRooms = recoil.useSetRecoilState(roomsState);
  const setRequests = recoil.useSetRecoilState(requestsState);
  const setReservations = recoil.useSetRecoilState(reservationsState);

  async function getRoomsData() {
    const resp = await axios.get(getApiUrl("/rooms/all"));

    if (resp.data.success) {
      setRooms(resp.data.data);
    }
  }

  async function getRequestsData() {
    const resp = await axios.get(getApiUrl("/requests/all"));

    if (resp.data.success) {
      setRequests(resp.data.data);
    }
  }

  async function getReservationsData() {
    const resp = await axios.get(getApiUrl("/reservations/all"));

    if (resp.data.reservations) {
      setReservations(resp.data.data);
    }
  }

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
