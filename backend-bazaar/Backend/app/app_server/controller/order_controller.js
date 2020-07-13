var order_schema = require('../models/order_model')
var session = require('express-session');
var order_controller = {

    add_order: (req, res) => {
console.log(req.body)
        var order = new order_schema(req.body);
        
        order.save((err,data) => {
            if (err) {
                       res.status(500)
                       res.send("Failed to add"+err);
                     }

            else     {
                       res.status(200);
                       res.json(data);
                     }

        });

    },

    update_order: (req, res, next) => {
        console.log(req.body)
        order_schema.updateMany({"orderID":req.params.id.toString(),
       
        "stores":session.StoreID.toString()},
        req.body,{ new: true },(err, todo) => {
            
                if (err)   { 
                            res.status(500);
                            res.end("Failed to Update");
                           }

                if (!todo) {
                            res.status(404)
                            res.end("order does not exist")
                           }

                else       {
                            res.status(200);
                            res.json(todo);
                           }

            })


    },

    delete_order: (req, res, next) => {

        order_schema.findByIdAndRemove(req.params.id,(err,doc)=>{

            if(err)    {
                        res.status(500);
                        res.end("Failed to Delete");
                       } 

            if (!doc)  {
                        res.status(404);
                        res.end("order does not exist");
                       } 

            else       {
                        res.status(200);
                        res.end("Successfully deleted");
                       }

        })

    },

    view_order: (req, res) => {

        if(req.params.name=='pending'){
            var pending=false;
        }
        order_schema.findOne({ 'status': pending}, function (err, doc) {
            
            if (err)  {
                       res.status("500");
                       res.end("failed to view");
                      }

            if (!doc) { 
                       res.status(404); 
                       res.send("No order exist"); 
                      }

            else      {
                       res.status(200); 
                       res.json(doc);
                      }
        });


    },

    view_all_order: (req, res, next) => {
        console.log(req.query)
        order_schema.find({}).sort('date').exec(function(error, results) {
            if (error) {
                return next(error);
            }

           
            // Respond with valid data
            res.json(results);
        })

    },

  

    todaySale: (req, res, next) => {
console.log(session.StoreID)
        order_schema
   
       
        .aggregate([
           
            {$match:{stores: {$eq:session.StoreID.toString()},
            checkout: {$eq:false}
        
        }}
        ,
         {$group:{_id:{
             date:"$date",
             userID:"$userID",
             userName:"$userName",
             orderID:"$orderID"
         }}},
         {$sort: {date: -1}}
          
           ],function(error, results) {
            if (error) {
                return next(error);
            }

           
            // Respond with valid data
            res.json(results);
        })

    },
    

    order: (req, res, next) => {

        console.log(req.query)
        order_schema.find({"userID":req.query.id.toString(),
        "date":req.query.date.toString(),
        "stores":session.StoreID.toString(),
        "checkout":false,
        "orderID":req.query.orderID.toString()
        
    }).exec(function(error, results) {
            if (error) {
                return next(error);
            }

           
            // Respond with valid data
            res.json(results);
        })


    },

    stripe: (req,res)=>{

        const stripe = require("stripe")("sk_test_HCShLCTnWQZR5ewTwaA9FihA00h40oO8oS");

            stripe.transfers.create(
            {
                amount: req.body.amount *100,
                currency: 'usd',
                destination: req.body.id,
                transfer_group: 'ORDER_95',
            },
            function(err, transfer) {
                if(err){
                    res.json(err)
                }
                res.json(transfer)
            }
);

    },

    makeStripeUser: (req,res)=>{

    var stripe = require('stripe')('sk_test_HCShLCTnWQZR5ewTwaA9FihA00h40oO8oS');

        stripe.accounts.create(
        {
            type: 'custom',
            business_profile:{
                name:'Shah Mart',
            },
            business_type: "individual",
            tos_acceptance: {
                    date: Math.floor(Date.now() / 1000),
                    ip: "172.18.80.19", // Assumes you're not using a proxy
                    },
                
            email: 'shahimart@gmail.com',
            requested_capabilities: [
            'card_payments',
            'transfers',
            ],
        },
        function(err, account) {
            if(err){
                res.json(err)
            }
            res.json(account)
        }
        );

} 

}

module.exports = order_controller