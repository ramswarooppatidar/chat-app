const getUserDetailsFromToken = require('../helper/getUserDetails')
async function userDetails(req, res){
    try{
        console.log("req.cookie :", req.cookies)
        console.log("req.cookie :", req.cookies.csrftoken)
        const token = req.cookies.token || "";
        const userDetails = await getUserDetailsFromToken(token)
        return res.status(200).json({
            message : "user - Details",
            data : userDetails,

        })

    }catch(error){
        return res.status(500).json({
            message : error.message,
            error : true
        })
    }
}
module.exports = userDetails