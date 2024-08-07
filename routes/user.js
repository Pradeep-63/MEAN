const express=require('express')
const router=express.Router();
const {addUser,getAllUser,getUserById,updateUser,deleteUserById}=require('../controllers/user')

const validate=require('../middlewares/user')
router.post('/users',validate,addUser)
router.get('/users',getAllUser)
router.get('/users/:id',getUserById)
router.put('/users/:id',updateUser)
router.delete('/users/:id',deleteUserById)
module.exports=router