const user=require('../model/user')
const checkemail=async (req,res)=>{
   try{
       const userId=req.params.id;
       const {email}=req.body
       console.log(userId);
       console.log(email);
       const response=await user.findByIdAndUpdate(userId,{ $set: {email:email}},{new:true})
        // const response=await user.find({_id:userId})
        res.status(200).json({
            data:response
        })
      
   }catch(error){
      res.status(500).json({
        success:false,
        message:"Internal server error he"
      })
   }
}
module.exports=checkemail;