const mongoose=require('mongoose')
const profesionalDetails=new mongoose.Schema({
    jobTitle:{type:String,required:true},
    companyName:{type:String,required:true},
    yearsOfExperience:{type:Number,required:true},
    userId:{type:mongoose.Schema.Types.ObjectId,ref:"user"}
})
module.exports=mongoose.model("profesionalDetails",profesionalDetails)