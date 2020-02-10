var mongoose = require('mongoose');

var order_schema = new mongoose.Schema({

    id: {
        type: String,
        required: true,
        unique: true
    },
    consumer: {
        type: consumerSchema,
        required: true
    },

    retailer: {
        type: retailerSchema,
        required: true
    },
    deliverer: {
        type: delivererSchema,
        required: true
    },
    cart: {
        type: shoppingCartSchema,
        required: true
    },
    status: {
        type: Boolean,
        required: true
    },
    orderPlaced: {
        type: Date,
        required: true
    },
    orderDelivererd: {
        type: Date,
        required: true
    }


});





var order = mongoose.model('orders', order_schema);

module.exports = order;

