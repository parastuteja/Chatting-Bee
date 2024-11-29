const { register } = require("../Controller/userController")
const express=require("express")
const router=require('express').Router()
router.post("/register",register)

module.exports=router;