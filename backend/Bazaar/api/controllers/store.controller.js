
var Retailers=require('../models/retailers.model.js');
var session=require("express-session");




///////////////// TEST GET ////////////////////
module.exports.test=function(req,res){
  console.log(req.session.retailer);
};


/////////////////PRODUCTS/////////////



/////////////////PRODUCTS/////////////

/// VIEW STORES OF A SPECIFIC RETAILER////
module.exports.ViewStores=function(req,res){
  var ret='5de22dac4a05f01e10a5c618'; //session came when retailer loggin to the system.
Retailers
.findById(ret)  ////SESSION CONTROL HERE when login

.select('Stores')
.exec(function(err,stores){
    
    if(err){
      console.log("server err" + err);
      res
      .status(500)
      .json(err);

    }
 
    else{
    
    res
    .status(201)
    .json(stores);

    }
  });
};

/////////////////// ADDING STORE INFORMATION FOR RETAILER ///////////////////
    module.exports.addStore=function(req,res){
      // console.log(req.session.retailer)
  
        var sessRet=req.session.retailer;
        console.log(sessRet);
        
  
      Retailers
      
      
      // .find({"Contact_no": "03071177"}) HARD CODE TO SHOW THE RESULT DIRECTLY OR SEND A RETAILER REQUEST
      ///////////////////////////////////////////////// TO GENERATE A SESSION TO CONTINUE ADDING STORE.s
      .findOneAndUpdate( {"Contact_no":sessRet}, {
          $push:{ Stores:{"name":req.body.name,"location":req.body.location}}
        }, { new: true},function(err,update){
            if(err){
                console.log("review is not added"+err);
                res
                .status(500)
                .json(err);
              }else{

                update.save(function(err,storeUpdate){
                    if(err){
                      res
                      .status(500)
                      .json(err)
                    }else{
                      res
                      .status(201)
                      .json(storeUpdate.Stores[storeUpdate.Stores.length-1]);
              
                    }
              
                  });
              }

        }
        );
    
     
  
    };
