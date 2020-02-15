var express = require('express');
var router = express.Router();


var delivererController  =   require('../controller/deliverer_controller')

router.get   ('/'             ,    delivererController.view_all_deliverer);

router.get   ('/:name'        ,    delivererController.view_deliverer    );

router.post  ('/add'          ,    delivererController.add_deliverer     );

router.put   ('/update/:id'   ,    delivererController.update_deliverer  );

router.delete('/delete/:id'   ,    delivererController.delete_deliverer  );

router.post  ('/login'      ,      delivererController.login           );



module.exports = router;
