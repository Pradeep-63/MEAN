var express = require('express');
var router = express.Router();
const getDiscountController=require('../controllers/getDiscount');
router.post('/getDiscount',getDiscountController);
module.exports = router;