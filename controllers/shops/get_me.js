import Shop from "../../models/Shop.js";

const controller = {
    me: async(req,res,next) => {
        try{
            let shop = await Shop.findOne({ user_id: req.user._id })
            if(shop){
                return res.status(200).json({
                    success: true,
                    shop
                })
            }
            return res.status(404).json({
                success: false,
                message: 'Shop not found'
            })
        }catch(err){
            next(err)
        }
    }
}

export default controller