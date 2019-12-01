var mongoose=require('mongoose');
var Admin=mongoose.model('admin');
var Retailer=require("../models/retailers.model.js");

///////////////// AUTHENTICATION FOR ADMIN /////////////////
module.exports.signup=function(req,res){

    if(req.body && req.body.email && req.body.password){

        Admin
        .create({

            email : req.body.email,
            password : req.body.password
        },function(err,admin){
            if(err){
              console.log(err);
              res
              .status(400)
              .json(err);
              
      
            }else{
              console.log("Admin is added")
              res
              .status(201)
              .json({admin:"Admin is added"  + " "  +req.body.email});
      
            }
        });
    }
};

module.exports.login=function(req,res){

    if(req.body && req.body.email && req.body.password){

        Admin
        
        .find({ email: req.body.email }).find({ password: req.body.password})

        .exec(function(err,admin){
            if(err){
              console.log("server err" + err);
              res
              .status(500)
              .json(err);
      
            }
           
            else{
            console.log("found admin");
            req.session.admin = req.body.email;
            console.log(req.session.admin);
            res
            .status(201)
            .json(admin);
      
            }
          });
      

    }
    else{
        res

        .status(500)
        .json({message: "not nomi"});

    }
};

///////////////// AUTHENTICATION FOR ADMIN /////////////////


                            //////// RETAILERS REQUESTS ////////

///////////////// VIEWING ALL RETAILERS REQUESTS /////////////////


module.exports.ctrlGetAllRetailers=function(req,res){
    console.log("mei hon yahan");
   
    // var offset=0;
    // var count=5;
    // var maxCount=10;
  
    // if (req.query && req.query.lat && req.query.lng) {
    //   runGeoQuery(req, res);
    //   return;
    // }
    // if(req.query && req.query.offset){
    //     offset=parseInt(req.query.offset, 10);
  
    // }
    // if(req.query && req.query.count){
    //     count= parseInt(req.query.count, 10);
  
    // }
    // if(isNaN(offset) || isNaN(count)){
    //   res
    //   .status(400)
    //   .json({"message" : "Bad request"});
    //   return;
    // }
    // if(count>maxCount){
    //   res
    //   .status(400)
    //   .json({"message" : "Count limit is"+ maxCount});
    //   return;
    // }
    Retailer
    .find()
    .where({"Verfication":false})
    // .skip(offset)
    // .limit(count)
    
    .exec(function(err,retailers){
      if(err){
        console.log("server err" + err);
        res
        .status(500)
        .json(err);

      }
    //   else if (req.session.views) {
    //     req.session.views++
    //     console.log("view"+""+req.session.views);
        
    //   }
      else{
      console.log("found retailers",retailers.length);
     
      res
      .status(201)
      .json(retailers);

      }
    });

    
  };
///////////////// VIEWING ALL RETAILERS REQUESTS/////////////////



///////////////// FINDING ONE RETAILERS REQUEST/////////////////
module.exports.ctrlGetOneRetailer=function(req,res){
    
    var retailerlID=req.params.retailerlID;	
    
    console.log('The params is', retailerlID);

    Retailer
    .findById(retailerlID)
    .where({"Verfication":false})
    .exec(function(err,docs){
      if(err){
        console.log("server err" + err);
        res
        .status(500)
        .json({message:"Retailer ID not found"+ ""+ err});

      }
      else
     {
      res
      .status(200)
      .json(docs);
     }
    });
   
  };

  ///////////////// VIEWING ONE RETAILERS REQUESTS/////////////////


   ///////////////// VIEWING ONE RETAILERS Store (NOT VERIFIED)/////////////////

   module.exports.ctrlGetStores=function(req,res){
    var retailerlID=req.params.retailerlID;	
    
    console.log('The params is', retailerlID);

    Retailer
    .findById(retailerlID)
    .select('Stores')

    .exec(function(err,docs){
      res
      .status(200)
      .json(docs.Stores);

    });
   
  };

   



                                         
                                ////////VERIFIED RETAILERS///////

  ///////////////// VIEWING ALL VERIFIED RETAILERS /////////////////
  module.exports.ctrlViewAllRetailer=function(req,res){
    console.log("mei hon yahan");
   
    Retailer
    .find({"Verfication":true})
    .exec(function(err,retailers){
      if(err){
        console.log("server err" + err);
        res
        .status(500)
        .json(err);

      }
   
      else{
      console.log("found retailers",retailers.length);
     
      res
      .status(201)
      .json(retailers);

      }
    });

    
  };
  ///////////////// VIEWING ALL VERIFIED RETAILERS /////////////////

  module.exports.ctrlViewOneRetailer=function(req,res){
    
    var retailerlID=req.params.retailerlID;	
    
    console.log('The params is', retailerlID);

    Retailer
    .findById(retailerlID)
    .where({"Verfication":true})

    .exec(function(err,docs){
      if(err){
        console.log("server err" + err);
        
        res
        .status(500)
        .json({message:"Retailer ID not found"+ ""+ err});

      }
      else
     {
         
      res
      .status(200)
      .json(docs);
     }
    });
   
  };

  module.exports.verifiedRetailerStores=function(req,res){
    
    var retailerlID=req.params.retailerlID;	
    
    console.log('The params is', retailerlID);

    Retailer
    .findById(retailerlID)
    .where({"Verfication":true})
    .select('Stores')

    .exec(function(err,docs){
      if(err){
        console.log("server err" + err);
        
        res
        .status(500)
        .json({message:"Retailer ID not found"+ ""+ err});

      }
      else
     {
         
      res
      .status(200)
      .json(docs);
     }
    });
   
  };