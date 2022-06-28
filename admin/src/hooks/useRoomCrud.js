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
    const resp = await axios.put(getApiUrl(`/rooms/single/${id}`), data);

    if (resp.data.success) {
      await getRoomsData();
    } else {
      console.error("Unable to update the room");
    }
  }

  /**
   * Create a room
   */
  async function createRoom(data) {
    const resp = await axios.post(getApiUrl("/rooms/"), data);

    if (resp.data.success) {
      await getRoomsData();
    } else {
      console.error("Unable to create a room");
    }
  }

  /**
   * Remove a room
   */
  async function removeRoomById(id) {
    const resp = await axios.delete(getApiUrl(`/rooms/single/${id}`));

    if (resp.data.success) {
      await getRoomsData();
    } else {
      console.log("Unable to remove the room");
    }
  }

  return {updateRoomById, createRoom, removeRoomById};
}
