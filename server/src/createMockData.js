const {Room} = require("./models");
const {requestsService} = require("./services");

/**
 * Add mock rooms for testing
 */
async function addMockRooms() {
  const rooms = [];

  const roomImages = [
    "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?ixlib=rb-1.2.1&dl=ralph-ravi-kayden-FqqiAvJejto-unsplash.jpg&q=80&fm=jpg&crop=entropy&cs=tinysrgb",
    "https://unsplash.com/photos/8_V45fGyWz4/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8NXx8YmVkJTIwcm9vbXN8ZW58MHx8fHwxNjU1NzQwNzYx&force=true",
    "https://unsplash.com/photos/iAftdIcgpFc/download?force=true",
    "https://unsplash.com/photos/Cx188P-L_HY/download?force=true",
  ];

  for (let i = 0; i < 4; i++) {
    const newRoom = await Room.create({
      name: `Room ${i + 1}`,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.",
      type: i % 2 === 0 ? "single" : "double",
      cost: 400 + Math.round(100 * Math.random() * i),
      img: roomImages[i],
    });

    rooms.push(newRoom);
  }

  return rooms;
}

/**
 * Add mock requests for testing
 */
async function addMockRequestsData(rooms) {
  const today = new Date();
  const requests = [];

  await rooms.forEach(async (room, index) => {
    const request = await requestsService.addRequest({
      roomId: room.id,
      clientEmail: "",
      clientName: "",
      checkIn: new Date(2022, 5, today.getDate() - index),
      checkOut: new Date(2022, 5, today.getDate() + index),
    });

    requests.push(request);

    if (requests.length === 4) {
      await requestsService.acceptRequest(request.id);
    }
  });

  const req1 = await requestsService.addRequest({
    roomId: rooms[0].id,
    clientEmail: "",
    clientName: "",
    checkIn: new Date(2022, 5, today.getDate() - 11),
    checkOut: new Date(2022, 5, today.getDate() + 9),
  });

  await requestsService.acceptRequest(req1.id);

  await requestsService.addRequest({
    roomId: rooms[2].id,
    clientEmail: "",
    clientName: "",
    checkIn: new Date(2022, 5, today.getDate() + 10),
    checkOut: new Date(2022, 5, today.getDate() + 13),
  });

  return requests;
}

/**
 * Creates mock data
 */
module.exports.createMocks = async function () {
  const rooms = await addMockRooms();
  await addMockRequestsData(rooms);
};
