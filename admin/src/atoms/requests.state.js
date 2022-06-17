import {atom} from "recoil";

export const requestsState = atom({
  key: "RequestsState",
  default: [
    {
      id: 1,
      checkIn: new Date(2022, 5, 23),
      checkOut: new Date(2022, 5, 27),
      clientEmail: "client.six@email.com",
      clientName: "Client Six",
      roomId: 1,
      cost: 400,
      total: 1800,
    },
    {
      id: 2,
      checkIn: new Date(2022, 6, 4),
      checkOut: new Date(2022, 6, 5),
      clientEmail: "client.five@email.com",
      clientName: "Client Five",
      roomId: 2,
      cost: 400,
      total: 500,
    },
    {
      id: 2,
      checkIn: new Date(2022, 6, 1),
      checkOut: new Date(2022, 6, 3),
      clientEmail: "client.seven@email.com",
      clientName: "Client seven",
      roomId: 2,
      cost: 400,
      total: 900,
    },
  ],
});
