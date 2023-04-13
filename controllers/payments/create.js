import Payment from "../../models/Payment.js";
import Shop from '../../models/Shop.js'

const controller = {
    create: async(req,res,next) => {
        try{
            let shop = await Shop.findOne({_id: req.params.shopid})
            req.body.store_id= shop._id
            req.body.user_id = req.user._id
            
            if(shop){
                await Payment.create(req.body)
                return res.status(201).json({
                    success: true,
                    message: 'Payment created'
                })
            }else{
                return res.status(404).json({
                    success: false,
                    message: 'Shop not found'
                })
            }
        }catch(err){
            next(err)
        }
    }
}

export default controller