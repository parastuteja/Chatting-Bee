const express= require ('express');
const cors =require('cors')
const mongoose = require ("mongoose")
const userRoutes =require('./Routes/userRoutes')

const app=express();
require ('dotenv').config()
app.use(cors())
app.use(express.json())
app.use("/api/auth",userRoutes)
mongoose.connect(process.env.MONGO_URL,{ 
}).then(()=>{
    console.log("db is connected")
}).catch((err)=>{
    console.log(err.message)
})
const server =app.listen(process.env.port,()=>{
    console.log(`server is connected on port${process.env.port}`)
})