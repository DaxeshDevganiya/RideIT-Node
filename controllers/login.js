const User=require("../models/UserModel");
const bcrypt=require("bcrypt");

module.exports=async(req,res)=>{
    try{
       
        const user=await User.findOne({email:req.body.email});
        if(user){
            const matchPassword=await bcrypt.compare(req.body.password,user.password);
            if(matchPassword){
                
                res.status(200).json({ "message":"Login successfully","Status":200,"Data":user });
            }else{
                res.status(500).json({"message":"password wrong","Status":401});
            }
        }else{
            res.status(500).json({"message":"User not exist","Status":400});
        }
    }catch(error){
        console.log(error);
        res.status(500).json({"message":error,"Status":500});
    }
}