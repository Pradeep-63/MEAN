const mongoose = require("mongoose");

const Status=new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
     title:{
        type:String,
        required:true 
     },
     description: {type: String, required: true},
     isCompleted: {type: Boolean, required: false, default: false
        
     }



},{timestamps: true})
module.exports=mongoose.model("status",Status)