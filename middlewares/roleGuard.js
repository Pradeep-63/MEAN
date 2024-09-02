const Jwt=require('jsonwebtoken')
const { apiResponse } = require('../utils/apiResponse')
const { StatusCodes } = require('http-status-codes')
const User = require('../models/userSchema')
require('dotenv').config()
const auth=async (req,res,next)=>{
    try {
        const token=req.header("Authorization").replace("Bearer ","")
        if(!token){
            return apiResponse(res,StatusCodes.UNAUTHORIZED,"token is missing",null,"token missing")
        }
        const decodedToken=Jwt.verify(token,process.env.SECRET_KEY)
        console.log(decodedToken);
        const user=await User.findById(decodedToken.id)
        req.user=decodedToken
        next()
        
    } catch (error) {
        apiResponse(res,StatusCodes.INTERNAL_SERVER_ERROR,error.message,null,error.message)
    }
}
//roleguard
function RoleGuard(allowedRoles) {
    return function (req, res, next) {
        const userRole = req.user.role; // Assuming req.user is set by an authentication middleware
        if (allowedRoles.includes(userRole)) {
            next(); // If the user's role is allowed, proceed to the next middleware
        } else {
            return apiResponse(res,StatusCodes.FORBIDDEN,"Access forbidden: insufficient rights")
        }
    };
}



module.exports={
    auth,
    RoleGuard
}