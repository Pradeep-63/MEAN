const apiResponse=async (res,status,message,data=undefined,error=undefined)=>{
    res.status(status).send({status,message,data,error})
}
module.exports={apiResponse}