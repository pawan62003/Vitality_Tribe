const express=require("express");
const { UserModel } = require("../models/User.model");
const userRouter=express.Router()
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

userRouter.post("/register",async(req,res)=>{
    const {email,pass,firstname,lastname}=req.body
    const user = await UserModel.findOne({email:email});
    console.log(user);
    if(user==null){
    try {
        bcrypt.hash(pass, 5, async(err, hash)=> {
            const user=new UserModel({email,firstname,lastname,pass:hash});
            await user.save()   
            res.status(200).send({"msg":"Added new User"})
            
        });
    } catch (err) {
        res.status(200).send({"err":err.message})

    }
  }else{
    res.status(200).send({"msg":"User alredy exists"});
  }
})

userRouter.post("/login",async(req,res)=>{
    try {
       const {email,pass}=req.body;
       console.log(req.body);
       const user=await UserModel.findOne({email})
       if(user){
           bcrypt.compare(pass, user.pass, (err, result)=> {
            console.log(result)
            if(result){
                token = jwt.sign({userID:user._id,user:user.firstname}, 'masai');
                res.status(200).send({"msg":"Login Successfull","token":token})
            }else{
                res.status(200).send({"msg":"Wrong Password!!"})
               }
        });
        
       }else{
        res.status(200).send({"msg":"Wrong Credentials!!"})
       }
    } catch (err) {
        res.status(200).send({"err":err.message})
    }
    console.log("last");
})

module.exports={
    userRouter
}