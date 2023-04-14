import Product from '../../models/Product.js'

async function get_all_products(req, res, next){
    try{
        let filter = {}

        if (req.query.name) {
            filter.name = new RegExp(req.query.name.trim(), "i");
        }

        let cantProducts = await Product.countDocuments()
        let products = await Product.find(filter)
        if(products){
            return res.status(200).json({
                success: true,
                products,
                cantProducts
            })
        }
    }catch(err){
        next(err)
    }
}

export default get_all_products