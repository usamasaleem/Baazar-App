var recent_contact_schema = require('../models/recent_contact_model');

var recent_contact_controller = {

    add_recent_contact: (req, res) => {

        var recent_contact = new recent_contact_schema(req.body);

        recent_contact.save((err) => {
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

    update_recent_contact: (req, res, next) => {

        recent_contact_schema.findByIdAndUpdate(req.params.id,req.body,{ new: true },(err, todo) => {
            
                if (err)   { 
                            res.status(500);
                            res.end("Failed to Update");
                           }

                if (!todo) {
                            res.status(404)
                            res.end("recent_contact does not exist")
                           }

                else       {
                            res.status(200);
                            res.json(todo);
                           }

            })


    },

    delete_recent_contact: (req, res, next) => {

        recent_contact_schema.findByIdAndRemove(req.params.id,(err,doc)=>{

            if(err)    {
                        res.status(500);
                        res.end("Failed to Delete");
                       } 

            if (!doc)  {
                        res.status(404);
                        res.end("recent_contact does not exist");
                       } 

            else       {
                        res.status(200);
                        res.end("Successfully deleted");
                       }

        })

    },

    view_recent_contact: (req, res) => {

        recent_contact_schema.findOne({ 'full_name': req.params.name }, function (err, doc) {
            
            if (err)  {
                       res.status("500");
                       res.end("failed to view");
                      }

            if (!doc) { 
                       res.status(404); 
                       res.send("No recent_contact exist"); 
                      }

            else      {
                       res.status(200); 
                       res.json(doc);
                      }
        });


    },

    view_all_recent_contact: (req, res, next) => {

        let sort_by = req.recent_contact.sort_by;
        if( sort_by== undefined) sort_by ='title';

        recent_contact_schema.find({}, (err, doc) => {

            if (err)   {
                        res.status(500);
                        res.end("Failed to get recent_contacts");
                       } 
           
            if (!doc)  {
                        res.status(404);
                        res.end("No recent_contact exist");
                       }
           
            else       {
                        res.status(200);
                        res.json(doc);
                       }

        }).sort(sort_by)
    
    },


    

}

module.exports = recent_contact_controller