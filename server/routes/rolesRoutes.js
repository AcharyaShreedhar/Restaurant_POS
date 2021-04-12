const express = require("express");
const router = express.Router();
const rolesController = require("../controllers/rolesController");

// UserRoles Routes
router.get("/Roles", rolesController.getAllRoles);
router.get("/Roles/:RoleId", rolesController.getRole);
router.post("/Roles", rolesController.addRole);
router.put("/Roles/:RoleId", rolesController.updateRole);
router.delete("/Roles/:RoleId", rolesController.deleteRole);

module.exports = router;
