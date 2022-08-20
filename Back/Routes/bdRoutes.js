const express = require('express');
const BdController = require('../controllers/bdControllers');


const router = express.Router();

router.get('/', BdController.getAll);

module.exports = router;
