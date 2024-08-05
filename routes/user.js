const express=require('express')
const router=express.Router();
const User=require('../controller/user')
const getAllUser=require('../controller/user')
const status=require('../controller/statusController')
const emailHandler=require('../controller/checkemail')
router.post('/users',User);
router.post('/status',status)
router.put('/updateEmail/:id',emailHandler)
router.get('/users',getAllUser);
module.exports=router;