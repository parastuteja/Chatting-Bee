const User=require('../model/userModel')
const bcrypt = require("bcrypt");


module.exports.register = async (req, res, next) => {
    try {
      const { username, email, password } = req.body;
      const usernameCheck = await User.findOne({ username });
      if (usernameCheck)
        return res.json({ msg: "Username already used", status: false });
      const emailCheck = await User.findOne({ email });
      if (emailCheck)
        return res.json({ msg: "Email already used", status: false });
      const hashedPassword = await bcrypt.hash(password, 10);
      const user = await User.create({
        email,
        username,
        password: hashedPassword,
      });
      delete user.password;
      return res.json({ status: true, user });
    } catch (err) {
      next(err);
    }
  };

module.exports.login = async (req, res, next) => {
    try {
      const { username,  password } = req.body;
      const users = await User.findOne({ username });
      if (!users)
        return res.json({ msg: "User Not Found Please Register Yourself", status: false });
      const isValidPassword = await bcrypt.compare(password, users.password);
      if(!isValidPassword){return res.json(
        {msg:'bad password please try again' , status:false})
      }
      const hashedPassword = await bcrypt.hash(password, 10);
     
      delete users.password;
      return res.json({ status: true, users });
    } catch (err) {
      next(err);
    }
  };
  module.exports.setAvatar =async (req,res) => {
    try{
const userid=req.params.id;
const avatar=req.body.image;
const avatarImage=req.body.image
const userData=await User.findByIdAndUpdate(userid,{
  isAvatarImageSet:true,
  avatarImage,
})
return req.json({
  isSet: userData.isAvatarImageSet,
  image:userData.avatarImage,
})
    }catch(ex){
      next(ex)
    }
  }
  module.exports.getAllusers=async(req,res,next)=>{
    try{
const users=await User.find({_id{$ne: req.params.id}}).select({
  
})
    }
    catch(ex){
next(ex)
    }
  }