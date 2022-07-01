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
    const checkIn = req.query.checkIn;
    const checkOut = req.query.checkOut;
    const rooms = await roomsService.findAvailableRooms(checkIn, checkOut);
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

/**
 * Create a room
 *
 * @method POST
 * @path /rooms/
 */
router.post("/", async (req, res) => {
  try {
    const room = roomsService.createRoom(req.body);

    res.status(200).json({
      success: true,
      message: "Room created",
      data: room,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({success: false, message: err.message});
  }
});

/**
 * Update a room
 *
 * @method PUT
 * @path /rooms/single/:id
 */
router.put("/single/:id", async (req, res) => {
  const updatedRoom = await roomsService.updateRoom(req.params.id, req.body);

  if (!updatedRoom) {
    res.status(404).json({success: false, message: "Invalid room id"});
  } else {
    res.status(200).json({success: true, data: updatedRoom});
  }
});

/**
 * Remove a room
 *
 * @method DELETE
 * @path /rooms/single/:id
 */
router.delete("/single/:id", async (req, res) => {
  const result = await roomsService.removeARoom(req.params.id);

  if (result) {
    res.status(200).json({success: true, message: "Room removed"});
  } else {
    res.status(404).json({success: false, message: "Invalid room id"});
  }
});

/** Get all the associated reservation requests of a room
 *
 * @method DELETE
 * @path /rooms/single/:id/requests
 */
router.get("/single/:id/requests", async (req, res) => {
  const result = await roomsService.getRoomRequests(req.params.id);

  if (result) {
    res.status(200).json({success: true, data: result});
  } else {
    res.status(404).json({success: false, message: "Invalid room id"});
  }
});

module.exports = router;
