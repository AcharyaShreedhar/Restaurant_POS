const express = require("express");
const router = express.Router();
const unitPriceController = require("../controllers/unitPriceController");

// Unit price Routes
router.get("/unitPrices", unitPriceController.getAllUnitPrices);
router.get("/unitPrices/:item_id", unitPriceController.getUnitPrices);
router.post("/unitPrices", unitPriceController.addUnitPrices);
router.put("/unitPrices/:item_id", unitPriceController.updateUnitPrices);
router.delete("/unitPrices/:item_id", unitPriceController.deleteUnitPrices);

module.exports = router;
