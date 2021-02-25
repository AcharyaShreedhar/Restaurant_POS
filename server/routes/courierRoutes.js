const express = require("express");
const router = express.Router();
const courierController = require("../controllers/courierController");

// Users Routes
router.get("/couriers", courierController.getAllCouriers);
router.get("/couriers/:courierId", courierController.getCourier);
router.post("/couriers", courierController.addCourier);
router.put("/couriers/:courierId", courierController.updateCourier);
router.delete("/couriers/:courierId", courierController.deleteCourier);

module.exports = router;
