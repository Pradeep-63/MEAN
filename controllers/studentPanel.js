const { StatusCodes } = require('http-status-codes');
const Grade=require('../models/gradeSchema');
const { apiResponse } = require('../utils/apiResponse');
const student=async(req,res)=>{
    try{
        const userData=await Grade.findOne({studentId:req.user.id})
        console.log(userData.grade);
        apiResponse(res,StatusCodes.OK,"student grade fetched succesfully")
    }catch (error) {
        apiResponse(res,StatusCodes.INTERNAL_SERVER_ERROR,error.message)
    }
}
module.exports={student}