const express=require('express');
const app=express();
require('dotenv').config();
//middleware
app.use(express.json());
//get route
app.get('/',(req,res)=>{
    res.send("Welcome to Home Page");
})
//post route
app.post('/profile',(req,res)=>{
    const {name,email}=req.body;
    res.send({name,email});
})
app.listen(process.env.PORT,()=>{
    console.log(`server started at port no ${process.env.PORT}`);
})