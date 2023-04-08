import Product from '../../models/Product.js'
import createError from 'http-errors';

const controller = {
    get_products: async (req,res,next) => {
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
            let get_products = await Product.find({...filter,store_id: req.query.store_id})
                .select('name photo price description stock category _id')
                .sort({name:sort})
                // .sort({title:1})
                // .skip( skip )
                // .limit(pagination.limit > 0 ? pagination.limit : 0 )
                


            if (get_products.length){
                return res
                .status(200)
                .json({ 
                    success:true,
                    products: get_products
                })
            }
            return next(createError(404, 'Products does not exist'))
            
        }catch(err){
            next(err)
        }
    }
}

export default controller