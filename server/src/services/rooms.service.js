const {Room, Reservation} = require("../models");
const {removeRequest} = require("./requests.service");
const dayjs = require("dayjs");
const isBetween = require("dayjs/plugin/isBetween");

dayjs.extend(isBetween);

/**
 * Get a room with the room id
 *
 * @param {string} id
 */
module.exports.getARoomById = async function (id) {
  const room = await Room.findByPk(id);

  return room;
};

/**
 * Get all the rooms
 */
module.exports.getAllRooms = async function () {
  const rooms = await Room.findAll();

  return rooms;
};

/**
 * Create a room
 */
module.exports.createRoom = async function (data) {
  const room = await Room.create(data);

  return room;
};

/**
 * Update a room
 */
module.exports.updateRoom = async function (id, data) {
  const {name, description, type, cost, img} = data;

  const room = await Room.findByPk(id);
  if (!room) return null;

  const updatedRoom = await room.update({name, description, type, cost, img});
  return updatedRoom;
};

/**
 * Remove a room
 */
module.exports.removeARoom = async function (id) {
  const room = await Room.findByPk(id);
  if (!room) return null;

  /** Remove all the associated requests */
  const requests = await room.getRequests();
  if (requests.length < 1) return true;

  requests.forEach(async (req) => {
    await removeRequest(req.id);
  });

  /** Remove all the associated reservations */
  const reservations = await room.getRequests();
  if (reservations.length < 1) return true;

  reservations.forEach(async (req) => {
    await removeRequest(req.id);
  });

  await room.destroy();

  return true;
};

/**
 * Get all the associated requests
 */
module.exports.getRoomRequests = async function (id) {
  const room = await this.getARoomById(id);
  if (!room) {
    return null;
  }

  const requests = await room.getRequests();
  const reservations = await room.getRequests();

  return {requests, reservations};
};

/**
 * Get available rooms between two dates
 */
module.exports.findAvailableRooms = async function (checkIn, checkOut) {
  const rooms = await Room.findAll({include: [Reservation]});
  if (!checkIn || !checkOut) return rooms;

  const checkInDate = dayjs(checkIn);
  const checkOutDate = dayjs(checkOut);

  const availableRooms = [];
  // Filter room with the check in and check out date
  rooms.forEach((room) => {
    let available = true;
    room.reservations.forEach((reservation) => {
      if (
        // Checks for checkIn date
        checkInDate.isSame(reservation.checkIn) ||
        checkInDate.isSame(reservation.checkOut) ||
        checkInDate.isBetween(reservation.checkIn, reservation.checkOut)
      ) {
        available = false;
      } else if (
        // Checks for checkOut date
        checkOutDate.isSame(reservation.checkIn) ||
        checkOutDate.isSame(reservation.checkOut) ||
        checkOutDate.isBetween(reservation.checkIn, reservation.checkOut)
      ) {
        available = false;
      }
    });

    // Only push available rooms
    if (available) availableRooms.push(room);
  });

  return availableRooms;
};
