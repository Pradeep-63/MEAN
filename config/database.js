const mongoose=require('mongoose');
require('dotenv').config()

const dbConnect=()=>{

    mongoose.connect(process.env.DATABASE_URL)
    .then(()=>console.log("Database connected succesfully"))
    .catch((err)=>{
        console.log("database connection failed")
        console.log(err);
        process.exit(1);
    })

}
module.exports=dbConnect;
