var company_schema = require('../models/company_model')

var company_controller = {

    add_company: (req, res) => {

        var company = new company_schema(req.body);

        company.save((err) => {
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

    update_company: (req, res, next) => {

        company_schema.findByIdAndUpdate(req.params.id,req.body,{ new: true },(err, todo) => {
            
                if (err)   { 
                            res.status(500);
                            res.end("Failed to Update");
                           }

                if (!todo) {
                            res.status(404)
                            res.end("company does not exist")
                           }

                else       {
                            res.status(200);
                            res.json(todo);
                           }

            })


    },

    delete_company: (req, res, next) => {

        company_schema.findByIdAndRemove(req.params.id,(err,doc)=>{

            if(err)    {
                        res.status(500);
                        res.end("Failed to Delete");
                       } 

            if (!doc)  {
                        res.status(404);
                        res.end("company does not exist");
                       } 

            else       {
                        res.status(200);
                        res.end("Successfully deleted");
                       }

        })

    },

    view_company: (req, res) => {

        company_schema.findOne({ 'full_name': req.params.name }, function (err, doc) {
            
            if (err)  {
                       res.status("500");
                       res.end("failed to view");
                      }

            if (!doc) { 
                       res.status(404); 
                       res.send("No company exist"); 
                      }

            else      {
                       res.status(200); 
                       res.json(doc);
                      }
        });


    },

    view_all_company: (req, res, next) => {

        let sort_by = req.query.sort_by;
        if( sort_by== undefined) sort_by ='full_name';

        company_schema.find({}, (err, doc) => {

            if (err)   {
                        res.status(500);
                        res.end("Failed to get companys");
                       } 
           
            if (!doc)  {
                        res.status(404);
                        res.end("No company exist");
                       }
           
            else       {
                        res.status(200);
                        res.json(doc);
                       }

        }).sort(sort_by)
    
    },

    login: (req, res, next) => {

        company_schema.findOne({ 'email': req.body.email, 'password': req.body.password }, function (err, result) {

            if (err)     {
                            res.status(500);
                            res.end("");
                          }

            if (!result)  {
                              res.status(404);
                              res.send("company does not exist");
                          }

            else            {
                              res.status(200);
                              res.send("company exist");
                            }

        });

    }

    

}

module.exports = company_controller