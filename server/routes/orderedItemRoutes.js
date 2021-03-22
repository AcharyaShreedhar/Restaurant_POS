const express = require("express");
const router = express.Router();
const orderedItemController = require("../controllers/orderedItemController");

// items Routes
router.get("/ordereditems", orderedItemController.getAllOrderedItems);
router.get("/ordereditems/:orderedId", orderedItemController.getOrderedItem);
router.post("/ordereditems", orderedItemController.addOrderedItem);
router.put("/ordereditems/:orderedId", orderedItemController.updateOrderedItem);
router.delete(
  "/ordereditems/:orderedId",
  orderedItemController.deleteOrderedItem
);

module.exports = router;
