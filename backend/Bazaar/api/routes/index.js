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
.route('/test/:retailerlID/stores/:storeID/products')
.post(productCtrl.addProduct) 
.get(productCtrl.viewProduct)   ///SHIFT TO RETAILER


router
.route('/test/:retailerlID/stores/:storeID/products/:productID')

.get(productCtrl.viewOneProduct)
.put(productCtrl.updateOneProduct) 
.delete(productCtrl.deleteOneProduct)





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

//VERFIED RETAILERS ROUTES//////////
router
.route('/admin/retailers/verified')
.get(adminCtrl.ctrlViewAllRetailer)
// .put(ctrlHotels.ctrlUpdatetOne)
// .delete(ctrlHotels.hotelsDeleteOne);

router
.route('/admin/retailers/verified/:retailerlID')
.get(adminCtrl.ctrlViewOneRetailer)
// // .put(ctrlHotels.ctrlUpdatetOne)
// // .delete(ctrlHotels.hotelsDeleteOne);

router
.route('/admin/retailers/verified/:retailerlID/stores')
.get(adminCtrl.verifiedRetailerStores)

router
.route('/admin/retailers/verified/:retailerlID/stores/:storeID')
.get(adminCtrl.oneStore)
.put(adminCtrl.ctrlUpdatetOne)
.delete(adminCtrl.storeDeleteOne);




module.exports=router;