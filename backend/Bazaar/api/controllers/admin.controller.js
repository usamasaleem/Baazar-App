var mongoose=require('mongoose');
var Admin=mongoose.model('admin');
var Retailer=require("../models/retailers.model.js");
var passport=require('passport');
var auth=require('../routes/auth.js');

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


module.exports.login=(req, res, next) => {
  const { body: { user } } = req;

  console.log(req.body);

  if(!req.body.email) {
    return res.status(422).json({
      errors: {
        email: 'is required',
      },
    });
  }

  if(!req.body.password) {
    return res.status(422).json({
      errors: {
        password: 'is required',
      },
    });
  }

  return passport.authenticate('user', { session: false }, (err, passportUser, info) => {
    if(err) {
      
      res
      .json({error:" email or password': 'is invalid' "})
      return next(err);
    }

    if(passportUser) {
      const user = passportUser;
      user.token = passportUser.generateJWT();

      return res.json({ message:"successfully signed up", user: user.toAuthJSON() });
    }

    return status(400).info;
  })(req, res, next);
};


// module.exports.login=function(req,res){

//     if(req.body && req.body.email && req.body.password){

//         Admin
        
//         .find({ email: req.body.email })
//         .where({ password: req.body.password})

//         .exec(function(err,admin){
//             if(err){
//               console.log("server err" + err);
//               res
//               .status(500)
//               .json(err);
      
//             }
           
//             else{
//             console.log("found admin");
//             req.session.admin = req.body.email;
//             console.log(req.session.admin);
//             res
//             .status(201)
//             .json(admin);
      
//             }
//           });
      

//     }
//     else{
//         res

//         .status(500)
//         .json({message: "not nomi"});

//     }
// };

///////////////// AUTHENTICATION FOR ADMIN /////////////////


                            //////// RETAILERS REQUESTS ////////

///////////////// VIEWING ALL RETAILERS REQUESTS /////////////////


module.exports.ctrlGetAllRetailers=function(req,res){
    console.log("mei hon yahan");
   

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

  module.exports.oneStore=function(req,res){

    var retailerlID=req.params.retailerlID;	
    var storeID=req.params.storeID;
    
    console.log('The params is', retailerlID);
    console.log('The params is', storeID);

    Retailer
    .findById(retailerlID)
    
    .select('Stores')
    .exec(function(err,stores){
      var store=stores.Stores.id(storeID);
      if(err){
        res
        .status(500)
        .json(err);
      }
      else{
        res
        .status(200)
        .json(store);
       
      }

  })
};


  module.exports.ctrlUpdatetOne=function(req,res){

    var retailerlID=req.params.retailerlID;	
    var storeID=req.params.storeID;
    
    console.log('The params is', retailerlID);
    console.log('The params is', storeID);

    Retailer
    .findById(retailerlID)
    
    .select('Stores')
    .exec(function(err,stores){
      var store=stores.Stores.id(storeID);
      if(err){
        res
        .status(500)
        .json(err);
      }
      else{
        store.name= req.body.name;
        store.location= req.body.location;
       
     }

     stores.save(function(err,storeUpdate){
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
    });

  };

  
module.exports.storeDeleteOne = function(req, res) {
  var retailerlID=req.params.retailerlID;	
  var storeID=req.params.storeID;
  
  console.log('The params is', retailerlID);
  console.log('The params is', storeID);

  Retailer
    .findById(retailerlID)
    .select('Stores')
    .exec(function(err, stores) {
      var thisStore;
      var response = {
        status : 200,
        message : {}
      };
      if (err) {
        console.log("Error finding retailer");
        response.status = 500;
        response.message = err;
      } else if(!stores) {
        console.log("Retailer id not found in database", retailerlID);
        response.status = 404;
        response.message = {
          "message" : "Retailer ID not found " + retailerlID
        };
      } else {
        // Get the review
        thisStore = stores.Stores.id(storeID);
        // If the review doesn't exist Mongoose returns null
        if (!thisStore) {
          response.status = 404;
          response.message = {
            "message" : "store ID not found " + storeID
          };
        }
      }
      if (response.status !== 200) {
        res
          .status(response.status)
          .json(response.message);
      } else {
        stores.Stores.id(storeID).remove();
        stores.save(function(err, hotelUpdated) {
          if (err) {
            res
              .status(500)
              .json(err);
          } else {
            res
              .status(204)
              .json();
          }
        });
      }
    });

};