import Shop from "../../models/Shop.js";
import Product from "../../models/Product.js"

const controller = {
    destroy: async (req,res,next) => {
        try{
            let shop = await Shop.findOneAndDelete({ user_id: req.user._id })
            if(shop){
                await Product.deleteMany({store_id: shop._id})
                return res.status(200).json({
                    success: true,
                    message: 'Shop deleted successfully'
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