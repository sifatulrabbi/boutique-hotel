const {Router} = require("express");

const router = Router();

/**
 * Get all the bookings
 *
 * @method GET
 * @path /bookings/all
 */
router.get("/all", async (req, res) => {
  try {
    res.status(200).json({success: true});
  } catch (err) {
    res.status(500).json({success: false, message: err.message});
  }
});

/**
 * Get booking of a room
 *
 * @method GET
 * @path /bookings/room/:roomId
 */
router.get("/room/:roomId", async (req, res) => {
  try {
    res.status(200).json({success: true});
  } catch (err) {
    res.status(500).json({success: false, message: err.message});
  }
});

/**
 * Get a single booking
 *
 * @method GET
 * @path /bookings/single/:bookingId
 */
router.get("/room/:roomId", async (req, res) => {
  try {
    res.status(200).json({success: true});
  } catch (err) {
    res.status(500).json({success: false, message: err.message});
  }
});

/**
 * Create a booking
 *
 * @method POST
 * @path /bookings
 */
router.post("/bookings", async (req, res) => {
  try {
    res.status(200).json({success: true});
  } catch (err) {
    res.status(500).json({success: false, message: err.message});
  }
});

module.exports = router;
