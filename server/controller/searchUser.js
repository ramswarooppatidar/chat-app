const UserModel = require('../models/userModel')
async function searchuser(req, res){
    const {search} = req.body;
    try{
        const query = new RegExp(search, "i", "g")
        console.log("inside searchUser ",query)
        const user = await UserModel.find({
            '$or' : [
                {name : query},
                {email : query}
            ]
        }).select("-password")


        console.log("inside searchUser ")
        return res.json({
            message : "all user",
            data : user,
            success : true
        })
    }catch(error){
        return res.status(500).json({
            message : error.message || error,
            error : true
        })
    }
}
module.exports = searchuser