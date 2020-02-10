var job_schema = require('../models/job_model');

var job_controller = {

    add_job: (req, res) => {

        var job = new job_schema(req.body);

        job.save((err) => {
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

    update_job: (req, res, next) => {

        job_schema.findByIdAndUpdate(req.params.id,req.body,{ new: true },(err, todo) => {
            
                if (err)   { 
                            res.status(500);
                            res.end("Failed to Update");
                           }

                if (!todo) {
                            res.status(404)
                            res.end("job does not exist")
                           }

                else       {
                            res.status(200);
                            res.json(todo);
                           }

            })


    },

    delete_job: (req, res, next) => {

        job_schema.findByIdAndRemove(req.params.id,(err,doc)=>{

            if(err)    {
                        res.status(500);
                        res.end("Failed to Delete");
                       } 

            if (!doc)  {
                        res.status(404);
                        res.end("job does not exist");
                       } 

            else       {
                        res.status(200);
                        res.end("Successfully deleted");
                       }

        })

    },

    view_job: (req, res) => {

        job_schema.findOne({ 'full_name': req.params.name }, function (err, doc) {
            
            if (err)  {
                       res.status("500");
                       res.end("failed to view");
                      }

            if (!doc) { 
                       res.status(404); 
                       res.send("No job exist"); 
                      }

            else      {
                       res.status(200); 
                       res.json(doc);
                      }
        });


    },

    view_all_job: (req, res, next) => {

        let sort_by = req.query.sort_by;
        if( sort_by== undefined) sort_by ='title';

        job_schema.find({}, (err, doc) => {

            if (err)   {
                        res.status(500);
                        res.end("Failed to get jobs");
                       } 
           
            if (!doc)  {
                        res.status(404);
                        res.end("No job exist");
                       }
           
            else       {
                        res.status(200);
                        res.json(doc);
                       }

        }).sort(sort_by)
    
    },


    

}

module.exports = job_controller