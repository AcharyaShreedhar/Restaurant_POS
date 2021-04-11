const db = require("../db");

//get all table reservation
exports.getAllTableReservation = async (req, res) => {
  const getAllTableReservationQuery = "SELECT * FROM tables_reservations";
  try {
    const results = await db.query(getAllTableReservationQuery);
    res.status(200).json({
      status: "success",
      results: results.rows.length,
      data: {
        tables_reservations: results.rows,
      },
    });
  } catch (error) {
    res.status(400).send(err);
  }
};

// get a single table reservation
exports.getTableReservation = async (req, res) => {
  const getTableReservationQuery = "SELECT * FROM table_reservations WHERE table_id=$1";
  try {
    const results = await db.query(getTableReservationQuery, [
      req.params.tableId,
    ]);
    res.status(200).json({
      status: "success",
      results: results.rows.length,
      data: {
        table_reservations: results.rows[0],
      },
    });
  } catch (error) {
    res.status(400).send(error);
  }
};

// add a table reservation
exports.addTableReservation = async (req, res) => {
  const addTableReservationQuery =
    "INSERT INTO table_reservations (user_id,cust_id,cust_count,start_time,end_time) values ($1,$2,$3,$4,$5) returning *";

  try {
    const results = await db.query(addTableReservationQuery, [
      req.body.user_id,
      req.body.cust_id,
      req.body.cust_count,
      req.body.start_time,
      req.body.end_time
    ]);
    res.status(200).json({
      status: "success",
      data: {
        table_reservations: results.rows[0],
      },
    });
  } catch (err) {
    res.status(400).send(err);
  }
};

// update table reservation
exports.updateTableReservation = async (req, res) => {
  const updateTableReservationQuery =
    "UPDATE table_reservations SET user_id=$1, cust_id=$2, start_time=$3,cust_count=$4, end_time=$5, table_id=$6   WHERE reserve_id= 7  returning *";
  try {
    const results = await db.query(updateTableReservationQuery, [
      req.body.user_id,
      req.body.cust_id,
      req.body.start_time,
      req.body.cust_count,
      req.body.end_time,
      req.body.table_id,
      req.params.reserveId,
    ]);
    res.status(200).json({
      status: "success",
      data: {
        table_reservations: results.rows[0],
      },
    });
  } catch (err) {
    res.status(400).send(err);
  }
};

//Delete a Restaurant Table reservation
exports.deleteTableReservation = async (req, res) => {
  const deleteTableReservationQuery =
    "DELETE  FROM table_reservations WHERE reserve_id=$1";
  try {
    const results = await db.query(deleteTableReservationQuery, [
      req.params.reserveId,
    ]);
    res.status(200).json({
      status: "success",
    });
  } catch (err) {
    res.status(400).send(err);
  }
};
