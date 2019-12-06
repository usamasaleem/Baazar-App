var mongoose=require('mongoose');

var Products=require('../models/products.model');
var Retailers=require('../models/retailers.model.js');
var mongoose=require('mongoose');
// var Retailers=mongoose.model('Retailer');
var session=require("cookie-session");



//retailer finding one product 

module.exports.viewOneProduct=function(req,res){
  var retailerlID=req.params.retailerlID;	
  var storeID=req.params.storeID;
  var productID=req.params.productID;
  
  console.log('The params is', retailerlID);
  console.log('The params is', storeID);
  console.log('The params is',productID);


  Retailers
  .findById(retailerlID) ////SESSION CONTROL HERE
  
  .select('Stores')
  
  .exec(function(err,products){
      
      if(err){
        console.log("server err" + err);
        res
        .status(500)  
        .json(err);

      }
   
      else{
        console.log(products);
          var idd=products.Stores.id(storeID) ////SESSION CONTROL HERE
     
          var store=idd._id;
          console.log(store,"yalo");

          Products
          .findById(productID)
          .where({"store_id":storeID})
          .exec(function(err,products){
            if(err){
              console.log("server err" + err);
              res
              .status(500)
              .json(err);
         }
         else if(!products){
          console.log("ID dont exist" + productID);
          res
          .status(400)
          .json({"message": "ID not found"});

         }
            else{
              console.log("found Product",products.length);
              console.log(session.retailerEmail);
                res
                .status(200)
                .json(products);
            }
        
          });
          
     

      // res
      // .status(201)
      // .json(idd._id);

      }
    });
  
};


module.exports.updateOneProduct=function(req,res){

  var retailerlID=req.params.retailerlID;	
  var storeID=req.params.storeID;
  var productID=req.params.productID;
  
  console.log('The params is', retailerlID);
  console.log('The params is', storeID);
  console.log('The params is',productID);


  Retailers
  .findById(retailerlID) ////SESSION CONTROL HERE
  
  .select('Stores')
  
  .exec(function(err,products){
      
      if(err){
        console.log("server err" + err);
        res
        .status(500)  
        .json(err);

      }
   
      else{
        console.log(products);
          var idd=products.Stores.id(storeID) ////SESSION CONTROL HERE
     
          var store=idd._id;
          console.log(store,"yalo");

          Products
          .findById(productID)
          .where({"store_id":storeID})
          .exec(function(err,products){
            if(err){
              console.log("server err" + err);
              res
              .status(500)
              .json(err);
         }
            else{

               products.Name =req.body.name,
                
                products.Discription=req.body.discription,
                products.Brand=req.body.brand,
                products.Price=req.body.price,
                products.Quantity=req.body.quantity,
                products.store_id=storeID   

            }
            products.save(function(err,productUpdate){
              if(err){
                res
                .status(500)
                .json(err)
              }else{
                res
                .status(204)
                .json();
          
              }
        
          });
        })
      }
    });
  
  };

  module.exports.deleteOneProduct=function(req,res){

    var retailerlID=req.params.retailerlID;	
    var storeID=req.params.storeID;
    var productID=req.params.productID;
    
    console.log('The params is', retailerlID);
    console.log('The params is', storeID);
    console.log('The params is',productID);
  
  
    Retailers
    .findById(retailerlID) ////SESSION CONTROL HERE
    
    .select('Stores')
    
    .exec(function(err,products){
        
        if(err){
          console.log("server err" + err);
          res
          .status(500)  
          .json(err);
  
        }
     
        else{
          console.log(products);
            var idd=products.Stores.id(storeID) ////SESSION CONTROL HERE
       
            var store=idd._id;
            console.log(store,"yalo");
  
            Products
            .findByIdAndDelete(productID)
            .where({"store_id":storeID})
            .exec(function(err,products){
              if(err){
                console.log("server err" + err);
                res
                .status(500)
                .json(err);
           }
              else{
  
                console.log("Product deleted" );
                res
                .status(200)
                .json({"deleted :" : products});
              }
              
          });
        }
      });
    
    };

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
      console.log("found Product",products.length);
      console.log(session.retailerEmail);
        res
        .status(200)
        .json(products);
    }

  });


};

module.exports.viewProduct=function(req,res){
  // retailer id 5de3aae60c756e32b030c899
  //5de622ab6ce22e2c3c730872storeid
    var store='5de23087464b8b1a54f497d9';
    var ret='5de22dac4a05f01e10a5c618';   ////SESSION CONTROL HERE
    var retailerlID=req.params.retailerlID;	
    var storeID=req.params.storeID;

    console.log(retailerlID);
    console.log(storeID);

    var sess=session.retailerEmail;
    console.log(sess);

    Retailers
    .findById(retailerlID) ////SESSION CONTROL HERE
    
    .select('Stores')
    
    .exec(function(err,products){
        
        if(err){
          console.log("server err" + err);
          res
          .status(500)  
          .json(err);
  
        }
     
        else{
          console.log(products);
            var idd=products.Stores.id(storeID) ////SESSION CONTROL HERE
       
            var store=idd._id;
            console.log(store,"yalo");
            findProducts(req,res,store);
       
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
  var retailerlID=req.params.retailerlID;	
  var storeID=req.params.storeID;
    console.log("agaya");
    
        if(req.body){
            

    
            Products
            .create({
    
                Name : req.body.name,
                
                Discription:req.body.discription,
                Brand:req.body.brand,
                Price:req.body.price,
                Quantity:req.body.quantity,
                store_id:storeID                 //session for store ID
             
    
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



