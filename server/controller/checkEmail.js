const UserModel = require("../models/userModel");

async function checkEmail(req, res){
    try{
        const {email} = req.body;
        const checkEmail = await UserModel.findOne({email}).select('-password')
        if(!checkEmail){
            return res.status(500).json({
                message : "email is not exist",
                error : true
            })
        }
        return res.status(200).json({
            message : "email is exist",
            success : true,
            data : checkEmail
        })
    }catch(error){
        return res.status(500).json({
            message : error.message || error,
            rerror : true
        })
    }
    
}
module.exports = checkEmail