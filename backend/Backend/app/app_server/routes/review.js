var express = require('express');
var router = express.Router();


var reviewController  =   require('../controller/review_controller')

router.get   ('/'           ,    reviewController.view_all_review  );

router.get   ('/:name'      ,    reviewController.view_review      );

router.post  ('/add'        ,    reviewController.add_review       );

router.put   ('/update/:id' ,    reviewController.update_review    );

router.delete('/delete/:id' ,    reviewController.delete_review    );




module.exports = router;
