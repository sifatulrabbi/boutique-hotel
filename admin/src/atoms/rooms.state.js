import {atom} from "recoil";

export const fetchRoomsState = atom({
  key: "FetchRoomsState",
  get: () => {
    return;
  },
});

export const roomsState = atom({
  key: "RoomsState",
  default: [
    {
      id: 1,
      name: "Room One",
      description: "Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet",
      type: "Single",
      cost: 400,
    },
    {
      id: 2,
      name: "Room Two",
      description: "Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet",
      type: "Double",
      cost: 450,
    },
    {
      id: 3,
      name: "Room Three",
      description: "Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet",
      type: "Single",
      cost: 300,
    },
    {
      id: 4,
      name: "Room Four",
      description: "Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet",
      type: "Double",
      cost: 550,
    },
  ],
});
