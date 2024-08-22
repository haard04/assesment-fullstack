const express = require('express');
const { getSongs } = require('../controllers/songController');
const router = express.Router();

router.get('/', getSongs);

module.exports = router;
