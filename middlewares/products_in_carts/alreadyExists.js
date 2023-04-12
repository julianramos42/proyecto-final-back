import Shop from '../../models/Shop.js'
import Product_in_carts from '../../models/Product_in_carts.js'

async function alreadyExists(req, res, next) {
        try{
            const shop = await Shop.findOne({ _id: req.params.id })
            if (shop){

                const existsProduct = await Product_in_carts.findOne({ title: req.body.title, store_id: shop._id})
                
                if (existsProduct){
                    let quantity = existsProduct.quantity + req.body.quantity
                    const product = await Product_in_carts.findOneAndUpdate(
                        { _id: existsProduct._id },
                        {quantity: quantity },
                        {new:true})
                    return res.status(200).json({
                        success: true,
                        message: "Product already exists, the quantity is added "
                        })
                }else{
                    next()
                }
            }else{
                return res.status(404).json({
                    success: false,
                    message: "Shop not found"
                    })
            }
        }catch(error){
            next(error)
        }
}

export default alreadyExists