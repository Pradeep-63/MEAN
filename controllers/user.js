
const user=require('../models/user')
const {validationResult}=require('express-validator')
const addUser= async(req,res)=>{
    try{
        
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ 
                    success: false, 
                    errors: errors.array() 
                });
            }
        const { firstName,lastName,email,password, contactNo }= req.body;
        const createdUser=await user.create({firstName,lastName,email,password,contactNo});
        if(!createdUser){
            return res.status(404).json({
                success:false,
                message:"something went wrong"
            })
        }
        res.status(201).json({
            success:true,
            data:createdUser,
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
const getUserById=async (req,res)=>{
      try {
        
         const userId=req.params.id;
         const userData=await user.findById(userId)
         if(!userData){
            return res.status(404).json({
                success:false,
                message:"user id does not exit"
            })
         }
         res.status(200).json({
            success:true,
            data:userData,
            message:"user fetched succesfully"
         })
      } catch (error) {
        console.log(error);
        res.status(500).json({
            success:false,
            message:"internal server error"
        })
      }
}
const updateUser=async (req,res)=>{
    try {
        const {firstName,lastName,email,password,contactNo}=req.body;
        const userId=req.params.id;
        const updatedUser=await user.findByIdAndUpdate(userId,{firstName,lastName,email,password,contactNo},{new:true})
        if (!updatedUser) {
            return res.status(404).json({
                success: false,
                message: "User not found"
            });
        }
        res.status(200).json({
            success:true,
            data:updatedUser,
            message:"user updated succesfully"
        })
        
    } catch (error) {
       console.log(error);
        res.status(500).json({
            success:false,
            message:"internal server error"
        })
    }
}
const deleteUserById= async(req,res)=>{
    try {
        const userId=req.params.id;
        const deletedUser=await user.findByIdAndDelete(userId);
        res.status(200).json({
            success:true,
            data:deletedUser,
            message:"user deleted succesfully"
        })

    } catch (error) {
        console.log(error);
        res.status(500).json({
            success:false,
            message:"internal server error"
        }) 
    }
}
const getAllUser= async (req,res)=>{
    try{
      const users=await user.find();
      if(!users){
        return res.status(201).json({
            success:false,
            message:"no users found in db"
        })
      }
      res.status(200).json({
        success:true,
        data:users,
        message:"users fetch successfully "
      })
    }catch(error){
    console.log(error);
    res.status(500).josn({
        success:false,
        message:"internal server error"
    })
    }
}
module.exports={
    addUser,
    getAllUser,
    getUserById,
    updateUser,
    deleteUserById
    
}
