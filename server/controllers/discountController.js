const db = require("../db");

//get all discounts
exports.getAllDiscount = async (req, res) => {
  const getAllDiscountQuery = "SELECT * FROM discounts";
  try {
    const results = await db.query(getAllDiscountQuery);
    res.status(200).json({
      status: "success",
      results: results.rows.length,
      data: {
        discounts: results.rows,
      },
    });
  } catch (error) {
    res.status(400).send(err);
  }
};

// get a discount
exports.getDiscount = async (req, res) => {
  const getDiscountQuery = "SELECT * FROM discounts WHERE disc_id=$1";
  try {
    const results = await db.query(getDiscountQuery, [req.params.discountId]);
    res.status(200).json({
      status: "success",
      results: results.rows.length,
      data: {
        discount: results.rows[0],
      },
    });
  } catch (error) {
    res.status(400).send(error);
  }
};

// add a discount
exports.addDiscount = async (req, res) => {
  const addDiscountQuery =
    "INSERT INTO discounts (disc_amt,disc_type) values ($1,$2) returning *";

  try {
    const results = await db.query(addDiscountQuery, [
      req.body.disc_amt,
      req.body.disc_type,
    ]);
    res.status(200).json({
      status: "success",
      data: {
        discount: results.rows[0],
      },
    });
  } catch (err) {
    res.status(400).send(err);
  }
};

// update Discount
exports.updateDiscount = async (req, res) => {
  const updateDiscountQuery =
    "UPDATE discount SET disc_amt=$1, disc_type=$2  WHERE disc_id=$3 returning *";
  try {
    const results = await db.query(updateDiscountQuery, [
      req.body.disc_amt,
      req.body.disc_type,
      req.params.discountId,
    ]);
    res.status(200).json({
      status: "success",
      data: {
        discount: results.rows[0],
      },
    });
  } catch (err) {
    res.status(400).send(err);
  }
};

//Delete a discount
exports.deleteDiscount = async (req, res) => {
  const deleteDiscountQuery = "DELETE  FROM discounts WHERE disc_id=$1";
  try {
    const results = await db.query(deleteDiscountQuery, [
      req.params.feedbackId,
    ]);
    res.status(200).json({
      status: "success",
    });
  } catch (err) {
    res.status(400).send(err);
  }
};
