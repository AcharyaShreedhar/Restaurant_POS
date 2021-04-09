const express = require('express');
const router = express.Router();
const tableReservationController = require('../controllers/tableReservationController')


// table reservation  Routes
router.get('/table_reservations', tableReservationController.getAllTableReservation);
router.get('/table_reservations/:reserve_id', tableReservationController.getTableReservation)
router.post('/table_reservations', tableReservationController.addTableReservation);
router.put('/table_reservations/:reserve_id', tableReservationController.updateTableReservation);
router.delete('/table_reservations/:reserve_id', tableReservationController.updateTableReservation);



module.exports = router;