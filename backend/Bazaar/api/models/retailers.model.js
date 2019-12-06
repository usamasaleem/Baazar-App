const mongoose = require('mongoose');
const crypto = require('crypto');
const jwt = require('jsonwebtoken');

var storeSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    location:{
        type: String,
        
    }
    

});
mongoose.model('store',storeSchema);

var RetailersSchema = new mongoose.Schema({

    F_name:{
        type: String,
        required:true
    },
    L_name:{
        type: String,
        required:true
    },
    email : {
      type : String,
      required : true,
      unique:true
      
    },
    hash: String,
    salt: String,
    Password: {
        type: String,
        default: null
        // required: true,
      },
    Contact_no:{
        type: String,
        unique:true
    },
    City:{
        type:String,
         required:true
    },
    Address:{
        type:String,
         required: true
    },
    Stores : [storeSchema],
    Verfication: {
        type:Boolean,
        default:false
    },
    Preferences:[{
        type:String
    }]

  });

  RetailersSchema.methods.setPassword = function(password) {
    this.salt = crypto.randomBytes(16).toString('hex');
    this.hash = crypto.pbkdf2Sync(password, this.salt, 10000, 512, 'sha512').toString('hex');
  };
  
  RetailersSchema.methods.validatePassword = function(password) {
    const hash = crypto.pbkdf2Sync(password, this.salt, 10000, 512, 'sha512').toString('hex');
    return this.hash === hash;
  };
  
  RetailersSchema.methods.generateJWT = function() {
    const today = new Date();
    const expirationDate = new Date(today);
    expirationDate.setDate(today.getDate() + 60);
  
    return jwt.sign({
      email: this.email,
      id: this._id,
      exp: parseInt(expirationDate.getTime() / 1000, 10),
    }, 'secret');
  }
  
  RetailersSchema.methods.toAuthJSON = function() {
    return {
      _id: this._id,
      email: this.email,
      token: this.generateJWT(),
    };
  };
  module.exports = mongoose.model('Retailer',RetailersSchema,'retailers');
 