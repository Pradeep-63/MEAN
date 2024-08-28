const mongoose=require('mongoose')
const dbConnect=async()=>{
    mongoose.connect(process.env.DATABASE_URL)
    .then(()=>console.log("database connected successfully"))
    .catch((error)=>console.log("database connection failed"))
}
module.exports={dbConnect}