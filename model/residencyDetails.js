const mongoose=require('mongoose')
const residencyDetails=new mongoose.Schema({
    city:{type:String,required:true},
    state:{type:String,required:true},
    zipCode:{type:Number,required:true},
    country:{type:String,required:true},
    userId:{type:mongoose.Schema.Types.ObjectId,ref:"user"}
})
module.exports=mongoose.model("residencyDetails",residencyDetails)