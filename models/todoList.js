const mongoose=require('mongoose');
const todoListSchema=new mongoose.Schema({
     userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user"
     },
     title:{
        type:String,
        required:true,
        trim:true
     },
     description:{
        type:String,
        required:true,
        trim:true
     },
     isCompleted:{
        type:Boolean,
        require:true,
        default:false
     }
})
module.exports=mongoose.model("todoList",todoListSchema)