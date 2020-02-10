var express = require('express');
var router = express.Router();


var shoppingCartController  =   require('../controller/shoppingCart_controller')

router.get   ('/'             ,    shoppingCartController.view_all_shoppingCart);

router.get   ('/:name'        ,    shoppingCartController.view_shoppingCart    );

router.post  ('/add'          ,    shoppingCartController.add_shoppingCart     );

router.put   ('/update/:id'   ,    shoppingCartController.update_shoppingCart  );

router.delete('/delete/:id'   ,    shoppingCartController.delete_shoppingCart  );

router.post  ('/login'      ,      shoppingCartController.login           );



module.exports = router;
