var mongoose=require('mongoose');

var Products=require('../models/products.model');
var Retailers=require('../models/retailers.model.js');
var mongoose=require('mongoose');
// var Retailers=mongoose.model('Retailer');
var session=require("cookie-session");

var findProducts=function(req,res,storeID){

  Products
  .find()
  .where({"store_id":storeID})
  .exec(function(err,products){
    if(err){
      console.log("server err" + err);
      res
      .status(500)
      .json(err);

    }
    else{
        res
        .status(200)
        .json(products);
    }

  });


};

module.exports.viewProduct=function(req,res){
    var store='5de22dcf4a05f01e10a5c619';
    var ret='5de22dac4a05f01e10a5c618';   ////SESSION CONTROL HERE
    

    Retailers
    .findById(ret)  ////SESSION CONTROL HERE
    
    .select('Stores')
    .exec(function(err,products){
        
        if(err){
          console.log("server err" + err);
          res
          .status(500)
          .json(err);
  
        }
     
        else{
            var idd=products.Stores.id(store) ////SESSION CONTROL HERE
        console.log("found Product",products.length);
        var storeID=idd._id;
        findProducts(req,res,storeID);
       
        // res
        // .status(201)
        // .json(idd._id);
  
        }
      });
    };

//     Products
//     .find()
//     .populate({
//         path: 'store_id',
//         match: { Stores: {"_id":store}}
//     })
    
//     .where(store)
//     .exec(function(err,retailers){
//         if(err){
//           console.log("server err" + err);
//           res
//           .status(500)
//           .json(err);
  
//         }
     
//         else{
//         console.log("found retailers",retailers.length);
       
//         res
//         .status(201)
//         .json(retailers);
  
//         }
//       });
   

// };
module.exports.addProduct=function(req,res){
    console.log("agaya");
    
        if(req.body){
            

    
            Products
            .create({
    
                Name : req.body.name,
                
                Discription:req.body.discription,
                Brand:req.body.brand,
                Price:req.body.price,
                Quantity:req.body.quantity,
                store_id:req.body.id
             
    
            },function(err,Product){
                if(err){
                  console.log(err);
                  res
                  .status(400)
                  .json(err);
                  
          
                }else{
                  console.log("Product is added")
                  
                  res
                  .status(201)
                  .json({admin:"Product is added"  + " "  +Product});
          
                }
            });
        }
        else{
            console.log("na");
        }
    };