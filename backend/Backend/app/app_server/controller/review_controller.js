var review_schema = require('../models/review_model')

var review_controller = {

    add_review: (req, res) => {

        var review = new review_schema(req.body);

        review.save((err) => {
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

    update_review: (req, res, next) => {

        review_schema.findByIdAndUpdate(req.params.id,req.body,{ new: true },(err, todo) => {
            
                if (err)   { 
                            res.status(500);
                            res.end("Failed to Update");
                           }

                if (!todo) {
                            res.status(404)
                            res.end("review does not exist")
                           }

                else       {
                            res.status(200);
                            res.json(todo);
                           }

            })


    },

    delete_review: (req, res, next) => {

        review_schema.findByIdAndRemove(req.params.id,(err,doc)=>{

            if(err)    {
                        res.status(500);
                        res.end("Failed to Delete");
                       } 

            if (!doc)  {
                        res.status(404);
                        res.end("review does not exist");
                       } 

            else       {
                        res.status(200);
                        res.end("Successfully deleted");
                       }

        })

    },

    view_review: (req, res) => {

        review_schema.findOne({ 'full_name': req.params.name }, function (err, doc) {
            
            if (err)  {
                       res.status("500");
                       res.end("failed to view");
                      }

            if (!doc) { 
                       res.status(404); 
                       res.send("No review exist"); 
                      }

            else      {
                       res.status(200); 
                       res.json(doc);
                      }
        });


    },

    view_all_review: (req, res, next) => {

        let sort_by = req.query.sort_by;
        if( sort_by== undefined) sort_by ='title';

        review_schema.find({}, (err, doc) => {

            if (err)   {
                        res.status(500);
                        res.end("Failed to get reviews");
                       } 
           
            if (!doc)  {
                        res.status(404);
                        res.end("No review exist");
                       }
           
            else       {
                        res.status(200);
                        res.json(doc);
                       }

        }).sort(sort_by)
    
    },

    

    

}

module.exports = review_controller