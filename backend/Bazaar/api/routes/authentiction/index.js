const express = require('express');
const router = express.Router();
var adminCtrl=require('./../../controllers/admin.controller.js');


// router.use('/admin',adminCtrl);

router.use('/users', require('./users.js'));

module.exports = router;