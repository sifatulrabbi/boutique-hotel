const {Room} = require("../models");
const {removeRequest} = require("./requests.service");

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
