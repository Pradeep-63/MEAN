//joi validation
const Joi=require('joi');
const { apiResponse } = require('../utils/apiResponse');
const { StatusCodes } = require('http-status-codes');
const signUpValidationSchema=Joi.object({
     name:Joi.string().trim().min(3).max(30).required().messages({
        'string.min': 'Name must be at least 3 characters long',
        'string.max': 'Name must not be greater than 30 characters',
        'string.empty': 'Name is required'
    }),
     email:Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com','in'] } }).required().messages({
        'string.empty':"email can't be empty"
     }),
     password:Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).message("password matched failed"),
     role: Joi.string().valid('ADMIN', 'TEACHER', 'STUDENT', 'PARENT').required().messages({
        'string.empty': "Role can't be empty.",
        'any.required': "Role is required.",
        'any.only': "Role must be one of ADMIN, TEACHER, STUDENT, or PARENT."
     }) 
})
const validateUserInputData=async(req, res, next) => {
    console.log("inside validatiom");
    console.log(req.body);
    const { error, value } =signUpValidationSchema.validate(req.body);
    if (error) {
        
        // return res.send("Invalid Request: " + JSON.stringify(error));
        //return apiResponse(res,StatusCodes.FORBIDDEN,"validation failed",'',error.details[0].message)
        return res.status(403).json({
            missingParams:error.details[0].path[0],
            message:error.details[0].message
        })
    } else {
        next()
    }
  };
  module.exports={validateUserInputData}