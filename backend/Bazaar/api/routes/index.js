var express=require('express');
var router=express.Router();
// var ctrlHotels = require('../controller/hotels.controllers.js');
// var ctrlReviews = require('../controller/ctrlReviews.js');
var adminCtrl=require('../controllers/admin.controller.js');
var productCtrl=require('../controllers/product.controller.js');
// var retCtrl=require("../controllers/retailer.controller.js");
var passport=require('passport');
var auth=require('../routes/auth.js');

// router
// .route('/admin/login')
// // .post(adminCtrl.signup)
// .post(adminCtrl.login);
router
.route('/admin/login')
.post(auth.optional, adminCtrl.login)

router
.route('/test')
.post(productCtrl.addProduct)
.get(productCtrl.viewProduct)


/// Retailers Request///
router
.route('/admin/retailers/request')
.get(adminCtrl.ctrlGetAllRetailers)

router
.route('/admin/retailers/request/:retailerlID')
.get(adminCtrl.ctrlGetOneRetailer)
// .put(ctrlHotels.ctrlUpdatetOne)
// .delete(ctrlHotels.hotelsDeleteOne);

router
.route('/admin/retailers/request/:retailerlID/stores')
.get(adminCtrl.ctrlGetStores)

//VERFIED RETAILERS ROUTES//
router
.route('/admin/retailers/viewAll')
.get(adminCtrl.ctrlViewAllRetailer)
// .put(ctrlHotels.ctrlUpdatetOne)
// .delete(ctrlHotels.hotelsDeleteOne);

router
.route('/admin/retailers/view/:retailerlID')
.get(adminCtrl.ctrlViewOneRetailer)
// // .put(ctrlHotels.ctrlUpdatetOne)
// // .delete(ctrlHotels.hotelsDeleteOne);

router
.route('/admin/retailers/view/:retailerlID/stores')
.get(adminCtrl.verifiedRetailerStores)




module.exports=router;