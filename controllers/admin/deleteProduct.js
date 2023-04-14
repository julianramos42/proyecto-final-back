import Product from '../../models/Product.js'

async function deleteProduct(req, res, next) {
    try {
        let product = await Product.findOneAndDelete({ _id: req.params.productid })
        if (product) {
            return res.status(200).json({
                success: true,
                message: 'Product deleted'
            })
        }
        return res.status(404).json({
            success: false,
            message: 'Product not found'
        })
    } catch (err) {
        next(err)
    }
}

export default deleteProduct