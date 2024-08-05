const express=require('express')
const router=express.Router();
const user=require('../controllers/user')
const updateEmail=require('../controllers/user')
router.post('/users',user)
router.put('/users/:id',updateEmail)
module.exports=router