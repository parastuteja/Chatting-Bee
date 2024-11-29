const express= require ('express');
const cors =require('cors')
const mongoose = require ("mongoose")

const route=require('./Routes/userRoutes')
const app=express();
require ('dotenv').config()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

app.use("/api/auth",route)
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB Connetion Successfull");
  })
  .catch((err) => {
    console.log(err.message);
  });

const server=app.listen(process.env.port,()=>{
    console.log(`server is connected on port${process.env.port}`)
})