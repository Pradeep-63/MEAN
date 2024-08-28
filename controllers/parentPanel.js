const { StatusCodes } = require('http-status-codes');
const Communication=require('../models/communicationSchema');
const Grade=require('../models/gradeSchema');
const { apiResponse } = require('../utils/apiResponse');
const User = require('../models/userSchema');
const { default: mongoose } = require('mongoose');
function transformData(inputData) {
  // Extract parent details
  const parentDetails = {
    name: inputData[0].name,
    email: inputData[0].email,
    role: inputData[0].role
  };

  inputData[0].classGrades.forEach(element => {
      console.log(element.studentId);
  });
  const childrens = inputData[0].childrenDetails.map(child => {
    console.log(child._id);
    const childClasses = inputData[0].classGrades.filter(grade => grade.studentId.toString() === child._id.toString())
      .map(classGrade => ({
      name: classGrade.subject,
      grades: classGrade.grade
    }));
    
    return {
      name: child.name,
      class: childClasses
    };
  });
  return {
    parentDetails,
    childrens
  };
}

//parent can view their childs grade
const getChildrenGrade=async (req,res)=>{
    try {
      
         const userData=await User.aggregate([
            {
                $match: {
                  _id:new mongoose.Types.ObjectId(req.user.id)
                }
              },
              {
                $lookup: {
                  from: "users",
                  localField: "studentIds",
                  foreignField: "_id",
                  as: "childrenDetails"
                }
              },
              {
               
                $lookup: {
                  from: "grades",
                  localField: "childrenDetails._id",
                  foreignField: "studentId",
                  as: "classGrades"
                }
              }
              
         ])
         const result=transformData(userData)
         
         
        apiResponse(res,StatusCodes.OK,"grade fetched succesfully",result)
    } catch (error) {
        
    }
}
//communications between parent and teacher
const parentAndTeacherCommunication=async(req,res)=>{
    try {
        try {
            const message = new Communication(req.body);
            await message.save();
            res.status(201).json(message);
        } catch (error) {
            return apiResponse(res,StatusCodes.BAD_REQUEST,error.message)
        }
    }catch (error) {
       apiResponse(res,StatusCodes.INTERNAL_SERVER_ERROR,"please try after some time") 
    }
}
module.exports={
    parentAndTeacherCommunication,
    getChildrenGrade
   }