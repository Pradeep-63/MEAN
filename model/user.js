const mongoose = require("mongoose");

const User=new mongoose.Schema({
   firstName: {type: String, required: true},
   lastName: {type: String, required: true},
   email: {type: String, required: true,unique:true},
   contactNumber: {type: String, required: true},
   password: {type: String, required: true},
   dateOfBirth: {type:Date,required:true}

}, {timestamps: true})
module.exports=mongoose.model("user",user)