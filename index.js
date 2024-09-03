const express=require('express')
const app=express();
const {dbConnect}=require('./config/database')
require('dotenv').config();
const swaggerUI=require('swagger-ui-express')
const swaggerDocument = require('./swagger-output.json');
const admin=require('./routes/admin')
const Class=require('./routes/teacher')
const parent=require('./routes/parent')
const student=require('./routes/student')
app.use(express.json())
const PORT = process.env.PORT || 4000;

const cookieParser = require('cookie-parser');
app.use(cookieParser());
app.use("/api/v1",admin)
app.use('/api/v1',Class)
app.use('/api/v1',parent)
app.use('/api/v1',student)
app.use("/api-docs",swaggerUI.serve,swaggerUI.setup(swaggerDocument))
app.listen(PORT, () => {
    console.log(`app is running at portno ${PORT}`)
})
dbConnect();
