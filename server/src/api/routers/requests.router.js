const {Router} = require("express");
const {requestsService} = require("../../services");

const router = Router();

/**
 * Get all the requests
 *
 * @method GET
 * @path /requests/all
 */
router.get("/all", async (req, res) => {
  try {
    const requests = await requestsService.getAllRequests();

    if (requests) {
      res.status(200).json({success: true, data: requests});
    } else {
      res.status(404).json({success: false, message: "No requests yet"});
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({success: false, message: err.message});
  }
});

/**
 * Get a request with the request id
 *
 * @method GET
 * @path /requests/single/:id
 */
router.get("/single/:id", async (req, res) => {
  try {
    const request = await requestsService.getRequestById(req.params.id);

    if (request) {
      res.status(200).json({success: true, data: request});
    } else {
      res.status(404).json({success: false, message: "Invalid request id"});
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({success: false, message: err.message});
  }
});

/**
 * Create a request
 *
 * @method POST
 * @path /requests
 */
router.post("/", async (req, res) => {
  try {
    const request = await requestsService.addRequest(req.body);

    res.status(200).json({success: true, data: request});
  } catch (err) {
    console.error(err);
    res.status(500).json({success: false, message: err.message});
  }
});

/**
 * Accept a request
 *
 * @method POST
 * @path /requests/accept/:id
 */
router.post("/accept/:id", async (req, res) => {
  try {
    const {duplicates} = req.body;
    const result = await requestsService.acceptRequest(
      req.params.id,
      duplicates,
    );

    if (!result) {
      res.status(404).json({success: false, message: "Invalid request id"});
    }

    res.status(200).json({success: true, data: result});
  } catch (err) {
    res.status(500).json({success: false, message: err.message});
  }
});

/**
 * Remove a request
 *
 * @method DELETE
 * @path /requests/:id
 */
router.delete("/:id", async (req, res) => {
  try {
    const result = await requestsService.removeRequest(req.params.id);

    if (result) {
      res.status(200).json({success: true, message: "Request removed"});
    } else {
      res.status(404).json({success: false, message: "Request not found"});
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      message: "Internal error",
      error: err.message,
    });
  }
});

module.exports = router;
