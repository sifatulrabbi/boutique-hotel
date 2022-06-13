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
}) {};

/**
 * Remove a reservation request
 */
module.exports.removeRequest = async function () {};

/**
 * Get a reservation request with the id
 */
module.exports.getRequestById = async function () {};

/**
 * Get all the reservations requests
 */
module.exports.getAllRequests = async function () {};
