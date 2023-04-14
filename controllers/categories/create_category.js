import Shop from "../../models/Shop.js"
import Category from "../../models/category.js"

const controller = {
    create: async(req, res, next) =>{
        try{
            let shop = await Shop.findOne({user_id: req.user._id})

            req.body.store_id= shop._id

            await Category.create(req.body)
            return res.status(201).json({
                success: true,
                message: "New category created",
            })
        }catch(error){
            next(error)
        }
    }
}

export default controller