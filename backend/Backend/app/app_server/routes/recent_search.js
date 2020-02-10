var express = require('express');
var router = express.Router();


var recent_searchController  =   require('../controller/recent_search_controller')

router.get   ('/'             ,    recent_searchController.view_all_recent_search);

router.get   ('/:name'        ,    recent_searchController.view_recent_search    );

router.post  ('/add'          ,    recent_searchController.add_recent_search     );

router.put   ('/update/:id'   ,    recent_searchController.update_recent_search  );

router.delete('/delete/:id'   ,    recent_searchController.delete_recent_search  );


module.exports = router;
