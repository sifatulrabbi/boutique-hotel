const {Router} = require("express");
const {roomsService} = require("../../services");

const router = Router();

/**
 * Get all the rooms
 *
 * @method GET
 * @path /rooms/all
 */
router.get("/all", async (req, res) => {
  try {
    const rooms = await roomsService.getAllRooms();
    res.status(200).json({success: true, data: rooms});
  } catch (err) {
    console.error(err);
    res.status(500).json({success: false, message: err.message});
  }
});

/**
 * Get a room by it's id
 *
 * @method GET
 * @path /rooms/single/:id
 */
router.get("/single/:id", async (req, res) => {
  try {
    const room = await roomsService.getARoomById(req.params.id);

    if (!room) {
      res.status(404).json({success: false, message: "Invalid room id"});
    } else {
      res.status(200).json({success: true, data: room});
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({success: false, message: err.message});
  }
});

module.exports = router;
