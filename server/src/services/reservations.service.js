/**
 * Add a reservation
 *
 * @param {{roomId: string; checkIn: Date, checkOut: Date, clientEmail: string; clientName: string}} data
 */
module.exports.addReservations = async function ({
  roomId,
  checkId,
  checkOut,
  clientEmail,
  clientName,
}) {};

/**
 * Get a reservation by id
 *
 * @param {number} id
 */
module.exports.getReservationById = async function (id) {};

/**
 * Get all the reservations
 */
module.exports.getAllReservations = async function () {};

/**
 * Remove a reservation
 */
module.exports.removeAReservation = async function () {};

/**
 * Get all the reservations associated with a room
 *
 * @param {number} roomId
 */
module.exports.getReservationsByRoom = async function (roomId) {};
