const User=require('../model/user')
const createUser= async(req,res)=>{
    try{
        const { userName,email,password }=req.body;
        const response=await User.create({userName,email,password});
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
const getAllUser=async (req,res)=>{
    try{
     const response= await User.find();
     res.status(200).json({
        success:true,
        data:response,
        message:"all users fetched succesfully"
     })

    }catch(error){
        console.log(error);
        res.status(500).json({
            success:false,
            message:"internal server error"
        })
    }
}
module.exports=createUser;
