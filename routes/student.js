const express=require('express')
const { auth, RoleGuard } = require('../middlewares/roleGuard');
const {student} = require('../controllers/studentPanel');
const router=express.Router()
//student can view their grades
router.get('/students',auth,RoleGuard(['STUDENT']),student);
module.exports=router