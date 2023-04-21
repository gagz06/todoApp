const express = require('express');
const router = express.Router();
const homeController = require('../controllers/home_Controller');

router.get('/',homeController.home);


//for any further routes, access from here
//router.use('/router_name',require('./routerfile'));



module.exports = router;