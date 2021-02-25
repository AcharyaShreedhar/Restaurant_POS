const express = require('express');
const router = express.Router();
const suppliersController = require('../controllers/supplierController')


// suppliers Routes
router.get('/suppliers', suppliersController.getAllSuppliers);
router.get('/suppliers/:supplierId', suppliersController.getSupplier)
router.post('/suppliers', suppliersController.addSupplier);
router.put('/suppliers/:supplierId', suppliersController.updateSupplier);
router.delete('/suppliers/:supplierId', suppliersController.deleteSupplier);



module.exports = router;