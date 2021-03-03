const db = require("../db");

//get all userRoles
exports.getAllUserRoles = async (req, res) => {
  const getAllUserRolesQuery = "SELECT * FROM user_roles";
  try {
    const results = await db.query(getAllUserRolesQuery);
    res.status(200).json({
      status: "success",
      results: results.rows.length,
      data: {
        userRoles: results.rows,
      },
    });
  } catch (error) {
    res.status(400).send(err);
  }
};

// get a userRole
exports.getUserRole = async (req, res) => {
  const getUserRoleQuery = "SELECT * FROM user_roles WHERE user_id=$1";
  try {
    const results = await db.query(getUserRoleQuery, [req.params.userId]);
    res.status(200).json({
      status: "success",
      results: results.rows.length,
      data: {
        userRole: results.rows[0],
      },
    });
  } catch (error) {
    res.status(400).send(error);
  }
};

// add user Role
exports.addUserRole = async (req, res) => {
  const addUserRoleQuery =
    "INSERT INTO user_roles (user_id,role_id) values ($1,$2) returning *";

  try {
    const results = await db.query(addUserRoleQuery, [
      req.body.user_id,
      req.body.role_id,
    ]);
    res.status(200).json({
      status: "success",
      data: {
        userRole: results.rows[0],
      },
    });
  } catch (err) {
    res.status(400).send(err);
  }
};

// update UserRole
exports.updateUserRole = async (req, res) => {
  const updateUserRoleQuery =
    "UPDATE user_roles SET role_id=$1  WHERE user_id=$2 returning *";
  try {
    const results = await db.query(updateUserRoleQuery, [
      req.body.role_id,
      req.params.userId,
    ]);
    res.status(200).json({
      status: "success",
      data: {
        userRole: results.rows[0],
      },
    });
  } catch (err) {
    res.status(400).send(err);
  }
};

//Delete userRole
exports.deleteUserRole = async (req, res) => {
  const deleteUserRoleQuery = "DELETE  FROM user_roles WHERE user_id=$1";
  try {
    const results = await db.query(deleteUserRoleQuery, [req.params.orderId]);
    res.status(200).json({
      status: "success",
    });
  } catch (err) {
    res.status(400).send(err);
  }
};
