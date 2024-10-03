const UserModel = require("../models/userModel");
const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')

async function checkPassword(req, res){
    try{
        const {password , userId} = req.body;
        console.log("userId", userId)
        const user = await UserModel.findById(userId)
        console.log("user :", user)
        const verifyPassword = await bcryptjs.compare(password, user.password);
        if(!verifyPassword){
            return res.status(400).json({
                message : "enter correct password",
                error : true
            })
        }

        const tokenData={
            id : user._id,
            email : user.email
        }
        const token = await jwt.sign(tokenData, process.env.JWT_SECRET_KEY, {expiresIn:'1d'})

        const cookiesOption = {
            httpOnly : true,
            secure : false
        }
        // const cookiesOption = {
        //     httpOnly: true,
        //     secure: process.env.NODE_ENV === 'production', // Ensure secure cookies in production
        //     sameSite: process.env.NODE_ENV === 'production' ? 'None' : 'Lax' // Handle cross-origin in production
        // };
        return res.cookie('token', token, cookiesOption).status(200).json({
            message : "user login successfully",
            success : true,
            token : token
        })
    }catch(error){
        return res.status(500).json({
            message : error.message || message,
            error : true
        })
    }
}
module.exports = checkPassword