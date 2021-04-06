const express = require("express");
const router = express.Router();
const inventoryCategoryController = require("../controllers/inventoryCategoryController");

// items Routes
router.get("/inventoryCategories", inventoryCategoryController.getAllInventoryCategories);
router.get("/inventoryCategories/:catId", itemCategoryController.getInventoryCategory);
router.post("/inventoryCategories", inventoryCategoryController.addInventoryCategory);
router.put("/inventoryCategories/:catId", inventoryCategoryController.updateInventoryCategory);
router.delete("/inventoryCategories/:catId", inventoryCategoryController.deleteInventoryCategory);

module.exports = router;
