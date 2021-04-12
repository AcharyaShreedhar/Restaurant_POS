const express = require("express");
const router = express.Router();
const inventoryCategoryController = require("../controllers/inventoryCategoryController");

// items Routes
router.get("/inventoryCategories", inventoryCategoryController.getAllInventoryCategories);
router.get("/inventoryCategories/:inventCatId", inventoryCategoryController.getInventoryCategory);
router.post("/inventoryCategories", inventoryCategoryController.addInventoryCategory);
router.put("/inventoryCategories/:inventCatId", inventoryCategoryController.updateInventoryCategory);
router.delete("/inventoryCategories/:inventCatId", inventoryCategoryController.deleteInventoryCategory);

module.exports = router;
