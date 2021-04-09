const db = require("../db");

//get all supplierInventories
exports.getAllSupplierInventories = async (req, res) => {
  const getAllSupplierInventoriesQuery = "SELECT * FROM supplierInventories";
  try {
    const results = await db.query(getAllSupplierInventoriesQuery);
    res.status(200).json({
      status: "success",
      results: results.rows.length,
      data: {
        supplierInventories: results.rows,
      },
    });
  } catch (error) {
    res.status(400).send(err);
  }
};

// get a single supplierInventories
exports.getSupplierInventories = async (req, res) => {
  const getSupplierInventoriesQuery = "SELECT * FROM supplierInventories WHERE sup_invent_id=$1";
  try {
    const results = await db.query(getSupplierInventoriesQuery, [req.params.supinventId]);
    res.status(200).json({
      status: "success",
      results: results.rows.length,
      data: {
        supplierInventories: results.rows[0],
      },
    });
  } catch (error) {
    res.status(400).send(error);
  }
};

// add a supplierInventories
exports.addSupplierInventories = async (req, res) => {
  const addSupplierInventoriesQuery =
    "INSERT INTO supplierInventories (invent_cat_id,supplier_id) values ($1,$2) returning *";

  try {
    const results = await db.query(addSupplierInventoriesQuery, [
      req.body.invent_cat_id,
      req.body.supplier_id,
    ]);
    res.status(200).json({
      status: "success",
      data: {
        supplierInventories: results.rows[0],
      },
    });
  } catch (err) {
    res.status(400).send(err);
  }
};

// update supplierInventories
exports.updateSupplierInventories = async (req, res) => {
  const updateSupplierInventoriesQuery =
    "UPDATE suppliers SET invent_cat_id=$1, supplier_id=$2   WHERE sup_invent_id=$3 returning *";
  try {
    const results = await db.query(updateSupplierInventoriesQuery, [
      req.body.invent_cat_id,
      req.body.supplier_id,

      req.params.supinventId,
    ]);
    res.status(200).json({
      status: "success",
      data: {
        supplierInventories: results.rows[0],
      },
    });
  } catch (err) {
    res.status(400).send(err);
  }
};
//Delete a SupplierInventories
exports.deleteSupplierInventories = async (req, res) => {
  const deleteSupplierInventoriesQuery = "DELETE  FROM supplierInventories WHERE sup_invent_id=$1";
  try {
    const results = await db.query(deleteSupplierInventoriesQuery, [
      req.params.supinventId,
    ]);
    res.status(200).json({
      status: "success",
    });
  } catch (err) {
    res.status(400).send(err);
  }
};
