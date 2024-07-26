var express = require('express');
var router = express.Router();
const getController=require('../controller/discountHandler');
router.post('/getDiscount',getController);
module.exports = router;