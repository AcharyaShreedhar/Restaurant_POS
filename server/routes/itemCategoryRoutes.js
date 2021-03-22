const express = require("express");
const router = express.Router();
const itemCategoryController = require("../controllers/itemCategoryController");

// items Routes
router.get("/itemCategories", itemCategoryController.getAllItemCategory);
router.get("/itemCategories/:catId", itemCategoryController.getItemCategory);
router.post("/itemCategories", itemCategoryController.addItemCategory);
router.put("/itemCategories/:catId", itemCategoryController.updateItemCategory);
router.delete("/itemCategories/:catId", itemCategoryController.deleteItemCategory);

module.exports = router;
