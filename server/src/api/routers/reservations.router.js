const {Router} = require("express");
const {reservationsService} = require("../../services");

const router = Router();

/**
 * Get all the reservations
 *
 * @method GET
 * @path /reservations/all
 */
router.get("/all", async (req, res) => {
  try {
    const reservations = await reservationsService.getAllReservations();

    if (reservations) {
      res.status(200).json({success: true, data: reservations});
    } else {
      res.status(404).json({success: false, message: "No reservations"});
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({success: false, message: err.message});
  }
});

/**
 * Get reservation of a room
 *
 * @method GET
 * @path /reservations/room/:roomId
 */
router.get("/room/:roomId", async (req, res) => {
  try {
    const reservations = await reservationsService.getReservationsByRoom(
      req.params.roomId,
    );

    if (!reservations) {
      res.status(200).json({success: true, data: reservations});
    } else {
      res.status(404).json({
        success: false,
        message: "No reservations for the room",
      });
    }
  } catch (err) {
    res.status(500).json({success: false, message: err.message});
  }
});

/**
 * Get a single reservation
 *
 * @method GET
 * @path /reservations/single/:id
 */
router.get("/single/:id", async (req, res) => {
  try {
    const reservation = await reservationsService.getReservationById(
      req.params.id,
    );

    if (reservation) {
      res.status(200).json({success: true, data: reservation});
    } else {
      res.status(404).json({success: false, message: "Reservation ID invalid"});
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({success: false, message: err.message});
  }
});

/**
 * Create a reservation
 *
 * @method POST
 * @path /reservations
 */
router.post("/", async (req, res) => {
  try {
    const reservation = await reservationsService.addReservations(req.body);

    res.status(200).json({success: true, data: reservation});
  } catch (err) {
    console.error(err);
    res.status(500).json({success: false, message: err.message});
  }
});

module.exports = router;
