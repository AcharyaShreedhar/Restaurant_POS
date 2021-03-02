const db = require("../db");

//get all Inventories
exports.getAllInventories = async (req, res) => {
  const getAllInventoriesQuery = "SELECT * FROM inventories";
  try {
    const results = await db.query(getAllInventoriesQuery);
    res.status(200).json({
      status: "success",
      results: results.rows.length,
      data: {
        inventories: results.rows,
      },
    });
  } catch (error) {
    res.status(400).send(err);
  }
};

// get a single inventory
exports.getInventory = async (req, res) => {
  const getInventoryQuery = "SELECT * FROM inventories WHERE invent_id=$1";
  try {
    const results = await db.query(getInventoryQuery, [req.params.inventId]);
    res.status(200).json({
      status: "success",
      results: results.rows.length,
      data: {
        inventories: results.rows[0],
      },
    });
  } catch (error) {
    res.status(400).send(error);
  }
};

// add a Inventory
exports.addInventory = async (req, res) => {
  const addInventoryQuery =
    "INSERT INTO inventories (invent_name,invent_desc,invent_unit,invent_status,invent_stock,invent_mfd,invent_exp) values ($1,$2,$3,$4,$5,$6,$7) returning *";

  try {
    const results = await db.query(addInventoryQuery, [
      req.body.invent_name,
      req.body.invent_desc,
      req.body.invent_unit,
      req.body.invent_status,
      req.body.invent_stock,
      req.body.invent_mfd,
      req.body.invent_exp,
    ]);
    res.status(200).json({
      status: "success",
      data: {
        inventory: results.rows[0],
      },
    });
  } catch (err) {
    res.status(400).send(err);
  }
};

// update Inventory
exports.updateInventory = async (req, res) => {
  const updateInventoryQuery =
    "UPDATE inventories SET invent_name=$1, invent_desc=$2, invent_unit=$3, invent_status=$4 ,invent_stock=$5,invent_mfd=$6,invent_exp=$7  WHERE invent_id=$8 returning *";
  try {
    const results = await db.query(updateInventoryQuery, [
      req.body.invent_name,
      req.body.invent_desc,
      req.body.invent_unit,
      req.body.invent_status,
      req.body.invent_stock,
      req.body.invent_mfd,
      req.body.invent_exp,
      req.params.inventId,
    ]);
    res.status(200).json({
      status: "success",
      data: {
        inventory: results.rows[0],
      },
    });
  } catch (err) {
    res.status(400).send(err);
  }
};

//Delete a Inventory
exports.deleteInventory = async (req, res) => {
  const deleteInventoryQuery = "DELETE  FROM inventories WHERE invent_id=$1";
  try {
    const results = await db.query(deleteInventoryQuery, [req.params.inventId]);
    res.status(200).json({
      status: "success",
    });
  } catch (err) {
    res.status(400).send(err);
  }
};
