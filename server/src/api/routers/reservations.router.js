const {Router} = require("express");

const router = Router();

/**
 * Get all the reservations
 *
 * @method GET
 * @path /reservations/all
 */
router.get("/all", async (req, res) => {
  try {
    res.status(200).json({success: true});
  } catch (err) {
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
    res.status(200).json({success: true});
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
    res.status(200).json({success: true});
  } catch (err) {
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
    res.status(200).json({success: true});
  } catch (err) {
    res.status(500).json({success: false, message: err.message});
  }
});

module.exports = router;
