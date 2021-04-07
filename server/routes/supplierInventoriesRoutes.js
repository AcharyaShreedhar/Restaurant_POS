const express = require('express');
const router = express.Router();
const supplierinventoriesController = require('../controllers/supplierinventoriesController')


// supplierinventories Routes
router.get('/supplierinventories', supplierinventoriesController.getAllSupplierinventories);
router.get('/supplierinventories/:supinventId', supplierinventoriesController.getSupplierinventories)
router.post('/supplierinventories', supplierinventoriesController.addSupplierinventories);
router.put('/supplierinventories/:supinventId', supplierinventoriesController.updateSupplierinventories);
router.delete('/supplierinventories/:supinventId', supplierinventoriesController.deleteSupplierinventories);



module.exports = router;