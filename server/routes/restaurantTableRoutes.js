const express = require("express");
const router = express.Router();
const restaurantTableController = require("../controllers/restaurantTableController");

// tables Routes
router.get("/tables", restaurantTableController.getAllRestaurantsTable);
router.get("/tables/:tableId", restaurantTableController.getRestaurantTable);
router.post("/tables", restaurantTableController.addRestaurantTable);
router.put("/tables/:tableId", restaurantTableController.updateRestaurantTable);
router.delete(
  "/tables/:tableId",
  restaurantTableController.deleteRestaurantTable
);

module.exports = router;
