import Product from '../../models/Product.js'

async function getOne(req, res, next) {
    try{
            const product = await Product.findOne({ _id: req.params.id})

            if(Product){
                return res.status(200).json({
                    success: true,
                    product: product
                })
            }else{
                return res.status(404).json({
                    success:false,
                    message: "Products not found"
                })
            }
    }catch(error){
        next(error)
    }
}

export default getOne