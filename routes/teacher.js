const express=require('express')
const { auth, RoleGuard} = require('../middlewares/roleGuard')
const { addClassAndUpdateTeacher, assignClassAndUpdateStudent, grade } = require('../controllers/teacherPanel')
const router=express.Router()
//class create by admin or teacher role only
router.post('/classes',auth,RoleGuard(['ADMIN','TEACHER']),addClassAndUpdateTeacher)
//assign student to class by admin or teacher role only
router.post('/classes/:classId',auth,RoleGuard(['ADMIN','TEACHER']),assignClassAndUpdateStudent);
//grade can only assign by teacher
router.post('/classes/grades',auth,RoleGuard(['TEACHER']),grade)
//communication

module.exports=router 