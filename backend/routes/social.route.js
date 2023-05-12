const express=require("express");
const { SocialModel } = require("../models/social.model");
const socialRouter=express.Router();

socialRouter.get("/",async(req,res)=>{
   // const userID=req.body.userID;
    try{
       const dashboard=await SocialModel.find();
       res.send(dashboard);
    }catch(err){
        res.send(err.message);
    }
})

socialRouter.post("/add",async(req,res)=>{
    const userID=req.body.userID;
    const data= await SocialModel.findOne({userID:userID})
    
    if(data){
        try{
        await SocialModel.findByIdAndUpdate({_id:data._id},req.body)
        res.status(200).send({"msg":`The account with id:${userID} has been updated`})
    }catch(err){
        res.send(err.message);
    }
    }else{
        try{
        let data=new SocialModel(req.body);
         await data.save();
         res.send("Added in Social");            
    }catch(err){
        res.send(err.message);
    }
    }
    
  

})


module.exports={
    socialRouter
}



