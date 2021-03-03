const db = require("../db");

//get all restaurants table
exports.getAllRestaurantsTable = async (req, res) => {
  const getAllRestaurantsTableQuery = "SELECT * FROM res_tables";
  try {
    const results = await db.query(getAllRestaurantsTableQuery);
    res.status(200).json({
      status: "success",
      results: results.rows.length,
      data: {
        tables: results.rows,
      },
    });
  } catch (error) {
    res.status(400).send(err);
  }
};

// get a single table
exports.getRestaurantTable = async (req, res) => {
  const getRestaurantTableQuery = "SELECT * FROM res_tables WHERE table_id=$1";
  try {
    const results = await db.query(getRestaurantTableQuery, [
      req.params.tableId,
    ]);
    res.status(200).json({
      status: "success",
      results: results.rows.length,
      data: {
        table: results.rows[0],
      },
    });
  } catch (error) {
    res.status(400).send(error);
  }
};

// add a restaurant table
exports.addRestaurantTable = async (req, res) => {
  const addRestaurantTableQuery =
    "INSERT INTO res_tables (table_cap,table_shape,table_type,table_rate) values ($1,$2,$3,$4) returning *";

  try {
    const results = await db.query(addRestaurantTableQuery, [
      req.body.table_cap,
      req.body.table_shape,
      req.body.table_type,
      req.body.table_rate,
    ]);
    res.status(200).json({
      status: "success",
      data: {
        table: results.rows[0],
      },
    });
  } catch (err) {
    res.status(400).send(err);
  }
};

// update table
exports.updateRestaurantTable = async (req, res) => {
  const updateRestaurantTableQuery =
    "UPDATE res_tables SET table_cap=$1, table_shape=$2, table_type=$3, table_rate=$4   WHERE table_id=$5 returning *";
  try {
    const results = await db.query(updateRestaurantTableQuery, [
      req.body.table_cap,
      req.body.table_shape,
      req.body.table_type,
      req.body.table_rate,
      req.params.tableId,
    ]);
    res.status(200).json({
      status: "success",
      data: {
        table: results.rows[0],
      },
    });
  } catch (err) {
    res.status(400).send(err);
  }
};

//Delete a Restaurant Table
exports.deleteRestaurantTable = async (req, res) => {
  const deleteRestaurantTableQuery =
    "DELETE  FROM res_tables WHERE table_id=$1";
  try {
    const results = await db.query(deleteRestaurantTableQuery, [
      req.params.tableId,
    ]);
    res.status(200).json({
      status: "success",
    });
  } catch (err) {
    res.status(400).send(err);
  }
};
