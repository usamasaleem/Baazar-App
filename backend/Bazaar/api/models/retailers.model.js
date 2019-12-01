var mongoose = require('mongoose');

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
        // required:true
    },
    L_name:{
        type: String,
        // required:true
    },
    email : {
      type : String,
    //   required : true,
      unique:true
      
    },
    Password: {
        type: String,
        default: null
        // required: true,
      },
    Contact_no:{
        type: String,
        
    },
    City:{
        type:String,
        // required:true
    },
    Address:{
        type:String,
        // required: true
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
  module.exports = mongoose.model('Retailer',RetailersSchema,'retailers');
 