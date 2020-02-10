var mongoose = require('mongoose');

var query_schema = new mongoose.Schema({
    title                     : {  type: String  ,  required: true   },     
    description               : {  type: String  ,  required: true   },     
    user_id                   : {  type: String  ,  required: true   },     
    buissness_id              : {  type: String  ,  required: true   },     
    status                    : {  type: String  ,  required: true   },     
    created_date              : {  type: String  ,  required: true   },
    modified_date             : {  type: String  ,  required: true   },
});

var query = mongoose.model('querys', query_schema);

module.exports = query;

