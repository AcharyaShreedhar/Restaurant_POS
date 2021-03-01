const db = require("../db");

//get all orderss
exports.getAllOrder = async (req, res) => {
  const getAllOrderQuery = "SELECT * FROM orders";
  try {
    const results = await db.query(getAllOrderQuery);
    res.status(200).json({
      status: "success",
      results: results.rows.length,
      data: {
        orders: results.rows,
      },
    });
  } catch (error) {
    res.status(400).send(err);
  }
};

// get a Order
exports.getOrder = async (req, res) => {
  const getOrderQuery = "SELECT * FROM orders WHERE order_id=$1";
  try {
    const results = await db.query(getOrderQuery, [req.params.orderId]);
    res.status(200).json({
      status: "success",
      results: results.rows.length,
      data: {
        order: results.rows[0],
      },
    });
  } catch (error) {
    res.status(400).send(error);
  }
};

// add/place an Order
exports.addOrder = async (req, res) => {
  const addOrderQuery =
    "INSERT INTO orders (cust_id,user_id,table_id) values ($1,$2,$3) returning *";

  try {
    const results = await db.query(addOrderQuery, [
      req.body.cust_id,
      req.body.user_id,
      req.body.table_id,
    ]);
    res.status(200).json({
      status: "success",
      data: {
        order: results.rows[0],
      },
    });
  } catch (err) {
    res.status(400).send(err);
  }
};

// update Order
exports.updateOrder = async (req, res) => {
  const updateOrderQuery =
    "UPDATE order SET cust_id=$1, user_id=$2,table_id=$3  WHERE order_id=$4 returning *";
  try {
    const results = await db.query(updateOrderQuery, [
      req.body.cust_id,
      req.body.user_id,
      req.body.table_id,
      req.params.orderId,
    ]);
    res.status(200).json({
      status: "success",
      data: {
        order: results.rows[0],
      },
    });
  } catch (err) {
    res.status(400).send(err);
  }
};

//Delete an order
exports.deleteOrder = async (req, res) => {
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
