import Product_in_carts from '../../models/Product_in_carts.js'
import Shop from "../../models/Shop.js"

const controller = {
    createCartProduct: async(req, res, next) =>{
        try{
            let shop = await Shop.findOne({_id: req.params.id})
            req.body.store_id= shop._id
            req.body.user_id = req.user._id

            await Product_in_carts.create(req.body)
            return res.status(201).json({
                success: true,
                message: "New product add to cart",
                data: req.body
            })
        }catch(error){
            next(error)
        }
    }
}

export default controller