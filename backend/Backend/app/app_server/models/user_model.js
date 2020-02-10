var mongoose = require('mongoose');

var user_schema = new mongoose.Schema({

    full_name              : { type: String  ,  required: true    },
    email                  : { type: String  ,  required: true    },
    password               : { type: String  ,  required: true    },
    phone_no               : { type: String  ,  required: true    },
    verified_phone_no      : { type: Boolean ,  required: false   },
    verified_email         : { type: Boolean ,  required: false   },
    created_date           : {  type: String  ,  required: true   },
    modified_date          : {  type: String  ,  required: true   },
    status                 : {  type: String  ,  required: true   },
    contacted_companies    : [{type: String  ,  required:false    }],
    views                  : [{type: String  ,  required:false    }],
    clicks                 : [{type: String  ,  required:false    }],

});

var user = mongoose.model('users', user_schema);

module.exports = user;

