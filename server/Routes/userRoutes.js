const {setAvatar}=require('../Controller/userController')
const { register } = require("../Controller/userController")
const { login } = require("../Controller/userController")
const express =require('express')
const router=express.Router()
router.post("/Register",register)
router.post("/Login",login)
 router.post('/SetAvatar/:id',setAvatar)
module.exports=router;