import Product from "../../models/Product.js"
import Shop from '../../models/Shop.js'

const controller = {
    destroy_all: async (req,res,next) => {
        try{
            const shop = await Shop.findOne({ user_id: req.user._id })

            if(shop){

                let product = await Product.deleteMany({store_id: shop._id})
                if(product){
                    return res.status(200).json({
                        success: true,
                        message: 'Products deleted successfully'
                    })
                }else{
                    return res.status(404).json({
                        success: false,
                        message: 'Products not found'
                    })
                }
            }
        }catch(err){
            next(err)
        }
    }
}

export default controller