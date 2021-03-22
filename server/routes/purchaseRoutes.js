const express = require("express");
const router = express.Router();
const purchaseController = require("../controllers/purchaseController");

// purchases Routes
router.get("/purchases", purchaseController.getAllPurchases);
router.get("/purchases/:purchaseId", purchaseController.getPurchase);
router.post("/purchases", purchaseController.addPurchase);
router.put("/purchases/:purchaseId", purchaseController.updatePurchase);
router.delete("/purchases/:purchaseId", purchaseController.deletePurchase);

module.exports = router;
