var express = require('express');
var router = express.Router();


var companyController  =   require('../controller/company_controller')

router.get   ('/'             ,    companyController.view_all_company);

router.get   ('/:name'        ,    companyController.view_company    );

router.post  ('/add'          ,    companyController.add_company     );

router.put   ('/update/:id'   ,    companyController.update_company  );

router.delete('/delete/:id'   ,    companyController.delete_company  );

router.post  ('/login'      ,      companyController.login           );



module.exports = router;
