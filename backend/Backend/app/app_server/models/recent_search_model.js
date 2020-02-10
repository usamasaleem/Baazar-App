var mongoose = require('mongoose');

var recent_search_schema = new mongoose.Schema({
    buissness_id                     : {  type: String  ,  required: true   },     
    user_id                          : {  type: String  ,  required: true   },     
    date                             : {  type: String  ,  required: true   },     
});

var query = mongoose.model('recent_contact', recent_search_schema);

module.exports = query;

