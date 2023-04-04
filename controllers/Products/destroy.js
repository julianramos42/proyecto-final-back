import Product from "../../models/Product.js"
import Shop from '../../models/Shop.js'

const controller = {
    destroy: async (req,res,next) => {
        try{
            const shop = await Shop.findOne({ user_id: req.user._id })

            if(shop){

                let product = await Product.findOneAndDelete({ _id: req.params.id })
                if(product){
                    return res.status(200).json({
                        success: true,
                        message: 'Product deleted successfully'
                    })
                }else{
                    return res.status(404).json({
                        success: false,
                        message: 'Product not found'
                    })
                }
            }
        }catch(err){
            next(err)
        }
    }
}

export default controller