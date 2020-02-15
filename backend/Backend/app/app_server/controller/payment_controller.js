<<<<<<< HEAD:backend/Backend/app/app_server/controller/company_controller.js
var product_schema = require('../models/product_model')

var product_controller = {

    add_product: (req, res) => {

        var product = new product_schema(req.body);

        product.save((err) => {
=======
var payment_schema = require('../models/payment_model')

var payment_controller = {

    add_payment: (req, res) => {

        var payment = new payment_schema(req.body);

        payment.save((err) => {
>>>>>>> 17253fdaf3adc07f8dcff56b6049dfaec8a5d2e7:backend/Backend/app/app_server/controller/payment_controller.js
            if (err) {
                       res.status(500)
                       res.send("Failed to add");
                     }

            else     {
                       res.status(200);
                       res.end("Successfully added");
                     }

        });

    },

<<<<<<< HEAD:backend/Backend/app/app_server/controller/company_controller.js
    update_product: (req, res, next) => {

        product_schema.findByIdAndUpdate(req.params.id,req.body,{ new: true },(err, todo) => {
=======
    update_payment: (req, res, next) => {

        payment_schema.findByIdAndUpdate(req.params.id,req.body,{ new: true },(err, todo) => {
>>>>>>> 17253fdaf3adc07f8dcff56b6049dfaec8a5d2e7:backend/Backend/app/app_server/controller/payment_controller.js
            
                if (err)   { 
                            res.status(500);
                            res.end("Failed to Update");
                           }

                if (!todo) {
                            res.status(404)
<<<<<<< HEAD:backend/Backend/app/app_server/controller/company_controller.js
                            res.end("product does not exist")
=======
                            res.end("payment does not exist")
>>>>>>> 17253fdaf3adc07f8dcff56b6049dfaec8a5d2e7:backend/Backend/app/app_server/controller/payment_controller.js
                           }

                else       {
                            res.status(200);
                            res.json(todo);
                           }

            })


    },

<<<<<<< HEAD:backend/Backend/app/app_server/controller/company_controller.js
    delete_product: (req, res, next) => {

        product_schema.findByIdAndRemove(req.params.id,(err,doc)=>{
=======
    delete_payment: (req, res, next) => {

        payment_schema.findByIdAndRemove(req.params.id,(err,doc)=>{
>>>>>>> 17253fdaf3adc07f8dcff56b6049dfaec8a5d2e7:backend/Backend/app/app_server/controller/payment_controller.js

            if(err)    {
                        res.status(500);
                        res.end("Failed to Delete");
                       } 

            if (!doc)  {
                        res.status(404);
<<<<<<< HEAD:backend/Backend/app/app_server/controller/company_controller.js
                        res.end("product does not exist");
=======
                        res.end("payment does not exist");
>>>>>>> 17253fdaf3adc07f8dcff56b6049dfaec8a5d2e7:backend/Backend/app/app_server/controller/payment_controller.js
                       } 

            else       {
                        res.status(200);
                        res.end("Successfully deleted");
                       }

        })

    },

<<<<<<< HEAD:backend/Backend/app/app_server/controller/company_controller.js
    view_product: (req, res) => {

        product_schema.findOne({ 'full_name': req.params.name }, function (err, doc) {
=======
    view_payment: (req, res) => {

        payment_schema.findOne({ 'full_name': req.params.name }, function (err, doc) {
>>>>>>> 17253fdaf3adc07f8dcff56b6049dfaec8a5d2e7:backend/Backend/app/app_server/controller/payment_controller.js
            
            if (err)  {
                       res.status("500");
                       res.end("failed to view");
                      }

            if (!doc) { 
                       res.status(404); 
<<<<<<< HEAD:backend/Backend/app/app_server/controller/company_controller.js
                       res.send("No product exist"); 
=======
                       res.send("No payment exist"); 
>>>>>>> 17253fdaf3adc07f8dcff56b6049dfaec8a5d2e7:backend/Backend/app/app_server/controller/payment_controller.js
                      }

            else      {
                       res.status(200); 
                       res.json(doc);
                      }
        });


    },

<<<<<<< HEAD:backend/Backend/app/app_server/controller/company_controller.js
    view_all_product: (req, res, next) => {
=======
    view_all_payment: (req, res, next) => {
>>>>>>> 17253fdaf3adc07f8dcff56b6049dfaec8a5d2e7:backend/Backend/app/app_server/controller/payment_controller.js

        let sort_by = req.query.sort_by;
        if( sort_by== undefined) sort_by ='full_name';

<<<<<<< HEAD:backend/Backend/app/app_server/controller/company_controller.js
        product_schema.find({}, (err, doc) => {

            if (err)   {
                        res.status(500);
                        res.end("Failed to get products");
=======
        payment_schema.find({}, (err, doc) => {

            if (err)   {
                        res.status(500);
                        res.end("Failed to get payments");
>>>>>>> 17253fdaf3adc07f8dcff56b6049dfaec8a5d2e7:backend/Backend/app/app_server/controller/payment_controller.js
                       } 
           
            if (!doc)  {
                        res.status(404);
<<<<<<< HEAD:backend/Backend/app/app_server/controller/company_controller.js
                        res.end("No product exist");
=======
                        res.end("No payment exist");
>>>>>>> 17253fdaf3adc07f8dcff56b6049dfaec8a5d2e7:backend/Backend/app/app_server/controller/payment_controller.js
                       }
           
            else       {
                        res.status(200);
                        res.json(doc);
                       }

        }).sort(sort_by)
    
    },

    login: (req, res, next) => {

<<<<<<< HEAD:backend/Backend/app/app_server/controller/company_controller.js
        product_schema.findOne({ 'email': req.body.email, 'password': req.body.password }, function (err, result) {
=======
        payment_schema.findOne({ 'email': req.body.email, 'password': req.body.password }, function (err, result) {
>>>>>>> 17253fdaf3adc07f8dcff56b6049dfaec8a5d2e7:backend/Backend/app/app_server/controller/payment_controller.js

            if (err)     {
                            res.status(500);
                            res.end("");
                          }

            if (!result)  {
                              res.status(404);
<<<<<<< HEAD:backend/Backend/app/app_server/controller/company_controller.js
                              res.send("product does not exist");
=======
                              res.send("payment does not exist");
>>>>>>> 17253fdaf3adc07f8dcff56b6049dfaec8a5d2e7:backend/Backend/app/app_server/controller/payment_controller.js
                          }

            else            {
                              res.status(200);
<<<<<<< HEAD:backend/Backend/app/app_server/controller/company_controller.js
                              res.send("product exist");
=======
                              res.send("payment exist");
>>>>>>> 17253fdaf3adc07f8dcff56b6049dfaec8a5d2e7:backend/Backend/app/app_server/controller/payment_controller.js
                            }

        });

    }

    

}

<<<<<<< HEAD:backend/Backend/app/app_server/controller/company_controller.js
module.exports = product_controller
=======
module.exports = payment_controller
>>>>>>> 17253fdaf3adc07f8dcff56b6049dfaec8a5d2e7:backend/Backend/app/app_server/controller/payment_controller.js
