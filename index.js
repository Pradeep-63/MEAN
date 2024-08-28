const express=require('express')
const app=express();
const {dbConnect}=require('./config/database')
require('dotenv').config();
const admin=require('./routes/admin')
const Class=require('./routes/teacher')
const parent=require('./routes/parent')
const student=require('./routes/student')
app.use(express.json())
const PORT = process.env.PORT || 4000;
const cookieParser = require('cookie-parser');
app.use(cookieParser());
app.use("/api/v1/users",admin)
app.use('/api/v1/users/classes',Class)
app.use('/api/v1/parents',parent)
app.use('/api/v1/users/students',student)

app.listen(PORT, () => {
    console.log(`app is running at portno ${PORT}`)
})
dbConnect();
