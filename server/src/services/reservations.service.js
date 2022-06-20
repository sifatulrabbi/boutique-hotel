const {Reservation} = require("../models");

/**
 * Add a reservation
 *
 * @param {{roomId: string; checkIn: Date, checkOut: Date, clientEmail: string; clientName: string}} data
 */
module.exports.addReservations = async function ({
  roomId,
  checkIn,
  checkOut,
  clientEmail,
  clientName,
}) {
  const reservation = await Reservation.create({
    roomId,
    checkIn,
    checkOut,
    clientEmail,
    clientName,
  });

  return reservation;
};

/**
 * Get a reservation by id
 *
 * @param {number} id
 */
module.exports.getReservationById = async function (id) {
  const reservation = await Reservation.findByPk(di);

  if (reservation) return reservation;
  return null;
};

/**
 * Get all the reservations
 */
module.exports.getAllReservations = async function () {
  const reservations = await Reservation.findAll();

  return reservations;
};

/**
 * Remove a reservation
 *
 * @param {number} id
 */
module.exports.removeAReservation = async function (id) {
  const reservation = await Reservation.findByPk(id);
  if (!reservation) return false;

  await reservation.destroy();
  return true;
};

/**
 * Get all the reservations associated with a room
 *
 * @param {number} roomId
 */
module.exports.getReservationsByRoom = async function (roomId) {
  const reservations = await Reservation.findAll({
    where: {roomId},
  });

  if (reservations.length < 1) return null;

  return reservations;
};
