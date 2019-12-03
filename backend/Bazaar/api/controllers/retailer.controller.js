

var mongoose=require('mongoose');

var Retailers=require('../models/retailers.model.js');
var mongoose=require('mongoose');
// var Retailers=mongoose.model('Retailer');
var session=require("cookie-session");
var passport=require('passport');



// var _addreview=function(req,res,store){
   
//       store
//       Stores.push({
//         name: req.body.name,
//         location: req.body.location
      
//       });
      
//     };
  




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
  
    return passport.authenticate('retailer', { session: false }, (err, passportUser, info) => {
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



module.exports.addRetailer=function(req,res){
console.log("agaya");
console.log(req.body.Verfication);
    if(req.body){

        Retailers
        .create({

            F_name : req.body.F_name,
            L_name : req.body.L_name,
            Contact_no:req.body.Contact_no,
            Email:req.body.Email,
            City:req.body.City,
            Address:req.body.Address,
            Verfication:req.body.Verfication
         

        },function(err,ret){
            if(err){
              console.log(err);
              res
              .status(400)
              .json(err);
              
      
            }else{
              console.log("Retailer is added")
              req.session.retailer=req.body.Contact_no;
              res
              .status(201)
              .json({admin:"Retailer is added"  + " "  +ret});
      
            }
        });
    }
    else{
        console.log("na");
    }
};