const express=require('express');
const router=express.Router();
const auth=require('../middleware/auth')
const profileAuth=require('../middleware/profileAuth');
const authController=require('../controller/auth');
const profileAuthController=require('../controller/profileAuth')
router.post('/test',auth,authController)
router.post('/profile',profileAuth,profileAuthController)
module.exports=router;