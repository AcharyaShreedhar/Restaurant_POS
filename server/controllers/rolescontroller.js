const db = require("../db");

//get all Roles
exports.getAllRoles = async (req, res) => {
  const getAllRolesQuery = "SELECT * FROM roles";
  try {
    const results = await db.query(getAllRolesQuery);
    res.status(200).json({
      status: "success",
      results: results.rows.length,
      data: {
        Roles: results.rows,
      },
    });
  } catch (error) {
    res.status(400).send(err);
  }
};

// get a Role
exports.getRole = async (req, res) => {
  const getRoleQuery = "SELECT * FROM roles WHERE role_id=$1";
  try {
    const results = await db.query(getRoleQuery, [req.params.userId]);
    res.status(200).json({
      status: "success",
      results: results.rows.length,
      data: {
        Role: results.rows[0],
      },
    });
  } catch (error) {
    res.status(400).send(error);
  }
};

// add user Role
exports.addUserRole = async (req, res) => {
  const addRoleQuery =
    "INSERT INTO roles (role_name,role_id) values ($1,$2) returning *";

  try {
    const results = await db.query(addRoleQuery, [
      req.body.role_name,
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
  const updateRoleQuery =
    "UPDATE roles SET role_id=$1  WHERE user_id=$2 returning *";
  try {
    const results = await db.query(updateRoleQuery, [
      req.body.role_id,
      req.params.roleName,
    ]);
    res.status(200).json({
      status: "success",
      data: {
        Role: results.rows[0],
      },
    });
  } catch (err) {
    res.status(400).send(err);
  }
};

//Delete Role
exports.deleteRole = async (req, res) => {
  const deleteRoleQuery = "DELETE  FROM roles WHERE role_name=$1";
  try {
    const results = await db.query(deleteRoleQuery, [req.params.orderId]);
    res.status(200).json({
      status: "success",
    });
  } catch (err) {
    res.status(400).send(err);
  }
};
