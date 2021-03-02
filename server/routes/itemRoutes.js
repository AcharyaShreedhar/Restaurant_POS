const express = require("express");
const router = express.Router();
const itemController = require("../controllers/itemController");

// items Routes
router.get("/items", itemController.getAllItems);
router.get("/items/:itemId", itemController.getItem);
router.post("/items", itemController.addItem);
router.put("/items/:itemId", itemController.updateItem);
router.delete("/items/:itemId", itemController.deleteItem);

module.exports = router;
