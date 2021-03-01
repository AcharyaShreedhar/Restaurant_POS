const express = require("express");
const router = express.Router();
const orderController = require("../controllers/orderController");

// orders Routes
router.get("/orders", orderController.getAllOrders);
router.get("/orders/:orderId", orderController.getOrder);
router.post("/orders", orderController.addOrder);
router.put("/orders/:orderId", orderController.updateOrder);
router.delete("/orders/:orderId", orderController.deleteOrder);

module.exports = router;
