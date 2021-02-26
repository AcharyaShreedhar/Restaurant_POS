const db = require("../db");

//get all feedbacks
exports.getAllFeedback = async (req, res) => {
  const getAllFeedbackQuery = "SELECT * FROM feedbacks";
  try {
    const results = await db.query(getAllFeedbackQuery);
    res.status(200).json({
      status: "success",
      results: results.rows.length,
      data: {
        feedbacks: results.rows,
      },
    });
  } catch (error) {
    res.status(400).send(err);
  }
};

// get a single feedback
exports.getFeedback = async (req, res) => {
  const getFeedbackQuery = "SELECT * FROM feedbacks WHERE feedback_id=$1";
  try {
    const results = await db.query(getFeedbackQuery, [req.params.feedbackId]);
    res.status(200).json({
      status: "success",
      results: results.rows.length,
      data: {
        feedbacks: results.rows[0],
      },
    });
  } catch (error) {
    res.status(400).send(error);
  }
};

// add a feedback
exports.addFeedback = async (req, res) => {
  const addFeedbackQuery =
    "INSERT INTO feedbacks (cust_id,feedback_msg,feedback_sub,feedback_date) values ($1,$2,$3,$4) returning *";

  try {
    const results = await db.query(addFeedbackQuery, [
      req.body.cust_id,
      req.body.feedback_msg,
      req.body.feedback_sub,
      req.body.feedback_date,
    ]);
    res.status(200).json({
      status: "success",
      data: {
        feedback: results.rows[0],
      },
    });
  } catch (err) {
    res.status(400).send(err);
  }
};

// update feedback
exports.updateFeedback = async (req, res) => {
  const updateFeedbackQuery =
    "UPDATE feedbacks SET cust_id=$1, feedback_msg=$2, feedback_sub=$3, feedback_date=$4  WHERE feedback_id=$5 returning *";
  try {
    const results = await db.query(updateFeedbackQuery, [
      req.body.cust_id,
      req.body.feedback_msg,
      req.body.feedback_sub,
      req.body.feedback_date,
      req.params.feedbackId,
    ]);
    res.status(200).json({
      status: "success",
      data: {
        feedback: results.rows[0],
      },
    });
  } catch (err) {
    res.status(400).send(err);
  }
};

//Delete a feedback
exports.deleteFeedback = async (req, res) => {
  const deleteFeedbackQuery = "DELETE  FROM feedbacks WHERE feedback_id=$1";
  try {
    const results = await db.query(deleteFeedbackQuery, [
      req.params.feedbackId,
    ]);
    res.status(200).json({
      status: "success",
    });
  } catch (err) {
    res.status(400).send(err);
  }
};
