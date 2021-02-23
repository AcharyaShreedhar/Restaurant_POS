const express = require('express');
const router = express.Router();
const customersController = require('../controllers/customersController')


// Customers Routes
router.get('/customers', customersController.getAllCustomers);
router.get('/customers/:customerId', customersController.getCustomer)
router.post('/customers', customersController.addCustomer);
router.put('/customers/:customerId', customersController.updateCustomer);
router.delete('/customers/:customerId', customersController.deleteCustomer);



module.exports = router;