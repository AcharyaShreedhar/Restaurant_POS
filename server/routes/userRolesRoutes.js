const express = require("express");
const router = express.Router();
const userRolesController = require("../controllers/userRolesController");

// UserRoles Routes
router.get("/userRoles", userRolesController.getAllUserRoles);
router.get("/userRoles/:userId", userRolesController.getUserRole);
router.post("/userRoles", userRolesController.addUserRole);
router.put("/userRoles/:userId", userRolesController.updateUserRole);
router.delete("/userRoles/:userId", userRolesController.deleteUserRole);

module.exports = router;
