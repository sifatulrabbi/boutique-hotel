import {atom, selector} from "recoil";
import {getApiUrl} from "../utils";
import axios from "axios";

export const fetchRoomsState = selector({
  key: "FetchRoomsState",
  get: async () => {
    const resp = await axios.get(getApiUrl("/rooms/all"));

    if (!resp.data.success) {
      return [];
    }

    return resp.data.data;
  },
});

export const roomsState = atom({
  key: "RoomsState",
  default: [],
});
