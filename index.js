const express=require('express');
const app=express();
require('dotenv').config();
app.use(express.json());
const route=require('./routes/auth')
//get route
app.get('/',(req,res)=>{
    res.send("This is Homepage");
})
//middleware authentication
app.use('/api/v1',route)

app.listen(process.env.PORT,()=>{
    console.log(`server started at port no ${process.env.PORT}`);
})