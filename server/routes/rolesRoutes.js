const express = require("express");
const router = express.Router();
const rolesController = require("../controllers/rolesController");

// Roles Routes
router.get("/roles", rolesController.getAllRoles);
router.get("/roles/:roleId", rolesController.getRole);
router.post("/roles", rolesController.addRole);
router.put("/roles/:roleId", rolesController.updateRole);
router.delete("/roles/:roleId", rolesController.deleteRole);

module.exports = router;
