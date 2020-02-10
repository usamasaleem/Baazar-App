var mongoose = require('mongoose');

var consumer_schema = new mongoose.Schema({

    id: {
        type: String,
        required: true,
        unique: true

    },
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,

    },
    password : {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,

    },
    address: {
        type: String,
        required: true,
    },
    number: {
        type: String,
        required: true,

    },
    loggedInStatus: {
        type: Boolean,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    verified: {
        type: Boolean,
        required: true,

    }
});



var consumer = mongoose.model('consumers', consumer_schema);

module.exports = consumer;

