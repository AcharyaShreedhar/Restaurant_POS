const db = require("../db");

//get all purchases
exports.getAllPurchases = async (req, res) => {
  const getAllPurchasesQuery = "SELECT * FROM purchases";
  try {
    const results = await db.query(getAllPurchasesQuery);
    res.status(200).json({
      status: "success",
      results: results.rows.length,
      data: {
        purchases: results.rows,
      },
    });
  } catch (error) {
    res.status(400).send(err);
  }
};

// get a single purchase
exports.getPurchase = async (req, res) => {
  const getPurchaseQuery = "SELECT * FROM purchases WHERE purchase_id=$1";
  try {
    const results = await db.query(getPurchaseQuery, [req.params.purchaseId]);
    res.status(200).json({
      status: "success",
      results: results.rows.length,
      data: {
        purchases: results.rows[0],
      },
    });
  } catch (error) {
    res.status(400).send(error);
  }
};

// add a Purchase
exports.addPurchase = async (req, res) => {
  const addPurchaseQuery =
    "INSERT INTO purchases (invoice_no,supplier_id,purchase_date) values ($1,$2,$3) returning *";

  try {
    const results = await db.query(addPurchaseQuery, [
      req.body.invoice_no,
      req.body.supplier_id,
      req.body.purchase_date,
    ]);
    res.status(200).json({
      status: "success",
      data: {
        purchase: results.rows[0],
      },
    });
  } catch (err) {
    res.status(400).send(err);
  }
};

// update Purchase
exports.updatePurchase = async (req, res) => {
  const updatePurchaseQuery =
    "UPDATE purchases SET invoice_no=$1, supplier_id=$2, purchase_date=$3  WHERE purchase_id=$4 returning *";
  try {
    const results = await db.query(updatePurchaseQuery, [
      req.body.invoice_no,
      req.body.supplier_id,
      req.body.purchase_date,
      req.params.purchaseId,
    ]);
    res.status(200).json({
      status: "success",
      data: {
        purchase: results.rows[0],
      },
    });
  } catch (err) {
    res.status(400).send(err);
  }
};

//Delete a Purchase
exports.deletePurchase = async (req, res) => {
  const deletePurchaseQuery = "DELETE  FROM purchases WHERE purchase_id=$1";
  try {
    const results = await db.query(deletePurchaseQuery, [
      req.params.purchaseId,
    ]);
    res.status(200).json({
      status: "success",
    });
  } catch (err) {
    res.status(400).send(err);
  }
};
