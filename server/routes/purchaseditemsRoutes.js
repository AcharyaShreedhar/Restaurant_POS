const express = require("express");
const router = express.Router();
const purchaseditemsController = require("../controllers/purchasesitemsController");

// purchases Routes
router.get("/purchaseditems", purchaseditemsController.getAllPurchaseditems);
router.get("/purchaseditems/:purchaseId", purchaseditemsController.getPurchaseditems);
router.post("/purchaseditems", purchaseditemsController.addPurchase);
router.put("/purchaseditems/:purchaseId", purchaseditemsController.updatePurchaseditems);
router.delete("/purchaseditems/:purchaseId", purchaseditemsController.deletePurchaseditems);

module.exports = router;
 