import {atom, selector} from "recoil";
import axios from "axios";
import {getApiUrl} from "../utils";

export const roomsSelector = selector({
  key: "roomsSelector",
  get: async () => {
    const resp = await axios.get(getApiUrl("/rooms/all"));

    if (resp.data.success) {
      return resp.data.data;
    }

    return [];
  },
});

export const roomsState = atom({
  key: "roomsState",
  default: [],
});

// State of the currently selected room
export const selectedRoomState = atom({
  key: "selectedRoomState",
  default: null,
});

/** Currently selected room's data */
export const selectedRoomAndDateInfo = atom({
  key: "SelectedRoomAndDateInfo",
  default: {
    roomId: null,
    startDate: "",
    endDate: "",
  },
});
