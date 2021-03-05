const db = require("../db");

//get all orderedItems
exports.getAllOrderedItems = async (req, res) => {
  const getAllOrderedItemsQuery = "SELECT * FROM ordered_items";
  try {
    const results = await db.query(getAllOrderedItemsQuery);
    res.status(200).json({
      status: "success",
      results: results.rows.length,
      data: {
        orderedItems: results.rows,
      },
    });
  } catch (error) {
    res.status(400).send(err);
  }
};

// get ordered item
exports.getOrderedItem = async (req, res) => {
  const getOrderedItemQuery = "SELECT * FROM ordered_items WHERE ordered_id=$1";
  try {
    const results = await db.query(getOrderedItemQuery, [req.params.orderedId]);
    res.status(200).json({
      status: "success",
      results: results.rows.length,
      data: {
        orderedItem: results.rows[0],
      },
    });
  } catch (error) {
    res.status(400).send(error);
  }
};

// add  ordered item
exports.addOrderedItem = async (req, res) => {
  const addOrderedItemQuery =
    "INSERT INTO ordered_items (item_id,ordered_qty) values ($1,$2) returning *";

  try {
    const results = await db.query(addOrderedItemQuery, [
      req.body.item_id,
      req.body.ordered_qty,
    ]);
    res.status(200).json({
      status: "success",
      data: {
        ordereditem: results.rows[0],
      },
    });
  } catch (err) {
    res.status(400).send(err);
  }
};

// update Item
exports.updateOrderedItem = async (req, res) => {
  const updateOrderedItemQuery =
    "UPDATE ordered_items SET item_id=$1, ordered_qty=$2 WHERE ordered_id=$3 returning *";
  try {
    const results = await db.query(updateOrderedItemQuery, [
      req.body.item_id,
      req.body.ordered_qty,
    ]);
    res.status(200).json({
      status: "success",
      data: {
        ordereditem: results.rows[0],
      },
    });
  } catch (err) {
    res.status(400).send(err);
  }
};

//Delete ordered item
exports.deleteOrderedItem = async (req, res) => {
  const deleteOrderedItemQuery =
    "DELETE  FROM ordered_items WHERE ordered_id=$1";
  try {
    const results = await db.query(deleteOrderedItemQuery, [
      req.params.orderId,
    ]);
    res.status(200).json({
      status: "success",
    });
  } catch (err) {
    res.status(400).send(err);
  }
};
