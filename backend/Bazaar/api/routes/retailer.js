var express=require('express');
var router=express.Router();

var retCtrl=require('../controllers/retailer.controller.js');
var storeCtrl=require('../controllers/store.controller.js');
var auth=require('../routes/auth.js');



router
.route('/login')
.post(auth.optional, retCtrl.login)

router
.route('/request')
.post(retCtrl.addRetailer);

router
.route('/request/store')
.get(storeCtrl.test)
.post(storeCtrl.addStore);

router
.route('/request/stores/view')
.get(storeCtrl.ViewStores)

module.exports=router;