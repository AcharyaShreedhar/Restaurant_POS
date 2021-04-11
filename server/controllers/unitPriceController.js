const db = require("../db");

//get all unit Prices
exports.getAllUnitPrices = async (req, res) => {
  const getAllUnitPricesQuery = "SELECT * FROM unit_prices";
  try {
    const results = await db.query(getAllUnitPricesQuery);
    res.status(200).json({
      status: "success",
      results: results.rows.length,
      data: {
        unitPrices: results.rows,
      },
    });
  } catch (error) {
    res.status(400).send(err);
  }
};

// get a single unit price
exports.getUnitPrices = async (req, res) => {
  const getUnitPricesQuery = "SELECT * FROM unit_prices WHERE item_id=$1";
  try {
    const results = await db.query(getUnitPricesQuery, [
      req.params.itemId,
    ]);
    res.status(200).json({
      status: "success",
      results: results.rows.length,
      data: {
        unitPrices: results.rows[0],
      },
    });
  } catch (error) {
    res.status(400).send(error);
  }
};

// add a unit price 
exports.addUnitPrices = async (req, res) => {
  const addunitPricesQuery =
    "INSERT INTO unit_prices (price, unit) values ($1,$2) returning *";

  try {
    const results = await db.query(addunitPricesQuery, [
      req.body.price,
      req.body.unit,
    ]);
    res.status(200).json({
      status: "success",
      data: {
        unitPrices: results.rows[0],
      },
    });
  } catch (err) {
    res.status(400).send(err);
  }
};

// update unit price
exports.updateUnitPrices = async (req, res) => {
  const updateUnitPricesQuery =
    "UPDATE unit_prices SET  price=$1, unit=$2, WHERE item_id=$3 returning *";
  try {
    const results = await db.query(updateUnitPricesQuery, [
      req.body.price,
      req.body.unit,
      req.params.itemId

    ]);
    res.status(200).json({
      status: "success",
      data: {
        unitPrices: results.rows[0],
      },
    });
  } catch (err) {
    res.status(400).send(err);
  }
};

//Delete a unit price
exports.deleteUnitPrices = async (req, res) => {
  const deleteUnitPricesQuery =
    "DELETE  FROM unit_prices WHERE item_id=$1";
  try {
    const results = await db.query(deleteUnitPricesQuery, [
      req.params.itemId,
    ]);
    res.status(200).json({
      status: "success",
    });
  } catch (err) {
    res.status(400).send(err);
  }
};
