var express = require('express');
var router = express.Router();


var jobController  =   require('../controller/job_controller')

router.get   ('/'             ,    jobController.view_all_job);

router.get   ('/:name'        ,    jobController.view_job    );

router.post  ('/add'          ,    jobController.add_job     );

router.put   ('/update/:id'   ,    jobController.update_job  );

router.delete('/delete/:id'   ,    jobController.delete_job  );

module.exports = router;
