const express = require('express');
const router = express.Router();
const handleFTFString = require('../controllers/FTFController');

router.post('/', handleFTFString) 

module.exports = router;
