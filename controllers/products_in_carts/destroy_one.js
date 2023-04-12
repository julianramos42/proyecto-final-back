import Product_in_carts from '../../models/Product_in_carts.js'

async function destroy_one(req, res, next) {
    try {
        let product = await Product_in_carts.findOneAndDelete({ _id: req.params.productid, user_id: req.user._id })
        if (product) {
            return res.status(200).json({
                success: true,
                message: 'Product deleted successfully'
            })
        } else {
            return res.status(404).json({
                success: false,
                message: 'Product not found'
            })
        }
    } catch (err) {
        next(err)
    }
}

export default destroy_one