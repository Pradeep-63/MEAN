const User=require('../models/userSchema')
const {StatusCodes}=require('http-status-codes');
const { apiResponse } = require('../utils/apiResponse');
const bcrypt=require('bcrypt')
const Jwt=require('jsonwebtoken');
require('dotenv').config()

//register
const user=async(req,res)=>{
    try {
        console.log("inside admin");
        const {name,email,password,role,classId=null,studentIds=null}=req.body;
        console.log(classId);
        console.log(name,email,password,role)
        const existingUser = await User.findOne({ email });

        if(existingUser){
            return res.status(409).json({
                message:"user already exists"
            })
        }
        //password hasing 
        let hashPassword;
        try {
            hashPassword=await bcrypt.hash(password,10)
        } catch (error) {
        return apiResponse(res,StatusCodes.BAD_REQUEST,"error in hasing password") 
        }
    
        //save user in database
        const createdUser=await User.create({
            name,
            email,
            password:hashPassword,
            role,
            classId,
            studentIds
        })
    
        res.status(201).json({
            data:createdUser,
            message:"user created successfully"
        })    
        
    } catch (error) {
        console.log(error);
        return apiResponse(res,StatusCodes.INTERNAL_SERVER_ERROR,error.message)
    }
}
//login
const login=async(req,res)=>{
    try {
    const {email,password}=req.body;
    console.log(email,password);
    const user=await User.findOne({email}).lean();
    
    if(!user){
        return apiResponse(res,StatusCodes.NOT_FOUND,"please sign up before login") 
    }
    const payLoad={
        id:user._id,
        role:user.role
    }
    
    if(await bcrypt.compare(password,user.password)){
        const token=Jwt.sign(payLoad,process.env.SECRET_KEY,{expiresIn:'1h'})
        console.log(token);
        const options={
            httpOnly:true,
            secure:true
        }
        user.password=undefined
        user.token=token
        console.log(user);
        res.cookie("token",token,options).status(200).json({
            status:200,
            token,
            message:"user loggedIn successfully"
        })
        
    }
    else{
        return apiResponse(res,StatusCodes.BAD_REQUEST,"incorrect password")
    }
    } catch (error) {
        apiResponse(res,StatusCodes.INTERNAL_SERVER_ERROR,"please login after some time")
    }
}
//admin update user
const updateUser=async(req,res)=>{
    try {
        try {
            const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
            if (!user) {
                apiResponse(res,StatusCodes.NOT_FOUND,"user not found")
            }
            apiResponse(res,StatusCodes.OK,"user updated succesfully",user)
        } catch (error) {
            apiResponse(res,StatusCodes.BAD_REQUEST,"please provide valid details")
        }
    } catch (error) {
        apiResponse(res,StatusCodes.INTERNAL_SERVER_ERROR,error.message)
    }
}
//admin delete user
const deleteUser=async(req,res)=>{
    try {
        try {
            const user = await User.findByIdAndDelete(req.params.id);
            if (!user) {
                apiResponse(res,StatusCodes.NOT_FOUND,"user not found")
            }
            apiResponse(res,StatusCodes.NO_CONTENT,"user deleted succesfully")
        } catch (error) {
            apiResponse(res,StatusCodes.BAD_REQUEST,error.message)
        }
    } catch (error) {
        apiResponse(res,StatusCodes.INTERNAL_SERVER_ERROR,error.message)
    }
}
const getAllUser=async(req,res)=>{
    try {
    const {role,name,email,limit = 5, page = 1 } = req.query;
    const sort=parseInt(req.query.sort)|| 1;
    let matchStage = {}
    if (role) matchStage.role= { $regex: role, $options: 'i' };
    if (name) matchStage.name = { $regex: name, $options: 'i' };
    if (email) matchStage.email = { $regex: email, $options: 'i' };
    const countPipeline = [
      { $match: matchStage },
      { $count: 'totalRecords'}
   ];
  const countResult = await User.aggregate(countPipeline);
  const totalRecords = countResult.length > 0 ? countResult[0].totalRecords : 0;
  const totalPages = Math.ceil(totalRecords / limit);
   if(page>totalPages){
     return apiResponse(res,StatusCodes.NOT_FOUND,"page not found")
   } 
    const usersPipeline = [
      { $match: matchStage },
      { $sort: { name:sort  } },
      { $skip: (page - 1) * limit },
      { $limit: limit }
     ];
    const userData = await User.aggregate(usersPipeline);
    res.status(200).json({
        status:200,
        message:"user fetched successfully",
        page,
        userData,
        totalPages
    })
    } catch (error) {
        return apiResponse(res,StatusCodes.INTERNAL_SERVER_ERROR,"something went wrong please try after sometime")
    }
}
const getUserById=async(req,res)=>{
    try {
        const userData=await User.findById(req.params.id)
        if(!userData){
            return apiResponse(res,StatusCodes.NOT_FOUND,"this userId does not exist")
        }
        apiResponse(res,StatusCodes.OK,"user data fetched succesfully",userData,null)
    } catch (error) {
        return apiResponse(res,StatusCodes.INTERNAL_SERVER_ERROR,"something went wrong please try after sometime")
    }
}
module.exports={
    user,
    login,
    updateUser,
    deleteUser,
    getAllUser,
    getUserById
}

