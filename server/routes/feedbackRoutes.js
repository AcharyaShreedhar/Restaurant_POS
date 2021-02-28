const express = require("express");
const router = express.Router();
const feedbackController = require("../controllers/feedbackController");

// Feedbacks Routes
router.get("/feedbacks", feedbackController.getAllFeedback);
router.get("/feedbacks/:feedbackId", feedbackController.getFeedback);
router.post("/feedbacks", feedbackController.addFeedback);
router.put("/feedbacks/:feedbackId", feedbackController.updateFeedback);
router.delete("/feedbacks/:feedbackId", feedbackController.deleteFeedback);

module.exports = router;
