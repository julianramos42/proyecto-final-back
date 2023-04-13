import User from "../../models/User.js";

async function is_admin(req,res,next){
    const user = await User.findOne({_id: req.user._id})
    if(user.is_admin){
       return next()
    }
    return res.status(500).json({
        success: false,
        message: 'You are not an admin'
    })
}

export default is_admin