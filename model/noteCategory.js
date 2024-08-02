const mongoose=require('mongoose');
const noteCategory=new mongoose.Schema({
    noteTypeName:{type:String,required:true},
    note:{type:mongoose.Schema.Types.ObjectId,ref:"note"},
})
module.exports=mongoose.model("noteCategory",noteCategory)