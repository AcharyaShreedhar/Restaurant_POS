const express = require("express");
const router = express.Router();
const discountController = require("../controllers/discountController");

// discounts Routes
router.get("/discounts", discountController.getAllDiscount);
router.get("/discounts/:discountId", discountController.getDiscount);
router.post("/discounts", discountController.addDiscount);
router.put("/discounts/:discountId", discountController.updateDiscount);
router.delete("/discounts/:discountId", discountController.deleteDiscount);

module.exports = router;
