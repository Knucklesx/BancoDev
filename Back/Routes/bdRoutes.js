const express = require('express');
const BdController = require('../controllers/bdControllers');


const router = express.Router();

router.get('/', BdController.getAll);

router.post('/', BdController.addCand);

router.get('/:nivel', BdController.filtrarNivel);

module.exports = router;
