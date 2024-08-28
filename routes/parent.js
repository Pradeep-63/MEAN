const express=require('express')
const {auth,RoleGuard} = require('../middlewares/roleGuard')
const {parentAndTeacherCommunication, getChildrenGrade} = require('../controllers/parentPanel')
const router=express.Router()
//communications
router.post('/communications',auth,RoleGuard(['PARENT','TEACHER']),parentAndTeacherCommunication)
//
router.get('/grade',auth,RoleGuard(['PARENT']),getChildrenGrade)
module.exports=router