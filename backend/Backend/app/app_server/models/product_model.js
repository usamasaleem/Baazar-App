var mongoose = require('mongoose');

var product_schema = new mongoose.Schema({

    id: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true
    },
    stock: {
        type: String,
        required: true,
        unique: true

    },
    price: {
        type: String,
        required: true,
    },
    category: {
        type: Object,
        required: true

    },
    description: {
        type: String,
        required: true

    }

});


var product = mongoose.model('products', product_schema);

module.exports = product;

