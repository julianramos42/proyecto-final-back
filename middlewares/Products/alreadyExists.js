import Shop from '../../models/Shop.js'
import Product from "../../models/Product.js"

async function alreadyExists(req, res, next) {
        try{
            const shop = await Shop.findOne({ user_id: req.user._id })
            const existsProduct = await Product.findOne({ name: req.body.name, store_id: shop._id})
            
            if (existsProduct){
                let stock = existsProduct.stock + req.body.stock
                const product = await Product.findOneAndUpdate(
                    { _id: existsProduct._id },
                    {stock: stock },
                    {new:true})
                return res.status(200).json({
                    success: true,
                    message: "Product already exists, the stock is added "
                    })
            }else{
                next()
            }
        }catch(error){
            next(error)
        }
}

export default alreadyExists