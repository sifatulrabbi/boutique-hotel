import {useFetchData} from "./useFetchData";
import {getApiUrl} from "../utils";
import axios from "axios";

/**
 * Update, create, and remove rooms
 */
export function useRoomsCrud() {
  const {getRoomsData} = useFetchData();

  /**
   * Update a room
   */
  async function updateRoomById(id, data) {
    await axios.put(getApiUrl(`/rooms/single/${id}`), data);
    await getRoomsData();
  }

  /**
   * Create a room
   */
  async function createRoom(data) {
    await axios.post(getApiUrl("/rooms/"), data);
    await getRoomsData();
  }

  /**
   * Remove a room
   */
  async function removeRoomById(id) {
    await axios.delete(getApiUrl(`/rooms/single/${id}`));
    await getRoomsData();
  }

  return {updateRoomById, createRoom, removeRoomById};
}
