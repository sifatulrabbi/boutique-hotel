const {Router} = require("express");

const router = Router();

router.post("/login", async (req, res) => {
  try {
    const {username, password} = req.body;

    if (username !== "admin") {
      return res.status(404).json({
        success: false,
        message: "Admin account not found",
      });
    }

    if (password !== "admin") {
      return res.status(400).json({
        success: false,
        message: "Credentials incorrect",
      });
    }

    res.status(200).json({success: true, data: {username, role: "admin"}});
  } catch (err) {
    res.status(500).json({success: false, message: err.message});
  }
});

module.exports = router;
