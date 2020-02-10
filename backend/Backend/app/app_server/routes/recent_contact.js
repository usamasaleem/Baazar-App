var express = require('express');
var router = express.Router();


var recent_contactController  =   require('../controller/recent_contact_controller')

router.get   ('/'             ,    recent_contactController.view_all_recent_contact);

router.get   ('/:name'        ,    recent_contactController.view_recent_contact    );

router.post  ('/add'          ,    recent_contactController.add_recent_contact     );

router.put   ('/update/:id'   ,    recent_contactController.update_recent_contact  );

router.delete('/delete/:id'   ,    recent_contactController.delete_recent_contact  );


module.exports = router;
