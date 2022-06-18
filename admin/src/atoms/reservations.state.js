import {atom} from "recoil";

export const reservationsState = atom({
  key: "ReservationsState",
  default: [
    {
      id: 1,
      checkIn: new Date(2022, 5, 15),
      checkOut: new Date(2022, 5, 20),
      clientEmail: "client.one@email.com",
      clientName: "Client One",
      roomId: 1,
      cost: 400,
      total: 1300,
    },
    {
      id: 2,
      checkIn: new Date(2022, 5, 15),
      checkOut: new Date(2022, 5, 20),
      clientEmail: "client.two@email.com",
      clientName: "Client Two",
      roomId: 2,
      cost: 400,
      total: 1300,
    },
    {
      id: 3,
      checkIn: new Date(2022, 5, 15),
      checkOut: new Date(2022, 5, 20),
      clientEmail: "client.three@email.com",
      clientName: "Client Three",
      roomId: 3,
      cost: 400,
      total: 1300,
    },
    {
      id: 4,
      checkIn: new Date(2022, 5, 15),
      checkOut: new Date(2022, 5, 20),
      clientEmail: "client.four@email.com",
      clientName: "Client Four",
      roomId: 4,
      cost: 400,
      total: 1300,
    },
  ],
});
