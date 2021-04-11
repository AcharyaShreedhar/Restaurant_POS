const express = require("express");
const router = express.Router();
const offersController = require("../controllers/offersController");

// offers Routes
router.get("/offers", offersController.getAllOffers);
router.get("/offers/:offerId", offersController.getOffer);
router.post("/offers", offersController.addOffer);
router.put("/offers/:offerId", offersController.updateOffer);
router.delete("/offers/:offerId", offersController.deleteOffer);

module.exports = router;