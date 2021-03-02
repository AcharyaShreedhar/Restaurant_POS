const express = require("express");
const router = express.Router();
const inventoryController = require("../controllers/inventoryController");

// inventory Routes
router.get("/inventories", inventoryController.getAllInventories);
router.get("/inventories/:inventId", inventoryController.getInventory);
router.post("/inventories", inventoryController.addInventory);
router.put("/inventories/:inventId", inventoryController.updateInventory);
router.delete("/inventories/:inventId", inventoryController.deleteInventory);

module.exports = router;
