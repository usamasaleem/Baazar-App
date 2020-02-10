var user_schema = require('../models/user_model')

var user_controller = {

    add_user: (req, res) => {

        var user = new user_schema(req.body);

        user.save((err) => {
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

    update_user: (req, res, next) => {

        user_schema.findByIdAndUpdate(req.params.id,req.body,{ new: true },(err, todo) => {
            
                if (err)   { 
                            res.status(500);
                            res.end("Failed to Update");
                           }

                if (!todo) {
                            res.status(404)
                            res.end("user does not exist")
                           }

                else       {
                            res.status(200);
                            res.json(todo);
                           }

            })


    },

    delete_user: (req, res, next) => {

        user_schema.findByIdAndRemove(req.params.id,(err,doc)=>{

            if(err)    {
                        res.status(500);
                        res.end("Failed to Delete");
                       } 

            if (!doc)  {
                        res.status(404);
                        res.end("user does not exist");
                       } 

            else       {
                        res.status(200);
                        res.end("Successfully deleted");
                       }

        })

    },

    view_user: (req, res) => {

        user_schema.findOne({ 'full_name': req.params.name }, function (err, doc) {
            
            if (err)  {
                       res.status("500");
                       res.end("failed to view");
                      }

            if (!doc) { 
                       res.status(404); 
                       res.send("No user exist"); 
                      }

            else      {
                       res.status(200); 
                       res.json(doc);
                      }
        });


    },

    view_all_user: (req, res, next) => {

        let sort_by = req.query.sort_by;
        if( sort_by== undefined) sort_by ='full_name';
      

        user_schema.find({}, (err, doc) => {

            if (err)   {
                        res.status(500);
                        res.end("Failed to get users");
                       } 
           
            if (!doc)  {
                        res.status(404);
                        res.end("No user exist");
                       }
           
            else       {
                        res.status(200);
                        res.json(doc);
                       }

        }).sort(sort_by)
    
    },

    login: (req, res, next) => {

        user_schema.findOne({ 'email': req.body.email, 'password': req.body.password }, function (err, result) {

            if (err)     {
                            res.status(500);
                            res.end("");
                          }

            if (!result)  {
                              res.status(404);
                              res.send("user does not exist");
                          }

            else            {
                              res.status(200);
                              res.send("user exist");
                            }

        });

    }

}

module.exports = user_controller