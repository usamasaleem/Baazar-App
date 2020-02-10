var express = require('express');
var router = express.Router();


var queryController  =   require('../controller/query_controller')

router.get   ('/'             ,    queryController.view_all_query);

router.get   ('/:name'        ,    queryController.view_query    );

router.post  ('/add'          ,    queryController.add_query     );

router.put   ('/update/:id'   ,    queryController.update_query  );

router.delete('/delete/:id'   ,    queryController.delete_query  );


module.exports = router;
