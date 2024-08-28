const express=require('express')
const router=express.Router()
const { user, login, updateUser, deleteUser, getUserById, getAllUser,  } = require('../controllers/adminPanel')
const { auth, RoleGuard } = require('../middlewares/roleGuard')
router.post('/',user)
router.post('/login',login)
//admin can create user 
router.post('/admin',auth,RoleGuard(['ADMIN']),user)
//admin can update user
router.put('/admin/:id',auth,RoleGuard(['ADMIN']),updateUser)
//admin can delete user
router.delete('/admin/:id',auth,RoleGuard(['ADMIN']),deleteUser)
//get user by id
router.get('/admin/:id',auth,RoleGuard(['ADMIN']),getUserById)
//get all user details
router.get('/admin',auth,RoleGuard(['ADMIN']),getAllUser)
module.exports=router