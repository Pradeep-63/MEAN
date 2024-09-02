const User=require('../models/userSchema')
const Class=require('../models/classSchema')
const Grade=require('../models/gradeSchema')
const {StatusCodes}=require('http-status-codes');
const { apiResponse } = require('../utils/apiResponse');
const bcrypt=require('bcrypt')
const Jwt=require('jsonwebtoken');
require('dotenv').config() 
//admin or teacher 
const addClassAndUpdateTeacher=async(req,res)=>{
    try {
        try {
            // const newClass = new Class(req.body);
            // const savedClass=await newClass.save();
            const {name,teacherId}=req.body;
            const savedClass=await Class.create(name,teacherId)
            //update the classId in teacher
            await User.findByIdAndUpdate(teacherId,{classId:savedClass._id},{new:true})
            apiResponse(res,StatusCodes.CREATED,"class created succesfully",newClass)
        } catch (error) {
            apiResponse(res,StatusCodes.BAD_REQUEST,"invalid user details")
        }
    } catch (error) {
        apiResponse(res,StatusCodes.INTERNAL_SERVER_ERROR,"please try after some time")
    }
}  
//assign student 
const assignClassAndUpdateStudent=async(req,res)=>{
    try {
        try {
            const { classId } = req.params;
            const { studentId } = req.body;
    
            const classObj = await Class.findById(classId);
            if (!classObj) {
                return apiResponse(res,StatusCodes.NOT_FOUND,"class not found")
            }
    
            classObj.studentIds.push(studentId);
            await classObj.save();
            const student=await User.findByIdAndUpdate(studentId,{classId:classId},
                {new:true})
                console.log(student);
            res.status(200).json(classObj);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    } catch (error) {
        apiResponse(res,StatusCodes.INTERNAL_SERVER_ERROR,"please try after some times")
    }
}
//only teacher can set grade
const grade=async(req,res)=>{
    try {
        try {
            const grade = new Grade(req.body);
            await grade.save();
            res.status(201).json(grade);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    } catch (error) {
        apiResponse(res,StatusCodes.INTERNAL_SERVER_ERROR,"please try after some time")
    }
}
module.exports={
    addClassAndUpdateTeacher,
    assignClassAndUpdateStudent,
    grade
}