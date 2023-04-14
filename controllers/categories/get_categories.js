import Category from "../../models/category.js"

const controller = {
    get_category: async(req, res, next) =>{
        try{
            let categories = await Category.find({store_id: req.params.shopid})
            if(categories){
                return res.status(200).json({
                    success: true,
                    categories
                })
            }
            return res.status(404).json({
                success: false,
                message: "Categories not found"
            })
        }catch(error){
            next(error)
        }
    }
}

export default controller