const user = require('../models/user');

const addUser= async(req,res)=>{
    try{
        const { firstName,lastName,email,password }= req.body;
        const response=await user.create({firstName,lastName,email,password});
        res.status(201).json({
            success:true,
            data:response,
            message:"user created succesful"
        })

    }catch(error){
        console.log(error);
        res.status(500).json({
            success:false,
            message:"internal server error"
        })
    }
   

}
const updateEmail=async (req,res)=>{
    try{
     const {updatedmail} =req.body;
     console.log(updatedmail);
     
     const users=await user.find({email:updateEmail})
     console.log(users);
    //await user.find({$and:[{_id:{$ne:ObjectId("objectid")}},{email:updatedemail}]})
     if(users.length){
        console.log("inside if");
        return res.status(401).json({
            success:false,
            message:"email already exit"
        })
     }
     else{
        await user.findByIdAndUpdate({_id:req.params.id},{$set:{email:updatedmail}})
     }

    }catch(error){
        console.log(error);
        res.status(500).json({
            success:false,
            message:"internal server error"
        })
    }
}
module.exports=updateEmail;
