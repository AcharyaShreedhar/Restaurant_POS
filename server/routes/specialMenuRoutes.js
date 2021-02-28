const express = require("express");
const router = express.Router();
const specialMenuController = require("../controllers/specialMenuController");

// Users Routes
router.get("/special_menus", specialMenuController.getAllSpecialMenu);
router.get("/special_menus/:offerId", specialMenuController.getSpecialMenu);
router.post("/special_menus", specialMenuController.addSpecialMenu);
router.put("/special_menus/:offerId", specialMenuController.updateSpecialMenu);
router.delete(
  "/special_menus/:offerId",
  specialMenuController.deleteSpecialMenu
);

module.exports = router;
