const db = require("../db");

//get all Offered Items
exports.getAllOfferedItems = async (req, res) => {
  const getAllOfferedItemsQuery = "SELECT * FROM offered_items";
  try {
    const results = await db.query(getAllOfferedItemsQuery);
    res.status(200).json({
      status: "success",
      results: results.rows.length,
      data: {
        offeredItems: results.rows,
      },
    });
  } catch (error) {
    res.status(400).send(err);
  }
};

// get a Offered Item
exports.getOfferedItem = async (req, res) => {
  const getOfferedItemQuery = "SELECT * FROM offered_items WHERE id=$1";
  try {
    const results = await db.query(getOfferedItemQuery, [req.params.id]);
    res.status(200).json({
      status: "success",
      results: results.rows.length,
      data: {
        offeredItems: results.rows[0],
      },
    });
  } catch (error) {
    res.status(400).send(error);
  }
};

// add an Offered Item
exports.addOfferedItem = async (req, res) => {
  const addOfferedItemQuery =
    "INSERT INTO offered_items (offer_id,item) values ($1,$2) returning *";

  try {
    const results = await db.query(addOfferedItemQuery, [
      req.body.offer_id,
      req.body.item,
    ]);
    res.status(200).json({
      status: "success",
      data: {
        offeredItems: results.rows[0],
      },
    });
  } catch (err) {
    res.status(400).send(err);
  }
};

// update Offered Items
exports.updateOfferedItems = async (req, res) => {
  const updateOfferedItemsQuery =
    "UPDATE offered_items SET offer_id=$1, item=$2  WHERE id=$3 returning *";
  try {
    const results = await db.query(updateOfferedItemsQuery, [
      req.body.offer_id,
      req.body.item,
      req.params.id,
    ]);
    res.status(200).json({
      status: "success",
      data: {
        offeredItems: results.rows[0],
      },
    });
  } catch (err) {
    res.status(400).send(err);
  }
};

//Delete an offered item
exports.deleteOfferedItem = async (req, res) => {
  const deleteOfferedItemQuery =
    "DELETE  FROM offered_items WHERE id=$1";
  try {
    const results = await db.query(deleteOfferedItemQuery, [req.params.id]);
    res.status(200).json({
      status: "success",
    });
  } catch (err) {
    res.status(400).send(err);
  }
};