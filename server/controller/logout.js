async function logout(req, res){
    try{
        const cookieOptions={
            http : true,
            secure : true
        }
        return res.cookie('token', '', cookieOptions).status(200).json({
            message : "logout",
            success : true
        })
    }catch(error){
        return res.status(500).json({
            messgae : error.message,
            error : true
        })
    }
   
}
module.exports = logout