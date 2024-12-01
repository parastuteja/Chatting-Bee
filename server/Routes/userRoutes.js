const { default: SetAvatar } = require("../../public/src/pages/SetAvatar")
const { register } = require("../Controller/userController")
const { login } = require("../Controller/userController")
const express=require("express")
const router=require('express').Router()
router.post("/Register",register)
router.post("/Login",login)
router.post('/SetAvatar',SetAvatar)
module.exports=router;