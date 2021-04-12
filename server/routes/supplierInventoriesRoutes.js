const express = require('express');
const router = express.Router();
const supplierinventoriesController = require('../controllers/supplierInventoriesController')


// supplierinventories Routes
router.get('/supplierinventories', supplierInventoriesController.getAllSupplierInventories);
router.get('/supplierinventories/:supinventId', supplierInventoriesController.getSupplierInventories)
router.post('/supplierinventories', supplierInventoriesController.addSupplierInventories);
router.put('/supplierinventories/:supinventId', supplierInventoriesController.updateSupplierInventories);
router.delete('/supplierinventories/:supinventId', supplierInventoriesController.deleteSupplierInventories);



module.exports = router;