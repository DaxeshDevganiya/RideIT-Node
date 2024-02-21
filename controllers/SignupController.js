const User=require('../models/UserModel');
const bcrypt=require('bcrypt');
module.exports= async(req,res)=>{
try{
 const {firstname,lastname,email,password,role}=req.body;
 const passowrdHashed=await bcrypt.hash(password,10);
 const user=new User({firstname,lastname,email,password:passowrdHashed,role});
 await user.save();
 res.status(200).json({"message":"User Signup successfully","status":200});

}catch(error){
    console.log(error);
    res.status(500).json({"message":error,"Status":400});
}
}