const db = require("../db");

//get all couriers
exports.getAllCouriers = async (req, res) => {
  const getAllCouriersQuery = "SELECT * FROM couriers";
  try {
    const results = await db.query(getAllCouriersQuery);
    res.status(200).json({
      status: "success",
      results: results.rows.length,
      data: {
        couriers: results.rows,
      },
    });
  } catch (error) {
    res.status(400).send(err);
  }
};

// get a single courier
exports.getCourier = async (req, res) => {
  const getCourierQuery = "SELECT * FROM couriers WHERE courier_id=$1";
  try {
    const results = await db.query(getCourierQuery, [req.params.courierId]);
    res.status(200).json({
      status: "success",
      results: results.rows.length,
      data: {
        couriers: results.rows[0],
      },
    });
  } catch (error) {
    res.status(400).send(error);
  }
};

// add a courier
exports.addCourier = async (req, res) => {
  const addCourierQuery =
    "INSERT INTO couriers (courier_name,courier_comp,courier_phone,courier_address) values ($1,$2,$3,$4) returning *";

  try {
    const results = await db.query(addCourierQuery, [
      req.body.courier_name,
      req.body.courier_comp,
      req.body.courier_phone,
      req.body.courier_address,
    ]);
    res.status(200).json({
      status: "success",
      data: {
        courier: results.rows[0],
      },
    });
  } catch (err) {
    res.status(400).send(err);
  }
};

// update courier
exports.updateCourier = async (req, res) => {
  const updateCourierQuery =
    "UPDATE couriers SET courier_name=$1, courier_comp=$2, courier_phone=$3, courier_address=$4  WHERE courier_id=$5 returning *";
  try {
    const results = await db.query(updateCourierQuery, [
      req.body.courier_name,
      req.body.courier_comp,
      req.body.courier_phone,
      req.body.courier_address,
      req.params.courierId,
    ]);
    res.status(200).json({
      status: "success",
      data: {
        courier: results.rows[0],
      },
    });
  } catch (err) {
    res.status(400).send(err);
  }
};

//Delete a courier
exports.deleteCourier = async (req, res) => {
  const deleteCourierQuery = "DELETE  FROM couriers WHERE courier_id=$1";
  try {
    const results = await db.query(deleteCourierQuery, [req.params.courierId]);
    res.status(200).json({
      status: "success",
    });
  } catch (err) {
    res.status(400).send(err);
  }
};
