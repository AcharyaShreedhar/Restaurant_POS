const express = require("express");
const router = express.Router();
const userRolesController = require("../controllers/RolesController");

// UserRoles Routes
router.get("/Roles", RolesController.getAllRoles);
router.get("/Roles/:RoleId", RolesController.getRole);
router.post("/Roles", RolesController.addRole);
router.put("/Roles/:RoleId", RolesController.updateRole);
router.delete("/Roles/:RoleId", RolesController.deleteRole);

module.exports = router;
