var express = require('express');
var router = express.Router();


var userController  =   require('../controller/user_controller')

router.get   ('/'           ,    userController.view_all_user  );

router.get   ('/:name'      ,    userController.view_user      );

router.post  ('/add'        ,    userController.add_user       );

router.put   ('/update/:id' ,    userController.update_user    );

router.delete('/delete/:id' ,    userController.delete_user    );

router.post  ('/login'      ,    userController.login          );



module.exports = router;
