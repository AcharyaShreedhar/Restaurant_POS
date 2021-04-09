const db = require("../db");

//get all purchaseditems
exports.getAllPurchaseditems = async (req, res) => {
  const getAllPurchaseditemsQuery = "SELECT * FROM purchaseditems";
  try {
    const results = await db.query(getAllPurchaseditemsQuery);
    res.status(200).json({
      status: "success",
      results: results.rows.length,
      data: {
        purchaseditems: results.rows,
      },
    });
  } catch (error) {
    res.status(400).send(err);
  }
};

// get a single purchaseditems
exports.getPurchaseditems = async (req, res) => {
  const getPurchaseditemsQuery = "SELECT * FROM purchaseditems WHERE purchase_id=$1";
  try {
    const results = await db.query(getPurchaseditemsQuery, [req.params.purchaseId]);
    res.status(200).json({
      status: "success",
      results: results.rows.length,
      data: {
        purchaseditems: results.rows[0],
      },
    });
  } catch (error) {
    res.status(400).send(error);
  }
};

// add a Purchaseditems
exports.addPurchaseditems = async (req, res) => {
  const addPurchaseditemsQuery =
    "INSERT INTO purchaseditems (invent_id,qty) values ($1,$2) returning *";

  try {
    const results = await db.query(addPurchaseditemsQuery, [
      req.body.invent_id,
      req.body.qty,
    ]);
    res.status(200).json({
      status: "success",
      data: {
        purchaseditems: results.rows[0],
      },
    });
  } catch (err) {
    res.status(400).send(err);
  }
};

// update Purchaseditems
exports.updatePurchaseditems = async (req, res) => {
  const updatePurchaseditemsQuery =
    "UPDATE purchaseditems SET invent_id=$1, qty=$2  WHERE purchase_id=$3 returning *";
  try {
    const results = await db.query(updatePurchaseditemsQuery, [
      req.body.invent_id,
      req.body.qty,
      req.params.purchaseId,
    ]);
    res.status(200).json({
      status: "success",
      data: {
        purchaseditmes: results.rows[0],
      },
    });
  } catch (err) {
    res.status(400).send(err);
  }
};

//Delete a Purchaseditems
exports.deletePurchaseditems = async (req, res) => {
  const deletePurchaseditemsQuery = "DELETE  FROM purchaseditems WHERE purchase_id=$1";
  try {
    const results = await db.query(deletePurchaseditemsQuery, [
      req.params.purchaseId,
    ]);
    res.status(200).json({
      status: "success",
    });
  } catch (err) {
    res.status(400).send(err);
  }
};
