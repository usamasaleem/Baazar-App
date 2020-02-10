var mongoose = require('mongoose');

var deliverer_schema = new mongoose.Schema({

    id: {
        type: String,
        required: true,
        unique: true

    },
    cnic: {
        type: String,
        required: true,
        unique: true

    },
    liscenceNumber: {
        type: String,
        required: true,
        unique: true

    },
    availability: {
        type: Boolean,
    },
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,

    },
    password: {
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
    verified: {
        type: Boolean,
        required: true,

    },
});

var deliverer = mongoose.model('deliverers', deliverer_schema);

module.exports = deliverer;

