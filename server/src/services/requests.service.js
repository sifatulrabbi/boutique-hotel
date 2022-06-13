const {Request} = require("../models");

/**
 * Add a reservation request
 *
 * @param {{roomId: string; clientEmail: string; clientName: string; checkIn: Date; checkOut: Date}} data
 */
module.exports.addRequest = async function ({
  roomId,
  clientEmail,
  clientName,
  checkIn,
  checkOut,
}) {
  const request = await Request.create({
    roomId,
    clientEmail,
    clientName,
    checkIn,
    checkOut,
  });

  return request;
};

/**
 * Remove a reservation request
 *
 * @param {number} id
 */
module.exports.removeRequest = async function (id) {
  const request = await Request.findByPk(id);

  return request;
};

/**
 * Get a reservation request with the id
 *
 * @param {number} id
 */
module.exports.getRequestById = async function (id) {
  const request = await Request.findByPk(id);

  return request;
};

/**
 * Get all the reservations requests
 */
module.exports.getAllRequests = async function () {
  const requests = await Request.findAll();

  return requests;
};

/**
 * Get all the requests of a specific room
 *
 * @param {number} roomId
 */
module.exports.getRequestsByRoom = async function (roomId) {
  const requests = await Request.findAll({
    where: {roomId},
  });

  if (requests.length < 1) return null;
  return requests;
};
