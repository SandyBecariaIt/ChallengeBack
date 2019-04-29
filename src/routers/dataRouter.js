const express = require('express');
const router = express.Router();

const dataController = require('../controllers/dataController');

router.post('/editData', dataController.postData);

module.exports = router;