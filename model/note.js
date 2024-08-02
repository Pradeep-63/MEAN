const mongoose=require('mongoose')

const note=new mongoose.Schema({
    title:{type:String,required:true},
    description:{type:String,required:true},
    status:{type:Boolean,required:true},
    deadLine:{type:String,required:true},
    userId:{type:mongoose.Schema.Types.ObjectId,ref:"user"},
    noteCategory:{type:mongoose.Schema.Types.ObjectId,ref:"noteCategory"}
})
module.exports=mongoose.Schema("note",note)