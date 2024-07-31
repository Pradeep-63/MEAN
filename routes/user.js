import express from 'express'
import {getAllUser,getUserById,setUser,updateUserById,deleteUserById} from "../controller/userData.js"
const router=express.Router()
router.get('/users',getAllUser)
router.get('/users/:id',getUserById)
router.post('/users',setUser);
router.put('/users/:id',updateUserById)
router.delete('/users/:id',deleteUserById)
export default router