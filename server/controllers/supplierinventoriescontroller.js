const db = require("../db");

//get all supplierinventories
exports.getAllSupplierinventories = async (req, res) => {
  const getAllSupplierinventoriesQuery = "SELECT * FROM supplierinventories";
  try {
    const results = await db.query(getAllSupplierinventoriesQuery);
    res.status(200).json({
      status: "success",
      results: results.rows.length,
      data: {
        suppliers: results.rows,
      },
    });
  } catch (error) {
    res.status(400).send(err);
  }
};

// get a single supplierinventories
exports.getSupplierinventories = async (req, res) => {
  const getSupplierinventoriesQuery = "SELECT * FROM supplierinventories WHERE sup_invent_id=$1";
  try {
    const results = await db.query(getSupplierinventoriesQuery, [req.params.supinventId]);
    res.status(200).json({
      status: "success",
      results: results.rows.length,
      data: {
        supplierinventories: results.rows[0],
      },
    });
  } catch (error) {
    res.status(400).send(error);
  }
};

// add a supplierinventories
exports.addSupplierinventories = async (req, res) => {
  const addSupplierinventoriesQuery =
    "INSERT INTO supplierinventories (invent_cat_id,supplier_id) values ($1,$2) returning *";

  try {
    const results = await db.query(addSupplierinventoriesQuery, [
      req.body.invent_cat_id,
      req.body.supplier_id,
    ]);
    res.status(200).json({
      status: "success",
      data: {
        supplierinventories: results.rows[0],
      },
    });
  } catch (err) {
    res.status(400).send(err);
  }
};

// update supplierinventories
exports.updateSupplierinventories = async (req, res) => {
  const updateSupplierinventoriesQuery =
    "UPDATE suppliers SET invent_cat_id=$1, supplier_id=$2   WHERE sup_invent_id=$3 returning *";
  try {
    const results = await db.query(updateSupplierinventoriesQuery, [
      req.body.invent_cat_id,
      req.body.supplier_id,

      req.params.supinventId,
    ]);
    res.status(200).json({
      status: "success",
      data: {
        supplierinventories: results.rows[0],
      },
    });
  } catch (err) {
    res.status(400).send(err);
  }
};
//Delete a Supplierinventories
exports.deleteSupplierinventories = async (req, res) => {
  const deleteSupplierinventoriesQuery = "DELETE  FROM supplierinventories WHERE sup_invent_id=$1";
  try {
    const results = await db.query(deleteSupplierinventoriesQuery, [
      req.params.supinventId,
    ]);
    res.status(200).json({
      status: "success",
    });
  } catch (err) {
    res.status(400).send(err);
  }
};
