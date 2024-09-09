// import UserModel from "../models/userModel";
const UserModel = require('../models/userModel')
const bcryptjs = require('bcryptjs');

async function registerUser(req, res){
    try{
        const {name, email , password, profile_pic} = req.body;
        console.log(name, password, email);
        const checkEmail =  await UserModel.findOne({email})
        if(checkEmail){
            return res.status(400).json({
                message : "user already exits !",
                error : true
            })
        }

        //hashpasword
        console.log("hash Paswword :")
        const salt  = await bcryptjs.genSalt(10)
        console.log("hash Paswword :", salt)
        const hashpasword = await bcryptjs.hash(password, salt)
        console.log("hash Paswword :", hashpasword)
        const payload={
            name,
            email,
            password : hashpasword,
            profile_pic
        }

        const user = new UserModel(payload)
        const userSave = await user.save();
        console.log("user save :", userSave)

        return res.status(201).json({
            message : "user is created successfully",
            data : userSave,
            success : true
        })
    }catch(error){
        return res.status(500).json({
            message : error.message || error,
            error : true
        })
    }
}
module.exports = {
    registerUser
};