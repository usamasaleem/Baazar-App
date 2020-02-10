var mongoose = require('mongoose');

var review_schema = new mongoose.Schema({

    title                     : {  type: String  ,  required: true   },     
    description               : {  type: String  ,  required: true   },     
    full_name                 : {  type: String  ,  required: true   },     
    email                     : {  type: String  ,  required: true   },     
    stars                     : {  type: Number  ,  required: true   },     
    created_date           : {  type: String  ,  required: true   },
    modified_date          : {  type: String  ,  required: true   },

});

var review = mongoose.model('reviews', review_schema);

module.exports = review;

