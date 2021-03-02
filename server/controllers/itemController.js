const db = require("../db");

//get all items
exports.getAllItems = async (req, res) => {
  const getAllItemsQuery = "SELECT * FROM items";
  try {
    const results = await db.query(getAllItemsQuery);
    res.status(200).json({
      status: "success",
      results: results.rows.length,
      data: {
        items: results.rows,
      },
    });
  } catch (error) {
    res.status(400).send(err);
  }
};

// get a Item
exports.getItem = async (req, res) => {
  const getItemQuery = "SELECT * FROM items WHERE item_id=$1";
  try {
    const results = await db.query(getItemQuery, [req.params.itemId]);
    res.status(200).json({
      status: "success",
      results: results.rows.length,
      data: {
        item: results.rows[0],
      },
    });
  } catch (error) {
    res.status(400).send(error);
  }
};

// add an Item
exports.addItem = async (req, res) => {
  const addItemQuery =
    "INSERT INTO items (item_name,item_desc,item_unit,item_stock) values ($1,$2,$3,$4) returning *";

  try {
    const results = await db.query(addItemQuery, [
      req.body.item_name,
      req.body.item_desc,
      req.body.item_unit,
      req.body.item_stock,
    ]);
    res.status(200).json({
      status: "success",
      data: {
        item: results.rows[0],
      },
    });
  } catch (err) {
    res.status(400).send(err);
  }
};

// update Item
exports.updateItem = async (req, res) => {
  const updateItemQuery =
    "UPDATE order SET item_name=$1, item_desc=$2,item_unit=$3, item_stock=$4  WHERE item_id=$5 returning *";
  try {
    const results = await db.query(updateItemQuery, [
      req.body.item_name,
      req.body.item_desc,
      req.body.item_unit,
      req.body.item_stock,
      req.params.itemId,
    ]);
    res.status(200).json({
      status: "success",
      data: {
        item: results.rows[0],
      },
    });
  } catch (err) {
    res.status(400).send(err);
  }
};

//Delete an item
exports.deleteItem = async (req, res) => {
  const deleteOrderQuery = "DELETE  FROM orders WHERE order_id=$1";
  try {
    const results = await db.query(deleteOrderQuery, [req.params.orderId]);
    res.status(200).json({
      status: "success",
    });
  } catch (err) {
    res.status(400).send(err);
  }
};
