import Shop from '../../models/Shop.js'
import Product from "../../models/Product.js"

async function alreadyExists(req, res, next) {
    try{
        const shop = await Shop.findOne({ _id: req.params.id })

        if(shop){
            const Products = await Product.find({ store_id: shop._id})

            if(Products){
                return res.status(200).json({
                    success: true,
                    products: Products
                })
            }else{
                return res.status(404).json({
                    success:false,
                    message: "Products not found"
                })
            }
            
        }else{
            return res.status(404).json({
                success:false,
                message: "Shop not found"
            })
        }

    }catch(error){
        next(error)
    }
}

export default alreadyExists