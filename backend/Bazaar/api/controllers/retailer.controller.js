

var mongoose=require('mongoose');

var Retailers=require('../models/retailers.model.js');
var mongoose=require('mongoose');
// var Retailers=mongoose.model('Retailer');
var session=require("cookie-session");
var passport=require('passport');
var User=mongoose.model('Users');
var async=require('async');
const crypto = require('crypto');
const nodemailer = require("nodemailer");
require('nodemailer-smtp-transport');

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
        session.retailerEmail=req.body.email;
        
        console.log(session.retailerEmail);
  
        return res.json({ message:"successfully signed in", user: user.toAuthJSON() });
      }
  
      return status(400).info;
    })(req, res, next);
  };

  module.exports.forgot_password=function(req, res) {
  //   var post_data=req.body;
    var email=req.body.email;
     
          var token=crypto.randomBytes(20).toString('hex');
          
        
    User.findOne({email: email}).count(function(err, number){
        if(err)
        {
          console.log(err);
        }
        else{
          if(number==0){
            res.send('This user do not have any account');
            console.log('This user do not have any account');
          }
          else {
            {
              // var max= 1000;
              // var min=9999;
              // var random_no = Math.floor(Math.random() * (max - min + 1)) + min;

              let transporter = nodemailer.createTransport({
                service:'gmail',
                auth:{
                  user:'naumanshk4@gmail.com',
                  pass:'Nauman@123'
                }
              });
              // let mailOptions = {
              //   to: req.body.email,
              //   from: 'naumanshk4@gmail.com',
              //   subject: 'Password Reset Bazaar',
              //   text: 'You are receiving this because you (or someone else) have requested the reset of the password for your account.\n\n' +
              //     'Please click on the following link, or paste this into your browser to complete the process:\n\n' +
              //     'http://' + req.headers.host + '/reset/' + token + '\n\n' +
              //     'If you did not request this, please ignore this email and your password will remain unchanged.\n'
              // };
              let mailOptions={
                from:'naumanshk4@gmail.com',
                to:email,
                subject:'Sing up Complete',
                text:'You are receiving this because you (or someone else) have requested the reset of the password for your account.\n\n' +
                  'Please click on the following link, or paste this into your browser to complete the process:\n\n' +
                  'http://' + req.headers.host + '/reset/' + token + '\n\n' +
                  'If you did not request this, please ignore this email and your password will remain unchanged.\n'
              };
              transporter.sendMail(mailOptions,function(err){
                if(err){
                  console.log("error occure",err)
                }
                else {
                  console.log("Email send");
                  res.send('Verification link send');
                }
              })
            }
          }
    }
  })
  
    // async.waterfall([
    //   function(done) {
    //     crypto.randomBytes(20, function(err, buf) {
    //       var token = buf.toString('hex');
    //       done(err, token);
    //     });
    //   },
    //   function(token, done) {
    //     User.findOne({ email: req.body.email }, function(err, user) {
    //       if(err){
    //         console.log("AGYA")
    //       }
    //       if (!user) {
    //        console.log('error', 'No account with that email address exists.');
           
    //       }
  
    //       // user.resetPasswordToken = token;
    //       // user.resetPasswordExpires = Date.now() + 3600000; // 1 hour
  
          
    //     });
    //   },
    //   function(token, user, done) {
    //     var smtpTransport = nodemailer.createTransport( {
    //       service: 'gmail',
    //       auth: {
    //         user: 'naumanshk4@gmail.com',
    //         pass: 'Nauman@123'
    //       }
    //     });
    //     var mailOptions = {
    //       to: req.body.email,
    //       from: 'naumanshk4@gmail.com',
    //       subject: 'Node.js Password Reset',
    //       text: 'You are receiving this because you (or someone else) have requested the reset of the password for your account.\n\n' +
    //         'Please click on the following link, or paste this into your browser to complete the process:\n\n' +
    //         'http://' + req.headers.host + '/reset/' + token + '\n\n' +
    //         'If you did not request this, please ignore this email and your password will remain unchanged.\n'
    //     };
    //     smtpTransport.sendMail(mailOptions, function(err) {
    //       res.send('info', 'An e-mail has been sent to ' + req.body.email + ' with further instructions.');
    //       done(err, 'done');
    //     });
    //   }
    // ], function(err) {
    //   if (err) return next(err);
     
    // });
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
            email:req.body.email,
            City:req.body.city,
            Address:req.body.address,
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