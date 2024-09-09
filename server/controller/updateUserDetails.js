const getUserDetailsFromToken = require("../helper/getUserDetails");
const UserModel = require("../models/userModel");

const updateUserDetails= async (req, res)=>{
    try{
        console.log("req.cookie :", req.cookies)
        const token = req.cookies.token || "";
        const user = await getUserDetailsFromToken(token)

        const {name , profile_pic}= req.body
        const userUpadte = await UserModel.updateOne({_id : user._id},{
            name,
            profile_pic
        })

        const updatedUser = await UserModel.findById(user._id);
        return res.status(200).json({
            message : "user update successfully",
            data : updatedUser
        })
    }catch(error){
        return res.status(500).json({
            message : error.message ,
            error : true
        })
    }
}
module.exports = updateUserDetails