const {Router} = require("express");

const router = Router();

/**
 * Get all the rooms
 *
 * @method GET
 * @path /rooms/all
 */
router.get("/all", async (req, res) => {
  try {
    res.status(200).json({success: true});
  } catch (err) {
    console.error(err);
    res.status(500).json({success: false, message: err.message});
  }
});

module.exports = router;
