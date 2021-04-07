const express = require("express");
const router = express.Router();
const offeredItemController = require("../controllers/offeredItemController");

// items Routes
router.get("/offereditems", offeredItemController.getAllOfferedItems);
router.get("/offereditems/:id", offeredItemController.getOfferedItem);
router.post("/offereditems", offeredItemController.addOfferedItem);
router.put("/offereditems/:id", offeredItemController.updateOfferedItem);
router.delete("/offereditems/:id", offeredItemController.deleteOfferedItem);

module.exports = router;
