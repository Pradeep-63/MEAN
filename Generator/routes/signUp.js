var express = require('express');
var router = express.Router();
const getsignup=require('../controller/singnup');
router.post('/signup',getsignup);
module.exports=router;