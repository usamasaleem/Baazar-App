var mongoose = require('mongoose');

var company_schema = new mongoose.Schema({

    full_name              : {  type: String  ,  required: true   },
    email                  : {  type: String  ,  required: true   },
    phone_no               : {  type: String  ,  required: true   },
    address                : {  type: String  ,  required: true   },
    industry               : {  type: String  ,  required: true   },
    products               : {  type: String  ,  required: true   },
    services               : {  type: String  ,  required: true   },  
    video                  : {  type: String  ,  required: false  },     
    employee_range         : {  type: Number  ,  required: false  },
    web_link               : {  type: String  ,  required: false  },
    twitter_link           : {  type: String  ,  required: false  },
    facebook_link          : {  type: String  ,  required: false  },
    linkedin_link          : {  type: String  ,  required: false  },
    services_description   : {  type: String  ,  required: true   },
    buissness_no           : {  type: String  ,  required: true   },
    verified_email         : {  type: Boolean ,  required: false  },
    rating                 : {  type: Number  ,  required: false  },
    location               : {  type: String  ,  required: true   },
    created_date           : {  type: String  ,  required: true   },
    modified_date          : {  type: String  ,  required: true   },
    status                 : {  type: String  ,  required: true   },
    images                 : [{ type: String  ,  required: false  }],
    tags                   : [{ type: String  ,  required: false  }],     
    contacted_admin        : [{ type: String  ,  required: false  }], 


});

var company = mongoose.model('companys', company_schema);

module.exports = company;

