const express=require('express');
const app=express();
const dbConnect=require('./config/database')
const userRoute=require('./routes/user')
app.use(express.json())
require('dotenv').config()

const port=process.env.PORT||4000
app.get('/',(req,res)=>{
    res.send("Welcome to Home Page")
})
 app.use('/api/v1',userRoute)

app.listen(port,()=>{
    console.log(`App is started at port no ${port}`);
})
dbConnect();