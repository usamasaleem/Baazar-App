var mongoose = require('mongoose');
var Retailer=require('../models/retailers.model.js')
var Schema = mongoose.Schema;



var ProductsSchema = new mongoose.Schema({

    Name:{
        type: String,
        // required:true
    },
    Discription:{
        type: String,
        // required:true
    },
    Brand : {
      type : String,
    //   required : true,
      unique:true
      
    },
    Price: {
        type: String,
        // required: true,
      },
    Quantity:{
        type: String,
        
    },
    store_id: {type: Schema.Types.ObjectId, ref: 'Retailer'}

  });
  module.exports = mongoose.model('Product',ProductsSchema,'products');
  