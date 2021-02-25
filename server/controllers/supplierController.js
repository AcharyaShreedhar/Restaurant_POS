const db = require("../db");

//get all suppliers
exports.getAllSuppliers = async (req, res) => {
  const getAllSuppliersQuery = "SELECT * FROM suppliers";
  try {
    const results = await db.query(getAllSuppliersQuery);
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

// get a single supplier
exports.getSupplier = async (req, res) => {
  const getSupplierQuery = "SELECT * FROM suppliers WHERE supplier_id=$1";
  try {
    const results = await db.query(getSupplierQuery, [req.params.supplierId]);
    res.status(200).json({
      status: "success",
      results: results.rows.length,
      data: {
        suppliers: results.rows[0],
      },
    });
  } catch (error) {
    res.status(400).send(error);
  }
};

// add a supplier
exports.addSupplier = async (req, res) => {
  const addSupplierQuery =
    "INSERT INTO suppliers (supplier_name,supplier_address,supplier_phone,supplier_email,supplier_comp,supplier_type) values ($1,$2,$3,$4,$5,$6) returning *";

  try {
    const results = await db.query(addSupplierQuery, [
      req.body.supplier_name,
      req.body.supplier_address,
      req.body.supplier_phone,
      req.body.supplier_email,
      req.body.supplier_comp,
      req.body.supplier_type,
    ]);
    res.status(200).json({
      status: "success",
      data: {
        supplier: results.rows[0],
      },
    });
  } catch (err) {
    res.status(400).send(err);
  }
};

// update supplier
exports.updateSupplier = async (req, res) => {
  const updateSupplierQuery =
    "UPDATE suppliers SET supplier_name=$1, supplier_address=$2, supplier_phone=$3, supplier_email=$4 ,supplier_comp=$5,supplier_type=$6  WHERE supplier_id=$8 returning *";
  try {
    const results = await db.query(updateSupplierQuery, [
      req.body.supplier_name,
      req.body.supplier_address,
      req.body.supplier_phone,
      req.body.supplier_email,
      req.body.supplier_comp,
      req.body.supplier_type,

      req.params.supplierId,
    ]);
    res.status(200).json({
      status: "success",
      data: {
        supplier: results.rows[0],
      },
    });
  } catch (err) {
    res.status(400).send(err);
  }
};
//Delete a Supplier
exports.deleteSupplier = async (req, res) => {
  const deleteSupplierQuery = "DELETE  FROM suppliers WHERE supplier_id=$1";
  try {
    const results = await db.query(deleteSupplierQuery, [
      req.params.supplierId,
    ]);
    res.status(200).json({
      status: "success",
    });
  } catch (err) {
    res.status(400).send(err);
  }
};
