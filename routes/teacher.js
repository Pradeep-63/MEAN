const express=require('express')
const { auth, RoleGuard} = require('../middlewares/roleGuard')
const { addClassAndUpdateTeacher, assignClassAndUpdateStudent, grade } = require('../controllers/teacherPanel')
const router=express.Router()
//class create by admin or teacher role only
router.post('/',auth,RoleGuard(['ADMIN','TEACHER']),addClassAndUpdateTeacher)
//assign student to class by admin or teacher role only
router.post('/:classId/students',auth,RoleGuard(['ADMIN','TEACHER']),assignClassAndUpdateStudent);
//grade can only assign by 
router.post('/grades',auth,RoleGuard(['TEACHER']),grade)
//communication

module.exports=router 