var mongoose = require('mongoose');

var job_schema = new mongoose.Schema({

    title                  : {  type: String  ,  required: true   },
    description            : {  type: String  ,  required: true   },    
    type                   : {  type: String  ,  required: true   },    
    hourly_rate            : {  type: String  ,  required: true   },    
    buissness_id           : {  type: String  ,  required: true   },   
    created_date           : {  type: String  ,  required: true   },
    modified_date          : {  type: String  ,  required: true   }, 
    
});

var job = mongoose.model('jobs', job_schema);

module.exports = job;

