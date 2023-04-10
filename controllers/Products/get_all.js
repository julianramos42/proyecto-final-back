import Shop from '../../models/Shop.js'
import Product from "../../models/Product.js"

async function get_all(req, res, next) {
    let filter = {}
    let sort 
    // let pagination = {
    //     page:1,
    //     limit:6
    // }
    
    // if(req.query.page){
    //     pagination.page = req.query.page
    // }
    // let skip = pagination.page > 1 ? (pagination.page-1)*pagination.limit : 0

    if(req.query.category){
        const categories = req.query.category.split(',');
        filter.category = { $in: categories };
        // pagination.limit=10
        
    }
    if(req.query.name){
        filter.name = new RegExp(req.query.name.trim(),'i') 
        // pagination.limit=10
        // skip = 0
    }
    if (req.query.sort){
        sort = req.query.sort
    }
    try{
        const shop = await Shop.findOne({ _id: req.params.id })

        if(shop){
            const Products = await Product.find({...filter, store_id: shop._id})
                .select('name photo price description stock category _id store_id')
                .sort({name:sort})
                // .sort({title:1})
                // .skip( skip )
                // .limit(pagination.limit > 0 ? pagination.limit : 0 )

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

export default get_all