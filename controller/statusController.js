const User=require('../model/user')
const Status=require('../model/tasks')
const statusHandler= async (req,res)=>{
   try{
     const {user,title,success,}=req.body;
     const status=await Status.create({user,title,success});
     console.log(user);
     console.log(status._id);
      const updatedUser=await User.findByIdAndUpdate(
        user,{$set:{userStatus:status._id} },{new: true}

      )
      .populate("userStatus") 
      .exec();
      
      res.json({
        data:updatedUser
      })
      
   }catch(error){
      res.status(500).json({
        success:false,
        message:"Internal server error he"
      })
   }
}
module.exports=statusHandler