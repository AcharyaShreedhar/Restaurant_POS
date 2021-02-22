const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController')


// Users Routes
router.get('/users', usersController.getAllUsers);
router.get('/users/:userId', usersController.getUser)
router.post('/users', usersController.addUser);
router.put('/users/:userId', usersController.updateUser);
router.delete('/users/:userId', usersController.deleteUser);



module.exports = router;