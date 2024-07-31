import express from 'express'
const app = express();
app.use(express.json());
import dotenv from 'dotenv'
dotenv.config()
import userRoute from './routes/user.js'
app.use('/api/v1',userRoute);
app.get('/',(req,res)=>{
   res.send("hello")
})
const PORT=process.env.PORT
app.listen(PORT,()=>{
    console.log(`server started at port no ${PORT} `);
})
