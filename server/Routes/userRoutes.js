const { register } = require("../Controller/userController")
const { login } = require("../Controller/userController")
const express=require("express")
const router=require('express').Router()
router.post("/Register",register)
router.post("/Login",login)

module.exports=router;