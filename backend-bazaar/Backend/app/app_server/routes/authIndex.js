const express = require('express');
const router = express.Router();

router.use('/authentication', require('./authentiction'));

module.exports = router;