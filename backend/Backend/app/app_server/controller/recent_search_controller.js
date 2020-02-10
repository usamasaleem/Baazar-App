var recent_search_schema = require('../models/recent_search_model');

var recent_search_controller = {

    add_recent_search: (req, res) => {

        var recent_search = new recent_search_schema(req.body);

        recent_search.save((err) => {
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

    update_recent_search: (req, res, next) => {

        recent_search_schema.findByIdAndUpdate(req.params.id,req.body,{ new: true },(err, todo) => {
            
                if (err)   { 
                            res.status(500);
                            res.end("Failed to Update");
                           }

                if (!todo) {
                            res.status(404)
                            res.end("recent_search does not exist")
                           }

                else       {
                            res.status(200);
                            res.json(todo);
                           }

            })


    },

    delete_recent_search: (req, res, next) => {

        recent_search_schema.findByIdAndRemove(req.params.id,(err,doc)=>{

            if(err)    {
                        res.status(500);
                        res.end("Failed to Delete");
                       } 

            if (!doc)  {
                        res.status(404);
                        res.end("recent_search does not exist");
                       } 

            else       {
                        res.status(200);
                        res.end("Successfully deleted");
                       }

        })

    },

    view_recent_search: (req, res) => {

        recent_search_schema.findOne({ 'full_name': req.params.name }, function (err, doc) {
            
            if (err)  {
                       res.status("500");
                       res.end("failed to view");
                      }

            if (!doc) { 
                       res.status(404); 
                       res.send("No recent_search exist"); 
                      }

            else      {
                       res.status(200); 
                       res.json(doc);
                      }
        });


    },

    view_all_recent_search: (req, res, next) => {

        let sort_by = req.recent_search.sort_by;
        if( sort_by== undefined) sort_by ='title';

        recent_search_schema.find({}, (err, doc) => {

            if (err)   {
                        res.status(500);
                        res.end("Failed to get recent_searchs");
                       } 
           
            if (!doc)  {
                        res.status(404);
                        res.end("No recent_search exist");
                       }
           
            else       {
                        res.status(200);
                        res.json(doc);
                       }

        }).sort(sort_by)
    
    },


    

}

module.exports = recent_search_controller