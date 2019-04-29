const express = require('express');
const router = express.Router();

const moneyController = require('../controllers/moneyController');

router.get('/getInformation', moneyController.getInfo);

module.exports = router;